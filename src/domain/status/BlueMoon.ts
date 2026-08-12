import { type Combatant } from "../combat/Combatant";

export const BLUE_MOON_MAX_STACK = 20;
export const BLUE_MOON_RECOVERY_DIVISOR = 4;

export const processBlueMoonTurnStart = (combatant: Combatant): void => {
  const currentStack = combatant.getStatusStack("BlueMoon");
  if (currentStack <= 0 || !combatant.isAlive()) return;

  combatant.addStatusStack("BlueMoon", 1);
  const nextStack = combatant.getStatusStack("BlueMoon");
  const recovery = Math.ceil(nextStack / BLUE_MOON_RECOVERY_DIVISOR);

  combatant.healHp(recovery);
  combatant.healConstitution(recovery);
};
