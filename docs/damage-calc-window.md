# ダメージ計算ウィンドウ（React）

GODアクターに依存せず、攻撃者と防御者を選んでダメージ計算・適用する専用ウィンドウ。

## 使い方
1. シーン上に 2 体以上のトークンがいる状態にする。
2. コンソール/マクロから `game.modules.get("ponkotu-system")?.api?.showDamageCalc()` を実行（または `ponkotuSystem.showDamageCalc()`）。
3. ウィンドウ内で攻撃者と防御者をプルダウンで選択し、基礎ダメージを入力して「計算して適用」を押す。
4. 結果（HP/バリア/CON/SAN への反映）がチャットに出力され、UI内にも倍率と適用後の残量が表示される。

## 計算ロジック
- 攻撃者倍率: `stackDamageUp/Down`, `directcheck`, `criticalcheck`, `stackpoise` に基づき、`attack.js` 相当の通常/特殊%を算出（呼吸は確率で追加クリティカル）。
- 防御者倍率: `stackProtection/Vulnerable`、`resist/resistEnemy`、`confResist/econfResistEnemy`、`constitution` を読み、`deffence.js` 相当の倍率を算出。
- 実ダメージ: `(基礎ダメージ) * max(通常係数,0) * max(特殊係数,0)` を HP に、耐性限界側も同様に計算。端数は切り上げ。
- 適用: バリア吸収→HP減少、`doubleconstitution` なら CON 減少を 2 倍、`stacksink` があれば SAN→HP への代替ダメージと半減処理を実施。
- メッセージ: 攻撃者→防御者へのダメージ詳細を ChatMessage へ送信。

## 想定シナリオ
- GODアクターを介さずに、選択トークン間で即時計算をしたい場合。
- 旧マクロの運用と併用する場合でも衝突しない（別 API で動作）。
