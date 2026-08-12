import {
  type StatusApplyActions,
  type StatusApplyViewModel,
  type StatusLibraryActions,
  type StatusLibraryViewModel,
} from "./damageCalc/types";
import { StatusApplySection } from "./damageCalc/sections/StatusApplySection";

type Props = {
  statusModel: StatusApplyViewModel;
  statusActions: StatusApplyActions;
  libraryModel: StatusLibraryViewModel;
  libraryActions: StatusLibraryActions;
};

export const StatusApply = ({
  statusModel,
  statusActions,
  libraryModel,
  libraryActions,
}: Props) => {
  return (
    <div className="ponkotu-damage">
      <StatusApplySection
        statusModel={statusModel}
        statusActions={statusActions}
        libraryModel={libraryModel}
        libraryActions={libraryActions}
      />
    </div>
  );
};
