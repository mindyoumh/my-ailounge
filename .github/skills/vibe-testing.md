---
name: vibe-testing
description: Pressure-tests spec documents, feature requirements, and task overviews with LLM reasoning before writing code.
---

# 🕵️‍♂️ Vibe Testing

## Description
Acts as the ultimate QA for ideas and requirements. It analyzes raw project specs, "steer files", or stakeholder requests to identify logical gaps, missing edge cases, and potential UX friction points early in the development cycle.

## When to Use This Skill
* When receiving new feature requirements from stakeholders.
* Before committing to a complex task or starting a major coding session.
* When reviewing drafts in the `/docs/` folder to ensure completeness.

## Instructions
1. **Consume the Specs:** Thoroughly read the provided project requirements, task descriptions, or architectural plans.
2. **Stress-Test the Logic:** Actively look for:
    * **Edge Cases:** What happens if the system goes offline? What if the user inputs unexpected data? (e.g., What happens to the Discord bot if the voice channel is forcefully deleted?)
    * **Contradictions:** Do any of these requirements conflict with the established "My AI Lounge" AI Factory framework?
    * **Technical Feasibility:** Are there any glaring technical roadblocks based on current resources?
3. **Formulate Clarifying Questions:** Draft 3 to 5 highly specific, granular questions aimed at non-technical stakeholders to clear up any ambiguities. 
4. **Generate the Vibe Report:** Output a clean summary detailing the overall "health" of the specs, categorized by Risk Level (Low, Medium, High), along with your list of questions and recommended next steps. Save a copy of this report to the `/docs/` directory.

## Example Trigger
"Cath just gave us the requirements for the new waterproofing solution ad script and video processing pipeline. Run a vibe test on this spec and generate a Vibe Report highlighting any missing edge cases we need to ask her about before we start."