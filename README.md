## 概要
- FVTT v11
- Sandbox System Builder
- TypeScript
- React

## ドキュメント
- React フォームウィンドウ実装メモ: docs/react-form.md

## モジュールの反映方法
1. このフォルダを Foundry の `Data/modules/ponkotu-system` として配置する（または symlink）。
2. 依存をインストールしてビルド: `npm install && npm run build`（成果物は `dist/index.js`）。
3. Foundry を再起動し、セットアップ画面の「モジュール管理」で「Ponkotu System」を有効化する。
