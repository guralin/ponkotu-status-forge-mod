import { type Combatant } from "../combat/Combatant";
import { type StatusId } from "./types/StatusId";
import { type StatusDefinition } from "./types/StatusDefinition";

const normalizeStack = (value: number): number =>
  Math.max(0, Math.ceil(value));

const decayByRatio = (value: number, ratio: number): number =>
  normalizeStack(value * ratio);

const decrementStack = (value: number, amount = 1): number =>
  normalizeStack(value - amount);

const decayTwoThirds = (value: number) => decayByRatio(value, 2 / 3);
const decayHalf = (value: number) => decayByRatio(value, 1 / 2);

const resetOnTurnEnd = (combatant: Combatant, statusId: StatusId): void => {
  const stack = combatant.getStatusStack(statusId);
  if (stack > 0) {
    combatant.setStatusStack(statusId, 0);
  }
};

const decrementOnTurnEnd = (combatant: Combatant, statusId: StatusId): void => {
  const stack = combatant.getStatusStack(statusId);
  if (stack > 0) {
    combatant.setStatusStack(statusId, decrementStack(stack));
  }
};

export const statusDefinitions: ReadonlyArray<StatusDefinition<StatusId>> = [
  {
    id: "DarkFire",
    name: "黒炎",
    attribute: { stack: "stackDarkFire" },
    onTurnStart: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack > 0) {
        combatant.setStatusStack(statusId, 0);
      }
    },
    onTurnEnd: (combatant, statusId) => {
      const darkFire = combatant.getStatusStack(statusId);
      const burned = combatant.getStatusStack("Burned");
      if (darkFire > 0 && burned > 0) {
        combatant.applyHpDamage(darkFire * burned);
        combatant.setStatusStack(statusId, 0);
      }
    },
  },
  {
    id: "Burned",
    name: "やけど",
    attribute: { stack: "stackBurned", pending: "stackBurnednext" },
    hasPending: true,
    onTurnEnd: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack <= 0) return;
      combatant.applyHpDamage(stack);
      combatant.setStatusStack(statusId, decayTwoThirds(stack));
    },
  },
  {
    id: "Poison",
    name: "毒",
    attribute: { stack: "stackPoison", pending: "stackPoisonnext" },
    hasPending: true,
    onTurnEnd: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack <= 0) return;
      combatant.applyHpDamage(stack);
      combatant.setStatusStack(statusId, decayHalf(stack));
    },
  },
  {
    id: "Tremor",
    name: "振動",
    attribute: { stack: "stacktremor", pending: "stacktremornext" },
    hasPending: true,
    onTurnEnd: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack <= 0) return;
      combatant.applyHpDamage(stack);
      combatant.setStatusStack(statusId, decayTwoThirds(stack));
    },
  },
  {
    id: "Bleeding",
    name: "出血",
    attribute: { stack: "stackBleeding", pending: "stackBleedingnext" },
    hasPending: true,
    onTurnEnd: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack <= 0) return;
      combatant.setStatusStack(statusId, decayTwoThirds(stack));
    },
    onMatchDamage: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack <= 0) return;
      combatant.applyHpDamage(stack);
      combatant.setStatusStack(statusId, decayTwoThirds(stack));
    },
  },
  {
    id: "Poise",
    name: "呼吸",
    attribute: { stack: "stackpoise", pending: "stackpoisenext" },
    hasPending: true,
    onTurnEnd: decrementOnTurnEnd,
  },
  {
    id: "Regen",
    name: "再生",
    attribute: { stack: "stackregen", pending: "stackregennext" },
    hasPending: true,
    onTurnStart: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack <= 0) return;
      const amount = combatant.maxHp * 0.05 * stack;
      if (amount > 0) {
        combatant.healHp(amount);
      }
    },
    onTurnEnd: decrementOnTurnEnd,
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
    onTurnStart: (combatant, statusId) => {
      if (!combatant.flags.checkHitan) return;
      const stack = combatant.getStatusStack(statusId);
      if (stack <= 1) {
        combatant.setStatusStack(statusId, 1);
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
    onTurnEnd: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (combatant.flags.checkNk) {
        combatant.addStatusStack(statusId, 2);
        return;
      }
      if (stack > 0) {
        combatant.setStatusStack(statusId, decrementStack(stack));
      }
    },
  },
  {
    id: "FEOAwaken",
    name: "覚醒",
    attribute: { stack: "stackFEOAwaken", pending: "stackFEOAwakenNext" },
    hasPending: true,
    onTurnEnd: decrementOnTurnEnd,
  },
  {
    id: "Witch1",
    name: "呪詛",
    attribute: { stack: "stackwitch1" },
    onTurnStart: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack <= 0) return;
      const amount = stack * combatant.hp * 0.02;
      if (amount > 0) {
        combatant.applyHpDamage(amount);
      }
    },
  },
  {
    id: "Frenzy",
    name: "狂乱",
    attribute: { stack: "stackfrenzy" },
    onTurnStart: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack <= 0) return;
      combatant.addStatusStack("DamageUp", stack);
      combatant.addStatusStack("Vulnerable", stack);
    },
  },
  {
    id: "Sinsyoku",
    name: "侵食",
    attribute: { stack: "stackSinsyoku" },
    onTurnStart: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack > 0) {
        combatant.addStatusStack("DamageUp", stack);
      }
    },
    onTurnEnd: (combatant, statusId) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack >= 3 && !combatant.flags.checkAnri) {
        combatant.applyHpDamage(stack);
        combatant.applyConstitutionDamage(stack);
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
    onTurnStart: (combatant, statusId) => {
      // 立ち込める煙10ごとに与ダメージ上昇1・保護1を得る(最大5スタック分まで)
      // ステータスアップ系が毎ターンリセットされるため、改めてターン開始時に付与する実装とした
      // パッシブ：深い息に依存した設定。パッシブの着け外しは検知せず機械的にスタックを付与するため注意
      const stack = combatant.getStatusStack(statusId);
      if (stack > 0) {
        combatant.addStatusStack("DamageUp", Math.min(stack / 10, 5));
        combatant.addStatusStack("Protection", Math.min(stack / 10, 5));
      }
    },
  },
  {
    id: "StackSealBleed",
    name: "呪印【出血】",
    attribute: { stack: "stackSealBleed" },
    hasPending: true,
    onTakeDamage: (combatant, statusId, damage) => {
      const stack = combatant.getStatusStack(statusId);
      if (stack <= 0 || !damage.criticalHit) return;

      const bleeding = combatant.getStatusStack("Bleeding");
      if (bleeding > 0) {
        combatant.applyHpDamage(bleeding);
      }
      combatant.setStatusStack(statusId, decrementStack(stack));
    },
    onTurnEnd: decrementOnTurnEnd,
  },
  {
    id: "checkSora",
    name: "soraチェック",
    attribute: { stack: "checkSora" },
    onTurnEnd: (combatant, statusId) => {
      // コアSoraをチェックするためのスタック。スタックが1以上ならコアSoraを所持しているとみなす
      if (combatant.getStatusStack(statusId) > 0) {
        // HACK: マジックナンバー。コアに関するデータをFVTTではなくこちらのシステムで管理する際には移動したい
        combatant.addStatusStack("Smoke", 7);
      }
    },
  },
];
