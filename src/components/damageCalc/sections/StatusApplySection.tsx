import {
  type StatusApplyActions,
  type StatusApplyViewModel,
  type StatusLibraryActions,
  type StatusLibraryViewModel,
} from "../types";

const ungroupedOptions = (options: StatusApplyViewModel["targetOptions"]) =>
  options.filter((option) => !option.group);

const groupedOptions = (
  options: StatusApplyViewModel["targetOptions"],
  group: string,
) => options.filter((option) => option.group === group);

type Props = {
  statusModel: StatusApplyViewModel;
  statusActions: StatusApplyActions;
  libraryModel: StatusLibraryViewModel;
  libraryActions: StatusLibraryActions;
};

export const StatusApplySection = ({
  statusModel,
  statusActions,
  libraryModel,
  libraryActions,
}: Props) => {
  const {
    selectedTargetValue,
    targetOptions,
    selectedStatusValue,
    statusOptions,
    selectedApplyTargetValue,
    applyTargetOptions,
    stack,
    isRunning,
    canRun,
  } = statusModel;
  const {
    onTargetChange,
    onStatusChange,
    onApplyTargetChange,
    onStackChange,
    onRunClick,
  } = statusActions;

  const {
    selectedTargetValue: selectedLibraryTargetValue,
    targetOptions: libraryTargetOptions,
    isOpen: isLibraryOpen,
    canToggle: canToggleLibrary,
    entries,
  } = libraryModel;
  const {
    onTargetChange: onLibraryTargetChange,
    onToggleClick,
  } = libraryActions;
  const targetRandomOptions = groupedOptions(targetOptions, "ランダム");

  return (
    <>
      <div className="ponkotu-damage__row">
        <h3 style={{ margin: "8px 0" }}>状態異常付与</h3>
      </div>

      <div className="ponkotu-damage__row">
        <label className="ponkotu-damage__label">
          対象キャラ
          <select
            value={selectedTargetValue}
            onChange={(e) => onTargetChange(e.target.value)}
          >
            <option value="">選択してください</option>
            {ungroupedOptions(targetOptions).map((option) => (
              <option
                key={`status-target-${option.value}`}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
            {targetRandomOptions.length > 0 && (
              <optgroup label="ランダム">
                {targetRandomOptions.map((option) => (
                  <option
                    key={`status-target-${option.value}`}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                ))}
              </optgroup>
            )}
          </select>
        </label>

        <label className="ponkotu-damage__label">
          状態異常
          <select
            value={selectedStatusValue}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="ponkotu-damage__label">
          付与先
          <select
            value={selectedApplyTargetValue}
            onChange={(e) => onApplyTargetChange(e.target.value)}
          >
            {applyTargetOptions.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="ponkotu-damage__label">
        スタック数
        <input
          type="number"
          min={1}
          step={1}
          value={stack}
          onChange={(e) => onStackChange(e.target.value)}
          placeholder="例: 3"
        />
      </label>

      <div className="ponkotu-damage__row">
        <button onClick={onRunClick} disabled={isRunning || !canRun}>
          {isRunning ? "付与中..." : "状態異常を付与"}
        </button>
      </div>

      <div className="ponkotu-damage__row">
        <h3 style={{ margin: "8px 0" }}>ライブラ！</h3>
      </div>

      <div className="ponkotu-damage__row">
        <label className="ponkotu-damage__label">
          対象キャラ
          <select
            value={selectedLibraryTargetValue}
            onChange={(e) => onLibraryTargetChange(e.target.value)}
          >
            <option value="">選択してください</option>
            {libraryTargetOptions.map((option) => (
              <option
                key={`library-target-${option.value}`}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <button disabled={!canToggleLibrary} onClick={onToggleClick}>
          {isLibraryOpen ? "閉じる" : "表示"}
        </button>
      </div>

      {isLibraryOpen && (
        <div className="ponkotu-damage__row" style={{ flexDirection: "column" }}>
          {entries.length === 0 ? (
            <span>状態異常なし</span>
          ) : (
            <table style={{ fontSize: "0.9em", width: "100%" }}>
              <thead>
                <tr>
                  <th>ステータス</th>
                  <th>スタック</th>
                  <th>次ターン</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.name}</td>
                    <td>{entry.stack}</td>
                    <td>{entry.hasPending ? entry.pending : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
};
