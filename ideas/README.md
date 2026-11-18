# Ideas Folder

This folder serves as a central repository for conceptual designs, collaborative discussion points, and market research related to the project. It is used to document the "why" and "how" of future features and to track ongoing architectural decisions.

## Contents

### [Real-Time Session Helpers](session-helpers.md)
A comprehensive architecture for an AI-powered session assistance system for psychologists.

### [To Discuss](to-discuss.md)
A living checklist of high-level tasks and strategic questions that require team alignment.

### [Idea Template](IDEA_TEMPLATE.md)
A standardized template for proposing new ideas, features, or architectural changes.

## Tech We Adopted

High-value tools identified in research that are now integrated into our stack:

*   **[microsoft/markitdown](https://github.com/microsoft/markitdown)**: Used for Phase 2 data ingestion (PDF/Doc to Markdown).
*   **[anthropics/claude-code](https://github.com/anthropics/claude-code)**: Primary terminal-based agent for project development.

## Sustainability & Maintenance

To keep this folder actionable and avoid "information rot":

1.  **The "Adopted" Filter**: When a tool from research is officially added to our project, add it to the **Tech We Adopted** section above.
2.  **Delete finished ideas**: When a proposal is shipped or rejected, delete its file. Git history keeps the record.
3.  **Link Verification**: During quarterly reviews, remove entries with dead links or those that no longer align with our architectural direction.

## Workflow: Proposing a New Idea

1.  **Copy the Template**: Copy `IDEA_TEMPLATE.md` to a new file in this folder.
2.  **Rename**: Name your file using kebab-case (e.g., `enhanced-voice-recognition.md`).
3.  **Draft**: Fill in all sections of the template. Use the metadata header (Status, Priority) at the top.
4.  **Review**: Share the link in the appropriate communication channel for feedback.

## Usage

- **Planning**: Copy `IDEA_TEMPLATE.md` to start a new feature draft.
- **Syncing**: Use `to-discuss.md` for meeting agendas; move resolved items to the appropriate proposal or decision log.
