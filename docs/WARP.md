# Guide to Using Warp (warp.dev) with This Repository

This document provides comprehensive guidance for integrating **Warp.dev**, a modern Agentic Development Environment (ADE), into workflows and file management within this repository.

---

## About This Repository

This repository serves as a **Markdown-based agent library**, designed to support:

- **Gemini CLI**: For management and planning.
- **OpenCode CLI**: For executing structured agent actions.

### Key Repository Components

1. **Agent Governance Documents**:
   - General rules are located in `AGENTS.md`.
   - Domain-specific configurations can be found in `.opencode/agent/*.md`.

2. **Agent Directories**:
   - Agent-specific definitions, rules, and tasks live in `agents/`.

### Constraints

This repo does not include application build, lint, or test scripts at the root. The primary focus is on Markdown-based configuration and documentation.

---

## About Warp (warp.dev)

Warp is a next-gen development environment and modern terminal that supports both **command-line interactions** and **natural-language-driven workflows**. It enhances productivity through:

- **Warp AI**: Detects whether a user is typing a command or a natural language prompt to initiate advanced code generation workflows.
- **Multi-Agent Workflows**: Allows running multiple agents in parallel. Agents can automatically request feedback during execution.
- **Warp Drive**: A shared knowledge base for workflows, notebooks, and environment variables.

📃 Official documentation: [Warp Docs](https://docs.warp.dev/).

---

## Common Commands for Navigation and Setup

Below are some critical commands to help you navigate and configure this repository.

### Repo Navigation

```powershell
# List top-level structure
Get-ChildItem -Force -Name

# Inspect an agent folder
Get-ChildItem -Force -Name agents\jira
```

### Managing OpenCode CLI Dependencies

The `.opencode/` folder houses a minimal Node/Bun workspace to manage the `@opencode-ai/plugin` dependencies.

```powershell
# Install or update dependencies for OpenCode CLI plugins
Push-Location .opencode
bun install
Pop-Location
```

**Note:**
- The `.opencode/package.json` file only includes dependencies. There are no predefined `bun test` or `bun lint` scripts.

---

## High-Level Architecture

### 1) **Global Agent Governance**

- `README.md` outlines the repository purpose and the division of tools/models (e.g., Gemini CLI for management, ChatGPT/Anthropic for coding and reviews).
- `AGENTS.md` specifies cross-cutting behavioral rules, such as:
  - **Determinism** when possible.
  - Clear intent declaration.
  - Preference for read-first logic.
  - Python-first execution approach.
  - Human-in-the-loop decision-making.

**Pro Tip**: When in doubt about behavior rules, check `AGENTS.md` as the foundational guideline for integrating agents.

### 2) **Agent-Specific Modules**

Each agent integration is organized in its own directory under `agents/` and includes the following standardized files:

- `README.md`: Provides integration pointers and related links. 
- `AGENTS.md`: Detailed integration-specific governance and behavioral constraints.
- `TODO.md`: Maintains the agent’s working queue, functioning as the authoritative reference for tasks.

**Example Integration**:
- The file `agents/jira/TODO.md` serves as the Jira ticket tracking queue.

### 3) **OpenCode Agent Configuration Files**

Located in `.opencode/agent/`, these files define:

- Runtime configurations for OpenCode agents, such as model settings, temperature, and supported tools.
- Links to working files in `agents/`, specifying how task lists like `TODO.md` should be managed.

**Example**:
- The `.opencode/agent/jira-alignment.md` document outlines the rules for how the Jira agent manages `agents/jira/TODO.md` and enforces Jira project constraints.

---

## Repo-Specific Notes and Caveats

1. **Missing Folders**:
   - The `README.md` alludes to a `tools/` directory that is not currently present.
2. **Path Discrepancies**:
   - File references (e.g., `agents/jira/AGENTS.md` vs. `.opencode/agent/jira-alignment.md`) require alignment before automation setup.
3. **No Integration Testing**:
   - Repository lacks pre-configured testing tools (e.g., `package.json` or `pyproject.toml`). Focus remains on Markdown updates.

---

This document is frequently updated to reflect changes in Warp usage and OpenCode features. It is designed to be a living manual for collaborators working in this unique environment.