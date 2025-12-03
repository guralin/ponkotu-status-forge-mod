import { useMemo, useState } from "react";

type SimpleFormProps = {
  onSubmit?: (payload: { name: string; note: string }) => void;
};

export const SimpleForm = ({ onSubmit }: SimpleFormProps) => {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const isDisabled = useMemo(() => name.trim().length === 0, [name]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = { name: name.trim(), note: note.trim() };
    console.log("[ponkotu-system] SimpleForm submit", payload);
    onSubmit?.(payload);
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit} className="ponkotu-form">
      <label className="ponkotu-form__label">
        名前
        <input
          className="ponkotu-form__input"
          type="text"
          value={name}
          placeholder="キャラクター名など"
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className="ponkotu-form__label">
        メモ
        <textarea
          className="ponkotu-form__textarea"
          value={note}
          placeholder="送信したいメモ"
          onChange={(e) => setNote(e.target.value)}
        />
      </label>

      <div className="ponkotu-form__footer">
        <button type="submit" disabled={isDisabled}>
          送信
        </button>
      </div>
    </form>
  );
};
