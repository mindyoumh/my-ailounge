# Documentation Roadmap

> **Status 2026-11-18:** point-in-time snapshot from June 2026, not maintained. Most of the 12 proposed standalone docs were never written; the per-directory READMEs linked from the docs hub cover that ground instead. For current documentation coverage use [`docs/README.md`](../README.md).

Prioritized for onboarding a new intern who has never seen the project.

---

## High Priority

These documents are prerequisites for a new developer to set up, understand, and contribute to the project on day one.

### 1. Architecture Overview

| Field | Value |
|-------|-------|
| Filename | `architecture.md` |
| Location | `docs/` |
| Purpose | Document system architecture, design decisions, and trade-offs. Cover: Next.js App Router layout, SQLite + `node:sqlite` rationale, Server Component vs Client Component boundaries, ingestion pipeline, markdown feed file strategy, GitHub Actions schedule. Include a clear diagram of request/data flow from ingestion through DB to dashboard render. |
| Estimated size | Medium |
| Dependencies | None (source of truth is codebase) |

**Onboarding value:** Without understanding the architecture, a new intern has no mental model of how data flows or where to make changes.

### 2. Database Schema Reference

| Field | Value |
|-------|-------|
| Filename | `database-schema.md` |
| Location | `docs/` |
| Purpose | Document all 3 tables (`feed_items`, `kv_store`, `watchlist_items`) with: column types, constraints, indexes, unique rules, foreign key relationships (if any), seed data strategy, and example queries. |
| Estimated size | Small |
| Dependencies | None (schema is self-contained in `src/db/schema.ts`) |

**Onboarding value:** The intern needs to understand the data model before writing queries or designing features.

### 3. API Reference

| Filename | Location | Purpose | Estimated size | Dependencies |
|----------|----------|---------|---------------|--------------|
| `api-reference.md` | `docs/api/` | Document all 8 API endpoints with: route, method, query parameters, request body schema (per-field: type, required, default, constraints), response shape, status codes, error responses, and usage examples. | Medium | Database Schema Reference |

**Onboarding value:** The intern cannot build frontend features without knowing what data the API returns or how to call it.

### 4. Ingester Developer Guide

| Filename | Location | Purpose | Estimated size | Dependencies |
|----------|----------|---------|---------------|--------------|
| `ingester-guide.md` | `docs/` | Document the ingester contract (what each ingester must export), the `runTracked()` wrapper API, kv_store key schema (`ingest:last_run:{source}`, `ingest:status:{source}`, etc.), dedup logic via `upsertEntry()`, markdown feed file append behavior, and step-by-step instructions to add a new ingester. | Medium | Database Schema Reference |

**Onboarding value:** Adding new data sources is a common first task for new contributors. Without a guide, they must reverse-engineer `run-all.ts` and all 4 ingesters.

### 5. Feed Ingestion — End-to-End Trace

| Filename | Location | Purpose | Estimated size | Dependencies |
|----------|----------|---------|---------------|--------------|
| `feed-lifecycle.md` | `docs/` | Walk through a single item's journey: ingester fetches → `upsertEntry()` — dedup → SQLite insert + markdown append → analytics query → dashboard render. Include concrete example with real data. | Small | Architecture Overview, Database Schema Reference |

**Onboarding value:** Connecting the dots between ingestion and display is the most common point of confusion for new developers.

---

## Medium Priority

These documents unlock independent contribution and reduce tribal knowledge overhead.

### 6. Analytics Module Reference

| Filename | Location | Purpose | Estimated size | Dependencies |
|----------|----------|---------|---------------|--------------|
| `analytics.md` | `docs/` | Document all 8 analytics functions with: input parameters, SQL query (or explanation), return type/interface, expected data shape, performance notes, and example usage in a Server Component. | Small | Database Schema Reference |

**Dependency value:** Frontend developers need to know what data is available without reading `analytics.ts` SQL directly.

### 7. Dashboard Widget API

| Filename | Location | Purpose | Estimated size | Dependencies |
|----------|----------|---------|---------------|--------------|
| `dashboard-widgets.md` | `docs/` | Document the 4 Engineering Intelligence widgets with: component props interface, data source (which analytics function), rendering behavior (loading, empty, error states), styling pattern (StatCard approach), and integration guide for adding a new widget. | Small | Analytics Module Reference |

**Dependency value:** Adding dashboard widgets is a common task. A documented API removes guesswork.

### 8. Watchlist User Guide

| Filename | Location | Purpose | Estimated size | Dependencies |
|----------|----------|---------|---------------|--------------|
| `watchlist-guide.md` | `docs/` | Document the Stack Watchlist feature: purpose (tracking dependency versions and risk), page layout, API contract, seed data (14 default items), risk level system, editing workflow, and how to add/modify items. | Small | API Reference |

**Dependency value:** The watchlist is a standalone feature with no documentation despite having a dedicated page and API.

### 9. Deployment Guide

| Filename | Location | Purpose | Estimated size | Dependencies |
|----------|----------|---------|---------------|--------------|
| `deployment.md` | `docs/` | Document how to build, deploy, and host the application. Cover: build command, environment variables, SQLite file persistence in production, GitHub Actions ingestion pipeline, hosting options, and rollback procedure. | Medium | Architecture Overview |

**Dependency value:** Without this, the intern cannot ship their changes to production.

### 10. Theme Customization Guide

| Filename | Location | Purpose | Estimated size | Dependencies |
|----------|----------|---------|---------------|--------------|
| `theme-guide.md` | `docs/` | Document the theme system: CSS variable names and their purpose, light/dark token values, how to add new theme tokens, how components consume theme variables, and the `ThemeProvider` toggle mechanism. | Small | None |

**Dependency value:** Theme changes are frequent for UI work. Without documentation, developers must read `globals.css` and `theme-provider.tsx` to understand the system.

---

## Low Priority

These documents improve maintainability but are not blocking for new contributors.

### 11. Intern Tasks Developer Reference

| Filename | Location | Purpose | Estimated size | Dependencies |
|----------|----------|---------|---------------|--------------|
| `intern-tasks.md` | `docs/` | Document the intern tasks system: task interface/type, rotation logic (`Math.floor(Date.now() / 86400000)`), difficulty levels, how to add/modify tasks in `src/config/intern-tasks.ts`. | Small | None |

**Dependency value:** Low — the task system is simple and self-explanatory from the source file.

### 12. Onboarding Guide Consolidation

| Filename | Location | Purpose | Estimated size | Dependencies |
|----------|----------|---------|---------------|--------------|
| `onboarding.md` | `docs/getting-started/` | Consolidate scattered onboarding info from `README.md`, `docs/getting-started/INSTRUCTIONS.md`, and `docs/warp.md` into a single sequential guide. Include: required tools, clone steps, environment setup, DB migration, ingestion test, dev server launch, first code change workflow. | Medium | All High Priority documents |

**Dependency value:** This is the capstone — after all high-priority docs exist, a single onboarding page ties them together. Until then, the `README.md` already covers basic setup steps.

---

## Implementation Order

```
Phase 1 (High — ship first):
├── 1. architecture.md
├── 2. database-schema.md
├── 3. api-reference.md
├── 4. ingester-guide.md
└── 5. feed-lifecycle.md

Phase 2 (Medium — unblock independent work):
├── 6. analytics.md
├── 7. dashboard-widgets.md
├── 8. watchlist-guide.md
├── 9. deployment.md
└── 10. theme-guide.md

Phase 3 (Low — nice to have):
├── 11. intern-tasks.md
└── 12. onboarding.md (requires all Phase 1 docs first)
```

Each phase is ordered by onboarding value within the phase. Documents in a phase have no strict ordering dependency on each other (except as noted in the Dependencies column).
