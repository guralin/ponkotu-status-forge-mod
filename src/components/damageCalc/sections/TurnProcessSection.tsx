import {
  type TurnProcessActions,
  type TurnProcessViewModel,
} from "../types";

type Props = {
  model: TurnProcessViewModel;
  actions: TurnProcessActions;
};

export const TurnProcessSection = ({ model, actions }: Props) => {
  const { isRunning, canRun } = model;
  const { onRunClick } = actions;

  return (
    <>
      <div className="ponkotu-damage__row">
        <h3 style={{ margin: "8px 0" }}>ターン処理</h3>
      </div>

      <div className="ponkotu-damage__row">
        <button onClick={onRunClick} disabled={isRunning || !canRun}>
          {isRunning ? "処理中..." : "ターン処理(終了→開始)"}
        </button>
      </div>
    </>
  );
};
