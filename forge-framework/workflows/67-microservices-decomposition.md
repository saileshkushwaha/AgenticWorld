# Workflow 67: Microservices Decomposition

**Duration**: 8-40h | **Outputs**: Decomposition strategy, service boundaries, migration plan, API contracts

## Trigger

- Monolith decomposition initiative, scalability improvement
- Team autonomy improvement, deployment independence
- Technology diversity requirement, organizational scaling
- Performance bottleneck in monolithic application

## Steps

### Step 1: Domain Analysis
Identify business domains and subdomains. Map domain relationships. Apply domain-driven design (DDD) principles. Identify bounded contexts. Document ubiquitous language.
**Time**: 4-8h. **Edge Cases**: Overlapping domains → clarify boundaries; legacy terminology → standardize; unclear ownership → assign domain owners.

### Step 2: Monolith Assessment
Analyze current monolith architecture. Identify coupling points. Map data dependencies. Assess deployment bottlenecks. Document technical debt.
**Time**: 2-4h. **Edge Cases**: Undocumented architecture → reverse engineer; spaghetti code → focus on entry points; shared databases → identify table ownership.

### Step 3: Service Boundary Design
Define service boundaries using DDD. Apply single responsibility principle. Design service interfaces. Plan data ownership. Define communication patterns.
**Time**: 4-8h. **Edge Cases**: Shared data → event-driven sync; cross-service transactions → saga pattern; common functionality → shared library vs service.

### Step 4: Decomposition Strategy
Select decomposition pattern (strangler fig, branch by abstraction). Prioritize services by value and risk. Define extraction order. Plan incremental migration. Design rollback procedures.
**Time**: 2-4h. **Edge Cases**: High-risk extractions → prototype first; dependency cycles → break with events; database decomposition → gradual table migration.

### Step 5: API Contract Design
Define API contracts per service. Select protocols (REST, gRPC, messaging). Design versioning strategy. Plan backward compatibility. Create API specifications.
**Time**: 4-8h. **Edge Cases**: Breaking changes → deprecation strategy; performance-critical paths → gRPC; async operations → event-driven.

### Step 6: Migration Execution
Implement extraction incrementally. Set up service infrastructure. Migrate data with dual-write. Validate functionality. Monitor performance. Decommission old code.
**Time**: 8-16h. **Edge Cases**: Data inconsistency → reconciliation jobs; performance degradation → rollback plan; team capacity → prioritize MVP services.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Domains identified and mapped |
| QG2 | Monolith assessed |
| QG3 | Service boundaries defined |
| QG4 | Decomposition strategy created |
| QG5 | API contracts designed |
| QG6 | Migration plan executed |

## Anti-Patterns

1. **Distributed monolith** — Services that must deploy together
2. **Chatty services** — Excessive inter-service communication
3. **Shared database** — Services coupled through data
4. **Premature decomposition** — Splitting before understanding boundaries

## Edge Cases

- Shared kernel → Extract as separate library
- Legacy database → Gradual table migration
- Cross-cutting concerns → Service mesh or shared library
- Team skill gaps → Training and pairing

## Output

Use: `templates/microservices-decomposition.md` | Capability: `capabilities/microservices-decomposition.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [08-modernize](workflows/08-modernize.md) | **Related** | Modernization |
| [03-design](workflows/03-design.md) | **Related** | Design |
| [49-api-design](workflows/49-api-design.md) | **Related** | API design |
| [68-domain-driven-design](workflows/68-domain-driven-design.md) | **Related** | DDD |
