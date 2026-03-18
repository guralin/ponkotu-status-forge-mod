import {
  applyStatusStack,
  type ApplyStatusStackCommand,
  type ApplyStatusStackResult,
} from "./usecases/applyStatusStack";
import { CombatantRepository } from "../repository/CombatantRepository";

let socket: SocketlibSocket | null = null;

const gmHandler = async (command: ApplyStatusStackCommand): Promise<ApplyStatusStackResult> => {
  const repository = new CombatantRepository();
  return applyStatusStack(repository, command);
};

export const registerSocket = (moduleId: string): void => {
  socket = socketlib.registerModule(moduleId);
  socket.register("applyStatusStack", gmHandler as (...args: unknown[]) => unknown);
};

export const executeApplyStatusAsGM = (
  command: ApplyStatusStackCommand
): Promise<ApplyStatusStackResult> => {
  if (!socket) {
    throw new Error("socketlib が初期化されていません");
  }
  return socket.executeAsGM<ApplyStatusStackResult>("applyStatusStack", command);
};
