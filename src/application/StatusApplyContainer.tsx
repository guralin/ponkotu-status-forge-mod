import { StatusApply } from "../components/StatusApply";
import { useDamageCalcTokens } from "../components/damageCalc/hooks/useDamageCalcTokens";
import {
  RANDOM_TARGET_OPTIONS,
  type SelectOption,
  type StatusApplyActions,
  type StatusApplyViewModel,
  type StatusLibraryActions,
  type StatusLibraryEntryViewModel,
  type StatusLibraryViewModel,
  type TokenOption,
} from "../components/damageCalc/types";
import { statusDefinitions } from "../domain/status/StatusDefinitions";
import { type StatusId } from "../domain/status/types/StatusId";
import { type ApplyStatusTarget } from "./usecases/applyStatusStack";
import { useStatusApplyForm } from "./damageCalc/useStatusApplyForm";
import { useStatusLibrary } from "./damageCalc/useStatusLibrary";

const toTokenOptions = (tokens: TokenOption[]): SelectOption[] =>
  tokens.map((token) => ({
    value: token.actorId,
    label: token.name,
  }));

const statusOptions: SelectOption[] = statusDefinitions.map((definition) => ({
  value: definition.id,
  label: definition.name,
}));

const toLibraryEntryViewModel = (
  entry: {
    id: string;
    name: string;
    stack: number;
    pending: number;
    hasPending: boolean;
  },
): StatusLibraryEntryViewModel => ({
  id: entry.id,
  name: entry.name,
  stack: entry.stack,
  pending: entry.pending,
  hasPending: entry.hasPending,
});

export const StatusApplyContainer = () => {
  const tokens = useDamageCalcTokens();
  const statusForm = useStatusApplyForm(tokens);
  const library = useStatusLibrary();
  const tokenOptions = toTokenOptions(tokens);

  const statusModel: StatusApplyViewModel = {
    selectedTargetValue: statusForm.statusTargetValue,
    targetOptions: [
      ...tokenOptions,
      ...RANDOM_TARGET_OPTIONS.map((option) => ({
        ...option,
        group: "ランダム",
      })),
    ],
    selectedStatusValue: statusForm.statusId,
    statusOptions,
    selectedApplyTargetValue: statusForm.applyTarget,
    applyTargetOptions: [
      { value: "stack", label: "現在" },
      {
        value: "pending",
        label: "次ターン(next)",
        disabled: !statusForm.canApplyPending,
      },
    ],
    stack: statusForm.statusStack,
    isRunning: statusForm.statusRunning,
    canRun: tokens.length >= 1,
  };

  const statusActions: StatusApplyActions = {
    onTargetChange: statusForm.setStatusTargetValue,
    onStatusChange: (value) => statusForm.setStatusId(value as StatusId),
    onApplyTargetChange: (value) =>
      statusForm.setApplyTarget(value as ApplyStatusTarget),
    onStackChange: statusForm.setStatusStack,
    onRunClick: statusForm.runApplyStatus,
  };

  const libraryModel: StatusLibraryViewModel = {
    selectedTargetValue: library.libraryTargetValue,
    targetOptions: tokenOptions,
    isOpen: library.libraryOpen,
    canToggle: Boolean(library.libraryTargetValue),
    entries: library.libraryEntries.map(toLibraryEntryViewModel),
  };

  const libraryActions: StatusLibraryActions = {
    onTargetChange: library.setLibraryTargetValue,
    onToggleClick: library.toggleLibrary,
  };

  return (
    <StatusApply
      statusModel={statusModel}
      statusActions={statusActions}
      libraryModel={libraryModel}
      libraryActions={libraryActions}
    />
  );
};
