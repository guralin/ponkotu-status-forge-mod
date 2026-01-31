import { type StatusId } from "../domain/status/StatusId";
import { type StatusDefinition } from "../domain/status/StatusDefinition";
import { statusDefinitions } from "../domain/status/definitions";

export const collectStatusMappingIssues = (): string[] => {
  const issues: string[] = [];
  const definitions =
    statusDefinitions as ReadonlyArray<StatusDefinition<StatusId>>;

  definitions.forEach((definition) => {
    const mapping = definition.attribute;
    if (!mapping || !mapping.stack) {
      issues.push(`ステータス ${definition.id} の stack 属性がありません`);
      return;
    }
    if (definition.hasPending && !mapping.pending) {
      issues.push(
        `ステータス ${definition.id} は pending を持つのに対応する属性がありません`
      );
    }
    if (!definition.hasPending && mapping.pending) {
      issues.push(
        `ステータス ${definition.id} は pending を持たないのに pending 属性が定義されています`
      );
    }
  });

  return issues;
};
