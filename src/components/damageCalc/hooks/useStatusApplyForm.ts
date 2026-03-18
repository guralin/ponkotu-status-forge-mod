import { useEffect, useState } from "react";
import {
  type ApplyStatusTarget,
} from "../../../application/usecases/applyStatusStack";
import { executeApplyStatusAsGM } from "../../../application/socketManager";
import { statusDefinitions } from "../../../domain/status/definitions";
import { type StatusId } from "../../../domain/status/types/StatusId";
import { type TokenOption, type StatusTargetValue } from "../types";
import { TOKEN_DISPOSITIONS } from "../tokenDispositions";

const statusIds = statusDefinitions.map((definition) => definition.id as StatusId);
const pickDefaultStatusId = (): StatusId => statusIds[0] ?? "Burned";

/** ランダム対象キーワードかどうかを判定 */
const isRandomTarget = (value: string): value is "random:ally" | "random:enemy" | "random:all" =>
  value === "random:ally" || value === "random:enemy" || value === "random:all";

/** ランダム対象候補の解決 */
export const resolveRandomTargetCandidates = (
  value: "random:ally" | "random:enemy" | "random:all",
  tokens: TokenOption[]
): TokenOption[] => {
  if (value === "random:all") return tokens;
  if (value === "random:ally")
    return tokens.filter((t) => t.disposition === TOKEN_DISPOSITIONS.FRIENDLY);
  // random:enemy
  return tokens.filter((t) => t.disposition !== TOKEN_DISPOSITIONS.FRIENDLY);
};

export type StatusApplyFormState = {
  statusTargetValue: StatusTargetValue;
  statusId: StatusId;
  applyTarget: ApplyStatusTarget;
  canApplyPending: boolean;
  statusStack: string;
  statusRunning: boolean;
  setStatusTargetValue: (value: StatusTargetValue) => void;
  setStatusId: (value: StatusId) => void;
  setApplyTarget: (value: ApplyStatusTarget) => void;
  setStatusStack: (value: string) => void;
  runApplyStatus: () => Promise<void>;
};

export const useStatusApplyForm = (
  tokens: TokenOption[]
): StatusApplyFormState => {
  const [statusTargetValue, setStatusTargetValue] = useState<StatusTargetValue>("");
  const [statusId, setStatusId] = useState<StatusId>(pickDefaultStatusId);
  const [applyTarget, setApplyTarget] = useState<ApplyStatusTarget>("stack");
  const [statusStack, setStatusStack] = useState<string>("1");
  const [statusRunning, setStatusRunning] = useState(false);
  const selectedDefinition = statusDefinitions.find(
    (definition) => definition.id === statusId
  );
  const canApplyPending = Boolean(
    selectedDefinition &&
      "pending" in selectedDefinition.attribute &&
      selectedDefinition.attribute.pending
  );

  // 初期値・トークン変化時の同期
  useEffect(() => {
    if (!tokens.length) {
      if (statusTargetValue && !isRandomTarget(statusTargetValue)) {
        setStatusTargetValue("");
      }
      return;
    }

    const validIds = new Set(tokens.map((token) => token.actorId));
    if (!statusTargetValue || (!isRandomTarget(statusTargetValue) && !validIds.has(statusTargetValue))) {
      setStatusTargetValue(tokens[0]?.actorId ?? "");
    }
  }, [tokens, statusTargetValue]);

  useEffect(() => {
    if (!canApplyPending && applyTarget === "pending") {
      setApplyTarget("stack");
    }
  }, [canApplyPending, applyTarget]);

  const runApplyStatus = async () => {
    if (statusRunning) return;

    const stackDelta = Number(statusStack);
    if (!Number.isInteger(stackDelta) || stackDelta < 1) {
      ui.notifications?.error("スタック数には1以上の整数を入力してください");
      return;
    }

    // ランダム対象の解決
    let resolvedActorId: string;
    if (isRandomTarget(statusTargetValue)) {
      const candidates = resolveRandomTargetCandidates(statusTargetValue, tokens);
      if (candidates.length === 0) {
        ui.notifications?.error("ランダム対象の候補が0件です。対象を選び直してください。");
        return;
      }
      const picked = candidates[Math.floor(Math.random() * candidates.length)];
      resolvedActorId = picked!.actorId;
    } else {
      resolvedActorId = statusTargetValue;
    }

    if (!resolvedActorId) {
      ui.notifications?.error("状態異常を付与する対象を選択してください");
      return;
    }

    try {
      setStatusRunning(true);
      const result = await executeApplyStatusAsGM({
        actorId: resolvedActorId,
        statusId,
        stackDelta,
        target: applyTarget,
      });
      const statusName = statusDefinitions.find(d => d.id === result.statusId)?.name ?? result.statusId;
      const targetLabel = result.target === "pending" ? "next" : "現在";
      ui.notifications?.info(
        `${result.actorName} に ${result.statusId}(${targetLabel}) を ${stackDelta} 付与しました (${result.before}→${result.after})`
      );
      await ChatMessage.create({
        speaker: { alias: game.user?.name ?? "不明" },
        content: `${result.actorName} に ${statusName}（${targetLabel}）を ${stackDelta} 付与しました（${result.before} → ${result.after}）`,
      });
    } catch (error) {
      console.error("[ponkotu-system] apply status failed", error);
      ui.notifications?.error("状態異常の付与に失敗しました。コンソールを確認してください。");
    } finally {
      setStatusRunning(false);
    }
  };

  return {
    statusTargetValue,
    statusId,
    applyTarget,
    canApplyPending,
    statusStack,
    statusRunning,
    setStatusTargetValue,
    setStatusId,
    setApplyTarget,
    setStatusStack,
    runApplyStatus,
  };
};
