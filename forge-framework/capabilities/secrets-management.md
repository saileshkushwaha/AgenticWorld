# Secrets Management Capability

## Definition
The ability to systematically manage, store, rotate, and control access to sensitive credentials and secrets.

## Proficiency Levels

| Level | Title | Description |
|-------|-------|-------------|
| 1 | Novice | Can use vault tools to store and retrieve secrets |
| 2 | Competent | Can implement basic secrets management with rotation |
| 3 | Proficient | Can design enterprise secrets management architecture |
| 4 | Expert | Can implement zero-trust secrets management with automated rotation |
| 5 | Master | Can establish organizational secrets management practices |

## Scope
**In Scope**: Secrets inventory, vault implementation, rotation policies, access controls, audit logging
**Out of Scope**: Application-level encryption, hardware security modules (HSM)

## Skills
- **Vault Tools**: HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, Doppler
- **Rotation**: Automated rotation, emergency rotation, rotation scheduling
- **Access Control**: RBAC, least privilege, break-glass procedures
- **Audit**: Access logging, compliance evidence, anomaly detection

## Quality Criteria
- All secrets inventoried
- Vault configured with access controls
- Rotation policies automated
- Audit logging enabled

## Related Workflows
- `workflows/55-secrets-management.md` - Primary workflow
- `workflows/10-security.md` - Security audit
