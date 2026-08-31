# Compliance Mapping - Forge Engineering Lifecycle Framework

## Overview

This document maps the Forge framework workflows to regulatory compliance requirements. It helps organizations understand which workflows support which compliance obligations.

## Compliance Frameworks

### GDPR (General Data Protection Regulation)

| Requirement | Workflow | Implementation |
|-------------|----------|----------------|
| Data Protection by Design | [38-privacy-data-protection](workflows/38-privacy-data-protection.md) | Privacy impact assessments |
| Data Subject Rights | [38-privacy-data-protection](workflows/38-privacy-data-protection.md) | Rights management procedures |
| Data Breach Notification | [INCIDENT-RESPONSE.md](INCIDENT-RESPONSE.md) | Incident response process |
| Data Protection Officer | [38-privacy-data-protection](workflows/38-privacy-data-protection.md) | DPO appointment |
| Cross-Border Transfers | [39-secure-data-handling](workflows/39-secure-data-handling.md) | Transfer mechanisms |

### CCPA (California Consumer Privacy Act)

| Requirement | Workflow | Implementation |
|-------------|----------|----------------|
| Right to Know | [38-privacy-data-protection](workflows/38-privacy-data-protection.md) | Data access procedures |
| Right to Delete | [38-privacy-data-protection](workflows/38-privacy-data-protection.md) | Deletion procedures |
| Right to Opt-Out | [38-privacy-data-protection](workflows/38-privacy-data-protection.md) | Opt-out mechanisms |
| Non-Discrimination | [38-privacy-data-protection](workflows/38-privacy-data-protection.md) | Fair treatment |

### HIPAA (Health Insurance Portability and Accountability Act)

| Requirement | Workflow | Implementation |
|-------------|----------|----------------|
| Administrative Safeguards | [10-security](workflows/10-security.md) | Security policies |
| Technical Safeguards | [39-secure-data-handling](workflows/39-secure-data-handling.md) | Encryption, access controls |
| Physical Safeguards | [39-secure-data-handling](workflows/39-secure-data-handling.md) | Physical security |
| Breach Notification | [INCIDENT-RESPONSE.md](INCIDENT-RESPONSE.md) | Incident response |

### PCI DSS (Payment Card Industry Data Security Standard)

| Requirement | Workflow | Implementation |
|-------------|----------|----------------|
| Secure Network | [10-security](workflows/10-security.md) | Network security |
| Protect Cardholder Data | [39-secure-data-handling](workflows/39-secure-data-handling.md) | Encryption, masking |
| Vulnerability Management | [10-security](workflows/10-security.md) | Vulnerability scanning |
| Access Control | [39-secure-data-handling](workflows/39-secure-data-handling.md) | RBAC, MFA |
| Monitor and Test | [24-monitoring](workflows/24-monitoring.md) | Monitoring, testing |

### SOC 2 (Service Organization Control 2)

| Requirement | Workflow | Implementation |
|-------------|----------|----------------|
| Security | [10-security](workflows/10-security.md) | Security controls |
| Availability | [47-sre](workflows/47-sre.md) | SLOs, reliability |
| Processing Integrity | [50-database-design](workflows/50-database-design.md) | Data integrity |
| Confidentiality | [39-secure-data-handling](workflows/39-secure-data-handling.md) | Confidentiality controls |
| Privacy | [38-privacy-data-protection](workflows/38-privacy-data-protection.md) | Privacy controls |

## Compliance Workflows Summary

| Workflow | GDPR | CCPA | HIPAA | PCI DSS | SOC 2 |
|----------|------|------|-------|---------|-------|
| 10-Security Audit | ✓ | ✓ | ✓ | ✓ | ✓ |
| 22-Compliance Audit | ✓ | ✓ | ✓ | ✓ | ✓ |
| 38-Privacy & Data Protection | ✓ | ✓ | ✓ | | ✓ |
| 39-Secure Data Handling | ✓ | ✓ | ✓ | ✓ | ✓ |
| 41-Internal Audit | ✓ | ✓ | ✓ | ✓ | ✓ |
| 44-Data Audit | ✓ | ✓ | ✓ | ✓ | ✓ |

## Audit Trail

All compliance activities are logged for audit purposes:
- Audit logs are immutable
- Logs include who, what, when, where
- Logs are retained per regulatory requirements
- Logs are available for regulatory review
