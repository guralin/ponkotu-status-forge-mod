import { useTurnProcessForm } from "../hooks/useTurnProcessForm";
import { type TokenOption } from "../types";

type Props = {
  tokens: TokenOption[];
};

export const TurnProcessSection = ({ tokens }: Props) => {
  const { turnRunning, runTurnProcess } = useTurnProcessForm(tokens);

  return (
    <>
      <div className="ponkotu-damage__row">
        <h3 style={{ margin: "8px 0" }}>ターン処理</h3>
      </div>

      <div className="ponkotu-damage__row">
        <button onClick={runTurnProcess} disabled={turnRunning || tokens.length < 1}>
          {turnRunning ? "処理中..." : "ターン処理(終了→開始)"}
        </button>
      </div>
    </>
  );
};
