import { type DamageResult } from "../utils/combatCalculator";
import { type TokenOption } from "./useDamageCalcState";

type Props = {
  tokens: TokenOption[];
  attackerId: string;
  receiverId: string;
  baseDamage: string;
  result: DamageResult | null;
  running: boolean;
  onAttackerChange: (value: string) => void;
  onReceiverChange: (value: string) => void;
  onBaseDamageChange: (value: string) => void;
  onRun: () => void;
};

const formatNumber = (value: number) =>
  Number.isFinite(value) ? value.toLocaleString() : "-";

const optionLabel = (token: TokenOption) =>
  `${token.name} ${token.isPlayer ? "(プレイヤー)" : "(エネミー)"}`;

export const DamageCalcView = ({
  tokens,
  attackerId,
  receiverId,
  baseDamage,
  result,
  running,
  onAttackerChange,
  onReceiverChange,
  onBaseDamageChange,
  onRun,
}: Props) => (
  <div className="ponkotu-damage">
    <div className="ponkotu-damage__row">
      <h3>ver 1.0.0</h3>
      <label className="ponkotu-damage__label">
        攻撃者
        <select value={attackerId} onChange={(e) => onAttackerChange(e.target.value)}>
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
        <select value={receiverId} onChange={(e) => onReceiverChange(e.target.value)}>
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
        onChange={(e) => onBaseDamageChange(e.target.value)}
        placeholder="例: 12"
      />
    </label>

    <div className="ponkotu-damage__row">
      <button onClick={onRun} disabled={running || tokens.length < 2}>
        {running ? "計算中..." : "計算して適用"}
      </button>
      {tokens.length < 2 && (
        <span className="ponkotu-damage__hint">※ トークンが2体以上必要です</span>
      )}
    </div>

    {result && (
      <div className="ponkotu-damage__result">
        <div>
          通常倍率: 攻撃者 {result.attackerNormalPercentage}% / 防御者{" "}
          {result.receiverNormalPercentage}% → 係数 {result.normalRatio.toFixed(2)}
        </div>
        <div>
          特殊倍率: 攻撃者 {result.attackerSpecialPercentage}%
          {result.poiseCritical ? " (呼吸クリティカル)" : ""} / 防御者{" "}
          {result.receiverSpecialPercentage}% → 係数 {result.specialRatio.toFixed(2)}
        </div>
        <div>
          特殊(耐性限界)倍率: 防御者 {result.receiverSpecialConfPercentage}% → 係数{" "}
          {result.specialConfRatio.toFixed(2)}
        </div>
        <div>
          HPダメージ: {formatNumber(result.hpDamageApplied)} （バリア吸収{" "}
          {formatNumber(result.barrierAbsorbed)}）
        </div>
        <div>耐性限界ダメージ: {formatNumber(result.confDamageApplied)}</div>
        <div>SANダメージ(沈潜): {formatNumber(result.sanDamageApplied)}</div>
        <div>
          残り HP {formatNumber(result.hpAfter)} / バリア{" "}
          {formatNumber(result.barrierAfter)} / CON{" "}
          {formatNumber(result.constitutionAfter)} / SAN{" "}
          {formatNumber(result.sanAfter)}
        </div>
      </div>
    )}
  </div>
);
