# Workflow 44: Data Audit

**Duration**: 4-16h | **Outputs**: Data audit report, quality assessment, remediation plan

## Trigger

- Data quality incident, compliance requirement
- Data migration validation, system integration
- Regular data governance review, audit requirement
- Data privacy assessment, regulatory request

## Steps

### Step 1: Audit Scoping
Define data domains, sources, and audit criteria.
**Time**: 1-2h.

### Step 2: Data Profiling
Analyze data patterns, distributions, and anomalies.
**Time**: 2-4h.

### Step 3: Quality Assessment
Assess data quality dimensions (accuracy, completeness, consistency, timeliness).
**Time**: 2-4h.

### Step 4: Security Assessment
Evaluate data access controls, encryption, and masking.
**Time**: 1-2h.

### Step 5: Compliance Assessment
Assess compliance with data regulations and policies.
**Time**: 1-2h.

### Step 6: Reporting and Remediation
Document findings and develop remediation plan.
**Time**: 2-4h.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Audit scope defined |
| QG2 | Data profiling complete |
| QG3 | Quality assessment documented |
| QG4 | Security assessment complete |
| QG5 | Compliance assessment complete |
| QG6 | Report follows template |

## Anti-Patterns

1. **Sample-only audit** — Not assessing full data population
2. **Technical-only audit** — Ignoring business context
3. **One-time audit** — Not establishing ongoing monitoring
4. **Tool-only audit** — Relying solely on automated tools

## Edge Cases

- Large data volumes: Use statistical sampling
- Sensitive data: Apply data masking
- Distributed data: Coordinate across systems
- Legacy data: Assess historical data quality

## Output

Use: `templates/data-audit-report.md` | Capability: `capabilities/data-audit.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [20-data-migration](workflows/20-data-migration.md) | **Related** | To audit data during migration |
| [39-secure-data-handling](workflows/39-secure-data-handling.md) | **Related** | To audit data handling security |
| [41-internal-audit](workflows/41-internal-audit.md) | **Related** | To audit data through internal audit |

## Output

Use: `templates/data-audit-report.md` | Capability: `capabilities/data-audit.md`
