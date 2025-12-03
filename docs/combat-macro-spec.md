# 戦闘マクロ計算仕様（attack.js / deffence.js）

`docs/macro/attack.js` と `docs/macro/deffence.js` が意図している計算内容を整理したメモ。実装を変える場合はここを更新する。

## 用語
- 攻撃者: マクロ実行時に選択したアクター。攻撃マクロはこのアクターのステータスから倍率を算出し、GODアクターに書き込む。
- 受け手: 防御マクロ実行時に選択したアクター。GODアクターに保存された攻撃者倍率と、自身の防御倍率を使って被ダメージを決定する。
- GODアクター: `attack.js` が `attributes.normalDamagePercentage` / `attributes.specialDamagePercentage` を書き込み、防御側が読み取るキャッシュ用アクター。

## 攻撃マクロ（attack.js）
算出して GOD に書き込むだけで、HP などは変更しない。

### 通常ダメージ倍率（%）
`normalDamagePercentage` として GOD に保存。
- `stackDamageUp * 10`
- `- stackDamageDown * 10`
- `+ 50` if `directcheck` が真

### 特殊ダメージ倍率（%）
`specialDamagePercentage` として GOD に保存。
- `+ 20` if `criticalcheck` が真
- 呼吸判定: `stackpoise` > 0 のとき、`min(stackpoise * 5, 100)%` で追加クリティカルをロール。成功すれば `+ 20`。サウンド再生とメッセージ送信あり。

## 防御マクロ（deffence.js）
`scope.damage` に入力された素のダメージを受け取り、攻撃者倍率（GODから）と受け手の耐性から実ダメージを算出し、HP/CON/SANを更新する。結果はチャットへ送信。

### 入力と前提
- 実行時に選択されているトークンのアクターを「受け手」とする。未選択ならエラー通知。
- `scope.damage` に数値が入っていることを require。
- GOD アクターから以下を読む: `attributes.normalDamagePercentage`, `attributes.specialDamagePercentage`。

### 受け手側の倍率計算
- **通常倍率（%）** `calcNormalDamagePercentage`
  - `+ stackProtection * 10`
  - `- stackVulnerable * 10`
- **特殊倍率（%）** `calcSpecialDamagePercentage`
  - `resist`（プレイヤー）または `resistEnemy`（敵）を加算
  - `constitution <= 0` なら `-100`（特殊ダメージ無効）
- **特殊（耐性限界側）倍率（%）** `calcSpecialConfDamagePercentage`
  - `confResist`（プレイヤー）または `econfResistEnemy`（敵）を加算
  - `constitution <= 0` なら `-100`

### 実ダメージ計算
```
normalRatio     = (100 + attackerNormal% - receiverNormal%) / 100
specialRatio    = (100 + attackerSpecial% - receiverSpecial%) / 100
specialConfRatio= (100 + attackerSpecial% - receiverSpecialConf%) / 100

dealDamage      = baseDamage * max(normalRatio, 0) * max(specialRatio, 0)
dealConfDamage  = baseDamage * max(normalRatio, 0) * max(specialConfRatio, 0)
```
それぞれ端数は `Math.ceil` して適用。

### HPダメージ適用
1. バリアを先に減算（`min(barrier, damage)` を吸収）。
2. 残りを HP から引く。
3. `hp` / `barrier` を update。

### 耐性限界（CON）ダメージ適用
- `doubleconstitution` が 1 の場合は 2 倍で減算。
- `constitution` を 0 未満にならないよう更新。

### SAN 代替ダメージ（沈潜デバフ処理）
- `stacksink` > 0 のとき:
  - SAN からスタック分を差し引き、足りなければ残りを HP から引く（バリア無し）。
  - `stacksink` を半減（`Math.floor(stacksink / 2)`）して更新。
  - 通知を出す。

### 出力メッセージ
- 物理的実体へのダメージ（HP）と、耐性限界へのダメージ（CON）をチャットへ送信。

## 想定される実行フロー
1. 攻撃側ターン: 攻撃マクロ `attack.js` を実行し、攻撃者倍率を GOD に保存。
2. 防御側ターン: 防御マクロ `deffence.js` を実行し、入力ダメージと倍率を合成して被ダメージを適用。

## 補足
- バリアは受け手側の HP/CON ダメージ両方に対して「HP用ダメージ」にのみ影響（CONダメージはバリアを無視）。
- 特殊ダメージ無効化は `constitution <= 0` 判定で行うため、CON が尽きた状態は特殊攻撃に強い。
- 値の取得は `system.attributes.*.value` 前提。未定義の場合はデフォルト 0（攻撃側の一部はチェックで強制エラー）。*** End Patch*** End Patch 줘? Need correct format. Let's redo apply patch correctly. Need escape. Let's resend patch.     
