import { type Combatant } from "../domain/combat/Combatant";

export type CombatantRecord = {
  combatId: string;
  combatantId: string;
  actorId: string;
  actor: Actor;
  combatant: Combatant;
};

export type ICombatantRepository = {
  load(params: {
    combatId: string;
    combatantId: string;
    actorId: string;
  }): Promise<CombatantRecord | null>;
  save(record: CombatantRecord): Promise<void>;
};
