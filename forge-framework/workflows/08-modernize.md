# Workflow 08: Modernization

**Duration**: Days to months | **Outputs**: Assessment report, migration strategy, migration plan, validation report

## Trigger

- Legacy migration, tech stack upgrade, debt reduction, performance improvement, security remediation, architecture evolution, platform migration

## Steps

### Step 1: Current State Assessment
Inventory systems, document architecture, identify pain points, assess debt, evaluate security, measure performance, document dependencies, assess team.
**Areas**: Code quality, Architecture, Infrastructure, Security, Performance, Maintainability
**Time**: 2-8h. **Edge Cases**: No docs → reverse-engineer; unavailable devs → code analysis; partial → critical paths first

### Step 2: Modernization Goals
Define objectives, identify success criteria, prioritize areas, define scope, set timeline, estimate resources, identify risks, get alignment.
**Categories**: Performance, Scalability, Security, Maintainability, Cost, Capabilities
**Time**: 1-2h. **Edge Cases**: Conflicts → facilitate; unrealistic → phased; budget → highest-ROI

### Step 3: Migration Strategy
Define approach, identify phases, plan data/integration migration, define testing, create rollback, plan coexistence, define cutover.
**Approaches**: Big Bang, Incremental, Strangler Fig, Parallel Run, Lift and Shift, Replatform, Refactor
**Time**: 2-4h. **Edge Cases**: Data consistency → dual-write/CDC; integration deps → map/test; rollback → per-phase

### Step 4: Implementation Planning
Break into phases, define dependencies, create tasks, estimate effort, assign, define milestones, plan testing/rollback per phase.
**Time**: 2-4h. **Edge Cases**: Capacity → extend; external deps → coordinate; scope creep → change control

### Step 5: Modernization Execution
Execute in phases, migrate data, refactor code, update infrastructure, implement components, integrate, test at boundaries, document.
**Principles**: Small increments, verify after each, maintain working system, keep rollback, communicate, update docs
**Time**: Weeks-months. **Edge Cases**: Complexity → reassess; performance → profile/rollback; data failure → backup/retry

### Step 6: Validation and Testing
Verify functional equivalence, validate performance, test integrations, test data, test rollback, UAT, verify security, validate criteria.
**Time**: 2-8h/phase. **Edge Cases**: Differences → document/sign-off; performance → profile/adjust; discrepancies → fix/re-migrate

### Step 7: Modernization Reporting
Document outcomes, compare metrics, document lessons, update architecture docs, update runbooks, share, plan improvement.
**Time**: 1-2h. **Edge Cases**: Goals not met → document gaps; benefits → share; new issues → backlog

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Current state fully assessed |
| QG2 | Goals defined and approved |
| QG3 | Migration strategy documented |
| QG4 | Implementation plan created |
| QG5 | Each phase validated |
| QG6 | Success criteria met |
| QG7 | Documentation updated |

## Anti-Patterns

1. **Big bang rewrite** — Everything at once
2. **Lift and shift** — No improvement
3. **No rollback** — No revert plan
4. **Ignoring data** — Code only
5. **No coexistence** — No parallel plan

## Output

Use: `templates/modernization-plan.md` | Prev: `07-deploy.md` | Next: `03-design.md` | Capability: `capabilities/modernization.md`
