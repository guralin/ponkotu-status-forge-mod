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
    setAttackerId,
    setReceiverId,
    setBaseDamage,
    run,
  } = useDamageCalcState();

  return (
    <DamageCalcView
      tokens={tokens}
      attackerId={attackerId}
      receiverId={receiverId}
      baseDamage={baseDamage}
      result={result}
      running={running}
      onAttackerChange={setAttackerId}
      onReceiverChange={setReceiverId}
      onBaseDamageChange={setBaseDamage}
      onRun={run}
    />
  );
};
