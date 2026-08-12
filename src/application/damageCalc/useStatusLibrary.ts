import { useState } from "react";
import { CombatantRepository } from "../../repository/CombatantRepository";
import {
  buildDefaultLibraryEntries,
  type StatusLibraryEntry,
} from "./statusLibrary";

export type StatusLibraryState = {
  libraryTargetValue: string;
  libraryOpen: boolean;
  libraryEntries: StatusLibraryEntry[];
  setLibraryTargetValue: (value: string) => void;
  toggleLibrary: () => void;
};

export const useStatusLibrary = (): StatusLibraryState => {
  const [libraryTargetValue, setLibraryTargetValueRaw] = useState<string>("");
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [libraryEntries, setLibraryEntries] = useState<StatusLibraryEntry[]>([]);

  const setLibraryTargetValue = (value: string) => {
    setLibraryTargetValueRaw(value);
    setLibraryOpen(false);
    setLibraryEntries([]);
  };

  const toggleLibrary = () => {
    if (libraryOpen) {
      setLibraryOpen(false);
      setLibraryEntries([]);
      return;
    }
    if (!libraryTargetValue) {
      return;
    }
    const repo = new CombatantRepository();
    const record = repo.loadByActorId(libraryTargetValue);
    if (!record) {
      return;
    }
    setLibraryEntries(buildDefaultLibraryEntries(record.combatant.statuses));
    setLibraryOpen(true);
  };

  return {
    libraryTargetValue,
    libraryOpen,
    libraryEntries,
    setLibraryTargetValue,
    toggleLibrary,
  };
};
