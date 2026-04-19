import { type StatusOwner } from "./types/StatusOwner";
import { type StatusId } from "./types/StatusId";
import {
  type DamageEvent,
  type DamageStatusContext,
  type StatusContext,
} from "./types/StatusDefinition";

export const createStatusContextFactory = <Id extends StatusId>(
  combatant: StatusOwner
) => {
  const base = {
    combatant,
    getStack: (id: Id) => combatant.statuses.getStack(id),
    getPending: (id: Id) => combatant.statuses.getPending(id),
    setStack: (id: Id, next: number) => combatant.statuses.setStack(id, next),
    setPending: (id: Id, next: number) => combatant.statuses.setPending(id, next),
    addStack: (id: Id, delta: number) => {
      const current = combatant.statuses.getStack(id);
      combatant.statuses.setStack(id, current + delta);
    },
    addPending: (id: Id, delta: number) => {
      const current = combatant.statuses.getPending(id);
      combatant.statuses.setPending(id, current + delta);
    },
    applyHpDamage: (amount: number) => combatant.applyHpDamage(amount),
    applyConstitutionDamage: (amount: number) =>
      combatant.applyConstitutionDamage(amount),
    healHp: (amount: number) => combatant.healHp(amount),
    setBarrier: (next: number) => combatant.setBarrier(next),
  };

  return {
    ...base,
    withStatus: (statusId: Id): StatusContext<Id> => ({
      ...base,
      statusId,
    }),
    withDamageStatus: (
      statusId: Id,
      damage: DamageEvent
    ): DamageStatusContext<Id> => ({
      ...base,
      statusId,
      damage,
    }),
  };
};
