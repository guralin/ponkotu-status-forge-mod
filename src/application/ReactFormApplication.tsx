import ReactDOM from "react-dom/client";
import { SimpleForm } from "../components/SimpleForm";

const MODULE_ID = "ponkotu-system";

export class ReactFormApplication extends Application {
  #root: ReactDOM.Root | null = null;

  static override get defaultOptions() {
    const options = super.defaultOptions;
    return foundry.utils.mergeObject(options, {
      id: "ponkotu-react-form",
      title: "React フォーム",
      template: `modules/${MODULE_ID}/templates/react-form.html`,
      width: 420,
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
      console.warn("[ponkotu-system] ReactFormApplication: container not found");
      return;
    }

    this.#root = ReactDOM.createRoot(container);
    this.#root.render(
      <SimpleForm
        onSubmit={(payload) => {
          const message = payload.note
            ? `${payload.name} からの送信: ${payload.note}`
            : `${payload.name} が送信しました。`;
          ChatMessage.create({
            speaker: ChatMessage.getSpeaker(),
            content: message,
          });
          ui.notifications?.info("メッセージを送信しました");
        }}
      />
    );
  }

  override async close(options?: Application.CloseOptions | undefined) {
    this.#root?.unmount();
    this.#root = null;
    return super.close(options);
  }
}
