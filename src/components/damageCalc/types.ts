import { TOKEN_DISPOSITIONS } from "./tokenDispositions";

export type TokenOption = {
  actorId: string;
  name: string;
  actorName: string;
  disposition: number;
};

const dispositionLabel = (disposition: number): string => {
  switch (disposition) {
    case TOKEN_DISPOSITIONS.FRIENDLY:  return "友好的";
    case TOKEN_DISPOSITIONS.NEUTRAL:   return "中立";
    case TOKEN_DISPOSITIONS.HOSTILE:   return "敵対的";
    case TOKEN_DISPOSITIONS.SECRET:    return "秘密";
    default:                            return "不明";
  }
};

export const optionLabel = (token: TokenOption) =>
  `${token.name}（${token.actorName}） (${dispositionLabel(token.disposition)})`;

/** 状態異常付与フォーム専用の対象選択値 */
export type StatusTargetValue =
  | string              // actorId（特定キャラ）
  | "random:ally"       // ランダム（味方）
  | "random:enemy"      // ランダム（敵）
  | "random:all";       // ランダム（全体）

export const RANDOM_TARGET_OPTIONS = [
  { value: "random:ally" as const, label: "ランダム（味方）" },
  { value: "random:enemy" as const, label: "ランダム（敵）" },
  { value: "random:all" as const, label: "ランダム（全体）" },
] as const;
