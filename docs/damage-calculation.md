# ダメージ計算仕様

対象実装: `src/utils/combatCalculator.ts`

## 概要

このモジュールは、以下を一貫して扱う。

1. 与HPダメージ・与混乱ダメージの倍率計算
2. バリア・HP・体力・SAN への実ダメージ適用
3. ダメージ適用後のステータスフック呼び出し

主な公開関数は次の 2 つ。

- `applyDamage(input, options)`: 計算と実適用を行う
- 各種 `calc*Preview(...)`: フォーム表示用のプレビュー値を返す

## 入力

`DamageInput`

| 項目 | 型 | 内容 |
| --- | --- | --- |
| `attacker` | `Combatant` | 攻撃者 |
| `receiver` | `Combatant` | 防御者 |
| `sceneCombatants` | `ReadonlyArray<Combatant> \| undefined` | 実行時点のシーン上戦闘参加者。白化人数の集計に使用 |
| `baseDamage` | `number` | 基礎ダメージ |
| `directcheck` | `boolean \| undefined` | 直接攻撃判定。未指定時は `false` |
| `attackerBonusNormal` | `number \| undefined` | 攻撃者の通常倍率への追加補正(%) |
| `attackerBonusSpecial` | `number \| undefined` | 攻撃者の特殊倍率への追加補正(%) |

`DamageCalcOptions`

| 項目 | 型 | 内容 |
| --- | --- | --- |
| `random` | `() => number` | 0 以上 1 未満の乱数生成関数。未指定時は `Math.random` |

## 計算フロー

### 1. 攻撃者の通常倍率

```text
attackerNormalPercentage =
  DamageUp * 10
  - DamageDown * 10
  + (directcheck ? 50 : 0)
  + attackerBonusNormal
  + attackerWhitePercentage
```

- `DamageUp` 1 スタックにつき +10%
- `DamageDown` 1 スタックにつき -10%
- `directcheck = true` のとき固定で +50%

#### 白化の与ダメージ補正

`isPlayer = true` かつ `checkWhiteAlly` / `checkWhiteLeader` / `checkWhiteEnemy`
のいずれかが真の攻撃者に適用する。

```text
attackerWhitePercentage =
  シーン上にいる自分以外の白化プレイヤー数 * 5
```

- Actor ID で重複を除外する
- HP を条件にしないため死亡者も人数に含む
- 非表示トークンも人数に含む
- 敵 (`isPlayer = false`) は人数にも効果対象にも含めない
- 算出値を Actor のステータスへ保存しない

### 2. クリティカル率

```text
criticalChance = min(Poise * 5 + Sword, 100)
```

- `Poise` 1 スタックにつき +5%
- `Sword` 1 スタックにつき +1%
- 上限は 100%

### 3. 攻撃者の特殊倍率

乱数判定で `roll < criticalChance` のときクリティカル成立。

```text
attackerSpecialBase = critical ? 20 + floor(Sword / 2) : 0
attackerSpecialPercentage = attackerSpecialBase + attackerBonusSpecial
```

- クリティカルしなければ特殊倍率は 0%
- クリティカル時は固定 +20% に加え、`Sword / 2` の切り捨て分を加算

### 4. 防御者の通常倍率

```text
receiverNormalPercentage =
  Protection * 10
  - Vulnerable * 10
  - receiverWhitePercentage
```

- `Protection` 1 スタックにつき被ダメージ -10%
- `Vulnerable` 1 スタックにつき被ダメージ +10%
- `receiverWhitePercentage` は白化の与ダメージ補正と同じ人数規則で算出する

### 5. 防御者の特殊倍率

HP ダメージ用:

```text
receiverSpecialPercentage =
  constitution <= 0
    ? -100
    : (isPlayer ? resist : resistEnemy)
```

混乱ダメージ用:

```text
receiverSpecialConfPercentage =
  constitution <= 0
    ? -100
    : (isPlayer ? confResist : econfResistEnemy)
```

- 防御者がプレイヤーならプレイヤー向け耐性を使う
- 敵なら敵向け耐性を使う
- `constitution <= 0` の場合は両方とも強制的に `-100%`
  - 結果として特殊倍率係数が最低でも `2.0` になる

### 6. 実際の倍率係数

```text
normalRatio = (100 + attackerNormalPercentage - receiverNormalPercentage) / 100
specialRatio = (100 + attackerSpecialPercentage - receiverSpecialPercentage) / 100
specialConfRatio = (100 + attackerSpecialPercentage - receiverSpecialConfPercentage) / 100
```

### 7. 計算ダメージ

```text
dealDamage =
  baseDamage * max(normalRatio, 0) * max(specialRatio, 0)

dealConfDamage =
  baseDamage * max(normalRatio, 0) * max(specialConfRatio, 0)
```

- 通常倍率または特殊倍率が 0 未満でも、最終的には `max(..., 0)` で 0 に丸める
- HP 用と混乱用で特殊倍率だけが別計算になる

## 実ダメージ適用順

`applyDamage(...)` は計算後、次の順で防御者へ反映する。

### 1. 小数点処理

```text
hpDamageCeil = ceil(dealDamage)
confDamageCeil = ceil(dealConfDamage)
```

どちらも切り上げ。

### 2. バリア吸収

```text
barrierAbsorbed = min(barrier, hpDamageCeil)
barrier -= barrierAbsorbed
remainingHpDamage = max(hpDamageCeil - barrierAbsorbed, 0)
```

- バリアは HP ダメージだけを吸収する
- 混乱ダメージはバリアで軽減しない

### 3. HP ダメージ

```text
hp -= remainingHpDamage
```

- `remainingHpDamage > 0` のときだけ適用
- この実装では 0 未満への下限制御をしていないため、過剰ダメージ時は `hpAfter` が負値になりうる

### 4. 混乱ダメージ(体力)

```text
appliedConfDamage = confDamageCeil * (doubleConstitution ? 2 : 1)
constitution = max(constitution - appliedConfDamage, 0)
```

- `doubleConstitution = true` なら体力ダメージを 2 倍
- 体力は 0 未満にならない

### 5. Sink(沈潜) の追加処理

防御者の `Sink` スタックが 1 以上なら、通常ダメージとは別に追加処理を行う。

1. `sink` 分だけ SAN を減らす
2. SAN で吸収しきれなかった残りを HP に与える
3. `Sink` は `floor(sink / 2)` に更新する

```text
sanAbsorbed = min(san, sink)
san -= sanAbsorbed
remainingSinkDamage = sink - sanAbsorbed

if (remainingSinkDamage > 0) {
  hp -= remainingSinkDamage
}

nextSink = floor(sink / 2)
```

- Sink ダメージはバリアを無視する
- Sink による HP 減少分は `hpDamageApplied` に加算される
- SAN ダメージ量は `sanDamageApplied` に記録される

## 戻り値

`DamageResult` には以下が含まれる。

- 各倍率のパーセンテージ値
- 各倍率係数
- 生ダメージ値: `dealDamage`, `dealConfDamage`
- クリティカル成否
- 実適用値: `barrierAbsorbed`, `hpDamageApplied`, `confDamageApplied`, `sanDamageApplied`
- 適用後値: `hpAfter`, `barrierAfter`, `constitutionAfter`, `sanAfter`

## ステータスフック

内部では `DamageEvent` を組み立て、全ステータス定義に対して次を順に呼ぶ。

1. 攻撃者側 `onMatchDamage`
2. 防御者側 `onMatchDamage`
3. 攻撃者側 `onDealDamage`
4. 防御者側 `onTakeDamage`

呼び出し対象は `statusDefinitions` の全要素で、各定義の該当ハンドラが存在する場合のみ実行される。

### 現時点でダメージ後フックを持つステータス

- `StackSealBleed`
  - 防御者側 `onTakeDamage` を持つ
  - 自身のスタックが 1 以上、かつ今回の攻撃がクリティカルなら発動
  - 防御者に `Bleeding` があれば、そのスタック値ぶん追加 HP ダメージを与える
  - 発動後、自身のスタックを 1 減らす

## 重要な挙動

### `result` はフック適用前のスナップショット

`DamageResult` と `DamageEvent` は、`onMatchDamage` / `onDealDamage` / `onTakeDamage` を呼ぶ前に作られる。

そのため、ダメージ後フックが HP・体力・SAN・バリアをさらに変更した場合:

- `result.hpAfter` などの戻り値
- `damageEvent.hpAfter` などのイベント値

はフック反映前の値のままになる。一方、返却される `receiver` オブジェクト自体はフック後の状態を持ちうる。

## プレビュー用関数

- `calcAttackerNormalPreview(attacker)`
  - `DamageUp * 10 - DamageDown * 10`
  - `directcheck` は含めない
- `calcAttackerSpecialPreview(_attacker)`
  - 常に `0`
- `calcAttackerCriticalChancePreview(attacker)`
  - `min(Poise * 5 + Sword, 100)`
- `calcReceiverNormalPreview(receiver)`
  - `Protection * 10 - Vulnerable * 10`
- `calcReceiverSpecialPreview(receiver)`
  - `constitution <= 0 ? -100 : (isPlayer ? resist : resistEnemy)`
