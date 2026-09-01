# Workflow 61: Penetration Testing

**Duration**: 4-20h | **Outputs**: Pen test plan, vulnerability findings, remediation roadmap, executive summary

## Trigger

- Security assessment requirement, compliance mandate (PCI-DSS, SOC2)
- Pre-release security validation, post-incident assessment
- Red team exercise, third-party security evaluation
- Annual security review, new application launch

## Steps

### Step 1: Scope Definition
Define target systems and networks. Identify test boundaries. Select test type (black box, gray box, white box). Define rules of engagement. Obtain authorization.
**Time**: 1-2h. **Edge Cases**: Cloud environments → provider approval needed; third-party systems → coordinate with vendor; production systems → define safe harbor.

### Step 2: Reconnaissance
Gather information about targets (OSINT, DNS, network scanning). Identify attack surfaces. Map application architecture. Document findings.
**Time**: 2-4h. **Edge Cases**: Limited information → black box approach; large attack surface → prioritize; stealth requirements → minimize detection.

### Step 3: Vulnerability Identification
Scan for known vulnerabilities. Identify misconfigurations. Map potential attack paths. Prioritize by exploitability.
**Time**: 2-4h. **Edge Cases**: False positives → manual verification; zero-day → responsible disclosure; scope creep → document and defer.

### Step 4: Exploitation
Attempt to exploit identified vulnerabilities. Escalate privileges where possible. Move laterally through network. Document all successful exploits.
**Time**: 2-6h. **Edge Cases**: Production impact → stop immediately; data access → document only, don't exfiltrate; destructive exploits → avoid.

### Step 5: Post-Exploitation
Assess impact of successful exploits. Document data accessed. Evaluate persistence mechanisms. Identify additional targets. Clean up test artifacts.
**Time**: 1-2h. **Edge Cases**: Sensitive data → handle per policy; backdoors → remove completely; evidence preservation → screenshots and logs.

### Step 6: Reporting and Remediation
Document all findings with evidence. Rate severity (CVSS). Create remediation roadmap. Provide executive summary. Present findings to stakeholders.
**Time**: 2-4h. **Edge Cases**: Critical findings → immediate notification; disputed findings → provide evidence; remediation complexity → phased approach.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Scope defined and authorized |
| QG2 | Reconnaissance complete |
| QG3 | Vulnerabilities identified |
| QG4 | Exploitation attempted |
| QG5 | Post-exploitation documented |
| QG6 | Report delivered |

## Anti-Patterns

1. **No authorization** — Testing without written permission
2. **Scope creep** — Testing systems outside scope
3. **Destructive testing** — Causing production damage
4. **No remediation plan** — Findings without fix roadmap

## Edge Cases

- Cloud environments → Obtain provider approval first
- Production systems → Define safe harbor hours
- Third-party integrations → Coordinate with vendors
- Zero-day discoveries → Responsible disclosure process

## Output

Use: `templates/penetration-test-report.md` | Capability: `capabilities/penetration-testing.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [10-security](workflows/10-security.md) | **Related** | Security audit |
| [30-devsecops](workflows/30-devsecops.md) | **Related** | DevSecOps pipeline |
| [34-post-quantum](workflows/34-post-quantum.md) | **Related** | Quantum security |
| [55-secrets-management](workflows/55-secrets-management.md) | **Related** | Secrets validation |
