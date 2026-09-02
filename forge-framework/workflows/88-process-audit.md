# Workflow 43: Process Audit

**Duration**: 2-8h | **Outputs**: Process audit report, findings register, improvement recommendations

## Trigger

- Process compliance review, efficiency improvement
- Quality incident, customer complaint
- New process implementation, process change
- Regular audit cycle, management request

## Steps

### Step 1: Process Identification
**Actions**: Identify process to be audited, define scope and objectives, determine audit criteria, select audit team.
**Criteria**: Risk level, performance, compliance, change history, complaint history.
**Output**: Audit scope document | **Time**: 30-60 min | **Tools**: Process maps, risk registers
**Edge Cases**: Informal processes → document as-is state; cross-functional processes → coordinate with multiple owners; automated processes → review system configurations; remote processes → use video observation

### Step 2: Document Review
**Actions**: Review process documentation, procedures, work instructions, records. Identify gaps and areas of concern.
**Sources**: Process maps, procedures, work instructions, records, previous audit reports.
**Output**: Document review findings | **Time**: 1-2h | **Tools**: Document review checklists
**Edge Cases**: Missing documentation → request in advance; outdated documents → note for follow-up; remote documents → use electronic access; sensitive documents → coordinate with management

### Step 3: Process Observation
**Actions**: Observe process execution, interview process participants, verify practices against documentation, identify deviations.
**Techniques**: Walkthrough, observation, interview, document review, sampling.
**Output**: Observation findings | **Time**: 2-4h | **Tools**: Observation forms, interview guides
**Edge Cases**: Informal processes → document as-is and to-be states; cross-functional processes → coordinate with multiple owners; automated processes → review system configurations; remote processes → use video observation

### Step 4: Compliance Assessment
**Actions**: Assess compliance with procedures and standards, identify gaps, classify findings, determine root causes, develop recommendations.
**Classification**: Conformity, Nonconformity, Opportunity for Improvement.
**Output**: Compliance assessment | **Time**: 1-2h | **Tools**: Assessment matrices, findings templates
**Edge Cases**: Complex findings → use subject matter experts; disputed findings → facilitate discussion; systemic findings → expand scope; positive observations → document as well

### Step 5: Reporting
**Actions**: Document findings and recommendations, prepare draft audit report, obtain management response, finalize report, distribute to stakeholders.
**Report Structure**: Executive summary, scope, findings, recommendations, management response, action plan.
**Output**: Process audit report | **Time**: 1-2h | **Tools**: Report templates, presentation tools
**Edge Cases**: Sensitive findings → use confidential reporting; technical findings → use visual aids; executive audience → focus on impact; distributed teams → use virtual presentations

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Process identified and scoped |
| QG2 | Document review complete |
| QG3 | Process observation complete |
| QG4 | Compliance assessment documented |
| QG5 | Report follows template |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Audit approach? | Traceability / Horizontal / Vertical | Audit objectives, process complexity |
| DP2: Sampling method? | Statistical / Judgmental | Population size, risk level |
| DP3: Finding classification? | Conformity / Nonconformity / Opportunity | Impact, likelihood, root cause |
| DP4: Reporting format? | Full report / Executive summary | Audience, complexity, urgency |

## Anti-Patterns

1. **Documentation-only audit** — Not observing actual process
2. **Blame-focused audit** — Focusing on people not process
3. **One-time audit** — Not following up on improvements
4. **Scope creep** — Expanding beyond audit objectives
5. **Audit theater** — Performing audits for show

## Edge Cases

- Informal processes: Document as-is and to-be states
- Cross-functional processes: Coordinate with multiple owners
- Automated processes: Review system configurations
- Remote processes: Use video observation
- No previous audits: Conduct walkthrough first
- Large populations: Use statistical sampling

## Output

Use: `templates/process-audit-report.md` | Capability: `capabilities/process-audit.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [42-quality-audit](workflows/87-quality-audit.md) | **Related** | To audit quality processes |
| [45-configuration-audit](workflows/45-configuration-audit.md) | **Related** | To audit configuration processes |
| [41-internal-audit](workflows/41-internal-audit.md) | **Related** | To audit through internal audit |

