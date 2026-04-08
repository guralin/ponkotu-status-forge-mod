## 概要
- FVTT v11
- Sandbox System Builder
- TypeScript
- React

## モジュールの反映方法
1. このフォルダを Foundry の `Data/modules/ponkotu-system` として配置する（または symlink）。
2. 依存をインストールしてビルド: `npm install && npm run build`（成果物は `dist/index.js`）。
3. Foundry を再起動し、セットアップ画面の「モジュール管理」で「Ponkotu System」を有効化する。

## 注意事項
- 現在は開発中のモジュールであり、API や機能が頻繁に変更される可能性があります。使用する際は、最新のコードを確認してください。
- dist/index.jsはビルド成果物ですが簡略化のため一次的にリポジトリに含めています。将来的には .gitignore に追加して管理する予定です。