export type DamageInput = {
  attacker: Actor;
  receiver: Actor;
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

const getAttr = (actor: Actor, key: string, defaultValue = 0): number => {
  const value = (actor.system as any)?.attributes?.[key]?.value;
  return value ?? defaultValue;
};

const calcAttackerNormal = (attacker: Actor): number => {
  const up = getAttr(attacker, "stackDamageUp", 0);
  const down = getAttr(attacker, "stackDamageDown", 0);
  const isDirect = !!getAttr(attacker, "directcheck", 0);
  return up * 10 - down * 10 + (isDirect ? 50 : 0);
};

const calcAttackerSpecial = (
  attacker: Actor
): { special: number; poiseCritical: boolean } => {
  let special = 0;
  let poiseCritical = false;

  const isCritical = !!getAttr(attacker, "criticalcheck", 0);
  if (isCritical) special += 20;

  const stackPoise = getAttr(attacker, "stackpoise", 0);
  if (stackPoise > 0) {
    const chance = Math.min(stackPoise * 5, 100);
    const roll = Math.random() * 100;
    if (roll < chance) {
      special += 20;
      poiseCritical = true;
    }
  }

  return { special, poiseCritical };
};

const calcReceiverNormal = (receiver: Actor): number => {
  const protection = getAttr(receiver, "stackProtection", 0);
  const vulnerable = getAttr(receiver, "stackVulnerable", 0);
  return protection * 10 - vulnerable * 10;
};

const calcReceiverSpecial = (receiver: Actor): number => {
  const isPlayer = !!getAttr(receiver, "isPlayer", 0);
  const resistance = isPlayer
    ? getAttr(receiver, "resist", 0)
    : getAttr(receiver, "resistEnemy", 0);

  if (getAttr(receiver, "constitution", 0) <= 0) return -100;
  return resistance;
};

const calcReceiverSpecialConf = (receiver: Actor): number => {
  const isPlayer = !!getAttr(receiver, "isPlayer", 0);
  const resistance = isPlayer
    ? getAttr(receiver, "confResist", 0)
    : getAttr(receiver, "econfResistEnemy", 0);

  if (getAttr(receiver, "constitution", 0) <= 0) return -100;
  return resistance;
};

export const computeDamage = (input: DamageInput) => {
  const attackerNormalPercentage = calcAttackerNormal(input.attacker);
  const { special: attackerSpecialPercentage, poiseCritical } =
    calcAttackerSpecial(input.attacker);
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

export const applyDamage = async (
  input: DamageInput,
  calc: ReturnType<typeof computeDamage>
): Promise<DamageResult> => {
  const receiver = input.receiver;
  const updates: Record<string, number> = {};

  let hp = getAttr(receiver, "hp", 0);
  let barrier = getAttr(receiver, "barrier", 0);
  let constitution = getAttr(receiver, "constitution", 0);
  let san = getAttr(receiver, "san", 0);
  const isDoubleConstitution = getAttr(receiver, "doubleconstitution", 0) === 1;

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
  const sink = getAttr(receiver, "stacksink", 0);
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

    updates["system.attributes.stacksink.value"] = Math.floor(sink / 2);
  }

  updates["system.attributes.hp.value"] = hp;
  updates["system.attributes.barrier.value"] = barrier;
  updates["system.attributes.constitution.value"] = constitution;
  updates["system.attributes.san.value"] = san;

  await receiver.update(updates);

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

  const content = `
${input.attacker.name} → ${input.receiver.name}<br/>
基礎ダメージ: ${input.baseDamage}<br/>
HPダメージ: ${hpDamageApplied} (バリア吸収: ${barrierAbsorbed})<br/>
耐性限界ダメージ: ${confDamageApplied}<br/>
SANダメージ(沈潜): ${sanDamageApplied}<br/>
`;

  await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor: input.attacker }),
    content,
  });

  return result;
};

export const calculateAndApplyDamage = async (
  input: DamageInput
): Promise<DamageResult> => {
  const calc = computeDamage(input);
  return applyDamage(input, calc);
};
