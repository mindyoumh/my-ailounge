# Research Opportunities and Resources

This document serves as a repository of insights, tools, articles, and best practices designed to inform and enhance research, development, and deployment in the realm of AI and programming.

---

## 🚦 Priority Lane

Immediate research focus:

- Review the AI [landscape](https://tracxn.com/d/companies/zhipu/__vs60BhIzHeRwBtLTuoj841aSKyol6J8LYhHaTVGDSrU#about-the-company). This provides an overview of promising companies and their recent achievements in AI development.

---

## 🛠️ AI Coding Agents and IDE Tools

### **Recommended Tools**

Here is a selection of AI-powered coding agents and IDE tools to streamline your development workflows:

- **[OpenCode](https://opencode.ai/)**: Open-source AI coding agent.
- **[Google Gemini CLI](https://geminicli.com/)**: Offers a free tier and daily consumables, making it highly accessible for exploration and development.
- **[Claude Code](https://claude.com/product/claude-code)**: Debug, develop, and deploy directly from your IDE, terminal, or the web. Known for seamless integration and ease of use.
- **[Cursor](https://cursor.com/download)**: This AI-powered code editor understands your project context and helps you accelerate development through natural language commands.
- **[Zed](https://zed.dev/)**: A next-gen collaborative IDE for developers.
- **[Lovable](https://lovable.dev/)**: Particularly effective for generating full landing pages, basic HTML content, and simple web components.

### **Steroids for Development**

#### OpenCode

- [Oh-My-OpenCode Plugin](https://github.com/code-yeongyu/oh-my-opencode): Enhance your development experience with extensive plugins. Note: Avoid setting up authentication providers until updated beyond 12-2025.
- Full list of OpenCode [plugins](https://opencode.ai/docs/ecosystem#plugins).
- Explore the model [alternatives](./oh-my-opencode-models.md).

#### Cursor

- [Cursor Commands](https://github.com/hamzafer/cursor-commands): Access prebuilt commands to improve productivity using Cursor.
- [Awesome Cursor](https://github.com/hao-ji-xing/awesome-cursor): A curated resource list for Cursor-related tools and integrations.
- [Cursor Directory](https://cursor.directory): A growing repository of Cursor-focused resources.

### **Vibe Coding**

- **[Vibe Tools](https://github.com/eastlondoner/vibe-tools)**: A unique development approach to code with AI in a dynamic and relaxed manner.

### **Limitations to Consider**

- Review [Claude Code Usage Guidelines](https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan#h_50f6dec29d).

---

## 📚 Articles & Research Papers

### **Model Comparisons and Best Practices**

- [GitHub Copilot Model Comparison](https://docs.github.com/en/copilot/reference/ai-models/model-comparison): In-depth look at varying models for different tasks.
- [GitHub Copilot Premium Usage](https://docs.github.com/en/copilot/concepts/billing/copilot-requests): Understand usage limits and billing structures.

### **Context Engineering in AI**

Key insights into effective context handling for AI tasks:

- [Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).
- Studies on context rot:
  - [Overview on Context-Rot Challenges](https://www.understandingai.org/p/context-rot-the-emerging-challenge).
  - [Context Engineering Benchmarks](https://www.letta.com/blog/context-bench).
  - [Research Articles](https://arxiv.org/abs/2402.14848), [Token Context Impacts](https://arxiv.org/abs/2404.02060), [Complex Token Analysis](https://arxiv.org/abs/2502.05167).

### **Benchmarks and Leaderboards**

Discover the best-performing AI models globally:

- [SuperClue AI Leaderboard](https://www.superclueai.com/generalpage) (China).
- [Nejumi Dashboard](https://nejumi.ai/) (Japan): Analyze response consistency.
- [LLM Arena Benchmark](https://lmarena.ai/leaderboard): Global leaderboard for various AI systems.
- [Berkeley Function-Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard.html): Compare models for function-calling scenarios.
- Additional resources: [Taiwan](https://huggingface.co/datasets/syntaxsynth/tmmluplus), [SEA LLMs](https://huggingface.co/spaces/SeaLLMs/LLM_Leaderboard_for_SEA), and [FlagEval](https://flageval.baai.ac.cn/#/leaderboard).

---

## 🛡️ Security-Focused AI Agents

- **[Strix](https://github.com/usestrix/strix)**: Open-source penetration testing agents with focused security enhancements.

---

## 🗂 MCP Servers

- [Gemini MCP List](https://geminicli.com/extensions/#_top) and [Gemini Tool Installation Docs](https://geminicli.com/docs/tools/mcp-server/).
- Resources on [Awesome MCP Servers](https://github.com/wong2/awesome-mcp-servers).
- **[Context7](https://context7.com)**: A practical Model Context Protocol (MCP) solution.

---

## Pricing Insights

- **[Pricing Models and Cost Analysis](./pricing.md)**: Details LLM and cloud services costs (AWS, token usage, and optimization strategies).
- [Private Doc](https://docs.google.com/spreadsheets/d/1bkSfaSsEbTcl1Fv0uqGk2RMJW9jJMt-NOapV7cP5u44/edit?gid=0#gid=0): A proprietary cost analysis resource.

---

## Recommendations & Best Practices

These are practical strategies for maximizing efficiency and minimizing costs when using AI agents:

### **Token-Saving Development Practices**

1. **Adopt a "Read-Only" Query Rule**:
   - Avoid scanning the entire repository for every query; selectively load critical files to reduce input tokens.

2. **Prefer TOON (Token-Oriented Object Notation) over JSON**:
   - Switch to YAML or TOON formats where possible to conserve tokens during structured data exchanges.

3. **Lint Code Before AI Querying**:
   - Ensure code is cleaned and formatted using a linter (e.g., ESLint, Prettier) before querying AI for error-free logic.

4. **Tiered Model Routing**:
   - Use lightweight models for initial problem searches and switch to advanced models only for complex debugging.
     - Example: Use Haiku 3.5 for fast searches and GPT-4o or Claude Sonnet for rigorous logic tasks.

### **Subscription Choices**

- **GitHub Copilot Pro+:** Ideal for an all-in-one solution.
- **Claude Code Pro:** Suitable for comprehensive terminal-based refactoring or independent deployment environments.

### **BYOK Tools (Pay-Per-Token)**

- Implement strict context controls to limit token usage.
- Request context-specific outputs (e.g., diffs) to save token costs.

---

## 💬 Research Discussions

### **Interesting Read**:

- [Excalidraw](https://excalidraw.com/): Collaborative real-time diagramming for AI logic explanations.
- Why developers prefer [Claude Code over Warp](https://levelup.gitconnected.com/why-i-switched-from-claude-code-to-warp-920ab7fcef8b).