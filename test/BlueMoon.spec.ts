import { describe, expect, it } from "vitest";
import { Combatant } from "../src/domain/combat/Combatant";
import { TurnProcessor } from "../src/domain/combat/TurnProcessor";
import { BLUE_MOON_MAX_STACK } from "../src/domain/status/BlueMoon";
import { StatusSet } from "../src/domain/status/StatusSet";

const createCombatant = (
  overrides: Partial<ConstructorParameters<typeof Combatant>[0]> = {},
): Combatant =>
  new Combatant({
    id: "actor-1",
    hp: 50,
    maxHp: 100,
    barrier: 0,
    constitution: 10,
    maxConstitution: 30,
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

describe("碧月", () => {
  it("生存中のラウンド開始時に1増加し、増加後スタックの1/4を切り上げて回復する", () => {
    const combatant = createCombatant({
      statuses: new StatusSet({ BlueMoon: { stack: 4, pending: 0 } }),
    });

    TurnProcessor.turnStart(combatant);

    expect(combatant.getStatusStack("BlueMoon")).toBe(5);
    expect(combatant.hp).toBe(52);
    expect(combatant.constitution).toBe(12);
  });

  it("20スタックを維持しながら毎ラウンド5回復する", () => {
    const combatant = createCombatant({
      statuses: new StatusSet({ BlueMoon: { stack: 20, pending: 0 } }),
    });

    TurnProcessor.turnStart(combatant);

    expect(combatant.getStatusStack("BlueMoon")).toBe(20);
    expect(combatant.hp).toBe(55);
    expect(combatant.constitution).toBe(15);
  });

  it("HPと混乱抵抗値はそれぞれの最大値を超えない", () => {
    const combatant = createCombatant({
      hp: 99,
      constitution: 29,
      statuses: new StatusSet({ BlueMoon: { stack: 20, pending: 0 } }),
    });

    TurnProcessor.turnStart(combatant);

    expect(combatant.hp).toBe(100);
    expect(combatant.constitution).toBe(30);
  });

  it("HPと混乱抵抗値が最大でもスタックは成長する", () => {
    const combatant = createCombatant({
      hp: 100,
      constitution: 30,
      statuses: new StatusSet({ BlueMoon: { stack: 1, pending: 0 } }),
    });

    TurnProcessor.turnStart(combatant);

    expect(combatant.getStatusStack("BlueMoon")).toBe(2);
    expect(combatant.hp).toBe(100);
    expect(combatant.constitution).toBe(30);
  });

  it("HP 0の死亡者はスタック増加も回復もしない", () => {
    const combatant = createCombatant({
      hp: 0,
      constitution: 5,
      statuses: new StatusSet({ BlueMoon: { stack: 4, pending: 0 } }),
    });

    TurnProcessor.turnStart(combatant);

    expect(combatant.getStatusStack("BlueMoon")).toBe(4);
    expect(combatant.hp).toBe(0);
    expect(combatant.constitution).toBe(5);
  });

  it("開始時ダメージより先にスタック増加と回復を処理する", () => {
    const combatant = createCombatant({
      hp: 1,
      constitution: 0,
      statuses: new StatusSet({
        BlueMoon: { stack: 4, pending: 0 },
        Witch1: { stack: 50, pending: 0 },
      }),
    });

    TurnProcessor.turnStart(combatant);

    expect(combatant.getStatusStack("BlueMoon")).toBe(5);
    expect(combatant.constitution).toBe(2);
    expect(combatant.hp).toBe(0);
  });

  it("初期値・設定・加算のすべてで20スタックを上限にする", () => {
    const statuses = new StatusSet({ BlueMoon: { stack: 30, pending: 0 } });
    expect(statuses.getStack("BlueMoon")).toBe(BLUE_MOON_MAX_STACK);

    statuses.setStack("BlueMoon", 25);
    expect(statuses.getStack("BlueMoon")).toBe(BLUE_MOON_MAX_STACK);

    statuses.setStack("BlueMoon", 19);
    statuses.addStack("BlueMoon", 5);
    expect(statuses.getStack("BlueMoon")).toBe(BLUE_MOON_MAX_STACK);
  });
});
