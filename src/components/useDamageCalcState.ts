import { useEffect, useMemo, useState } from "react";
import {
  calculateAndApplyDamage,
  type DamageResult,
} from "../utils/combatCalculator";

export type TokenOption = {
  id: string;
  name: string;
  actor: Actor;
  isPlayer: boolean;
};

const isPlayerActor = (actor: Actor): boolean =>
  Boolean((actor.system as { attributes?: { isPlayer?: { value?: number } } })
    ?.attributes?.isPlayer?.value ?? 0);

const buildTokenOptions = (): TokenOption[] =>
  (canvas?.tokens?.placeables ?? [])
    .filter((token) => !!token.actor)
    .map((token) => ({
      id: token.id ?? crypto.randomUUID(),
      name: token.name ?? token.actor?.name ?? "unknown",
      actor: token.actor as Actor,
      isPlayer: isPlayerActor(token.actor as Actor),
    }));

const pickDefaultAttacker = (list: TokenOption[]) =>
  list.find((token) => token.isPlayer)?.id ?? list[0]?.id ?? "";

const pickDefaultReceiver = (list: TokenOption[], attackerId: string) =>
  list.find((token) => token.id !== attackerId && !token.isPlayer)?.id ??
  list.find((token) => token.id !== attackerId)?.id ??
  "";

export type DamageCalcState = {
  tokens: TokenOption[];
  attackerId: string;
  receiverId: string;
  baseDamage: string;
  result: DamageResult | null;
  running: boolean;
  setAttackerId: (value: string) => void;
  setReceiverId: (value: string) => void;
  setBaseDamage: (value: string) => void;
  run: () => Promise<void>;
};

export const useDamageCalcState = (): DamageCalcState => {
  const [tokens, setTokens] = useState<TokenOption[]>([]);
  const [attackerId, setAttackerId] = useState<string>("");
  const [receiverId, setReceiverId] = useState<string>("");
  const [baseDamage, setBaseDamage] = useState<string>("");
  const [result, setResult] = useState<DamageResult | null>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    setTokens(buildTokenOptions());
  }, []);

  const tokenMap = useMemo(() => {
    const map = new Map<string, TokenOption>();
    tokens.forEach((t) => map.set(t.id, t));
    return map;
  }, [tokens]);

  useEffect(() => {
    if (!tokens.length) {
      if (attackerId) setAttackerId("");
      if (receiverId) setReceiverId("");
      return;
    }

    const validIds = new Set(tokens.map((t) => t.id));
    let nextAttackerId = attackerId;
    if (!nextAttackerId || !validIds.has(nextAttackerId)) {
      nextAttackerId = pickDefaultAttacker(tokens);
    }

    let nextReceiverId = receiverId;
    if (
      !nextReceiverId ||
      !validIds.has(nextReceiverId) ||
      nextReceiverId === nextAttackerId
    ) {
      nextReceiverId = pickDefaultReceiver(tokens, nextAttackerId);
    }

    if (nextAttackerId !== attackerId) setAttackerId(nextAttackerId);
    if (nextReceiverId !== receiverId) setReceiverId(nextReceiverId);
  }, [tokens, attackerId, receiverId]);

  const run = async () => {
    const base = Number(baseDamage);
    if (!Number.isFinite(base) || base <= 0) {
      ui.notifications?.error("ダメージに正の数値を入力してください");
      return;
    }
    const attacker = attackerId ? tokenMap.get(attackerId) : undefined;
    const receiver = receiverId ? tokenMap.get(receiverId) : undefined;

    if (!attacker || !receiver) {
      ui.notifications?.error("攻撃者と防御者を選択してください");
      return;
    }
    if (attacker.id === receiver.id) {
      ui.notifications?.error("攻撃者と防御者は別のキャラクターを選んでください");
      return;
    }

    try {
      setRunning(true);
      const calcResult = await calculateAndApplyDamage({
        attacker: attacker.actor,
        receiver: receiver.actor,
        baseDamage: base,
      });
      setResult(calcResult);
      ui.notifications?.info(
        `${attacker.name} が ${receiver.name} にダメージを適用しました`
      );
    } catch (error) {
      console.error("[ponkotu-system] damage calc failed", error);
      ui.notifications?.error("計算または適用に失敗しました。コンソールを確認してください。");
    } finally {
      setRunning(false);
    }
  };

  return {
    tokens,
    attackerId,
    receiverId,
    baseDamage,
    result,
    running,
    setAttackerId,
    setReceiverId,
    setBaseDamage,
    run,
  };
};
