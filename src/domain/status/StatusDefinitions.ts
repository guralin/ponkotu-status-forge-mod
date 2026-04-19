import { type StatusContext, type StatusDefinition } from "./types/StatusDefinition";

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
    name: "黒炎",
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
    name: "やけど",
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
    name: "毒",
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
    name: "振動",
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
    name: "出血",
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
    name: "呼吸",
    attribute: { stack: "stackpoise", pending: "stackpoisenext" },
    hasPending: true,
    onTurnEnd: (ctx) => decrementOnTurnEnd(ctx),
  },
  {
    id: "Regen",
    name: "再生",
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
    name: "束縛",
    attribute: { stack: "stackbind", pending: "stackbindnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Paralysis",
    name: "麻痺",
    attribute: { stack: "stackParalysis", pending: "stackParalysisnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Fear",
    name: "恐怖",
    attribute: { stack: "stackFear", pending: "stackFearnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "DamageUp",
    name: "ダメージ上昇",
    attribute: { stack: "stackDamageUp", pending: "stackDamageUpnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "DamageDown",
    name: "ダメージ減少",
    attribute: { stack: "stackDamageDown", pending: "stackDamageDownnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "PowerUp",
    name: "威力上昇",
    attribute: { stack: "stackPowerUp", pending: "stackPowerUpnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "PowerDown",
    name: "威力減少",
    attribute: { stack: "stackPowerDown", pending: "stackPowerDownnext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Protection",
    name: "保護",
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
    name: "脆弱",
    attribute: { stack: "stackVulnerable", pending: "stackVulnerablenext" },
    hasPending: true,
    onTurnEnd: resetOnTurnEnd,
  },
  {
    id: "Sink",
    name: "沈潜",
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
    name: "覚醒",
    attribute: { stack: "stackFEOAwaken", pending: "stackFEOAwakenNext" },
    hasPending: true,
    onTurnEnd: (ctx) => decrementOnTurnEnd(ctx),
  },
  {
    id: "Witch1",
    name: "呪詛",
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
    name: "狂乱",
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
    name: "侵食",
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
    name: "ビリビリ",
    attribute: { stack: "stackbiribiri", pending: "stackbiribirinext" },
    hasPending: true,
  },
  {
    id: "Smoke",
    name: "煙",
    attribute: { stack: "stackSmoke" },
  },
  {
    id: "SmokeGrand",
    name: "立ち込める煙",
    attribute: { stack: "stackSmokeGrand" },
    onTurnStart: (ctx) => {
      // 立ち込める煙10ごとに与ダメージ上昇1・保護1を得る(最大5スタック分まで)
      // ステータスアップ系が毎ターンリセットされるため、改めてターン開始時に付与する実装とした
      // パッシブ：深い息に依存した設定。パッシブの着け外しは検知せず機械的にスタックを付与するため注意
      const stack = ctx.getStack(ctx.statusId);
      if (stack > 0) {
        ctx.addStack("DamageUp", Math.min(stack/10, 5));
        ctx.addStack("Protection", Math.min(stack/10, 5));
      }
    }
  },
  {
    id: "StackSealBleed",
    name: "呪印【出血】",
    attribute: { stack: "stackSealBleed" },
    hasPending: true,
    // TODO: 出血ダメージ分を５回与える実装が必要（ただし、スタックが５になったのを監視するタイミング実装自体に検討が必要)
  },
  {
    id: "checkSora",
    name: "soraのチェック",
    attribute: { stack: "checkSora" },
    onTurnEnd: (ctx) => {
      // コアSoraをチェックするためのスタック。スタックが1以上ならコアSoraを所持しているとみなす
      if (ctx.getStack(ctx.statusId) > 0) {
        console.log(ctx, "コアSoraを所持しているため、煙スタックを7増加させる");
        // HACK: マジックナンバー。コアに関するデータをFVTTではなくこちらのシステムで管理する際には移動したい
        ctx.addStack("Smoke", 7);
      }
    }
  }
] as const satisfies ReadonlyArray<StatusDefinition<string>>;
