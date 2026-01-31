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
  directcheck: boolean;
  criticalcheck: boolean;
  resist: number;
  resistEnemy: number;
  confResist: number;
  econfResistEnemy: number;
  doubleConstitution: boolean;
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
  directcheck: boolean;
  criticalcheck: boolean;
  resist: number;
  resistEnemy: number;
  confResist: number;
  econfResistEnemy: number;
  doubleConstitution: boolean;
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
    this.directcheck = params.directcheck;
    this.criticalcheck = params.criticalcheck;
    this.resist = params.resist;
    this.resistEnemy = params.resistEnemy;
    this.confResist = params.confResist;
    this.econfResistEnemy = params.econfResistEnemy;
    this.doubleConstitution = params.doubleConstitution;
    this.statuses = params.statuses;
    this.flags = {
      checkNk: params.flags?.checkNk ?? false,
      checkAnri: params.flags?.checkAnri ?? false,
      checkHitan: params.flags?.checkHitan ?? false,
    };
    this.name = params.name;
  }

  applyHpDamage(amount: number): void {
    const value = Math.max(0, amount);
    if (value <= 0) return;

    let remaining = value;
    if (this.barrier > 0) {
      const absorbed = Math.min(this.barrier, remaining);
      if (absorbed > 0) {
        this.barrier = this.barrier - absorbed;
        remaining -= absorbed;
      }
    }

    if (remaining > 0) {
      const previous = this.hp;
      const applied = Math.min(previous, remaining);
      if (applied > 0) {
        this.hp = previous - applied;
      }
    }
  }

  applyConstitutionDamage(amount: number): void {
    const value = Math.max(0, amount);
    if (value <= 0) return;

    const previous = this.constitution;
    const applied = Math.min(previous, value);
    if (applied > 0) {
      this.constitution = previous - applied;
    }
  }

  healHp(amount: number): void {
    const value = Math.max(0, amount);
    if (value <= 0) return;

    const previous = this.hp;
    const maxHp = this.maxHp;
    const healed = Math.min(Math.max(maxHp - previous, 0), value);
    if (healed > 0) {
      this.hp = previous + healed;
    }
  }

  setBarrier(next: number): void {
    const value = Math.max(0, next);
    if (this.barrier !== value) {
      this.barrier = value;
    }
  }

  setHp(next: number): void {
    this.hp = next;
  }

  setConstitution(next: number): void {
    this.constitution = next;
  }

  setSan(next: number): void {
    this.san = next;
  }
}
