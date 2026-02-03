# Hot Leads for Tony and Rob

```mermaid
graph TB
    %% --- STYLING ---
    classDef core fill:#ffffff,stroke:#000000,stroke-width:2px;
    classDef db fill:#f4f4f4,stroke:#000000,stroke-width:2px,stroke-dasharray: 0;
    classDef ext fill:#ffffff,stroke:#666666,stroke-width:1px,stroke-dasharray: 5 5;
    classDef secure fill:#e6f3ff,stroke:#004c99,stroke-width:2px;

    %% --- ACTORS ---
    subgraph User_Tier [End User Experience]
        User((User / Admin))
        Frontend[React Frontend<br/><i>MFA Enabled</i>]
    end

    %% --- AWS CLOUD ENV ---
    subgraph AWS_Cloud [AWS Cloud Environment]
        style AWS_Cloud fill:#fafafa,stroke:#cccccc
        
        %% Entry
        Gateway[Internet Gateway / Load Balancer<br/><i>TLS 1.3 Termination</i>]

        %% Application Tier
        subgraph App_Tier [ECS Cluster - Dockerized Microservices]
            style App_Tier fill:#ffffff,stroke:#333333
            
            Django_Core[Django Backend API<br/><i>Processing & Logic</i>]
            Auth_Mod[Auth Module<br/><i>Argon2 Hashing & JWT Issue</i>]
            
            subgraph Workers [Async Processing]
                Cron[Scheduled Cron Jobs<br/><i>Data Fetching</i>]
                Webhook_Handler[Webhook Receiver<br/><i>Real-time Events</i>]
            end
        end

        %% Logging
        CloudWatch[AWS CloudWatch<br/><i>Audit Logs & Monitoring</i>]

        %% Data Tier (Private)
        subgraph Storage_Tier [Private Data Sanctuary]
            style Storage_Tier fill:#e6f3ff,stroke:#004c99
            RDS[(PostgreSQL RDS<br/><i>Encrypted at Rest AES-256</i>)]
        end
    end

    %% --- EXTERNAL ECOSYSTEM ---
    subgraph External_APIs [Trusted Third-Party Ecosystem]
        style External_APIs fill:#ffffff,stroke:#666666,stroke-dasharray: 5 5
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
