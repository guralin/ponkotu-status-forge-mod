import { DamageCalc } from "../components/DamageCalc";
import { useDamageCalcTokens } from "../components/damageCalc/hooks/useDamageCalcTokens";
import {
  type DamageResultViewModel,
  type DamageApplyActions,
  type DamageApplyViewModel,
  type TurnProcessActions,
  type TurnProcessViewModel,
} from "../components/damageCalc/types";
import { type DamageResult } from "../utils/combatCalculator";
import { useDamageApplyForm } from "./damageCalc/useDamageApplyForm";
import { useTurnProcessForm } from "./damageCalc/useTurnProcessForm";

const toDamageResultViewModel = (result: DamageResult): DamageResultViewModel => ({
  attackerWhiteEffect: result.attackerWhiteEffect,
  receiverWhiteEffect: result.receiverWhiteEffect,
  attackerNormalPercentage: result.attackerNormalPercentage,
  receiverNormalPercentage: result.receiverNormalPercentage,
  normalRatio: result.normalRatio,
  attackerSpecialPercentage: result.attackerSpecialPercentage,
  receiverSpecialPercentage: result.receiverSpecialPercentage,
  specialRatio: result.specialRatio,
  criticalHit: result.criticalHit,
  receiverSpecialConfPercentage: result.receiverSpecialConfPercentage,
  specialConfRatio: result.specialConfRatio,
  hpDamageApplied: result.hpDamageApplied,
  barrierAbsorbed: result.barrierAbsorbed,
  confDamageApplied: result.confDamageApplied,
  sanDamageApplied: result.sanDamageApplied,
  hpAfter: result.hpAfter,
  barrierAfter: result.barrierAfter,
  constitutionAfter: result.constitutionAfter,
  sanAfter: result.sanAfter,
});

export const DamageCalcContainer = () => {
  const tokens = useDamageCalcTokens();
  const damageForm = useDamageApplyForm(tokens);
  const turnForm = useTurnProcessForm(tokens);

  const damageModel: DamageApplyViewModel = {
    selectedAttackerId: damageForm.attackerId,
    selectedReceiverId: damageForm.receiverId,
    baseDamage: damageForm.baseDamage,
    bonusNormal: damageForm.bonusNormal,
    bonusSpecial: damageForm.bonusSpecial,
    directAttack: damageForm.directcheck,
    isRunning: damageForm.running,
    canRun: tokens.length >= 2,
    attackerPreview: damageForm.attackerPreview,
    receiverPreview: damageForm.receiverPreview,
    result: damageForm.result
      ? toDamageResultViewModel(damageForm.result)
      : null,
  };

  const damageActions: DamageApplyActions = {
    onAttackerChange: damageForm.setAttackerId,
    onReceiverChange: damageForm.setReceiverId,
    onBaseDamageChange: damageForm.setBaseDamage,
    onBonusNormalChange: damageForm.setBonusNormal,
    onBonusSpecialChange: damageForm.setBonusSpecial,
    onDirectAttackChange: damageForm.setDirectcheck,
    onRunClick: damageForm.run,
  };

  const turnModel: TurnProcessViewModel = {
    isRunning: turnForm.turnRunning,
    canRun: tokens.length >= 1,
  };

  const turnActions: TurnProcessActions = {
    onRunClick: turnForm.runTurnProcess,
  };

  return (
    <DamageCalc
      tokens={tokens}
      damageModel={damageModel}
      damageActions={damageActions}
      turnModel={turnModel}
      turnActions={turnActions}
    />
  );
};
