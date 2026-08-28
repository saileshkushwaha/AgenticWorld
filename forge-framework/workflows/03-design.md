# Workflow 03: Design

**Duration**: 4-20h | **Outputs**: Architecture doc, component designs, data model, API spec, ADRs

## Trigger

- Architecture creation/modification, component designs, data model definition
- API design, design decision documentation, ADRs needed

## Steps

### Step 1: Architecture Design
Define boundaries, identify components, define interactions, select style, define deployment, document decisions, create diagrams.
**Styles**: Microservices, Monolith, Serverless, Event-Driven, Layered, Hexagonal
**Views**: Logical, Process, Development, Physical, Scenarios
**Time**: 2-4h. **Edge Cases**: Small team → modular monolith; high consistency → evaluate eventual; limited ops → fewer services

### Step 2: Component Design
Decompose architecture, define interfaces, specify responsibilities, define dependencies, select patterns, document internals, define error handling.
**Principles**: SOLID, DRY, KISS, YAGNI, Separation of Concerns, Law of Demeter
**Time**: 2-4h. **Edge Cases**: Too large → split; circular deps → interface/event; shared logic → extract

### Step 3: Data Model Design
Identify entities/attributes, define relationships, normalize, define keys, define indexes, plan migration, document constraints, define retention.
**Types**: Conceptual, Logical, Physical
**Time**: 2-4h. **Edge Cases**: Many-to-many → junction table; hierarchical → adjacency/nested set; large text → separate table; temporal → SCD/event sourcing

### Step 4: API Design
Define endpoints, specify request/response, define auth, document errors, define rate limiting, plan versioning, create spec, define pagination/filtering.
**Styles**: REST, GraphQL, gRPC, WebSocket
**Time**: 2-4h. **Edge Cases**: Large results → cursor pagination; complex queries → GraphQL; file uploads → multipart/S3; real-time → WebSocket/SSE

### Step 5: Design Validation
Review against requirements, validate constraints, assess quality attributes, conduct review, address gaps, validate scalability/security/performance.
**Time**: 1-2h. **Edge Cases**: Doesn't meet reqs → iterate; disagreement → facilitate; new constraints → update

### Step 6: Architecture Decision Records
Identify decisions, document context, list options, document choice with rationale, document trade-offs, get sign-off.
**Format**: Title, Status, Context, Decision, Consequences
**Time**: 1-2h. **Edge Cases**: Reversible → lower ceremony; irreversible → more scrutiny; contested → document dissent

### Step 7: Design Synthesis
Consolidate artifacts, create overview, document principles, note open issues, define entry criteria, prepare handoff.
**Time**: 1-2h. **Edge Cases**: Incomplete → document gaps; pending choices → set deadline; capacity concerns → phased

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Architecture addresses all requirements |
| QG2 | Components follow SOLID principles |
| QG3 | Data model normalized and indexed |
| QG4 | APIs follow best practices |
| QG5 | Security integrated into design |
| QG6 | Performance considerations documented |
| QG7 | ADRs created for significant decisions |
| QG8 | Design reviewed and validated |
| QG9 | Report follows template format |

## Anti-Patterns

1. **Big design up front** — Every detail before implementation
2. **Designing in a vacuum** — No input from implementers
3. **Pattern over-application** — Unnecessary complexity
4. **Ignoring non-functional** — Works but doesn't scale
5. **No ADRs** — Decisions undocumented

## Output

Use: `templates/design-document.md` | Prev: `02-analyze.md` | Next: `04-implement.md` | Capability: `capabilities/design.md`
