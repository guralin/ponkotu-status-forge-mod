import { useEffect, useMemo, useState } from "react";
import { CombatantRepository } from "../../../repository/CombatantRepository";
import { applyDamage, type DamageResult } from "../../../utils/combatCalculator";
import { type TokenOption } from "../types";

const pickDefaultAttacker = (list: TokenOption[]) =>
  list.find((token) => token.isPlayer)?.actorId ?? list[0]?.actorId ?? "";

const pickDefaultReceiver = (list: TokenOption[], attackerId: string) =>
  list.find((token) => token.actorId !== attackerId && !token.isPlayer)
    ?.actorId ??
  list.find((token) => token.actorId !== attackerId)?.actorId ??
  "";

export type DamageApplyFormState = {
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

export const useDamageApplyForm = (tokens: TokenOption[]): DamageApplyFormState => {
  const [attackerId, setAttackerId] = useState<string>("");
  const [receiverId, setReceiverId] = useState<string>("");
  const [baseDamage, setBaseDamage] = useState<string>("");
  const [result, setResult] = useState<DamageResult | null>(null);
  const [running, setRunning] = useState(false);

  const tokenMap = useMemo(() => {
    const map = new Map<string, TokenOption>();
    tokens.forEach((token) => map.set(token.actorId, token));
    return map;
  }, [tokens]);

  useEffect(() => {
    if (!tokens.length) {
      if (attackerId) setAttackerId("");
      if (receiverId) setReceiverId("");
      return;
    }

    const validIds = new Set(tokens.map((token) => token.actorId));
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
    if (attackerId === receiverId) {
      ui.notifications?.error("攻撃者と防御者は別のキャラクターを選んでください");
      return;
    }

    try {
      setRunning(true);
      const repository = new CombatantRepository();
      const attackerRecord = repository.loadByActorId(attackerId);
      const receiverRecord = repository.loadByActorId(receiverId);
      if (!attackerRecord || !receiverRecord) {
        ui.notifications?.error("攻撃者または防御者のデータを取得できませんでした");
        return;
      }
      const { result: calcResult, attacker: nextAttacker, receiver: nextReceiver } =
        applyDamage({
          attacker: attackerRecord.combatant,
          receiver: receiverRecord.combatant,
          baseDamage: base,
        });

      await Promise.all([
        repository.saveActor(nextAttacker),
        repository.saveActor(nextReceiver),
      ]);

      const content = `
${attacker.name} → ${receiver.name}<br/>
基礎ダメージ: ${base}<br/>
HPダメージ: ${calcResult.hpDamageApplied} (バリア吸収: ${calcResult.barrierAbsorbed})<br/>
混乱ダメージ: ${calcResult.confDamageApplied}<br/>
SANダメージ(沈潜): ${calcResult.sanDamageApplied}<br/>
`;
      await ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: attackerRecord.actor }),
        content,
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
