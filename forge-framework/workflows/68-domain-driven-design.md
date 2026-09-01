# Workflow 68: Domain-Driven Design

**Duration**: 4-20h | **Outputs**: Domain model, bounded contexts, ubiquitous language, context maps

## Trigger

- Complex domain modeling, microservices boundary definition
- Business-technical alignment improvement, legacy system refactoring
- New product development, domain complexity management
- Team communication improvement, ubiquitous language creation

## Steps

### Step 1: Domain Discovery
Conduct domain expert interviews. Identify core domains and subdomains. Map business processes. Document domain rules. Identify domain events.
**Time**: 2-4h. **Edge Cases**: Multiple expert perspectives → reconcile; tacit knowledge → workshops; conflicting rules → escalate.

### Step 2: Ubiquitous Language
Create shared vocabulary. Define terms precisely. Document synonyms and translations. Validate with domain experts. Maintain glossary.
**Time**: 1-2h. **Edge Cases**: Same term different meanings → qualify by context; legacy terminology → migration plan; technical vs business terms → bridge.

### Step 3: Bounded Context Definition
Identify context boundaries. Define context relationships. Map context integration patterns. Document boundary rules. Validate with stakeholders.
**Time**: 2-4h. **Edge Cases**: Overlapping contexts → clarify ownership; legacy boundaries → gradual migration; team boundaries → align with contexts.

### Step 4: Strategic Design
Define core domains and supporting domains. Map context relationships (partnership, customer-supplier, anti-corruption layer). Design context mapping. Plan team alignment.
**Time**: 2-4h. **Edge Cases**: Shared kernels → collaboration plan; conformist relationships → document constraints; separate ways → justify independence.

### Step 5: Tactical Design
Design aggregates and entities. Define value objects. Implement domain events. Design repositories. Apply invariants and business rules.
**Time**: 2-4h. **Edge Cases**: Large aggregates → split by transaction boundary; complex validation → specification pattern; eventual consistency → saga pattern.

### Step 6: Model Validation
Conduct domain story telling. Validate with event storming workshops. Review with domain experts. Refine based on feedback. Document decisions.
**Time**: 1-2h. **Edge Cases**: Model doesn't fit → iterate; expert unavailable → document assumptions; scope creep → timebox.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Domain discovered and documented |
| QG2 | Ubiquitous language defined |
| QG3 | Bounded contexts identified |
| QG4 | Strategic design complete |
| QG5 | Tactical design implemented |
| QG6 | Model validated with experts |

## Anti-Patterns

1. **Anemic domain model** — Logic in services not domain objects
2. **Big ball of mud** — No clear boundaries
3. **Language pollution** — Technical terms leaking into business language
4. **Model-code gap** — Design not reflected in implementation

## Edge Cases

- Legacy system constraints → Anti-corruption layer
- Multiple bounded contexts sharing data → Event-driven sync
- Cross-domain business rules → Domain events
- Rapidly evolving domains → Iterative refinement

## Output

Use: `templates/domain-driven-design.md` | Capability: `capabilities/domain-driven-design.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [67-microservices-decomposition](workflows/67-microservices-decomposition.md) | **Related** | Service decomposition |
| [03-design](workflows/03-design.md) | **Related** | Design |
| [50-database-design](workflows/50-database-design.md) | **Related** | Database design |
| [02-analyze](workflows/02-analyze.md) | **Related** | Analysis |
