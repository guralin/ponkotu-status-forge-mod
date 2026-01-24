import { decayByRatio, decrementStack } from "../value/Stack";
import { type StatusContext, type StatusDefinition } from "./StatusDefinition";

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
    hasPending: true,
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.setStack(ctx.statusId, decayTwoThirds(stack));
    },
  },
  {
    id: "Poise",
    hasPending: true,
    onTurnEnd: (ctx) => decrementOnTurnEnd(ctx),
  },
  {
    id: "Regen",
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
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Paralysis",
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Fear",
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "DamageUp",
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "DamageDown",
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "PowerUp",
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "PowerDown",
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Protection",
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
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Sink",
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
    hasPending: true,
    onTurnEnd: (ctx) => decrementOnTurnEnd(ctx),
  },
  {
    id: "Witch1",
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
    onTurnStart: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.addStack("DamageUp", stack);
      ctx.addStack("Vulnerable", stack);
    },
  },
  {
    id: "Sinsyoku",
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
    hasPending: true,
  },
  {
    id: "Smoke",
  },
  {
    id: "SmokeGrand",
  },
] as const satisfies ReadonlyArray<StatusDefinition<string>>;
