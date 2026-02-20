# Developer Onboarding Guide

Welcome to the Mind You AI Council and AI Factory! This guide will help you set up your development environment with the AI-powered tools our team uses daily.

## What You'll Set Up

By the end of this guide, you'll have access to:

- **GitHub Copilot** - AI pair programmer inside VS Code
- **Gemini Pro** - Google's AI for management, planning, and coordination
- **opencode CLI** - Structured agent execution for coding workflows
- **Gemini CLI** - Command-line tool for AI-assisted planning

**Estimated Time:** 2-3 hours (including approval wait times)

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [GitHub Education & Copilot Access](#2-github-education--copilot-access)
3. [Google Education & Gemini Pro Access](#3-google-education--gemini-pro-access)
4. [VS Code & GitHub Copilot Setup](#4-vs-code--github-copilot-setup)
5. [opencode CLI Setup](#5-opencode-cli-setup)
6. [Gemini CLI Setup](#6-gemini-cli-setup)
7. [Verification & Testing](#7-verification--testing)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. Prerequisites

Before you begin, make sure you have the following:

### Required Software

#### Git
Check if installed:
```bash
git --version
```

If not installed, download from: https://git-scm.com/downloads

#### Node.js & npm
Check if installed:
```bash
node --version
npm --version
```

**Required:** Node.js 16+ and npm 8+

If not installed, download from: https://nodejs.org/ (LTS version recommended)

#### Visual Studio Code
Check if installed by running `code` in your terminal.

If not installed, download from: https://code.visualstudio.com/

### Required Accounts

- **GitHub Account** - Sign up at https://github.com/signup
- **Educational Email** - You'll need a `.edu` email address OR employer email for educational benefits
- **Google Account** - You can use an existing account or create one at https://accounts.google.com/

### Verification Checklist

Run these commands to verify your prerequisites:

```bash
# Check Git
git --version

# Check Node.js
node --version

# Check npm
npm --version

# Check VS Code
code --version
```

**Expected Output Example:**
```
git version 2.40.0
v18.16.0
9.5.1
1.85.0
```

> If all commands return version numbers, you're ready to proceed!

---

## 2. GitHub Education & Copilot Access

GitHub Education provides free access to GitHub Copilot for students and educators.

### Step 1: Apply for GitHub Education Benefits

1. **Visit GitHub Education**
   - Go to: https://education.github.com/
   - Click the **"Get benefits"** or **"Join Global Campus"** button

2. **Sign in with your GitHub account**
   - Use your existing GitHub account
   - Or create one if you don't have it yet

3. **Select your role**
   - Choose **"Student"** if you're an intern/student
   - Choose **"Teacher"** if you're faculty/educator

4. **Fill out the application form**
   - **School name:** Enter your institution
   - **Email:** Use your `.edu` email address (required for verification)
   - **Graduation date:** Enter your expected graduation year
   - **How do you plan to use GitHub?** Describe your learning/work

5. **Verify your academic status**
   - GitHub may ask for proof (student ID, enrollment letter, etc.)
   - Upload a clear photo/scan of your documentation
   - Make sure your name and institution are visible

6. **Submit and wait for approval**
   - Approval usually takes **1-3 business days**
   - You'll receive an email when approved

> **Tip:** Check your spam folder for the approval email!

### Step 2: Activate GitHub Copilot

Once your GitHub Education application is approved:

1. **Go to GitHub Copilot settings**
   - Visit: https://github.com/settings/copilot

2. **Enable Copilot**
   - You should see "GitHub Copilot is included in your GitHub Education benefits"
   - Click **"Enable GitHub Copilot"**

3. **Accept the terms**
   - Review and accept the GitHub Copilot terms of service

4. **Configure preferences** (optional)
   - Enable/disable suggestions
   - Configure data sharing preferences

### Verification

To verify GitHub Copilot is activated:

1. Go to: https://github.com/settings/copilot
2. You should see: **"Your GitHub Copilot subscription is active"**

> If you see this message, you're all set! Continue to the next section.

---

## 3. Google Education & Gemini Pro Access

Google provides AI tools through their education and cloud platforms.

### Option A: Google AI Studio (Recommended for Students)

1. **Visit Google AI Studio**
   - Go to: https://aistudio.google.com/

2. **Sign in with your Google account**
   - Use your educational Google account if available
   - Or any personal Google account

3. **Access Gemini**
   - Click **"Get started"** or **"Try Gemini"**
   - Accept the terms of service

4. **Get your API key** (if needed later)
   - Click on **"Get API key"** in the left sidebar
   - Click **"Create API key"**
   - **Copy and save it securely** (you'll need this later)

> **Important:** Never share your API key or commit it to version control!

### Option B: Google Cloud Education Credits

If your institution has Google Cloud Education credits:

1. **Visit Google Cloud for Education**
   - Go to: https://cloud.google.com/edu

2. **Sign up with your educational email**
   - Follow the enrollment process
   - Redeem any educational credits provided by your institution

3. **Enable Gemini API**
   - Go to: https://console.cloud.google.com/
   - Enable "Gemini API" in your project
   - Generate API credentials

### Understanding Free Tier & Limits

**Google AI Studio Free Tier:**
- 60 requests per minute
- 1,500 requests per day
- 1 million tokens per minute

> These limits are generous for learning and individual use. If you hit limits, coordinate with your team to use partner accounts.

### Verification

To verify you have Gemini access:

1. Visit: https://aistudio.google.com/
2. Try a simple prompt in the chat interface
3. If you get a response, you're ready!

---

## 4. VS Code & GitHub Copilot Setup

Now let's set up GitHub Copilot in VS Code.

### Step 1: Install VS Code (if not already done)

Download and install from: https://code.visualstudio.com/

### Step 2: Install GitHub Copilot Extension

1. **Open VS Code**

2. **Open the Extensions view**
   - Press `Ctrl+Shift+X` (Windows/Linux)
   - Or `Cmd+Shift+X` (Mac)
   - Or click the Extensions icon in the sidebar

3. **Search for "GitHub Copilot"**
   - Type `GitHub Copilot` in the search box

4. **Install the extension**
   - Click **"Install"** on the "GitHub Copilot" extension by GitHub
   - Also install **"GitHub Copilot Chat"** for conversational AI

5. **Reload VS Code** if prompted

### Step 3: Sign In to GitHub Copilot

1. **Click the account icon** in the bottom-left corner of VS Code
   - Or look for the GitHub Copilot icon in the status bar

2. **Select "Sign in to GitHub"**
   - A browser window will open

3. **Authorize VS Code**
   - Click **"Authorize Visual-Studio-Code"**
   - You may need to confirm with your password

4. **Return to VS Code**
   - You should see "GitHub Copilot: Ready" in the status bar

### Step 4: Test GitHub Copilot

Let's verify Copilot is working:

1. **Create a new file**
   - File > New File
   - Save it as `test.js`

2. **Start typing a function**
   ```javascript
   // Function to calculate the factorial of a number
   function factorial
   ```

3. **Wait for suggestions**
   - Copilot should suggest code completions in gray text
   - Press `Tab` to accept a suggestion
   - Press `Esc` to dismiss

4. **Try Copilot Chat**
   - Press `Ctrl+Shift+I` (or `Cmd+Shift+I` on Mac)
   - Type: "Write a function to reverse a string"
   - Copilot Chat should respond with code

> If you see suggestions, Copilot is working! You can delete the test file.

### Recommended VS Code Extensions

While you're here, install these helpful extensions:

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **GitLens** - Enhanced Git features
- **Error Lens** - Inline error highlighting

---

## 5. opencode CLI Setup

opencode is our primary tool for structured agent execution and coding workflows.

### What is opencode?

opencode is a CLI tool that helps you execute complex coding tasks using AI agents. Our team uses it for:
- Code generation and refactoring
- Automated code reviews
- Multi-file editing
- Structured development workflows

> **Team Philosophy:** opencode requires manual and deliberate model selection. Choose models based on the task at hand.

### Step 1: Install opencode CLI

Open your terminal and run:

```bash
npm install -g opencode
```

**Expected output:**
```
added 1 package in 3s
```

### Step 2: Verify Installation

```bash
opencode --version
```

You should see a version number like `1.2.3`

### Step 3: Authenticate with OAuth (Simple Way)

Instead of manually managing API keys, we use OAuth plugins for easy authentication.

#### For Gemini (Recommended):

1. **Install the Gemini OAuth plugin:**
   ```bash
   npm install -g @opencode/gemini-oauth-plugin
   ```

2. **Login with OAuth:**
   ```bash
   opencode login gemini
   ```

3. **Follow the browser prompts:**
   - A browser window will open
   - Sign in with your Google account
   - Authorize opencode to access Gemini
   - Return to the terminal

4. **Verify authentication:**
   ```bash
   opencode auth status
   ```

> **Expected:** You should see "Authenticated: ✓ Gemini"

#### For Other Providers:

If you need to connect to other AI providers (Anthropic, OpenAI, etc.), install their respective OAuth plugins:

```bash
# Example for Anthropic
npm install -g @opencode/anthropic-oauth-plugin
opencode login anthropic

# Example for OpenAI
npm install -g @opencode/openai-oauth-plugin
opencode login openai
```

### Step 4: Configure Model Selection

opencode requires you to choose models explicitly. Review our team's model strategy:

**Quick Reference:**
- **Code Review:** Use `Claude 3.5 Sonnet` or `GPT-5.2`
- **Large Features:** Use `GPT-5.2` or `Claude 3.5 Sonnet`
- **Quick Debugging:** Use `Gemini 2.5 Flash` or `GPT-4o`

See the main [README.md](../README.md#best-model-per-role) for the complete model strategy.

### Step 5: Test opencode

Let's run a simple test:

1. **Create a test directory:**
   ```bash
   mkdir opencode-test
   cd opencode-test
   ```

2. **Initialize a simple project:**
   ```bash
   npm init -y
   ```

3. **Run opencode with a simple task:**
   ```bash
   opencode "Create a simple hello world function in JavaScript"
   ```

4. **Follow the prompts:**
   - Select your model (try `Gemini 2.5 Flash` for this test)
   - Review the generated code
   - Approve or modify as needed

5. **Clean up:**
   ```bash
   cd ..
   rm -rf opencode-test
   ```

> If opencode generated code successfully, you're ready to go!

### Common opencode Commands

```bash
# Check authentication status
opencode auth status

# List available models
opencode models list

# Run a task with a specific model
opencode --model "claude-3.5-sonnet" "Your task here"

# Get help
opencode --help
```

---

## 6. Gemini CLI Setup

Gemini CLI is our tool for management, planning, summaries, and coordination tasks.

### What is Gemini CLI?

Our team uses Gemini CLI for:
- Project planning and coordination
- Meeting summaries
- Jira/ticket management
- Strategic decision-making

> **Team Philosophy:** Gemini uses auto model selection, which is sufficient for most tasks. The system decides when to switch models automatically.

### Step 1: Install Gemini CLI

```bash
npm install -g gemini-cli
```

**Expected output:**
```
added 1 package in 2s
```

### Step 2: Verify Installation

```bash
gemini --version
```

You should see a version number.

### Step 3: Authenticate with OAuth

Similar to opencode, use OAuth for easy authentication:

```bash
gemini login
```

A browser window will open:
1. Sign in with your Google account (the one with Gemini access)
2. Authorize the Gemini CLI application
3. Return to the terminal

### Step 4: Configure Auto Model Selection

Gemini CLI uses auto model selection by default. Verify your configuration:

```bash
gemini config show
```

You should see:
```
auto_model_selection: true
```

If not, enable it:

```bash
gemini config set auto_model_selection true
```

### Step 5: Understanding Rate Limits

Each Gemini account has independent rate limits:
- **60 requests per minute**
- **1,500 requests per day**

**Team Coordination:**
- Be aware of rate limits during heavy usage
- Coordinate with teammates if you hit limits
- Use partner accounts when appropriate (ask your team lead)

### Step 6: Test Gemini CLI

Let's run a simple test:

```bash
gemini chat "Explain the difference between let and const in JavaScript"
```

**Expected output:**
You should see a detailed explanation from Gemini.

If you receive a response, Gemini CLI is working correctly!

### Common Gemini CLI Commands

```bash
# Interactive chat mode
gemini chat

# One-off question
gemini chat "Your question here"

# Generate a summary from a file
gemini summarize document.md

# Plan a project
gemini plan "Build a todo app with React"

# Check your usage/limits
gemini usage

# Get help
gemini --help
```

---

## 7. Verification & Testing

Let's verify everything is working together.

### Complete System Check

Run these commands one by one:

```bash
# 1. Check Git
git --version

# 2. Check Node.js
node --version

# 3. Check npm
npm --version

# 4. Check VS Code
code --version

# 5. Check opencode
opencode --version

# 6. Check Gemini CLI
gemini --version

# 7. Verify opencode authentication
opencode auth status

# 8. Verify Gemini CLI authentication
gemini usage
```

### Integrated Workflow Test

Let's test all three tools working together:

#### 1. VS Code + GitHub Copilot
- Open VS Code
- Create a new `.js` file
- Type a comment and see if Copilot suggests code
- ✓ Copilot is working

#### 2. opencode CLI
- Run: `opencode "Write a function that checks if a string is a palindrome"`
- Select a model (e.g., Gemini 2.5 Flash)
- Review the generated code
- ✓ opencode is working

#### 3. Gemini CLI
- Run: `gemini chat "Create a plan for testing a web application"`
- Review the response
- ✓ Gemini CLI is working

### Verification Checklist

- [ ] Git installed and working
- [ ] Node.js and npm installed
- [ ] VS Code installed
- [ ] GitHub Copilot active in VS Code
- [ ] GitHub Copilot suggesting code in VS Code
- [ ] opencode CLI installed
- [ ] opencode authenticated (OAuth)
- [ ] opencode can generate code
- [ ] Gemini CLI installed
- [ ] Gemini CLI authenticated
- [ ] Gemini CLI responding to prompts

> If all items are checked, congratulations! Your development environment is fully set up.

---

## 8. Troubleshooting

### GitHub Education Issues

**Problem:** GitHub Education application is pending for a long time

**Solutions:**
- Wait 1-3 business days for approval
- Check your spam folder for approval emails
- Make sure you uploaded clear documentation (student ID, enrollment letter)
- Contact GitHub Education support: education@github.com

**Problem:** GitHub Copilot not showing in VS Code

**Solutions:**
- Make sure you're signed into GitHub in VS Code
- Check that GitHub Copilot is enabled at: https://github.com/settings/copilot
- Reload VS Code window: `Ctrl+Shift+P` > "Reload Window"
- Reinstall the GitHub Copilot extension

---

### Google Education / Gemini Issues

**Problem:** Can't access Google AI Studio

**Solutions:**
- Make sure you're signed in with a Google account
- Try using an incognito/private browser window
- Clear your browser cache and cookies
- Try a different browser

**Problem:** Hit rate limits on Gemini

**Solutions:**
- Wait for the limit window to reset (1 minute or 24 hours)
- Coordinate with teammates to use partner accounts
- Consider upgrading to paid tier if needed for heavy usage
- Use opencode with other models as fallback

**Problem:** API key errors

**Solutions:**
- If using OAuth, re-authenticate: `gemini login`
- Make sure your API key hasn't been revoked
- Check that you copied the entire API key (no spaces or line breaks)

---

### VS Code & Copilot Issues

**Problem:** Copilot not suggesting code

**Solutions:**
- Check the Copilot icon in the bottom status bar
- Make sure it's not disabled for the file type
- Try manually triggering: `Ctrl+Enter` (or `Cmd+Enter` on Mac)
- Check Copilot status: `Ctrl+Shift+P` > "GitHub Copilot: Check Status"

**Problem:** Copilot suggestions are slow or poor quality

**Solutions:**
- Write clearer comments describing what you want
- Provide more context in your code
- Break complex tasks into smaller, simpler steps
- Try Copilot Chat for conversational assistance

---

### opencode CLI Issues

**Problem:** `opencode: command not found`

**Solutions:**
- Reinstall: `npm install -g opencode`
- Check npm global bin path: `npm bin -g`
- Add npm global bin to your PATH
- Try running with npx: `npx opencode`

**Problem:** OAuth authentication failing

**Solutions:**
- Try logging out first: `opencode logout gemini`
- Then log back in: `opencode login gemini`
- Clear browser cookies and try again
- Make sure you're using the correct Google account

**Problem:** Can't select a model

**Solutions:**
- List available models: `opencode models list`
- Make sure you're authenticated: `opencode auth status`
- Try specifying the model explicitly: `opencode --model "model-name" "task"`

---

### Gemini CLI Issues

**Problem:** `gemini: command not found`

**Solutions:**
- Reinstall: `npm install -g gemini-cli`
- Check npm global bin path: `npm bin -g`
- Try running with npx: `npx gemini`

**Problem:** Authentication errors

**Solutions:**
- Re-authenticate: `gemini login`
- Check that you have Gemini API access at https://aistudio.google.com/
- Verify your API quota hasn't been exceeded: `gemini usage`

**Problem:** Auto model selection not working

**Solutions:**
- Enable it: `gemini config set auto_model_selection true`
- Check config: `gemini config show`
- Try updating Gemini CLI: `npm update -g gemini-cli`

---

### Platform-Specific Issues

**Windows:**
- If npm commands fail, try running terminal as Administrator
- Use PowerShell or Git Bash instead of Command Prompt
- Make sure Node.js is in your system PATH

**Mac:**
- If you get permission errors, use `sudo` with npm install
- Or configure npm to use a user directory: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
- Make sure Xcode Command Line Tools are installed: `xcode-select --install`

**Linux:**
- Use your package manager for Node.js: `sudo apt install nodejs npm` (Ubuntu/Debian)
- Or use nvm (Node Version Manager) for easier version management
- Check file permissions if commands fail

---

### Still Having Issues?

**Get Help:**
1. **Check official documentation:**
   - GitHub Copilot: https://docs.github.com/en/copilot
   - Google AI Studio: https://ai.google.dev/
   - opencode: Run `opencode --help`
   - Gemini CLI: Run `gemini --help`

2. **Ask your team:**
   - Reach out to your team lead or mentor
   - Ask in your team's Slack channel or communication platform
   - Someone has likely encountered the same issue!

3. **Search for solutions:**
   - GitHub Issues for the respective tools
   - Stack Overflow
   - Official support channels

---

## Next Steps

Now that your environment is set up, here's what to do next:

### 1. Review Team Documentation

Read the main [README.md](../README.md) to understand:
- Our AI Council philosophy
- Model strategy per role
- Best practices for tool usage

### 2. Explore the Repository

- Check out the `agents/` directory
- Review existing agent definitions
- Understand the team's workflow

### 3. Start Small

- Try using Copilot for daily coding tasks
- Use Gemini CLI for planning your work
- Use opencode for code reviews and refactoring
- Get comfortable with each tool before tackling complex tasks

### 4. Learn Model Selection

Understand which model to use when:
- Review the [model strategy table](../README.md#best-model-per-role)
- Start with recommended models for your tasks
- Ask your team when unsure

### 5. Coordinate with Your Team

- Be aware of rate limits
- Share knowledge about what works well
- Help improve this documentation if you find issues
- Coordinate with teammates during heavy usage periods

---

## Welcome to the Team!

You're now equipped with the AI-powered tools that make our team 100x more productive. Remember:

> **Team Philosophy:**
> - Knowledge before automation
> - Read-only before action
> - Human-in-the-loop by default
> - Python-first execution

**Happy coding!** If you have questions or suggestions for improving this guide, reach out to your team lead.

---

**Document Version:** 1.0  
**Last Updated:** February 2026  
**Maintained by:** Engineering Team
