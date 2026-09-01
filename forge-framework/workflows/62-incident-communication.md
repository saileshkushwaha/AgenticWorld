# Workflow 62: Incident Communication

**Duration**: 1-8h | **Outputs**: Communication plan, stakeholder notifications, status updates, post-incident summary

## Trigger

- Security incident, service outage, data breach
- Major deployment failure, customer-impacting issue
- Compliance breach, regulatory notification requirement
- Any P1/P2 incident requiring stakeholder communication

## Steps

### Step 1: Incident Assessment
Assess incident severity and impact. Identify affected systems and users. Determine communication urgency. Identify regulatory notification requirements.
**Time**: 15-30 min. **Edge Cases**: Unclear scope → assume worst case; evolving situation → prepare multiple scenarios; multiple incidents → coordinate messaging.

### Step 2: Communication Plan
Identify stakeholders (internal, external, regulatory, media). Define communication channels. Assign spokespersons. Create message templates. Define approval process.
**Time**: 30-60 min. **Edge Cases**: Executive unavailability → designate backup; media inquiry → prepare holding statement; regulatory deadlines → prioritize.

### Step 3: Initial Notification
Send initial notification to stakeholders. Provide known facts. Set expectations for updates. Establish communication channel. Acknowledge the issue.
**Time**: 15-30 min. **Edge Cases**: Incomplete information → be transparent about what's known; customer panic → emphasize actions being taken; internal rumors → communicate early.

### Step 4: Status Updates
Provide regular updates per schedule. Share progress and findings. Update on resolution ETA. Address stakeholder concerns. Maintain transparency.
**Time**: Ongoing (15-30 min per update). **Edge Cases**: No progress → communicate what's being done; ETA changes → explain why; technical details → translate for audience.

### Step 5: Resolution Notification
Announce incident resolution. Summarize impact and duration. Share root cause (high level). Outline preventive measures. Thank stakeholders.
**Time**: 15-30 min. **Edge Cases**: Partial resolution → be clear about scope; recurring issue → address concerns; sensitive cause → careful wording.

### Step 6: Post-Incident Communication
Send detailed post-incident report. Share lessons learned. Communicate preventive actions. Address media inquiries if needed. Archive communications.
**Time**: 1-2h. **Edge Cases**: Legal implications → review before sending; customer compensation → coordinate with support; regulatory follow-up → prepare documentation.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Incident assessed |
| QG2 | Communication plan created |
| QG3 | Initial notification sent |
| QG4 | Regular updates provided |
| QG5 | Resolution communicated |
| QG6 | Post-incident report delivered |

## Anti-Patterns

1. **No communication** — Stakeholders learning from other sources
2. **Over-promising** — Committing to unrealistic ETAs
3. **Technical jargon** — Confusing non-technical stakeholders
4. **Blame language** — Focusing on fault not resolution

## Edge Cases

- Data breach → Regulatory notification within 72 hours (GDPR)
- Media attention → Designated spokesperson only
- Customer data exposure → Direct customer notification
- Executive involvement → Pre-brief before public statements

## Output

Use: `templates/incident-communication-plan.md` | Capability: `capabilities/incident-communication.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [12-incident](workflows/12-incident.md) | **Related** | Incident management |
| [63-post-incident-review](workflows/63-post-incident-review.md) | **Related** | Post-incident review |
| [25-stakeholder](workflows/25-stakeholder.md) | **Related** | Stakeholder management |
| [22-compliance](workflows/22-compliance.md) | **Related** | Regulatory notification |
