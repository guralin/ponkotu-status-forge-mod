import ReactDOM from "react-dom/client";
import { SimpleForm } from "../components/SimpleForm";
import { collectStatusMappingIssues } from "./statusMappingValidation";

const MODULE_ID = "ponkotu-system";
let hasShownStatusMappingError = false;

export class ReactFormApplication extends Application {
  #root: ReactDOM.Root | null = null;

  static override get defaultOptions() {
    const options = super.defaultOptions;
    return foundry.utils.mergeObject(options, {
      classes: ["ponkotu-react-form"],
      title: "React フォーム",
      template: `modules/${MODULE_ID}/templates/react-form.html`,
      width: 420,
      height: 400,
      resizable: true,
    });
  }

  override activateListeners(html: JQuery): void {
    super.activateListeners(html);
    if (!hasShownStatusMappingError) {
      const issues = collectStatusMappingIssues();
      if (issues.length > 0) {
        hasShownStatusMappingError = true;
        const content = [
          "<p>ステータスの属性マッピングに問題があります。</p>",
          "<ul>",
          ...issues.map((issue) => `<li>${issue}</li>`),
          "</ul>",
        ].join("");
        new Dialog({
          title: "ポンコツシステム: 設定エラー",
          content,
          buttons: {
            ok: { label: "OK" },
          },
          default: "ok",
        }).render(true);
      }
    }

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
