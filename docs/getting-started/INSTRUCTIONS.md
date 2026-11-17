# Developer Onboarding Guide

Welcome to the Mind You AI Council and AI Factory! This guide will help you set up your development environment with the AI-powered tools our team uses daily.

## What You'll Set Up

By the end of this guide, you'll have access to:

- **GitHub Copilot** - AI pair programmer inside VS Code
- **Gemini Pro** - Google's AI for management, planning, and coordination
- **opencode CLI** - Structured agent execution for coding workflows
- **Gemini CLI** - Command-line tool for AI-assisted planning

**Estimated Total Time:** 2-3 hours (including approval wait times)

**Time Breakdown by Section:**

- Prerequisites: 15 minutes
- GitHub Education & Copilot: 1-2 days (approval wait) + 10 min setup
- Gemini Setup: 20 minutes
- VS Code Setup: 15 minutes
- opencode CLI Setup: 20 minutes
- Gemini CLI Setup: 15 minutes
- Verification & Testing: 20 minutes

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [GitHub Education & Copilot Access](#2-github-education--copilot-access)
3. [Google Education & Gemini Pro Access](#3-google-education--gemini-pro-access)
4. [VS Code & GitHub Copilot Setup](#4-vs-code--github-copilot-setup)
5. [Tool Tier Comparison](#5-tool-tier-comparison)
6. [AI CLI Tool Installation](#6-ai-cli-tool-installation)
7. [Model Selection Guide](#7-model-selection-guide)
8. [Verification & Testing](#8-verification--testing)
9. [Troubleshooting](#9-troubleshooting)
10. [Support & Resources](#10-support--resources)

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

**Required:** Node.js 18+ (LTS) and npm 9+

> If your Node.js version is lower than 18, update it at https://nodejs.org/ even if a version number appears. Older versions will not work with these tools.

If not installed, download from: https://nodejs.org/ (LTS version recommended)

#### Visual Studio Code

Check if installed by running `code` in your terminal.

If not installed, download from: https://code.visualstudio.com/

### Required Accounts

- **GitHub Account** - Sign up at https://github.com/signup
- **Educational Email** (optional for free Copilot) - For GitHub Education benefits, use a verified academic email (e.g., `.edu` address or accredited institution domain). Without education benefits, Copilot costs $20/month.
- **Google Account** - Use an existing account or create one at https://accounts.google.com/

### Verification Checklist

Run these commands to verify your prerequisites:

```bash
# Check Git
git --version

# Check Node.js (must be v18 or higher)
node --version

# Check npm (must be v9 or higher)
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

> If all commands return version numbers at or above the required versions, you're ready to proceed!

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

4. **Get your API key** (if needed for CLI tools)
   - Click on **"Get API key"** in the left sidebar
   - Click **"Create API key"**
   - **Copy and save it securely** (you'll need this later in Step 6)

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

### Rate Limit Monitoring

To check your current usage and remaining quota:

```bash
gemini usage
```

This will display your current request count and reset times.

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

4. **Install the extensions**
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

## 5. Tool Tier Comparison

Here's a quick reference for understanding which tier each tool operates on and when to use it:

| Tool                   | Free Tier                | Paid/Education               | Best For                          | Notes                                  |
| ---------------------- | ------------------------ | ---------------------------- | --------------------------------- | -------------------------------------- |
| **GitHub Copilot**     | $20/month                | Free with education benefits | In-editor code completion         | Requires VS Code                       |
| **Gemini (AI Studio)** | 60 req/min, 1,500/day    | Cloud credits available      | API-based access, planning        | Free tier is sufficient for learning   |
| **opencode CLI**       | Requires API key         | Team managed                 | Structured coding workflows       | Model selection is manual & deliberate |
| **Gemini CLI**         | Free with Google account | Auto-upgrade available       | Planning, coordination, summaries | Auto model selection by default        |

### Cost Overview for Teams

- **Students/Educators:** All tools free (GitHub Copilot via education, Gemini free tier)
- **Individual Developers:** ~$240/year (GitHub Copilot only if paying)
- **Teams:** Contact your team lead for organization-level pricing

---

## 6. AI CLI Tool Installation

Our team uses two primary command-line tools: `opencode` for structured coding and `gemini` for planning and coordination.

> **Quick path:** For a fast ~10-minute setup, follow the **[AI CLI Tools: Quick Start Guide](./AI-installation-tutorial.md)**

### What is opencode?

opencode is a CLI tool that helps you execute complex coding tasks using AI agents. Our team uses it for:

- Code generation and refactoring
- Automated code reviews
- Multi-file editing
- Structured development workflows

> **Team philosophy:** opencode requires **manual and deliberate model selection**. Always choose a model based on the task at hand. See [Section 7](#7-model-selection-guide) for guidance.

### What is Gemini CLI?

Our team uses Gemini CLI for:

- Project planning and coordination
- Meeting summaries
- Jira/ticket management
- Strategic decision-making

> **Team philosophy:** Gemini uses **auto model selection** by default, which is sufficient for most planning tasks.

## 7. Model Selection Guide

Choosing the right model for the right task ensures better results and efficient resource usage. The table below reflects the team's **current model lineup** as of June 2026 — always cross-reference with [oh-my-opencode-models.md](../tooling/oh-my-opencode-models.md) for the latest updates.

### Decision Tree for Model Selection

```
What are you doing?

├─ Code Generation
│  ├─ Quick scripts/functions → Claude Haiku 4.5 (fastest)
│  ├─ Complex features → Claude Sonnet 4.6 or GPT-5
│  └─ Edge cases/tricky logic → Claude Opus 4.6
│
├─ Code Review
│  ├─ PR review → Claude Sonnet 4.6 (best balanced)
│  ├─ Quick check → Claude Haiku 4.5
│  └─ Architecture review → Claude Opus 4.6
│
├─ Debugging
│  ├─ Quick fix → Claude Haiku 4.5 (fastest)
│  ├─ Complex bug → Claude Sonnet 4.6
│  └─ System issue → Claude Opus 4.6 (most thorough)
│
└─ Planning/Coordination (Gemini CLI)
   └─ Use auto model selection (recommended)
```

### Model Comparison Table

| Model                 | Speed     | Cost     | Best For                         | Notes                                |
| --------------------- | --------- | -------- | -------------------------------- | ------------------------------------ |
| **Claude Haiku 4.5**  | Very Fast | Cheapest | Quick tasks, search, prototyping | Best for high-volume, low-complexity |
| **Claude Sonnet 4.6** | Fast      | Moderate | Code review, everyday coding     | Team default for most tasks          |
| **Claude Opus 4.6**   | Slower    | Higher   | Complex features, architecture   | Use when Sonnet isn't enough         |

> **Note:** For non-Claude models (GPT, Gemini), refer to [oh-my-opencode-models.md](../tooling/oh-my-opencode-models.md) for current model strings and alternatives per agent role.

### Tips for Model Selection

1. **Start with Claude Sonnet 4.6** — it handles most tasks well
2. **Drop down to Haiku 4.5** for simple, fast jobs to save cost
3. **Step up to Opus 4.6** only when Sonnet falls short
4. **Monitor your API usage** to stay within budget
5. **Share findings** with your team about what works best per task type

---

## 8. Verification & Testing

Let's verify everything is working together.

### Complete System Check

Run these commands one by one:

```bash
# 1. Check Git
git --version

# 2. Check Node.js (expect v18+)
node --version

# 3. Check npm (expect v9+)
npm --version

# 4. Check VS Code
code --version

# 5. Check opencode
opencode --version

# 6. Check Gemini CLI
gemini --version

# 7. Verify opencode authentication
opencode auth status

# 8. Verify Gemini CLI authentication and usage
gemini usage
```

**Expected Results:**

- All version commands return version numbers at or above the required versions
- `opencode auth status` shows authenticated state
- `gemini usage` shows your current request count (e.g., "23/1500 requests today")

### Real Workflow Example

#### Example: Build a String Validator

**Step 1: Generate with Copilot (VS Code)**

- Create a new file: `validator.js`
- Write a comment: `// Function to validate email format`
- Let Copilot suggest the implementation

**Step 2: Review with opencode CLI**

```bash
opencode --model "claude-sonnet-4-6" "Review this JavaScript code for edge cases and security: [paste code]"
```

**Step 3: Plan Testing with Gemini CLI**

```bash
gemini chat "Create a test plan for an email validator function with these test cases: valid email, missing @, invalid domain"
```

#### Example: Coordinate Team on Feature

**Step 1: Plan with Gemini CLI**

```bash
gemini plan "We need to add two-factor authentication to our app. What are the steps?"
```

**Step 2: Generate Code with opencode**

```bash
opencode --model "claude-opus-4-6" "Generate a 2FA implementation using TOTP (Time-based One-Time Password)"
```

**Step 3: Refine with Copilot**

- Open the generated code in VS Code
- Use Copilot Chat to add error handling and edge cases

### Verification Checklist

- [ ] Git installed and working (`git --version` returns v2+)
- [ ] Node.js 18+ installed (`node --version` returns v18+)
- [ ] npm 9+ installed (`npm --version` returns v9+)
- [ ] VS Code installed and working (`code --version`)
- [ ] GitHub Copilot active in VS Code ("GitHub Copilot: Ready" in status bar)
- [ ] GitHub Copilot suggesting code (create test.js and verify suggestions appear)
- [ ] opencode CLI installed (`opencode --version`)
- [ ] opencode API key set (`echo $ANTHROPIC_API_KEY` or `echo $OPENAI_API_KEY` returns a value)
- [ ] opencode authenticated (`opencode auth status` shows authenticated)
- [ ] Gemini CLI installed (`gemini --version`)
- [ ] Gemini API key set (`echo $GEMINI_API_KEY` returns a value)
- [ ] Gemini CLI authenticated (`gemini login` completed)
- [ ] Gemini CLI responding to prompts (`gemini chat "test"` returns response)
- [ ] Rate limits visible (`gemini usage` shows request count)

> If all items are checked, congratulations! Your development environment is fully set up.

---

## 9. Troubleshooting

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

- Check current usage: `gemini usage`
- Wait for the limit window to reset (1 minute or 24 hours depending on limit)
- Coordinate with teammates to use partner accounts
- Consider upgrading to paid tier if needed for heavy usage
- Use opencode with other models as fallback

**Problem:** API key errors

**Solutions:**

- If using OAuth, re-authenticate: `gemini login`
- If using API key, verify it hasn't been revoked at https://aistudio.google.com/
- Check that you copied the entire API key (no spaces or line breaks)
- Ensure the key is set as an environment variable: `echo $GEMINI_API_KEY`

---

### VS Code & Copilot Issues

**Problem:** Copilot not suggesting code

**Solutions:**

- Check the Copilot icon in the bottom status bar (should be blue/active)
- Make sure it's not disabled for the file type: `Ctrl+Shift+P` > "GitHub Copilot: Toggle"
- Try manually triggering: `Ctrl+Enter` (or `Cmd+Enter` on Mac)
- Check Copilot status: `Ctrl+Shift+P` > "GitHub Copilot: Check Status"

**Problem:** Copilot suggestions are slow or poor quality

**Solutions:**

- Write clearer comments describing what you want
- Provide more context in your code (nearby functions, imports)
- Break complex tasks into smaller, simpler steps
- Try Copilot Chat for conversational assistance (`Ctrl+Shift+I`)

---

### npm Global Install Issues (Common Problem)

**Problem:** `opencode: command not found` or `gemini: command not found`

**Root Causes:**

- Global npm packages not in PATH
- Permissions issues with global install directory
- npm bin directory not configured correctly

**Solutions (try in order):**

1. **Check npm global bin path:**

   ```bash
   npm bin -g
   ```

2. **Add to PATH (if not already there):**

   ```bash
   # macOS/Linux — add to ~/.bashrc or ~/.zshrc:
   export PATH="$(npm bin -g):$PATH"

   # Then reload:
   source ~/.bashrc
   # or
   source ~/.zshrc
   ```

3. **Try running with npx:**

   ```bash
   npx opencode "Your task"
   npx gemini chat "Your question"
   ```

4. **Reinstall with correct permissions:**

   ```bash
   # Recommended — configure npm to avoid sudo:
   # See: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
   ```

5. **Windows-specific:** Run PowerShell or Git Bash as Administrator

---

### opencode CLI Issues

**Problem:** OAuth authentication failing

**Solutions:**

- Try logging out first: `opencode logout`
- Then authenticate again: `opencode auth setup`
- Clear browser cookies and try again
- Check that your API key environment variable is set: `env | grep API_KEY`

**Problem:** Can't select a model

**Solutions:**

- List available models: `opencode models list`
- Make sure you're authenticated: `opencode auth status`
- Try specifying the model explicitly: `opencode --model "claude-sonnet-4-6" "Your task"`
- Ensure environment variables are set: `env | grep API`

**Problem:** Generated code has issues or doesn't compile

**Solutions:**

- Provide more detailed prompts/comments
- Specify the exact language version or framework
- Ask for unit tests to be included in generation
- Use `--model` flag to try a more capable model (e.g. Opus instead of Sonnet)

---

### Gemini CLI Issues

**Problem:** `gemini: command not found`

**Solutions:**

- Check npm installation: `npm list -g gemini-cli`
- Reinstall: `npm install -g gemini-cli`
- Check npm global bin path: `npm bin -g`
- Try running with npx: `npx gemini`
- Ensure npm bin is in your PATH (see npm global install section above)

**Problem:** Authentication errors

**Solutions:**

- Re-authenticate: `gemini login`
- Check that you have Gemini API access at https://aistudio.google.com/
- Verify your API quota hasn't been exceeded: `gemini usage`
- Check for expired API keys and regenerate if needed

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
- Make sure Node.js is in your system PATH: `echo %PATH%`
- Reinstall Node.js if PATH issues persist

**Mac:**

- If you get permission errors, configure npm to use a user directory:
  https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
- Make sure Xcode Command Line Tools are installed: `xcode-select --install`

**Linux:**

- Use nvm (Node Version Manager) for easier version management: https://github.com/nvm-sh/nvm
- Or install via package manager: `sudo apt install nodejs npm` (Ubuntu/Debian)
- Check file permissions if commands fail: `ls -la /usr/local/bin/`

---

### Still Having Issues?

1. **Check official documentation:**
   - GitHub Copilot: https://docs.github.com/en/copilot
   - Google AI Studio: https://ai.google.dev/
   - opencode: Run `opencode --help`
   - Gemini CLI: Run `gemini --help`

2. **Ask your team** in the `#dev-help` Slack channel — someone has likely seen the same issue.

3. **Search:** GitHub Issues for the respective tools, or Stack Overflow.

---

## 10. Support & Resources

### Team Contacts

- **Team Lead:** []
- **Technical Issues:** Reach out in #dev-help channel
- **Setup Problems:** Direct message your onboarding buddy
- **Documentation Issues:** File an issue in the team repo

### Useful Links

**Official Documentation:**

- GitHub Copilot: https://docs.github.com/en/copilot
- GitHub Education: https://education.github.com/
- Google AI Studio: https://aistudio.google.com/
- Google AI Documentation: https://ai.google.dev/
- opencode: https://opencode.ai/
- Gemini CLI: https://geminicli.com/

**Team Resources:**

- Main README: [README.md](../README.md)
- Model Strategy: [oh-my-opencode-models.md](../tooling/oh-my-opencode-models.md)
- Quick Start: [AI-installation-tutorial.md](./AI-installation-tutorial.md)

> **Note:** There is no separate `CONTRIBUTING.md`. The contribution workflow (short-lived branch off `main`, PR into `main`) is in the [README Contributing section](../../README.md#contributing).

### Providing Feedback

Found an issue with this guide? Have suggestions for improvement?

1. Create an issue in the team repo with the label `documentation`
2. Send feedback directly to your team lead
3. Make a pull request with improvements

---

## Next Steps

### 1. Review Team Documentation

Read the main [README.md](../README.md) to understand the AI Council philosophy, model strategy, and best practices.

### 2. Explore the Repository

- Scan the folder structure to understand where things live
- Read [oh-my-opencode-models.md](../tooling/oh-my-opencode-models.md) to understand the agent roles
- Check out the `/diagrams/` folder for system architecture visuals

### 3. Start Small

- Use Copilot for everyday coding in VS Code
- Use Gemini CLI for planning your tasks
- Use opencode for code reviews and larger refactors
- Get comfortable with one tool before stacking them together

### 4. Coordinate with Your Team

- Check `gemini usage` regularly to stay within rate limits
- Share model recommendations with teammates
- Help keep this documentation up to date if you spot issues

---

## Welcome to the Team!

You're now equipped with the AI-powered tools that make our team productive. Remember the core philosophy:

> - **Knowledge before automation**
> - **Read-only before action**
> - **Human-in-the-loop by default**
> - **Python-first execution**

**Happy coding!** If you have questions or suggestions for improving this guide, reach out to your team lead or open an issue in the repo.

---

**Document Version:** 3.0
**Last Updated:** June 2026
**Maintained by:** Engineering Team
