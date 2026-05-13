import { describe, expect, it } from "vitest";
import { Combatant } from "../src/domain/combat/Combatant";
import { StatusSet } from "../src/domain/status/StatusSet";
import {
  applyDamage,
  calcAttackerNormalPreview,
  calcAttackerSpecialPreview,
  calcReceiverNormalPreview,
  calcReceiverSpecialPreview,
} from "../src/utils/combatCalculator";

const createActor = (overrides?: Partial<Combatant>): Combatant =>
  new Combatant({
    id: "dummy-id",
    name: "dummy",
    isPlayer: false,
    resist: 0,
    resistEnemy: 0,
    confResist: 0,
    econfResistEnemy: 0,
    hp: 0,
    maxHp: 0,
    barrier: 0,
    constitution: 0,
    san: 0,
    doubleConstitution: false,
    statuses: new StatusSet(),
    flags: {},
    ...overrides,
  });

describe("combatCalculator", () => {
  it("applyDamage が倍率とダメージを決定的に計算できる", () => {
    const attacker = createActor({
      statuses: new StatusSet({
        DamageUp: { stack: 2, pending: 0 },
        DamageDown: { stack: 1, pending: 0 },
        Poise: { stack: 10, pending: 0 },
      }),
    });
    const receiver = createActor({
      isPlayer: true,
      resist: 10,
      constitution: 10,
      confResist: 20,
      statuses: new StatusSet({
        Protection: { stack: 1, pending: 0 },
        Vulnerable: { stack: 0, pending: 0 },
      }),
    });

    const { result } = applyDamage(
      { attacker, receiver, baseDamage: 10, criticalcheck: true, directcheck: true },
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
      statuses: new StatusSet({
        Sink: { stack: 4, pending: 0 },
      }),
    });
    const attacker = createActor({});
    const { result, receiver: nextReceiver } = applyDamage(
      { attacker, receiver, baseDamage: 10 },
      { random: () => 0.999 }
    );

    expect(result.barrierAbsorbed).toBe(5);
    expect(result.hpDamageApplied).toBe(5);
    expect(result.confDamageApplied).toBe(20);
    expect(result.sanDamageApplied).toBe(4);
    expect(result.hpAfter).toBe(95);
    expect(result.barrierAfter).toBe(0);
    expect(result.constitutionAfter).toBe(0);
    expect(result.sanAfter).toBe(2);
    expect(nextReceiver.hp).toBe(95);
    expect(nextReceiver.barrier).toBe(0);
    expect(nextReceiver.constitution).toBe(0);
    expect(nextReceiver.san).toBe(2);
    expect(nextReceiver.statuses.getStack("Sink")).toBe(2);
  });

  it("呪印【出血】は被クリティカル時に出血を消費せず追加ダメージを与えて 1 減少する", () => {
    const receiver = createActor({
      hp: 100,
      constitution: 10,
      statuses: new StatusSet({
        Bleeding: { stack: 6, pending: 0 },
        StackSealBleed: { stack: 2, pending: 0 },
      }),
    });
    const attacker = createActor({});

    const { receiver: nextReceiver } = applyDamage(
      { attacker, receiver, baseDamage: 10, criticalcheck: true },
      { random: () => 0.999 }
    );

    expect(nextReceiver.hp).toBe(82);
    expect(nextReceiver.statuses.getStack("Bleeding")).toBe(6);
    expect(nextReceiver.statuses.getStack("StackSealBleed")).toBe(1);
  });
});

describe("プレビュー倍率関数", () => {
  it("calcAttackerNormalPreview は DamageUp/Down のみ反映し directcheck を除外する", () => {
    const attacker = createActor({
      directcheck: true,
      statuses: new StatusSet({
        DamageUp: { stack: 3, pending: 0 },
        DamageDown: { stack: 1, pending: 0 },
      }),
    });
    expect(calcAttackerNormalPreview(attacker)).toBe(20);
  });

  it("calcAttackerNormalPreview は DamageUp/Down がない場合 0 を返す", () => {
    const attacker = createActor({ directcheck: true });
    expect(calcAttackerNormalPreview(attacker)).toBe(0);
  });

  it("calcAttackerSpecialPreview は常に 0 を返す", () => {
    const attacker = createActor({
      criticalcheck: true,
      statuses: new StatusSet({ Poise: { stack: 10, pending: 0 } }),
    });
    expect(calcAttackerSpecialPreview(attacker)).toBe(0);
  });

  it("calcReceiverNormalPreview は Protection/Vulnerable を反映する", () => {
    const receiver = createActor({
      constitution: 10,
      statuses: new StatusSet({
        Protection: { stack: 2, pending: 0 },
        Vulnerable: { stack: 1, pending: 0 },
      }),
    });
    expect(calcReceiverNormalPreview(receiver)).toBe(10);
  });

  it("calcReceiverSpecialPreview はプレイヤーなら resist を返す", () => {
    const receiver = createActor({ isPlayer: true, resist: 30, constitution: 10 });
    expect(calcReceiverSpecialPreview(receiver)).toBe(30);
  });

  it("calcReceiverSpecialPreview は敵なら resistEnemy を返す", () => {
    const receiver = createActor({ isPlayer: false, resistEnemy: 15, constitution: 10 });
    expect(calcReceiverSpecialPreview(receiver)).toBe(15);
  });

  it("calcReceiverSpecialPreview は CON が 0 以下なら -100 を返す", () => {
    const receiver = createActor({ isPlayer: true, resist: 30, constitution: 0 });
    expect(calcReceiverSpecialPreview(receiver)).toBe(-100);
  });
});

describe("DamageInput の bonus オプション", () => {
  it("attackerBonusNormal は攻撃者の通常倍率に加算される", () => {
    const attacker = createActor({
      statuses: new StatusSet({ DamageUp: { stack: 1, pending: 0 } }),
    });
    const receiver = createActor({ constitution: 10 });
    const { result } = applyDamage(
      { attacker, receiver, baseDamage: 10, attackerBonusNormal: 15 },
      { random: () => 0.999 }
    );
    expect(result.attackerNormalPercentage).toBe(25);
  });

  it("attackerBonusSpecial は攻撃者の特殊倍率に加算される", () => {
    const attacker = createActor({});
    const receiver = createActor({ constitution: 10 });
    const { result } = applyDamage(
      { attacker, receiver, baseDamage: 10, attackerBonusSpecial: 30 },
      { random: () => 0.999 }
    );
    expect(result.attackerSpecialPercentage).toBe(30);
  });
});
