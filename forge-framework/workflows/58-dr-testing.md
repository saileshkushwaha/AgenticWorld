# Workflow 58: Disaster Recovery Testing

**Duration**: 4-20h | **Outputs**: DR test plan, test results, gap analysis, improvement roadmap

## Trigger

- Scheduled DR test, compliance requirement
- Post-incident review finding, infrastructure change
- New system deployment, DR plan update
- Audit requirement, certification maintenance

## Steps

### Step 1: Test Planning
Define test scope and objectives. Select test type (tabletop, simulation, full failover). Identify participants. Schedule test window. Define success criteria.
**Time**: 2-4h. **Edge Cases**: Production impact → isolated testing; remote teams → virtual participation; limited scope → prioritize critical systems.

### Step 2: Scenario Design
Design realistic disaster scenarios. Define injection points. Create timeline. Plan observation and documentation. Design rollback procedures.
**Time**: 2-4h. **Edge Cases**: Multiple scenarios → rotate coverage; cascading failures → include dependencies; partial failures → test degradation.

### Step 3: Pre-Test Preparation
Verify backup integrity. Confirm resource availability. Brief participants. Set up monitoring. Prepare communication channels.
**Time**: 1-2h. **Edge Cases**: Backup corruption → restore test first; resource conflicts → schedule around; new team members → additional briefing.

### Step 4: Test Execution
Execute test per plan. Document all actions and timelines. Monitor system behavior. Record metrics (RTO, RPO, data loss). Capture issues.
**Time**: 2-8h. **Edge Cases**: Test failure → activate rollback; unexpected issues → document and continue; communication failure → backup channels.

### Step 5: Post-Test Analysis
Compare results against objectives. Identify gaps and failures. Assess team performance. Document lessons learned. Calculate actual RTO/RPO.
**Time**: 2-4h. **Edge Cases**: Partial success → analyze what worked; missed objectives → root cause analysis; new risks discovered → update risk register.

### Step 6: Remediation Planning
Prioritize findings. Create remediation roadmap. Assign owners and timelines. Update DR plan. Schedule follow-up test.
**Time**: 1-2h. **Edge Cases**: Resource constraints → risk-based prioritization; systemic issues → process changes; vendor issues → escalate.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Test plan approved |
| QG2 | Scenario designed |
| QG3 | Pre-test checks passed |
| QG4 | Test executed and documented |
| QG5 | Analysis complete |
| QG6 | Remediation plan created |

## Anti-Patterns

1. **Checkbox testing** — Going through motions without real validation
2. **No rollback plan** — Unable to recover from failed test
3. **Ignoring failures** — Not addressing test findings
4. **Infrequent testing** — Testing only when required

## Edge Cases

- Production impact → Use isolated test environment
- Failed failover → Activate backup recovery procedure
- Partial success → Document what worked for future
- Communication failure → Test backup communication channels

## Output

Use: `templates/dr-test-report.md` | Capability: `capabilities/dr-testing.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [21-disaster-recovery](workflows/21-disaster-recovery.md) | **Related** | DR plan creation |
| [57-business-continuity](workflows/57-business-continuity.md) | **Related** | Business continuity planning |
| [59-failover-testing](workflows/59-failover-testing.md) | **Related** | Failover testing |
| [12-incident](workflows/12-incident.md) | **Related** | Incident response |
