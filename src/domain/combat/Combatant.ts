import { type StatusSet } from "../status/StatusSet";

export type CombatantFlags = {
  checkNk: boolean;
  checkAnri: boolean;
  checkHitan: boolean;
};

export type CombatantParams = {
  hp: number;
  maxHp: number;
  barrier: number;
  constitution: number;
  statuses: StatusSet;
  flags?: Partial<CombatantFlags>;
  name?: string;
};

export class Combatant {
  hp: number;
  maxHp: number;
  barrier: number;
  constitution: number;
  statuses: StatusSet;
  flags: CombatantFlags;
  name?: string;

  constructor(params: CombatantParams) {
    this.hp = params.hp;
    this.maxHp = params.maxHp;
    this.barrier = params.barrier;
    this.constitution = params.constitution;
    this.statuses = params.statuses;
    this.flags = {
      checkNk: params.flags?.checkNk ?? false,
      checkAnri: params.flags?.checkAnri ?? false,
      checkHitan: params.flags?.checkHitan ?? false,
    };
    this.name = params.name;
  }
}
