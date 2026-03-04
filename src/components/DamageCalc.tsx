import { useDamageCalcTokens } from "./damageCalc/hooks/useDamageCalcTokens";
import { DamageApplySection } from "./damageCalc/sections/DamageApplySection";
import { TurnProcessSection } from "./damageCalc/sections/TurnProcessSection";

export const DamageCalc = () => {
  const tokens = useDamageCalcTokens();

  return (
    <div className="ponkotu-damage">
      <DamageApplySection tokens={tokens} />
      <TurnProcessSection tokens={tokens} />
    </div>
  );
};
