import { type StatusId } from "../status/StatusId";
import { statusDefinitions } from "../status/definitions";
import { type StatusContext, type StatusDefinition } from "../status/StatusDefinition";
import { type StatusSet } from "../status/StatusSet";
import { type Combatant } from "./Combatant";

class TurnContext {
  combatant: Combatant;
  statuses: StatusSet;

  constructor(combatant: Combatant) {
    this.combatant = combatant;
    this.statuses = combatant.statuses;
  }

  withStatus(statusId: StatusId): StatusContext<StatusId> {
    return {
      statusId,
      combatant: this.combatant,
      statuses: this.statuses,
      getStack: this.getStack.bind(this),
      getPending: this.getPending.bind(this),
      setStack: this.setStack.bind(this),
      setPending: this.setPending.bind(this),
      addStack: this.addStack.bind(this),
      addPending: this.addPending.bind(this),
      applyHpDamage: this.applyHpDamage.bind(this),
      applyConstitutionDamage: this.applyConstitutionDamage.bind(this),
      healHp: this.healHp.bind(this),
      setBarrier: this.setBarrier.bind(this),
    };
  }

  getStack(id: StatusId): number {
    return this.statuses.getStack(id);
  }

  getPending(id: StatusId): number {
    return this.statuses.getPending(id);
  }

  setStack(id: StatusId, next: number): void {
    this.statuses.setStack(id, next);
  }

  setPending(id: StatusId, next: number): void {
    this.statuses.setPending(id, next);
  }

  addStack(id: StatusId, delta: number): void {
    const current = this.statuses.getStack(id);
    this.setStack(id, current + delta);
  }

  addPending(id: StatusId, delta: number): void {
    const current = this.statuses.getPending(id);
    this.setPending(id, current + delta);
  }

  applyHpDamage(amount: number): void {
    this.combatant.applyHpDamage(amount);
  }

  applyConstitutionDamage(amount: number): void {
    this.combatant.applyConstitutionDamage(amount);
  }

  healHp(amount: number): void {
    this.combatant.healHp(amount);
  }

  setBarrier(next: number): void {
    this.combatant.setBarrier(next);
  }
}

export class TurnProcessor {
  static turnStart(combatant: Combatant): void {
    const context = new TurnContext(combatant);
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
    const context = new TurnContext(combatant);
    const definitions =
      statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;

    definitions.forEach((definition) => {
      definition.onTurnEnd?.(context.withStatus(definition.id));
    });

    context.setBarrier(0);
  }
}
