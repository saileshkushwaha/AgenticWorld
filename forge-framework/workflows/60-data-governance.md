# Workflow 60: Data Governance

**Duration**: 8-40h | **Outputs**: Data governance framework, data catalog, quality policies, access controls

## Trigger

- Data governance initiative, regulatory compliance (GDPR, CCPA)
- Data quality issues, data catalog implementation
- Master data management, data lineage requirements
- Cross-team data sharing, data mesh adoption

## Steps

### Step 1: Data Inventory
Catalog all data assets across the organization. Identify data sources, stores, and flows. Classify data by sensitivity and criticality. Document data owners.
**Time**: 4-8h. **Edge Cases**: Shadow data → include all sources; undocumented data → discovery tools; external data → document provenance.

### Step 2: Governance Framework
Define governance structure (stewards, owners, custodian). Establish policies and standards. Create decision rights. Define escalation paths.
**Time**: 2-4h. **Edge Cases**: Matrix organization → clarify roles; small teams → combine roles; regulated industry → formal structure.

### Step 3: Data Quality Management
Define quality dimensions (accuracy, completeness, consistency, timeliness). Implement quality checks. Create quality metrics. Establish remediation processes.
**Time**: 4-8h. **Edge Cases**: Legacy data → gradual improvement; real-time data → streaming quality checks; external data → vendor SLAs.

### Step 4: Access and Privacy
Classify data by sensitivity. Implement access controls. Define retention policies. Plan data deletion procedures. Ensure privacy compliance.
**Time**: 4-8h. **Edge Cases**: Cross-border data → jurisdiction analysis; PII handling → anonymization; legal hold → override retention.

### Step 5: Data Lineage and Catalog
Implement data catalog tool. Document data lineage. Create business glossary. Enable data discovery. Track data transformations.
**Time**: 4-8h. **Edge Cases**: Complex transformations → automated lineage; legacy systems → manual documentation; real-time pipelines → streaming lineage.

### Step 6: Monitoring and Compliance
Set up governance monitoring. Track policy compliance. Generate compliance reports. Conduct regular audits. Train data users.
**Time**: 2-4h. **Edge Cases**: Policy violations → automated alerts; audit requests → pre-built reports; new regulations → impact assessment.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Data assets inventoried |
| QG2 | Governance framework defined |
| QG3 | Quality standards established |
| QG4 | Access controls implemented |
| QG5 | Data catalog operational |
| QG6 | Monitoring active |

## Anti-Patterns

1. **Data hoarding** — Keeping all data forever
2. **No ownership** — Data without assigned stewards
3. **Inconsistent definitions** — Different teams using different terms
4. **Governance as blocker** — Slowing down data access unnecessarily

## Edge Cases

- Cross-border data transfers → Legal review required
- Legacy data without metadata → Reverse engineer
- Real-time data streams → Streaming governance
- Third-party data → Contractual governance

## Output

Use: `templates/data-governance-framework.md` | Capability: `capabilities/data-governance.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [22-compliance](workflows/22-compliance.md) | **Related** | Regulatory compliance |
| [20-data-migration](workflows/20-data-migration.md) | **Related** | Data migration |
| [50-database-design](workflows/50-database-design.md) | **Related** | Database design |
| [56-iam](workflows/56-iam.md) | **Related** | Data access control |
