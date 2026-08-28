# Diagrams & Visual Reference - Forge Engineering Lifecycle Framework

## Overview

This document provides visual diagrams for key concepts in the Forge framework. These diagrams use Mermaid syntax (supported by GitHub Markdown) and ASCII art.

## SDLC Workflow Overview

```mermaid
graph LR
    R[Research] --> A[Analysis]
    A --> D[Design]
    D --> I[Implementation]
    I --> T[Testing]
    T --> DP[Deployment]
    R -.-> M[Modernization]
    A -.-> M
    D -.-> M
    I -.-> M
    T -.-> M
    DP -.-> M
    C[Communication] -.-> R
    C -.-> A
    C -.-> D
    C -.-> I
    C -.-> T
    C -.-> DP
    C -.-> M

    style R fill:#e1f5fe
    style A fill:#e8f5e9
    style D fill:#fff3e0
    style I fill:#fce4ec
    style T fill:#f3e5f5
    style DP fill:#e0f2f1
    style M fill:#fff8e1
    style C fill:#eceff1
```

## Phase Flow Patterns

### Linear Flow (Full Lifecycle)

```mermaid
flowchart LR
    R([Research]) --> A([Analysis])
    A --> D([Design])
    D --> I([Implementation])
    I --> T([Testing])
    T --> DP([Deployment])

    style R fill:#e1f5fe
    style A fill:#e8f5e9
    style D fill:#fff3e0
    style I fill:#fce4ec
    style T fill:#f3e5f5
    style DP fill:#e0f2f1
```

### Iterative Flow

```mermaid
flowchart LR
    R([Research]) <--> A([Analysis])
    A <--> D([Design])
    D <--> I([Implementation])
    I <--> T([Testing])

    style R fill:#e1f5fe
    style A fill:#e8f5e9
    style D fill:#fff3e0
    style I fill:#fce4ec
    style T fill:#f3e5f5
```

### Parallel Flow (Multiple Teams)

```mermaid
flowchart LR
    R([Research]) --> A([Analysis])
    A --> D([Design])
    D --> I1([Implementation 1])
    D --> I2([Implementation 2])
    I1 --> T1([Testing 1])
    I2 --> T2([Testing 2])
    T1 --> DP([Deployment])
    T2 --> DP

    style R fill:#e1f5fe
    style A fill:#e8f5e9
    style D fill:#fff3e0
    style I1 fill:#fce4ec
    style I2 fill:#fce4ec
    style T1 fill:#f3e5f5
    style T2 fill:#f3e5f5
    style DP fill:#e0f2f1
```

## Artifact Output Format

```mermaid
flowchart TB
    H[Header<br/>Created, Phase, Status, Author, Version]
    H --> ES[Executive Summary<br/>2-3 sentences]
    ES --> MC[Main Content<br/>Phase-specific sections]
    MC --> DR[Decisions & Rationale<br/>Table with options]
    DR --> RM[Risks & Mitigations<br/>Table with probability, impact]
    RM --> AS[Assumptions<br/>Bulleted list]
    AS --> OI[Open Issues<br/>Bulleted list]
    OI --> NS[Next Steps<br/>Numbered list]
    NS --> RF[References<br/>Bulleted list]
    RF --> AP[Appendix<br/>Supplementary material]

    style H fill:#e3f2fd
    style ES fill:#f3e5f5
    style MC fill:#e8f5e9
    style DR fill:#fff3e0
    style RM fill:#ffebee
    style AS fill:#e0f7fa
    style Oi fill:#fff8e1
    style NS fill:#e8eaf6
    style RF fill:#f1f8e9
    style AP fill:#fce4ec
```

## Quality Gate Flow

```mermaid
flowchart LR
    Start([Start Phase]) --> Execute[Execute Steps]
    Execute --> QG{Quality Gates}
    QG -->|Pass| Next[Next Phase]
    QG -->|Fail| Fix[Fix Issues]
    Fix --> Execute

    style Start fill:#e8f5e9
    Execute fill:#e3f2fd
    QQ fill:#fff3e0
    Next fill:#e0f2f1
    Fix fill:#ffebee
```

## Decision-Making Framework

```mermaid
flowchart TB
    D1[1. Understand<br/>Clarify problem, constraints, success criteria]
    D2[2. Explore<br/>Identify multiple approaches]
    D3[3. Evaluate<br/>Compare against criteria]
    D4[4. Decide<br/>Select best option with rationale]
    D5[5. Document<br/>Record decision and trade-offs]

    D1 --> D2 --> D3 --> D4 --> D5

    style D1 fill:#e3f2fd
    style D2 fill:#e8f5e9
    style D3 fill:#fff3e0
    style D4 fill:#e0f2f1
    style D5 fill:#f3e5f5
```

## Proficiency Level Progression

```mermaid
journey
    title Capability Proficiency Levels
    section Level 1
      Novice: 1: Start
    section Level 2
      Competent: 2: Practice
    section Level 3
      Proficient: 3: Apply
    section Level 4
      Expert: 4: Mentor
    section Level 5
      Master: 5: Lead
```

## Deployment Strategies

### Blue-Green Deployment

```mermaid
sequenceDiagram
    participant User
    participant LB as Load Balancer
    participant Blue as Blue Env (v1)
    participant Green as Green Env (v2)

    User->>LB: Request
    LB->>Blue: Route traffic
    Note over Green: Deploy v2 to Green
    Note over Green: Verify v2 health
    LB->>Green: Switch traffic
    User->>LB: Request
    LB->>Green: Route traffic
    Note over Blue: Blue becomes standby
```

### Canary Deployment

```mermaid
sequenceDiagram
    participant User
    participant LB as Load Balancer
    participant Stable as Stable (v1)
    participant Canary as Canary (v2)

    User->>LB: Request
    LB->>Stable: 95% traffic
    LB->>Canary: 5% traffic
    Note over Canary: Monitor metrics
    LB->>Stable: 50% traffic
    LB->>Canary: 50% traffic
    Note over Canary: Verify stability
    LB->>Canary: 100% traffic
```

## Context Preservation Model

```mermaid
flowchart LR
    subgraph Phase 1
        A1[Decisions] --> B1[Assumptions]
        B1 --> C1[Risks]
    end
    subgraph Phase 2
        A2[Decisions] --> B2[Assumptions]
        B2 --> C2[Risks]
    end
    subgraph Phase 3
        A3[Decisions] --> B3[Assumptions]
        B3 --> C3[Risks]
    end

    A1 -.-> A2
    B1 -.-> B2
    C1 -.-> C2
    A2 -.-> A3
    B2 -.-> B3
    C2 -.-> C3

    style A1 fill:#e3f2fd
    style A2 fill:#e3f2fd
    style A3 fill:#e3f2fd
    style B1 fill:#fff3e0
    style B2 fill:#fff3e0
    style B3 fill:#fff3e0
    style C1 fill:#ffebee
    style C2 fill:#ffebee
    style C3 fill:#ffebee
```

## Artifact Relationship Map

```mermaid
flowchart LR
    RR[Research Report] --> AR[Analysis Report]
    AR --> DD[Design Document]
    DD --> IP[Implementation Plan]
    IP --> TP[Test Plan]
    TP --> DP[Deployment Plan]
    DP -.-> MP[Modernization Plan]
    RR -.-> MP

    RR -.->|Informs| C[Communication]
    AR -.->|Informs| C
    DD -.->|Informs| C
    IP -.->|Informs| C
    TP -.->|Informs| C
    DP -.->|Informs| C
    MP -.->|Informs| C

    style RR fill:#e1f5fe
    style AR fill:#e8f5e9
    style DD fill:#fff3e0
    style IP fill:#fce4ec
    style TP fill:#f3e5f5
    style DP fill:#e0f2f1
    style MP fill:#fff8e1
    style C fill:#eceff1
```

## Framework File Structure

```mermaid
graph TD
    ROOT[forge-framework/]
    ROOT --> README[README.md]
    ROOT --> QR[QUICK-REFERENCE.md]
    ROOT --> GLOSSARY[GLOSSARY.md]
    ROOT --> ANTI[ANTI-PATTERNS.md]
    ROOT --> METRICS[METRICS.md]
    ROOT --> CHANGELOG[CHANGELOG.md]
    ROOT --> DIAGRAMS[DIAGRAMS.md]
    ROOT --> CORE[core/]
    ROOT --> WORKFLOWS[workflows/]
    ROOT --> CAPABILITIES[capabilities/]
    ROOT --> TEMPLATES[templates/]
    ROOT --> ARTIFACTS[artifacts/]
    ROOT --> GUIDES[guides/]
    ROOT --> EXAMPLES[examples/]

    CORE --> SP[system-prompt.md]
    CORE --> P[persona.md]
    CORE --> PR[principles.md]

    WORKFLOWS --> W1[01-research.md]
    WORKFLOWS --> W2[02-analyze.md]
    WORKFLOWS --> W3[03-design.md]
    WORKFLOWS --> W4[04-implement.md]
    WORKFLOWS --> W5[05-test.md]
    WORKFLOWS --> W6[06-debug.md]
    WORKFLOWS --> W7[07-deploy.md]
    WORKFLOWS --> W8[08-modernize.md]
    WORKFLOWS --> W9[09-communication.md]

    CAPABILITIES --> C1[research.md]
    CAPABILITIES --> C2[analysis.md]
    CAPABILITIES --> C3[design.md]
    CAPABILITIES --> C4[implementation.md]
    CAPABILITIES --> C5[testing.md]
    CAPABILITIES --> C6[debugging.md]
    CAPABILITIES --> C7[deployment.md]
    CAPABILITIES --> C8[modernization.md]

    TEMPLATES --> T1[research-report.md]
    TEMPLATES --> T2[analysis-report.md]
    TEMPLATES --> T3[design-document.md]
    TEMPLATES --> T4[implementation-plan.md]
    TEMPLATES --> T5[test-plan.md]
    TEMPLATES --> T6[debug-report.md]
    TEMPLATES --> T7[deployment-plan.md]
    TEMPLATES --> T8[modernization-plan.md]

    ARTIFACTS --> OF[output-format.md]

    GUIDES --> IG[integration-guide.md]
    GUIDES --> CG[configuration-guide.md]
    GUIDES --> TG[troubleshooting.md]

    EXAMPLES --> EX1[research-report-example.md]

    style ROOT fill:#eceff1
    style README fill:#e3f2fd
    style CORE fill:#e8f5e9
    style WORKFLOWS fill:#fff3e0
    style CAPABILITIES fill:#fce4ec
    style TEMPLATES fill:#f3e5f5
    style ARTIFACTS fill:#e0f2f1
    style GUIDES fill:#fff8e1
    style EXAMPLES fill:#e1f5fe
```
