# 仕様をまとめる

## イベント一覧
- onTurnStart: ターン開始時
- onTurnEnd: ターン終了時
- onAttacked: 攻撃を行った時
- onReceived: 効果やリソースを受領した時

### イベント詳細
#### 共通
- 発火は「1アクション=1イベント列」を基本とし、同一アクション内での再入は禁止する。
- すべて同期処理とし、非同期処理は EventTrigger 側でキューに詰める。
- 優先度は `priority`(数値, 小さいほど先) を持つ想定で、未指定は 0。
- キャンセル可否は `cancelable` で表現し、`true` の場合のみ以降の処理を中断できる。
- 例外は「イベント単位で握りつぶし」、EventTrigger がログに記録し処理継続する。

#### onTurnStart
- 発火条件: 戦闘中のアクティブ combatant が切り替わり、ターン開始が確定した直後。
- 目的: ターン開始時のステータス更新、開始時効果の適用。
- ペイロード:
  - `combatId`, `sceneId`, `round`, `turn`
  - `combatantId`, `actorId`
  - `timestamp`(ISO 文字列)
  - `source` = `system`
- キャンセル: 不可。

#### onTurnEnd
- 発火条件: アクティブ combatant の行動が確定し、ターン終了処理に入る直前。
- 目的: ターン終了時のステータス更新、終了時効果の適用。
- ペイロード:
  - `combatId`, `sceneId`, `round`, `turn`
  - `combatantId`, `actorId`
  - `timestamp`(ISO 文字列)
  - `source` = `system`
- キャンセル: 不可。

#### onAttacked
- 発火条件: 攻撃アクションの命中判定が確定した時点（ダメージ適用の直前）。
- 目的: 命中時効果の付与、ダメージ前の軽減・反応処理。
- ペイロード:
  - `actionId`, `attackId`, `sceneId`
  - `attackerId`, `attackerActorId`
  - `targetId`, `targetActorId`
  - `itemId`(武器/スキル), `skillId`(任意)
  - `roll`(生値/修正後), `hit`(true/false), `critical`(true/false)
  - `damage`(予定値), `damageType`(斬/打/魔法など)
  - `tags`(任意のメタデータ)
- キャンセル: 可。`cancelable=true` の場合、ダメージ適用を中断しログに理由を残す。

#### onReceived
- 発火条件: ダメージ/効果が対象に適用された直後。
- 目的: 受領後の反応、追加効果、ログ生成。
- ペイロード:
  - `actionId`, `attackId`, `sceneId`
  - `sourceId`, `sourceActorId`
  - `targetId`, `targetActorId`
  - `itemId`, `skillId`
  - `appliedDamage`, `damageType`, `overkill`(true/false)
  - `effects`(付与/解除されたステータスの配列)
  - `critical`(true/false)
  - `tags`
- キャンセル: 不可。

## テスト方針
- React のフォームは対象外とし、ドメインの単体テストで完結させる。
- フローは「React → EventTrigger → Repository → Domain」を基本とする。
- Repository は Domain の変化に応じて FVTT へのデータ格納を担当する。

### フローと責務の明確化
- React: 画面内で必須/数値/範囲の検証とトリム/正規化を行い、エラーはフォーム内表示を主として通知で補助する。
- EventTrigger: UI/FVTT Hook からの入力を `CombatTurnEventDto` 等に整形し、必須 ID と数値の検証後にドメイン呼び出しへ送る。非同期はキューで直列化する。
- Repository: `load({ combatId, combatantId, actorId })` で読み出し、`save(record)` で `system.attributes.*` のみを更新する。失敗時は例外を上げずログに残す。
- Domain: 外部依存は `RuntimeDependencies` で抽象化し、呼び出し側から注入する前提とする。ドメインは同期処理で `DomainEvent[]` を返す。
- トランザクション/一貫性: 1イベント単位で `load -> domain -> save` を完結させ、複数イベントは EventTrigger のキューで順序保証する。

## テスト対象
- Domain 層のロジック

### TODO: テスト設計の具体化
- ドメインサービス/値オブジェクト/エンティティごとの代表ケースを列挙する。
- モック境界（EventTrigger, Repository）の契約テスト項目を洗い出す。
- 乱数・時間依存を差し替えるためのテストダブル方針を記述する。
- カバレッジ目標と優先度（クリティカル/ノーマル）を決める。

## テスト非対象（テストしづらい箇所）
- React のフォーム
- API I/O
- Repository の FVTT 依存部分

### TODO: 非対象の補完策
- 手動確認で実施する観点と頻度をメモする。
- 将来的に自動化を検討する場合の前提条件を記載する。
