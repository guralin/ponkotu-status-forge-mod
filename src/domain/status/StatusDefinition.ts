import { type Combatant } from "../combat/Combatant";
import { type DomainEvent } from "../event/DomainEvent";
import { type StatusSet } from "./StatusSet";

export type StatusContext<Id extends string = string> = {
  statusId: Id;
  combatant: Combatant;
  statuses: StatusSet;
  events: DomainEvent[];
  getStack: (id: Id) => number;
  getPending: (id: Id) => number;
  setStack: (id: Id, next: number, reason?: string) => void;
  setPending: (id: Id, next: number, reason?: string) => void;
  addStack: (id: Id, delta: number, reason?: string) => void;
  addPending: (id: Id, delta: number, reason?: string) => void;
  applyHpDamage: (amount: number, reason: string) => void;
  applyConstitutionDamage: (amount: number, reason: string) => void;
  healHp: (amount: number, reason: string) => void;
  setBarrier: (next: number, reason: string) => void;
};

export type StatusHandler<Id extends string = string> = (ctx: StatusContext<Id>) => void;

export type StatusDefinition<Id extends string = string> = {
  id: Id;
  hasPending?: boolean;
  onTurnStart?: StatusHandler<Id>;
  onTurnEnd?: StatusHandler<Id>;
};
