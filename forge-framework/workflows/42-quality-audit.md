# Workflow 42: Quality Audit

**Duration**: 4-16h | **Outputs**: Quality audit report, nonconformance register, corrective action plan

## Trigger

- ISO certification audit, surveillance audit
- Customer complaint, quality incident
- Process improvement initiative, supplier evaluation
- Management review, continuous improvement

## Steps

### Step 1: Audit Planning
**Actions**: Define audit scope, objectives, and criteria. Develop audit plan, allocate resources, select audit team, establish timeline, communicate audit plan.
**Standards**: ISO 9001, ISO 19011, IATF 16949, AS9100.
**Output**: Audit plan | **Time**: 1-2h | **Tools**: Audit planning templates, resource allocation tools
**Edge Cases**: Conflicting priorities → negotiate scope; resource constraints → use risk-based approach; tight timeline → focus on high-risk areas; auditee unavailability → reschedule

### Step 2: Document Review
**Actions**: Review quality manuals, procedures, work instructions, records. Identify gaps and areas of concern.
**Sources**: Quality manual, procedures, work instructions, records, previous audit reports.
**Output**: Document review findings | **Time**: 2-4h | **Tools**: Document review checklists
**Edge Cases**: Missing documentation → request in advance; outdated documents → note for follow-up; remote documents → use electronic access; sensitive documents → coordinate with management

### Step 3: On-site Audit
**Actions**: Conduct interviews, observe processes, examine records, verify implementation. Gather objective evidence.
**Techniques**: Traceability, horizontal audit, vertical audit, checklist-based audit.
**Output**: Audit evidence | **Time**: 4-8h | **Tools**: Audit checklists, observation forms
**Edge Cases**: Uncooperative auditees → use alternative evidence; limited access → escalate to management; large populations → use sampling; electronic evidence → use data analytics

### Step 4: Findings Analysis
**Actions**: Analyze evidence against criteria, identify nonconformances, classify findings, determine root causes, develop recommendations.
**Classification**: Major NC, Minor NC, Opportunity for Improvement.
**Output**: Findings register | **Time**: 1-2h | **Tools**: Findings templates, root cause analysis tools
**Edge Cases**: Complex findings → use subject matter experts; disputed findings → facilitate discussion; systemic findings → expand scope; positive observations → document as well

### Step 5: Reporting
**Actions**: Document findings and recommendations, prepare draft audit report, obtain management response, finalize report.
**Report Structure**: Executive summary, scope, findings, recommendations, management response, action plan.
**Output**: Draft audit report | **Time**: 1-2h | **Tools**: Report templates, presentation tools
**Edge Cases**: Sensitive findings → use confidential reporting; technical findings → use visual aids; executive audience → focus on impact; distributed teams → use virtual presentations

### Step 6: Corrective Action Planning
**Actions**: Develop corrective action plans with management, define timelines and owners, establish follow-up procedures, track implementation.
**Tracking**: Action item register, follow-up schedule, escalation procedures.
**Output**: Corrective action plan | **Time**: 1-2h | **Tools**: Action plan templates, tracking tools
**Edge Cases**: Disputed actions → escalate to steering committee; resource constraints → prioritize; overdue actions → implement escalation; completed actions → verify effectiveness

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Audit scope defined |
| QG2 | Document review complete |
| QG3 | On-site audit complete |
| QG4 | Findings documented |
| QG5 | Corrective actions planned |
| QG6 | Report follows template |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Audit approach? | System audit / Process audit / Product audit | Audit objectives, stakeholder needs |
| DP2: Sampling method? | Statistical / Judgmental | Population size, risk level |
| DP3: Finding classification? | Major NC / Minor NC / OFI | Impact, likelihood, root cause |
| DP4: Reporting format? | Full report / Executive summary | Audience, complexity, urgency |

## Anti-Patterns

1. **Checklist audit** — Only checking boxes without understanding
2. **Blame game** — Focusing on people not processes
3. **Paper audit** — Only reviewing documents without observation
4. **One-time fix** — Not following up on corrective actions
5. **Audit theater** — Performing audits for show

## Edge Cases

- Remote audits: Use video conferencing and remote access
- Sensitive areas: Escalate through proper channels
- Complex nonconformances: Use cross-functional teams
- Supplier audits: Coordinate with procurement
- No previous audits: Conduct walkthrough first
- Large populations: Use statistical sampling

## Output

Use: `templates/quality-audit-report.md` | Capability: `capabilities/quality-audit.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [18-qa](workflows/18-qa.md) | **Related** | To audit QA processes |
| [41-internal-audit](workflows/41-internal-audit.md) | **Related** | To audit quality through internal audit |
| [43-process-audit](workflows/43-process-audit.md) | **Related** | To audit quality processes |

## Output

Use: `templates/quality-audit-report.md` | Capability: `capabilities/quality-audit.md`
