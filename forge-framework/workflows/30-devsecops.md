# Workflow 30: DevSecOps

**Duration**: 4-16h | **Outputs**: Security pipeline, automated security tests, compliance as code

## Trigger
- Security shift-left initiative, DevSecOps transformation
- Compliance automation, security pipeline design

## Steps

### Step 1: Current State Assessment
Assess current security practices. Identify gaps in CI/CD pipeline.
**Time**: 1-2h.

### Step 2: Security Toolchain Design
Select SAST, DAST, SCA, secrets scanning tools. Design pipeline integration.
**Time**: 2-4h.

### Step 3: Pipeline Integration
Integrate security scans into CI/CD. Define quality gates. Configure fail conditions.
**Time**: 2-6h.

### Step 4: Compliance as Code
Define compliance policies. Implement automated checks. Create audit trails.
**Time**: 2-4h.

### Step 5: Monitoring and Response
Set up security monitoring. Define incident response. Create dashboards.
**Time**: 1-2h.

### Step 6: Training and Adoption
Train team on new processes. Document procedures. Measure adoption.
**Time**: 1-2h.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Current state assessed |
| QG2 | Toolchain designed |
| QG3 | Pipeline integrated |
| QG4 | Compliance as code implemented |
| QG5 | Monitoring configured |
| QG6 | Training complete |

## Anti-Patterns

1. **Tool overload** — Too many security tools
2. **Alert fatigue** — Security findings overwhelm
3. **Security theater** — Looks good, doesn't work
4. **Bypass culture** — Developers circumventing security

## Edge Cases

- Legacy systems: Gradual security integration
- Third-party risks: Supply chain security
- False positives: Triage process needed
- Zero-day vulnerabilities: Rapid response

## Output
Use: `templates/devsecops-plan.md` | Capability: `capabilities/devsecops.md`

## Anti-Patterns

1. **Security as afterthought** — Adding security late
2. **Tool overload** — Too many tools without integration
3. **No automation** — Manual processes in CI/CD
4. **Ignoring compliance** — Not meeting regulatory requirements

## Edge Cases

- Legacy systems → Use incremental security improvements
- No security team → Use automated tools
- Compliance conflicts → Consult legal team

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [10-security](workflows/10-security.md) | **Related** | To integrate security into CI/CD |
| [07-deploy](workflows/07-deploy.md) | **Related** | To secure deployment pipelines |
| [04-implement](workflows/04-implement.md) | **Related** | To implement security in code |
