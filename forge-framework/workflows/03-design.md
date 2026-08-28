# Workflow 03: Design

## Phase Overview

The Design phase creates the architecture, component designs, data models, and API specifications that will guide implementation.

## Trigger Conditions

This workflow is triggered when:
- System architecture needs to be created or modified
- Component designs are needed
- Data models need to be defined
- APIs need to be designed
- Design decisions need to be documented
- Architecture Decision Records (ADRs) are needed

## Steps

### Step 1: Architecture Design

**Actions**:
- Define system boundaries and context
- Identify major components and their responsibilities
- Define component interactions and communication patterns
- Select architectural style (microservices, monolith, serverless, event-driven)
- Define deployment architecture
- Document architectural decisions with rationale
- Create architecture diagrams

**Architectural styles**:
- **Microservices**: Independent deployable services
- **Monolith**: Single deployable unit
- **Serverless**: Function-as-a-Service
- **Event-Driven**: Event-based communication
- **Layered**: Presentation, business, data layers
- **Hexagonal**: Ports and adapters pattern

**Architecture views**:
- Logical view (components and relationships)
- Process view (runtime behavior)
- Development view (module organization)
- Physical view (deployment topology)
- Scenarios (key use cases)

**Output**: Architecture document with diagrams

### Step 2: Component Design

**Actions**:
- Decompose architecture into components
- Define component interfaces (inputs, outputs, protocols)
- Specify component responsibilities (single responsibility)
- Define component dependencies
- Select design patterns for each component
- Document component internals (classes, modules)
- Define error handling strategies

**Design principles**:
- **SOLID**: Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion
- **DRY**: Don't Repeat Yourself
- **KISS**: Keep It Simple, Stupid
- **YAGNI**: You Aren't Gonna Need It
- **Separation of Concerns**: Distinct sections for distinct concerns
- **Law of Demeter**: Only talk to immediate friends

**Output**: Component design document

### Step 3: Data Model Design

**Actions**:
- Identify entities and their attributes
- Define relationships between entities
- Normalize data to appropriate level
- Define primary keys and foreign keys
- Define indexes for query patterns
- Plan for data migration (if applicable)
- Document data constraints and validation rules
- Define data retention and archival policies

**Data model types**:
- Conceptual model (high-level entities)
- Logical model (detailed attributes and relationships)
- Physical model (database-specific implementation)

**Output**: Data model document with ER diagrams

### Step 4: API Design

**Actions**:
- Define API endpoints and operations
- Specify request/response formats
- Define authentication and authorization
- Document error responses and status codes
- Define rate limiting and throttling
- Plan API versioning strategy
- Create API specification (OpenAPI/Swagger)
- Define pagination, filtering, sorting

**API styles**:
- **REST**: Resource-based, HTTP methods
- **GraphQL**: Query language, single endpoint
- **gRPC**: Protocol buffers, binary protocol
- **WebSocket**: Real-time bidirectional

**Output**: API specification document

### Step 5: Design Validation

**Actions**:
- Review design against requirements
- Validate design against constraints
- Assess design against quality attributes
- Conduct design review with stakeholders
- Identify and address design gaps
- Validate scalability considerations
- Validate security considerations
- Validate performance considerations

**Validation checklist**:
- [ ] All requirements addressed
- [ ] Constraints satisfied
- [ ] Quality attributes met
- [ ] Security integrated
- [ ] Performance considered
- [ ] Error handling defined
- [ ] Monitoring considered
- [ ] Migration path defined

**Output**: Design validation report

### Step 6: Architecture Decision Records

**Actions**:
- Identify significant design decisions
- Document context for each decision
- List options considered
- Document chosen option with rationale
- Document trade-offs accepted
- Document consequences (positive and negative)
- Get stakeholder sign-off on major decisions

**ADR format**:
- Title (short, descriptive)
- Status (proposed, accepted, superseded)
- Context (what is the issue)
- Decision (what was decided)
- Consequences (what follows)

**Output**: ADR documents

### Step 7: Design Synthesis

**Actions**:
- Consolidate all design artifacts
- Create design overview document
- Document design principles applied
- Note open issues and assumptions
- Define entry criteria for implementation
- Prepare handoff to implementation team

**Output**: Design document (using design-document template)

## Quality Gates

| Gate | Criteria | Check |
|------|----------|-------|
| QG1 | Architecture addresses all requirements | |
| QG2 | Components follow SOLID principles | |
| QG3 | Data model normalized and indexed | |
| QG4 | APIs follow REST/GraphQL best practices | |
| QG5 | Security integrated into design | |
| QG6 | Performance considerations documented | |
| QG7 | ADRs created for significant decisions | |
| QG8 | Design reviewed and validated | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Architectural style? | Microservices / Monolith / Serverless / Event-Driven | Scale, team, complexity, requirements |
| DP2: API style? | REST / GraphQL / gRPC | Use case, client needs, performance |
| DP3: Database type? | SQL / NoSQL / Graph / Time-series | Data structure, query patterns, scale |

## Output Artifact

Use template: `templates/design-document.md`

## References

- Related workflow: `02-analyze.md` (previous phase)
- Related workflow: `04-implement.md` (next phase)
- Related capability: `capabilities/design.md`
