# Workflow 45: Configuration Audit

**Duration**: 2-8h | **Outputs**: Configuration audit report, drift analysis, remediation plan

## Trigger

- Compliance requirement, security incident
- System hardening initiative, audit finding
- Regular configuration review, change validation
- Pre-deployment validation, certification requirement

## Steps

### Step 1: Baseline Definition
Define configuration baselines and audit criteria.
**Time**: 30-60 min.

### Step 2: Configuration Collection
Collect current configurations from target systems.
**Time**: 1-2h.

### Step 3: Compliance Comparison
Compare actual configurations against baselines.
**Time**: 2-4h.

### Step 4: Drift Analysis
Identify configuration drift and root causes.
**Time**: 1-2h.

### Step 5: Reporting
Document findings and remediation recommendations.
**Time**: 1-2h.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Baselines defined |
| QG2 | Configurations collected |
| QG3 | Compliance comparison complete |
| QG4 | Drift analysis documented |
| QG5 | Report follows template |

## Anti-Patterns

1. **Manual-only audit** — Not using automated tools
2. **Point-in-time audit** — Not establishing continuous monitoring
3. **Baseline neglect** — Not maintaining current baselines
4. **Remediation delay** — Not tracking findings to completion

## Edge Cases

- Cloud environments: Use cloud-native configuration tools
- Containerized environments: Audit container configurations
- Legacy systems: Document manual configurations
- Dynamic environments: Implement continuous monitoring

## Output

Use: `templates/configuration-audit-report.md` | Capability: `capabilities/configuration-audit.md`
