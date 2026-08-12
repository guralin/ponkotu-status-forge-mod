#!/usr/bin/env bash
set -u

run_check() {
  local command="$1"
  local output

  output="$(mktemp)"
  if eval "$command" >"$output" 2>&1; then
    rm -f "$output"
    return 0
  fi

  rm -f "$output"
  printf '{"decision":"block","reason":"%s failed"}' "$command"
  return 1
}

run_check "npm run lint" || exit 0
run_check "npm run typecheck" || exit 0
run_check "npm run test" || exit 0

printf '{"continue":true}'
