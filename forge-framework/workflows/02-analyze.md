# Workflow 02: Analysis

**Duration**: 4-16h | **Outputs**: Requirements doc, feasibility assessment, risk register, trade-off analysis

## Trigger

- Requirements analysis/refinement, feasibility assessment, risk identification
- Constraint documentation, business case evaluation, trade-off analysis

## Steps

### Step 1: Requirements Elicitation
Gather functional/non-functional requirements, identify stakeholders, document user stories, prioritize (MoSCoW), validate.
**Types**: Functional, Performance, Security, Reliability, Usability, Compliance
**Time**: 2-4h. **Edge Cases**: Unavailable → async; conflicts → facilitate; vague → prototypes; too many → MoSCoW

### Step 2: Requirements Analysis
Check completeness, consistency, testability, feasibility. Identify ambiguity, refine, create acceptance criteria.
**Techniques**: Traceability matrix, dependency analysis, conflict resolution
**Time**: 1-2h. **Edge Cases**: Circular deps → break; untestable → rewrite; conflicts → facilitate

### Step 3: Feasibility Study
**Technical**: Readiness, integration, constraints, team, infrastructure. **Economic**: Costs, ROI, TCO, payback. **Operational**: Readiness, process changes, training, impact, timeline.
**Time**: 2-4h. **Edge Cases**: Infeasible → alternatives; negative ROI → recommend against; unready → phased

### Step 4: Risk Assessment
Identify risks, categorize, assess probability/impact, calculate score, prioritize, develop mitigations.
**Categories**: Technical, Schedule, Cost, Operational, External
**Time**: 1-2h. **Edge Cases**: Too many → top 10; low-prob high-impact → contingency; interdependent → combined

### Step 5: Constraint Identification
Document technical, business, regulatory, organizational, environmental constraints. Assess impact.
**Time**: 30-60 min. **Edge Cases**: Over-constrained → flexible; conflicting → prioritize; hidden → probe

### Step 6: Trade-off Analysis
Identify decisions, define/weight criteria, score options, calculate weighted scores, identify trade-offs, recommend.
**Frameworks**: SWOT, cost-benefit, decision matrix, Pareto
**Time**: 1-2h. **Edge Cases**: Equal → add criteria/PoC; disagreement → document; new options → re-run

### Step 7: Analysis Synthesis
Consolidate findings, create summary, document findings/recommendations, note assumptions, define entry criteria, prepare handoff.
**Time**: 1-2h. **Edge Cases**: Inconclusive → more research; disagreement → document; scope changed → update

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | All requirement types addressed |
| QG2 | Requirements testable and unambiguous |
| QG3 | Feasibility assessed across all dimensions |
| QG4 | Risks identified with mitigations |
| QG5 | Constraints documented and assessed |
| QG6 | Trade-offs analyzed with clear rationale |
| QG7 | Stakeholder validation obtained |
| QG8 | Report follows template format |

## Anti-Patterns

1. **Vague requirements** — Ambiguous without clarification
2. **Ignoring non-functional** — Features only
3. **Optimistic risk assessment** — Underestimating
4. **Analysis paralysis** — Too long without deciding
5. **No stakeholder validation** — Not confirming

## Output

Use: `templates/analysis-report.md` | Prev: `01-research.md` | Next: `03-design.md` | Capability: `capabilities/analysis.md`
