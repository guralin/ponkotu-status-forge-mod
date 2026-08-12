import { describe, expect, it } from "vitest";
import { combatantFromActor } from "../src/repository/combatantFromActor";

const createActor = (attributes: Record<string, unknown>): Actor =>
  ({
    id: "actor-1",
    name: "白化テスト",
    system: { attributes },
  }) as unknown as Actor;

describe("combatantFromActor", () => {
  it("stackAnkaを読み込み時に5スタックへ制限する", () => {
    const actor = createActor({
      stackAnka: { value: 9 },
    });

    const combatant = combatantFromActor(actor);

    expect(combatant.statuses.getStack("Anka")).toBe(5);
  });

  it("Actorの白化3属性をCombatantFlagsへ読み込む", () => {
    const actor = createActor({
      isPlayer: { value: true },
      checkWhiteAlly: { value: 1 },
      checkWhiteLeader: { value: 0 },
      checkWhiteEnemy: { value: true },
    });

    const combatant = combatantFromActor(actor);

    expect(combatant.isPlayer).toBe(true);
    expect(combatant.flags.checkWhiteAlly).toBe(true);
    expect(combatant.flags.checkWhiteLeader).toBe(false);
    expect(combatant.flags.checkWhiteEnemy).toBe(true);
    expect(combatant.isWhite()).toBe(true);
  });
});
