import { describe, expect, it } from "vitest";
import {
  applyStatusStack,
  type ApplyStatusStackCommand,
} from "../src/application/usecases/applyStatusStack";
import { Combatant } from "../src/domain/combat/Combatant";
import { StatusSet } from "../src/domain/status/StatusSet";
import {
  type CombatantRecord,
  type ICombatantRepository,
} from "../src/repository/ICombatantRepository";

const createCombatant = (overrides?: Partial<Combatant>) =>
  new Combatant({
    id: "actor-1",
    name: "tester",
    hp: 100,
    maxHp: 100,
    barrier: 0,
    constitution: 20,
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

class FakeCombatantRepository implements ICombatantRepository {
  private readonly record: CombatantRecord | null;
  saveActorCallCount = 0;

  constructor(record: CombatantRecord | null) {
    this.record = record;
  }

  loadByActorId(actorId: string): CombatantRecord | null {
    if (!this.record) return null;
    return this.record.actorId === actorId ? this.record : null;
  }

  async saveActor(_combatant: Combatant): Promise<void> {
    this.saveActorCallCount += 1;
  }

  async save(_record: CombatantRecord): Promise<void> {
    return Promise.resolve();
  }
}

const createCommand = (
  overrides?: Partial<ApplyStatusStackCommand>
): ApplyStatusStackCommand => ({
  actorId: "actor-1",
  statusId: "Burned",
  stackDelta: 2,
  ...overrides,
});

describe("applyStatusStack", () => {
  it("現在スタックに加算して保存し、前後値を返す", async () => {
    const combatant = createCombatant({
      statuses: new StatusSet({ Burned: { stack: 3, pending: 0 } }),
    });
    const repository = new FakeCombatantRepository({
      actorId: "actor-1",
      actor: { name: "tester" } as Actor,
      combatant,
    });

    const result = await applyStatusStack(repository, createCommand());

    expect(repository.saveActorCallCount).toBe(1);
    expect(result.target).toBe("stack");
    expect(result.before).toBe(3);
    expect(result.after).toBe(5);
    expect(combatant.statuses.getStack("Burned")).toBe(5);
  });

  it("pending 指定時は next スタックに加算する", async () => {
    const combatant = createCombatant({
      statuses: new StatusSet({ Burned: { stack: 3, pending: 1 } }),
    });
    const repository = new FakeCombatantRepository({
      actorId: "actor-1",
      actor: { name: "tester" } as Actor,
      combatant,
    });

    const result = await applyStatusStack(
      repository,
      createCommand({ target: "pending", stackDelta: 2 })
    );

    expect(repository.saveActorCallCount).toBe(1);
    expect(result.target).toBe("pending");
    expect(result.before).toBe(1);
    expect(result.after).toBe(3);
    expect(combatant.statuses.getStack("Burned")).toBe(3);
    expect(combatant.statuses.getPending("Burned")).toBe(3);
  });

  it("actorId が空文字なら失敗する", async () => {
    const repository = new FakeCombatantRepository(null);

    await expect(
      applyStatusStack(repository, createCommand({ actorId: "" }))
    ).rejects.toThrow("actorId is required");
  });

  it("stackDelta が 1 未満または整数でなければ失敗する", async () => {
    const combatant = createCombatant();
    const repository = new FakeCombatantRepository({
      actorId: "actor-1",
      actor: { name: "tester" } as Actor,
      combatant,
    });

    await expect(
      applyStatusStack(repository, createCommand({ stackDelta: 0 }))
    ).rejects.toThrow("stackDelta must be a positive integer");
    await expect(
      applyStatusStack(repository, createCommand({ stackDelta: -1 }))
    ).rejects.toThrow("stackDelta must be a positive integer");
    await expect(
      applyStatusStack(repository, createCommand({ stackDelta: 1.5 }))
    ).rejects.toThrow("stackDelta must be a positive integer");
  });

  it("対象の combatant が見つからない場合は失敗する", async () => {
    const repository = new FakeCombatantRepository(null);

    await expect(
      applyStatusStack(repository, createCommand({ actorId: "unknown" }))
    ).rejects.toThrow("combatant record not found");
  });

  it("pending 非対応ステータスに pending 指定した場合は失敗する", async () => {
    const combatant = createCombatant();
    const repository = new FakeCombatantRepository({
      actorId: "actor-1",
      actor: { name: "tester" } as Actor,
      combatant,
    });

    await expect(
      applyStatusStack(
        repository,
        createCommand({ statusId: "DarkFire", target: "pending" })
      )
    ).rejects.toThrow("selected status does not support pending");
  });
});
