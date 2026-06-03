import {
  type DamageApplyActions,
  type DamageApplyViewModel,
  type TokenOption,
  type TurnProcessActions,
  type TurnProcessViewModel,
} from "./damageCalc/types";
import { DamageApplySection } from "./damageCalc/sections/DamageApplySection";
import { TurnProcessSection } from "./damageCalc/sections/TurnProcessSection";

type Props = {
  tokens: TokenOption[];
  damageModel: DamageApplyViewModel;
  damageActions: DamageApplyActions;
  turnModel: TurnProcessViewModel;
  turnActions: TurnProcessActions;
};

export const DamageCalc = ({
  tokens,
  damageModel,
  damageActions,
  turnModel,
  turnActions,
}: Props) => {
  return (
    <div className="ponkotu-damage">
      <DamageApplySection
        tokens={tokens}
        model={damageModel}
        actions={damageActions}
      />
      <TurnProcessSection model={turnModel} actions={turnActions} />
    </div>
  );
};
