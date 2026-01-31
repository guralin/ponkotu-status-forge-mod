import { type Combatant } from "../../combat/Combatant";

export type StatusContext<Id extends string = string> = {
  statusId: Id;
  combatant: Combatant;
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

export type DamageEvent = {
  baseDamage: number;
  normalRatio: number;
  specialRatio: number;
  specialConfRatio: number;
  dealDamage: number;
  dealConfDamage: number;
  hpDamageApplied: number;
  confDamageApplied: number;
  sanDamageApplied: number;
  barrierAbsorbed: number;
  poiseCritical: boolean;
  hpAfter: number;
  barrierAfter: number;
  constitutionAfter: number;
  sanAfter: number;
};

export type DamageStatusContext<Id extends string = string> = StatusContext<Id> & {
  damage: DamageEvent;
};

export type DamageStatusHandler<Id extends string = string> = (
  ctx: DamageStatusContext<Id>
) => void;

export type StatusDefinition<Id extends string = string> = {
  id: Id;
  attribute: {
    stack: string;
    pending?: string;
  };
  hasPending?: boolean;
  onTurnStart?: StatusHandler<Id>;
  onTurnEnd?: StatusHandler<Id>;
  onDealDamage?: DamageStatusHandler<Id>;
  onTakeDamage?: DamageStatusHandler<Id>;
};
