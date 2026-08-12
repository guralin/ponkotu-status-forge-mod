import { type DamageResultViewModel } from "../types";

const formatNumber = (value: number) =>
  Number.isFinite(value) ? value.toLocaleString() : "-";

type Props = {
  result: DamageResultViewModel;
};

export const DamageResultPanel = ({ result }: Props) => (
  <div className="ponkotu-damage__result">
    {result.attackerWhiteEffect.applies && (
      <div>
        白化（他の味方{result.attackerWhiteEffect.otherWhiteCount}人）: 与ダメージ
        +{result.attackerWhiteEffect.percentage}%
      </div>
    )}
    {result.receiverWhiteEffect.applies && (
      <div>
        白化（他の味方{result.receiverWhiteEffect.otherWhiteCount}人）: 被ダメージ
        +{result.receiverWhiteEffect.percentage}%
      </div>
    )}
    {result.receiverAnkaEffect.stack > 0 && (
      <div>
        アンカの渦潮 {result.receiverAnkaEffect.stack}: 被ダメージ +
        {result.receiverAnkaEffect.percentage}%
      </div>
    )}
    <div>
      通常倍率: 攻撃者 {result.attackerNormalPercentage}% / 防御者{" "}
      {result.receiverNormalPercentage}% → 係数 {result.normalRatio.toFixed(2)}
    </div>
    <div>
      特殊倍率: 攻撃者 {result.attackerSpecialPercentage}%
      {result.criticalHit ? " (クリティカル)" : ""} / 防御者{" "}
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
);
