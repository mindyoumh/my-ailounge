# 🗂️ File Architect

## Description
Maintains, enforces, and organizes the project's folder structure based on simplified Kriasoft conventions. Ensures all code, documentation, and visual assets are placed in their correct directories, and keeps the "steer file" (README.md) perfectly synced with the current architecture.

## Instructions
1. **Analyze the Request:** When a user creates a new file or asks where a file belongs, evaluate the file's purpose, extension, and content.
2. **Determine the Correct Directory:** Route the file to the appropriate folder based on the My AI Lounge conventions:
    * `/docs/` for task overviews, research, and usage guides.
    * `/diagrams/` for visual assets like Mermaid charts.
    * `/src/` for source code, AI tools, and skills implementations.
    * `/ideas/` for brainstorming and future feature requests.
3. **Enforce Structure:** If a user attempts to save a file in the root directory (other than config files or the README), gently correct them and suggest the proper folder path.
4. **Update the Steer File:** Whenever a new folder is created or a major structural change occurs, automatically draft an update for the `README.md` "Project Structure" section to reflect the new architecture.

## Example Trigger
"I just wrote a new usage guide for our Discord bot. Where should I save this, and can you update the steer file to include it?"