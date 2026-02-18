import { type Combatant } from "../domain/combat/Combatant";

export type CombatantRecord = {
  actorId: string;
  actor: Actor;
  combatant: Combatant;
};

export type ICombatantRepository = {
  save(record: CombatantRecord): Promise<void>;
};
