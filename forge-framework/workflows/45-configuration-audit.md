# Workflow 45: Configuration Audit

**Duration**: 2-8h | **Outputs**: Configuration audit report, drift analysis, remediation plan

## Trigger

- Compliance requirement, security incident
- System hardening initiative, audit finding
- Regular configuration review, change validation
- Pre-deployment validation, certification requirement

## Steps

### Step 1: Baseline Definition
**Actions**: Define configuration baselines, identify systems to audit, determine audit criteria, select audit tools.
**Baselines**: CIS Benchmark, STIG, Custom Policy, Vendor Best Practice.
**Output**: Baseline document | **Time**: 30-60 min | **Tools**: Baseline templates, benchmark databases
**Edge Cases**: Cloud environments → use cloud-native configuration tools; containerized environments → audit container configurations; legacy systems → document manual configurations; dynamic environments → implement continuous monitoring

### Step 2: Configuration Collection
**Actions**: Collect current configurations from target systems, document configuration state, verify completeness.
**Methods**: Automated scanning, manual collection, API queries, agent-based collection.
**Output**: Configuration inventory | **Time**: 1-2h | **Tools**: Configuration scanning tools, APIs
**Edge Cases**: Cloud environments → use cloud APIs; containerized environments → use container orchestration tools; legacy systems → use manual collection; dynamic environments → use real-time monitoring

### Step 3: Compliance Comparison
**Actions**: Compare actual configurations against baselines, identify deviations, calculate compliance scores.
**Methods**: Automated comparison, manual review, rule-based assessment.
**Output**: Compliance comparison results | **Time**: 2-4h | **Tools**: Comparison tools, compliance dashboards
**Edge Cases**: Complex configurations → use specialized tools; custom baselines → develop custom rules; conflicting baselines → prioritize by risk; partial compliance → document exceptions

### Step 4: Drift Analysis
**Actions**: Identify configuration drift, determine root causes, assess impact, prioritize remediation.
**Techniques**: Change detection, trend analysis, root cause analysis.
**Output**: Drift analysis | **Time**: 1-2h | **Tools**: Drift detection tools, change tracking systems
**Edge Cases**: Legitimate changes → document approval; unauthorized changes → investigate; environmental drift → assess impact; recurring drift → implement preventive controls

### Step 5: Reporting
**Actions**: Document findings and recommendations, prepare draft audit report, obtain management response, finalize report.
**Report Structure**: Executive summary, scope, findings, recommendations, management response, action plan.
**Output**: Configuration audit report | **Time**: 1-2h | **Tools**: Report templates, presentation tools
**Edge Cases**: Sensitive findings → use confidential reporting; technical findings → use visual aids; executive audience → focus on impact; distributed teams → use virtual presentations

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Baselines defined |
| QG2 | Configurations collected |
| QG3 | Compliance comparison complete |
| QG4 | Drift analysis documented |
| QG5 | Report follows template |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Audit scope? | Full audit / Targeted audit | Risk level, resource availability |
| DP2: Baseline standard? | CIS / STIG / Custom | Compliance requirements, industry |
| DP3: Drift tolerance? | Zero tolerance / Threshold-based | Risk appetite, operational needs |
| DP4: Reporting format? | Full report / Executive summary | Audience, complexity, urgency |

## Anti-Patterns

1. **Manual-only audit** — Not using automated tools
2. **Point-in-time audit** — Not establishing continuous monitoring
3. **Baseline neglect** — Not maintaining current baselines
4. **Remediation delay** — Not tracking findings to completion
5. **Audit theater** — Performing audits for show

## Edge Cases

- Cloud environments: Use cloud-native configuration tools
- Containerized environments: Audit container configurations
- Legacy systems: Document manual configurations
- Dynamic environments: Implement continuous monitoring
- Sensitive configurations: Apply access controls
- Cross-platform configurations: Use multi-platform tools

## Output

Use: `templates/configuration-audit-report.md` | Capability: `capabilities/configuration-audit.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [16-configuration](workflows/16-configuration.md) | **Related** | To audit configuration management |
| [43-process-audit](workflows/43-process-audit.md) | **Related** | To audit configuration processes |
| [10-security](workflows/10-security.md) | **Related** | To audit security configurations |

## Output

Use: `templates/configuration-audit-report.md` | Capability: `capabilities/configuration-audit.md`
