---
name: github-manager
description: Automates git operations, repository interactions, and formats GitHub Issues and Pull Requests for the My AI Lounge project.
---

# 🐙 GitHub Manager

## Description
Acts as the version control assistant. This skill streamlines standard git operations (status, commit, push) and ensures all GitHub Issues and Pull Requests are formatted cleanly, descriptively, and linked properly according to professional development standards.

## When to Use This Skill
* When you are ready to stage and commit new code or documentation.
* When you need to create a new GitHub Issue to track a bug or feature request.
* When you are opening a Pull Request and need a detailed, stakeholder-friendly summary of your changes.

## Instructions
1. **Analyze the Request:** Determine if the user is trying to execute a local git command, write a commit message, open an Issue, or draft a Pull Request.
2. **Execute Based on Task:**
    * **For Commits:** Review the `git diff` or changed files and generate a concise, descriptive commit message (e.g., `feat: reorganize Kriasoft folder structure` or `fix: resolve voice channel memory leak`).
    * **For Issues:** Draft a clear Issue ticket that includes a Title, Description, Steps to Reproduce (if it's a bug), and Expected Behavior. 
    * **For Pull Requests:** Draft a comprehensive PR description. Summarize the "Why" and "What" of the changes. If the PR closes an existing Issue, include the phrase `Closes #[Issue Number]` so GitHub links them automatically.
3. **Validate:** Always ask the user to confirm the commit message, Issue draft, or PR description before finalizing the execution. 

## Example Trigger
"I just finished reorganizing the file architecture and adding the new Agent Skills. Use your GitHub Manager skill to review the changes, draft a descriptive commit message, and write up a Pull Request summary I can submit for review."