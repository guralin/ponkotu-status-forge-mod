import { decayByRatio, decrementStack } from "../value/Stack";
import { type StatusContext, type StatusDefinition } from "./StatusDefinition";

const decayTwoThirds = (value: number) => decayByRatio(value, 2 / 3);
const decayHalf = (value: number) => decayByRatio(value, 1 / 2);

const resetOnTurnEnd = (ctx: StatusContext) => {
  const stack = ctx.getStack(ctx.statusId);
  if (stack > 0) {
    ctx.setStack(ctx.statusId, 0, "turn-end-reset");
  }
};

const decrementOnTurnEnd = (ctx: StatusContext, reason: string) => {
  const stack = ctx.getStack(ctx.statusId);
  if (stack > 0) {
    ctx.setStack(ctx.statusId, decrementStack(stack), reason);
  }
};

export const statusDefinitions = [
  {
    id: "DarkFire",
    onTurnStart: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack > 0) {
        ctx.setStack(ctx.statusId, 0, "turn-start-reset");
      }
    },
    onTurnEnd: (ctx) => {
      const darkFire = ctx.getStack(ctx.statusId);
      const burned = ctx.getStack("Burned");
      if (darkFire > 0 && burned > 0) {
        ctx.applyHpDamage(darkFire * burned, "DarkFire");
        ctx.setStack(ctx.statusId, 0, "turn-end-consume");
      }
    },
  },
  {
    id: "Burned",
    hasPending: true,
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.applyHpDamage(stack, "Burned");
      ctx.setStack(ctx.statusId, decayTwoThirds(stack), "turn-end-decay");
    },
  },
  {
    id: "Poison",
    hasPending: true,
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.applyHpDamage(stack, "Poison");
      ctx.setStack(ctx.statusId, decayHalf(stack), "turn-end-decay");
    },
  },
  {
    id: "Tremor",
    hasPending: true,
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.applyHpDamage(stack, "Tremor");
      ctx.setStack(ctx.statusId, decayTwoThirds(stack), "turn-end-decay");
    },
  },
  {
    id: "Bleeding",
    hasPending: true,
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.setStack(ctx.statusId, decayTwoThirds(stack), "turn-end-decay");
    },
  },
  {
    id: "Poise",
    hasPending: true,
    onTurnEnd: (ctx) => decrementOnTurnEnd(ctx, "turn-end-decay"),
  },
  {
    id: "Regen",
    hasPending: true,
    onTurnStart: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      const amount = ctx.combatant.maxHp * 0.05 * stack;
      if (amount > 0) {
        ctx.healHp(amount, "Regen");
      }
    },
    onTurnEnd: (ctx) => decrementOnTurnEnd(ctx, "turn-end-decay"),
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
        ctx.setStack(ctx.statusId, 1, "turn-start-check-hitan");
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
        ctx.addStack(ctx.statusId, 2, "turn-end-check-nk");
        return;
      }
      if (stack > 0) {
        ctx.setStack(ctx.statusId, decrementStack(stack), "turn-end-decay");
      }
    },
  },
  {
    id: "FEOAwaken",
    hasPending: true,
    onTurnEnd: (ctx) => decrementOnTurnEnd(ctx, "turn-end-decay"),
  },
  {
    id: "Witch1",
    onTurnStart: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      const amount = stack * ctx.combatant.hp * 0.02;
      if (amount > 0) {
        ctx.applyHpDamage(amount, "Witch1");
      }
    },
  },
  {
    id: "Frenzy",
    onTurnStart: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack <= 0) return;
      ctx.addStack("DamageUp", stack, "turn-start-frenzy");
      ctx.addStack("Vulnerable", stack, "turn-start-frenzy");
    },
  },
  {
    id: "Sinsyoku",
    onTurnStart: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack > 0) {
        ctx.addStack("DamageUp", stack, "turn-start-sinsyoku");
      }
    },
    onTurnEnd: (ctx) => {
      const stack = ctx.getStack(ctx.statusId);
      if (stack >= 3 && !ctx.combatant.flags.checkAnri) {
        ctx.applyHpDamage(stack, "Sinsyoku");
        ctx.applyConstitutionDamage(stack, "Sinsyoku");
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
