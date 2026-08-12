import { useEffect, useState } from "react";
import { statusDefinitions } from "../../../domain/status/StatusDefinitions";
import { type TokenOption } from "../types";

const statusStackKeys = statusDefinitions.map((def) => def.attribute.stack);

const isPlayableCharacter = (actor: Actor): boolean => {
  const attrs = (actor.system as { attributes?: Record<string, unknown> })?.attributes;
  if (!attrs?.hp) return false;
  return statusStackKeys.some((key) => key in attrs);
};

const buildTokenOptions = (): TokenOption[] => {
  const options = (canvas?.tokens?.placeables ?? [])
    .filter((token) => !!token.actor?.id && isPlayableCharacter(token.actor as Actor))
    .map((token) => ({
      actorId: token.actor?.id ?? "",
      name: token.name ?? token.actor?.name ?? "unknown",
      actorName: token.actor?.name ?? "",
      disposition: token.document.disposition,
    }));

  return Array.from(
    new Map(options.map((option) => [option.actorId, option])).values(),
  ).sort((a, b) => b.disposition - a.disposition); // 友好的→中立→敵対的→秘密
};

export const useDamageCalcTokens = (): TokenOption[] => {
  const [tokens, setTokens] = useState<TokenOption[]>([]);

  useEffect(() => {
    const refresh = () => setTokens(buildTokenOptions());
    const onCanvasReady = () => refresh();
    const onTokenChange = () => refresh();
    const onActorUpdate = () => refresh();

    refresh();
    Hooks.on("canvasReady", onCanvasReady);
    Hooks.on("createToken", onTokenChange);
    Hooks.on("updateToken", onTokenChange);
    Hooks.on("deleteToken", onTokenChange);
    Hooks.on("updateActor", onActorUpdate);

    return () => {
      Hooks.off("canvasReady", onCanvasReady);
      Hooks.off("createToken", onTokenChange);
      Hooks.off("updateToken", onTokenChange);
      Hooks.off("deleteToken", onTokenChange);
      Hooks.off("updateActor", onActorUpdate);
    };
  }, []);

  return tokens;
};
