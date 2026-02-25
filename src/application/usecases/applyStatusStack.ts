import { type StatusId } from "../../domain/status/types/StatusId";
import { statusDefinitions } from "../../domain/status/definitions";
import { type ICombatantRepository } from "../../repository/ICombatantRepository";

export type ApplyStatusTarget = "stack" | "pending";

export type ApplyStatusStackCommand = {
  actorId: string;
  statusId: StatusId;
  stackDelta: number;
  target?: ApplyStatusTarget;
};

export type ApplyStatusStackResult = {
  actorId: string;
  actorName: string;
  statusId: StatusId;
  target: ApplyStatusTarget;
  before: number;
  after: number;
};

const isPositiveInteger = (value: number): boolean =>
  Number.isInteger(value) && value >= 1;

export const applyStatusStack = async (
  repository: ICombatantRepository,
  command: ApplyStatusStackCommand
): Promise<ApplyStatusStackResult> => {
  if (!command.actorId) {
    throw new Error("actorId is required");
  }
  if (!isPositiveInteger(command.stackDelta)) {
    throw new Error("stackDelta must be a positive integer");
  }
  const target = command.target ?? "stack";

  const definition = statusDefinitions.find((item) => item.id === command.statusId);
  if (!definition) {
    throw new Error("status definition not found");
  }
  const supportsPending =
    "pending" in definition.attribute && Boolean(definition.attribute.pending);
  if (target === "pending" && !supportsPending) {
    throw new Error("selected status does not support pending");
  }

  const record = repository.loadByActorId(command.actorId);
  if (!record) {
    throw new Error("combatant record not found");
  }

  const before =
    target === "pending"
      ? record.combatant.statuses.getPending(command.statusId)
      : record.combatant.statuses.getStack(command.statusId);
  if (target === "pending") {
    record.combatant.statuses.addPending(command.statusId, command.stackDelta);
  } else {
    record.combatant.statuses.addStack(command.statusId, command.stackDelta);
  }
  await repository.saveActor(record.combatant);
  const after =
    target === "pending"
      ? record.combatant.statuses.getPending(command.statusId)
      : record.combatant.statuses.getStack(command.statusId);

  return {
    actorId: record.actorId,
    actorName: record.combatant.name ?? record.actor.name ?? "unknown",
    statusId: command.statusId,
    target,
    before,
    after,
  };
};
