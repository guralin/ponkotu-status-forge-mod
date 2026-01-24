import { describe, expect, it } from "vitest";
import {
  applyDamage,
  computeDamage,
  type DamageActor,
} from "../src/utils/combatCalculator";

const createActor = (overrides?: Partial<DamageActor>): DamageActor => ({
  name: "dummy",
  isPlayer: false,
  stackDamageUp: 0,
  stackDamageDown: 0,
  directcheck: false,
  criticalcheck: false,
  stackPoise: 0,
  stackProtection: 0,
  stackVulnerable: 0,
  resist: 0,
  resistEnemy: 0,
  confResist: 0,
  econfResistEnemy: 0,
  hp: 0,
  barrier: 0,
  constitution: 0,
  san: 0,
  doubleConstitution: false,
  stacksink: 0,
  ...overrides,
});

describe("combatCalculator", () => {
  it("computeDamage が倍率とダメージを決定的に計算できる", () => {
    const attacker = createActor({
      stackDamageUp: 2,
      stackDamageDown: 1,
      directcheck: true,
      criticalcheck: true,
      stackPoise: 10,
    });
    const receiver = createActor({
      stackProtection: 1,
      stackVulnerable: 0,
      isPlayer: true,
      resist: 10,
      constitution: 10,
      confResist: 20,
    });

    const result = computeDamage(
      { attacker, receiver, baseDamage: 10 },
      { random: () => 0 }
    );

    expect(result.attackerNormalPercentage).toBe(60);
    expect(result.attackerSpecialPercentage).toBe(40);
    expect(result.receiverNormalPercentage).toBe(10);
    expect(result.receiverSpecialPercentage).toBe(10);
    expect(result.poiseCritical).toBe(true);
    expect(result.normalRatio).toBeCloseTo(1.5, 5);
    expect(result.specialRatio).toBeCloseTo(1.3, 5);
    expect(result.dealDamage).toBeCloseTo(19.5, 5);
  });

  it("applyDamage がバリア/耐性限界/SAN を順に適用する", () => {
    const receiver = createActor({
      hp: 100,
      barrier: 5,
      constitution: 10,
      san: 6,
      doubleConstitution: true,
      stacksink: 4,
    });
    const attacker = createActor({});
    const calc = {
      attackerNormalPercentage: 0,
      attackerSpecialPercentage: 0,
      receiverNormalPercentage: 0,
      receiverSpecialPercentage: 0,
      receiverSpecialConfPercentage: 0,
      normalRatio: 1,
      specialRatio: 1,
      specialConfRatio: 1,
      dealDamage: 12.2,
      dealConfDamage: 3.2,
      poiseCritical: false,
    };

    const { result, receiver: nextReceiver } = applyDamage(
      { attacker, receiver, baseDamage: 10 },
      calc
    );

    expect(result.barrierAbsorbed).toBe(5);
    expect(result.hpDamageApplied).toBe(8);
    expect(result.confDamageApplied).toBe(8);
    expect(result.sanDamageApplied).toBe(4);
    expect(result.hpAfter).toBe(92);
    expect(result.barrierAfter).toBe(0);
    expect(result.constitutionAfter).toBe(2);
    expect(result.sanAfter).toBe(2);
    expect(nextReceiver.hp).toBe(92);
    expect(nextReceiver.barrier).toBe(0);
    expect(nextReceiver.constitution).toBe(2);
    expect(nextReceiver.san).toBe(2);
    expect(nextReceiver.stacksink).toBe(2);
  });
});
