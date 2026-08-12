
export type TokenOption = {
  actorId: string;
  name: string;
  actorName: string;
  disposition: number;
};

export const optionLabel = (token: TokenOption) => token.name;

/** 状態異常付与フォーム専用の対象選択値 */
export type StatusTargetValue =
  | string              // actorId（特定キャラ）
  | "random:ally"       // ランダム（味方）
  | "random:enemy"      // ランダム（敵）
  | "random:all";       // ランダム（全体）

export const RANDOM_TARGET_OPTIONS = [
  { value: "random:ally" as const, label: "ランダム（味方）" },
  { value: "random:enemy" as const, label: "ランダム（敵）" },
  { value: "random:all" as const, label: "ランダム（全体）" },
] as const;

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
};

export type CombatantPreviewViewModel = {
  normal: number;
  special: number;
  criticalChance?: number;
  whiteApplies: boolean;
  whiteOtherCount: number;
  whitePercentage: number;
};

export type WhiteEffectViewModel = {
  applies: boolean;
  otherWhiteCount: number;
  percentage: number;
};

export type DamageResultViewModel = {
  attackerWhiteEffect: WhiteEffectViewModel;
  receiverWhiteEffect: WhiteEffectViewModel;
  attackerNormalPercentage: number;
  receiverNormalPercentage: number;
  normalRatio: number;
  attackerSpecialPercentage: number;
  receiverSpecialPercentage: number;
  specialRatio: number;
  criticalHit: boolean;
  receiverSpecialConfPercentage: number;
  specialConfRatio: number;
  hpDamageApplied: number;
  barrierAbsorbed: number;
  confDamageApplied: number;
  sanDamageApplied: number;
  hpAfter: number;
  barrierAfter: number;
  constitutionAfter: number;
  sanAfter: number;
};

export type DamageApplyViewModel = {
  selectedAttackerId: string;
  selectedReceiverId: string;
  baseDamage: string;
  bonusNormal: string;
  bonusSpecial: string;
  directAttack: boolean;
  isRunning: boolean;
  canRun: boolean;
  attackerPreview: CombatantPreviewViewModel | null;
  receiverPreview: CombatantPreviewViewModel | null;
  result: DamageResultViewModel | null;
};

export type DamageApplyActions = {
  onAttackerChange: (value: string) => void;
  onReceiverChange: (value: string) => void;
  onBaseDamageChange: (value: string) => void;
  onBonusNormalChange: (value: string) => void;
  onBonusSpecialChange: (value: string) => void;
  onDirectAttackChange: (value: boolean) => void;
  onRunClick: () => Promise<void>;
};

export type TurnProcessViewModel = {
  isRunning: boolean;
  canRun: boolean;
};

export type TurnProcessActions = {
  onRunClick: () => Promise<void>;
};

export type StatusLibraryEntryViewModel = {
  id: string;
  name: string;
  stack: number;
  pending: number;
  hasPending: boolean;
};

export type StatusApplyViewModel = {
  selectedTargetValue: string;
  targetOptions: SelectOption[];
  selectedStatusValue: string;
  statusOptions: SelectOption[];
  selectedApplyTargetValue: string;
  applyTargetOptions: SelectOption[];
  stack: string;
  isRunning: boolean;
  canRun: boolean;
};

export type StatusApplyActions = {
  onTargetChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onApplyTargetChange: (value: string) => void;
  onStackChange: (value: string) => void;
  onRunClick: () => Promise<void>;
};

export type StatusLibraryViewModel = {
  selectedTargetValue: string;
  targetOptions: SelectOption[];
  isOpen: boolean;
  canToggle: boolean;
  entries: StatusLibraryEntryViewModel[];
};

export type StatusLibraryActions = {
  onTargetChange: (value: string) => void;
  onToggleClick: () => void;
};
