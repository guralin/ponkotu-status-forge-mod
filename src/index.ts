import { ReactFormApplication } from "./application/ReactFormApplication";

const MODULE_ID = "ponkotu-system";
const log = (...args: unknown[]) => console.log(`[${MODULE_ID}]`, ...args);

log("ES module loaded");

export const showReactForm = () => new ReactFormApplication().render(true);

const registerApi = () => {
  const module = game.modules.get(MODULE_ID);
  if (!module) {
    console.warn(`[${MODULE_ID}] game.modules からモジュールを取得できませんでした`);
    return;
  }

  const target = module as unknown as { api?: Record<string, unknown> };
  if (!target.api) target.api = {};
  target.api.showReactForm = showReactForm;
  log("API を登録しました", target.api);
};

Hooks.once("ready", () => {
  log("Hooks.once ready fired");
  registerApi();

  // デバッグ用にグローバルへも公開
  (globalThis as typeof globalThis & {
    ponkotuSystem?: { showReactForm: typeof showReactForm };
  }).ponkotuSystem = { showReactForm };

  log("React フォーム API を初期化しました");
});

Hooks.once("init", () => {
  log("Hooks.once init fired");
  // init 時点でも API を仕込んでおくことで、ready 前に参照しても undefined にならないようにする
  registerApi();
});
