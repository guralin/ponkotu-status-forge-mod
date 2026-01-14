import { type DomainEvent } from "../event/DomainEvent";
import { type StatusId } from "../status/StatusId";
import { statusDefinitions } from "../status/definitions";
import { type StatusContext, type StatusDefinition } from "../status/StatusDefinition";
import { type StatusSet } from "../status/StatusSet";
import { type Combatant } from "./Combatant";

class TurnContext {
  combatant: Combatant;
  statuses: StatusSet;
  events: DomainEvent[];

  constructor(combatant: Combatant, events: DomainEvent[]) {
    this.combatant = combatant;
    this.statuses = combatant.statuses;
    this.events = events;
  }

  withStatus(statusId: StatusId): StatusContext<StatusId> {
    return {
      statusId,
      combatant: this.combatant,
      statuses: this.statuses,
      events: this.events,
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

  setStack(id: StatusId, next: number, reason = "status-update"): void {
    const previous = this.statuses.getState(id);
    this.statuses.setStack(id, next);
    this.recordStatusChange(id, previous, reason);
  }

  setPending(id: StatusId, next: number, reason = "status-update"): void {
    const previous = this.statuses.getState(id);
    this.statuses.setPending(id, next);
    this.recordStatusChange(id, previous, reason);
  }

  addStack(id: StatusId, delta: number, reason = "status-update"): void {
    const current = this.statuses.getStack(id);
    this.setStack(id, current + delta, reason);
  }

  addPending(id: StatusId, delta: number, reason = "status-update"): void {
    const current = this.statuses.getPending(id);
    this.setPending(id, current + delta, reason);
  }

  applyHpDamage(amount: number, reason: string): void {
    const value = Math.max(0, amount);
    if (value <= 0) return;

    let remaining = value;
    if (this.combatant.barrier > 0) {
      const absorbed = Math.min(this.combatant.barrier, remaining);
      if (absorbed > 0) {
        const previous = this.combatant.barrier;
        this.combatant.barrier = previous - absorbed;
        this.events.push({
          type: "barrier-changed",
          previous,
          next: this.combatant.barrier,
          reason,
        });
        remaining -= absorbed;
      }
    }

    if (remaining > 0) {
      const previous = this.combatant.hp;
      const applied = Math.min(previous, remaining);
      if (applied > 0) {
        this.combatant.hp = previous - applied;
        this.events.push({
          type: "damage-applied",
          target: "hp",
          amount: applied,
          reason,
        });
      }
    }
  }

  applyConstitutionDamage(amount: number, reason: string): void {
    const value = Math.max(0, amount);
    if (value <= 0) return;

    const previous = this.combatant.constitution;
    const applied = Math.min(previous, value);
    if (applied > 0) {
      this.combatant.constitution = previous - applied;
      this.events.push({
        type: "damage-applied",
        target: "constitution",
        amount: applied,
        reason,
      });
    }
  }

  healHp(amount: number, reason: string): void {
    const value = Math.max(0, amount);
    if (value <= 0) return;

    const previous = this.combatant.hp;
    const maxHp = this.combatant.maxHp;
    const healed = Math.min(Math.max(maxHp - previous, 0), value);
    if (healed > 0) {
      this.combatant.hp = previous + healed;
      this.events.push({ type: "healed", amount: healed, reason });
    }
  }

  setBarrier(next: number, reason: string): void {
    const value = Math.max(0, next);
    const previous = this.combatant.barrier;
    if (previous !== value) {
      this.combatant.barrier = value;
      this.events.push({
        type: "barrier-changed",
        previous,
        next: value,
        reason,
      });
    }
  }

  private recordStatusChange(
    id: StatusId,
    previous: { stack: number; pending: number },
    reason: string
  ): void {
    const next = this.statuses.getState(id);
    if (previous.stack === next.stack && previous.pending === next.pending) return;
    this.events.push({
      type: "status-changed",
      status: id,
      previous,
      next,
      reason,
    });
  }
}

export class TurnProcessor {
  static turnStart(combatant: Combatant): DomainEvent[] {
    const events: DomainEvent[] = [];
    const context = new TurnContext(combatant, events);
    const definitions =
      statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;

    definitions.forEach((definition) => {
      if (!definition.hasPending) return;
      const pending = context.getPending(definition.id);
      if (pending <= 0) return;
      const current = context.getStack(definition.id);
      context.setStack(definition.id, current + pending, "turn-start-commit");
      context.setPending(definition.id, 0, "turn-start-commit");
    });

    definitions.forEach((definition) => {
      definition.onTurnStart?.(context.withStatus(definition.id));
    });

    return events;
  }

  static turnEnd(combatant: Combatant): DomainEvent[] {
    const events: DomainEvent[] = [];
    const context = new TurnContext(combatant, events);
    const definitions =
      statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;

    definitions.forEach((definition) => {
      definition.onTurnEnd?.(context.withStatus(definition.id));
    });

    context.setBarrier(0, "turn-end-reset");

    return events;
  }
}
