import { useEffect, useState } from "react";
import { statusDefinitions } from "../../../domain/status/definitions";
import { type TokenOption } from "../types";

const statusStackKeys = statusDefinitions.map((def) => def.attribute.stack);

const isPlayableCharacter = (actor: Actor): boolean => {
  const attrs = (actor.system as { attributes?: Record<string, unknown> })?.attributes;
  if (!attrs?.hp) return false;
  return statusStackKeys.some((key) => key in attrs);
};

const buildTokenOptions = (): TokenOption[] =>
  (canvas?.tokens?.placeables ?? [])
    .filter((token) => !!token.actor?.id && isPlayableCharacter(token.actor as Actor))
    .map((token) => ({
      actorId: token.actor?.id ?? "",
      name: token.name ?? token.actor?.name ?? "unknown",
      actorName: token.actor?.name ?? "",
      disposition: token.document.disposition,
    }));

export const useDamageCalcTokens = (): TokenOption[] => {
  const [tokens, setTokens] = useState<TokenOption[]>([]);

  useEffect(() => {
    setTokens(buildTokenOptions());
  }, []);

  return tokens;
};
