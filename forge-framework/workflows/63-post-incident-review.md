# Workflow 63: Post-Incident Review

**Duration**: 2-12h | **Outputs**: Post-incident review document, action items, timeline, lessons learned

## Trigger

- P1/P2 incident resolution, significant customer impact
- Security incident, data breach
- Compliance requirement, recurring incidents
- Process improvement initiative

## Steps

### Step 1: Timeline Reconstruction
Document incident timeline from detection to resolution. Include all actions taken. Note decision points. Identify gaps in monitoring. Capture exact timestamps.
**Time**: 1-2h. **Edge Cases**: Missing data → estimate with notation; conflicting accounts → document all perspectives; automated actions → include system logs.

### Step 2: Root Cause Analysis
Apply root cause analysis (5 Whys, fishbone, fault tree). Identify contributing factors. Distinguish symptoms from causes. Validate root cause. Document evidence.
**Time**: 1-3h. **Edge Cases**: Multiple root causes → document all; unclear cause → use best evidence; systemic issues → identify patterns.

### Step 3: Impact Assessment
Quantify impact (users affected, duration, revenue loss, data exposed). Assess customer impact. Evaluate reputational damage. Document SLA/SLO breaches. Calculate cost.
**Time**: 1-2h. **Edge Cases**: Intangible impact → qualitative assessment; delayed impact → estimate; indirect impact → document if measurable.

### Step 4: Response Evaluation
Evaluate response effectiveness. Identify what worked well. Identify what didn't work. Assess communication effectiveness. Review escalation procedures. Evaluate tooling.
**Time**: 1-2h. **Edge Cases**: Blame culture → focus on process not people; incomplete information → note assumptions; external factors → document context.

### Step 5: Action Item Creation
Create specific, measurable action items. Assign owners and priorities. Define completion deadlines. Identify quick wins. Plan systemic improvements.
**Time**: 1-2h. **Edge Cases**: Resource constraints → prioritize by risk; conflicting priorities → escalate; long-term items → break into phases.

### Step 6: Documentation and Sharing
Write blameless post-incident review. Share with relevant teams. Present to leadership. Update runbooks. Track action items. Schedule follow-up.
**Time**: 1-2h. **Edge Cases**: Sensitive content → restrict distribution; legal review → coordinate timing; external sharing → anonymize.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Timeline complete and accurate |
| QG2 | Root cause identified |
| QG3 | Impact assessed and quantified |
| QG4 | Response evaluated |
| QG5 | Action items created with owners |
| QG6 | Document shared and tracked |

## Anti-Patterns

1. **Blame culture** — Focusing on who not what
2. **No action items** — Review without improvement
3. **Vague recommendations** — "Be better" without specifics
4. **Not sharing** — Keeping findings internal

## Edge Cases

- Recurring incident → Deeper systemic analysis required
- External cause → Document vendor/process failures
- Partial resolution → Include ongoing risk assessment
- Multiple teams → Coordinate joint review

## Output

Use: `templates/post-incident-review.md` | Capability: `capabilities/post-incident-review.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [12-incident](workflows/12-incident.md) | **Related** | Incident management |
| [62-incident-communication](workflows/62-incident-communication.md) | **Related** | Incident communication |
| [35-retrospective](workflows/35-retrospective.md) | **Related** | Sprint retrospectives |
| [36-technical-debt](workflows/36-technical-debt.md) | **Related** | Technical debt from incidents |
