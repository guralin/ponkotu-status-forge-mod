import { type Combatant } from "../combat/Combatant";
import { type StatusSet } from "./StatusSet";

export type StatusContext<Id extends string = string> = {
  statusId: Id;
  combatant: Combatant;
  statuses: StatusSet;
  getStack: (id: Id) => number;
  getPending: (id: Id) => number;
  setStack: (id: Id, next: number) => void;
  setPending: (id: Id, next: number) => void;
  addStack: (id: Id, delta: number) => void;
  addPending: (id: Id, delta: number) => void;
  applyHpDamage: (amount: number) => void;
  applyConstitutionDamage: (amount: number) => void;
  healHp: (amount: number) => void;
  setBarrier: (next: number) => void;
};

export type StatusHandler<Id extends string = string> = (ctx: StatusContext<Id>) => void;

export type StatusDefinition<Id extends string = string> = {
  id: Id;
  hasPending?: boolean;
  onTurnStart?: StatusHandler<Id>;
  onTurnEnd?: StatusHandler<Id>;
};
