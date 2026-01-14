import { TurnProcessor } from "../../domain/combat/TurnProcessor";
import { type DomainEvent } from "../../domain/event/DomainEvent";
import { type ICombatantRepository } from "../../repository/ICombatantRepository";

export type CombatTurnEventType = "turn-start" | "turn-end";

export type CombatTurnEventDto = {
  type: CombatTurnEventType;
  combatId: string;
  sceneId: string;
  round: number;
  turn: number;
  combatantId: string;
  actorId: string;
  source: "system" | "manual";
  timestamp: string;
};

export type CombatTurnEventResult = {
  dto: CombatTurnEventDto;
  events: DomainEvent[];
};

const hasValidNumber = (value: number) =>
  Number.isFinite(value) && !Number.isNaN(value);

const validateDto = (dto: CombatTurnEventDto): string | null => {
  if (!dto.combatId) return "combatId が空です";
  if (!dto.sceneId) return "sceneId が空です";
  if (!dto.combatantId) return "combatantId が空です";
  if (!dto.actorId) return "actorId が空です";
  if (!dto.timestamp) return "timestamp が空です";
  if (!hasValidNumber(dto.round) || dto.round < 0) {
    return "round が不正です";
  }
  if (!hasValidNumber(dto.turn) || dto.turn < 0) {
    return "turn が不正です";
  }
  return null;
};

export class CombatTurnEventTrigger {
  #repo: ICombatantRepository;
  #queue: Promise<void> = Promise.resolve();

  constructor(repo: ICombatantRepository) {
    this.#repo = repo;
  }

  enqueue(dto: CombatTurnEventDto): Promise<CombatTurnEventResult | null> {
    const task = () => this.#handle(dto);
    const queued = this.#queue.then(task, task);
    this.#queue = queued.then(
      () => undefined,
      () => undefined
    );
    return queued;
  }

  async #handle(
    dto: CombatTurnEventDto
  ): Promise<CombatTurnEventResult | null> {
    const error = validateDto(dto);
    if (error) {
      console.warn("[ponkotu-system] turn event invalid", dto, error);
      return null;
    }

    try {
      const record = await this.#repo.load({
        combatId: dto.combatId,
        combatantId: dto.combatantId,
        actorId: dto.actorId,
      });
      if (!record) {
        console.warn("[ponkotu-system] combatant not found", dto);
        return null;
      }

      const events =
        dto.type === "turn-start"
          ? TurnProcessor.turnStart(record.combatant)
          : TurnProcessor.turnEnd(record.combatant);

      await this.#repo.save(record);

      return { dto, events };
    } catch (error) {
      console.error("[ponkotu-system] turn event failed", dto, error);
      return null;
    }
  }
}
