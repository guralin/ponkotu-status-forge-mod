import { type Combatant } from "../combat/Combatant";

export const ANKA_MAX_STACK = 5;
export const ANKA_DAMAGE_PERCENTAGE_PER_STACK = 5;

export type AnkaEffect = {
  stack: number;
  percentage: number;
};

export const calculateAnkaEffect = (combatant: Combatant): AnkaEffect => {
  const stack = Math.min(combatant.getStatusStack("Anka"), ANKA_MAX_STACK);
  return {
    stack,
    percentage: stack * ANKA_DAMAGE_PERCENTAGE_PER_STACK,
  };
};
