# Workflow 16: Configuration Management

**Duration**: 2-8h | **Outputs**: Configuration inventory, environment comparison, change log

## Trigger

- Environment setup, configuration audit, secrets management
- Feature flag management, configuration drift detection

## Steps

### Step 1: Configuration Inventory
Catalog all configuration items (env vars, files, secrets, feature flags). Document sources.
**Time**: 1-2h.

### Step 2: Environment Comparison
Compare configs across environments (dev, staging, prod). Identify drift.
**Time**: 1-2h.

### Step 3: Secrets Management
Audit secrets storage and rotation. Verify access controls. Identify hardcoded secrets.
**Time**: 1-2h.

### Step 4: Feature Flag Management
Catalog feature flags. Document ownership and lifecycle. Identify stale flags.
**Time**: 30-60 min.

### Step 5: Change Tracking
Document configuration changes. Implement change approval process.
**Time**: 30-60 min.

### Step 6: Audit and Compliance
Verify compliance with standards. Document audit trail.
**Time**: 30-60 min.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Inventory complete |
| QG2 | Environments compared |
| QG3 | Secrets managed |
| QG4 | Feature flags documented |
| QG5 | Changes tracked |
| QG6 | Compliance verified |

## Anti-Patterns

1. **Configuration sprawl** — Too many config sources
2. **Hardcoded secrets** — Secrets in code
3. **Drift undetected** — Environment inconsistencies
4. **Stale flags** — Feature flags never cleaned up

## Edge Cases

- Null values: Use defaults documented
- Encrypted configs: Document decryption process
- Missing env vars: Fail fast with clear error
- Config conflicts: Priority order documented

## Output

Use: `templates/configuration-report.md` | Capability: `capabilities/configuration-management.md`

## Anti-Patterns

1. **Writing for yourself** — Not considering audience needs
2. **No review** — Publishing without technical review
3. **Outdated docs** — Not maintaining documentation
4. **No examples** — Abstract explanations without examples

## Edge Cases

- Multiple audiences → Create separate documents per audience
- No existing template → Adapt from similar project
- Technical reviewer unavailable → Use peer review

## Output

Use: `templates/configuration-report.md` | Capability: `capabilities/configuration-management.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [45-configuration-audit](workflows/45-configuration-audit.md) | **Related** | To audit configuration compliance |
| [10-security](workflows/10-security.md) | **Related** | To secure configurations |
| [07-deploy](workflows/07-deploy.md) | **Related** | To configure deployment environments |
