# Documentation Audit

> **Status 2026-11-18:** point-in-time snapshot from June 2026, not maintained. Superseded by [`documentation-audit-v2.md`](./documentation-audit-v2.md); it still describes the SQLite-era codebase and the removed `ingest.yml` workflow. For current documentation coverage use [`docs/README.md`](../README.md).

## Features

| Name | Location | Purpose | Documentation Status |
|------|----------|---------|---------------------|
| Engineering Briefing Dashboard | `app/page.tsx` | Homepage displaying stat cards, feed sections, AI recommendations, intern tasks, breakdown charts, and automation health | **Partial** — rendered UI has no doc beyond inline comments; `docs/guides/developer-dashboard.md` covers layout specs |
| Developer Intelligence Feed | `app/feed/page.tsx` | Full-featured feed viewer with search, filtering (source/category/read/pin), pagination, CRUD operations | **Partial** — `docs/guides/developer-dashboard.md` mentions feed UI; `README.md` describes high-level architecture |
| Stack Watchlist | `app/watchlist/page.tsx` | Tracked dependency table with version fields, risk-level selectors, sorting | **Undocumented** — no dedicated doc; only route file |
| Feed Ingestion | `src/ingesters/*` | Four ingesters (Hacker News, GitHub Trending, RSS, Manual Feeds) orchestrated by `run-all.ts` | **Documented** — `README.md` has architecture diagram, data flow, and commands |
| Schema Migration | `src/db/schema.ts` | Creates `feed_items`, `kv_store`, `watchlist_items` tables with indexes | **Documented** — `README.md` describes tables; `DASHBOARD-BUILD-SPEC.md` has schema details |
| RSS Feed Parsing | `src/ingesters/rss/index.ts` + `src/ingesters/rss/feeds.ts` | XML/RSS parser with 10 configured feed URLs across 5 categories | **Undocumented** — no doc explaining the XML parsing approach, feed URL list, or category mapping |
| Analytics Queries | `src/lib/analytics.ts` | 8 server-side aggregation functions for stat cards, breakdowns, ingestion status | **Undocumented** — no doc listing available queries, their SQL, or expected output types |
| Intern Tasks | `src/config/intern-tasks.ts` | 13 rotating daily task definitions shown on dashboard | **Undocumented** — no doc describing task format, rotation logic, or how to add new tasks |
| Theme System | `components/theme-provider.tsx` + `app/globals.css` | Dark/light theme with system preference detection and localStorage persistence | **Undocumented** — no doc describing CSS variable structure, theme toggle, or dark/light color tokens |
| Dashboard Widgets (Engineering Intelligence) | `components/engineering-intelligence/*.tsx` | Four analytic widgets: LastIngestionStat, TimeWindowStat, BreakdownCard, AutomationStatus | **Undocumented** — no doc describing widget API, data dependencies, or rendering logic |

## Pages

| Route | File Location | Purpose | Documentation Status |
|-------|--------------|---------|---------------------|
| `/` (Home) | `app/page.tsx` | Engineering Briefing dashboard — stat cards, section cards, breakdown card, automation status, intern tasks, recommended tool | **Undocumented** — `docs/guides/developer-dashboard.md` has layout notes but no component documentation |
| `/feed` | `app/feed/page.tsx` | Developer Intelligence Feed — search, filter, paginate, create, edit, delete feed items | **Undocumented** — no dedicated page documentation |
| `/watchlist` | `app/watchlist/page.tsx` | Stack Watchlist — tracked dependency table with version/risk management | **Undocumented** — no dedicated page documentation |

## API Routes

| Route | File Location | Purpose | Documentation Status |
|-------|--------------|---------|---------------------|
| `GET /api/feed` | `app/api/feed/route.ts` | List feed items with optional filters (source, category, tag, search, is_read, is_pinned) and pagination | **Undocumented** — no API reference doc listing query params, response shape, or examples |
| `POST /api/feed` | `app/api/feed/route.ts` | Create a new manual feed entry | **Undocumented** — no request body schema or validation rules documented |
| `PATCH /api/feed/[id]` | `app/api/feed/[id]/route.ts` | Update feed item fields (title, summary, tags, category, score, is_read, is_pinned) | **Undocumented** — no request/response documentation |
| `DELETE /api/feed/[id]` | `app/api/feed/[id]/route.ts` | Delete a feed item by ID | **Undocumented** — no usage documentation |
| `GET /api/watchlist` | `app/api/watchlist/route.ts` | List all watchlist items | **Undocumented** — no API reference |
| `POST /api/watchlist` | `app/api/watchlist/route.ts` | Add a new watchlist item | **Undocumented** — no request schema documented |
| `PATCH /api/watchlist/[id]` | `app/api/watchlist/[id]/route.ts` | Update watchlist item fields | **Undocumented** — no field reference |
| `DELETE /api/watchlist/[id]` | `app/api/watchlist/[id]/route.ts` | Delete a watchlist item | **Undocumented** — no usage documentation |

## Database Tables

| Name | Schema Location | Purpose | Documentation Status |
|------|----------------|---------|---------------------|
| `feed_items` | `src/db/schema.ts` | Stores all ingested feed entries with metadata (source, category, score, timestamps, read/pin status) | **Partial** — `README.md` mentions table; columns and constraints in schema file only |
| `kv_store` | `src/db/schema.ts` | Key-value store for ingestion tracking metadata (last_run, status, counts, elapsed_ms) | **Undocumented** — no doc listing keys, value types, or usage patterns |
| `watchlist_items` | `src/db/schema.ts` | Tracks dependency/stack versions, risk levels, upgrade notes, vulnerabilities | **Undocumented** — no doc describing table purpose or seed data |

## Analytics Components

| Name | Location | Purpose | Documentation Status |
|------|----------|---------|---------------------|
| `getTotalItems` | `src/lib/analytics.ts` | Returns total count of all feed_items | **Undocumented** |
| `getItemsToday` | `src/lib/analytics.ts` | Returns count of items ingested today | **Undocumented** |
| `getItemsThisWeek` | `src/lib/analytics.ts` | Returns count of items ingested this week | **Undocumented** |
| `getItemsBySource` | `src/lib/analytics.ts` | Returns item counts grouped by source | **Undocumented** |
| `getItemsByCategory` | `src/lib/analytics.ts` | Returns item counts grouped by category | **Undocumented** |
| `getIngestionStatus` | `src/lib/analytics.ts` | Returns per-source ingestion status (last run, item count, status) | **Undocumented** |
| `getLastGlobalIngestion` | `src/lib/analytics.ts` | Returns the most recent global ingestion timestamp | **Undocumented** |
| `getGlobalIngestionStatus` | `src/lib/analytics.ts` | Returns the latest global ingestion status (ok/error) | **Undocumented** |

## Dashboard Widgets

| Name | Location | Purpose | Documentation Status |
|------|----------|---------|---------------------|
| `LastIngestionStat` | `components/engineering-intelligence/last-ingestion-stat.tsx` | Stat card showing time since last global ingestion | **Undocumented** |
| `TimeWindowStat` | `components/engineering-intelligence/time-window-stat.tsx` | Stat card showing items count for "today" or "this week" | **Undocumented** |
| `BreakdownCard` | `components/engineering-intelligence/breakdown-card.tsx` | Tabbed card showing item breakdown by source and category with percentage bars | **Undocumented** |
| `AutomationStatus` | `components/engineering-intelligence/automation-status.tsx` | Per-source ingestion health indicators with timestamps and error counts | **Undocumented** |

## Feed Ingestion System

### Architecture

The feed ingestion system follows a pipeline architecture:

1. **Orchestrator** (`src/ingesters/run-all.ts`) sequentially invokes 4 ingesters
2. Each ingester fetches data from an external source (API / RSS / markdown files)
3. Entries are upserted into `feed_items` via `src/lib/db.ts` (dedup by source+url unique constraint)
4. Entries are also appended to markdown feed files in `docs/feeds/` via `src/lib/markdown.ts`
5. `run-all.ts` tracks per-source status in `kv_store` (last_run, status, count, elapsed_ms)

### Data Flow

```
External Sources (HN API, RSS XML, GitHub Trending page, docs/feeds/*.md)
  → 4 Ingesters (hacker-news, github-trending, rss, manual-feeds)
  → upsertEntry() + appendToFeed()
  → SQLite (feed_items) + Markdown (docs/feeds/*.md)
  → Dashboard UI queries via analytics.ts → StatCards, BreakdownCard
```

### Main Files

| File | Purpose |
|------|---------|
| `src/ingesters/run-all.ts` | Orchestrator — sequential execution, kv_store tracking, summary output |
| `src/ingesters/hacker-news/index.ts` | Fetches HN top 20 via Algolia API |
| `src/ingesters/github-trending/index.ts` | Reads `ideas/trending.md`, parses entries |
| `src/ingesters/rss/index.ts` | RSS/Atom XML fetcher and parser (no external deps) |
| `src/ingesters/rss/feeds.ts` | 10 RSS feed URL → category mappings |
| `src/ingesters/manual-feeds/index.ts` | Reads `docs/feeds/*.{01-08}.md`, parses list items |
| `src/lib/db.ts` | `upsertEntry()` — database write with dedup |
| `src/lib/markdown.ts` | `appendToFeed()` — markdown file writer with month headers + 500-line cap |
| `src/db/schema.ts` | Table definitions and migration |
| `.github/workflows/ingest.yml` | GitHub Actions schedule (daily) + manual trigger |

### Documentation Status

**Partial.** The `README.md` describes the architecture at a high level. The `docs/feeds/feeds-format-guide.md` documents the markdown feed file format. However, there is no document describing:
- The ingester interface/contract (what each ingester must export)
- The `runTracked()` wrapper and kv_store key schema
- The XML parsing implementation details
- The dedup logic and unique constraint behavior
- Error handling patterns
- How to add a new ingester

## Stack Watchlist System

### Architecture

The watchlist manages tracked dependencies via a simple CRUD API:

1. **Schema**: `watchlist_items` table with columns for name, category, versions, risk level, vulns, migration link
2. **API**: `GET/POST /api/watchlist` and `PATCH/DELETE /api/watchlist/[id]`
3. **Client**: `app/watchlist/page.tsx` — table UI with editing, sorting, filtering
4. **Seed**: 14 default items (Next.js, React, Django, PostgreSQL, etc.) auto-seeded in `src/db/client.ts`

### Data Flow

```
Dashboard UI (watchlist page)
  → fetch /api/watchlist (GET)
  → Table component renders items
  → User edits → PATCH /api/watchlist/[id]
  → SQLite watchlist_items table
```

### Main Files

| File | Purpose |
|------|---------|
| `app/watchlist/page.tsx` | Client page — table UI, inline editing, search, sort |
| `app/api/watchlist/route.ts` | GET all items, POST new item |
| `app/api/watchlist/[id]/route.ts` | PATCH/DELETE single item |
| `src/db/schema.ts` | `watchlist_items` table definition |
| `src/db/client.ts` | Auto-seeds 14 default items on first connection |

### Documentation Status

**Undocumented.** There is no documentation for:
- The watchlist feature purpose and use cases
- The API contract (request/response shapes)
- The seed data strategy
- How to add or modify watchlist items
- The risk level system

## Missing Documentation

### Fully Undocumented Areas

| Area | Impact |
|------|--------|
| API Routes (all 8 endpoints) | Developers must read route source to understand request/response formats |
| Analytics Queries (8 functions) | No reference for what data is available or how to call queries |
| Dashboard Widgets (4 components) | No documented API or rendering contract for EI widgets |
| Stack Watchlist System | No feature documentation, API reference, or usage guide |
| Intern Tasks | No documentation of task format, rotation, or contribution process |
| Theme System | No documentation of CSS variable names, dark/light token values, or customization |
| kv_store key schema | Keys like `ingest:last_run:{source}` are only defined in `run-all.ts` source |
| RSS feed URL configuration | `feeds.ts` has 10 feeds mapped to categories but no documentation of the list or mapping |
| XML parsing implementation | Custom RSS/Atom parser (no external deps) has no technical documentation |
| Pagination system | Feed page has pagination but no documented page size, cursor, or limit behavior |

### Partially Documented Areas

| Area | What Exists | What's Missing |
|------|-------------|----------------|
| Feed Ingestion System | `README.md` high-level diagram; `feeds-format-guide.md` for markdown format | Ingester interface contract, error handling, kv_store schema, add-new-ingester guide |
| Database Schema | Table names in `README.md`; full DDL in `schema.ts` | Column descriptions, index purposes, foreign key relationships (if any) |
| Project Setup | `README.md` has first-time setup steps | Troubleshooting guide for common setup failures |

## Recommended Documents

### API Reference

| Suggested Filename | Suggested Location | Reason It Should Exist |
|-------------------|-------------------|----------------------|
| `api-reference.md` | `docs/api/` | All 8 API endpoints lack request/response documentation; a single reference document would enable frontend and third-party integration without reading route source code |

### Ingester Developer Guide

| Suggested Filename | Suggested Location | Reason It Should Exist |
|-------------------|-------------------|----------------------|
| `ingester-guide.md` | `docs/` | The ingester interface contract, `runTracked()` API, kv_store key schema, and steps to add a new ingester are only present in source code; a guide would enable contributors to add new data sources |

### Architecture Decision Records

| Suggested Filename | Suggested Location | Reason It Should Exist |
|-------------------|-------------------|----------------------|
| `architecture.md` | `docs/` | Current architecture documents (`diagrams/System Architecture mermaid chart.md`, `README.md`) exist but do not document decisions, trade-offs, or rationale for SQLite, `node:sqlite`, Server Components, or the ingestion pipeline design |

### Analytics Module Reference

| Suggested Filename | Suggested Location | Reason It Should Exist |
|-------------------|-------------------|----------------------|
| `analytics.md` | `docs/` | The 8 analytics query functions have no usage documentation; a reference listing input parameters, return types, and query behavior would prevent misuse and enable frontend developers to understand available data |

### Dashboard Widget API

| Suggested Filename | Suggested Location | Reason It Should Exist |
|-------------------|-------------------|----------------------|
| `dashboard-widgets.md` | `docs/` | The 4 Engineering Intelligence dashboard widgets have no documented props, data dependencies, or integration guide; a widget API doc would enable adding new widgets without reading component source |

### Database Schema Reference

| Suggested Filename | Suggested Location | Reason It Should Exist |
|-------------------|-------------------|----------------------|
| `database-schema.md` | `docs/` | Current schema is only documented in `src/db/schema.ts` DDL and inline table descriptions in `design` doc; a dedicated schema reference with column types, constraints, indexes, and example queries would accelerate development |

### Watchlist User Guide

| Suggested Filename | Suggested Location | Reason It Should Exist |
|-------------------|-------------------|----------------------|
| `watchlist-guide.md` | `docs/` | The Stack Watchlist feature has no documentation despite having a dedicated page, API, and seed data strategy; a user guide would explain purpose, usage, and how to manage dependencies |

### Theme Customization Guide

| Suggested Filename | Suggested Location | Reason It Should Exist |
|-------------------|-------------------|----------------------|
| `theme-guide.md` | `docs/` | The theme system uses CSS variables in `globals.css` with dark/light variants, but there is no documentation of token names, how to add new tokens, or how to customize colors |

### Deployment Guide

| Suggested Filename | Suggested Location | Reason It Should Exist |
|-------------------|-------------------|----------------------|
| `deployment.md` | `docs/` | There is no deployment documentation; the project has a GitHub Actions workflow (`ingest.yml`) for ingestion but no documented process for deploying the Next.js application itself (build, host, environment variables) |
