import { type Combatant } from "../domain/combat/Combatant";
import { createStatusContextFactory } from "../domain/status/StatusContextFactory";
import { type StatusId } from "../domain/status/types/StatusId";
import { statusDefinitions } from "../domain/status/StatusDefinitions";
import {
  type DamageEvent,
  type StatusDefinition,
} from "../domain/status/types/StatusDefinition";

export type DamageInput = {
  attacker: Combatant;
  receiver: Combatant;
  baseDamage: number;
  /** クリティカル判定（デフォルト false） */
  criticalcheck?: boolean;
  /** 直接攻撃判定（デフォルト false） */
  directcheck?: boolean;
  /** 攻撃者の通常倍率への追加補正 (%) */
  attackerBonusNormal?: number;
  /** 攻撃者の特殊倍率への追加補正 (%) */
  attackerBonusSpecial?: number;
};

export type DamageResult = {
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
  poiseCritical: boolean;
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
  const context = createStatusContextFactory<StatusId>(source);
  const definitions =
    statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;
  definitions.forEach((definition) => {
    definition.onDealDamage?.(context.withDamageStatus(definition.id, damage));
  });
};

const applyTakeDamageStatuses = (target: Combatant, damage: DamageEvent) => {
  const context = createStatusContextFactory<StatusId>(target);
  const definitions =
    statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;
  definitions.forEach((definition) => {
    definition.onTakeDamage?.(context.withDamageStatus(definition.id, damage));
  });
};

const calcAttackerNormal = (attacker: Combatant, directcheck: boolean): number => {
  const up = attacker.statuses.getStack("DamageUp");
  const down = attacker.statuses.getStack("DamageDown");
  return up * 10 - down * 10 + (directcheck ? 50 : 0);
};

const calcAttackerSpecial = (
  attacker: Combatant,
  random: () => number,
  criticalcheck: boolean
): { special: number; poiseCritical: boolean } => {
  let special = 0;
  let poiseCritical = false;

  if (criticalcheck) special += 20;

  const stackPoise = attacker.statuses.getStack("Poise");
  if (stackPoise > 0) {
    const chance = Math.min(stackPoise * 5, 100);
    const roll = random() * 100;
    if (roll < chance) {
      special += 20;
      poiseCritical = true;
    }
  }

  return { special, poiseCritical };
};

const calcReceiverNormal = (receiver: Combatant): number => {
  const protection = receiver.statuses.getStack("Protection");
  const vulnerable = receiver.statuses.getStack("Vulnerable");
  return protection * 10 - vulnerable * 10;
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
// directcheck・criticalcheck はフォームのチェックボックスで管理するため除外

/** 攻撃者の通常倍率プレビュー（directcheck・DamageUp/Down ベース） */
export const calcAttackerNormalPreview = (attacker: Combatant): number => {
  const up = attacker.statuses.getStack("DamageUp");
  const down = attacker.statuses.getStack("DamageDown");
  return up * 10 - down * 10;
};

/** 攻撃者の特殊倍率プレビュー（criticalcheck・呼吸を除くため常に 0） */
export const calcAttackerSpecialPreview = (_attacker: Combatant): number => 0;

/** 防御者の通常倍率プレビュー */
export const calcReceiverNormalPreview = (receiver: Combatant): number =>
  calcReceiverNormal(receiver);

/** 防御者の特殊倍率プレビュー */
export const calcReceiverSpecialPreview = (receiver: Combatant): number =>
  calcReceiverSpecial(receiver);

export type DamageCalcOptions = {
  random?: () => number;
};

const computeDamage = (
  input: DamageInput,
  options: DamageCalcOptions = {}
) => {
  const random = options.random ?? Math.random;
  const directcheck = input.directcheck ?? false;
  const criticalcheck = input.criticalcheck ?? false;
  const attackerNormalPercentage =
    calcAttackerNormal(input.attacker, directcheck) +
    (input.attackerBonusNormal ?? 0);
  const { special: attackerSpecialBase, poiseCritical } =
    calcAttackerSpecial(input.attacker, random, criticalcheck);
  const attackerSpecialPercentage =
    attackerSpecialBase + (input.attackerBonusSpecial ?? 0);
  const receiverNormalPercentage = calcReceiverNormal(input.receiver);
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
    poiseCritical,
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

  const hpDamageCeil = Math.ceil(calc.dealDamage);
  const confDamageCeil = Math.ceil(calc.dealConfDamage);

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

  receiver.hp = hp;
  receiver.setBarrier(barrier);
  receiver.setConstitution(constitution);
  receiver.setSan(san);
  receiver.setHp(hp);

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
    poiseCritical: calc.poiseCritical,
    hpAfter: hp,
    barrierAfter: barrier,
    constitutionAfter: constitution,
    sanAfter: san,
  };

  applyDealDamageStatuses(attacker, damageEvent);
  applyTakeDamageStatuses(receiver, damageEvent);

  return { result, attacker, receiver };
};
