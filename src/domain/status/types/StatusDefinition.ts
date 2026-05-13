import { type Combatant } from "../../combat/Combatant";

export type StatusHandler<Id extends string = string> = (
  combatant: Combatant,
  statusId: Id
) => void;

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
  criticalHit: boolean;
  hpAfter: number;
  barrierAfter: number;
  constitutionAfter: number;
  sanAfter: number;
};

export type DamageStatusHandler<Id extends string = string> = (
  combatant: Combatant,
  statusId: Id,
  damage: DamageEvent
) => void;

export type StatusDefinition<Id extends string = string> = {
  id: Id;
  name: string;
  attribute: {
    stack: string;
    pending?: string;
  };
  hasPending?: boolean;
  onTurnStart?: StatusHandler<Id>;
  onTurnEnd?: StatusHandler<Id>;
  onDealDamage?: DamageStatusHandler<Id>;
  onTakeDamage?: DamageStatusHandler<Id>;
  onMatchDamage?: DamageStatusHandler<Id>;
};
