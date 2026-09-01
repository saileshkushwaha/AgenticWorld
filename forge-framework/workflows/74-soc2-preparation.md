# Workflow 74: SOC 2 Preparation

**Duration**: 20-80h | **Outputs**: Trust services criteria mapping, control matrix, evidence package, audit readiness report

## Trigger

- SOC 2 certification initiative, enterprise customer requirement
- Security maturity improvement, competitive differentiation
- Regulatory compliance, investor due diligence
- Service organization audit requirement

## Steps

### Step 1: Scope and Criteria Selection
Define system boundaries. Select trust services criteria (security, availability, processing integrity, confidentiality, privacy). Determine Type I vs Type II. Document scope.
**Time**: 2-4h. **Edge Cases**: Complex systems → clear boundaries; multiple services → include all; subservice organizations → carve-in/carve-out.

### Step 2: Control Design
Map criteria to controls. Design control activities. Define control frequency. Assign control owners. Document control descriptions.
**Time**: 8-16h. **Edge Cases**: Automated vs manual → prefer automated; preventive vs detective → both; compensating controls → justify.

### Step 3: Gap Assessment
Evaluate current controls against criteria. Identify gaps. Assess gap severity. Prioritize remediation. Create remediation plan.
**Time**: 4-8h. **Edge Cases**: Missing controls → design new; ineffective controls → redesign; evidence gaps → implement logging.

### Step 4: Remediation Implementation
Implement missing controls. Enhance existing controls. Deploy monitoring tools. Automate control execution. Document evidence collection.
**Time**: 8-24h. **Edge Cases**: Resource constraints → phased approach; technical debt → address first; tool gaps → implement.

### Step 5: Evidence Collection
Establish evidence repository. Implement continuous monitoring. Collect control evidence. Document control operation. Prepare for auditor review.
**Time**: 4-8h. **Edge Cases**: Evidence gaps → retroactive collection; manual evidence → automate; evidence retention → define policy.

### Step 6: Readiness Assessment
Conduct mock audit. Identify remaining gaps. Validate evidence quality. Prepare management representation. Schedule audit.
**Time**: 4-8h. **Edge Cases**: Major gaps → delay audit; evidence quality issues → improve; auditor selection → criteria-based.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Scope defined |
| QG2 | Controls designed |
| QG3 | Gap assessment complete |
| QG4 | Remediation implemented |
| QG5 | Evidence collection operational |
| QG6 | Readiness confirmed |

## Anti-Patterns

1. **Last-minute preparation** — Rushing controls before audit
2. **Documentation without operation** — Controls on paper only
3. **Ignoring subservice organizations** — Not including vendors
4. **No ongoing monitoring** — Collecting evidence only at audit time

## Edge Cases

- Cloud infrastructure → Shared responsibility matrix
- Third-party vendors → SOC reports or alternative evidence
- Rapid growth → Scale controls accordingly
- Previous audit findings → Address before new audit

## Output

Use: `templates/soc2-readiness-report.md` | Capability: `capabilities/soc2-preparation.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [22-compliance](workflows/22-compliance.md) | **Related** | Compliance audit |
| [45-configuration-audit](workflows/45-configuration-audit.md) | **Related** | Configuration audit |
| [10-security](workflows/10-security.md) | **Related** | Security audit |
| [73-iso27001-preparation](workflows/73-iso27001-preparation.md) | **Related** | ISO 27001 |
