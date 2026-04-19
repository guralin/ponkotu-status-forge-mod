import { type StatusSet } from "../StatusSet";

export type StatusOwner = {
  readonly hp: number;
  readonly maxHp: number;
  readonly flags: {
    readonly checkNk: boolean;
    readonly checkAnri: boolean;
    readonly checkHitan: boolean;
  };
  statuses: StatusSet;
  applyHpDamage(amount: number): void;
  applyConstitutionDamage(amount: number): void;
  healHp(amount: number): void;
  setBarrier(next: number): void;
};
