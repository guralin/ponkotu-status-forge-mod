import { type Combatant } from "../domain/combat/Combatant";

export type DamageInput = {
  attacker: Combatant;
  receiver: Combatant;
  baseDamage: number;
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

const calcAttackerNormal = (attacker: Combatant): number => {
  const up = attacker.stackDamageUp;
  const down = attacker.stackDamageDown;
  const isDirect = attacker.directcheck;
  return up * 10 - down * 10 + (isDirect ? 50 : 0);
};

const calcAttackerSpecial = (
  attacker: Combatant,
  random: () => number
): { special: number; poiseCritical: boolean } => {
  let special = 0;
  let poiseCritical = false;

  const isCritical = attacker.criticalcheck;
  if (isCritical) special += 20;

  const stackPoise = attacker.stackPoise;
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
  const protection = receiver.stackProtection;
  const vulnerable = receiver.stackVulnerable;
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

export type DamageCalcOptions = {
  random?: () => number;
};

const computeDamage = (
  input: DamageInput,
  options: DamageCalcOptions = {}
) => {
  const random = options.random ?? Math.random;
  const attackerNormalPercentage = calcAttackerNormal(input.attacker);
  const { special: attackerSpecialPercentage, poiseCritical } =
    calcAttackerSpecial(input.attacker, random);
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
): { result: DamageResult; receiver: Combatant } => {
  const calc = computeDamage(input, options);
  const receiver = input.receiver;

  let hp = receiver.hp;
  let barrier = receiver.barrier;
  let constitution = receiver.constitution;
  let san = receiver.san;
  let nextStacksink = receiver.stacksink;
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
  const sink = receiver.stacksink;
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

  receiver.statuses.setStack("Sink", nextStacksink);

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

  const nextReceiver: Combatant = {
    ...receiver,
    hp,
    barrier,
    constitution,
    san,
    stacksink: nextStacksink,
  };

  return { result, receiver: nextReceiver };
};
