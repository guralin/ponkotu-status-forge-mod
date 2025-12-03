# ステータス一覧（FVTT マクロ用）

このモジュールのマクロ（特に `docs/macro/attack.js`, `docs/macro/deffence.js`, `docs/macro/EndProcess.js`）で参照している `system.attributes.*` を整理したメモです。値は多くが「スタック（整数）」で、`xxxnext` はターン開始時に本体のスタックへ加算してから 0 に戻します。

## 即時ダメージ計算で見る属性
- `stackDamageUp` / `stackDamageDown`: 攻撃マクロで通常ダメージ補正を算出（±10%/スタック）。ターン終了時に 0 へ。
- `directcheck`: 直接攻撃フラグ。true なら通常ダメージに +50%。
- `criticalcheck`: クリティカルフラグ。true なら特殊ダメージに +20%。
- `stackpoise`: 呼吸スタック。1 につき 5% でクリティカル（上限 100%）。ターン終了時に 1 減少。
- `stackProtection` / `stackVulnerable`: 防御/脆弱。防御は通常ダメージを 10% 減、脆弱は 10% 増。ターン終了時に 0。
- `isPlayer`: プレイヤーかどうかの判定。特殊ダメージ耐性や回復対象の選定に使用。
- `resist` / `resistEnemy`: 特殊ダメージ耐性値（%）。`isPlayer` でどちらを読むか分岐。
- `confResist` / `econfResistEnemy`: 耐性限界（混乱側）への特殊ダメージ耐性（%）。
- `constitution`: 耐性限界。0 以下で特殊ダメージ倍率を -100% 扱いに。
- `doubleconstitution`: true なら耐性限界ダメージを 2 倍で適用。
- `hp` / `barrier` / `san`: HP・バリア・SAN。被ダメージ処理や SAN 代替ダメージで参照。
- `normalDamagePercentage` / `specialDamagePercentage`: 攻撃マクロが GOD アクターに書き込み、防御マクロが読み取ってダメージ倍率を決定。

## ターン終了時に処理されるステータス（`EndProcess` turnEnd）
- `stackDarkFire`: 黒炎。`stackBurned` がある場合、両者を掛け算したダメージを与え、黒炎を 0 に。
- `stackBurned`: やけど。スタック分のダメージを与え、スタックを 2/3（切り捨て）に減少。
- `stackPoison`: 毒。スタック分ダメージを与え、スタックを半減。
- `stacktremor`: 振動。スタック分ダメージを与え、スタックを 2/3（切り捨て）に。
- `stackBleeding`: 出血。ダメージ処理はなく、スタックを約 2/3 に減らす。
- `stackSmoke`: 煙。`checkSora` があるキャラクターに +7 付与。現状は蓄積のみ。
- `stackSmokeGrand`: 濃密な煙。30 以上あるとターン開始時に威力上昇付与の条件になる。
- `stackFEOAwaken`: 覚醒。ターン終了時に 1 減少。
- `stackregen`: 再生。ターン終了時に 1 減少。ターン開始時に回復量へ使用。
- `stackbind`: 束縛。ターン終了時に 0。
- `stackParalysis` / `stackFear`: 麻痺/恐怖。ターン終了時に 0。
- `stackDamageUp` / `stackDamageDown` / `stackPowerUp` / `stackPowerDown` / `stackProtection` / `stackVulnerable`: バフ/デバフ各種。ターン終了時に 0。
- `stackpoise`: 呼吸。ターン終了時に 1 減少。
- `stacksink`: 沈潜。`checknk` があれば +2、それ以外は -1。別マクロの SAN/HP ダメージ処理に利用。
- `stackSinsyoku`: 侵食。スタックが 3 以上かつ `checkAnri` が 0 のとき、HP と耐性限界にスタック値ダメージを与える。
- `stackfrenzy`: 狂乱。`checkfrenzy` を持ち、HP が最大の半分以下なら +1。
- `stackBleeding` / `stackBurned` / `stackPoison` / `stacktremor`: 上記の通りダメージや減衰を実施後、状態は次ラウンドに持ち越し。
- `barrier`: ターン終了時に強制的に 0（バリア持ち越しなし）。
- `stackFEOAwaken`: ターン終了時に 1 減少。

## ターン開始時に処理されるステータス（`EndProcess` turnStart）
- 付与予約（`xxxnext`）: `stackBleedingnext`, `stackBurnednext`, `stackPoisonnext`, `stackPowerUpnext`, `stackProtectionnext`, `stackDamageUpnext`, `stackPowerDownnext`, `stackVulnerablenext`, `stackDamageDownnext`, `stackFearnext`, `stackParalysisnext`, `stackpoisenext`（呼吸）, `stacktremornext`, `stacksinknext`, `stackbindnext`, `stackregennext`, `stackbiribirinext`, `stackFEOAwakenNext` を本体スタックに加算して 0 に戻す。
- `stackregen`: 回復処理。最大 HP の 5% × スタック分を回復（スタックはこのタイミングでは減らさない）。
- `stackregennext`: 再生スタックの追加予約。ターン開始で `stackregen` に変換。
- `stackbindnext`: 束縛付与予約。ターン開始で `stackbind` へ。
- `stackBleedingnext` / `stackPoisonnext` / `stackBurnednext`: 出血/毒/やけど付与予約。ターン開始で各本体スタックへ。
- `stackPowerUpnext` / `stackPowerDownnext` / `stackDamageUpnext` / `stackDamageDownnext` / `stackProtectionnext` / `stackVulnerablenext`: 威力・ダメージ・防御系の付与予約。
- `stackFearnext` / `stackParalysisnext`: 恐怖・麻痺の付与予約。
- `stackpoisenext`: 呼吸スタックの追加予約。
- `stacktremornext`: 振動付与予約。
- `stacksinknext`: 沈潜付与予約。
- `stackbiribiri` / `stackbiribirinext`: 充電系スタック。現マクロでは付与とリセットのみ（効果は別途）。
- `stackFEOAwaken` / `stackFEOAwakenNext`: 覚醒スタックとその予約。
- `stackDarkFire`: ターン開始時に 0 にリセット。
- `stackwitch1`: 呪詛。スタック × 現在 HP × 2% のダメージを適用。
- `stackProtection`: `checkhitan` があり、既存の保護が 1 以下なら 1 にセット。
- `stackfrenzy`: ターン開始時に `stackDamageUp` と `stackVulnerable` を同数だけ上乗せ。
- `stackSinsyoku`: ターン開始時に `stackDamageUp` を同数だけ上乗せ。
- `checkSora` + `stackSmokeGrand`: 両条件を満たすプレイヤー全員に `stackPowerUp` を +1。

## 判定・トリガー用フラグ
- `checkfrenzy`: HP 半分以下のとき狂乱を増やすかどうか。
- `checkAnri`: 侵食ダメージを無効化するかの判定（1 以上で無効）。
- `checknk`: 沈潜増加のトリガー。
- `checkSora`: 煙付与と煙による威力上昇のトリガー。
- `checkseikou`: 1 につきランダムなプレイヤーに 1〜2 回復を行う回数。
- `checkhitan`: 悲嘆。保護スタックを最低 1 にする。

（上記にないステータスが追加された場合は、このファイルに追記してください）
