import { type StatusSet } from "../status/StatusSet";

export type CombatantFlags = {
  checkNk: boolean;
  checkAnri: boolean;
  checkHitan: boolean;
};

export type CombatantParams = {
  id: string;
  hp: number;
  maxHp: number;
  barrier: number;
  constitution: number;
  san: number;
  isPlayer: boolean;
  stackDamageUp: number;
  stackDamageDown: number;
  directcheck: boolean;
  criticalcheck: boolean;
  stackPoise: number;
  stackProtection: number;
  stackVulnerable: number;
  resist: number;
  resistEnemy: number;
  confResist: number;
  econfResistEnemy: number;
  doubleConstitution: boolean;
  stacksink: number;
  statuses: StatusSet;
  flags?: Partial<CombatantFlags>;
  name?: string;
};

export class Combatant {
  id: string;
  hp: number;
  maxHp: number;
  barrier: number;
  constitution: number;
  san: number;
  isPlayer: boolean;
  stackDamageUp: number;
  stackDamageDown: number;
  directcheck: boolean;
  criticalcheck: boolean;
  stackPoise: number;
  stackProtection: number;
  stackVulnerable: number;
  resist: number;
  resistEnemy: number;
  confResist: number;
  econfResistEnemy: number;
  doubleConstitution: boolean;
  stacksink: number;
  statuses: StatusSet;
  flags: CombatantFlags;
  name?: string;

  constructor(params: CombatantParams) {
    this.id = params.id;
    this.hp = params.hp;
    this.maxHp = params.maxHp;
    this.barrier = params.barrier;
    this.constitution = params.constitution;
    this.san = params.san;
    this.isPlayer = params.isPlayer;
    this.stackDamageUp = params.stackDamageUp;
    this.stackDamageDown = params.stackDamageDown;
    this.directcheck = params.directcheck;
    this.criticalcheck = params.criticalcheck;
    this.stackPoise = params.stackPoise;
    this.stackProtection = params.stackProtection;
    this.stackVulnerable = params.stackVulnerable;
    this.resist = params.resist;
    this.resistEnemy = params.resistEnemy;
    this.confResist = params.confResist;
    this.econfResistEnemy = params.econfResistEnemy;
    this.doubleConstitution = params.doubleConstitution;
    this.stacksink = params.stacksink;
    this.statuses = params.statuses;
    this.flags = {
      checkNk: params.flags?.checkNk ?? false,
      checkAnri: params.flags?.checkAnri ?? false,
      checkHitan: params.flags?.checkHitan ?? false,
    };
    this.name = params.name;
  }
}
