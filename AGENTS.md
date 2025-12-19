# AGENTS.md

- Be deterministic when possible
- Declare intent before acting
- Explain reasoning briefly
- Do not assume and always use facts.
- No silent destructive actions
- must surface uncertainty
- Escalate risky actions

---

## Core Principles

- Python is the primary execution language

---

## Required Agent Structure

```text
agents/
└── agent_name/
    ├── TODO.md
    ├── AGENTS.md
    └── README.md
```

---

## Permissions & Safety

Prohibited by default:
- Deleting data
- Modifying production infrastructure
- External communications

---

## Log

- Intent
- Inputs
- Actions taken
- Failures

---

## Knowledge Management

- Markdown files are authoritative
- Conflicts, drift, or redundancy must be flagged

---

# Jira Integration / Jira MCP

- if jira is needed, reference [agents/jira/AGENTS.md](agents/jira/AGENTS.md)
