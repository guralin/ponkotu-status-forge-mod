import { useEffect, useState } from "react";
import {
  applyStatusStack,
  type ApplyStatusTarget,
} from "../../../application/usecases/applyStatusStack";
import { statusDefinitions } from "../../../domain/status/definitions";
import { type StatusId } from "../../../domain/status/types/StatusId";
import { CombatantRepository } from "../../../repository/CombatantRepository";
import { type TokenOption } from "../types";

const statusIds = statusDefinitions.map((definition) => definition.id as StatusId);
const pickDefaultStatusId = (): StatusId => statusIds[0] ?? "Burned";

export type StatusApplyFormState = {
  statusTargetId: string;
  statusId: StatusId;
  applyTarget: ApplyStatusTarget;
  canApplyPending: boolean;
  statusStack: string;
  statusRunning: boolean;
  setStatusTargetId: (value: string) => void;
  setStatusId: (value: StatusId) => void;
  setApplyTarget: (value: ApplyStatusTarget) => void;
  setStatusStack: (value: string) => void;
  runApplyStatus: () => Promise<void>;
};

export const useStatusApplyForm = (
  tokens: TokenOption[]
): StatusApplyFormState => {
  const [statusTargetId, setStatusTargetId] = useState<string>("");
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

  useEffect(() => {
    if (!tokens.length) {
      if (statusTargetId) {
        setStatusTargetId("");
      }
      return;
    }

    const validIds = new Set(tokens.map((token) => token.actorId));
    if (!statusTargetId || !validIds.has(statusTargetId)) {
      setStatusTargetId(tokens[0]?.actorId ?? "");
    }
  }, [tokens, statusTargetId]);

  useEffect(() => {
    if (!canApplyPending && applyTarget === "pending") {
      setApplyTarget("stack");
    }
  }, [canApplyPending, applyTarget]);

  const runApplyStatus = async () => {
    if (statusRunning) return;
    if (!statusTargetId) {
      ui.notifications?.error("状態異常を付与する対象を選択してください");
      return;
    }

    const stackDelta = Number(statusStack);
    if (!Number.isInteger(stackDelta) || stackDelta < 1) {
      ui.notifications?.error("スタック数には1以上の整数を入力してください");
      return;
    }

    try {
      setStatusRunning(true);
      const repository = new CombatantRepository();
      const result = await applyStatusStack(repository, {
        actorId: statusTargetId,
        statusId,
        stackDelta,
        target: applyTarget,
      });
      const targetLabel = result.target === "pending" ? "next" : "現在";
      ui.notifications?.info(
        `${result.actorName} に ${result.statusId}(${targetLabel}) を ${stackDelta} 付与しました (${result.before}→${result.after})`
      );
    } catch (error) {
      console.error("[ponkotu-system] apply status failed", error);
      ui.notifications?.error("状態異常の付与に失敗しました。コンソールを確認してください。");
    } finally {
      setStatusRunning(false);
    }
  };

  return {
    statusTargetId,
    statusId,
    applyTarget,
    canApplyPending,
    statusStack,
    statusRunning,
    setStatusTargetId,
    setStatusId,
    setApplyTarget,
    setStatusStack,
    runApplyStatus,
  };
};
