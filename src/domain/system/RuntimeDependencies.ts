export type RuntimeDependencies = {
  now: () => Date;
  random: () => number;
  generateId: () => string;
};

export const defaultRuntimeDependencies: RuntimeDependencies = {
  now: () => new Date(),
  random: () => Math.random(),
  generateId: () =>
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`,
};
