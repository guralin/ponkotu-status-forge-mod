import { describe, expect, it } from "vitest";
import {
  Combatant,
  type CombatantParams,
} from "../src/domain/combat/Combatant";
import { StatusSet } from "../src/domain/status/StatusSet";
import {
  applyDamage,
  calcAttackerCriticalChancePreview,
  calcAttackerNormalPreview,
  calcAttackerSpecialPreview,
  calcReceiverNormalPreview,
  calcReceiverSpecialPreview,
} from "../src/utils/combatCalculator";

const createActor = (overrides?: Partial<CombatantParams>): Combatant =>
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
  it("白化した攻撃者と防御者の補正を通常倍率へ同時に加算する", () => {
    const attacker = createActor({
      id: "attacker",
      isPlayer: true,
      flags: { checkWhiteAlly: true },
    });
    const receiver = createActor({
      id: "receiver",
      isPlayer: true,
      hp: 200,
      constitution: 200,
      flags: { checkWhiteLeader: true },
    });

    const { result } = applyDamage(
      {
        attacker,
        receiver,
        sceneCombatants: [attacker, receiver],
        baseDamage: 100,
      },
      { random: () => 0.999 },
    );

    expect(result.attackerWhiteEffect).toEqual({
      applies: true,
      otherWhiteCount: 1,
      percentage: 5,
    });
    expect(result.receiverWhiteEffect).toEqual({
      applies: true,
      otherWhiteCount: 1,
      percentage: 5,
    });
    expect(result.attackerNormalPercentage).toBe(5);
    expect(result.receiverNormalPercentage).toBe(-5);
    expect(result.dealDamage).toBeCloseTo(110, 5);
    expect(result.dealConfDamage).toBeCloseTo(110, 5);
    expect(result.hpDamageApplied).toBe(110);
    expect(result.confDamageApplied).toBe(110);
  });

  it("白化フラグを持つ敵には白化補正を適用しない", () => {
    const attacker = createActor({
      id: "enemy-1",
      isPlayer: false,
      flags: { checkWhiteEnemy: true },
    });
    const otherEnemy = createActor({
      id: "enemy-2",
      isPlayer: false,
      flags: { checkWhiteEnemy: true },
    });
    const receiver = createActor({ id: "receiver", hp: 100 });

    const { result } = applyDamage(
      {
        attacker,
        receiver,
        sceneCombatants: [attacker, otherEnemy, receiver],
        baseDamage: 10,
      },
      { random: () => 0.999 },
    );

    expect(result.attackerWhiteEffect.applies).toBe(false);
    expect(result.attackerNormalPercentage).toBe(0);
  });

  it("applyDamage が倍率とダメージを決定的に計算できる", () => {
    const attacker = createActor({
      statuses: new StatusSet({
        DamageUp: { stack: 2, pending: 0 },
        DamageDown: { stack: 1, pending: 0 },
        Poise: { stack: 10, pending: 0 },
        Sword: { stack: 10, pending: 0 },
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
      { attacker, receiver, baseDamage: 10, directcheck: true },
      { random: () => 0 }
    );

    expect(result.attackerNormalPercentage).toBe(60);
    expect(result.attackerSpecialPercentage).toBe(25);
    expect(result.receiverNormalPercentage).toBe(10);
    expect(result.receiverSpecialPercentage).toBe(10);
    expect(result.criticalHit).toBe(true);
    expect(result.normalRatio).toBeCloseTo(1.5, 5);
    expect(result.specialRatio).toBeCloseTo(1.15, 5);
    expect(result.dealDamage).toBeCloseTo(17.25, 5);
  });

  it("呼吸20はクリティカル率100%として特殊倍率に +20% する", () => {
    const attacker = createActor({
      statuses: new StatusSet({ Poise: { stack: 20, pending: 0 } }),
    });
    const receiver = createActor({ constitution: 10 });

    const { result } = applyDamage(
      { attacker, receiver, baseDamage: 10 },
      { random: () => 0.999 }
    );

    expect(result.criticalHit).toBe(true);
    expect(result.attackerSpecialPercentage).toBe(20);
  });

  it("剣気50はクリティカル率50%で、成功時に剣気ボーナス +25% を加える", () => {
    const attacker = createActor({
      statuses: new StatusSet({ Sword: { stack: 50, pending: 0 } }),
    });
    const receiver = createActor({ constitution: 10 });

    const { result } = applyDamage(
      { attacker, receiver, baseDamage: 10 },
      { random: () => 0.49 }
    );

    expect(result.criticalHit).toBe(true);
    expect(result.attackerSpecialPercentage).toBe(45);
  });

  it("呼吸と剣気の合算クリティカル率に失敗した場合は特殊倍率を加えない", () => {
    const attacker = createActor({
      statuses: new StatusSet({
        Poise: { stack: 10, pending: 0 },
        Sword: { stack: 10, pending: 0 },
      }),
    });
    const receiver = createActor({ constitution: 10 });

    const { result } = applyDamage(
      { attacker, receiver, baseDamage: 10 },
      { random: () => 0.6 }
    );

    expect(result.criticalHit).toBe(false);
    expect(result.attackerSpecialPercentage).toBe(0);
  });

  it("剣気のクリティカルダメージボーナスは2スタックごとに切り捨てで加算する", () => {
    const attacker = createActor({
      statuses: new StatusSet({ Sword: { stack: 11, pending: 0 } }),
    });
    const receiver = createActor({ constitution: 10 });

    const { result } = applyDamage(
      { attacker, receiver, baseDamage: 10 },
      { random: () => 0 }
    );

    expect(result.criticalHit).toBe(true);
    expect(result.attackerSpecialPercentage).toBe(25);
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

  it("呪印【出血】は被クリティカル時に onMatchDamage 後の出血追加ダメージを与えて 1 減少する", () => {
    const receiver = createActor({
      hp: 100,
      constitution: 10,
      statuses: new StatusSet({
        Bleeding: { stack: 6, pending: 0 },
        StackSealBleed: { stack: 2, pending: 0 },
      }),
    });
    const attacker = createActor({
      statuses: new StatusSet({ Poise: { stack: 20, pending: 0 } }),
    });

    const { receiver: nextReceiver } = applyDamage(
      { attacker, receiver, baseDamage: 10 },
      { random: () => 0.999 }
    );

    expect(nextReceiver.hp).toBe(78);
    expect(nextReceiver.statuses.getStack("Bleeding")).toBe(4);
    expect(nextReceiver.statuses.getStack("StackSealBleed")).toBe(1);
  });

  it("onMatchDamage は与ダメージ側と被ダメージ側の両方で onDealDamage/onTakeDamage より前に適用される", () => {
    const attacker = createActor({
      hp: 50,
      constitution: 10,
      statuses: new StatusSet({ Bleeding: { stack: 3, pending: 0 } }),
    });
    const receiver = createActor({
      hp: 100,
      constitution: 10,
      statuses: new StatusSet({ Bleeding: { stack: 4, pending: 0 } }),
    });

    const { attacker: nextAttacker, receiver: nextReceiver } = applyDamage(
      { attacker, receiver, baseDamage: 10 },
      { random: () => 0.999 }
    );

    expect(nextAttacker.hp).toBe(47);
    expect(nextAttacker.statuses.getStack("Bleeding")).toBe(2);
    expect(nextReceiver.hp).toBe(86);
    expect(nextReceiver.statuses.getStack("Bleeding")).toBe(3);
  });
});

describe("プレビュー倍率関数", () => {
  it("calcAttackerNormalPreview は DamageUp/Down のみ反映する", () => {
    const attacker = createActor({
      statuses: new StatusSet({
        DamageUp: { stack: 3, pending: 0 },
        DamageDown: { stack: 1, pending: 0 },
      }),
    });
    expect(calcAttackerNormalPreview(attacker)).toBe(20);
  });

  it("calcAttackerNormalPreview は DamageUp/Down がない場合 0 を返す", () => {
    const attacker = createActor({});
    expect(calcAttackerNormalPreview(attacker)).toBe(0);
  });

  it("calcAttackerSpecialPreview は常に 0 を返す", () => {
    const attacker = createActor({
      statuses: new StatusSet({ Poise: { stack: 10, pending: 0 } }),
    });
    expect(calcAttackerSpecialPreview(attacker)).toBe(0);
  });

  it("calcAttackerCriticalChancePreview は呼吸と剣気からクリティカル発生率を返す", () => {
    const attacker = createActor({
      statuses: new StatusSet({
        Poise: { stack: 10, pending: 0 },
        Sword: { stack: 10, pending: 0 },
      }),
    });
    expect(calcAttackerCriticalChancePreview(attacker)).toBe(60);
  });

  it("calcAttackerCriticalChancePreview は 100% を上限にする", () => {
    const attacker = createActor({
      statuses: new StatusSet({
        Poise: { stack: 20, pending: 0 },
        Sword: { stack: 50, pending: 0 },
      }),
    });
    expect(calcAttackerCriticalChancePreview(attacker)).toBe(100);
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
