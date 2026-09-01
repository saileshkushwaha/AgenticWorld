# Secrets Management Report

**Created**: [ISO 8601] | **Phase**: Secrets Management | **Status**: [draft|review|approved]
**Author**: [Name] | **Version**: [SemVer]

## Executive Summary
[2-3 secrets management scope, vault selected, migration status]

## Secrets Inventory

| Category | Count | Current Storage | Risk Level |
|----------|-------|-----------------|------------|
| API Keys | [count] | [location] | [H/M/L] |
| Passwords | [count] | [location] | [H/M/L] |
| Tokens | [count] | [location] | [H/M/L] |
| Certificates | [count] | [location] | [H/M/L] |
| SSH Keys | [count] | [location] | [H/M/L] |

## Vault Configuration

| Setting | Value |
|---------|-------|
| Vault Solution | [HashiCorp Vault/AWS Secrets Manager/etc] |
| Deployment Mode | [HA/Standalone] |
| Seal Type | [Shamir/AWS KMS/etc] |
| Audit Device | [type] |

## Access Control

| Role | Permissions | Approvers |
|------|-------------|-----------|
| Admin | [permissions] | [approvers] |
| Developer | [permissions] | [approvers] |
| Service Account | [permissions] | [approvers] |

## Rotation Policy

| Secret Type | Rotation Frequency | Automation |
|-------------|-------------------|------------|
| API Keys | [frequency] | [yes/no] |
| Passwords | [frequency] | [yes/no] |
| Certificates | [frequency] | [yes/no] |

## Migration Plan

| Phase | Secrets | Timeline | Status |
|-------|---------|----------|--------|
| 1 | [secrets] | [date] | [status] |
| 2 | [secrets] | [date] | [status] |

## Decisions & Rationale
| Decision | Options Considered | Rationale |

## Risks & Mitigations
| Risk | Probability | Impact | Mitigation |

## Assumptions
- [Assumption 1]: [basis]

## Open Issues
- [Issue 1]: [blocker]

## Next Steps
1. [Action item 1]

## References
- [Reference 1]: [citation]
