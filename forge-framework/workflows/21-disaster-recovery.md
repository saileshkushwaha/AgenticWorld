# Workflow 21: Disaster Recovery

**Duration**: 4-16h | **Outputs**: DR plan, backup strategy, recovery procedures

## Trigger
- DR planning, business continuity, compliance requirement
- Post-incident DR review, infrastructure change

## Steps

### Step 1: Business Impact Analysis
Identify critical systems. Define RTO/RPO. Assess impact of downtime.
**Time**: 2-4h.

### Step 2: Risk Assessment
Identify threats (natural, technical, human). Assess probability and impact.
**Time**: 1-2h.

### Step 3: Strategy Definition
Define backup strategy (full, incremental, differential). Plan replication and failover.
**Time**: 2-4h.

### Step 4: Procedure Documentation
Document recovery steps. Define roles and responsibilities. Create runbooks.
**Time**: 2-4h.

### Step 5: Testing Plan
Define testing schedule. Plan tabletop exercises and full DR tests.
**Time**: 1-2h.

### Step 6: Reporting
Document DR plan, RTO/RPO, testing schedule. Get approval.
**Time**: 1-2h.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | BIA complete |
| QG2 | Risks assessed |
| QG3 | Strategy defined |
| QG4 | Procedures documented |
| QG5 | Testing planned |
| QG6 | Plan approved |

## Anti-Patterns

1. **Single point of failure** — No redundancy considered
2. **Untested backups** — Assumes backups work
3. **Unrealistic RTO/RPO** — Targets not achievable
4. **Ignored human factor** — Procedures too complex

## Edge Cases

- Partial failure: Graceful degradation
- Cascading failures: Circuit breakers
- Communication outage: Offline procedures
- Data corruption: Checksum validation
## Output

Use: `templates/dr-plan.md` | Capability: `capabilities/disaster-recovery.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [57-business-continuity](workflows/57-business-continuity.md) | **Related** | Business continuity planning |
| [58-dr-testing](workflows/58-dr-testing.md) | **Related** | DR testing execution |
| [59-failover-testing](workflows/59-failover-testing.md) | **Related** | Failover testing |
| [64-multi-region-deployment](workflows/64-multi-region-deployment.md) | **Related** | Multi-region deployment |
