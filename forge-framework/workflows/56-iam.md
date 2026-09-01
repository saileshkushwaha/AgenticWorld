# Workflow 56: Identity and Access Management

**Duration**: 4-20h | **Outputs**: IAM strategy, RBAC model, access policies, SSO configuration

## Trigger

- IAM implementation or overhaul, access control improvement
- Compliance requirement (SOC2, ISO 27001), security audit
- SSO/MFA implementation, onboarding/offboarding automation
- Privileged access management, zero trust adoption

## Steps

### Step 1: Identity Assessment
Inventory all identity stores (AD, LDAP, cloud directories). Map user types (employees, contractors, services). Identify authentication methods. Document current access patterns.
**Time**: 2-4h. **Edge Cases**: Multiple directories → plan consolidation; shadow IT → include all apps; service accounts → separate inventory.

### Step 2: Authentication Design
Select authentication methods (SSO, MFA, passwordless). Choose identity provider (Okta, Azure AD, Auth0, Keycloak). Design MFA policies. Plan session management.
**Time**: 2-4h. **Edge Cases**: Legacy apps → SAML/OIDC proxy; external users → social login; high-security → hardware tokens.

### Step 3: Authorization Model
Design RBAC/ABAC policies. Define roles and permissions. Implement least privilege. Plan permission reviews.
**Time**: 2-6h. **Edge Cases**: Complex hierarchies → attribute-based; temporary access → time-bound roles; cross-team → shared roles.

### Step 4: SSO Integration
Configure SSO for all applications. Implement SAML/OIDC/OAuth. Plan migration from legacy auth. Handle API authentication.
**Time**: 2-6h. **Edge Cases**: Non-standard apps → custom connectors; API auth → service tokens; mobile → SDK integration.

### Step 5: Lifecycle Management
Automate provisioning/deprovisioning. Design access request workflow. Implement access reviews. Plan offboarding procedures.
**Time**: 2-4h. **Edge Cases**: Emergency access → break-glass; contractors → time-limited; role changes → automated updates.

### Step 6: Monitoring and Compliance
Set up access monitoring. Configure alerts for anomalous access. Generate compliance reports. Train administrators.
**Time**: 1-2h. **Edge Cases**: False positives → tune; audit requests → pre-built reports.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Identity stores inventoried |
| QG2 | Authentication designed |
| QG3 | Authorization model defined |
| QG4 | SSO integrated |
| QG5 | Lifecycle management automated |
| QG6 | Monitoring active |

## Anti-Patterns

1. **Permission creep** — Users accumulating access over time
2. **Shared accounts** — Multiple people using same credentials
3. **No offboarding** — Former employees retaining access
4. **Admin everywhere** — Everyone has admin privileges

## Edge Cases

- Legacy applications → Use identity proxy
- External collaborators → Guest access with expiration
- Emergency access → Break-glass procedures with audit
- API-only access → Service accounts with scoped permissions

## Output

Use: `templates/iam-strategy.md` | Capability: `capabilities/iam.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [10-security](workflows/10-security.md) | **Related** | Security audit |
| [55-secrets-management](workflows/55-secrets-management.md) | **Related** | Service account secrets |
| [22-compliance](workflows/22-compliance.md) | **Related** | Compliance requirements |
| [30-devsecops](workflows/30-devsecops.md) | **Related** | Pipeline access control |
