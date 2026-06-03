import { TOKEN_DISPOSITIONS } from "../../components/damageCalc/tokenDispositions";
import { type TokenOption } from "../../components/damageCalc/types";

export type RandomTargetValue = "random:ally" | "random:enemy" | "random:all";

export const isRandomTarget = (value: string): value is RandomTargetValue =>
  value === "random:ally" || value === "random:enemy" || value === "random:all";

export const resolveRandomTargetCandidates = (
  value: RandomTargetValue,
  tokens: TokenOption[],
): TokenOption[] => {
  if (value === "random:all") return tokens;
  if (value === "random:ally") {
    return tokens.filter((token) => token.disposition === TOKEN_DISPOSITIONS.FRIENDLY);
  }
  return tokens.filter((token) => token.disposition !== TOKEN_DISPOSITIONS.FRIENDLY);
};
