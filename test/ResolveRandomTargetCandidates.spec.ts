import { describe, expect, it } from "vitest";
import { resolveRandomTargetCandidates } from "../src/components/damageCalc/hooks/useStatusApplyForm";
import { type TokenOption } from "../src/components/damageCalc/types";
import { TOKEN_DISPOSITIONS } from "../src/components/damageCalc/tokenDispositions";

const player1: TokenOption = { actorId: "p1", name: "勇者", actorName: "勇者", disposition: TOKEN_DISPOSITIONS.FRIENDLY };
const player2: TokenOption = { actorId: "p2", name: "魔法使い", actorName: "魔法使い", disposition: TOKEN_DISPOSITIONS.FRIENDLY };
const enemy1: TokenOption = { actorId: "e1", name: "スライム", actorName: "スライム", disposition: TOKEN_DISPOSITIONS.HOSTILE };
const enemy2: TokenOption = { actorId: "e2", name: "ドラゴン", actorName: "ドラゴン", disposition: TOKEN_DISPOSITIONS.HOSTILE };

const allTokens = [player1, player2, enemy1, enemy2];

describe("resolveRandomTargetCandidates", () => {
  describe("random:all", () => {
    it("全トークンを返す", () => {
      const result = resolveRandomTargetCandidates("random:all", allTokens);
      expect(result).toEqual(allTokens);
    });

    it("トークンが0件の場合は空配列を返す", () => {
      const result = resolveRandomTargetCandidates("random:all", []);
      expect(result).toEqual([]);
    });
  });

  describe("random:ally", () => {
    it("プレイヤートークンのみを返す", () => {
      const result = resolveRandomTargetCandidates("random:ally", allTokens);
      expect(result).toEqual([player1, player2]);
    });

    it("プレイヤーが1人だけでも返す", () => {
      const result = resolveRandomTargetCandidates("random:ally", [player1, enemy1, enemy2]);
      expect(result).toEqual([player1]);
    });

    it("プレイヤーが0件の場合は空配列を返す", () => {
      const result = resolveRandomTargetCandidates("random:ally", [enemy1, enemy2]);
      expect(result).toEqual([]);
    });
  });

  describe("random:enemy", () => {
    it("エネミートークンのみを返す", () => {
      const result = resolveRandomTargetCandidates("random:enemy", allTokens);
      expect(result).toEqual([enemy1, enemy2]);
    });

    it("エネミーが1体だけでも返す", () => {
      const result = resolveRandomTargetCandidates("random:enemy", [player1, player2, enemy1]);
      expect(result).toEqual([enemy1]);
    });

    it("エネミーが0件の場合は空配列を返す", () => {
      const result = resolveRandomTargetCandidates("random:enemy", [player1, player2]);
      expect(result).toEqual([]);
    });
  });
});
