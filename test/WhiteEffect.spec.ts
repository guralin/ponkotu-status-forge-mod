import { describe, expect, it } from "vitest";
import {
  Combatant,
  type CombatantFlags,
  type CombatantParams,
} from "../src/domain/combat/Combatant";
import {
  calculateWhiteEffect,
  WHITE_DAMAGE_PERCENTAGE_PER_OTHER,
} from "../src/domain/combat/WhiteEffect";
import { StatusSet } from "../src/domain/status/StatusSet";

const createCombatant = (
  overrides: Partial<CombatantParams> = {},
): Combatant =>
  new Combatant({
    id: "actor-1",
    hp: 100,
    maxHp: 100,
    barrier: 0,
    constitution: 10,
    san: 0,
    isPlayer: true,
    resist: 0,
    resistEnemy: 0,
    confResist: 0,
    econfResistEnemy: 0,
    doubleConstitution: false,
    statuses: new StatusSet(),
    flags: {},
    ...overrides,
  });

const whiteFlagKeys = [
  "checkWhiteAlly",
  "checkWhiteLeader",
  "checkWhiteEnemy",
] as const satisfies ReadonlyArray<keyof CombatantFlags>;

describe("calculateWhiteEffect", () => {
  it.each(whiteFlagKeys)("%s が真なら白化と判定する", (flagKey) => {
    const subject = createCombatant({ flags: { [flagKey]: true } });

    expect(calculateWhiteEffect(subject, [subject])).toEqual({
      applies: true,
      otherWhiteCount: 0,
      percentage: 0,
    });
  });

  it("自分以外の白化プレイヤー一人につき5%を算出する", () => {
    const subject = createCombatant({
      id: "subject",
      flags: { checkWhiteAlly: true },
    });
    const ally = createCombatant({
      id: "ally",
      flags: { checkWhiteLeader: true },
    });
    const deadAlly = createCombatant({
      id: "dead-ally",
      hp: 0,
      flags: { checkWhiteEnemy: true },
    });
    const duplicatedAlly = createCombatant({
      id: "ally",
      flags: { checkWhiteAlly: true },
    });
    const enemy = createCombatant({
      id: "enemy",
      isPlayer: false,
      flags: { checkWhiteAlly: true },
    });

    expect(
      calculateWhiteEffect(subject, [
        subject,
        ally,
        deadAlly,
        duplicatedAlly,
        enemy,
      ]),
    ).toEqual({
      applies: true,
      otherWhiteCount: 2,
      percentage: 2 * WHITE_DAMAGE_PERCENTAGE_PER_OTHER,
    });
  });

  it("白化していないプレイヤーには適用しない", () => {
    const subject = createCombatant({ id: "subject" });
    const whiteAlly = createCombatant({
      id: "ally",
      flags: { checkWhiteAlly: true },
    });

    expect(calculateWhiteEffect(subject, [subject, whiteAlly])).toEqual({
      applies: false,
      otherWhiteCount: 0,
      percentage: 0,
    });
  });

  it("白化フラグを持つ敵には適用しない", () => {
    const subject = createCombatant({
      id: "enemy-1",
      isPlayer: false,
      flags: { checkWhiteEnemy: true },
    });
    const otherEnemy = createCombatant({
      id: "enemy-2",
      isPlayer: false,
      flags: { checkWhiteEnemy: true },
    });

    expect(calculateWhiteEffect(subject, [subject, otherEnemy])).toEqual({
      applies: false,
      otherWhiteCount: 0,
      percentage: 0,
    });
  });
});
