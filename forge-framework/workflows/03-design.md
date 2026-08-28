# Workflow 03: Design

## Phase Overview

The Design phase creates the architecture, component designs, data models, and API specifications that will guide implementation.

**Estimated Duration**: 4-20 hours (depending on system complexity)
**Typical Outputs**: Architecture document, component designs, data model, API specification, ADRs

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

**Time Estimate**: 2-4 hours

**Tools**: draw.io, Lucidchart, PlantUML, Miro, C4 model tools

**Example Architecture Decision**:
```
Decision: Use microservices architecture for the e-commerce platform

Context: The system needs to scale independently across product catalog,
order management, and payment processing. Team is organized around
business capabilities.

Consequences:
- Positive: Independent scaling, team autonomy, technology flexibility
- Negative: Operational complexity, distributed system challenges,
  eventual consistency requirements
```

**Edge Cases**:
- Team too small for microservices → Consider modular monolith
- High consistency requirements → Evaluate if eventual consistency is acceptable
- Limited operational maturity → Start with fewer services, consolidate

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

**Time Estimate**: 2-4 hours

**Tools**: UML tools, class diagram tools, interface definition languages

**Example Component Design**:
```
Component: Order Service

Responsibility: Manage order lifecycle from creation to fulfillment

Interface:
- createOrder(userId, items) → Order
- getOrder(orderId) → Order
- updateOrderStatus(orderId, status) → Order
- cancelOrder(orderId) → void

Dependencies:
- Product Service (for product info)
- Payment Service (for payment processing)
- Inventory Service (for stock management)
- Notification Service (for customer notifications)

Patterns: Repository (data access), Factory (order creation),
Observer (status notifications)
```

**Edge Cases**:
- Component too large → Split into smaller components
- Circular dependencies → Introduce interface or event-based communication
- Shared logic → Extract to shared library or service

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

**Time Estimate**: 2-4 hours

**Tools**: dbdiagram.io, ERDPlus, MySQL Workbench, pgModeler

**Example Entity Definition**:
```
Entity: Order
| Attribute    | Type     | Constraints          | Description          |
|-------------|----------|---------------------|---------------------|
| id          | UUID     | PK, NOT NULL        | Unique identifier   |
| user_id     | UUID     | FK → User, NOT NULL | Customer            |
| status      | ENUM     | NOT NULL, DEFAULT 'pending' | Order status |
| total       | DECIMAL  | NOT NULL, > 0       | Total amount        |
| created_at  | TIMESTAMP| NOT NULL            | Creation time       |
| updated_at  | TIMESTAMP| NOT NULL            | Last update time    |

Indexes:
- idx_order_user (user_id) - for user's order history
- idx_order_status (status) - for status-based queries
- idx_order_created (created_at) - for date-range queries
```

**Edge Cases**:
- Many-to-many relationships → Use junction table
- Hierarchical data → Consider adjacency list, nested set, or closure table
- Large text fields → Consider separate table or document store
- Temporal data → Consider slowly changing dimensions or event sourcing

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

**Time Estimate**: 2-4 hours

**Tools**: Swagger Editor, Stoplight, Postman, OpenAPI tools

**Example API Design**:
```
Endpoint: POST /api/v1/orders
Authentication: Bearer token (JWT)
Rate Limit: 100 requests/minute per user

Request:
{
  "items": [
    { "product_id": "uuid", "quantity": 2 }
  ],
  "shipping_address": { ... }
}

Response (201 Created):
{
  "id": "uuid",
  "status": "pending",
  "total": 49.99,
  "created_at": "2026-08-28T10:00:00Z"
}

Errors:
- 400: Invalid request (validation errors)
- 401: Unauthorized
- 409: Insufficient inventory
- 429: Rate limit exceeded
```

**Edge Cases**:
- Large result sets → Implement cursor-based pagination
- Complex queries → Consider GraphQL or query language
- File uploads → Use multipart/form-data or direct-to-S3 pattern
- Real-time updates → Consider WebSocket or SSE

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

**Time Estimate**: 1-2 hours

**Tools**: Design review checklist, architecture decision records

**Edge Cases**:
- Design doesn't meet requirements → Iterate on design
- Stakeholder disagreement → Facilitate review, document decisions
- New constraints discovered → Update design and ADRs

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

**Time Estimate**: 1-2 hours

**Tools**: ADR tools (adr-tools), Markdown templates, Git for versioning

**Example ADR**:
```
# ADR-001: Use PostgreSQL as Primary Database

Status: Accepted

Context: We need a relational database for transactional data.
The team has experience with PostgreSQL and MySQL. The system
requires ACID transactions and complex queries.

Decision: Use PostgreSQL as the primary transactional database.

Consequences:
- Positive: ACID compliance, rich query language, JSON support,
  strong community, team expertise
- Negative: Vertical scaling limits, requires connection pooling
  for high concurrency
```

**Edge Cases**:
- Decision reversible → Note reversibility, lower ceremony
- Decision irreversible → Higher scrutiny, more documentation needed
- Decision contested → Document dissent, revisit criteria

### Step 7: Design Synthesis

**Actions**:
- Consolidate all design artifacts
- Create design overview document
- Document design principles applied
- Note open issues and assumptions
- Define entry criteria for implementation
- Prepare handoff to implementation team

**Output**: Design document (using design-document template)

**Time Estimate**: 1-2 hours

**Tools**: Design document template, diagram tools

**Edge Cases**:
- Design incomplete → Document known gaps, plan to address in implementation
- Technology choices pending → Note as open issue, set decision deadline
- Team capacity concerns → Propose phased implementation

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
| QG9 | Report follows template format | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Architectural style? | Microservices / Monolith / Serverless / Event-Driven | Scale, team, complexity, requirements |
| DP2: API style? | REST / GraphQL / gRPC | Use case, client needs, performance |
| DP3: Database type? | SQL / NoSQL / Graph / Time-series | Data structure, query patterns, scale |
| DP4: Design complexity? | Simplify / Add complexity / Maintain | Requirements, YAGNI, future needs |

## Common Anti-Patterns

1. **Big design up front**: Designing every detail before implementation
2. **Designing in a vacuum**: No input from implementers or operators
3. **Pattern over-application**: Unnecessary complexity from patterns
4. **Ignoring non-functional requirements**: Design that works but doesn't scale
5. **No ADRs**: Significant decisions undocumented

## Output Artifact

Use template: `templates/design-document.md`

## References

- Related workflow: `02-analyze.md` (previous phase)
- Related workflow: `04-implement.md` (next phase)
- Related capability: `capabilities/design.md`
- Anti-patterns: `ANTI-PATTERNS.md` (Design section)
