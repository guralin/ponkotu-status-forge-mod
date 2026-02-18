import { statusDefinitions } from "../../../domain/status/definitions";
import { type StatusId } from "../../../domain/status/types/StatusId";
import { useStatusApplyForm } from "../hooks/useStatusApplyForm";
import { type TokenOption, optionLabel } from "../types";

type Props = {
  tokens: TokenOption[];
};

export const StatusApplySection = ({ tokens }: Props) => {
  const {
    statusTargetId,
    statusId,
    statusStack,
    statusRunning,
    setStatusTargetId,
    setStatusId,
    setStatusStack,
    runApplyStatus,
  } = useStatusApplyForm(tokens);

  return (
    <>
      <div className="ponkotu-damage__row">
        <h3 style={{ margin: "8px 0" }}>状態異常付与</h3>
      </div>

      <div className="ponkotu-damage__row">
        <label className="ponkotu-damage__label">
          対象キャラ
          <select
            value={statusTargetId}
            onChange={(e) => setStatusTargetId(e.target.value)}
          >
            <option value="">選択してください</option>
            {tokens.map((token) => (
              <option key={`status-target-${token.actorId}`} value={token.actorId}>
                {optionLabel(token)}
              </option>
            ))}
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
                {definition.id}
              </option>
            ))}
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
    </>
  );
};
