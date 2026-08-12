import { describe, expect, it } from "vitest";
import { Combatant } from "../src/domain/combat/Combatant";
import {
  ANKA_DAMAGE_PERCENTAGE_PER_STACK,
  ANKA_MAX_STACK,
  calculateAnkaEffect,
} from "../src/domain/status/Anka";
import { StatusSet } from "../src/domain/status/StatusSet";

const createCombatant = (statuses: StatusSet): Combatant =>
  new Combatant({
    id: "actor-1",
    hp: 100,
    maxHp: 100,
    barrier: 0,
    constitution: 20,
    san: 0,
    isPlayer: false,
    resist: 0,
    resistEnemy: 0,
    confResist: 0,
    econfResistEnemy: 0,
    doubleConstitution: false,
    statuses,
    flags: {},
  });

describe("アンカの渦潮", () => {
  it("1スタックにつき被ダメージ補正を5%算出する", () => {
    const combatant = createCombatant(
      new StatusSet({ Anka: { stack: 3, pending: 0 } }),
    );

    expect(calculateAnkaEffect(combatant)).toEqual({
      stack: 3,
      percentage: 3 * ANKA_DAMAGE_PERCENTAGE_PER_STACK,
    });
  });

  it("初期値・設定・加算のすべてで5スタックを上限にする", () => {
    const statuses = new StatusSet({ Anka: { stack: 8, pending: 0 } });
    expect(statuses.getStack("Anka")).toBe(ANKA_MAX_STACK);

    statuses.setStack("Anka", 10);
    expect(statuses.getStack("Anka")).toBe(ANKA_MAX_STACK);

    statuses.setStack("Anka", 4);
    statuses.addStack("Anka", 3);
    expect(statuses.getStack("Anka")).toBe(ANKA_MAX_STACK);
  });
});
