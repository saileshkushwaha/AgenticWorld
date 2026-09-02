# Workflow 38: Privacy & Data Protection

**Duration**: 4-16h | **Outputs**: Privacy assessment, data protection plan, compliance audit

## Trigger

- Privacy compliance requirement, data protection regulation
- Privacy incident, data breach assessment
- New data processing system, privacy by design implementation
- Regulatory audit (GDPR, CCPA, HIPAA), privacy review

## Steps

### Step 1: Privacy Impact Assessment
Assess privacy risks and impacts of proposed system. Identify personal data types, processing purposes, legal bases.
**Time**: 2-4h.

### Step 2: Data Classification
Classify data according to sensitivity levels. Identify PII, sensitive personal data, special categories.
**Time**: 1-2h.

### Step 3: Privacy Controls Design
Design privacy controls to mitigate identified risks. Implement data minimization, consent management, access controls.
**Time**: 2-4h.

### Step 4: Privacy Documentation
Create privacy documentation including privacy policy, data protection procedures, consent management procedures.
**Time**: 1-2h.

### Step 5: Implementation
Implement privacy controls in the system. Configure data handling procedures, access controls, audit logging.
**Time**: 2-8h.

### Step 6: Privacy Testing
Test privacy controls and data handling procedures. Conduct privacy impact testing, data subject rights testing.
**Time**: 1-2h.

### Step 7: Documentation and Training
Document privacy procedures. Train staff on privacy requirements and procedures.
**Time**: 1-2h.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Privacy impact assessment complete |
| QG2 | Data classification complete |
| QG3 | Privacy controls designed |
| QG4 | Documentation complete |
| QG5 | Implementation complete |
| QG6 | Privacy testing passed |
| QG7 | Training completed |

## Anti-Patterns

1. **Privacy by design neglect** — Adding privacy as afterthought
2. **Data hoarding** — Collecting more data than necessary
3. **Insufficient consent** — Not obtaining proper consent
4. **Poor access controls** — Overly permissive access

## Edge Cases

- Edge cases covered in workflow 39

## Output

Use: `templates/privacy-impact-assessment.md` | Capability: `capabilities/privacy-data-protection.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [39-secure-data-handling](workflows/39-secure-data-handling.md) | **Related** | To implement data handling procedures |
| [22-compliance](workflows/22-compliance.md) | **Related** | To ensure privacy compliance |
| [10-security](workflows/10-security.md) | **Related** | To secure personal data |

## Output

Use: `templates/privacy-impact-assessment.md` | Capability: `capabilities/privacy-data-protection.md`
