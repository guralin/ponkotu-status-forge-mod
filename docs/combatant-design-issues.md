# 戦闘周辺コードの課題まとめ

このドキュメントは、`CombatantRepository` / `TurnProcessor` / `Combatant` / `StatusSet` / `combatantFromActor` 付近の設計課題を整理したものです。ドメイン駆動設計（エリック・エヴァンス）の観点で、ドメイン境界・責務・不変条件を重視し、テスト観点はマーティン・ファウラーの「テスト駆動開発」の考え方に合わせて、変更の意図をテストで固定する前提で整理しています。

## 全体の意図（大枠）
- Foundry の `Actor` とドメイン `Combatant` の変換・永続化をリポジトリで吸収し、ドメインでは `StatusSet` と `TurnProcessor` を中心にステータス駆動で戦闘処理を行う設計。
- ステータス定義（`statusDefinitions`）を基点として、読み込み時に `StatusSet` を構築し、ターン開始/終了で一括適用する思想。

## 課題（重大度順）
### 1. statusDefinitions と statusAttributeMap の整合性が壊れやすい（重大）
- `statusDefinitions` に追加したステータスが `statusAttributeMap` に存在しない場合、`mapping` が `undefined` になって実行時エラーになります。
- 読み込み・保存の双方が同じ map に依存しているため、欠落や表記ゆれが即座に破綻します。
- DDD観点では「ドメイン定義とインフラ表現の対応表」が単一箇所に閉じておらず、壊れたときの発見が遅い。

### 2. Combatant にステータス派生値が二重保持されている（重大）
- `stackDamageUp` などの派生値が `Combatant` に固定値として保存され、`StatusSet` 更新と同期しません。
- `TurnProcessor` は `StatusSet` を変更するため、後続ロジックが `Combatant` の派生値を参照すると不整合になります。
- DDD観点では「集約内の一貫性」を破壊する設計です。

### 3. ドメイン層が Foundry の Actor 構造に依存している（高）
- `combatantFromActor` がドメイン配下にあり、`Actor.system.attributes` に直接アクセスしています。
- DDDの境界（インフラ層/ACL）を越えてドメインに外部表現が漏れています。

### 4. Combatant がアネミックで不変条件が守られない（中）
- `Combatant` の主要フィールドが public かつ可変で、HPやバリアの境界条件が保証されません。
- `TurnContext` ではクランプ処理をしているが、他の箇所から直接代入されると破綻します。

### 5. loadByActorId の戻り値が文脈不明（中）
- `combatId` / `combatantId` が空文字のまま返されるため、呼び出し側の誤用が起きやすい。
- DDD観点では「ユースケースの区別」が型で表現されていません。

### 6. ターン開始時の pending 処理順序が仕様依存（低）
- pending を stack に移してから `onTurnStart` を呼ぶ仕様は一貫しているが、pending 参照が必要な効果があるとズレます。
- 仕様をテストで固定しないと、変更時に崩れやすいです。

## 改善の方向性（設計）
- **整合性の保証**: `statusDefinitions` と `statusAttributeMap` の整合チェックを起動時に行い、破綻を早期検出する。
- **派生値の単一化**: `Combatant` に派生値を持たせない、もしくは更新APIで必ず同期させる。
- **ACLの導入**: Foundry 依存の変換は `repository` 配下へ移し、ドメインを純粋化する。
- **不変条件の集約**: HP/Barrier/Constitution などの更新は `Combatant` のドメイン操作に寄せる。
- **テストで仕様固定**: ターン開始/終了の順序や pending 処理はテストで明文化する。

## 追加で確認したい点
- `stackDamageUp` 等の派生値は現在どこで参照されていますか？
- `onTurnStart` が pending を参照したい効果は存在しますか？

