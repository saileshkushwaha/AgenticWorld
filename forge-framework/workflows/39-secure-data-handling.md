# Workflow 39: Secure Data Handling

**Duration**: 4-20h | **Outputs**: Data handling procedures, security validation, incident response plan

## Trigger

- Data handling procedures, data security audit
- Data breach response, security incident follow-up
- New data processing system, security validation
- Compliance audit, security review

## Steps

### Step 1: Data Security Assessment
Assess data security requirements, classification, and handling procedures. Identify security controls needed for data protection.
**Time**: 2-4h.

### Step 2: Data Handling Procedures
Define procedures for secure data handling. Include data collection, storage, processing, and disposal procedures.
**Time**: 2-4h.

### Step 3: Access Control Implementation
Implement access controls for data access. Define roles, permissions, and access logging.
**Time**: 2-4h.

### Step 4: Encryption Implementation
Implement encryption for sensitive data. Define encryption algorithms, key management, and encryption procedures.
**Time**: 2-8h.

### Step 5: Security Testing
Test data handling procedures. Conduct security testing, penetration testing, and vulnerability assessments.
**Time**: 2-4h.

### Step 6: Incident Response
Develop incident response procedures for data security incidents. Define response protocols, escalation procedures, and post-incident analysis.
**Time**: 1-2h.

### Step 7: Documentation and Training
Document data handling procedures. Train staff on data security requirements and procedures.
**Time**: 1-2h.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Data security assessment complete |
| QG2 | Data handling procedures defined |
| QG3 | Access controls implemented |
| QG4 | Encryption implemented |
| QG5 | Security testing passed |
| QG6 | Incident response plan complete |
| QG7 | Documentation and training completed |

## Anti-Patterns

1. **Data exposure** — Exposing sensitive data without protection
2. **Weak encryption** — Using weak encryption algorithms
3. **Insecure key management** — Poor key management practices
4. **Insufficient logging** — Not logging data access

## Edge Cases

- PII handling: PII detected, redaction procedures applied
- Legacy systems: Legacy data migration, encryption procedures
- Cross-border data: International data transfer compliance
- Third-party vendors: Vendor data security assessment

## Output

Use: `templates/technical-debt-register.md` | Capability: `capabilities/technical-debt.md`
