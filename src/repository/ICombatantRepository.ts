import { type Combatant } from "../domain/combat/Combatant";

export type CombatantRecord = {
  actorId: string;
  actor: Actor;
  combatant: Combatant;
};

export type ICombatantRepository = {
  loadByActorId(actorId: string): CombatantRecord | null;
  saveActor(combatant: Combatant): Promise<void>;
  save(record: CombatantRecord): Promise<void>;
};
