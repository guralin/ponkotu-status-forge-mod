const MODULE_ID = "ponkotu-system";

console.log(`[${MODULE_ID}] debug-log.js loaded`);

// fetch で esmodule が配信できるか確認
fetch(`modules/${MODULE_ID}/dist/index.js`)
  .then((resp) =>
    console.log(
      `[${MODULE_ID}] fetch dist/index.js status`,
      resp.status,
      resp.ok ? "ok" : "ng"
    )
  )
  .catch((err) =>
    console.error(`[${MODULE_ID}] fetch dist/index.js failed`, err)
  );

Hooks.once("init", () => {
  const mod = game.modules.get(MODULE_ID);
  console.log(
    `[${MODULE_ID}] init hook hit; module active=${mod?.active}, esmodules=`,
    mod?.esmodules
  );
});

Hooks.once("ready", () => {
  const mod = game.modules.get(MODULE_ID);
  console.log(
    `[${MODULE_ID}] ready hook hit; module active=${mod?.active}, api=`,
    mod?.api
  );
});
