import { type Combatant } from "./Combatant";

export const WHITE_DAMAGE_PERCENTAGE_PER_OTHER = 5;

export type WhiteEffect = {
  applies: boolean;
  otherWhiteCount: number;
  percentage: number;
};

const noWhiteEffect = (): WhiteEffect => ({
  applies: false,
  otherWhiteCount: 0,
  percentage: 0,
});

/**
 * 現在のシーンにいる白化プレイヤーから、対象者の白化補正を導出する。
 * HP は参照しないため、死亡している白化プレイヤーも人数に含まれる。
 */
export const calculateWhiteEffect = (
  subject: Combatant,
  sceneCombatants: ReadonlyArray<Combatant>,
): WhiteEffect => {
  if (!subject.isPlayer || !subject.isWhite()) return noWhiteEffect();

  const otherWhiteIds = new Set(
    sceneCombatants
      .filter(
        (combatant) =>
          combatant.id !== subject.id &&
          combatant.isPlayer &&
          combatant.isWhite(),
      )
      .map((combatant) => combatant.id),
  );
  const otherWhiteCount = otherWhiteIds.size;

  return {
    applies: true,
    otherWhiteCount,
    percentage: otherWhiteCount * WHITE_DAMAGE_PERCENTAGE_PER_OTHER,
  };
};
