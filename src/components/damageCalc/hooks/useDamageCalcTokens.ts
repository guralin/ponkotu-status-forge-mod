import { useEffect, useState } from "react";
import { type TokenOption } from "../types";

const isPlayerActor = (actor: Actor): boolean =>
  Boolean((actor.system as { attributes?: { isPlayer?: { value?: number } } })
    ?.attributes?.isPlayer?.value ?? 0);

const buildTokenOptions = (): TokenOption[] =>
  (canvas?.tokens?.placeables ?? [])
    .filter((token) => !!token.actor?.id)
    .map((token) => ({
      actorId: token.actor?.id ?? "",
      name: token.name ?? token.actor?.name ?? "unknown",
      isPlayer: isPlayerActor(token.actor as Actor),
    }));

export const useDamageCalcTokens = (): TokenOption[] => {
  const [tokens, setTokens] = useState<TokenOption[]>([]);

  useEffect(() => {
    setTokens(buildTokenOptions());
  }, []);

  return tokens;
};
