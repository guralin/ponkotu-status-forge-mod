# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 言語

日本語で必ず出力すること。

## コマンド

```bash
npm run build       # Vite でビルド（成果物: dist/index.js）
npm run dev         # ウォッチモードでビルド
npm run test        # Vitest でテストを実行（作業後に必ず実行）
npm run typecheck   # TypeScript 型チェック（作業後に必ず実行）
npm run lint        # TSLint による静的解析
```

単一テストファイルの実行:
```bash
npx vitest --run test/TurnProcessor.spec.ts
```

## アーキテクチャ

### レイヤー構成（DDD）

- **`src/domain/`** — ドメイン層。FVTT に依存しない純粋なビジネスロジック
  - `combat/Combatant.ts` — 戦闘者エンティティ（hp, barrier, constitution, statuses などを保持）
  - `combat/TurnProcessor.ts` — ターン開始・終了時のステータス効果を適用する静的クラス
  - `status/StatusSet.ts` — ステータスの stack/pending を管理するコレクション
  - `status/types/StatusDefinition.ts` — ステータス定義の型（onTurnStart, onTurnEnd, onDealDamage, onTakeDamage フック）
  - `status/types/StatusId.ts` — ステータス ID の型エイリアス（`as const` で導出）
  - `status/definitions/index.ts` — 全ステータス定義の一覧

- **`src/repository/`** — リポジトリ層。FVTT Actor との変換・永続化
  - `ICombatantRepository.ts` — リポジトリインターフェース
  - `CombatantRepository.ts` — FVTT の `game.actors` を使った実装
  - `combatantFromActor.ts` — FVTT Actor → Combatant 変換関数

- **`src/application/`** — アプリケーション層
  - `initializeModule.ts` — FVTT の Hooks に登録し、API を公開
  - `DamageCalcApplication.tsx` — FVTT Application クラス（React をマウント）
  - `usecases/applyStatusStack.ts` — ステータス付与ユースケース

- **`src/components/`** — React コンポーネント（FVTT Application が HTML コンテナに mount）
  - `DamageCalc.tsx` — メインのダメージ計算フォーム
  - `damageCalc/sections/` — フォームのセクション別コンポーネント
  - `damageCalc/hooks/` — フォームロジックを分離したカスタムフック

- **`src/utils/combatCalculator.ts`** — ダメージ計算ロジック（`applyDamage` 関数）

### ステータスシステムの重要な概念

- **stack / pending の2値管理**: 一部ステータスは `pending` 値を持ち、ターン開始時（`TurnProcessor.turnStart`）に `stack` にコミットされる。`hasPending: true` のステータスのみ pending が有効。
- **StatusContext**: ターン処理・ダメージ処理の各フックに渡されるコンテキスト。`getStack/setStack/addStack` などを通じてステータスを操作する（直接 StatusSet を触らない）。
- **statusDefinitions の追加**: `src/domain/status/definitions/index.ts` に定義を追加し、`src/domain/status/types/StatusId.ts` の型も更新する。

### FVTT との連携

- モジュールの公開 API: `game.modules.get("ponkotu-system").api.showDamageCalc()` でフォームを開く
- Actor のデータは `actor.system.attributes.<key>.value` / `.max` で取得・更新
- `CombatantRepository` が FVTT の `actor.update()` を呼び出して永続化する

## ルール

- `/docs/macro` 配下のファイルは参考資料のため、変更しないこと
- ベストプラクティスはエリックエヴァンスのドメイン駆動設計に従うこと
- テストの考え方はマーティンファウラーの「テスト駆動開発」を参考にすること
- 作業の最後に `npm run test` と `npm run typecheck` を実行してすべて通ることを確認すること
