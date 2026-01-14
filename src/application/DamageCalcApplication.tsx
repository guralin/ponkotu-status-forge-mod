import ReactDOM from "react-dom/client";
import { DamageCalc } from "../components/DamageCalc";

const MODULE_ID = "ponkotu-system";

export class DamageCalcApplication extends Application {
  #root: ReactDOM.Root | null = null;

  static override get defaultOptions() {
    const options = super.defaultOptions;
    return foundry.utils.mergeObject(options, {
      id: "ponkotu-damage-calc",
      title: "ダメージ計算",
      template: `modules/${MODULE_ID}/templates/damage-calc.html`,
      width: 520,
      height: 400,
      resizable: true,
    });
  }

  override activateListeners(html: JQuery): void {
    super.activateListeners(html);
    const container = html[0]?.querySelector<HTMLDivElement>(
      ".ponkotu-react-root"
    );
    if (!container) {
      console.warn("[ponkotu-system] DamageCalcApplication: container not found");
      return;
    }

    this.#root = ReactDOM.createRoot(container);
    this.#root.render(<DamageCalc />);
  }

  override async close(options?: Application.CloseOptions | undefined) {
    this.#root?.unmount();
    this.#root = null;
    return super.close(options);
  }
}
