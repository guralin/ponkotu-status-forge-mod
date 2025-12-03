# React フォーム ウィンドウ実装メモ

TypeScript + React で FVTT 上にフォームウィンドウを出すための実装手順と使い方。

## セットアップ
1. 依存インストール: `npm install`
2. ビルド: `npm run build`（成果物は `dist/index.js`）
3. `module.json` を参照して FVTT のモジュールとして認識させる（このフォルダを `Data/modules/ponkotu-system` に配置）。

> 開発中にホット再ビルドしたい場合は `npm run dev`（watch）を使用。

## 実装ポイント
- バンドラー: Vite（ESM 1 ファイル出力、`dist/index.js`）。
- エントリ: `src/index.ts` で Hooks.once("ready") から API を公開。
- UI: `Application` を拡張した `ReactFormApplication` 内で React をマウントし、閉じる際にアンマウント。
- テンプレ: `templates/react-form.html` の `.ponkotu-react-root` に React を差し込む。

## 呼び出し方
- コンソール/マクロから: `game.modules.get("ponkotu-system")?.api?.showReactForm();`
- グローバルヘルパ: `ponkotuSystem.showReactForm();`（デバッグ用途）

## 挙動
- 名前とメモを入力して送信すると、ChatMessage に `[name] からの送信: [note]` を投稿。
- 名前未入力の場合は送信ボタンが無効化。

## ファイル構成
- `src/application/ReactFormApplication.tsx` … Application 拡張と React マウント処理
- `src/components/SimpleForm.tsx` … 入力フォーム本体
- `src/index.ts` … Hooks で API 公開
- `templates/react-form.html` … React 挿入用の空殻テンプレート
- `module.json` … FVTT モジュール定義
