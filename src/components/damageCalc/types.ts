export type TokenOption = {
  actorId: string;
  name: string;
  isPlayer: boolean;
};

export const optionLabel = (token: TokenOption) =>
  `${token.name} ${token.isPlayer ? "(プレイヤー)" : "(エネミー)"}`;
