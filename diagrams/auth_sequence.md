# Authentication and Access Sequence Diagram

```mermaid
sequenceDiagram
    actor User
    participant WB as :WebBrowser
    participant NJ as :NextJS<br/>(Frontend SSR)
    participant DJ as :Django<br/>(Backend API)
    participant TP as :Third Party<br/>(Zoho, Acuity, Zoom)

    User->>WB: Get webpage resource
    WB->>NJ: Request webpage access
    NJ-->>WB: <<unmount/mount components>>
    NJ->>DJ: Authorize
    DJ->>TP: Login Data
    TP-->>DJ: Keys and Settings
    DJ-->>WB: Fill out extra details

    alt payload
        User->>WB: Submit details
        WB->>DJ: Process details
        DJ->>TP: Most details
        TP-->>DJ: <<response>>
        DJ-->>WB: <<response>>
        
        WB->>NJ: Process details
        NJ->>DJ: Auth Token
        DJ->>TP: Process more details
        TP-->>DJ: <<response>>
        DJ-->>NJ: <<response>>
        NJ-->>WB: Pass server side props
        WB-->>User: display client side props
    else invalid token or no token
        WB->>NJ: No authorization
        NJ->>DJ: requests
        DJ-->>NJ: <<error response>>
        NJ-->>WB: Display error
        WB-->>User: Login required
    end
```

---
**🔑 Key Details Mapped**

- **Participants:**  
  Aliases (WB, NJ, DJ, TP) are used in the diagram for brevity. Each alias is shown with a descriptive name matching the boxes from your image.

- **Line Styles:**  
  - `->>` — **Solid lines** denote synchronous requests.  
  - `-->>` — **Dashed lines** indicate responses or returned data.

- **Grouping:**  
  The bottom "large box" is depicted with an `alt` block, visually splitting the flow into:  
  - **Payload Success Path:** (“payload”)  
  - **Invalid Token Failure Path:** (“invalid token or no token”)

---
