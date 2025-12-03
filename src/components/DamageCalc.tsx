import { useMemo, useState } from "react";
import {
  calculateAndApplyDamage,
  type DamageResult,
} from "../utils/combatCalculator";

export type TokenOption = {
  id: string;
  name: string;
  actor: Actor;
};

type Props = {
  tokens: TokenOption[];
};

const formatNumber = (value: number) =>
  Number.isFinite(value) ? value.toLocaleString() : "-";

export const DamageCalc = ({ tokens }: Props) => {
  const [attackerId, setAttackerId] = useState<string>(tokens[0]?.id ?? "");
  const [receiverId, setReceiverId] = useState<string>(tokens[1]?.id ?? "");
  const [baseDamage, setBaseDamage] = useState<string>("");
  const [result, setResult] = useState<DamageResult | null>(null);
  const [running, setRunning] = useState(false);

  const tokenMap = useMemo(() => {
    const map = new Map<string, TokenOption>();
    tokens.forEach((t) => map.set(t.id, t));
    return map;
  }, [tokens]);

  const handleRun = async () => {
    const base = Number(baseDamage);
    if (!Number.isFinite(base) || base <= 0) {
      ui.notifications?.error("ダメージに正の数値を入力してください");
      return;
    }
    const attacker = attackerId ? tokenMap.get(attackerId) : undefined;
    const receiver = receiverId ? tokenMap.get(receiverId) : undefined;

    if (!attacker || !receiver) {
      ui.notifications?.error("攻撃者と防御者を選択してください");
      return;
    }
    if (attacker.id === receiver.id) {
      ui.notifications?.error("攻撃者と防御者は別のキャラクターを選んでください");
      return;
    }

    try {
      setRunning(true);
      const calcResult = await calculateAndApplyDamage({
        attacker: attacker.actor,
        receiver: receiver.actor,
        baseDamage: base,
      });
      setResult(calcResult);
      ui.notifications?.info(
        `${attacker.name} が ${receiver.name} にダメージを適用しました`
      );
    } catch (error) {
      console.error("[ponkotu-system] damage calc failed", error);
      ui.notifications?.error("計算または適用に失敗しました。コンソールを確認してください。");
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="ponkotu-damage">
      <div className="ponkotu-damage__row">
        <label className="ponkotu-damage__label">
          攻撃者
          <select
            value={attackerId}
            onChange={(e) => setAttackerId(e.target.value)}
          >
            <option value="">選択してください</option>
            {tokens.map((token) => (
              <option key={token.id} value={token.id}>
                {token.name}
              </option>
            ))}
          </select>
        </label>

        <label className="ponkotu-damage__label">
          防御者
          <select
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
          >
            <option value="">選択してください</option>
            {tokens.map((token) => (
              <option key={token.id} value={token.id}>
                {token.name}
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
        <button onClick={handleRun} disabled={running || tokens.length < 2}>
          {running ? "計算中..." : "計算して適用"}
        </button>
        {tokens.length < 2 && (
          <span className="ponkotu-damage__hint">※ トークンが2体以上必要です</span>
        )}
      </div>

      {result && (
        <div className="ponkotu-damage__result">
          <div>
            通常倍率: 攻撃者 {result.attackerNormalPercentage}% / 防御者 {" "}
            {result.receiverNormalPercentage}% → 係数 {result.normalRatio.toFixed(2)}
          </div>
          <div>
            特殊倍率: 攻撃者 {result.attackerSpecialPercentage}%
            {result.poiseCritical ? " (呼吸クリティカル)" : ""} / 防御者 {" "}
            {result.receiverSpecialPercentage}% → 係数 {result.specialRatio.toFixed(2)}
          </div>
          <div>
            特殊(耐性限界)倍率: 防御者 {result.receiverSpecialConfPercentage}% → 係数 {" "}
            {result.specialConfRatio.toFixed(2)}
          </div>
          <div>
            HPダメージ: {formatNumber(result.hpDamageApplied)} （バリア吸収 {" "}
            {formatNumber(result.barrierAbsorbed)}）
          </div>
          <div>耐性限界ダメージ: {formatNumber(result.confDamageApplied)}</div>
          <div>SANダメージ(沈潜): {formatNumber(result.sanDamageApplied)}</div>
          <div>
            残り HP {formatNumber(result.hpAfter)} / バリア {" "}
            {formatNumber(result.barrierAfter)} / CON {" "}
            {formatNumber(result.constitutionAfter)} / SAN {" "}
            {formatNumber(result.sanAfter)}
          </div>
        </div>
      )}
    </div>
  );
};
