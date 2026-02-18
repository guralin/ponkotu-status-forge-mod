import { type StatusId } from "../../domain/status/types/StatusId";
import { type ICombatantRepository } from "../../repository/ICombatantRepository";

export type ApplyStatusStackCommand = {
  actorId: string;
  statusId: StatusId;
  stackDelta: number;
};

export type ApplyStatusStackResult = {
  actorId: string;
  actorName: string;
  statusId: StatusId;
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

  const record = repository.loadByActorId(command.actorId);
  if (!record) {
    throw new Error("combatant record not found");
  }

  const before = record.combatant.statuses.getStack(command.statusId);
  record.combatant.statuses.addStack(command.statusId, command.stackDelta);
  await repository.saveActor(record.combatant);
  const after = record.combatant.statuses.getStack(command.statusId);

  return {
    actorId: record.actorId,
    actorName: record.combatant.name ?? record.actor.name ?? "unknown",
    statusId: command.statusId,
    before,
    after,
  };
};
