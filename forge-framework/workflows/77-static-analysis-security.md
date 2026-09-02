# Workflow 77: Static Code Analysis & Security Scanning

**Duration**: 2-6h | **Outputs**: Security scan report, code quality report, technical debt register, remediation plan

## Trigger

- Code quality assessment needed before release
- Security vulnerability scanning required
- Technical debt identification and tracking
- Pre-merge code review enhancement
- Compliance with coding standards

## Steps

### Step 1: Tool Selection & Configuration
Select appropriate static analysis tools (SAST) and security scanners based on language, framework, and requirements. Configure tools with rule sets, severity thresholds, and exclusions. Set up integration with development environment and CI/CD pipeline.
**Time**: 30-60 min | **Tools**: SAST tools (SonarQube, CodeQL, Bandit, ESLint security plugins, etc.), security scanners (OWASP Zap, Snyk, Dependabot, etc.)
**Edge Cases**: Language mismatch → use language-appropriate tools; performance concerns → configure incremental scanning; false positives → tune rule sets

### Step 2: Baseline Establishment
Run initial scan to establish baseline metrics for code quality, security vulnerabilities, and technical debt. Document findings and create improvement backlog. Set threshold values for quality gates based on baseline and organizational standards.
**Time**: 30-90 min | **Tools**: Analysis dashboards, reporting tools
**Edge Cases**: Large codebase → use sampling or phased approach; legacy code → establish separate baseline; no existing metrics → use industry benchmarks

### Step 3: Automated Scanning Execution
Execute static analysis and security scanning on target codebase. Perform both SAST (Static Application Security Testing) and dependency/vulnerability scanning. Collect results in standardized format (SARIF, JSON, etc.).
**Time**: 15-60 min | **Tools**: CLI scanners, CI/CD integration
**Edge Cases**: Scan failures → debug configuration; timeout issues → increase limits or scope; resource constraints → use cloud scanning services

### Step 4: Results Analysis & Prioritization
Analyze scan results to identify critical issues, security vulnerabilities, code smells, and technical debt. Prioritize findings based on severity, exploitability, impact, and fix complexity. Create actionable remediation backlog.
**Time**: 30-60 min | **Tools**: Result parsers, prioritization frameworks, issue trackers
**Edge Cases**: False positives → create suppression rules; information overload → focus on high-severity first; conflicting priorities → use risk-based approach

### Step 5: Remediation Planning & Tracking
Create detailed remediation plan with specific fixes, owners, timelines, and verification methods. Establish tracking mechanism for remediation progress. Set up metrics to measure improvement over time.
**Time**: 30-60 min | **Tools**: Issue tracking, project management, metrics dashboards
**Edge Cases**: Resource constraints → phase remediation; complex fixes → spike or prototype first; dependency issues → coordinate with other teams

### Step 6: Reporting & Quality Gates
Generate comprehensive report summarizing scan results, remediation progress, and quality gate status. Include metrics for code coverage, security hotspots, technical debt ratio, and trend analysis.
**Time**: 15-30 min | **Tools**: Reporting templates, visualization tools
**Edge Cases**: Report overload → use executive summary; technical depth → provide appendices; stakeholder communication → tailor to audience

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Static analysis tools selected and configured |
| QG2 | Security scanners selected and configured |
| QG3 | Baseline established and documented |
| QG4 | Scanning executed successfully |
| QG5 | Results analyzed and prioritized |
| QG6 | Remediation plan created andediation plan created and tracked |

## Anti-Patterns

1. **Scan-and-ignore** — Running scans but not acting on results
2. **Tool proliferation** — Using too many overlapping tools creating noise
3. **Compliance theater** — Focusing on passing scans without improving security
4. **Ignoring context** — Applying same severity to all findings without risk assessment
5. **No baseline comparison** — Evaluating in isolation without tracking improvement

## Edge Cases

- No security findings → Verify configuration and test with known vulnerabilities
- High false positive rate → Tune rules and create allowlists
- Performance impact → Schedule scans during off-hours or use incremental analysis
- Licensing restrictions → Use open-source alternatives or negotiate enterprise licenses
- Skill gaps → Provide training or use managed services

## Output

Use: `templates/static-analysis-security-report.md` | Capability: `capabilities/static-analysis-security.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [04-implement](workflows/04-implement.md) | **Integral** | To enhance code quality during implementation |
| [05-test](workflows/05-test.md) | **Complementary** | To supplement testing with security analysis |
| [13-code-review](workflows/13-code-review.md) | **Enhancing** | To provide automated feedback for code reviews |
| [30-devsecops](workflows/30-devsecops.md) | **Related** | As part of DevSecOps pipeline |
| [55-secrets-management](workflows/55-secrets-management.md) | **Related** | To complement secret scanning |
| [61-penetration-testing](workflows/61-penetration-testing.md) | **Related** | As part of comprehensive security program |