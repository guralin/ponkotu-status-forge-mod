import { type StatusId } from "./types/StatusId";
import { type StatusState } from "./types/StatusState";

const normalizeStack = (value: number): number =>
  Math.max(0, Math.floor(value));

export class StatusSet {
  #map = new Map<StatusId, StatusState>();

  constructor(initial?: Partial<Record<StatusId, StatusState>>) {
    if (!initial) return;
    Object.entries(initial).forEach(([key, value]) => {
      if (!value) return;
      this.#map.set(key as StatusId, {
        stack: normalizeStack(value.stack),
        pending: normalizeStack(value.pending),
      });
    });
  }

  getState(id: StatusId): StatusState {
    const state = this.#map.get(id);
    if (!state) return { stack: 0, pending: 0 };
    return { stack: state.stack, pending: state.pending };
  }

  getStack(id: StatusId): number {
    return this.#map.get(id)?.stack ?? 0;
  }

  getPending(id: StatusId): number {
    return this.#map.get(id)?.pending ?? 0;
  }

  setState(id: StatusId, next: StatusState): void {
    this.#map.set(id, {
      stack: normalizeStack(next.stack),
      pending: normalizeStack(next.pending),
    });
  }

  setStack(id: StatusId, next: number): void {
    const current = this.#map.get(id) ?? { stack: 0, pending: 0 };
    current.stack = normalizeStack(next);
    this.#map.set(id, current);
  }

  setPending(id: StatusId, next: number): void {
    const current = this.#map.get(id) ?? { stack: 0, pending: 0 };
    current.pending = normalizeStack(next);
    this.#map.set(id, current);
  }

  addStack(id: StatusId, delta: number): void {
    const current = this.#map.get(id) ?? { stack: 0, pending: 0 };
    current.stack = normalizeStack(current.stack + delta);
    this.#map.set(id, current);
  }

  addPending(id: StatusId, delta: number): void {
    const current = this.#map.get(id) ?? { stack: 0, pending: 0 };
    current.pending = normalizeStack(current.pending + delta);
    this.#map.set(id, current);
  }
}
