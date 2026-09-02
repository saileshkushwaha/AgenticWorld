# Static Analysis & Security Scan Report

**Created**: [ISO 8601] | **Phase**: Static Analysis & Security Scanning | **Status**: [draft|review|approved]
**Author**: [Name] | **Version**: [SemVer] | **Scan Date**: [timestamp]

## Executive Summary
[2-3 sentences: overall code quality, security posture, key risks, remediation status]

## Scan Overview
- **Target Repository**: [repository-url]
- **Target Branch/Commit**: [ref]
- **Scan Tools**: [list of tools with versions]
- **Scan Duration**: [duration]
- **Lines of Code Analyzed**: [number]
- **Files Analyzed**: [number]

## Executive Metrics
| Metric | Value | Trend | Target | Status |
|--------|-------|-------|--------|--------|
| Overall Code Quality Score | [score/100] | [↑/↓/→] | [target] | [pass/fail] |
| Security Hotspots | [number] | [↑/↓/→] | [target] | [pass/fail] |
| Vulnerabilities (Critical/High/Medium/Low) | [C]/[H]/[M]/[L] | [↑/↓/→] | [targets] | [pass/fail] |
| Technical Debt Ratio | [percentage] | [↑/↓/→] | [target] | [pass/fail] |
| Code Coverage | [percentage] | [↑/↓/→] | [target] | [pass/fail] |
| Duplication % | [percentage] | [↑/↓/→] | [target] | [pass/fail] |
| Issues (Blocker/Critical/Major/Minor/Info) | [B]/[C]/[Mj]/[Mn]/[I] | [↑/↓/→] | [targets] | [pass/fail] |

## Detailed Findings

### Security Vulnerabilities
[Summary of security findings by severity]

#### Critical Vulnerabilities ([count])
| ID | Tool | Rule | File | Line | Description | CWE | CVSS | Status |
|----|------|------|------|------|-------------|-----|------|--------|
| [vuln-id] | [tool] | [rule-id] | [file-path] | [line] | [description] | [CWE-ID] | [score] | [open/fixed/wontfix] |

#### High Vulnerabilities ([count])
| ID | Tool | Rule | File | Line | Description | CWE | CVSS | Status |
|----|------|------|------|------|-------------|-----|------|--------|
| [vuln-id] | [tool] | [rule-id] | [file-path] | [line] | [description] | [CWE-ID] | [score] | [open/fixed/wontfix] |

### Code Quality Issues
[Summary of code quality findings by category]

#### Code Smells ([count])
| ID | Tool | Rule | File | Line | Description | Effort to Fix | Status |
|----|------|------|------|------|-------------|---------------|--------|
| [issue-id] | [tool] | [rule-id] | [file-path] | [line] | [description] | [time-estimate] | [open/fixed/wontfix] |

#### Bugs ([count])
| ID | Tool | Rule | File | Line | Description | Severity | Status |
|----|------|------|------|------|-------------|----------|--------|
| [issue-id] | [tool] | [rule-id] | [file-path] | [line] | [description] | [blocker/critical/major/minor] | [open/fixed/wontfix] |

#### Vulnerabilities (SAST) ([count])
| ID | Tool | Rule | File | Line | Description | CWE | CVSS | Status |
|----|------|------|------|------|-------------|-----|------|--------|
| [issue-id] | [tool] | [rule-id] | [file-path] | [line] | [description] | [CWE-ID] | [score] | [open/fixed/wontfix] |

### Dependency Vulnerabilities
[Summary of vulnerable dependencies]

#### Critical Dependencies ([count])
| Dependency | Current Version | Vulnerable Versions | Fixed Version | Vulnerability ID | Description | Status |
|------------|-----------------|---------------------|---------------|------------------|-------------|--------|
| [dep-name] | [current] | [vulnerable-range] | [fixed-version] | [CVE-ID] | [description] | [open/fixed/wontfix] |

#### High Dependencies ([count])
| Dependency | Current Version | Vulnerable Versions | Fixed Version | Vulnerability ID | Description | Status |
|------------|-----------------|---------------------|---------------|------------------|-------------|--------|
| [dep-name] | [current] | [vulnerable-range] | [fixed-version] | [CVE-ID] | [description] | [open/fixed/wontfix] |

### Technical Debt
[Summary of technical debt by category]

#### Debt Items ([count])
| Type | Description | Effort to Fix | Principal | Interest | Status |
|------|-------------|---------------|-----------|----------|--------|
| [debt-type] | [description] | [time-estimate] | [principal] | [interest] | [open/fixed/wontfix] |

## Trend Analysis
[Comparison with previous scans if available]

### Quality Trend
[Description of quality score trend over time]

### Security Trend
[Description of security vulnerability trend over time]

### Technical Debt Trend
[Description of technical debt trend over time]

## Remediation Plan
[Overview of planned fixes and timelines]

### Immediate Actions (Next 0-7 days)
| Priority | Issue ID | Description | Owner | Due Date | Estimated Effort |
|----------|----------|-------------|-------|----------|------------------|
| [High/Med/Low] | [issue-id] | [description] | [name] | [date] | [estimate] |

### Short-term Actions (Next 8-30 days)
| Priority | Issue ID | Description | Owner | Due Date | Estimated Effort |
|----------|----------|-------------|-------|----------|------------------|
| [High/Med/Low] | [issue-id] | [description] | [name] | [date] | [estimate] |

### Long-term Actions (30+ days)
| Priority | Issue ID | Description | Owner | Due Date | Estimated Effort |
|----------|----------|-------------|-------|----------|------------------|
| [High/Med/Low] | [issue-id] | [description] | [name] | [date] | [estimate] |

## Quality Gates
| Gate | Criteria | Status | Evidence |
|------|----------|--------|----------|
| QG1 | Static analysis tools selected and configured | [pass/fail] | [tool list/config] |
| QG2 | Security scanners selected and configured | [pass/fail] | [tool list/config] |
| QG3 | Baseline established and documented | [pass/fail] | [baseline-doc] |
| QG4 | Scanning executed successfully | [pass/fail] | [scan-logs] |
| QG5 | Results analyzed and prioritized | [pass/fail] | [prioritization-doc] |
| QG6 | Remediation plan created and tracked | [pass/fail] | [remediation-plan] |

## Decisions & Rationale
| Decision | Options Considered | Rationale |
|----------|-------------------|-----------|
| [Primary SAST tool] | [alternatives] | [why chosen, considering accuracy, performance, coverage] |
| [Security scanner] | [alternatives] | [why chosen, considering vuln DB, false positive rate, integrations] |
| [Rule set/profile] | [alternatives] | [why chosen, considering compliance needs, noise level] |
| [Severity thresholds] | [alternatives] | [why chosen, considering risk appetite, team capacity] |

## Risks & Mitigations
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [False positives overwhelming team] | [H/M/L] | [H/M/L] | [Tune rules, create baselines, implement triage process] |
| [Scan performance impacting dev productivity] | [H/M/L] | [H/M/L] | [Schedule off-hours, use incremental analysis, cloud scanning] |
| [Critical vulnerabilities missed] | [H/M/L] | [H/M/L] | [Multiple scanners, manual review for critical components, pentest] |
| [Remediation backlog growing] | [H/M/L] | [H/M/L] | [Regular grooming, allocate fix-it time, track debt ratio] |
| [Tool licensing costs] | [H/M/L] | [H/M/L] | [Evaluate open-source alternatives, negotiate enterprise licenses] |

## Assumptions
- [Assumption 1]: [basis]
- [Assumption 2]: [basis]
- [Assumption 3]: [basis]

## Open Issues
- [Issue 1]: [description]
- [Issue 2]: [description]

## Next Steps
1. [Action item]: [description] - Owner: [name], Due: [date]
2. [Action item]: [description] - Owner: [name], Due: [date]
3. [Action item]: [description] - Owner: [name], Due: [date]

## References
- [Scan tool documentation]: [link]
- [Security standards referenced]: [e.g., OWASP Top 10, CWE/SANS Top 25]
- [Organizational coding standards]: [link]
- [Previous scan reports]: [link if available]
- [Remediation tracking]: [link to issue tracker/project board]

<!-- Auto-generated report - do not edit manually -->
<!-- Last scanned: [ISO 8601] -->
<!-- Tools: [tool1] v[version], [tool2] v[version], ... -->