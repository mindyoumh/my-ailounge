# 🧜‍♀️ Mermaid Architect

## Description
Translates raw project notes, folder structures, and system requirements into clean, stakeholder-friendly Mermaid diagrams. Designed specifically to visualize AI Factory frameworks, system architectures, and task flows to secure granular requirements from non-technical team members.

## Instructions
1. **Analyze the Input:** Review the provided raw text, folder structures, or system requirements from the user.
2. **Determine Diagram Type:**
    * Use a `graph TD` (flowchart) for file architecture, repository structures, and task overviews.
    * Use a `sequenceDiagram` for illustrating AI agent tool execution flows and system processes.
3. **Draft the Code:** Generate the strict Mermaid syntax. Ensure all nodes are clearly labeled with plain English. Keep the architecture logical and avoid overly deep nesting to prioritize scannability.
4. **Format the Output:** Wrap the generated Mermaid code in a standard markdown code block using the `mermaid` tag. 
5. **Route the File:** Automatically prepare the output to be saved directly into the `/diagrams` directory of the repository, and draft a brief summary of the chart that can be added to the main `README.md` (the steer file).

## Example Trigger
"Draft a system architecture flowchart for the new OpenCode integration, save it to the diagrams folder, and write a summary for the steer file."