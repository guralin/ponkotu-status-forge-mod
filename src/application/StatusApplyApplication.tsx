import ReactDOM from "react-dom/client";
import { StatusApply } from "../components/StatusApply";

const MODULE_ID = "ponkotu-system";

export class StatusApplyApplication extends Application {
  #root: ReactDOM.Root | null = null;

  static override get defaultOptions() {
    const options = super.defaultOptions;
    return foundry.utils.mergeObject(options, {
      classes: ["ponkotu-status-apply"],
      title: "状態異常付与フォーム",
      template: `modules/${MODULE_ID}/templates/status-apply.html`,
      width: 520,
      height: 600,
      resizable: true,
    });
  }

  override activateListeners(html: JQuery): void {
    super.activateListeners(html);
    const container = html[0]?.querySelector<HTMLDivElement>(
      ".ponkotu-react-root"
    );
    if (!container) {
      console.warn("[ponkotu-system] StatusApplyApplication: container not found");
      return;
    }

    this.#root = ReactDOM.createRoot(container);
    this.#root.render(<StatusApply />);
  }

  override async close(options?: Application.CloseOptions | undefined) {
    this.#root?.unmount();
    this.#root = null;
    return super.close(options);
  }
}
