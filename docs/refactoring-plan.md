# 全体リファクタリング計画

作成日: 2026-07-07
対象: ponkotu-system 全体(src / module.json / templates / scripts / docs / test)

## 目的

長年の増改築で蓄積した重複・死にコード・レイヤの歪みを、**動作を変えずに**段階的に解消する。
方針は AGENTS.md に従い、DDD(エリック・エヴァンス)の境界づけと、テストによる仕様の固定(TDD)を軸にする。

## 現状ベースライン(2026-07-07 時点)

| 項目 | 状態 |
|---|---|
| `npm run typecheck` | ✅ エラーなし |
| `npm run lint` | ✅ エラーなし |
| `npm test` | ✅ 5ファイル 45テスト成功 |
| src 総行数 | 約2,900行(38ファイル) |
| dist | `dist/index.js` が git 管理下(ビルド成果物のコミット運用) |

**大原則: 各フェーズ完了時点で typecheck / lint / test がすべて green であること。**
フェーズをまたぐ変更は行わず、1フェーズ = 1つ以上のPR(またはコミット群)として独立にレビュー・巻き戻し可能にする。

---

## 調査で発見した問題の全リスト

### 🐛 実バグ・実不整合(リファクタ前に扱いを決める)

| # | 内容 | 場所 |
|---|---|---|
| B1 | `StackSealBleed` が `hasPending: true` なのに `attribute.pending` が未定義。`collectStatusMappingIssues` が検出する不整合が現に存在する | `src/domain/status/StatusDefinitions.ts:292-308` |
| B2 | B1 を検出するはずの検証が、PoC 残骸である `ReactFormApplication`(SimpleForm)を開いたときにしか実行されない。通常運用では誰も気づけない | `src/application/ReactFormApplication.tsx:25` |
| B3 | `module.json` に `scripts` キーが**二重定義**(`["scripts/debug-log.js"]` と `[]`)。後者が勝つため `debug-log.js` は実際には読み込まれていない | `module.json` |
| B4 | `module.json` の `templates` に `status-apply.html` が含まれていない(`react-form.html` と `damage-calc.html` のみ) | `module.json` |
| B5 | スタック正規化関数が2つあり丸め方向が異なる。`StatusSet` は `Math.floor`、`StatusDefinitions` は `Math.ceil`。同名 `normalizeStack` で挙動が違うのは事故のもと | `src/domain/status/StatusSet.ts:4` / `StatusDefinitions.ts:5` |

### 💀 死にコード・PoC残骸

- **D1**: `SimpleForm` + `ReactFormApplication` + `templates/react-form.html` — チャットにメモを流すだけの PoC。実運用機能ではない(検証ダイアログの起動場所になってしまっている点だけ B2 として扱う)
- **D2**: `scripts/debug-log.js` — esmodule 配信確認用のデバッグスクリプト。B3 の通り現在は読み込まれてすらいない
- **D3**: `calcAttackerSpecialPreview` — 常に `0` を返すだけの関数(`combatCalculator.ts:129`)
- **D4**: `docs/spec.md` — 削除済みイベントシステム(`priority` / `cancelable` / EventTrigger)の構想メモ。実装と完全に乖離(コミット `a6704e1` / `b550224` で event 関連は削除済み)
- **D5**: `ICombatantRepository.save(record)` — `saveActor` とほぼ同じで使用箇所が限定的

### 🔁 二重管理・コピペ重複

- **R1**: `statusIds` 配列(`StatusId.ts`)と `statusDefinitions` の id 一覧が**手動二重管理**。片方に追加し忘れる構造
- **R2**: `hasPending` フラグと `attribute.pending` の有無が二重管理。実行時検証(`statusMappingValidation.ts`)で辻褄を合わせているが、型で表現すれば検証ごと不要
- **R3**: `statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>` というキャストが **5ファイル以上に散在**(combatCalculator / TurnProcessor / CombatantRepository / combatantFromActor / statusMappingValidation / statusLibrary)。定義側の型を直せば全廃できる
- **R4**: `DamageResult` と `DamageResultViewModel` がフィールド完全一致の重複型。`toDamageResultViewModel` は18行の恒等マッピング。同様に `CombatantPreview`/`CombatantPreviewViewModel`、`StatusLibraryEntry`/`StatusLibraryEntryViewModel`(+ `toLibraryEntryViewModel`)も恒等コピー
- **R5**: `DamageResult` と `DamageEvent` もほぼ同一(`DamageEvent` は `baseDamage` を足しただけ)
- **R6**: 3つの Application クラス(`ReactFormApplication` / `DamageCalcApplication` / `StatusApplyApplication`)がテンプレートパス・タイトル・サイズ以外コピペ。React の mount/unmount 処理が3回書かれている
- **R7**: `templates/*.html` は3ファイルとも**中身が完全に同一**
- **R8**: `MODULE_ID = "ponkotu-system"` が4ファイルに重複定義
- **R9**: `useTurnProcessForm` の `runTurnStart` / `runTurnEnd` が約30行のコピペ(違いは `TurnProcessor.turnStart` か `turnEnd` かとメッセージ文言のみ)
- **R10**: `useDamageApplyForm` の attacker / receiver 読み込み `useEffect` がコピペ。`new CombatantRepository()` が同ファイルに3回
- **R11**: `applyDamage` 内のバリア吸収ロジックが `Combatant.applyHpDamage` と重複実装(手動で hp/barrier を計算してから `setHp`/`setBarrier` で書き戻す)
- **R12**: `calcAttackerNormal` と `calcAttackerNormalPreview` が directcheck の有無だけ違う重複

### 🏗️ レイヤ・責務の歪み(DDD観点)

- **L1**: `utils/combatCalculator.ts` — 「utils」という名前だが実質**ドメインサービス**(ダメージ計算の中核)。`domain/combat` に属すべき
- **L2**: `applyDamage` が「計算」「Combatant への適用」「状態異常イベント発火」を一手に担う。純粋計算と副作用が分離されていない
- **L3**: **沈潜(Sink)の処理だけ `applyDamage` にハードコード**。黒炎・出血などは `StatusDefinitions` のハンドラなのに、沈潜だけ計算機側にある。状態異常ロジックの置き場が一貫していない
- **L4**: `Combatant` のフィールドが全部 public + `setHp`/`setSan`/`setConstitution` が無条件セッター。不変条件(HP ≥ 0 など)を守る場所がない(`docs/combatant-design-issues.md` 課題A、未解決のまま)
- **L5**: 「ターン終了時にバリアを0にする」というドメインルールが `TurnProcessor.turnEnd` に無名でハードコード
- **L6**: `TokenOption` / `RANDOM_TARGET_OPTIONS` / ViewModel 群が `components/damageCalc/types.ts` に同居し、**application 層が components の型に依存**する逆流が常態化(ESLint のレイヤ制約は import 方向しか見ていないためすり抜けている)
- **L7**: フォルダ名 `damageCalc` の下に StatusApply / TurnProcess / StatusLibrary が同居(`application/damageCalc/useStatusApplyForm.ts` 等)。機能名とフォルダ名が一致していない
- **L8**: `index.ts` が import 時に副作用(`initializePonkotuSystem()` 即実行)
- **L9**: `useDamageApplyForm.run` がチャットメッセージの HTML 組み立て・通知・永続化まで抱えている(ユースケース層がない。StatusApply 側には `usecases/applyStatusStack.ts` があるのに Damage 側にはない、という非対称)

### 🧪 テスト・基盤の穴

- **T1**: `test/` が `tsconfig.json` の `include` 外 → テストコードは型チェックされていない
- **T2**: application 層フック(`useDamageApplyForm` / `useTurnProcessForm` / `useStatusLibrary`)にテストなし。ロジックが Foundry グローバル(`ui` / `game` / `ChatMessage`)と密結合でテスト不能な構造
- **T3**: `combatantFromActor` / `CombatantRepository`(属性名マッピングの塊)にテストなし
- **T4**: pending の処理順(stack へ合流 → onTurnStart)は実装依存(`combatant-design-issues.md` 課題C)。TurnProcessor.spec で一部固定済みだが明文化が不十分
- **T5**: CI 相当の仕組みなし(手元実行頼み)

### 📝 命名・ドキュメントの負債

- **N1**: FVTT 属性キーの命名が無法地帯: `stackpoise` / `stackBurned` / `stacktremor` / `checknk` / `stackFEOAwakenNext`(大文字N)など。**アクターデータ側の互換性があるため安易に変えられない** — コード側の「正規名 ↔ 属性キー」対応表として `StatusDefinitions` を明確に位置づける
- **N2**: `StatusId` 側にも揺れ: `checkSora`(小文字始まり)、`StackSealBleed`(Stack接頭辞つき)、`Witch1`
- **N3**: `directcheck` / `econfResistEnemy` / `doubleConstitution` などドメイン用語の英語名が不明瞭
- **N4**: `docs/statuses.md` はマクロ時代(docs/macro)基準のメモで、現実装との突き合わせがされていない

---

## フェーズ構成

依存関係と安全度の順に5フェーズ。**上から順に実施する**(後のフェーズは前のフェーズの成果を前提とする)。

```
フェーズ0: セーフティネット構築(仕様の固定)
    ↓
フェーズ1: 死にコード・設定の掃除(低リスク・即効)
    ↓
フェーズ2: 型の一元化(二重管理の解消)
    ↓
フェーズ3: ドメイン層の再設計(DDDの核心)
    ↓
フェーズ4: application / components 層の再構成
    ↓
フェーズ5: テスト・基盤の仕上げ(継続的な守り)
```

---

## フェーズ0: セーフティネット構築

**目的**: 以降のリファクタで「動作が変わっていないこと」を機械的に検証できる状態を作る。バグ B1 の仕様確認もここで済ませる。

### 作業項目

1. **B1 の仕様決定と修正**: `StackSealBleed`(呪印【出血】)に pending が必要か仕様を確認する。
   - pending 不要なら `hasPending: true` を削除、必要なら FVTT 側属性キーを決めて `attribute.pending` を追加。
   - どちらの場合も回帰テストを先に書く(呪印のクリティカル時挙動は `CombatCalculator.spec.ts` に追加)。
2. **test/ を型チェック対象に入れる**(T1): `tsconfig.json` の `include` に `test` を追加(`rootDir` は `vite` ビルドに影響するため、必要なら `tsconfig.build.json` を分離し `typecheck` はルートの tsconfig で src+test を見る構成にする)。
3. **キャラクタリゼーションテストの追加**: フェーズ3で触る箇所の現挙動をテストで固定する。
   - `applyDamage` の沈潜(Sink)処理: SAN 吸収 → HP 貫通 → スタック半減の順序
   - `applyDamage` のバリア吸収と HP 反映(hp がマイナスになり得る現挙動も含めそのまま固定)
   - `TurnProcessor.turnStart` の pending 合流順(T4 の明文化)
   - `SmokeGrand` の `stack/10` 端数処理(floor になる現挙動)
4. **丸め挙動の仕様表を作る**(B5): `StatusSet`(floor)と `StatusDefinitions`(ceil)の丸めがそれぞれどこで効いているかをテストで固定。統一はフェーズ3で行い、ここでは**現状の固定のみ**。

### 完了条件
- B1 の扱いが決まり、修正 + テスト済み
- `npm run typecheck` がテストコードも検査している
- フェーズ3の変更対象すべてに現挙動を固定するテストがある

### リスク
- ほぼなし(テスト追加が主)。B1 修正のみ挙動変更を含むため、FVTT 上で呪印【出血】の動作確認を行う。

---

## フェーズ1: 死にコード・設定の掃除

**目的**: 消すだけで済むものを先に消し、以降のフェーズの作業面積を減らす。

### 作業項目

1. **module.json の修復**(B3, B4):
   - 重複した `scripts` キーを1つに統合(debug-log.js を廃止するので `scripts: []` もしくはキー自体削除)
   - `templates` に `status-apply.html` を追加(→ フェーズ4でテンプレ1本化するため、ここでは整合させるだけ)
   - `authors` の "Unknown"、空の `manifest` / `download` を整理
2. **debug-log.js の削除**(D2): `scripts/` ディレクトリごと削除し、eslint.config.js の `scripts/**/*.js` ブロックも削除
3. **PoC 残骸の削除**(D1, B2):
   - `SimpleForm.tsx` / `ReactFormApplication.tsx` / `templates/react-form.html` を削除
   - `showReactForm` を `index.ts` / `initializeModule.ts` / API 公開から削除
   - `collectStatusMappingIssues` の呼び出しは**暫定的に `initializePonkotuSystem` の `ready` フックへ移設**(フェーズ2で型により不要化するまでの命綱)+ 同内容をテスト化して CI 相当でも検出できるようにする
4. **死に関数の削除**(D3): `calcAttackerSpecialPreview` と、その表示側(`useDamageApplyForm` の `special: bonusSpecialNum` まわりの整理)
5. **docs の整理**(D4, N4):
   - `docs/spec.md` → 実装と乖離しているため `docs/archive/` へ移動(削除はしない。構想として価値が残る可能性)
   - `docs/statuses.md` の冒頭に「マクロ時代の参考資料であり、現行の唯一の情報源は `src/domain/status/StatusDefinitions.ts`」と明記
   - `docs/combatant-design-issues.md` の解決済み項目(B)を更新し、本計画書へのリンクを張る

### 完了条件
- FVTT 上で DamageCalc / StatusApply の2フォームが従来どおり動く(`showReactForm` は消える — **利用者への周知が必要**)
- 削除により typecheck / lint / test が green のまま

### リスク
- `showReactForm` をマクロ等から呼んでいるユーザーがいる場合に壊れる → **着手前に docs/macro と運用マクロを確認**し、使われていれば非推奨期間を設ける

---

## フェーズ2: 型の一元化(二重管理の解消)

**目的**: 「1つの事実は1箇所で定義する」。手動同期していた型・定数・検証を、定義から導出する形に変える。**このフェーズは型とデータ構造のみを触り、ロジックは変えない。**

### 作業項目

1. **statusDefinitions を単一情報源にする**(R1, R3):
   - `StatusDefinitions.ts` を `as const satisfies` パターン(または定義用ヘルパー関数)に変更し、`StatusId` 型を `statusDefinitions` から導出する
   - `statusIds` 配列を導出値に置き換え(`StatusId.ts` は再エクスポートのみ、または削除)
   - 散在する `as ReadonlyArray<StatusDefinition<StatusId>>` キャストを**全廃**(6箇所)
2. **hasPending の廃止**(R2):
   - `StatusDefinition` を判別共用体にする: `attribute: { stack: string }` と `attribute: { stack: string; pending: string }` を型で区別し、`hasPending` は `attribute.pending` の有無から導出するヘルパー(`hasPending(def)`)に置換
   - これにより `statusMappingValidation.ts` の実行時検証は**型エラーとして検出される**ため、ファイルごと削除(フェーズ1で移設した ready フック呼び出しも削除)
3. **重複型の統合**(R4, R5):
   - `DamageResultViewModel` / `CombatantPreviewViewModel` / `StatusLibraryEntryViewModel` を削除し、ドメイン側の型(`DamageResult` / `CombatantPreview` / `StatusLibraryEntry`)を直接参照(置き場所は フェーズ4 の共有型整理で最終決定。まずは `type DamageResultViewModel = DamageResult` のエイリアス化でも可)
   - 恒等マッピング関数 `toDamageResultViewModel` / `toLibraryEntryViewModel` を削除
   - `DamageEvent` を `DamageResult` + `baseDamage` の合成型(`type DamageEvent = DamageResult & { baseDamage: number }`)に整理
4. **ICombatantRepository の整理**(D5): `save(record)` と `saveActor(combatant)` の役割を精査し、片方に寄せる

### 完了条件
- `grep -r "as ReadonlyArray<StatusDefinition" src` が0件
- `statusMappingValidation.ts` が存在しない(型で保証)
- 新しい状態異常を追加するとき、**触るファイルが `StatusDefinitions.ts` 1つだけ**で済む(id 一覧・検証・型がすべて追従する)ことを、ダミー定義の追加→削除で確認

### リスク
- 型パズルが複雑化しすぎる恐れ → `satisfies` で素直に書けない場合は無理せず「定義ヘルパー関数 + 明示的な型注釈」に留める。**型のための型**を作らないこと

---

## フェーズ3: ドメイン層の再設計

**目的**: `combatant-design-issues.md` の積み残し(不変条件の強制)と、状態異常ロジックの置き場の一貫性を解決する。**フェーズ0で固定したテストが全て通ることが変更の正しさの証明になる。**

### 作業項目

1. **combatCalculator の移設**(L1): `src/utils/combatCalculator.ts` → `src/domain/combat/DamageCalculation.ts`(純粋計算)+ `src/domain/combat/DamageApplication.ts`(適用)に分割・改名。`utils/` ディレクトリは廃止
2. **計算と適用の分離**(L2, R11):
   - `computeDamage`(純粋関数)はそのまま活かす
   - 適用側は `Combatant` のドメインメソッド経由に一本化: バリア吸収の手動再実装をやめ、`applyHpDamage` / `applyConstitutionDamage` 等を使う
   - **注意**: 現在の `applyDamage` は hp がマイナスまで下がるのに対し `Combatant.applyHpDamage` は0で止まる。**どちらが正しいか仕様確認の上、フェーズ0のテストを更新してから**統一する
3. **沈潜(Sink)を StatusDefinitions へ移設**(L3): `applyDamage` にハードコードされた「SAN 吸収 → HP 貫通 → スタック半減」を `Sink` 定義の `onTakeDamage` ハンドラへ移す。必要なら `DamageEvent` にハンドラから結果を書き戻せる口を設ける(黒炎・出血と同じ構造にする)
4. **Combatant の不変条件強制**(L4):
   - フィールドを `private`(`#`)化し、読み取りは getter で公開
   - `setHp` / `setConstitution` / `setSan` の無条件セッターを廃止し、`applyHpDamage` / `healHp` / `applySanDamage` 等の意図が明確なメソッドに限定
   - 2 の分離が済んでいれば、セッターの利用箇所は自然に消えているはず
5. **丸めの統一**(B5): `normalizeStack` を `domain/status` の1箇所に定義し、floor / ceil のどちらを仕様とするか決めて統一。名前も `clampStackFloor` 等、丸め方向がわかるものにする
6. **ターン終了時バリア消滅の明文化**(L5): `TurnProcessor.turnEnd` の `setBarrier(0)` を `combatant.expireBarrier()` のような名前つきドメイン操作にし、テストで仕様を固定
7. **pending 処理順の仕様固定**(T4): フェーズ0のテストを正式な仕様としてコメント・docs に明記(`combatant-design-issues.md` 課題Cのクローズ)

### 完了条件
- `src/utils/` が存在しない
- `Combatant` のフィールドに外部から直接代入できない(コンパイルエラーになる)
- 状態異常の挙動がすべて `StatusDefinitions.ts` に集まっている(計算機側に個別ステータスの分岐がない)
- フェーズ0のキャラクタリゼーションテスト(仕様変更が確定した箇所は更新版)が全て green

### リスク
- **このフェーズが最も挙動リスクが高い**。特に 2 の hp マイナス問題と 3 の Sink 移設は、FVTT 実機での手動確認(ダメージ適用 → アクターシートの値確認)を必須とする
- 1コミット1論点を厳守(移設だけのコミット、分離だけのコミット、を分ける)

---

## フェーズ4: application / components 層の再構成

**目的**: 「damageCalc」という歴史的フォルダ名に押し込まれた複数機能を整理し、UI 層の重複を畳む。

### 作業項目

1. **共有型の置き場整理**(L6):
   - `TokenOption` / `SelectOption` / `RANDOM_TARGET_OPTIONS` / 各 ViewModel を `src/application/` 配下(または `src/shared/`)へ移動し、**components → application の一方向依存**に正す
   - `tokenDispositions.ts` は Foundry 定数のミラーなので repository か shared へ
   - ESLint のレイヤ制約(`no-restricted-imports`)を新構成に合わせて更新し、逆流を機械的に禁止
2. **機能単位のフォルダ再編**(L7): `damageCalc` という名前の下にある StatusApply / TurnProcess / StatusLibrary を分離する。例:
   ```
   src/application/
     damageApply/    (useDamageApplyForm, ダメージ適用ユースケース)
     statusApply/    (useStatusApplyForm, applyStatusStack, statusLibrary)
     turnProcess/    (useTurnProcessForm)
     shared/         (useTokens, 共有型)
   src/components/
     damageApply/    (DamageApplySection, DamageResultPanel)
     statusApply/    (StatusApplySection)
     turnProcess/    (TurnProcessSection)
   ```
   ※ 具体名は実施時に決定。**git mv を使い、リネームだけのコミットにする**(diff レビュー可能性のため)
3. **Application クラスの基底化**(R6, R7, R8):
   - React マウント/アンマウントを担う `ReactApplicationBase`(仮)を1つ作り、`DamageCalcApplication` / `StatusApplyApplication` はタイトル・サイズ・ルートコンポーネントの指定だけにする
   - テンプレートを `templates/react-root.html` の1枚に統合し、`module.json` を追従
   - `MODULE_ID` を `src/constants.ts`(仮)に一元化
4. **フック内の重複解消**(R9, R10, L9):
   - `useTurnProcessForm`: `runTurnStart` / `runTurnEnd` を「フェーズ(start/end)をパラメータ化した1関数」に統合。あわせて `processedCount` の集計ロジック(end が0件なら start の件数を使う)が意図どおりか仕様確認
   - `useDamageApplyForm`: attacker/receiver の `useEffect` 重複を `useCombatantPreview(actorId)` のような単一フックに抽出。`run` の中身(検証 → 計算 → 保存 → チャット通知)を `application/damageApply/` のユースケース関数へ移し、フックは状態管理だけにする(StatusApply 側の `applyStatusStack` と同じ構造にして非対称を解消)
   - チャットメッセージ HTML の組み立てをユースケースまたは専用フォーマッタへ分離
5. **プレビュー計算の重複解消**(R12): `calcAttackerNormal` と `calcAttackerNormalPreview` を `directcheck` 引数つきの1関数へ統合
6. **index.ts の副作用整理**(L8): `initializePonkotuSystem()` の即時実行はエントリポイントの責務として明示コメントを付ける(Foundry モジュールの制約上、副作用エントリ自体は許容)

### 完了条件
- ESLint レイヤ制約が新フォルダ構成で機能し、components → application 依存が0件
- Application クラスが実質2ファイル(基底 + 個別設定)に畳まれている
- `useDamageApplyForm` / `useTurnProcessForm` から Foundry 依存の業務ロジックが抜け、ユースケース関数がテスト可能になっている
- FVTT 実機で2フォームの全操作(ダメージ適用・状態異常付与・ライブラ・ターン処理)を手動確認

### リスク
- ファイル移動が多くコンフリクトしやすい → **このフェーズ中は機能開発ブランチを立てない**運用を推奨

---

## フェーズ5: テスト・基盤の仕上げ

**目的**: リファクタ後の構造を「守る」仕組みを整え、次の機能開発を安全にする。

### 作業項目

1. **ユースケース層のテスト追加**(T2): フェーズ4で抽出したユースケース関数(ダメージ適用フロー・ターン処理フロー)に、`ICombatantRepository` のフェイクを使ったテストを追加(既存の `ApplyStatusStack.spec.ts` と同じ流儀)
2. **repository のテスト追加**(T3): `combatantFromActor` / `toActorUpdate` の属性キーマッピングを、Actor のスタブでラウンドトリップテスト(読み→書きで属性キーが対応していること)。N1 の命名無法地帯はここで初めて安全網がつく
3. **`useDamageCalcTokens` の更新性の検討**: 現状マウント時に1回だけトークンを読む。フォームを開いたままシーンが変わるケースの要否を判断し、必要なら `canvasReady` フック等での再読込を追加(不要なら「開き直す運用」と明記)
4. **CI 相当の整備**(T5): 最低限、`typecheck && lint && test` を1コマンドにした `npm run check` を追加。GitHub 等にリモートがあるなら Actions で PR ごとに実行
5. **依存更新の判断(別トラック)**: 以下は**リファクタとは切り離した独立作業**として起票のみ行う:
   - `foundry-vtt-types` v11 beta → FVTT 本体のバージョン方針と合わせて更新
   - React 18 → 19
   - `dist/` の git 管理をやめるか(FVTT への配布手段次第。現状はコミット運用で成立しているため、変えるなら配布フローとセットで)
6. **docs の最終更新**: `combatant-design-issues.md` の全課題をクローズし、本計画書に実施結果(完了日・変更点・見送り事項)を追記

### 完了条件
- `npm run check` 一発で全検査が走る
- 状態異常の属性キーマッピングにテストの網がかかっている
- 本計画書の各フェーズに完了マークがつき、見送った項目に理由が書かれている

---

## 実施の心得

1. **フェーズ内でも1コミット1論点**。「移動」と「変更」を同じコミットに入れない
2. **仕様変更とリファクタを混ぜない**。挙動を変えたくなったら(hp マイナス問題など)、テストを先に書き換えて合意を形にしてから実装を変える
3. **FVTT 実機確認が必要なフェーズ**: 0(B1修正)、1(フォーム動作)、3(ダメージ・沈潜)、4(全フォーム操作)
4. **やらないこと**: FVTT アクター側の属性キー(`stackpoise` 等)のリネームは既存ワールドデータを壊すため本計画のスコープ外。コード側の対応表(`StatusDefinitions`)で吸収し続ける
5. `docs/macro` は参考資料のため一切変更しない(AGENTS.md)

## 規模感の目安

| フェーズ | 主な作業 | 相対規模 |
|---|---|---|
| 0 | テスト追加 + B1修正 | 小 |
| 1 | 削除・設定修正 | 小 |
| 2 | 型の導出化 | 中 |
| 3 | ドメイン再設計 | **大**(最重要・最高リスク) |
| 4 | フォルダ再編 + UI重複解消 | 大(機械的作業が多い) |
| 5 | テスト・基盤 | 中 |
