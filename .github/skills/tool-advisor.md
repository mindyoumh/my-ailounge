---
name: tool-advisor
description: Analyzes prompts and recommends optimal AI tools, models, and orchestration patterns for the My AI Lounge AI Factory framework.
---

# 🛠️ Tool Advisor

## Description
Acts as the strategic dispatcher for the AI Factory. When given a project prompt, feature request, or raw idea, this skill evaluates the task and recommends the most efficient combination of AI models, internal skills, and orchestration patterns to get the job done.

## When to Use This Skill
* Starting a new complex task and unsure which AI model or tool to utilize.
* Designing multi-step workflows that require passing outputs between different AI agents.
* Looking to optimize a prompt before sending it to a specialized AI model.

## Instructions
1. **Analyze the Prompt:** Review the user's task, goal, and any provided context or constraints.
2. **Consult the Arsenal:** Cross-reference the task requirements with the available resources documented in the `/docs/` folder, specifically the "Best Model for role" documentation.
3. **Draft the Strategy:** * **Recommend Models:** Suggest the specific AI persona(s) best suited for the job (e.g., Senior Developer, QA Tester, Copywriter).
    * **Recommend Tools:** Identify any specific internal Agent Skills (e.g., File Architect, Mermaid Architect) or external tools needed.
    * **Define the Orchestration Pattern:** Outline the step-by-step flow. (e.g., "Step 1: Use Vibe Testing to validate requirements. Step 2: Use Mermaid Architect to map the flow. Step 3: Assign the Senior Developer model to write the code.")
4. **Output the Recommendation:** Present the strategy in a clean, scannable format for the user to review and approve.

## Example Trigger
"I need to build a new feature for the Discord bot that tracks voice channel uptime and logs it into a database. Can you advise on the best tools, models, and workflow to tackle this?"