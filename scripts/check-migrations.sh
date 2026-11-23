#!/usr/bin/env bash
# A migration already in main is never changed: Supabase remembers which files it ran, not their content,
# so an edited migration would change a fresh database but never production. Fix forward with a new file.
#
# Refuses, compared with a base commit:
#   - any change, deletion or rename of a migration that exists in the base;
#   - a new migration dated before the latest one of the base (it would run out of order).
#
#   scripts/check-migrations.sh <base-ref>      # CI: the commit before the push, or the PR base
#   scripts/check-migrations.sh --staged        # pre-commit: what is about to be committed
set -euo pipefail
cd "$(dirname "$0")/.."
dir=supabase/migrations

if [[ "${1:-}" == "--staged" ]]; then
  base=HEAD; diff=(git diff --cached)
else
  base="${1:-origin/main}"
  if [[ "$base" =~ ^0+$ ]] || ! git rev-parse --verify --quiet "${base}^{commit}" >/dev/null; then
    echo "No base commit to compare with: migration check skipped."; exit 0
  fi
  base="$(git merge-base "$base" HEAD)"; diff=(git diff "$base" HEAD)
fi
git rev-parse --verify --quiet "${base}^{commit}" >/dev/null || { echo "No previous commit: migration check skipped."; exit 0; }

failed=0
changed="$("${diff[@]}" --name-status --diff-filter=MDR -- "$dir")"
if [[ -n "$changed" ]]; then
  echo "✋ Migrations already in main were changed, deleted or renamed. Write a new migration instead:"
  echo "$changed"; failed=1
fi

latest="$(git ls-tree --name-only "$base" "$dir/" | xargs -r -n1 basename | sort | tail -1 | cut -c1-14)"
for f in $("${diff[@]}" --name-only --diff-filter=A -- "$dir"); do
  stamp="$(basename "$f" | cut -c1-14)"
  if [[ -n "$latest" && "$stamp" < "$latest" ]] || [[ "$stamp" == "$latest" ]]; then
    echo "✋ $f is dated before or at the latest migration ($latest). Use: date -u +%Y%m%d%H%M%S"; failed=1
  fi
done

[[ $failed == 0 ]] && echo "Migrations OK."
exit $failed
