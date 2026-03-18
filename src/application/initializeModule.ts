import { DamageCalcApplication } from "./DamageCalcApplication";
import { ReactFormApplication } from "./ReactFormApplication";
import { StatusApplyApplication } from "./StatusApplyApplication";
import { registerSocket } from "./socketManager";

const MODULE_ID = "ponkotu-system";
const log = (...args: unknown[]) => console.log(`[${MODULE_ID}]`, ...args);

export const showReactForm = () => new ReactFormApplication().render(true);
export const showDamageCalc = () => new DamageCalcApplication().render(true);
export const showStatusApply = () => new StatusApplyApplication().render(true);

const registerApi = () => {
  const module = game.modules?.get(MODULE_ID);
  if (!module) {
    console.warn(`[${MODULE_ID}] game.modules からモジュールを取得できませんでした`);
    return;
  }

  const target = module as unknown as { api?: Record<string, unknown> };
  if (!target.api) target.api = {};
  target.api.showReactForm = showReactForm;
  target.api.showDamageCalc = showDamageCalc;
  target.api.showStatusApply = showStatusApply;
  log("API を登録しました", target.api);
};

export const initializePonkotuSystem = () => {
  log("ES module loaded");

  Hooks.once("ready", () => {
    log("Hooks.once ready fired");
    registerApi();

    // デバッグ用にグローバルへも公開
    (globalThis as typeof globalThis & {
      ponkotuSystem?: {
        showReactForm: typeof showReactForm;
        showDamageCalc: typeof showDamageCalc;
        showStatusApply: typeof showStatusApply;
      };
    }).ponkotuSystem = { showReactForm, showDamageCalc, showStatusApply };

    log("React フォーム API を初期化しました");
  });

  Hooks.once("init", () => {
    log("Hooks.once init fired");
    // init 時点でも API を仕込んでおくことで、ready 前に参照しても undefined にならないようにする
    registerApi();
  });

  Hooks.once("socketlib.ready", () => {
    log("Hooks.once socketlib.ready fired");
    registerSocket(MODULE_ID);
  });
};
