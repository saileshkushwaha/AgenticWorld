# Workflow 41: Internal Audit

**Duration**: 4-20h | **Outputs**: Internal audit report, findings register, action plan, remediation tracking

## Trigger

- Annual audit plan execution, management request
- Regulatory requirement, compliance incident
- Process improvement initiative, risk assessment finding
- Post-implementation review, vendor assessment

## Steps

### Step 1: Audit Planning
**Actions**: Define audit scope, objectives, and criteria. Develop audit plan, allocate resources, assign audit team, establish timeline, communicate audit plan to auditees.
**Standards**: IIA Standards, ISO 19011, ISACA IT Audit Framework.
**Output**: Audit plan | **Time**: 1-2h | **Tools**: Audit planning templates, resource allocation tools
**Edge Cases**: Conflicting priorities → negotiate scope; resource constraints → use risk-based approach; tight timeline → focus on high-risk areas; auditee unavailability → reschedule

### Step 2: Fieldwork Preparation
**Actions**: Gather background information, review previous audit reports, prepare audit programs and checklists, identify key contacts, schedule interviews.
**Sources**: Previous audit reports, process documentation, organizational charts, risk register.
**Output**: Audit programs and checklists | **Time**: 1-2h | **Tools**: Audit checklists, interview guides
**Edge Cases**: No previous audits → conduct walkthrough first; missing documentation → request in advance; remote auditees → prepare virtual tools; sensitive areas → coordinate with management

### Step 3: Evidence Gathering
**Actions**: Conduct interviews, review documents, observe processes, perform testing, gather sufficient appropriate evidence, document working papers.
**Methods**: Interviews, document review, observation, reperformance, sampling, confirmation.
**Output**: Working papers and evidence | **Time**: 4-8h | **Tools**: Working paper templates, sampling tools
**Edge Cases**: Uncooperative auditees → use alternative evidence; limited access → escalate to management; large populations → use statistical sampling; electronic evidence → use data analytics

### Step 4: Analysis and Evaluation
**Actions**: Analyze evidence against criteria, identify findings and root causes, classify findings by severity, develop recommendations, validate findings with auditees.
**Classification**: Critical, High, Medium, Low, Observation.
**Output**: Findings register | **Time**: 2-4h | **Tools**: Findings templates, root cause analysis tools
**Edge Cases**: Complex findings → use subject matter experts; disputed findings → facilitate discussion; systemic findings → expand scope; positive observations → document as well

### Step 5: Reporting
**Actions**: Document findings and recommendations, prepare draft audit report, obtain management response, finalize report, distribute to stakeholders.
**Report Structure**: Executive summary, scope, findings, recommendations, management response, action plan.
**Output**: Draft audit report | **Time**: 2-4h | **Tools**: Report templates, presentation tools
**Edge Cases**: Sensitive findings → use confidential reporting; technical findings → use visual aids; executive audience → focus on impact; distributed teams → use virtual presentations

### Step 6: Action Planning
**Actions**: Develop action plans with management, define remediation timelines and owners, establish follow-up procedures, track implementation.
**Tracking**: Action item register, follow-up schedule, escalation procedures.
**Output**: Action plan | **Time**: 1-2h | **Tools**: Action plan templates, tracking tools
**Edge Cases**: Disputed actions → escalate to steering committee; resource constraints → prioritize; overdue actions → implement escalation; completed actions → verify effectiveness

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Audit scope and objectives defined |
| QG2 | Evidence gathering complete |
| QG3 | Findings documented and validated |
| QG4 | Recommendations actionable |
| QG5 | Action plans agreed with management |
| QG6 | Report follows template |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Audit approach? | Risk-based / Compliance-based | Audit objectives, stakeholder needs |
| DP2: Sampling method? | Statistical / Judgmental | Population size, risk level |
| DP3: Finding severity? | Critical / High / Medium / Low | Impact, likelihood, root cause |
| DP4: Reporting format? | Full report / Executive summary | Audience, complexity, urgency |

## Anti-Patterns

1. **Scope creep** — Expanding audit beyond objectives
2. **Confirmation bias** — Seeking evidence that confirms preconceptions
3. **Finding fatigue** — Too many findings without prioritization
4. **Action paralysis** — No follow-up on recommendations
5. **Audit theater** — Performing audits for show

## Edge Cases

- Sensitive findings: Escalate through proper channels
- Uncooperative auditees: Use alternative evidence sources
- Complex findings: Use subject matter experts
- Cross-functional findings: Coordinate with multiple stakeholders
- No previous audits: Conduct walkthrough first
- Remote auditees: Use virtual audit techniques

## Output

Use: `templates/internal-audit-report.md` | Capability: `capabilities/internal-audit.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [40-risk-assessment](workflows/85-risk-assessment.md) | **Related** | To audit risk management |
| [22-compliance](workflows/22-compliance.md) | **Related** | To audit compliance |
| [42-quality-audit](workflows/87-quality-audit.md) | **Related** | To audit quality processes |

