import { Combatant } from "../domain/combat/Combatant";
import { type StatusDefinition } from "../domain/status/types/StatusDefinition";
import { type StatusId } from "../domain/status/types/StatusId";
import { statusDefinitions } from "../domain/status/definitions";
import { StatusSet } from "../domain/status/StatusSet";

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

export const combatantFromActor = (actor: Actor): Combatant => {
  const statuses = new StatusSet();

  const definitions =
    statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;
  definitions.forEach((definition) => {
    const attribute = definition.attribute;
    const stack = getAttrValue(actor, attribute.stack, 0);
    const pending = attribute.pending
      ? getAttrValue(actor, attribute.pending, 0)
      : 0;
    statuses.setState(definition.id, { stack, pending });
  });

  return new Combatant({
    id: actor.id ?? "",
    name: actor.name,
    hp: getAttrValue(actor, "hp", 0),
    maxHp: getAttrMax(actor, "hp", 0),
    barrier: getAttrValue(actor, "barrier", 0),
    constitution: getAttrValue(actor, "constitution", 0),
    san: getAttrValue(actor, "san", 0),
    isPlayer: getAttrValue(actor, "isPlayer", 0) > 0,
    resist: getAttrValue(actor, "resist", 0),
    resistEnemy: getAttrValue(actor, "resistEnemy", 0),
    confResist: getAttrValue(actor, "confResist", 0),
    econfResistEnemy: getAttrValue(actor, "econfResistEnemy", 0),
    doubleConstitution: getAttrValue(actor, "doubleconstitution", 0) === 1,
    statuses,
    flags: {
      checkNk: getAttrValue(actor, "checknk", 0) > 0,
      checkAnri: getAttrValue(actor, "checkAnri", 0) > 0,
      checkHitan: getAttrValue(actor, "checkhitan", 0) > 0,
    },
  });
};
