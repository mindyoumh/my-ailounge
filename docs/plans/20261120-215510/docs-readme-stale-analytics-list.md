# docs/README.md still lists removed analytics functions

## Issue

`docs/README.md` still names `getTotalItems` and `getGlobalIngestionStatus` and says there are 8 analytics functions. The dead-code cleanup removed both, so `src/lib/analytics.ts` now has 6.

## Context

Found by the peer review pass of dead-code cleanup round 1 (`/orchestra dead-code-r1`, workstream W8), 2026-11-20. `docs/` was outside that workstream's owned paths.

## Impact

Maintenance only: a reader looks for two functions that no longer exist.

## Recommendation

Remove the two names from `docs/README.md` and change the count to 6.

## Priority

Low

## Relevant files

- `docs/README.md:68`
- `src/lib/analytics.ts`

## References

- Dead-code audit 2026-11-20, `ailounge.md`
- PR for `chore/dcr1-w8` (this branch)

## Suggested acceptance criteria

- [ ] `docs/README.md` names only functions that exist in `src/lib/analytics.ts`
