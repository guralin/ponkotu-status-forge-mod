import { statusDefinitions } from "../../../domain/status/definitions";
import { type StatusId } from "../../../domain/status/types/StatusId";
import { useStatusApplyForm } from "../hooks/useStatusApplyForm";
import { useStatusLibrary } from "../hooks/useStatusLibrary";
import { type TokenOption, optionLabel, RANDOM_TARGET_OPTIONS } from "../types";

type Props = {
  tokens: TokenOption[];
};

export const StatusApplySection = ({ tokens }: Props) => {
  const {
    statusTargetValue,
    statusId,
    applyTarget,
    canApplyPending,
    statusStack,
    statusRunning,
    setStatusTargetValue,
    setStatusId,
    setApplyTarget,
    setStatusStack,
    runApplyStatus,
  } = useStatusApplyForm(tokens);

  const {
    libraryTargetValue,
    libraryOpen,
    libraryEntries,
    setLibraryTargetValue,
    toggleLibrary,
  } = useStatusLibrary();

  return (
    <>
      <div className="ponkotu-damage__row">
        <h3 style={{ margin: "8px 0" }}>状態異常付与</h3>
      </div>

      <div className="ponkotu-damage__row">
        <label className="ponkotu-damage__label">
          対象キャラ
          <select
            value={statusTargetValue}
            onChange={(e) => setStatusTargetValue(e.target.value)}
          >
            <option value="">選択してください</option>
            {tokens.map((token) => (
              <option key={`status-target-${token.actorId}`} value={token.actorId}>
                {optionLabel(token)}
              </option>
            ))}
            <optgroup label="ランダム">
              {RANDOM_TARGET_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </optgroup>
          </select>
        </label>

        <label className="ponkotu-damage__label">
          状態異常
          <select
            value={statusId}
            onChange={(e) => setStatusId(e.target.value as StatusId)}
          >
            {statusDefinitions.map((definition) => (
              <option key={definition.id} value={definition.id}>
                {definition.name}
              </option>
            ))}
          </select>
        </label>

        <label className="ponkotu-damage__label">
          付与先
          <select
            value={applyTarget}
            onChange={(e) => setApplyTarget(e.target.value as "stack" | "pending")}
          >
            <option value="stack">現在</option>
            <option value="pending" disabled={!canApplyPending}>
              次ターン(next)
            </option>
          </select>
        </label>
      </div>

      <label className="ponkotu-damage__label">
        スタック数
        <input
          type="number"
          min={1}
          step={1}
          value={statusStack}
          onChange={(e) => setStatusStack(e.target.value)}
          placeholder="例: 3"
        />
      </label>

      <div className="ponkotu-damage__row">
        <button onClick={runApplyStatus} disabled={statusRunning || tokens.length < 1}>
          {statusRunning ? "付与中..." : "状態異常を付与"}
        </button>
      </div>

      <div className="ponkotu-damage__row">
        <h3 style={{ margin: "8px 0" }}>ライブラ！</h3>
      </div>

      <div className="ponkotu-damage__row">
        <label className="ponkotu-damage__label">
          対象キャラ
          <select
            value={libraryTargetValue}
            onChange={(e) => setLibraryTargetValue(e.target.value)}
          >
            <option value="">選択してください</option>
            {tokens.map((token) => (
              <option key={`library-target-${token.actorId}`} value={token.actorId}>
                {optionLabel(token)}
              </option>
            ))}
          </select>
        </label>

        <button disabled={!libraryTargetValue} onClick={toggleLibrary}>
          {libraryOpen ? "閉じる" : "表示"}
        </button>
      </div>

      {libraryOpen && (
        <div className="ponkotu-damage__row" style={{ flexDirection: "column" }}>
          {libraryEntries.length === 0 ? (
            <span>状態異常なし</span>
          ) : (
            <table style={{ fontSize: "0.9em", width: "100%" }}>
              <thead>
                <tr>
                  <th>ステータス</th>
                  <th>スタック</th>
                  <th>次ターン</th>
                </tr>
              </thead>
              <tbody>
                {libraryEntries.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.name}</td>
                    <td>{entry.stack}</td>
                    <td>{entry.hasPending ? entry.pending : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
};
