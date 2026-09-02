# Workflow 44: Data Audit

**Duration**: 4-16h | **Outputs**: Data audit report, quality assessment, remediation plan

## Trigger

- Data quality incident, compliance requirement
- Data migration validation, system integration
- Regular data governance review, audit requirement
- Data privacy assessment, regulatory request

## Steps

### Step 1: Audit Scoping
**Actions**: Define data domains to audit, establish audit criteria, determine audit scope, select audit team, develop audit plan.
**Domains**: Customer data, financial data, operational data, HR data, product data.
**Output**: Audit scope document | **Time**: 1-2h | **Tools**: Data dictionaries, data catalogs
**Edge Cases**: Large data volumes → use statistical sampling; sensitive data → apply data masking; distributed data → coordinate across systems; legacy data → assess historical data quality

### Step 2: Data Profiling
**Actions**: Analyze data patterns, distributions, and anomalies. Identify data quality issues.
**Techniques**: Pattern analysis, distribution analysis, anomaly detection, statistical analysis.
**Output**: Data profiling results | **Time**: 2-4h | **Tools**: Data profiling tools, SQL queries
**Edge Cases**: Large datasets → use sampling; sensitive data → use masked data; complex data → use specialized tools; real-time data → use streaming analytics

### Step 3: Quality Assessment
**Actions**: Assess data quality dimensions (accuracy, completeness, consistency, timeliness, uniqueness, validity). Calculate quality scores.
**Dimensions**: Accuracy, completeness, consistency, timeliness, uniqueness, validity.
**Output**: Quality assessment | **Time**: 2-4h | **Tools**: Quality assessment templates, scoring tools
**Edge Cases**: Missing data → document gaps; inconsistent data → identify root causes; outdated data → assess timeliness; duplicate data → calculate duplication rate

### Step 4: Security Assessment
**Actions**: Evaluate data access controls, encryption, masking, backup procedures. Identify security gaps.
**Controls**: Access control, encryption, masking, backup, retention.
**Output**: Security assessment | **Time**: 1-2h | **Tools**: Security assessment checklists
**Edge Cases**: Cloud data → use cloud-native tools; sensitive data → apply masking; distributed data → coordinate across systems; legacy data → document manual controls

### Step 5: Compliance Assessment
**Actions**: Assess compliance with data regulations and policies. Identify compliance gaps.
**Regulations**: GDPR, CCPA, HIPAA, PCI DSS.
**Output**: Compliance assessment | **Time**: 1-2h | **Tools**: Compliance checklists
**Edge Cases**: Cross-border data → assess transfer mechanisms; sensitive data → apply stricter controls; new regulations → update assessment; conflicting regulations → consult legal

### Step 6: Reporting and Remediation
**Actions**: Document findings and recommendations, develop remediation plan, define timelines and owners, track implementation.
**Report Structure**: Executive summary, scope, findings, recommendations, remediation plan.
**Output**: Data audit report | **Time**: 2-4h | **Tools**: Report templates, tracking tools
**Edge Cases**: Sensitive findings → use confidential reporting; technical findings → use visual aids; executive audience → focus on impact; distributed teams → use virtual presentations

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Audit scope defined |
| QG2 | Data profiling complete |
| QG3 | Quality assessment documented |
| QG4 | Security assessment complete |
| QG5 | Compliance assessment complete |
| QG6 | Report follows template |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Audit scope? | Full audit / Targeted audit | Risk level, resource availability |
| DP2: Sampling method? | Statistical / Judgmental | Population size, risk level |
| DP3: Quality dimensions? | All / Priority-based | Audit objectives, stakeholder needs |
| DP4: Reporting format? | Full report / Executive summary | Audience, complexity, urgency |

## Anti-Patterns

1. **Sample-only audit** — Not assessing full data population
2. **Technical-only audit** — Ignoring business context
3. **One-time audit** — Not establishing ongoing monitoring
4. **Tool-only audit** — Relying solely on automated tools
5. **Data hoarding** — Collecting data without purpose

## Edge Cases

- Large data volumes: Use statistical sampling
- Sensitive data: Apply data masking
- Distributed data: Coordinate across systems
- Legacy data: Assess historical data quality
- Real-time data: Use streaming analytics
- Cross-border data: Assess transfer mechanisms

## Output

Use: `templates/data-audit-report.md` | Capability: `capabilities/data-audit.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [20-data-migration](workflows/20-data-migration.md) | **Related** | To audit data during migration |
| [39-secure-data-handling](workflows/84-secure-data-handling.md) | **Related** | To audit data handling security |
| [41-internal-audit](workflows/41-internal-audit.md) | **Related** | To audit data through internal audit |

