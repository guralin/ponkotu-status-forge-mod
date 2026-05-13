import { useDamageApplyForm } from "../hooks/useDamageApplyForm";
import { type TokenOption, optionLabel } from "../types";
import { DamageResultPanel } from "./DamageResultPanel";

type Props = {
  tokens: TokenOption[];
};

const formatPercentage = (value: number): string => {
  if (value === 0) return "±0%";
  return value > 0 ? `+${value}%` : `${value}%`;
};

export const DamageApplySection = ({ tokens }: Props) => {
  const {
    attackerId,
    receiverId,
    baseDamage,
    bonusNormal,
    bonusSpecial,
    directcheck,
    result,
    running,
    attackerPreview,
    receiverPreview,
    setAttackerId,
    setReceiverId,
    setBaseDamage,
    setBonusNormal,
    setBonusSpecial,
    setDirectcheck,
    run,
  } = useDamageApplyForm(tokens);

  return (
    <>
      <div className="ponkotu-damage__row">
        <h3>ダメージ計算</h3>
      </div>
      <div className="ponkotu-damage__row">
        <div>
          <label className="ponkotu-damage__label">
            攻撃者: 
            <select value={attackerId} onChange={(e) => setAttackerId(e.target.value)}>
              <option value="">選択してください</option>
              {tokens.map((token) => (
                <option key={token.actorId} value={token.actorId}>
                  {optionLabel(token)}
                </option>
              ))}
            </select>
            {attackerPreview !== null && (
              <span className="ponkotu-damage__preview">
                通常 {formatPercentage(attackerPreview.normal)} / 特殊 {formatPercentage(attackerPreview.special)}
                {(attackerPreview.criticalChance ?? 0) >= 1
                  ? ` / Crit + ${attackerPreview.criticalChance} %`
                  : ""}
              </span>
            )}
          </label>
        </div>
        <div>
          <label className="ponkotu-damage__label">
            防御者: 
            <select value={receiverId} onChange={(e) => setReceiverId(e.target.value)}>
              <option value="">選択してください</option>
              {tokens.map((token) => (
                <option key={token.actorId} value={token.actorId}>
                  {optionLabel(token)}
                </option>
              ))}
            </select>
            {receiverPreview !== null && (
              <span className="ponkotu-damage__preview">
                通常 {formatPercentage(receiverPreview.normal)} / 特殊 {formatPercentage(receiverPreview.special)}
              </span>
            )}
          </label>
        </div>
      </div>

      <div className="ponkotu-damage__row">
        <label className="ponkotu-damage__label ponkotu-damage__label--inline">
          通常補正
          <input
            type="number"
            value={bonusNormal}
            onChange={(e) => setBonusNormal(e.target.value)}
            className="ponkotu-damage__bonus-input"
          />
          %
        </label>
        <label className="ponkotu-damage__label ponkotu-damage__label--inline">
          特殊補正
          <input
            type="number"
            value={bonusSpecial}
            onChange={(e) => setBonusSpecial(e.target.value)}
            className="ponkotu-damage__bonus-input"
          />
          %
        </label>
      </div>

      <div className="ponkotu-damage__row">
        <label className="ponkotu-damage__label ponkotu-damage__label--inline">
          <input
            type="checkbox"
            checked={directcheck}
            onChange={(e) => setDirectcheck(e.target.checked)}
          />
          直接攻撃
        </label>
      </div>

      {attackerPreview !== null && receiverPreview !== null && (
        <div className="ponkotu-damage__row ponkotu-damage__total-preview">
      {/* TODO：計算ロジックはcombatCalculatorから参照する形にしたい */}
          <span>攻撃者 - 防御者 の倍率差</span>
          <div/>
          <span>通常倍率: {formatPercentage(attackerPreview.normal - receiverPreview.normal)}</span>
          <span>  +  </span>
          <span>特殊倍率: {formatPercentage(attackerPreview.special - receiverPreview.special)}</span>
          <div/>
          <span> → </span>
          <span>
            合計倍率: {formatPercentage(attackerPreview.normal - receiverPreview.normal + attackerPreview.special - receiverPreview.special)}
          </span>
        </div>
      )}

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
