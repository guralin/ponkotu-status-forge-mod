import { type CombatantRecord, type ICombatantRepository } from "./ICombatantRepository";
import { Combatant } from "../domain/combat/Combatant";
import { type StatusDefinition } from "../domain/status/types/StatusDefinition";
import { type StatusId } from "../domain/status/types/StatusId";
import { statusDefinitions } from "../domain/status/definitions";
import { combatantFromActor } from "./combatantFromActor";

const toActorUpdate = (combatant: Combatant): Record<string, unknown> => {
  const update: Record<string, unknown> = {
    "system.attributes.hp.value": combatant.hp,
    "system.attributes.barrier.value": combatant.barrier,
    "system.attributes.constitution.value": combatant.constitution,
    "system.attributes.san.value": combatant.san,
  };

  const definitions =
    statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;
  definitions.forEach((definition) => {
    const mapping = definition.attribute;
    const state = combatant.statuses.getState(definition.id);
    update[`system.attributes.${mapping.stack}.value`] = state.stack;
    if (mapping.pending) {
      update[`system.attributes.${mapping.pending}.value`] = state.pending;
    }
  });

  return update;
};

export class CombatantRepository implements ICombatantRepository {
  loadByActorId(actorId: string): CombatantRecord | null {
    const actor = actorId ? game.actors?.get(actorId) ?? null : null;
    if (!actor || !actor.id) return null;
    return {
      actorId: actor.id,
      actor,
      combatant: combatantFromActor(actor),
    };
  }

  async saveActor(combatant: Combatant): Promise<void> {
    const actor = combatant.id ? game.actors?.get(combatant.id) ?? null : null;
    if (!actor) return;
    await actor.update(toActorUpdate(combatant));
  }

  async save(record: CombatantRecord): Promise<void> {
    await record.actor.update(toActorUpdate(record.combatant));
  }
}
