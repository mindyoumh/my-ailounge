
# session helper

```mermaid
flowchart TD
    %% Define Styles
    classDef actor fill:#f9f,stroke:#333,stroke-width:2px;
    classDef secure fill:#ffe6cc,stroke:#d79b00,stroke-width:2px,stroke-dasharray: 5 5;
    classDef ai fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
    classDef ext fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;

    %% Actors
    Psych[Psychologist]:::actor
    Client[Client]:::actor

    %% PHASE 1: REAL-TIME SESSION
    subgraph Live_Session_Environment [Phase 1: Real-Time Session Environment]
        direction TB
        Mic[Microphone Input]
        Notes[Live Notes Interface]
        
        %% Real-time Encryption/Decryption Flow
        EncryptModule[[Local Encryption Module]]:::secure
        StreamHandler[Secure Stream Handler]
        DecryptStream[[Temp Decrypt for Inference]]:::secure
        
        RT_AI(Real-Time Assistant AI):::ai
        SuggestionUI[Live Insights & Diagnosis Support UI]
    end

    %% Interactions in Live Session
    Client -->|Voice| Mic
    Psych -->|Typing| Notes
    Psych -->|Views| SuggestionUI
    
    Mic --> EncryptModule
    Notes --> EncryptModule
    EncryptModule -->|Encrypted Packets| StreamHandler
    StreamHandler --> DecryptStream
    DecryptStream -->|Plaintext Context| RT_AI
    RT_AI -->|Nudges/Diagnosis Support| SuggestionUI

    %% PHASE 2: CONTEXT & STORAGE
    subgraph Data_Layer [Phase 2: Context Aggregation]
        EncryptedStore[(Encrypted Session Store)]:::secure
        Zoho[Zoho Survey Data]:::ext
        PDFs[Uploaded PDF Assessments]:::ext
        MedDB[Medical DB History]:::ext
        ContextEngine[Context Aggregation Engine]
    end

    StreamHandler -->|Save with Salt/Key| EncryptedStore
    Zoho --> ContextEngine
    PDFs --> ContextEngine
    MedDB --> ContextEngine

    %% PHASE 3: POST-PROCESSING
    subgraph Post_Processing [Phase 3: Analysis & Feedback Loop]
        DecryptProcess[[Decrypt for Analysis]]:::secure
        SeniorAI(Senior Psych AI Agent):::ai
        
        KPI_Gen[KPI Generator]
        ReportGen[Feedback Reporter]
        ThreadMgr[Thread Context Manager]
        
        CommChannel{Slack / Email Gateway}:::ext
    end

    %% Flow for Post-Processing
    EncryptedStore --> DecryptProcess
    ContextEngine -->|Enriched Context| SeniorAI
    DecryptProcess -->|Full Transcript + Notes| SeniorAI
    
    SeniorAI -->|Evaluate| KPI_Gen
    SeniorAI -->|Synthesize| ReportGen
    KPI_Gen --> ReportGen
    
    ReportGen --> CommChannel
    CommChannel -->|Notification| Psych

    %% FEEDBACK LOOP
    Psych -->|Reply/Question| CommChannel
    CommChannel -->|Webhook Payload| ThreadMgr
    ThreadMgr -->|Retrieve User History| SeniorAI
    SeniorAI -->|Generate Response| CommChannel
    ```