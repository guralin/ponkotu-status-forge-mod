import { useDamageApplyForm } from "../hooks/useDamageApplyForm";
import { type TokenOption, optionLabel } from "../types";
import { DamageResultPanel } from "./DamageResultPanel";

type Props = {
  tokens: TokenOption[];
};

export const DamageApplySection = ({ tokens }: Props) => {
  const {
    attackerId,
    receiverId,
    baseDamage,
    result,
    running,
    setAttackerId,
    setReceiverId,
    setBaseDamage,
    run,
  } = useDamageApplyForm(tokens);

  return (
    <>
      <div className="ponkotu-damage__row">
        <h3>ダメージ計算</h3>
      </div>
      <div className="ponkotu-damage__row">
        <label className="ponkotu-damage__label">
          攻撃者
          <select value={attackerId} onChange={(e) => setAttackerId(e.target.value)}>
            <option value="">選択してください</option>
            {tokens.map((token) => (
              <option key={token.actorId} value={token.actorId}>
                {optionLabel(token)}
              </option>
            ))}
          </select>
        </label>

        <label className="ponkotu-damage__label">
          防御者
          <select value={receiverId} onChange={(e) => setReceiverId(e.target.value)}>
            <option value="">選択してください</option>
            {tokens.map((token) => (
              <option key={token.actorId} value={token.actorId}>
                {optionLabel(token)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="ponkotu-damage__label">
        基礎ダメージ
        <input
          type="number"
          value={baseDamage}
          onChange={(e) => setBaseDamage(e.target.value)}
          placeholder="例: 12"
        />
      </label>

      <div className="ponkotu-damage__row">
        <button onClick={run} disabled={running || tokens.length < 2}>
          {running ? "計算中..." : "計算して適用"}
        </button>
        {tokens.length < 2 && (
          <span className="ponkotu-damage__hint">※ トークンが2体以上必要です</span>
        )}
      </div>

      {result && <DamageResultPanel result={result} />}
    </>
  );
};
