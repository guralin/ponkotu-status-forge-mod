import { DamageCalcView } from "./DamageCalcView";
import { useDamageCalcState } from "./useDamageCalcState";

export const DamageCalc = () => {
  const {
    tokens,
    attackerId,
    receiverId,
    baseDamage,
    result,
    running,
    turnRunning,
    setAttackerId,
    setReceiverId,
    setBaseDamage,
    run,
    runTurnProcess,
  } = useDamageCalcState();

  return (
    <DamageCalcView
      tokens={tokens}
      attackerId={attackerId}
      receiverId={receiverId}
      baseDamage={baseDamage}
      result={result}
      running={running}
      turnRunning={turnRunning}
      onAttackerChange={setAttackerId}
      onReceiverChange={setReceiverId}
      onBaseDamageChange={setBaseDamage}
      onRun={run}
      onRunTurnProcess={runTurnProcess}
    />
  );
};
