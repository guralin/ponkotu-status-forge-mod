import { type StatusId } from "./types/StatusId";
import { type StatusState } from "./types/StatusState";
import { getStatusMaxStack } from "./StatusDefinitions";

const normalizeStack = (id: StatusId, value: number): number => {
  const normalized = Math.max(0, Math.floor(value));
  const maxStack = getStatusMaxStack(id);
  return maxStack === undefined ? normalized : Math.min(normalized, maxStack);
};

const normalizePending = (value: number): number =>
  Math.max(0, Math.floor(value));

export class StatusSet {
  #map = new Map<StatusId, StatusState>();

  constructor(initial?: Partial<Record<StatusId, StatusState>>) {
    if (!initial) return;
    Object.entries(initial).forEach(([key, value]) => {
      if (!value) return;
      this.#map.set(key as StatusId, {
        stack: normalizeStack(key as StatusId, value.stack),
        pending: normalizePending(value.pending),
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
      stack: normalizeStack(id, next.stack),
      pending: normalizePending(next.pending),
    });
  }

  setStack(id: StatusId, next: number): void {
    const current = this.#map.get(id) ?? { stack: 0, pending: 0 };
    current.stack = normalizeStack(id, next);
    this.#map.set(id, current);
  }

  setPending(id: StatusId, next: number): void {
    const current = this.#map.get(id) ?? { stack: 0, pending: 0 };
    current.pending = normalizePending(next);
    this.#map.set(id, current);
  }

  addStack(id: StatusId, delta: number): void {
    const current = this.#map.get(id) ?? { stack: 0, pending: 0 };
    current.stack = normalizeStack(id, current.stack + delta);
    this.#map.set(id, current);
  }

  addPending(id: StatusId, delta: number): void {
    const current = this.#map.get(id) ?? { stack: 0, pending: 0 };
    current.pending = normalizePending(current.pending + delta);
    this.#map.set(id, current);
  }
}
