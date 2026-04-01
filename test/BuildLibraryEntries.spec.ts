import { describe, expect, it } from "vitest";
import { buildLibraryEntries } from "../src/components/damageCalc/hooks/useStatusLibrary";
import { StatusSet } from "../src/domain/status/StatusSet";
import { type StatusDefinition } from "../src/domain/status/types/StatusDefinition";

const defs: ReadonlyArray<StatusDefinition<string>> = [
  { id: "Burned", name: "やけど", attribute: { stack: "stackBurned", pending: "stackBurnednext" }, hasPending: true },
  { id: "DarkFire", name: "黒炎", attribute: { stack: "stackDarkFire" } },
  { id: "Poison", name: "毒", attribute: { stack: "stackPoison", pending: "stackPoisonnext" }, hasPending: true },
];

describe("buildLibraryEntries", () => {
  it("全ステータスが0の場合は空配列を返す", () => {
    const statuses = new StatusSet();
    const result = buildLibraryEntries(statuses, defs);
    expect(result).toEqual([]);
  });

  it("stack > 0 のステータスのみ含まれる", () => {
    const statuses = new StatusSet({ Burned: { stack: 3, pending: 0 } } as never);
    const result = buildLibraryEntries(statuses, defs);
    expect(result).toEqual([
      { id: "Burned", name: "やけど", stack: 3, pending: 0, hasPending: true },
    ]);
  });

  it("pending > 0 かつ stack = 0 のステータスも含まれる", () => {
    const statuses = new StatusSet({ Poison: { stack: 0, pending: 2 } } as never);
    const result = buildLibraryEntries(statuses, defs);
    expect(result).toEqual([
      { id: "Poison", name: "毒", stack: 0, pending: 2, hasPending: true },
    ]);
  });

  it("hasPendingが定義から正しく反映される", () => {
    const statuses = new StatusSet({
      Burned: { stack: 1, pending: 0 },
      DarkFire: { stack: 2, pending: 0 },
    } as never);
    const result = buildLibraryEntries(statuses, defs);
    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({ id: "Burned", hasPending: true });
    expect(result[1]).toMatchObject({ id: "DarkFire", hasPending: false });
  });

  it("複数ステータスが混在する場合、定義順に返す", () => {
    const statuses = new StatusSet({
      Poison: { stack: 1, pending: 3 },
      Burned: { stack: 2, pending: 1 },
    } as never);
    const result = buildLibraryEntries(statuses, defs);
    expect(result).toHaveLength(2);
    expect(result[0]!.id).toBe("Burned");
    expect(result[1]!.id).toBe("Poison");
  });
});
