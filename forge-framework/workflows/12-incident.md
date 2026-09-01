# Workflow 12: Incident Management

**Duration**: 30 min - 24h | **Outputs**: Incident report, root cause analysis, preventive measures

## Trigger

- Production incident, service outage, performance degradation
- Security incident, data breach, compliance violation

## Steps

### Step 1: Detection and Classification
Detect incident (monitoring, alert, user report). Classify severity (P1-P4). Assign incident commander.
**Time**: 5-15 min.

### Step 2: Initial Response
Assemble response team. Implement immediate mitigation. Communicate status.
**Time**: 15-60 min.

### Step 3: Investigation
Gather logs, metrics, traces. Identify root cause. Document timeline.
**Time**: 1-8h.

### Step 4: Resolution
Implement fix. Verify resolution. Monitor for recurrence.
**Time**: 1-8h.

### Step 5: Post-Incident Review
Conduct blameless postmortem. Document timeline, root cause, impact. Identify preventive measures.
**Time**: 2-4h.

### Step 6: Preventive Measures
Implement preventive measures. Update runbooks. Share learnings.
**Time**: 2-8h.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Incident classified |
| QG2 | Immediate mitigation applied |
| QG3 | Root cause identified |
| QG4 | Resolution verified |
| QG5 | Postmortem complete |
| QG6 | Preventive measures documented |

## Anti-Patterns

1. **Blame culture** — Focusing on who not what
2. **Skipping postmortem** — Missing learning opportunity
3. **No preventive measures** — Recurring incidents
4. **Poor communication** — Stakeholders uninformed

## Edge Cases

- Multiple simultaneous incidents: Prioritization
- Partial data: Incomplete information
- Escalation fatigue: Too many escalations
- Stakeholder panic: Managed communication

## Output

Use: `templates/incident-report.md` | Capability: `capabilities/incident-management.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [62-incident-communication](workflows/62-incident-communication.md) | **Related** | Communicate during incidents |
| [63-post-incident-review](workflows/63-post-incident-review.md) | **Related** | Post-incident review |
| [57-business-continuity](workflows/57-business-continuity.md) | **Related** | Business continuity |
| [58-dr-testing](workflows/58-dr-testing.md) | **Related** | DR testing |
