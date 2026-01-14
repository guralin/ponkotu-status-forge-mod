import {
  type CombatantRecord,
  type ICombatantRepository,
} from "./ICombatantRepository";
import { Combatant } from "../domain/combat/Combatant";
import { statusDefinitions } from "../domain/status/definitions";
import { type StatusId } from "../domain/status/StatusId";
import { StatusSet } from "../domain/status/StatusSet";

const statusAttributeMap: Record<StatusId, { stack: string; pending?: string }> =
  {
    Burned: { stack: "stackBurned", pending: "stackBurnednext" },
    Poison: { stack: "stackPoison", pending: "stackPoisonnext" },
    Tremor: { stack: "stacktremor", pending: "stacktremornext" },
    Bleeding: { stack: "stackBleeding", pending: "stackBleedingnext" },
    DarkFire: { stack: "stackDarkFire" },
    Poise: { stack: "stackpoise", pending: "stackpoisenext" },
    Regen: { stack: "stackregen", pending: "stackregennext" },
    Bind: { stack: "stackbind", pending: "stackbindnext" },
    Paralysis: { stack: "stackParalysis", pending: "stackParalysisnext" },
    Fear: { stack: "stackFear", pending: "stackFearnext" },
    DamageUp: { stack: "stackDamageUp", pending: "stackDamageUpnext" },
    DamageDown: { stack: "stackDamageDown", pending: "stackDamageDownnext" },
    PowerUp: { stack: "stackPowerUp", pending: "stackPowerUpnext" },
    PowerDown: { stack: "stackPowerDown", pending: "stackPowerDownnext" },
    Protection: { stack: "stackProtection", pending: "stackProtectionnext" },
    Vulnerable: { stack: "stackVulnerable", pending: "stackVulnerablenext" },
    Sink: { stack: "stacksink", pending: "stacksinknext" },
    Sinsyoku: { stack: "stackSinsyoku" },
    FEOAwaken: { stack: "stackFEOAwaken", pending: "stackFEOAwakenNext" },
    Witch1: { stack: "stackwitch1" },
    Frenzy: { stack: "stackfrenzy" },
    Biribiri: { stack: "stackbiribiri", pending: "stackbiribirinext" },
    Smoke: { stack: "stackSmoke" },
    SmokeGrand: { stack: "stackSmokeGrand" },
  };

const getAttrValue = (actor: Actor, key: string, fallback = 0): number => {
  const raw = (actor.system as any)?.attributes?.[key]?.value;
  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  if (typeof raw === "boolean") return raw ? 1 : 0;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const getAttrMax = (actor: Actor, key: string, fallback = 0): number => {
  const raw = (actor.system as any)?.attributes?.[key]?.max;
  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const fromActor = (actor: Actor): Combatant => {
  const statuses = new StatusSet();

  statusDefinitions.forEach((definition) => {
    const mapping = statusAttributeMap[definition.id];
    const stack = getAttrValue(actor, mapping.stack, 0);
    const pending = mapping.pending
      ? getAttrValue(actor, mapping.pending, 0)
      : 0;
    statuses.setState(definition.id, { stack, pending });
  });

  return new Combatant({
    name: actor.name,
    hp: getAttrValue(actor, "hp", 0),
    maxHp: getAttrMax(actor, "hp", 0),
    barrier: getAttrValue(actor, "barrier", 0),
    constitution: getAttrValue(actor, "constitution", 0),
    statuses,
    flags: {
      checkNk: getAttrValue(actor, "checknk", 0) > 0,
      checkAnri: getAttrValue(actor, "checkAnri", 0) > 0,
      checkHitan: getAttrValue(actor, "checkhitan", 0) > 0,
    },
  });
};

const toActorUpdate = (combatant: Combatant): Record<string, unknown> => {
  const update: Record<string, unknown> = {
    "system.attributes.hp.value": combatant.hp,
    "system.attributes.barrier.value": combatant.barrier,
    "system.attributes.constitution.value": combatant.constitution,
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
      combatant: fromActor(actor),
    };
  }

  async save(record: CombatantRecord): Promise<void> {
    await record.actor.update(toActorUpdate(record.combatant));
  }
}
