# Workflow 55: Secrets Management

**Duration**: 4-16h | **Outputs**: Secrets inventory, vault configuration, rotation policy, access controls

## Trigger

- Secrets management initiative, credential sprawl remediation
- Compliance requirement (SOC2, PCI-DSS), security audit finding
- Onboarding/offboarding process improvement
- Secrets rotation automation, vault migration

## Steps

### Step 1: Secrets Inventory
Catalog all secrets across environments (API keys, passwords, tokens, certificates, SSH keys). Identify storage locations (code, config files, env vars, CI/CD). Classify by sensitivity.
**Time**: 2-4h. **Edge Cases**: Hardcoded secrets → flag immediately; shared accounts → document; unknown owners → assign temporary owner.

### Step 2: Vault Strategy
Select secrets management tool (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, Doppler). Define vault architecture (centralized vs distributed). Plan migration approach.
**Time**: 1-2h. **Edge Cases**: Multi-cloud → use cloud-agnostic vault; budget constraints → open-source options; compliance → HSM-backed vault.

### Step 3: Access Control Design
Define RBAC policies. Implement least privilege. Design break-glass procedures. Plan audit logging.
**Time**: 2-4h. **Edge Cases**: Emergency access → break-glass accounts; service accounts → automated rotation; cross-team access → shared folders.

### Step 4: Rotation Policy
Define rotation schedules per secret type. Implement automated rotation. Plan emergency rotation procedures.
**Time**: 1-2h. **Edge Cases**: Legacy systems → manual rotation; dependent services → coordinate rotation; certificates → auto-renewal.

### Step 5: Migration Execution
Migrate secrets from current storage to vault. Update applications to fetch from vault. Verify functionality. Remove old secrets.
**Time**: 2-6h. **Edge Cases**: Downtime → blue-green migration; failed rollback → keep old secrets temporarily; large volume → batch migration.

### Step 6: Monitoring and Compliance
Set up access monitoring. Configure alerts for anomalous access. Document compliance evidence. Train team.
**Time**: 1-2h. **Edge Cases**: False positives → tune alerts; audit requests → prepare evidence package.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | All secrets inventoried |
| QG2 | Vault selected and configured |
| QG3 | Access controls implemented |
| QG4 | Rotation policies defined |
| QG5 | Migration complete |
| QG6 | Monitoring active |

## Anti-Patterns

1. **Secrets in code** — Hardcoded credentials in repositories
2. **No rotation** — Static secrets never changed
3. **Over-privileged access** — Everyone can read all secrets
4. **No audit trail** — Cannot track who accessed what

## Edge Cases

- Legacy systems without vault integration → Use sidecar pattern
- Emergency rotation → Automated rotation on breach detection
- Multi-cloud → Use cloud-agnostic vault with cloud-specific backends
- Developer experience → CLI tools for local development

## Output

Use: `templates/secrets-management-report.md` | Capability: `capabilities/secrets-management.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [10-security](workflows/10-security.md) | **Related** | Security audit findings |
| [30-devsecops](workflows/30-devsecops.md) | **Related** | Pipeline secrets integration |
| [45-configuration-audit](workflows/45-configuration-audit.md) | **Related** | Audit secrets configuration |
| [16-configuration](workflows/16-configuration.md) | **Related** | Configuration management |
