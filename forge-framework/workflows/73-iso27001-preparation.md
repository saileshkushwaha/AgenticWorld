# Workflow 73: ISO 27001 Preparation

**Duration**: 20-80h | **Outputs**: ISMS documentation, risk assessment, control implementation, audit readiness report

## Trigger

- ISO 27001 certification initiative, information security management
- Customer requirement, enterprise sales requirement
- Regulatory compliance, security maturity improvement
- International expansion, data protection requirement

## Steps

### Step 1: Scope Definition
Define ISMS scope and boundaries. Identify assets in scope. Determine applicable exclusions. Document scope justification. Get management approval.
**Time**: 2-4h. **Edge Cases**: Complex organization → define clear boundaries; shared services → include/exclude rationale; cloud services → shared responsibility.

### Step 2: Risk Assessment
Identify information assets. Assess threats and vulnerabilities. Evaluate risk levels. Prioritize treatment. Create risk register.
**Time**: 4-8h. **Edge Cases**: Incomplete asset inventory → discovery first; qualitative vs quantitative → choose method; residual risk → document acceptance.

### Step 3: Control Selection
Review Annex A controls. Select applicable controls. Justify exclusions. Design control implementation. Map to existing practices.
**Time**: 4-8h. **Edge Cases**: Over-controls → risk-based approach; existing controls → map to ISO; compensating controls → document justification.

### Step 4: Policy Development
Develop information security policy. Create supporting policies (access, incident, BCP). Document procedures. Establish roles and responsibilities.
**Time**: 8-16h. **Edge Cases**: Existing policies → align with ISO; policy conflicts → resolve; policy enforcement → automation.

### Step 5: Implementation and Training
Implement selected controls. Conduct awareness training. Deploy technical controls. Document evidence. Track implementation progress.
**Time**: 8-24h. **Edge Cases**: Resource constraints → phased approach; resistance → management support; technical complexity → expert consultation.

### Step 6: Internal Audit
Conduct internal audit. Identify non-conformities. Implement corrective actions. Prepare for certification audit. Document readiness.
**Time**: 4-8h. **Edge Cases**: Major non-conformities → remediation plan; auditor independence → use external auditor; evidence gaps → document retroactively.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Scope defined and approved |
| QG2 | Risk assessment complete |
| QG3 | Controls selected and justified |
| QG4 | Policies developed |
| QG5 | Controls implemented |
| QG6 | Internal audit passed |

## Anti-Patterns

1. **Documentation-only** — Policies without implementation
2. **Checkbox compliance** — Implementing without understanding
3. **Scope too broad** — Including everything without justification
4. **No management commitment** — Without leadership support

## Edge Cases

- Cloud services → Shared responsibility model
- Remote work → Home office security controls
- Third-party risk → Vendor assessment program
- Legacy systems → Compensating controls

## Output

Use: `templates/iso27001-readiness-report.md` | Capability: `capabilities/iso27001-preparation.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [22-compliance](workflows/22-compliance.md) | **Related** | Compliance audit |
| [57-business-continuity](workflows/57-business-continuity.md) | **Related** | Business continuity |
| [56-iam](workflows/56-iam.md) | **Related** | Access control |
| [10-security](workflows/10-security.md) | **Related** | Security audit |
