# Mind You AI Council and AI Factory

This repository functions as the **Mind You AI Council and AI Factory**, an advanced, AI-powered internal ecosystem engineered to elevate organizational productivity by a factor of 100x. It achieves this by serving as a central hub for strategic AI-driven management and operational execution, systematically reducing manual engineering overhead and fostering unparalleled efficiency across all technical domains.

The agents within this repository are instrumental in:
- Communication triage
- Delivery and Jira management
- Infrastructure and cost hygiene
- Knowledge management
- Structured technical debate

---

## Tooling & Model Usage

This repository is actively used with **Gemini CLI** and **opencode CLI**. The guidance below reflects current team practice and constraints.

### Gemini CLI

- Gemini CLI is used primarily for **management, planning, summaries, and coordination tasks**.
- Each Gemini account has **independent rate limits and capacity**.
- To fully utilize Gemini at scale, developers are expected to:
  - Coordinate with teammates
  - Leverage **partner accounts** when appropriate
  - Be aware of per‑account limits during heavy usage periods
- Gemini’s **auto model selection** is sufficient in most cases and is the preferred mode.
  - The system can decide when to switch models without manual intervention.

### opencode CLI

- opencode is used for **structured agent execution and coding workflows**.
- Model switching in opencode must be **manual and deliberate**.
- Developers are expected to:
  - Choose models explicitly based on the task
  - Understand the **capacity, strengths, and limits** of each model
  - Acknowledge model selection when working on **essential goals or objectives**

### Model Strategy by Role

- **Management & Coordination** → Gemini
- **Coding, Refactoring, Reviews** → Other specialized models (e.g., Anthropic, OpenAI)

This separation is intentional and helps optimize for:
- Cost
- Reliability
- Cognitive clarity


## 💸 Model Pricing & Market Analysis
- [AI Coding Model Analysis](./pricing.md) - For a detailed market analysis of the models listed below, including in-depth developer reviews, pricing breakdowns, and benchmark data, please refer to this document. It provides the foundational research that informs our model strategy.


## Best Model Per Role

- [Best AI Model per role](./AIModelRole.md) - Detailed mapping of specific AI models to engineering and management roles, including performance rankings and strategic use cases, please refer to this document.

---

**Forward view:**  
Serious teams run a router:  
* Use the mini-model for volume tasks  
* Use `o3` for judgment calls  
* Use omni (*omni-models*) only when humans are involved  
(*Roles: intern, professor, presenter*)

---

## Philosophy

- Knowledge before automation
- Read‑only before action
- Human‑in‑the‑loop by default
- Python‑first execution

---

## Repository Structure

```text
agents/          # Individual agent definitions
tools/           # Shared Python tool integrations
```

---

## Getting Started

1. Read `AGENTS.md`
2. Explore existing agents in `agents/`
3. Use the new‑agent scaffold to create your own

---

## Non‑Technical Management Documentation

For stakeholders and non‑technical management, additional documentation is available here:

- https://docs.google.com/document/d/16lDOCrXu6rwe9LrreVaaeqMFOpC70GTjccrezGsKt6s/edit?tab=t.0

---

## AI Prompt References

The following spreadsheet contains curated AI prompt references used across agents and workflows:

- https://docs.google.com/spreadsheets/d/1lk6JNKtl3D4bx9b5z_kJ5J8UqMYj0WKFdQ2yE7R87kg/edit?gid=0#gid=0

---

## Non‑Goals

- Replacing human judgment
- Silent or destructive automation
- General application framework

---

# 2026 Targets

## Engineering Targets
- Reduce repetitive Jira/Slack overhead

## Agent & Tooling Targets

- Prompt library with clear categories
- At least 3 reusable Python tools
- Tech Lead assistant
- Scrum master - organizes the jira tickets
- App Tester
- Main Website Tester
- Portal Website Tester
- Analytics Website Tester

## General Improvements
- Faster architectural reviews
- Better consistency in decisions
- Fewer ad‑hoc decisions
- Better documentation
- Less context switching

## Quality Targets
- Improve overall code quality and reliability

## Ownership

This repo is owned by the engineering team and evolves continuously.
