# Hot Leads for Tony and Rob

```mermaid
graph TB
    %% --- STYLING (Dark Mode) ---
    %% Core Nodes: Dark Charcoal with Off-White text
    classDef core fill:#2d2d2d,stroke:#a0a0a0,stroke-width:2px,color:#ffffff;
    
    %% Database: Deep Navy with Cyan Border (High Security feel)
    classDef secure fill:#0f172a,stroke:#00e5ff,stroke-width:2px,color:#ffffff;
    
    %% External: Black with Grey dashed lines
    classDef ext fill:#000000,stroke:#666666,stroke-width:1px,stroke-dasharray: 5 5,color:#cccccc;
    
    %% Edges/Lines
    linkStyle default stroke:#a0a0a0,stroke-width:2px;

    %% --- ACTORS ---
    subgraph User_Tier [End User Experience]
        style User_Tier fill:#1a1a1a,stroke:#444444,color:#ffffff
        User((User / Admin))
        Frontend[React Frontend<br/><i>MFA Enabled</i>]
    end

    %% --- AWS CLOUD ENV ---
    subgraph AWS_Cloud [AWS Cloud Environment]
        style AWS_Cloud fill:#121212,stroke:#555555,color:#ffffff
        
        %% Entry
        Gateway[Internet Gateway / Load Balancer<br/><i>TLS 1.3 Termination</i>]

        %% Application Tier
        subgraph App_Tier [ECS Cluster - Dockerized Microservices]
            style App_Tier fill:#1e1e1e,stroke:#444444,color:#ffffff
            
            Django_Core[Django Backend API<br/><i>Processing & Logic</i>]
            Auth_Mod[Auth Module<br/><i>Argon2 Hashing & JWT Issue</i>]
            
            subgraph Workers [Async Processing]
                style Workers fill:#252525,stroke:#555555,color:#eeeeee
                Cron[Scheduled Cron Jobs<br/><i>Data Fetching</i>]
                Webhook_Handler[Webhook Receiver<br/><i>Real-time Events</i>]
            end
        end

        %% Logging
        CloudWatch[AWS CloudWatch<br/><i>Audit Logs & Monitoring</i>]

        %% Data Tier (Private)
        subgraph Storage_Tier [Private Data Sanctuary]
            style Storage_Tier fill:#0f172a,stroke:#00e5ff,stroke-width:1px,stroke-dasharray: 5 5,color:#00e5ff
            RDS[(PostgreSQL RDS<br/><i>Encrypted at Rest AES-256</i>)]
        end
    end

    %% --- EXTERNAL ECOSYSTEM ---
    subgraph External_APIs [Trusted Third-Party Ecosystem]
        style External_APIs fill:#000000,stroke:#666666,stroke-dasharray: 5 5,color:#aaaaaa
        Zoom[Zoom API<br/><i>Video</i>]
        Zoho[Zoho CRM<br/><i>Records</i>]
        Google[Google Workspace<br/><i>Calendar</i>]
        Acuity[Acuity<br/><i>Scheduling</i>]
    end

    %% --- CONNECTIONS ---
    
    %% User Flow
    User ==>|HTTPS Request| Frontend
    Frontend ==>|Secure API Call / TLS 1.3| Gateway
    Gateway ==>|Traffic Routing| Django_Core

    %% Internal Auth
    Django_Core -.->|Verify Credentials| Auth_Mod
    Auth_Mod -.->|Issue Internal JWT| Django_Core

    %% Data Persistence
    Django_Core <==>|Read/Write Encrypted Data| RDS
    RDS ---|Strict Access Control| Storage_Tier

    %% External Data Fetching (Cron)
    Django_Core -->|Trigger Task| Cron
    Cron -- Secure API GET --> Zoom
    Cron -- Secure API GET --> Zoho
    Cron -- Secure API GET --> Google

    %% External Webhooks (Inbound)
    Acuity -- HTTPS POST (Webhook) --> Gateway
    Gateway --> Webhook_Handler
    Webhook_Handler -->|Process Event| Django_Core

    %% Logging
    Django_Core -.->|Stream Logs| CloudWatch
    RDS -.->|Audit Trail| CloudWatch

    %% Legend / Classes applying
    class User,Frontend core;
    class Gateway,Django_Core,Cron,Webhook_Handler,Auth_Mod core;
    class RDS secure;
    class Zoom,Zoho,Google,Acuity,CloudWatch ext;
```

> **Narrating the Diagram for a Non-Technical Audience**

### 🔒 The Secure Handshake (Top Layer)
- **User → React Frontend:**  
  The user starts by interacting with a React website, where Multi-Factor Authentication (MFA) is always required for security.
- **Secure Communication:**  
  All data travels across the public internet in a _tamper-proof tunnel_ (TLS 1.3), making it impossible for outsiders to intercept sensitive information like booking or mood data.

---

### 🧠 The Brain (Middle Layer – ECS/Django)
- **Central Orchestrator:**  
  At the core sits the Django backend, which coordinates everything behind the scenes.
- **Internal Security:**  
  Even inside the cloud, services never trust each other blindly. The “Auth Module” hands out special digital passes (Internal JWTs), so even if one part is compromised, the rest of the system stays safe.

- **Data Processing:**
  - **Scheduled Tasks (Cron Jobs – Outbound):**  
    The system _wakes up_ on a schedule to fetch attendance data or update calendars by reaching out to Zoom, Zoho, or Google.
  - **Webhooks (Inbound):**  
    When real-time events happen (like a patient cancels via Acuity), Acuity sends an instant alert to your system, which is quickly processed so the records are always current.

---

### 🏦 The Vault (Bottom Layer – Storage)
- **Private Data Sanctuary:**  
  The PostgreSQL database is set apart in a blue “trust zone.” It can *only* talk to the Django backend—never directly to the internet.  
  Even if someone physically stole a hard drive, all data is encrypted (AES-256) and completely unreadable without the proper keys.

---

### 📝 Audit & Compliance (Right Side)
- **Footprints for Compliance:**  
  Every action—logins, bookings, data fetches—leaves a trace in CloudWatch (indicated by dotted lines).  
  This constant logging keeps the system compliant with standards like ISO 27001 and provides a clear audit trail.

---

