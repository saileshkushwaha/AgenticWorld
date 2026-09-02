# Static Analysis & Security Capability

## Definition
The ability to systematically analyze source code and dependencies to identify security vulnerabilities, code quality issues, and compliance violations. Includes both static application security testing (SAST) and dependency vulnerability scanning.

## Proficiency Levels

| Level | Title | Description |
|-------|-------|-------------|
| 1 | Novice | Can run basic static analysis tools with default configurations |
| 2 | Competent | Can configure and interpret results from standard analysis tools |
| 3 | Proficient | Can customize analysis rules and integrate with CI/CD pipelines |
| 4 | Expert | Can establish organization-wide security scanning standards and metrics |
| 5 | Master | Can build self-improving security analysis systems and predictive threat models |

## Scope
**In Scope**: Static code analysis, dependency vulnerability scanning, security vulnerability identification, code quality assessment, technical debt tracking, compliance checking
**Out of Scope**: Dynamic application security testing, penetration testing, manual security auditing, runtime vulnerability detection

## Skills
- **Static Analysis Tools**: SAST frameworks, code quality analyzers, complexity metrics
- **Security Scanning**: Vulnerability scanners, dependency checkers, security linters
- **Compliance Analysis**: Regulatory compliance checking, security standards validation
- **Code Quality**: Code metrics, maintainability analysis, technical debt assessment
- **Result Analysis**: Vulnerability prioritization, risk assessment, remediation planning
- **Integration**: CI/CD pipeline integration, IDE integration, reporting tools

## Quality Criteria
- Zero critical security vulnerabilities in production code
- Automated security scanning in CI/CD pipeline
- Code quality metrics meeting organizational standards
- Dependency vulnerability scanning and management
- Technical debt ratio within acceptable limits
- Compliance with security standards and regulations
- Automated testing and validation of security findings

## Related Workflows
- `workflows/77-static-analysis-security.md` - Primary workflow
- `workflows/04-implement.md` - Implementation with security integration
- `workflows/05-test.md` - Testing with security validation
- `workflows/13-code-review.md` - Code review with security checks
- `workflows/30-devsecops.md` - DevSecOps integration
- `workflows/55-secrets-management.md` - Secrets management integration
- `workflows/61-penetration-testing.md` - Security testing integration

## Security Analysis Framework

### Analysis Categories
1. **Source Code Analysis (SAST)**
   - Static code analysis
   - Code quality metrics
   - Security vulnerability patterns
   - Complexity and maintainability

2. **Dependency Analysis**
   - Third-party libraries
   - Package vulnerability scanning
   - License compliance
   - Version management

3. **Configuration Analysis**
   - Security configurations
   - Environment settings
   - Access controls
   - Network security

4. **Infrastructure Analysis**
   - Infrastructure as Code
   - Container security
   - Network security
   - Cloud security

### Vulnerability Classification
| Severity | Criteria | Examples |
|----------|----------|----------|
| Critical | Remote code execution, authentication bypass | SQL injection, command injection |
| High | Data breach potential, privilege escalation | XSS, directory traversal |
| Medium | Information disclosure, functionality bypass | Insecure direct object reference |
| Low | Configuration issues, minor vulnerabilities | Debug information leakage |

### Risk Assessment Factors
1. **Exploitability**: Can the vulnerability be easily exploited?
2. **Impact**: What are the potential consequences?
3. **Prevalence**: How common is the vulnerability?
4. **Detection**: How easily can the vulnerability be detected?

## Security Quality Standards

### OWASP Top 10 Alignment
1. **Injection**: SQL injection, command injection, LDAP injection
2. **Broken Authentication**: Session hijacking, credential theft
3. **Sensitive Data Exposure**: Data leakage, insecure storage
4. **Broken Access Control**: Authorization flaws, privilege escalation
5. **Security Misconfiguration**: Insecure defaults, error messages
6. **Cross-Site Scripting (XSS)**: Client-side code injection
7. **Insecure Deserialization**: Data manipulation, code execution
8. **Using Components with Known Vulnerabilities**: Outdated libraries
9. **Insufficient Logging & Monitoring**: Detection and response gaps
10. **Server-Side Request Forgery (SSRF)**: Network service exploitation

### Compliance Standards Alignment
- **PCI DSS**: Payment card industry data security
- **ISO 27001**: Information security management
- **SOC 2**: Service organization control
- **GDPR**: General data protection regulation
- **HIPAA**: Health insurance portability
- **SOC 3**: General security report

## Technical Debt Management

### Debt Categories
1. **Security Debt**: Unaddressed security vulnerabilities
2. **Code Debt**: Poor code quality, technical debt
3. **Compliance Debt**: Regulatory compliance gaps
4. **Process Debt**: Inadequate security processes

### Debt Assessment
```
Technical Debt Ratio = (Security Issues + Code Smells + Complexity) / (Total Lines of Code)

Acceptable Ranges:
- Low Risk: < 5%
- Medium Risk: 5-15%
- High Risk: 15-25%
- Critical Risk: > 25%
```

## Integration with Development Lifecycle

### Shift-Left Security
1. **Code Design**: Security requirements definition
2. **Implementation**: Secure coding practices
3. **Code Review**: Security review and validation
4. **Testing**: Security testing and validation
5. **Deployment**: Security deployment validation
6. **Operations**: Security monitoring and maintenance

### CI/CD Pipeline Integration
```yaml
stages:
  - security-analysis
  - build
  - test
  - security-scan
  - deploy

security-analysis:
  script:
    - sonar-scanner
    - semgrep
    - npm audit
  artifacts:
    reports:
      security: security-report.txt
```

## Automation & Orchestration

### Scanning Orchestration
- **Multi-tool Integration**: Combine multiple analysis tools for comprehensive coverage
- **Incremental Scanning**: Focus on changed code for efficiency
- **Parallel Processing**: Speed up analysis with parallel execution
- **Caching**: Cache results for unchanged code

### Result Aggregation
- **Unified Reporting**: Consolidate results from all tools
- **Prioritization**: Rank vulnerabilities by severity and impact
- **Trend Analysis**: Track security improvements over time
- **Exception Management**: Handle false positives and tolerated risks

## Continuous Improvement

### Feedback Loops
1. **Vulnerability Management**: Track remediation and resolution
2. **Code Quality Improvement**: Monitor code quality metrics
3. **Compliance Monitoring**: Track compliance status and gaps
4. **Performance Optimization**: Optimize scanning performance

### Model Training & Improvement
- **Machine Learning**: Use scanning results to improve detection
- **Pattern Recognition**: Learn from historical vulnerability data
- **Behavior Analysis**: Understand developer security practices
- **Risk Prediction**: Predict future security risks

## Security Quality Metrics

### Development Metrics
- **Lines of Code**: Code analyzed (in thousands)
- **Vulnerabilities Found**: Total issues identified
- **Vulnerabilities Fixed**: Issues resolved
- **Coverage**: Percentage of code analyzed
- **False Positives**: Incorrectly flagged issues

### Security Metrics
- **Critical Vulnerabilities**: High-severity issues found
- **Average Time to Fix**: Mean time to resolve vulnerabilities
- **Remediation Rate**: Percentage of issues fixed
- **Compliance Score**: Compliance with security standards
- **Security Debt**: Unaddressed security issues