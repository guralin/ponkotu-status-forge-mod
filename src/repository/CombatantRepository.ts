import {
  type CombatantRecord,
  type ICombatantRepository,
} from "./ICombatantRepository";
import { Combatant } from "../domain/combat/Combatant";
import { statusDefinitions } from "../domain/status/definitions";
import {
  combatantFromActor,
  statusAttributeMap,
} from "../domain/combat/combatantFromActor";

const toActorUpdate = (combatant: Combatant): Record<string, unknown> => {
  const update: Record<string, unknown> = {
    "system.attributes.hp.value": combatant.hp,
    "system.attributes.barrier.value": combatant.barrier,
    "system.attributes.constitution.value": combatant.constitution,
    "system.attributes.san.value": combatant.san,
  };

  statusDefinitions.forEach((definition) => {
    const mapping = statusAttributeMap[definition.id];
    const state = combatant.statuses.getState(definition.id);
    update[`system.attributes.${mapping.stack}.value`] = state.stack;
    if (mapping.pending) {
      update[`system.attributes.${mapping.pending}.value`] = state.pending;
    }
  });

  return update;
};

const findActor = (
  combatId: string,
  combatantId: string,
  actorId: string
): { actor: Actor | null; actorId: string } => {
  const combat = game.combats?.get(combatId);
  const combatant = combat?.combatants?.get(combatantId);
  const actorFromCombat = combatant?.actor ?? null;
  const actor = actorFromCombat ?? (actorId ? game.actors?.get(actorId) : null);
  return { actor, actorId: actor?.id ?? actorId };
};

export class CombatantRepository implements ICombatantRepository {
  loadByActorId(actorId: string): CombatantRecord | null {
    const actor = actorId ? game.actors?.get(actorId) ?? null : null;
    if (!actor || !actor.id) return null;
    return {
      combatId: "",
      combatantId: "",
      actorId: actor.id,
      actor,
      combatant: combatantFromActor(actor),
    };
  }

  async load(params: {
    combatId: string;
    combatantId: string;
    actorId: string;
  }): Promise<CombatantRecord | null> {
    const { actor, actorId } = findActor(
      params.combatId,
      params.combatantId,
      params.actorId
    );
    if (!actor || !actorId) return null;

    return {
      combatId: params.combatId,
      combatantId: params.combatantId,
      actorId,
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
