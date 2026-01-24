import { type DamageActor } from "../utils/combatCalculator";

const getAttrValue = (actor: Actor, key: string, fallback = 0): number => {
  const raw = (actor.system as any)?.attributes?.[key]?.value;
  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  if (typeof raw === "boolean") return raw ? 1 : 0;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export type DamageActorRecord = {
  actorId: string;
  actor: Actor;
  snapshot: DamageActor;
};

const snapshotFromActor = (actor: Actor): DamageActor => ({
  name: actor.name ?? undefined,
  isPlayer: getAttrValue(actor, "isPlayer", 0) > 0,
  stackDamageUp: getAttrValue(actor, "stackDamageUp", 0),
  stackDamageDown: getAttrValue(actor, "stackDamageDown", 0),
  directcheck: getAttrValue(actor, "directcheck", 0) > 0,
  criticalcheck: getAttrValue(actor, "criticalcheck", 0) > 0,
  stackPoise: getAttrValue(actor, "stackpoise", 0),
  stackProtection: getAttrValue(actor, "stackProtection", 0),
  stackVulnerable: getAttrValue(actor, "stackVulnerable", 0),
  resist: getAttrValue(actor, "resist", 0),
  resistEnemy: getAttrValue(actor, "resistEnemy", 0),
  confResist: getAttrValue(actor, "confResist", 0),
  econfResistEnemy: getAttrValue(actor, "econfResistEnemy", 0),
  hp: getAttrValue(actor, "hp", 0),
  barrier: getAttrValue(actor, "barrier", 0),
  constitution: getAttrValue(actor, "constitution", 0),
  san: getAttrValue(actor, "san", 0),
  doubleConstitution: getAttrValue(actor, "doubleconstitution", 0) === 1,
  stacksink: getAttrValue(actor, "stacksink", 0),
});

export class DamageActorRepository {
  load(actorId: string): DamageActorRecord | null {
    const actor = actorId ? game.actors?.get(actorId) ?? null : null;
    if (!actor) return null;
    return {
      actorId: actor.id ?? actorId,
      actor,
      snapshot: snapshotFromActor(actor),
    };
  }

  async saveReceiver(actorId: string, receiver: DamageActor): Promise<void> {
    const actor = actorId ? game.actors?.get(actorId) ?? null : null;
    if (!actor) return;
    await actor.update({
      "system.attributes.hp.value": receiver.hp,
      "system.attributes.barrier.value": receiver.barrier,
      "system.attributes.constitution.value": receiver.constitution,
      "system.attributes.san.value": receiver.san,
      "system.attributes.stacksink.value": receiver.stacksink,
    });
  }
}
