import { type StatusId } from "../status/types/StatusId";
import { statusDefinitions } from "../status/StatusDefinitions";
import { type StatusDefinition } from "../status/types/StatusDefinition";
import { type Combatant } from "./Combatant";

export class TurnProcessor {
  static turnStart(combatant: Combatant): void {
    const definitions =
      statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;

    definitions.forEach((definition) => {
      if (!definition.hasPending) return;
      const pending = combatant.getStatusPending(definition.id);
      if (pending <= 0) return;
      const current = combatant.getStatusStack(definition.id);
      combatant.setStatusStack(definition.id, current + pending);
      combatant.setStatusPending(definition.id, 0);
    });

    definitions.forEach((definition) => {
      definition.onTurnStart?.(combatant, definition.id);
    });
  }

  static turnEnd(combatant: Combatant): void {
    const definitions =
      statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;

    definitions.forEach((definition) => {
      definition.onTurnEnd?.(combatant, definition.id);
    });

    combatant.setBarrier(0);
  }
}
