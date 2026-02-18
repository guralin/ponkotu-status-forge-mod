import { useEffect, useMemo, useState } from "react";
import { CombatantRepository } from "../repository/CombatantRepository";
import { TurnProcessor } from "../domain/combat/TurnProcessor";
import { applyDamage, type DamageResult } from "../utils/combatCalculator";

export type TokenOption = {
  actorId: string;
  name: string;
  isPlayer: boolean;
};

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
    }))
    .filter((token) => token.isPlayer);

const pickDefaultAttacker = (list: TokenOption[]) =>
  list.find((token) => token.isPlayer)?.actorId ?? list[0]?.actorId ?? "";

const pickDefaultReceiver = (list: TokenOption[], attackerId: string) =>
  list.find((token) => token.actorId !== attackerId && !token.isPlayer)
    ?.actorId ??
  list.find((token) => token.actorId !== attackerId)?.actorId ??
  "";

export type DamageCalcState = {
  tokens: TokenOption[];
  attackerId: string;
  receiverId: string;
  baseDamage: string;
  result: DamageResult | null;
  running: boolean;
  turnRunning: boolean;
  setAttackerId: (value: string) => void;
  setReceiverId: (value: string) => void;
  setBaseDamage: (value: string) => void;
  run: () => Promise<void>;
  runTurnProcess: () => Promise<void>;
};

export const useDamageCalcState = (): DamageCalcState => {
  const [tokens, setTokens] = useState<TokenOption[]>([]);
  const [attackerId, setAttackerId] = useState<string>("");
  const [receiverId, setReceiverId] = useState<string>("");
  const [baseDamage, setBaseDamage] = useState<string>("");
  const [result, setResult] = useState<DamageResult | null>(null);
  const [running, setRunning] = useState(false);
  const [turnRunning, setTurnRunning] = useState(false);

  useEffect(() => {
    console.log(canvas?.tokens?.placeables);
    setTokens(buildTokenOptions());
  }, []);

  const tokenMap = useMemo(() => {
    const map = new Map<string, TokenOption>();
    tokens.forEach((t) => map.set(t.actorId, t));
    return map;
  }, [tokens]);

  useEffect(() => {
    if (!tokens.length) {
      if (attackerId) setAttackerId("");
      if (receiverId) setReceiverId("");
      return;
    }

    const validIds = new Set(tokens.map((t) => t.actorId));
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
        applyDamage(
        {
          attacker: attackerRecord.combatant,
          receiver: receiverRecord.combatant,
          baseDamage: base,
        }
      );

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

  const runTurnStart = async (): Promise<number> => {
    const targetIds = Array.from(
      new Set(tokens.map((token) => token.actorId).filter((id) => id))
    );
    if (!targetIds.length) {
      ui.notifications?.error("ターン開始処理の対象が見つかりません");
      return 0;
    }

    try {
      const repository = new CombatantRepository();
      const records = targetIds
        .map((id) => repository.loadByActorId(id))
        .filter((record): record is NonNullable<typeof record> => !!record);
      if (!records.length) {
        ui.notifications?.error("ターン開始処理の対象を取得できませんでした");
        return 0;
      }
      records.forEach((record) => {
        TurnProcessor.turnStart(record.combatant);
      });
      await Promise.all(records.map((record) => repository.saveActor(record.combatant)));
      return records.length;
    } catch (error) {
      console.error("[ponkotu-system] turn process failed", error);
      ui.notifications?.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  };

  const runTurnEnd = async (): Promise<number> => {
    const targetIds = Array.from(
      new Set(tokens.map((token) => token.actorId).filter((id) => id))
    );
    if (!targetIds.length) {
      ui.notifications?.error("ターン終了処理の対象が見つかりません");
      return 0;
    }

    try {
      const repository = new CombatantRepository();
      const records = targetIds
        .map((id) => repository.loadByActorId(id))
        .filter((record): record is NonNullable<typeof record> => !!record);
      if (!records.length) {
        ui.notifications?.error("ターン終了処理の対象を取得できませんでした");
        return 0;
      }
      records.forEach((record) => {
        TurnProcessor.turnEnd(record.combatant);
      });
      await Promise.all(records.map((record) => repository.saveActor(record.combatant)));
      return records.length;
    } catch (error) {
      console.error("[ponkotu-system] turn end failed", error);
      ui.notifications?.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  };

  const runTurnProcess = async () => {
    if (turnRunning) return;
    try {
      setTurnRunning(true);
      const appliedCount = await runTurnEnd();
      const startedCount = await runTurnStart();
      const processedCount =
        appliedCount > 0 ? appliedCount : startedCount;
      if (processedCount > 0) {
        ui.notifications?.info(`ターン処理を${processedCount}体に適用しました`);
      }
    } finally {
      setTurnRunning(false);
    }
  };

  return {
    tokens,
    attackerId,
    receiverId,
    baseDamage,
    result,
    running,
    turnRunning,
    setAttackerId,
    setReceiverId,
    setBaseDamage,
    run,
    runTurnProcess,
  };
};
