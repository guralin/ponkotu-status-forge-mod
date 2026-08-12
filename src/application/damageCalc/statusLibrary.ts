import { statusDefinitions } from "../../domain/status/StatusDefinitions";
import { type StatusSet } from "../../domain/status/StatusSet";
import { type StatusDefinition } from "../../domain/status/types/StatusDefinition";
import { type StatusId } from "../../domain/status/types/StatusId";

export type StatusLibraryEntry = {
  id: StatusId;
  name: string;
  stack: number;
  pending: number;
  hasPending: boolean;
};

export const buildLibraryEntries = (
  statuses: StatusSet,
  definitions: ReadonlyArray<StatusDefinition<string>>,
): StatusLibraryEntry[] =>
  definitions
    .map((def) => ({
      id: def.id as StatusId,
      name: def.name,
      stack: statuses.getStack(def.id as StatusId),
      pending: statuses.getPending(def.id as StatusId),
      hasPending: Boolean(def.hasPending),
    }))
    .filter((entry) => entry.stack > 0 || entry.pending > 0);

export const buildDefaultLibraryEntries = (
  statuses: StatusSet,
): StatusLibraryEntry[] =>
  buildLibraryEntries(
    statuses,
    statusDefinitions as ReadonlyArray<StatusDefinition<string>>,
  );
