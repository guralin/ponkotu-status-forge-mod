import { type StatusId } from "../status/StatusId";
import { type StatusState } from "../status/StatusState";

export type DomainEvent =
  | {
      type: "damage-applied";
      target: "hp" | "constitution";
      amount: number;
      reason: string;
    }
  | {
      type: "healed";
      amount: number;
      reason: string;
    }
  | {
      type: "status-changed";
      status: StatusId;
      previous: StatusState;
      next: StatusState;
      reason: string;
    }
  | {
      type: "barrier-changed";
      previous: number;
      next: number;
      reason: string;
    };
