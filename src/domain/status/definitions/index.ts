import { type StatusContext, type StatusDefinition } from "../types/StatusDefinition";

const normalizeStack = (value: number): number =>
  Math.max(0, Math.floor(value));

const decayByRatio = (value: number, ratio: number): number =>
  normalizeStack(value * ratio);

const decrementStack = (value: number, amount = 1): number =>
  normalizeStack(value - amount);

const decayTwoThirds = (value: number) => decayByRatio(value, 2 / 3);
const decayHalf = (value: number) => decayByRatio(value, 1 / 2);

const resetOnTurnEnd = (ctx: StatusContext) => {
  const stack = ctx.getStack(ctx.statusId);
  if (stack > 0) {
    ctx.setStack(ctx.statusId, 0);
  }
};

const decrementOnTurnEnd = (ctx: StatusContext) => {
  const stack = ctx.getStack(ctx.statusId);
  if (stack > 0) {
    ctx.setStack(ctx.statusId, decrementStack(stack));
  }
};

export const statusDefinitions = [
  {
    id: "DarkFire",
    attribute: { stack: "stackDarkFire" },
    onTurnStart: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack > 0) {
        ctx.setStack(ctx.statusId, 0);
      }
    },
    onTurnEnd: (ctx) => {
      const darkFire = ctx.getStack(ctx.statusId);
      const burned = ctx.getStack("Burned");
      if (darkFire > 0 && burned > 0) {
        ctx.applyHpDamage(darkFire * burned);
        ctx.setStack(ctx.statusId, 0);
      }
    },
  },
  {
    id: "Burned",
    attribute: { stack: "stackBurned", pending: "stackBurnednext" },
    hasPending: true,
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.applyHpDamage(stack);
      ctx.setStack(ctx.statusId, decayTwoThirds(stack));
    },
  },
  {
    id: "Poison",
    attribute: { stack: "stackPoison", pending: "stackPoisonnext" },
    hasPending: true,
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.applyHpDamage(stack);
      ctx.setStack(ctx.statusId, decayHalf(stack));
    },
  },
  {
    id: "Tremor",
    attribute: { stack: "stacktremor", pending: "stacktremornext" },
    hasPending: true,
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.applyHpDamage(stack);
      ctx.setStack(ctx.statusId, decayTwoThirds(stack));
    },
  },
  {
    id: "Bleeding",
    attribute: { stack: "stackBleeding", pending: "stackBleedingnext" },
    hasPending: true,
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.setStack(ctx.statusId, decayTwoThirds(stack));
    },
  },
  {
    id: "Poise",
    attribute: { stack: "stackpoise", pending: "stackpoisenext" },
    hasPending: true,
    onTurnEnd: (ctx) => decrementOnTurnEnd(ctx),
  },
  {
    id: "Regen",
    attribute: { stack: "stackregen", pending: "stackregennext" },
    hasPending: true,
    onTurnStart: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      const amount = ctx.combatant.maxHp * 0.05 * stack;
      if (amount > 0) {
        ctx.healHp(amount);
      }
    },
    onTurnEnd: (ctx) => decrementOnTurnEnd(ctx),
  },
  {
    id: "Bind",
    attribute: { stack: "stackbind", pending: "stackbindnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Paralysis",
    attribute: { stack: "stackParalysis", pending: "stackParalysisnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Fear",
    attribute: { stack: "stackFear", pending: "stackFearnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "DamageUp",
    attribute: { stack: "stackDamageUp", pending: "stackDamageUpnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "DamageDown",
    attribute: { stack: "stackDamageDown", pending: "stackDamageDownnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "PowerUp",
    attribute: { stack: "stackPowerUp", pending: "stackPowerUpnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "PowerDown",
    attribute: { stack: "stackPowerDown", pending: "stackPowerDownnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Protection",
    attribute: { stack: "stackProtection", pending: "stackProtectionnext" },
    hasPending: true,
    onTurnStart: (ctx) => {
      if (!ctx.combatant.flags.checkHitan) return;
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 1) {
        ctx.setStack(ctx.statusId, 1);
      }
    },
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Vulnerable",
    attribute: { stack: "stackVulnerable", pending: "stackVulnerablenext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Sink",
    attribute: { stack: "stacksink", pending: "stacksinknext" },
    hasPending: true,
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (ctx.combatant.flags.checkNk) {
        ctx.addStack(ctx.statusId, 2);
        return;
      }
      if (stack > 0) {
        ctx.setStack(ctx.statusId, decrementStack(stack));
      }
    },
  },
  {
    id: "FEOAwaken",
    attribute: { stack: "stackFEOAwaken", pending: "stackFEOAwakenNext" },
    hasPending: true,
    onTurnEnd: (ctx) => decrementOnTurnEnd(ctx),
  },
  {
    id: "Witch1",
    attribute: { stack: "stackwitch1" },
    onTurnStart: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      const amount = stack * ctx.combatant.hp * 0.02;
      if (amount > 0) {
        ctx.applyHpDamage(amount);
      }
    },
  },
  {
    id: "Frenzy",
    attribute: { stack: "stackfrenzy" },
    onTurnStart: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.addStack("DamageUp", stack);
      ctx.addStack("Vulnerable", stack);
    },
  },
  {
    id: "Sinsyoku",
    attribute: { stack: "stackSinsyoku" },
    onTurnStart: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack > 0) {
        ctx.addStack("DamageUp", stack);
      }
    },
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack >= 3 && !ctx.combatant.flags.checkAnri) {
        ctx.applyHpDamage(stack);
        ctx.applyConstitutionDamage(stack);
      }
    },
  },
  {
    id: "Biribiri",
    attribute: { stack: "stackbiribiri", pending: "stackbiribirinext" },
    hasPending: true,
  },
  {
    id: "Smoke",
    attribute: { stack: "stackSmoke" },
  },
  {
    id: "SmokeGrand",
    attribute: { stack: "stackSmokeGrand" },
  },
] as const satisfies ReadonlyArray<StatusDefinition<string>>;
