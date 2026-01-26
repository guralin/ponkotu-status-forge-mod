import { Combatant } from "./Combatant";
import { statusDefinitions } from "../status/definitions";
import { type StatusId } from "../status/StatusId";
import { StatusSet } from "../status/StatusSet";

export const statusAttributeMap: Record<
  StatusId,
  { stack: string; pending?: string }
> = {
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

export const combatantFromActor = (actor: Actor): Combatant => {
  const statuses = new StatusSet();

  statusDefinitions.forEach((definition) => {
    const mapping = statusAttributeMap[definition.id];
    const stack = getAttrValue(actor, mapping.stack, 0);
    const pending = mapping.pending
      ? getAttrValue(actor, mapping.pending, 0)
      : 0;
    statuses.setState(definition.id, { stack, pending });
  });

  const stackDamageUp = statuses.getState("DamageUp").stack;
  const stackDamageDown = statuses.getState("DamageDown").stack;
  const stackPoise = statuses.getState("Poise").stack;
  const stackProtection = statuses.getState("Protection").stack;
  const stackVulnerable = statuses.getState("Vulnerable").stack;
  const stacksink = statuses.getState("Sink").stack;

  return new Combatant({
    id: actor.id ?? "",
    name: actor.name,
    hp: getAttrValue(actor, "hp", 0),
    maxHp: getAttrMax(actor, "hp", 0),
    barrier: getAttrValue(actor, "barrier", 0),
    constitution: getAttrValue(actor, "constitution", 0),
    san: getAttrValue(actor, "san", 0),
    isPlayer: getAttrValue(actor, "isPlayer", 0) > 0,
    stackDamageUp,
    stackDamageDown,
    directcheck: getAttrValue(actor, "directcheck", 0) > 0,
    criticalcheck: getAttrValue(actor, "criticalcheck", 0) > 0,
    stackPoise,
    stackProtection,
    stackVulnerable,
    resist: getAttrValue(actor, "resist", 0),
    resistEnemy: getAttrValue(actor, "resistEnemy", 0),
    confResist: getAttrValue(actor, "confResist", 0),
    econfResistEnemy: getAttrValue(actor, "econfResistEnemy", 0),
    doubleConstitution: getAttrValue(actor, "doubleconstitution", 0) === 1,
    stacksink,
    statuses,
    flags: {
      checkNk: getAttrValue(actor, "checknk", 0) > 0,
      checkAnri: getAttrValue(actor, "checkAnri", 0) > 0,
      checkHitan: getAttrValue(actor, "checkhitan", 0) > 0,
    },
  });
};
