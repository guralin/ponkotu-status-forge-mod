import { useState } from "react";
import { TurnProcessor } from "../../../domain/combat/TurnProcessor";
import { CombatantRepository } from "../../../repository/CombatantRepository";
import { type TokenOption } from "../types";

const collectTargetIds = (tokens: TokenOption[]): string[] =>
  Array.from(new Set(tokens.map((token) => token.actorId).filter((id) => id)));

export type TurnProcessFormState = {
  turnRunning: boolean;
  runTurnProcess: () => Promise<void>;
};

export const useTurnProcessForm = (
  tokens: TokenOption[]
): TurnProcessFormState => {
  const [turnRunning, setTurnRunning] = useState(false);

  const runTurnStart = async (): Promise<number> => {
    const targetIds = collectTargetIds(tokens);
    if (!targetIds.length) {
      ui.notifications?.error("ターン開始処理の対象が見つかりません");
      return 0;
    }

    try {
      const repository = new CombatantRepository();
      const records = targetIds
        .map((id) => repository.loadByActorId(id))
        .filter((record): record is NonNullable<typeof record> => !!record);
      if (!records.length) {
        ui.notifications?.error("ターン開始処理の対象を取得できませんでした");
        return 0;
      }
      records.forEach((record) => {
        TurnProcessor.turnStart(record.combatant);
      });
      await Promise.all(records.map((record) => repository.saveActor(record.combatant)));
      return records.length;
    } catch (error) {
      console.error("[ponkotu-system] turn process failed", error);
      ui.notifications?.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  };

  const runTurnEnd = async (): Promise<number> => {
    const targetIds = collectTargetIds(tokens);
    if (!targetIds.length) {
      ui.notifications?.error("ターン終了処理の対象が見つかりません");
      return 0;
    }

    try {
      const repository = new CombatantRepository();
      const records = targetIds
        .map((id) => repository.loadByActorId(id))
        .filter((record): record is NonNullable<typeof record> => !!record);
      if (!records.length) {
        ui.notifications?.error("ターン終了処理の対象を取得できませんでした");
        return 0;
      }
      records.forEach((record) => {
        TurnProcessor.turnEnd(record.combatant);
      });
      await Promise.all(records.map((record) => repository.saveActor(record.combatant)));
      return records.length;
    } catch (error) {
      console.error("[ponkotu-system] turn end failed", error);
      ui.notifications?.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  };

  const runTurnProcess = async () => {
    if (turnRunning) return;
    try {
      setTurnRunning(true);
      const appliedCount = await runTurnEnd();
      if (game.combat) game.combat.nextRound();
      const startedCount = await runTurnStart();
      const processedCount = appliedCount > 0 ? appliedCount : startedCount;
      if (processedCount > 0) {
        ui.notifications?.info(`ターン処理を${processedCount}体に適用しました`);
      }
    } finally {
      setTurnRunning(false);
    }
  };

  return { turnRunning, runTurnProcess };
};
