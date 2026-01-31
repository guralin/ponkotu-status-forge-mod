import { describe, expect, it } from "vitest";
import { Combatant } from "../src/domain/combat/Combatant";
import { TurnProcessor } from "../src/domain/combat/TurnProcessor";
import { StatusSet } from "../src/domain/status/StatusSet";

const createCombatant = (overrides?: Partial<Combatant>) =>
  new Combatant({
    id: "dummy-id",
    hp: 100,
    maxHp: 100,
    barrier: 0,
    constitution: 30,
    san: 0,
    isPlayer: false,
    directcheck: false,
    criticalcheck: false,
    resist: 0,
    resistEnemy: 0,
    confResist: 0,
    econfResistEnemy: 0,
    doubleConstitution: false,
    statuses: new StatusSet(),
    flags: {},
    ...overrides,
  });

describe("TurnProcessor", () => {
  it("turnStart で pending が stack にコミットされ、pending が 0 になる", () => {
    const statuses = new StatusSet({
      Burned: { stack: 1, pending: 2 },
      Regen: { stack: 0, pending: 3 },
    });
    const combatant = createCombatant({ statuses });

    TurnProcessor.turnStart(combatant);

    expect(combatant.statuses.getStack("Burned")).toBe(3);
    expect(combatant.statuses.getPending("Burned")).toBe(0);
    expect(combatant.statuses.getStack("Regen")).toBe(3);
    expect(combatant.statuses.getPending("Regen")).toBe(0);
  });

  it("turnEnd で Burned/Poison/Tremor が DOT + 減衰する", () => {
    const statuses = new StatusSet({
      Burned: { stack: 6, pending: 0 },
      Poison: { stack: 5, pending: 0 },
      Tremor: { stack: 9, pending: 0 },
    });
    const combatant = createCombatant({ hp: 100, statuses });

    TurnProcessor.turnEnd(combatant);

    expect(combatant.hp).toBe(80);
    expect(combatant.statuses.getStack("Burned")).toBe(4);
    expect(combatant.statuses.getStack("Poison")).toBe(2);
    expect(combatant.statuses.getStack("Tremor")).toBe(6);
  });

  it("DarkFire が先に消費され、その後 Burned の DOT が処理される", () => {
    const statuses = new StatusSet({
      Burned: { stack: 5, pending: 0 },
      DarkFire: { stack: 2, pending: 0 },
    });
    const combatant = createCombatant({ hp: 100, statuses });

    TurnProcessor.turnEnd(combatant);

    expect(combatant.hp).toBe(85);
    expect(combatant.statuses.getStack("DarkFire")).toBe(0);
    expect(combatant.statuses.getStack("Burned")).toBe(3);
  });

  it("turnEnd で barrier が 0 になる", () => {
    const combatant = createCombatant({ barrier: 12 });

    TurnProcessor.turnEnd(combatant);

    expect(combatant.barrier).toBe(0);
  });

  it("Regen が turnStart で回復し、turnEnd で 1 減少する", () => {
    const statuses = new StatusSet({
      Regen: { stack: 2, pending: 0 },
    });
    const combatant = createCombatant({ hp: 50, maxHp: 100, statuses });

    TurnProcessor.turnStart(combatant);
    expect(combatant.hp).toBe(60);
    expect(combatant.statuses.getStack("Regen")).toBe(2);

    TurnProcessor.turnEnd(combatant);
    expect(combatant.statuses.getStack("Regen")).toBe(1);
    expect(combatant.hp).toBe(60);
  });

  it("Sink は checkNk のとき stack が +2 される", () => {
    const statuses = new StatusSet({
      Sink: { stack: 3, pending: 0 },
    });
    const combatant = createCombatant({ statuses, flags: { checkNk: true } });

    TurnProcessor.turnEnd(combatant);

    expect(combatant.statuses.getStack("Sink")).toBe(5);
  });
});
