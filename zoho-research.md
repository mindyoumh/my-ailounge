### **Architecture Overview**

1. **Trigger:** User tags `@AI_Chatbot` or uses a slash command (e.g., `/zoho`).
2. **Selection:** Bot presents buttons for the 3 specific forms.
3. **Collection:** Bot asks questions one by one (or opens a Slack Modal) to gather required fields (Name, Dept, Request Details).
4. **Submission:** Bot uses the **Zoho Forms API** (via OAuth) to POST the data directly to Zoho.
5. **Confirmation:** Bot replies "Done! Submitted" and tags reviewers.

---

### **Implementation Guide**

#### **Step 1: Zoho API & OAuth Setup**

*Reference: [Zoho Commerce OAuth Step 1*](https://www.zoho.com/commerce/api/oauth-step-1.html)

To allow your Slack bot to "talk" to Zoho Forms without a human logging in every time, you need to set up OAuth.

1. **Register a Client:** Go to the [Zoho Developer Console](https://api-console.zoho.com/) and register your Slack App/Middleware as a client to get a `Client ID` and `Client Secret`.
2. **Generate Tokens:** Follow the OAuth flow in the link you provided to generate an **Access Token** and **Refresh Token**.
* *Note:* The Access Token expires often (usually 1 hour). Your bot's backend must use the Refresh Token to generate new Access Tokens automatically so the bot never stops working.



#### **Step 2: Map Your Forms**

You have three specific forms. You need to identify the specific "Field Link Names" for each so the bot knows where to put the answers.

* **Forms:**
1. `PreManComMeetingInputForm`
2. `TechRequestForm`
3. `ProdDevRequestForm`


* **Action:** Open each form editor in Zoho -> Go to Field Properties. Note down the exact API names (e.g., `First_Name`, `Department`, `Issue_Description`).

#### **Step 3: The Slack Interaction Flow (The "Streamline")**

Here is how to design the bot logic based on your uploaded image:

**A. The Trigger & Selection**

* **User:** `@AI_Chatbot request`
* **Bot:** "Which form do you need?" (Display 3 Buttons)
* `[Tech Request]` `[Prod Dev Request]` `[PreManCom Input]`



**B. Data Collection (Conversational vs. Modal)**

* *Conversational (Like your image):* The bot maintains "state."
* **Bot:** "Okay, Tech Request. What is your First and Last Name?"
* **User:** "Kier Abiad"
* **Bot:** "Got it. Which Department?"
* **User:** "IT Security"
* **Bot:** "Please describe the request."
* **User:** "Need access to the new repo."


* *Recommendation:* For complex forms, use **Slack Modals** (pop-up forms inside Slack). It's cleaner than a long chat thread, but conversational works well for short forms.

#### **Step 4: Handling Data (Prefill vs. API Submission)**

*References: [Static Prefill](https://help.zoho.com/portal/en/kb/forms/form-settings/prefill/articles/static-prefill-urls#Advantages_of_the_Static_Prefill_URLs_option), [Prefill Webhook*](https://help.zoho.com/portal/en/kb/forms/field-types/form-fields/advanced/articles/prefill-webhook#Overview)

You mentioned prefill links. Here is how they fit into this automation:

**Scenario A: The "Done! Submitted" Flow (Pure API)**
*This is what you asked for in the image.*
The bot collects the data and sends a `POST` request to the Zoho Forms API endpoint:
`https://forms.zoho.com/api/v1/user/{user_id}/forms/{form_link_name}/records`

* **Why:** This keeps the user entirely in Slack.
* **Payload:** You send the JSON data collected from the chat.

**Scenario B: The "Hybrid" Flow (Using Prefill Links)**
*If you don't want to build the full API submission, or if the form is too complex for a bot.*

1. Bot asks minimal info (e.g., just Name and Dept).
2. Bot constructs a **Static Prefill URL** using the link you provided.
* *Example:* `https://forms.zoho.com/.../TechRequestForm?Name=Kier&Dept=IT`


3. **Bot:** "I've started the form for you. Click here to finish and submit: [Link]"
4. **User:** Clicks link -> Form opens with Name/Dept already filled -> User hits Submit.

**Scenario C: Advanced Webhook (The "Smart" Prefill)**
*Using your [Prefill Webhook](https://help.zoho.com/portal/en/kb/forms/field-types/form-fields/advanced/articles/prefill-webhook#Overview) reference.*
If your form needs to pull data *from* Slack dynamically (e.g., getting the user's email from their Slack profile automatically), you can configure a generic "Tech Request" link that hits your backend webhook first, fetches the user's Slack details, and loads the form with those details already populated.

### **Summary Checklist for `zoho-research.md**`

Add this logic to your GitHub research file:

1. **Bot Command:** Create a `/zoho` command or listen for `@mentions`.
2. **State Management:** The bot needs to remember *which* form the user selected while it asks the subsequent questions (Name -> Dept -> Details).
3. **API Handler:**
* Use **OAuth** (Link 3) to authenticate.
* Use **POST /records** to submit data.
* *Alternative:* Use **URL Parameters** (Link 2) to generate a "Continue in Browser" link if the API fails or the form is too long.


4. **Review Tagging:** Once the API returns "Success (200 OK)", the bot posts the final message:
* `Done! Submitted. @Cedrick @bo please review!`
### **Next Step**

Would you like me to generate a **JSON payload example** showing how to format the data collected from Slack to send to the TechRequestForm API?
