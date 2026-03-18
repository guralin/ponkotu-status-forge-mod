import { useDamageCalcTokens } from "./damageCalc/hooks/useDamageCalcTokens";
import { StatusApplySection } from "./damageCalc/sections/StatusApplySection";

export const StatusApply = () => {
  const tokens = useDamageCalcTokens();

  return (
    <div className="ponkotu-damage">
      <StatusApplySection tokens={tokens} />
    </div>
  );
};
