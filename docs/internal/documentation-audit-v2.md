# Documentation Audit v2

> **Status 2026-11-18:** point-in-time snapshot from June 2026, not maintained. Paths and counts predate the Supabase migration and the three scheduled workflows. For current documentation coverage use [`docs/README.md`](../README.md).

Re-evaluation of all documentation status after creation of 5 new README files:

| New File | Location |
|----------|----------|
| `src/README.md` | Pipeline overview, directory relationships, quickstart commands, module status |
| `src/config/README.md` | InternTasks interface, rotation logic, task list, how-to-add |
| `src/db/README.md` | DB driver, client singleton, all 3 tables (columns, indexes, constraints, seed data), kv_store key patterns, migration |
| `src/ingesters/README.md` | Architecture diagram, all 4 ingesters (format, source, commands), RSS feed URL list (12 feeds, 5 categories), HN Algolia details, orchestrator + kv_store keys, how to add RSS feeds |
| `src/lib/README.md` | `utils.ts` (cn), `db.ts` (IngestEntry + upsertEntry), `markdown.ts` (appendToFeed + 500-line trim), `analytics.ts` (all 8 functions with SQL and return types) |

---

## 1. Status Change: v1 → v2

### Features

| Name | v1 Status | v2 Status | Reason for Change |
|------|-----------|-----------|-------------------|
| Engineering Briefing Dashboard | Partial | **Partial** | No change |
| Developer Intelligence Feed | Partial | **Partial** | No change |
| Stack Watchlist | Undocumented | **Partial** | `src/db/README.md` now documents `watchlist_items` table fully; feature page + API still undocumented |
| Feed Ingestion | Documented | **Documented** | Now reinforced by `src/ingesters/README.md` + `src/lib/README.md` |
| Schema Migration | Documented | **Documented** | Now reinforced by `src/db/README.md` (full column docs, indexes, seed data) |
| RSS Feed Parsing | Undocumented | **Documented** | `src/ingesters/README.md` covers all 12 feed URLs, 5 categories, regex parser approach, date filter |
| Analytics Queries | Undocumented | **Documented** | `src/lib/README.md` covers all 8 functions with SQL and return types |
| Intern Tasks | Undocumented | **Documented** | `src/config/README.md` covers interface, rotation, 13 tasks, how to add |
| Theme System | Undocumented | **Undocumented** | No change |
| Dashboard Widgets | Undocumented | **Undocumented** | No change |

### Pages

| Route | v1 Status | v2 Status | Reason |
|-------|-----------|-----------|--------|
| `/` (Home) | Undocumented | **Undocumented** | No change |
| `/feed` | Undocumented | **Undocumented** | No change |
| `/watchlist` | Undocumented | **Undocumented** | No change |

### API Routes (all 8)

| Route | v1 Status | v2 Status | Reason |
|-------|-----------|-----------|--------|
| All 8 endpoints | Undocumented | **Undocumented** | No new doc covers API routes |

### Database Tables

| Name | v1 Status | v2 Status | Reason |
|------|-----------|-----------|--------|
| `feed_items` | Partial | **Documented** | Full column docs in `src/db/README.md` |
| `kv_store` | Undocumented | **Documented** | Key patterns documented in `src/db/README.md` + `src/ingesters/README.md` |
| `watchlist_items` | Undocumented | **Documented** | Full column docs + seed data in `src/db/README.md` |

### Analytics Components (all 8)

| Name | v1 Status | v2 Status | Reason |
|------|-----------|-----------|--------|
| All 8 functions | Undocumented | **Documented** | `src/lib/README.md` covers each with SQL and return type |

### Dashboard Widgets (all 4)

| Name | v1 Status | v2 Status | Reason |
|------|-----------|-----------|--------|
| All 4 widgets | Undocumented | **Undocumented** | No new doc covers `components/engineering-intelligence/` |

---

## 2. v1 Fully Undocumented Areas — Re-evaluated

| v1 Area | v2 Status | Covered By |
|---------|-----------|------------|
| API Routes (8 endpoints) | **Still undocumented** | — |
| Analytics Queries (8 functions) | ✅ **Now documented** | `src/lib/README.md` — analytics section with function table, SQL, return types |
| Dashboard Widgets (4 components) | **Still undocumented** | — |
| Stack Watchlist System | ⚠️ **Now partial** | `src/db/README.md` — table documented; feature page + API still undocumented |
| Intern Tasks | ✅ **Now documented** | `src/config/README.md` — interface, rotation, tasks, how to add |
| Theme System | **Still undocumented** | — |
| kv_store key schema | ✅ **Now documented** | `src/db/README.md` (kv_store section) + `src/ingesters/README.md` (orchestrator key table) |
| RSS feed URL configuration | ✅ **Now documented** | `src/ingesters/README.md` — 12 feeds, 5 categories with group descriptions |
| XML parsing implementation | ✅ **Now covered** | `src/ingesters/README.md` — "regex-based parser (no external deps)" |
| Pagination system | **Still undocumented** | — |

---

## 3. v1 Partially Documented Areas — Re-evaluated

| v1 Area | v2 Status | Change |
|---------|-----------|--------|
| Feed Ingestion System | ✅ **Now fully documented** | `src/ingesters/README.md` covers: architecture diagram, all 4 ingesters, kv_store keys, how to add RSS feeds. `src/lib/README.md` covers: IngestEntry interface, upsertEntry dedup, appendToFeed trim logic. |
| Database Schema | ✅ **Now fully documented** | `src/db/README.md` covers: all 3 tables with column types, indexes, unique constraints, seed data (14 watchlist items), kv_store key patterns, usage examples. |
| Project Setup | ⚠️ **Still partial** | No troubleshooting guide added. |

---

## 4. Remaining Gaps

### Fully Undocumented

| Gap | Location | Impact |
|-----|----------|--------|
| API Routes (all 8) | `app/api/feed/route.ts`, `app/api/feed/[id]/route.ts`, `app/api/watchlist/route.ts`, `app/api/watchlist/[id]/route.ts` | Developers must read route source to understand query params, request bodies, response shapes, and error codes |
| Dashboard Widgets (4 components) | `components/engineering-intelligence/*.tsx` | No documented props interface, data dependencies, or rendering contract for LastIngestionStat, TimeWindowStat, BreakdownCard, AutomationStatus |
| Theme System | `components/theme-provider.tsx` + `app/globals.css` | No documented CSS variable names, dark/light token values, or customization process |
| Pagination System | `app/feed/page.tsx` | No documented page size, cursor, limit, or filter behavior |
| Home Page (`/`) | `app/page.tsx` | No documented component layout, data flow, or section card structure |
| Feed Page (`/feed`) | `app/feed/page.tsx` | No documented page features, search/filter API, or CRUD workflow |
| Watchlist Page (`/watchlist`) | `app/watchlist/page.tsx` | No documented editing workflow, sorting, or risk level system |
| Deployment Process | `.github/workflows/ingest.yml`, build config | No documented build, host, persistence, or environment variable setup |
| Project Setup Troubleshooting | — | No common failure modes documented (e.g., SQLite issues, missing dependencies) |

### Partially Documented

| Gap | What Exists | What's Still Missing |
|-----|-------------|---------------------|
| Stack Watchlist | `src/db/README.md` documents `watchlist_items` table fully | Feature purpose, API contract, page editing workflow, risk level system, seed data strategy |
| Architecture Decisions | `src/README.md` has pipeline overview + directory relationships | No documented rationale for SQLite, `better-sqlite3`, Server Component boundaries, or design trade-offs |
| Feed Lifecycle (end-to-end) | Covered piecewise across `src/ingesters/README.md`, `src/lib/README.md`, `src/db/README.md` | No single doc walking a concrete item from ingestion to dashboard render |

---

## 5. Roadmap Document Re-evaluation

The 12 documents proposed in `docs/internal/documentation-roadmap.md` are re-evaluated against the new README files.

### Fully Covered — Remove from Roadmap

| Roadmap Item | Covered By | Recommended Action |
|-------------|------------|-------------------|
| **2. Database Schema Reference** | `src/db/README.md` — full column docs, indexes, constraints, keys, seed data, usage examples | **Remove** — no remaining gap |
| **6. Analytics Module Reference** | `src/lib/README.md` — all 8 functions with SQL snippets and return types | **Remove** — no remaining gap |
| **11. Intern Tasks Developer Reference** | `src/config/README.md` — interface, rotation, 13 tasks, how-to-add | **Remove** — no remaining gap |

### Scope Reduced — Keep but Shrink

| Roadmap Item | v1 Scope | Remaining Gap After New READMEs | Recommended Scope |
|-------------|----------|--------------------------------|-------------------|
| **1. Architecture Overview** | Full architecture + design decisions + pipeline | `src/README.md` covers pipeline and directory relationships. Missing: design rationale (why SQLite, why `better-sqlite3`, Server vs Client boundaries, trade-offs). | Reduce to **Architecture Decision Record** only (design rationale, not pipeline) |
| **4. Ingester Developer Guide** | Ingester contract + runTracked + kv_store + dedup + add-new-ingester | `src/ingesters/README.md` covers: architecture diagram, all 4 ingesters, kv_store keys, how to add RSS feeds. Only missing: generic ingester module contract (what each must export) + `runTracked()` wrapper API. | Reduce to **Ingester Contract Reference** (module export signature + runTracked API only) |
| **5. Feed Lifecycle Walkthrough** | End-to-end trace of one item | Covered piecewise across 3 READMEs, no single document ties it together. Still a valid gap. | **Keep as-is** (small doc) |
| **8. Watchlist User Guide** | Full watchlist docs | `src/db/README.md` now covers the table. Missing: feature purpose, API contract, page editing workflow, risk levels. | **Reduce** to page + API + workflow only (omit table schema) |

### Unchanged — Still Needed at Original Scope

| Roadmap Item | Reason Still Needed |
|-------------|-------------------|
| **3. API Reference** | No new doc covers any API route. Still fully undocumented. |
| **7. Dashboard Widget API** | No new doc covers `components/engineering-intelligence/`. Still fully undocumented. |
| **9. Deployment Guide** | No new doc covers deployment. Still fully undocumented. |
| **10. Theme Customization Guide** | No new doc covers the theme system. Still fully undocumented. |
| **12. Onboarding Guide** | No new doc consolidates onboarding. Still valid at low priority. |

---

## 6. Updated Roadmap

### High Priority

| # | Document | Location | Size | Notes |
|---|----------|----------|------|-------|
| 1 | **Architecture Decision Record** | `docs/architecture.md` | Small | Design rationale only (pipeline is now in `src/README.md`) |
| 2 | **API Reference** | `docs/api/api-reference.md` | Medium | All 8 routes — params, bodies, responses, errors |
| 3 | **Feed Lifecycle Walkthrough** | `docs/feed-lifecycle.md` | Small | Single-item trace from ingestion to render |
| 4 | **Ingester Contract Reference** | `docs/ingester-contract.md` | Small | Module export contract + `runTracked()` wrapper API only |
| 5 | **Dashboard Widget API** | `docs/dashboard-widgets.md` | Small | 4 widget props + data sources + integration guide |

### Medium Priority

| # | Document | Location | Size | Notes |
|---|----------|----------|------|-------|
| 6 | **Watchlist User Guide** | `docs/watchlist-guide.md` | Small | Page + API + workflow only (omit table — covered by `src/db/README.md`) |
| 7 | **Deployment Guide** | `docs/deployment.md` | Medium | Build, host, env vars, SQLite persistence, rollback |
| 8 | **Theme Customization Guide** | `docs/theme-guide.md` | Small | CSS variables, dark/light tokens, customization |

### Low Priority

| # | Document | Location | Size | Notes |
|---|----------|----------|------|-------|
| 9 | **Onboarding Guide Consolidation** | `docs/onboarding.md` | Medium | Tie together existing READMEs + new docs |

### Removed (Covered by New READMEs)

The following documents proposed in v1 have been made redundant by the 5 new README files and should not be created:

| Removed Item | Covered By |
|-------------|------------|
| Database Schema Reference | `src/db/README.md` |
| Analytics Module Reference | `src/lib/README.md` |
| Intern Tasks Developer Reference | `src/config/README.md` |

---

## 7. Implementation Order

```
Phase 1 (High):
├── 1. Architecture Decision Record     (small — design rationale only)
├── 2. API Reference                    (medium — 8 endpoints)
├── 3. Feed Lifecycle Walkthrough       (small — one-item trace)
├── 4. Ingester Contract Reference      (small — module contract + runTracked)
└── 5. Dashboard Widget API             (small — 4 widget props)

Phase 2 (Medium):
├── 6. Watchlist User Guide             (small — page + API + workflow)
├── 7. Deployment Guide                 (medium — build + host + persistence)
└── 8. Theme Customization Guide        (small — CSS tokens + customization)

Phase 3 (Low):
└── 9. Onboarding Guide Consolidation   (medium — ties existing docs together)
```

Total: 9 documents (down from 12), with a combined estimated size of small-to-medium.
