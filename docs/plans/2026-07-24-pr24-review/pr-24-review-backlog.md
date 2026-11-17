# PR #24 Review — Deferred Findings Backlog

> **Status 2026-11-18:** open items only. Re-checked against `main`. Resolved or moot since the review and removed from this list: M1 (no API auth — `proxy.ts` now requires a Supabase session on every route except `/api/stats`, and the mutating routes use `requireRole`), M3 (schema split — the SQLite `getDb()` boot SQL no longer exists; `docs/supabase-schema.sql` is the schema source), M4 (CI ingestion — the three `ingest-*.yml` workflows use Node 22 and write to Supabase), M7 (`node:sqlite` is gone, so no Node 22.5 pin is needed), L3 (the manual-feeds ingester is intentional and documented as `npm run ingest:manual`).

**PR:** [#24 — Developer Intelligence Feed Dashboard Foundation](https://github.com/mindyoumh/my-ailounge/pull/24)
**Reviewed:** 2026-07-24
**Scope:** 174 files, +23,271 / −246

Critical/High findings were fixed in-branch. The items below were Medium/Low and were deliberately not implemented in that PR. Each is a candidate for a follow-up ticket. Findings from the follow-up PR #25 review are in [`../2026-07-24-pr25-review/pr-25-review-backlog.md`](../2026-07-24-pr25-review/pr-25-review-backlog.md).

---

## MEDIUM

### M2 — No size/row limit on CSV upload
- **Issue:** `POST /api/logs` reads the whole upload via `file.text()` and inserts
  every parsed row. No max file size, no row cap (`app/api/logs/route.ts`,
  `components/logs/csv-upload.tsx`).
- **Impact:** A large CSV exhausts server memory (full file + parsed array + all rows).
  Denial-of-service / OOM.
- **Recommendation:** Enforce a byte-size cap client- and server-side, cap parsed rows,
  and batch inserts.
- **Priority:** Medium.

### M5 — No rate limiting on the GitHub fan-out
- **Issue:** `POST /api/repo-radar/refresh` → `refreshAll()` makes ~4 GitHub calls per
  active repo (`src/lib/repo-radar.ts`). `GH_ACCESS_TOKEN` is now honoured, but the
  endpoint itself has no rate limiting or throttling.
- **Impact:** The endpoint can be hammered to amplify outbound traffic and exhaust the
  GitHub rate limit.
- **Recommendation:** Batch/throttle calls and add endpoint rate limiting.
- **Priority:** Medium.

### M6 — Zero automated tests
- **Issue:** No unit/integration/E2E tests and no test script in `package.json`.
  High-logic units are untested: `src/lib/log-parser.ts`, ingester dedup, the PDF
  builder (`app/api/logs/[id]/export/pdf/route.ts`), and all API routes.
- **Impact:** Regression risk on every future change.
- **Recommendation:** Add a Vitest harness; start with `log-parser`, `markdown` trim
  logic, and the feed/logs API routes; add Playwright for the `/feed` and `/logs` flows.
- **Priority:** Medium.

---

## LOW

### L1 — PDF `Content-Disposition` filename not fully quote-safe
- `app/api/logs/[id]/export/pdf/route.ts` interpolates `filename` into the header.
  `sanitize()` strips CR/LF (no header injection) but keeps `"`, so a crafted uploaded
  filename could break out of the quoted `filename` param. Cosmetic; escape/strip `"`.

### L2 — `limit`/`offset` parsed without NaN guard
- `app/api/feed/route.ts` (and sibling routes): `parseInt("abc")` → `NaN`. Coerce with a
  fallback (`Number.isFinite` check).

### L4 — HN ingester assumes non-null title
- `src/ingesters/hacker-news/index.ts` `item.title.replace(...)` throws if the HN
  API returns a null title. Guard with `(item.title ?? "")`.

### L5 — Double sort per pattern in log-parser
- `src/lib/log-parser.ts` (`first_seen` / `last_seen`) calls `.sort()[0]` then
  `.sort().reverse()[0]` on the same array — mutates and sorts twice. Sort once, read
  both ends.
