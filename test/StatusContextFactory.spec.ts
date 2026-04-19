import { describe, expect, it } from "vitest";
import { Combatant } from "../src/domain/combat/Combatant";
import { createStatusContextFactory } from "../src/domain/status/StatusContextFactory";
import { StatusSet } from "../src/domain/status/StatusSet";
import { type DamageEvent } from "../src/domain/status/types/StatusDefinition";

const createCombatant = (overrides?: Partial<Combatant>): Combatant =>
  new Combatant({
    id: "dummy-id",
    hp: 100,
    maxHp: 100,
    barrier: 5,
    constitution: 30,
    san: 10,
    isPlayer: false,
    resist: 0,
    resistEnemy: 0,
    confResist: 0,
    econfResistEnemy: 0,
    doubleConstitution: false,
    statuses: new StatusSet(),
    flags: {},
    ...overrides,
  });

const damageEvent: DamageEvent = {
  baseDamage: 10,
  normalRatio: 1,
  specialRatio: 1,
  specialConfRatio: 1,
  dealDamage: 10,
  dealConfDamage: 10,
  hpDamageApplied: 5,
  confDamageApplied: 0,
  sanDamageApplied: 0,
  barrierAbsorbed: 5,
  poiseCritical: false,
  hpAfter: 95,
  barrierAfter: 0,
  constitutionAfter: 30,
  sanAfter: 10,
};

describe("StatusContextFactory", () => {
  it("共通 Context API で statuses と combatant へ委譲できる", () => {
    const combatant = createCombatant({
      statuses: new StatusSet({
        Burned: { stack: 2, pending: 1 },
      }),
    });

    const context = createStatusContextFactory<"Burned" | "Poison">(combatant);
    const burned = context.withStatus("Burned");

    burned.addStack("Burned", 3);
    burned.addPending("Poison", 2);
    burned.applyHpDamage(4);
    burned.healHp(2);
    burned.setBarrier(7);

    expect(combatant.statuses.getStack("Burned")).toBe(5);
    expect(combatant.statuses.getPending("Poison")).toBe(2);
    expect(combatant.hp).toBe(100);
    expect(combatant.barrier).toBe(7);
  });

  it("Damage Context は共通 API に加えて damage を持つ", () => {
    const combatant = createCombatant();

    const context = createStatusContextFactory<"Burned">(combatant);
    const damageContext = context.withDamageStatus("Burned", damageEvent);

    damageContext.setStack("Burned", 4);

    expect(damageContext.damage).toEqual(damageEvent);
    expect(combatant.statuses.getStack("Burned")).toBe(4);
  });
});
