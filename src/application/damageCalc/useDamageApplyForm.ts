import { useEffect, useMemo, useState } from "react";
import { type TokenOption } from "../../components/damageCalc/types";
import { type Combatant } from "../../domain/combat/Combatant";
import { calculateWhiteEffect } from "../../domain/combat/WhiteEffect";
import { calculateAnkaEffect } from "../../domain/status/Anka";
import { CombatantRepository } from "../../repository/CombatantRepository";
import { type CombatantRecord } from "../../repository/ICombatantRepository";
import { TOKEN_DISPOSITIONS } from "../../components/damageCalc/tokenDispositions";
import {
  applyDamage,
  calcAttackerCriticalChancePreview,
  calcAttackerNormalPreview,
  calcReceiverNormalPreview,
  calcReceiverSpecialPreview,
  type DamageResult,
} from "../../utils/combatCalculator";

const pickDefaultAttacker = (list: TokenOption[]) =>
  list.find((token) => token.disposition === TOKEN_DISPOSITIONS.FRIENDLY)?.actorId ?? list[0]?.actorId ?? "";

const pickDefaultReceiver = (list: TokenOption[], attackerId: string) =>
  list.find((token) => token.actorId !== attackerId && token.disposition !== TOKEN_DISPOSITIONS.FRIENDLY)
    ?.actorId ??
  list.find((token) => token.actorId !== attackerId)?.actorId ??
  "";

const loadSceneCombatantRecords = (
  tokens: TokenOption[],
  repository: CombatantRepository,
): CombatantRecord[] =>
  Array.from(new Set(tokens.map((token) => token.actorId)))
    .map((actorId) => repository.loadByActorId(actorId))
    .filter((record): record is CombatantRecord => record !== null);

export type CombatantPreview = {
  normal: number;
  special: number;
  criticalChance?: number;
  whiteApplies: boolean;
  whiteOtherCount: number;
  whitePercentage: number;
  ankaStack: number;
  ankaPercentage: number;
};

export type DamageApplyFormState = {
  attackerId: string;
  receiverId: string;
  baseDamage: string;
  bonusNormal: string;
  bonusSpecial: string;
  directcheck: boolean;
  result: DamageResult | null;
  running: boolean;
  attackerPreview: CombatantPreview | null;
  receiverPreview: CombatantPreview | null;
  setAttackerId: (value: string) => void;
  setReceiverId: (value: string) => void;
  setBaseDamage: (value: string) => void;
  setBonusNormal: (value: string) => void;
  setBonusSpecial: (value: string) => void;
  setDirectcheck: (value: boolean) => void;
  run: () => Promise<void>;
};

export const useDamageApplyForm = (tokens: TokenOption[]): DamageApplyFormState => {
  const [attackerId, setAttackerId] = useState<string>("");
  const [receiverId, setReceiverId] = useState<string>("");
  const [baseDamage, setBaseDamage] = useState<string>("");
  const [bonusNormal, setBonusNormal] = useState<string>("0");
  const [bonusSpecial, setBonusSpecial] = useState<string>("0");
  const [directcheck, setDirectcheck] = useState<boolean>(false);
  const [result, setResult] = useState<DamageResult | null>(null);
  const [running, setRunning] = useState(false);

  const [sceneCombatants, setSceneCombatants] = useState<Combatant[]>([]);

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

  useEffect(() => {
    try {
      const repository = new CombatantRepository();
      setSceneCombatants(
        loadSceneCombatantRecords(tokens, repository).map(
          (record) => record.combatant,
        ),
      );
    } catch {
      setSceneCombatants([]);
    }
  }, [tokens]);

  const attackerCombatant = useMemo(
    () =>
      sceneCombatants.find((combatant) => combatant.id === attackerId) ?? null,
    [sceneCombatants, attackerId],
  );
  const receiverCombatant = useMemo(
    () =>
      sceneCombatants.find((combatant) => combatant.id === receiverId) ?? null,
    [sceneCombatants, receiverId],
  );

  const attackerPreview = useMemo<CombatantPreview | null>(() => {
    if (!attackerCombatant) return null;
    const bonusNormalNum = Number(bonusNormal) || 0;
    const bonusSpecialNum = Number(bonusSpecial) || 0;
    const whiteEffect = calculateWhiteEffect(attackerCombatant, sceneCombatants);
    return {
      normal:
        calcAttackerNormalPreview(attackerCombatant) +
        (directcheck ? 50 : 0) +
        bonusNormalNum +
        whiteEffect.percentage,
      special: bonusSpecialNum,
      criticalChance: calcAttackerCriticalChancePreview(attackerCombatant),
      whiteApplies: whiteEffect.applies,
      whiteOtherCount: whiteEffect.otherWhiteCount,
      whitePercentage: whiteEffect.percentage,
      ankaStack: 0,
      ankaPercentage: 0,
    };
  }, [attackerCombatant, sceneCombatants, directcheck, bonusNormal, bonusSpecial]);

  const receiverPreview = useMemo<CombatantPreview | null>(() => {
    if (!receiverCombatant) return null;
    const whiteEffect = calculateWhiteEffect(receiverCombatant, sceneCombatants);
    const ankaEffect = calculateAnkaEffect(receiverCombatant);
    return {
      normal:
        calcReceiverNormalPreview(receiverCombatant) - whiteEffect.percentage,
      special: calcReceiverSpecialPreview(receiverCombatant),
      whiteApplies: whiteEffect.applies,
      whiteOtherCount: whiteEffect.otherWhiteCount,
      whitePercentage: whiteEffect.percentage,
      ankaStack: ankaEffect.stack,
      ankaPercentage: ankaEffect.percentage,
    };
  }, [receiverCombatant, sceneCombatants]);

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
      const sceneRecords = loadSceneCombatantRecords(tokens, repository);
      const sceneRecordMap = new Map(
        sceneRecords.map((record) => [record.actorId, record]),
      );
      const attackerRecord = sceneRecordMap.get(attackerId);
      const receiverRecord = sceneRecordMap.get(receiverId);
      if (!attackerRecord || !receiverRecord) {
        ui.notifications?.error("攻撃者または防御者のデータを取得できませんでした");
        return;
      }

      const bonusNormalNum = Number(bonusNormal) || 0;
      const bonusSpecialNum = Number(bonusSpecial) || 0;

      const { result: calcResult, attacker: nextAttacker, receiver: nextReceiver } =
        applyDamage({
          attacker: attackerRecord.combatant,
          receiver: receiverRecord.combatant,
          sceneCombatants: sceneRecords.map((record) => record.combatant),
          baseDamage: base,
          directcheck,
          attackerBonusNormal: bonusNormalNum,
          attackerBonusSpecial: bonusSpecialNum,
        });

      await Promise.all([
        repository.saveActor(nextAttacker),
        repository.saveActor(nextReceiver),
      ]);

      const content = `
${attacker.name} → ${receiver.name}<br/>
${calcResult.criticalHit ? "クリティカル発生!!<br/>" : ""}
基礎ダメージ: ${base}<br/>
${calcResult.attackerWhiteEffect.applies ? `白化（他の味方${calcResult.attackerWhiteEffect.otherWhiteCount}人）: 与ダメージ +${calcResult.attackerWhiteEffect.percentage}%<br/>` : ""}
${calcResult.receiverWhiteEffect.applies ? `白化（他の味方${calcResult.receiverWhiteEffect.otherWhiteCount}人）: 被ダメージ +${calcResult.receiverWhiteEffect.percentage}%<br/>` : ""}
${calcResult.receiverAnkaEffect.stack > 0 ? `アンカの渦潮 ${calcResult.receiverAnkaEffect.stack}: 被ダメージ +${calcResult.receiverAnkaEffect.percentage}%<br/>` : ""}
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
        `${attacker.name} が ${receiver.name} にダメージを適用しました`,
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
    bonusNormal,
    bonusSpecial,
    directcheck,
    result,
    running,
    attackerPreview,
    receiverPreview,
    setAttackerId,
    setReceiverId,
    setBaseDamage,
    setBonusNormal,
    setBonusSpecial,
    setDirectcheck,
    run,
  };
};
