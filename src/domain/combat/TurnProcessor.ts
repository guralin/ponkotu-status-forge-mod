import { type StatusId } from "../status/types/StatusId";
import { statusDefinitions } from "../status/StatusDefinitions";
import { createStatusContextFactory } from "../status/StatusContextFactory";
import { type StatusDefinition } from "../status/types/StatusDefinition";
import { type Combatant } from "./Combatant";

export class TurnProcessor {
  static turnStart(combatant: Combatant): void {
    const context = createStatusContextFactory<StatusId>(combatant);
    const definitions =
      statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;

    definitions.forEach((definition) => {
      if (!definition.hasPending) return;
      const pending = context.getPending(definition.id);
      if (pending <= 0) return;
      const current = context.getStack(definition.id);
      context.setStack(definition.id, current + pending);
      context.setPending(definition.id, 0);
    });

    definitions.forEach((definition) => {
      definition.onTurnStart?.(context.withStatus(definition.id));
    });
  }

  static turnEnd(combatant: Combatant): void {
    const context = createStatusContextFactory<StatusId>(combatant);
    const definitions =
      statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;

    definitions.forEach((definition) => {
      definition.onTurnEnd?.(context.withStatus(definition.id));
    });

    context.setBarrier(0);
  }
}
