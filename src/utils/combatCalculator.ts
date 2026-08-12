import { type Combatant } from "../domain/combat/Combatant";
import {
  calculateWhiteEffect,
  type WhiteEffect,
} from "../domain/combat/WhiteEffect";
import {
  calculateAnkaEffect,
  type AnkaEffect,
} from "../domain/status/Anka";
import { type StatusId } from "../domain/status/types/StatusId";
import { statusDefinitions } from "../domain/status/StatusDefinitions";
import {
  type DamageEvent,
  type StatusDefinition,
} from "../domain/status/types/StatusDefinition";

const statusDefinitionList =
  statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;

export type DamageInput = {
  attacker: Combatant;
  receiver: Combatant;
  /** ダメージ実行時点のシーン上戦闘参加者 */
  sceneCombatants?: ReadonlyArray<Combatant>;
  baseDamage: number;
  /** 直接攻撃判定（デフォルト false） */
  directcheck?: boolean;
  /** 攻撃者の通常倍率への追加補正 (%) */
  attackerBonusNormal?: number;
  /** 攻撃者の特殊倍率への追加補正 (%) */
  attackerBonusSpecial?: number;
};

export type DamageResult = {
  attackerWhiteEffect: WhiteEffect;
  receiverWhiteEffect: WhiteEffect;
  receiverAnkaEffect: AnkaEffect;
  attackerNormalPercentage: number;
  attackerSpecialPercentage: number;
  receiverNormalPercentage: number;
  receiverSpecialPercentage: number;
  receiverSpecialConfPercentage: number;
  normalRatio: number;
  specialRatio: number;
  specialConfRatio: number;
  dealDamage: number;
  dealConfDamage: number;
  criticalHit: boolean;
  barrierAbsorbed: number;
  hpDamageApplied: number;
  confDamageApplied: number;
  sanDamageApplied: number;
  hpAfter: number;
  barrierAfter: number;
  constitutionAfter: number;
  sanAfter: number;
};

const applyDealDamageStatuses = (source: Combatant, damage: DamageEvent) => {
  statusDefinitionList.forEach((definition) => {
    definition.onDealDamage?.(source, definition.id, damage);
  });
};

const applyMatchDamageStatuses = (combatant: Combatant, damage: DamageEvent) => {
  statusDefinitionList.forEach((definition) => {
    definition.onMatchDamage?.(combatant, definition.id, damage);
  });
};

const applyTakeDamageStatuses = (target: Combatant, damage: DamageEvent) => {
  statusDefinitionList.forEach((definition) => {
    definition.onTakeDamage?.(target, definition.id, damage);
  });
};

const calcAttackerNormal = (attacker: Combatant, directcheck: boolean): number => {
  const up = attacker.statuses.getStack("DamageUp");
  const down = attacker.statuses.getStack("DamageDown");
  return up * 10 - down * 10 + (directcheck ? 50 : 0);
};

const calcCriticalChance = (attacker: Combatant): number => {
  const stackPoise = attacker.statuses.getStack("Poise");
  const stackSword = attacker.statuses.getStack("Sword");
  return Math.min(stackPoise * 5 + stackSword, 100);
};

const calcAttackerSpecial = (
  attacker: Combatant,
  random: () => number
): { special: number; criticalHit: boolean } => {
  let special = 0;
  let criticalHit = false;

  const stackSword = attacker.statuses.getStack("Sword");
  const criticalChance = calcCriticalChance(attacker);
  if (criticalChance > 0) {
    const roll = random() * 100;
    if (roll < criticalChance) {
      special += 20 + Math.floor(stackSword / 2);
      criticalHit = true;
    }
  }

  return { special, criticalHit };
};

const calcReceiverNormal = (receiver: Combatant): number => {
  const protection = receiver.statuses.getStack("Protection");
  const vulnerable = receiver.statuses.getStack("Vulnerable");
  const ankaEffect = calculateAnkaEffect(receiver);
  return protection * 10 - vulnerable * 10 - ankaEffect.percentage;
};

const calcReceiverSpecial = (receiver: Combatant): number => {
  const resistance = receiver.isPlayer ? receiver.resist : receiver.resistEnemy;

  if (receiver.constitution <= 0) return -100;
  return resistance;
};

const calcReceiverSpecialConf = (receiver: Combatant): number => {
  const resistance = receiver.isPlayer
    ? receiver.confResist
    : receiver.econfResistEnemy;

  if (receiver.constitution <= 0) return -100;
  return resistance;
};

// --- プレビュー用のエクスポート関数 ---
// directcheck はフォームのチェックボックスで管理するため除外

/** 攻撃者の通常倍率プレビュー（directcheck・DamageUp/Down ベース） */
export const calcAttackerNormalPreview = (attacker: Combatant): number => {
  const up = attacker.statuses.getStack("DamageUp");
  const down = attacker.statuses.getStack("DamageDown");
  return up * 10 - down * 10;
};

/** 攻撃者の特殊倍率プレビュー（確率クリティカルを除くため常に 0） */
export const calcAttackerSpecialPreview = (_attacker: Combatant): number => 0;

/** 攻撃者のクリティカル発生率プレビュー */
export const calcAttackerCriticalChancePreview = (attacker: Combatant): number =>
  calcCriticalChance(attacker);

/** 防御者の通常倍率プレビュー */
export const calcReceiverNormalPreview = (receiver: Combatant): number =>
  calcReceiverNormal(receiver);

/** 防御者の特殊倍率プレビュー */
export const calcReceiverSpecialPreview = (receiver: Combatant): number =>
  calcReceiverSpecial(receiver);

export type DamageCalcOptions = {
  random?: () => number;
};

const ceilDamage = (value: number): number => {
  const nearestInteger = Math.round(value);
  const tolerance =
    Number.EPSILON * Math.max(1, Math.abs(value)) * 8;
  const normalized =
    Math.abs(value - nearestInteger) <= tolerance ? nearestInteger : value;
  return Math.ceil(normalized);
};

const computeDamage = (
  input: DamageInput,
  options: DamageCalcOptions = {}
) => {
  const random = options.random ?? Math.random;
  const directcheck = input.directcheck ?? false;
  const sceneCombatants = input.sceneCombatants ?? [];
  const attackerWhiteEffect = calculateWhiteEffect(
    input.attacker,
    sceneCombatants,
  );
  const receiverWhiteEffect = calculateWhiteEffect(
    input.receiver,
    sceneCombatants,
  );
  const receiverAnkaEffect = calculateAnkaEffect(input.receiver);
  const attackerNormalPercentage =
    calcAttackerNormal(input.attacker, directcheck) +
    (input.attackerBonusNormal ?? 0) +
    attackerWhiteEffect.percentage;
  const { special: attackerSpecialBase, criticalHit } =
    calcAttackerSpecial(input.attacker, random);
  const attackerSpecialPercentage =
    attackerSpecialBase + (input.attackerBonusSpecial ?? 0);
  const receiverNormalPercentage =
    calcReceiverNormal(input.receiver) - receiverWhiteEffect.percentage;
  const receiverSpecialPercentage = calcReceiverSpecial(input.receiver);
  const receiverSpecialConfPercentage = calcReceiverSpecialConf(input.receiver);

  const normalRatio =
    (100 + attackerNormalPercentage - receiverNormalPercentage) / 100;
  const specialRatio =
    (100 + attackerSpecialPercentage - receiverSpecialPercentage) / 100;
  const specialConfRatio =
    (100 + attackerSpecialPercentage - receiverSpecialConfPercentage) / 100;

  const dealDamage =
    input.baseDamage * Math.max(normalRatio, 0) * Math.max(specialRatio, 0);
  const dealConfDamage =
    input.baseDamage * Math.max(normalRatio, 0) * Math.max(specialConfRatio, 0);

  return {
    attackerWhiteEffect,
    receiverWhiteEffect,
    receiverAnkaEffect,
    attackerNormalPercentage,
    attackerSpecialPercentage,
    receiverNormalPercentage,
    receiverSpecialPercentage,
    receiverSpecialConfPercentage,
    normalRatio,
    specialRatio,
    specialConfRatio,
    dealDamage,
    dealConfDamage,
    criticalHit,
  };
};

export const applyDamage = (
  input: DamageInput,
  options: DamageCalcOptions = {}
): { result: DamageResult; attacker: Combatant; receiver: Combatant } => {
  const attacker = input.attacker;
  const calc = computeDamage(input, options);
  const receiver = input.receiver;

  let hp = receiver.hp;
  let barrier = receiver.barrier;
  let constitution = receiver.constitution;
  let san = receiver.san;
  let nextStacksink = receiver.statuses.getStack("Sink");
  const isDoubleConstitution = receiver.doubleConstitution;

  const hpDamageCeil = ceilDamage(calc.dealDamage);
  const confDamageCeil = ceilDamage(calc.dealConfDamage);

  let barrierAbsorbed = 0;
  let hpDamageApplied = 0;

  if (barrier > 0 && hpDamageCeil > 0) {
    barrierAbsorbed = Math.min(barrier, hpDamageCeil);
    barrier -= barrierAbsorbed;
  }

  const remainingHpDamage = Math.max(hpDamageCeil - barrierAbsorbed, 0);
  if (remainingHpDamage > 0) {
    hp -= remainingHpDamage;
    hpDamageApplied = remainingHpDamage;
  }

  let confDamageApplied = 0;
  if (confDamageCeil > 0) {
    const applied = confDamageCeil * (isDoubleConstitution ? 2 : 1);
    constitution = Math.max(constitution - applied, 0);
    confDamageApplied = applied;
  }

  let sanDamageApplied = 0;
  const sink = receiver.statuses.getStack("Sink");
  if (sink > 0) {
    let sinkDamage = sink;
    const sanAbsorbed = Math.min(san, sinkDamage);
    san -= sanAbsorbed;
    sinkDamage -= sanAbsorbed;
    sanDamageApplied += sanAbsorbed;

    if (sinkDamage > 0) {
      hp -= sinkDamage;
      hpDamageApplied += sinkDamage;
    }

    nextStacksink = Math.floor(sink / 2);
  }

  const result: DamageResult = {
    ...calc,
    barrierAbsorbed,
    hpDamageApplied,
    confDamageApplied,
    sanDamageApplied,
    hpAfter: hp,
    barrierAfter: barrier,
    constitutionAfter: constitution,
    sanAfter: san,
  };

  receiver.setHp(hp);
  receiver.setBarrier(barrier);
  receiver.setConstitution(constitution);
  receiver.setSan(san);

  receiver.statuses.setStack("Sink", nextStacksink);

  const damageEvent: DamageEvent = {
    baseDamage: input.baseDamage,
    normalRatio: calc.normalRatio,
    specialRatio: calc.specialRatio,
    specialConfRatio: calc.specialConfRatio,
    dealDamage: calc.dealDamage,
    dealConfDamage: calc.dealConfDamage,
    hpDamageApplied,
    confDamageApplied,
    sanDamageApplied,
    barrierAbsorbed,
    criticalHit: calc.criticalHit,
    hpAfter: hp,
    barrierAfter: barrier,
    constitutionAfter: constitution,
    sanAfter: san,
  };

  // MatchDamageを先に発動させる
  applyMatchDamageStatuses(attacker, damageEvent);
  applyMatchDamageStatuses(receiver, damageEvent);
  applyDealDamageStatuses(attacker, damageEvent);
  applyTakeDamageStatuses(receiver, damageEvent);

  return { result, attacker, receiver };
};
