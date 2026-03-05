# Oh-My-OpenCode Agent Model Guide

This document provides an in-depth overview of recommended agent "roles," their primary default models, and alternative options tailored for different use cases. It serves as a resource for selecting the ideal AI model to optimize performance and efficiency in your workflows.

---

## 1. **Sisyphus (The Orchestrator)**

- **Role**: Task decomposition, aggressive parallel planning, and reasoning loops.
- **Current Model**: `anthropic/claude-opus-4-5`
- **Alternative Models**:
  - **OpenAI o3-high (Reasoning)**: Excels in pure logic and planning, ideal for complex dependency graphs.
  - **DeepSeek V3.2 Speciale**: Open-weight model offering agentic reasoning comparable to Gemini 3 Pro, at a more economical rate.
  - **Moonshot Kimi-K2 Thinking**: Specializes in long-horizon "Chain of Thought (CoT)" reasoning and maintaining agent focus.

---

## 2. **Oracle (The Architect)**

- **Role**: Code review, deep logic development, and architectural strategy.
- **Current Model**: `openai/gpt-5.2`
- **Alternative Models**:
  - **Claude Opus 4.5**: Exceptional at analyzing large diffs, and identifying subtle issues in extensive pull requests.
  - **Gemini 3 Pro**: Offers unparalleled architecture-level reasoning facilitated by its 2M+ token context window for cross-module integration.
  - **Llama 4 405B Instruct**: A privacy-forward local model optimized for internal and secure use.

---

## 3. **Librarian (The Researcher)**

- **Role**: Multi-repo analysis, document lookup, evidence-based answers.
- **Current Model**: `anthropic/claude-sonnet-4-5`
- **Alternative Models**:
  - **Gemini 3 Flash**: Cost-effective with a significant context window for processing extensive documentation.
  - **Cohere Command R7 Plus**: Optimized for Retrieval-Augmented Generation (RAG), minimizing hallucinations during citation-heavy workflows.
  - **Perplexity Sonar Huge Online**: Features real-time web access to support live research on dynamic platforms (e.g., GitHub issues).

---

## 4. **Explore (The Scout)**

- **Role**: Rapid file traversal, pattern matching, and low-latency search.
- **Current Model**: `opencode/grok-code`
- **Alternative Models**:
  - **Llama 4 Scout**: Ultra-fast specialized model designed for efficient pattern-matching and intelligence.
  - **Claude Haiku 4.5**: Offers superior speed and understanding, particularly effective in complex languages like Rust and C++.
  - **Mistral Ministral-8B-Code**: A lightweight, locally deployable model offering optimized low-latency exploration.

---

## 5. **Frontend-UI-UX-Engineer (The Designer)**

- **Role**: Visual interface generation, emphasis on React/Tailwind expertise, and aesthetic judgment.
- **Current Model**: `google/gemini-3-pro-high`
- **Alternative Models**:
  - **Claude Sonnet 4.5**: Excels at CSS and UI layout tasks with advanced aesthetic reasoning.
  - **OpenAI GPT-5.2 Vision**: Specializes in converting wireframes and visuals into pixel-perfect code.
  - **Blackbox Flux Coder V2**: Focused on frontend frameworks such as Next.js and Vue.js, with knowledge of modern API practices.

---

## 6. **Document-Writer (The Wordsmith)**

- **Role**: Technical documentation, release notes, and README creation.
- **Current Model**: `google/gemini-3-flash`
- **Alternative Models**:
  - **Claude Opus 4 (Legacy)**: Favorable for documentation with a warmer, less robotic tone.
  - **Qwen 3 Creative**: Recognized for creative writing and developer relations-style prose.
  - **OpenAI GPT-4.5 Pro Creative**: Specializes in creating branded, witty, and professional documentation.

---

## 7. **Multimodal-Looker (The Visionary)**

- **Role**: Analyze complex diagrams, PDFs, and architecture flowcharts.
- **Current Model**: `google/gemini-3-flash`
- **Alternative Models**:
  - **OpenAI GPT-5 Omni**: Best for handling multimodal tasks such as combining audio/video/text inputs to resolve intricate problems.
  - **Qwen 2.5 VL**: A technical powerhouse for OCR and diagram analysis.
  - **XAI Grok Vision Beta**: Designed to deal with dense information such as server logs, screenshots, and system dashboards.

---

## Summary Table: The 2025 Agent Mix

| **Agent Role**       | **Primary Model**       | **High-IQ Alternative**        | **Speed/Cost Alternative**        |
|-----------------------|-------------------------|---------------------------------|------------------------------------|
| **Sisyphus**         | Claude Opus 4.5         | OpenAI o3 (Reasoning)          | DeepSeek V3.2 Speciale            |
| **Oracle**           | GPT-5.2                 | Gemini 3 Pro (Contextual Reasoning) | Llama 4 405B (Privacy-Conscious)   |
| **Librarian**        | Claude Sonnet 4.5       | Gemini 3 Flash (Massive Context)| Command R7 Plus (RAG Optimization) |
| **Explore**          | Grok Code               | Claude Haiku 4.5               | Llama 4 Scout                     |
| **Frontend Designer**| Gemini 3 Pro            | Claude Sonnet 4.5              | GPT-5.2 Vision                    |
| **Document Writer**  | Gemini 3 Flash          | Claude Opus 4 (Legacy)         | Qwen 3 Creative                   |
| **Multimodal Analyst**| Gemini 3 Flash         | GPT-5 Omni                     | Qwen 2.5 VL                       |

This document provides a complete framework for understanding and choosing the best AI coding and research models based on specific roles and tasks. It emphasizes balance between performance, cost, and specialized functionalities.