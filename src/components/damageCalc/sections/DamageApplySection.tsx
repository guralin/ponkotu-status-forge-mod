import {
  type DamageApplyActions,
  type DamageApplyViewModel,
  type TokenOption,
  optionLabel,
} from "../types";
import { DamageResultPanel } from "./DamageResultPanel";

const formatPercentage = (value: number): string => {
  if (value === 0) return "±0%";
  return value > 0 ? `+${value}%` : `${value}%`;
};

type Props = {
  tokens: TokenOption[];
  model: DamageApplyViewModel;
  actions: DamageApplyActions;
};

export const DamageApplySection = ({ tokens, model, actions }: Props) => {
  const {
    selectedAttackerId,
    selectedReceiverId,
    baseDamage,
    bonusNormal,
    bonusSpecial,
    directAttack,
    result,
    isRunning,
    canRun,
    attackerPreview,
    receiverPreview,
  } = model;
  const {
    onAttackerChange,
    onReceiverChange,
    onBaseDamageChange,
    onBonusNormalChange,
    onBonusSpecialChange,
    onDirectAttackChange,
    onRunClick,
  } = actions;

  return (
    <>
      <div className="ponkotu-damage__row">
        <h3>ダメージ計算</h3>
      </div>
      <div className="ponkotu-damage__row">
        <div>
          <label className="ponkotu-damage__label">
            攻撃者: 
            <select value={selectedAttackerId} onChange={(e) => onAttackerChange(e.target.value)}>
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
            <select value={selectedReceiverId} onChange={(e) => onReceiverChange(e.target.value)}>
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
            onChange={(e) => onBonusNormalChange(e.target.value)}
            className="ponkotu-damage__bonus-input"
          />
          %
        </label>
        <label className="ponkotu-damage__label ponkotu-damage__label--inline">
          特殊補正
          <input
            type="number"
            value={bonusSpecial}
            onChange={(e) => onBonusSpecialChange(e.target.value)}
            className="ponkotu-damage__bonus-input"
          />
          %
        </label>
      </div>

      <div className="ponkotu-damage__row">
        <label className="ponkotu-damage__label ponkotu-damage__label--inline">
          <input
            type="checkbox"
            checked={directAttack}
            onChange={(e) => onDirectAttackChange(e.target.checked)}
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
          onChange={(e) => onBaseDamageChange(e.target.value)}
          placeholder="例: 12"
        />
      </label>

      <div className="ponkotu-damage__row">
        <button onClick={onRunClick} disabled={isRunning || !canRun}>
          {isRunning ? "計算中..." : "計算して適用"}
        </button>
        {tokens.length < 2 && (
          <span className="ponkotu-damage__hint">※ トークンが2体以上必要です</span>
        )}
      </div>

      {result && <DamageResultPanel result={result} />}
    </>
  );
};
