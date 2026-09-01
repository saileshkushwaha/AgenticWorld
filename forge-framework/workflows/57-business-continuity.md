# Workflow 57: Business Continuity Planning

**Duration**: 8-40h | **Outputs**: BCP document, risk assessment, recovery procedures, testing schedule

## Trigger

- Business continuity planning initiative, disaster preparedness
- Compliance requirement (ISO 22301), insurance requirement
- Post-incident review finding, risk assessment update
- Organizational change (merger, expansion, new products)

## Steps

### Step 1: Business Impact Analysis
Identify critical business functions. Determine maximum tolerable downtime (MTD). Calculate recovery time objectives (RTO). Assess financial and operational impact of downtime.
**Time**: 4-8h. **Edge Cases**: Interdependent functions → map dependencies; seasonal variations → adjust RTOs; intangible impacts → quantify qualitatively.

### Step 2: Risk Assessment
Identify threats (natural, technical, human, cyber). Assess likelihood and impact. Evaluate existing controls. Prioritize risks.
**Time**: 2-4h. **Edge Cases**: Emerging threats → scenario planning; low probability/high impact → include; correlated risks → assess together.

### Step 3: Strategy Development
Define recovery strategies for each critical function. Select recovery sites (hot, warm, cold). Plan communication procedures. Design alternate work arrangements.
**Time**: 4-8h. **Edge Cases**: Cloud-native → multi-region; physical facilities → remote work; supply chain → alternate vendors.

### Step 4: Plan Documentation
Document recovery procedures. Create contact lists. Define roles and responsibilities. Document resource requirements. Plan for different scenarios.
**Time**: 4-8h. **Edge Cases**: Multiple scenarios → modular plans; key person risk → cross-training; plan accessibility → offline copies.

### Step 5: Testing Program
Design test scenarios. Schedule regular tests. Conduct tabletop exercises. Plan full-scale drills. Document test results.
**Time**: 4-8h. **Edge Cases**: Production impact → isolated testing; remote teams → virtual exercises; frequency → risk-based schedule.

### Step 6: Maintenance and Review
Establish review schedule. Update plan after changes. Incorporate lessons learned. Train new employees. Communicate changes.
**Time**: 2-4h. **Edge Cases**: Organizational changes → immediate update; test failures → remediation plan; regulatory changes → compliance review.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Business impact analysis complete |
| QG2 | Risk assessment documented |
| QG3 | Recovery strategies defined |
| QG4 | Plan documented and accessible |
| QG5 | Testing program established |
| QG6 | Maintenance process defined |

## Anti-Patterns

1. **Shelfware plan** — Document that never gets tested
2. **Single point of failure** — Key person dependency
3. **Outdated contacts** — Stale contact information
4. **No executive buy-in** — Plan without organizational support

## Edge Cases

- Pandemic scenarios → Remote work procedures
- Cyber attacks → Isolated recovery environment
- Natural disasters → Geographic distribution
- Supply chain disruption → Alternate vendors

## Output

Use: `templates/business-continuity-plan.md` | Capability: `capabilities/business-continuity.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [21-disaster-recovery](workflows/21-disaster-recovery.md) | **Related** | Technical DR planning |
| [12-incident](workflows/12-incident.md) | **Related** | Incident response |
| [22-compliance](workflows/22-compliance.md) | **Related** | Compliance requirements |
| [58-dr-testing](workflows/58-dr-testing.md) | **Related** | DR testing execution |
