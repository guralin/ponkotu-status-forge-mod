import {
  CombatTurnEventTrigger,
  type CombatTurnEventDto,
  type CombatTurnEventType,
} from "./CombatTurnEventTrigger";
import { CombatantRepository } from "../../repository/CombatantRepository";

const createTurnDto = (
  type: CombatTurnEventType,
  combat: Combat,
  combatant: Combatant,
  actorId: string
): CombatTurnEventDto | null => {
  const combatId = combat.id ?? "";
  const sceneId = combat.scene?.id ?? "";
  const combatantId = combatant.id ?? "";
  const round = combat.round ?? 0;
  const turn = combat.turn ?? 0;
  if (!combatId || !sceneId || !combatantId || !actorId) return null;

  return {
    type,
    combatId,
    sceneId,
    round,
    turn,
    combatantId,
    actorId,
    source: "system",
    timestamp: new Date().toISOString(),
  };
};

const shouldHandleCombatUpdate = (changes: Record<string, unknown>): boolean =>
  Object.prototype.hasOwnProperty.call(changes, "turn") ||
  Object.prototype.hasOwnProperty.call(changes, "round");

export const registerCombatTurnHooks = () => {
  const combatTurnEventTrigger = new CombatTurnEventTrigger(
    new CombatantRepository()
  );
  let lastTurnState: { combatId: string; combatantId: string } | null = null;

  const handleCombatUpdate = (
    combat: Combat,
    changes: Record<string, unknown>
  ) => {
    if (!shouldHandleCombatUpdate(changes)) return;

    const combatId = combat.id ?? "";
    const activeCombatant = combat.combatant;
    if (!combatId || !activeCombatant) return;

    if (lastTurnState?.combatId && lastTurnState.combatId !== combatId) {
      lastTurnState = null;
    }

    const activeId = activeCombatant.id ?? "";
    if (!activeId) return;

    if (lastTurnState?.combatantId && lastTurnState.combatantId !== activeId) {
      const previousCombatant = combat.combatants.get(lastTurnState.combatantId);
      const previousActorId =
        previousCombatant?.actor?.id ??
        (previousCombatant as { actorId?: string } | undefined)?.actorId ??
        "";
      if (previousCombatant && previousActorId) {
        const dto = createTurnDto(
          "turn-end",
          combat,
          previousCombatant,
          previousActorId
        );
        if (dto) {
          void combatTurnEventTrigger.enqueue(dto);
        }
      }
    }

    if (activeId !== lastTurnState?.combatantId) {
      const actorId =
        activeCombatant.actor?.id ??
        (activeCombatant as { actorId?: string } | undefined)?.actorId ??
        "";
      const dto = createTurnDto("turn-start", combat, activeCombatant, actorId);
      if (dto) {
        void combatTurnEventTrigger.enqueue(dto);
      }
    }

    lastTurnState = { combatId, combatantId: activeId };
  };

  Hooks.on("updateCombat", (combat: Combat, changes: Record<string, unknown>) => {
    handleCombatUpdate(combat, changes);
  });
};
