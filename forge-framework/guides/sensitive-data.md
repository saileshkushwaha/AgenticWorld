# Sensitive Data Guide - Forge Engineering Lifecycle Framework

## Overview
This guide provides procedures for handling and protecting sensitive data throughout the software development lifecycle. Sensitive data includes personally identifiable information (PII), protected health information (PHI), payment card data, intellectual property, and other confidential information.

## Sensitive Data Classification

### Data Classification Levels

| Level | Description | Examples | Handling Requirements |
|-------|-------------|----------|----------------------|
| **Public** | Information available to public | Company annual reports, public websites | No restrictions |
| **Internal** | Used within organization | Employee records, internal communications | Access limited to employees |
| **Confidential** | Sensitive but not regulated | Customer lists, merger agreements | Strict access controls |
| **Restricted** | Highly regulated or sensitive | Social Security Numbers, credit cards | Maximum security controls |

### Data Classification Framework

#### 1. Personally Identifiable Information (PII)

| Type | Examples | Risk Level | Handling |
|------|----------|------------|----------|
| **Basic PII** | Name, address, email, phone | Medium | Encryption, access controls |
| **Sensitive PII** | SSN, driver license, passport | High | Additional encryption, audit trails |
| **Financial PII** | Credit card, bank account, tax info | Critical | PCI-DSS compliance, tokenization |
| **Health PII** | Medical records, health information | Critical | HIPAA compliance, strict access |

#### 2. Corporate Confidential Data

| Type | Examples | Risk Level | Handling |
|------|----------|------------|----------|
| **Intellectual Property** | Patents, trade secrets, proprietary algorithms | High | Need-to-know access, NDAs |
| **Customer Data** | CRM data, marketing lists | Medium | Consent management, access logs |
| **Operational Data** | System configurations, backup data | Medium | Secure storage, limited access |

## Data Handling Principles

### 1. Data Minimization
- Collect only data necessary for the task
- Remove unnecessary data after processing
- Use data anonymization when possible

### 2. Purpose Limitation
- Use data only for specified purposes
- Document data usage policies
- Implement purpose-based access controls

### 3. Storage Limitation
- Retain data only as long as needed
- Implement automated data retention policies
- Securely dispose of data when no longer required

### 4. Integrity and Confidentiality
- Protect data from unauthorized access
- Maintain data accuracy and consistency
- Implement backup and recovery procedures

### 5. Accountability
- Document data handling procedures
- Maintain audit trails of data access
- Regularly review data handling practices

## Data Discovery and Classification

### 1. Data Discovery

#### Automated Discovery
```python
import os
import re
from datetime import datetime

def discover_sensitive_data(directory):
    """Discover sensitive data in directory"""
    sensitive_patterns = {
        'SSN': r'\d{3}-\d{2}-\d{4}',
        'Credit Card': r'\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}',
        'Email': r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',
        'Phone': r'\b(\d{3}[-.]?\d{3}[-.]?\d{4}|\+\d{1,3}[-. ]?\d{3}[-.]?\d{3}[-.]?\d{4})\b'
    }
    
    discovered_data = []
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.txt', '.json', '.xml', '.csv', '.db', '.xlsx')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                        for data_type, pattern in sensitive_patterns.items():
                            matches = re.finditer(pattern, content)
                            for match in matches:
                                discovered_data.append({
                                    'file': file_path,
                                    'type': data_type,
                                    'content_preview': content[match.start():match.end()],
                                    'line_number': content[:match.start()].count('\n') + 1,
                                    'timestamp': datetime.now().isoformat()
                                })
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")
    
    return discovered_data
```

#### Manual Classification
- Review manually discovered sensitive data
- Categorize by sensitivity level
- Assign appropriate handling procedures

### 2. Data Classification Workflow

1. **Initial Assessment**
   - Identify data types and sources
   - Determine sensitivity levels
   - Assess regulatory requirements

2. **Classification Process**
   - Apply classification criteria
   - Document classification decisions
   - Assign classification labels

3. **Review and Approval**
   - Review classifications with stakeholders
   - Get approval from data owner
   - Update classification as needed

## Data Protection Measures

### 1. Encryption

#### Transparent Data Encryption (TDE)
```sql
-- SQL Server TDE example
CREATE MASTER KEY;

CREATE CERTIFICATE server_cert WITH SUBJECT = 'Server Certificate';

ALTER DATABASE <database_name> SET ENCRYPTION ON WITH (ENCRYPTION TYPE = AO_SEALED);
```

#### Application-Level Encryption
```python
from cryptography.fernet import Fernet
import base64
import hashlib
import os

class SensitiveDataHandler:
    def __init__(self, master_key):
        # Derive encryption key from master key
        salt = b'sensitive_data_salt'
        kdf = hashlib.pbkdf2_hmac(
            'sha256',
            master_key.encode(),
            salt,
            100000
        )
        self.encryption_key = base64.urlsafe_b64encode(kdf)
        self.cipher = Fernet(self.encryption_key)
    
    def encrypt_sensitive_data(self, data, field_names):
        """Encrypt specific fields in data"""
        if isinstance(data, dict):
            encrypted_data = data.copy()
            for field_name in field_names:
                if field_name in encrypted_data:
                    encrypted_data[field_name] = self.cipher.encrypt(
                        encrypted_data[field_name].encode()
                    ).decode()
            return encrypted_data
        return data
    
    def decrypt_sensitive_data(self, data, field_names):
        """Decrypt specific fields in data"""
        if isinstance(data, dict):
            decrypted_data = data.copy()
            for field_name in field_names:
                if field_name in decrypted_data:
                    try:
                        decrypted_data[field_name] = self.cipher.decrypt(
                            decrypted_data[field_name].encode()
                        ).decode()
                    except:
                        pass  # Keep encrypted if decryption fails
            return decrypted_data
        return data
```

#### Database Encryption
```sql
-- MySQL TDE example
ALTER TABLE users ADD COLUMN encrypted_data VARBINARY(MAX);

-- Only encrypt specific columns
ALTER TABLE customers MODIFY COLUMN credit_card VARBINARY(64);
ALTER TABLE customers MODIFY COLUMN cvv VARBINARY(16);
```

### 2. Access Control

#### Role-Based Access Control (RBAC)
```sql
-- Create roles
CREATE ROLE data_reader;
CREATE ROLE data_writer;
CREATE ROLE data_admin;

-- Grant permissions
GRANT SELECT ON ALL TABLES IN SCHEMA public TO data_reader;
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO data_writer;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO data_admin;

-- Create user roles
CREATE USER analyst ROLE data_reader;
CREATE USER developer ROLE data_writer;
CREATE USER database_admin ROLE data_admin;
```

#### Attribute-Based Access Control (ABAC)
```python
class ABACAccessControl:
    def __init__(self):
        self.policies = []
    
    def add_policy(self, user_attributes, resource_attributes, action, effect):
        self.policies.append({
            'user_attributes': user_attributes,
            'resource_attributes': resource_attributes,
            'action': action,
            'effect': effect
        })
    
    def evaluate_access(self, user, resource, action):
        for policy in self.policies:
            # Check if policy matches
            user_match = all(
                user.get(attr) == value 
                for attr, value in policy['user_attributes'].items()
            )
            
            resource_match = all(
                resource.get(attr) == value 
                for attr, value in policy['resource_attributes'].items()
            )
            
            action_match = policy['action'] == action
            
            if user_match and resource_match and action_match:
                return policy['effect'] == 'allow'
        
        return False  # Default deny
```

### 3. Anonymization and Pseudonymization

#### Data Anonymization
```python
import random
import string
import hashlib

def anonymize_pii(data):
    """Anonymize PII data"""
    anonymized = data.copy()
    
    # Hash email addresses
    if 'email' in anonymized:
        email = anonymized['email']
        anonymized['email_hash'] = hashlib.sha256(email.encode()).hexdigest()
        anonymized['email'] = None  # Remove original email
    
    # Replace names with random names
    if 'name' in anonymized:
        anonymized['name'] = f"User_{random.randint(1, 10000)}"
    
    # Replace phone numbers with masked versions
    if 'phone' in anonymized:
        phone = anonymized['phone']
        anonymized['phone_masked'] = f"{phone[:3]}-***-{phone[-4:]}"
        anonymized['phone'] = None
    
    return anonymized
```

#### Data Pseudonymization
```python
import hashlib
import secrets

class DataPseudonymizer:
    def __init__(self, salt):
        self.salt = salt.encode()
    
    def pseudonymize(self, identifier):
        """Convert identifier to pseudonym"""
        return hashlib.sha256(
            self.salt + identifier.encode()
        ).hexdigest()[:16]
    
    def depseudonymize(self, pseudonym):
        """Convert pseudonym back to identifier"""
        # This would require storing the mapping in a secure database
        # For this example, we'll simulate the reverse
        return pseudonym  # In real implementation, would lookup from database
```

### 4. Data Loss Prevention (DLP)

#### Network DLP
```python
import socket
import re

class NetworkDLP:
    def __init__(self):
        self.sensitive_patterns = {
            r'\d{3}-\d{2}-\d{4}': 'SSN',
            r'\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}': 'Credit Card',
            r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}': 'Email'
        }
    
    def monitor_network_traffic(self, data):
        """Monitor network traffic for sensitive data"""
        alerts = []
        
        for pattern_name, pattern in self.sensitive_patterns.items():
            matches = re.finditer(pattern, data)
            for match in matches:
                alerts.append({
                    'alert_type': 'Sensitive Data Detection',
                    'pattern': pattern_name,
                    'content_preview': data[match.start():match.end()],
                    'timestamp': datetime.now().isoformat()
                })
        
        return alerts
```

#### Endpoint DLP
```python
import hashlib
import os

class EndpointDLP:
    def __init__(self):
        self.hash_database = set()
    
    def scan_file(self, file_path):
        """Scan file for sensitive data"""
        sensitive_patterns = {
            r'\d{3}-\d{2}-\d{4}': 'SSN',
            r'\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}': 'Credit Card',
            r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}': 'Email'
        }
        
        alerts = []
        
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
                
                for pattern_name, pattern in sensitive_patterns.items():
                    matches = re.finditer(pattern, content)
                    for match in matches:
                        # Generate hash of matched content
                        content_hash = hashlib.sha256(match.group().encode()).hexdigest()
                        
                        if content_hash in self.hash_database:
                            # This is known sensitive data
                            alerts.append({
                                'alert_type': 'Known Sensitive Data',
                                'pattern': pattern_name,
                                'content_preview': match.group(),
                                'file_path': file_path,
                                'timestamp': datetime.now().isoformat()
                            })
                        else:
                            # New sensitive data detected
                            self.hash_database.add(content_hash)
                            alerts.append({
                                'alert_type': 'New Sensitive Data Detected',
                                'pattern': pattern_name,
                                'content_preview': match.group(),
                                'file_path': file_path,
                                'timestamp': datetime.now().isoformat()
                            })
        
        except Exception as e:
            print(f"Error scanning file {file_path}: {e}")
        
        return alerts
```

### 5. Secure Backup and Recovery

#### Encrypted Backups
```python
import os
import zipfile
import hashlib
from datetime import datetime

class SecureBackup:
    def __init__(self, encryption_key):
        self.encryption_key = encryption_key
        self.backup_dir = '/secure/backups'
        os.makedirs(self.backup_dir, exist_ok=True)
    
    def create_backup(self, data, backup_name):
        """Create encrypted backup"""
        # Generate backup ID
        backup_id = f"backup_{datetime.now().strftime('%Y%m%d_%H%M%S')}_{hashlib.sha256(backup_name.encode()).hexdigest()[:8]}"
        
        # Create backup directory
        backup_dir = os.path.join(self.backup_dir, backup_id)
        os.makedirs(backup_dir, exist_ok=True)
        
        # Save data with encryption
        encrypted_data = self._encrypt_data(data)
        backup_file = os.path.join(backup_dir, 'data.enc')
        
        with open(backup_file, 'wb') as f:
            f.write(encrypted_data)
        
        # Set restrictive permissions
        os.chmod(backup_file, 0o600)
        
        return backup_id
    
    def _encrypt_data(self, data):
        """Encrypt data for backup"""
        if isinstance(data, dict):
            import json
            data = json.dumps(data)
        
        # Simple encryption for demonstration
        from cryptography.fernet import Fernet
        cipher = Fernet(self.encryption_key)
        return cipher.encrypt(data.encode())
    
    def restore_backup(self, backup_id):
        """Restore encrypted backup"""
        backup_file = os.path.join(self.backup_dir, backup_id, 'data.enc')
        
        if os.path.exists(backup_file):
            with open(backup_file, 'rb') as f:
                encrypted_data = f.read()
            
            decrypted_data = self._decrypt_data(encrypted_data)
            return decrypted_data
        
        raise FileNotFoundError(f"Backup {backup_id} not found")
    
    def _decrypt_data(self, encrypted_data):
        """Decrypt data from backup"""
        from cryptography.fernet import Fernet
        cipher = Fernet(self.encryption_key)
        return cipher.decrypt(encrypted_data).decode()
```

### 6. Incident Response

#### Data Breach Response
```python
class DataBreachResponse:
    def __init__(self):
        self.incidents = []
    
    def report_breach(self, incident):
        """Report a data breach"""
        self.incidents.append({
            'incident_id': len(self.incidents) + 1,
            'timestamp': datetime.now().isoformat(),
            'type': incident['type'],
            'severity': incident['severity'],
            'description': incident['description'],
            'affected_records': incident['affected_records'],
            'actions_taken': incident['actions_taken']
        })
        
        # Take immediate actions
        self._take_immediate_actions(incident)
        
        # Notify relevant parties
        self._notify_parties(incident)
        
        # Document response
        self._document_response(incident)
    
    def _take_immediate_actions(self, incident):
        """Take immediate actions to contain breach"""
        # Isolate affected systems
        # Block unauthorized access
        # Preserve evidence
        # Update security controls
    
    def _notify_parties(self, incident):
        """Notify relevant parties of breach"""
        # Notify affected individuals
        # Contact regulatory authorities
        # Inform internal stakeholders
    
    def _document_response(self, incident):
        """Document breach response"""
        # Create incident report
        # Update incident database
        # Schedule follow-up actions
    
    def get_incident_report(self, incident_id):
        """Get detailed incident report"""
        if 1 <= incident_id <= len(self.incidents):
            return self.incidents[incident_id - 1]
        return None
```

## Compliance Requirements

### Regulatory Compliance

#### GDPR Compliance
```python
class GDPRCompliance:
    def __init__(self):
        self.consent_records = {}
        self.data_processing_log = []
    
    def process_data(self, data, purpose, legal_basis, data_subject_consent):
        """Process data with GDPR compliance"""
        # Record consent
        consent_id = f"consent_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        self.consent_records[consent_id] = {
            'timestamp': datetime.now().isoformat(),
            'data_subject': data_subject_consent['name'],
            'purpose': purpose,
            'legal_basis': legal_basis,
            'consent_given': data_subject_consent['given'],
            'consent_withdrawn': data_subject_consent.get('withdrawn', False)
        }
        
        # Log data processing
        processing_record = {
            'timestamp': datetime.now().isoformat(),
            'data_subject': data_subject_consent['name'],
            'purpose': purpose,
            'data_categories': list(data.keys()),
            'consent_id': consent_id,
            'processed_by': 'forge_framework'
        }
        self.data_processing_log.append(processing_record)
        
        # Check if data can be processed
        if not self._can_process_data(data_subject_consent, purpose):
            raise ValueError("Cannot process data: insufficient consent or legal basis")
        
        return data
    
    def _can_process_data(self, data_subject_consent, purpose):
        """Check if data can be processed under GDPR"""
        # Check consent
        if not data_subject_consent['given']:
            return False
        
        # Check if consent has been withdrawn
        consent_id = [cid for cid, record in self.consent_records.items() 
                     if record['data_subject'] == data_subject_consent['name'] 
                     and record['withdrawn']]
        
        if consent_id:
            return False
        
        # Check purpose compatibility
        valid_purposes = ['business_operations', 'customer_service', 'research']
        if purpose not in valid_purposes:
            return False
        
        return True
    
    def withdraw_consent(self, data_subject_name):
        """Process consent withdrawal"""
        for consent_id, record in self.consent_records.items():
            if record['data_subject'] == data_subject_name and not record['withdrawn']:
                record['withdrawn'] = True
                record['withdrawal_timestamp'] = datetime.now().isoformat()
                return True
        
        return False
    
    def get_data_subject_rights_request(self, data_subject_name):
        """Handle data subject rights requests"""
        # Access request
        access_data = self._get_data_subject_data(data_subject_name)
        
        # Rectification request
        # Erasure request
        # Portability request
        # Objection request
        
        return {
            'access_data': access_data,
            ' rectification_status': 'pending',
            'erasure_status': 'pending',
            'portability_data': None,
            'objection_status': 'pending'
        }
    
    def _get_data_subject_data(self, data_subject_name):
        """Get data for a specific data subject"""
        user_data = []
        
        for record in self.data_processing_log:
            if record['data_subject'] == data_subject_name:
                user_data.append({
                    'timestamp': record['timestamp'],
                    'purpose': record['purpose'],
                    'data_categories': record['data_categories'],
                    'processed_by': record['processed_by']
                })
        
        return user_data
```

#### HIPAA Compliance
```python
class HIPAACompliance:
    def __init__(self):
        self.business_associate_agreements = {}
        self.encryption_standards = {
            'at_rest': 'AES-256',
            'in_transit': 'TLS 1.2+'
        }
        self.access_controls = {
            'unique_user_ids': True,
            'privileged_access_logging': True,
            'minimum_necessary_access': True
        }
    
    def sign_business_associate_agreement(self, partner_name, services_provided):
        """Sign business associate agreement"""
        agreement_id = f"baa_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        agreement = {
            'agreement_id': agreement_id,
            'partner_name': partner_name,
            'services_provided': services_provided,
            'signed_date': datetime.now().isoformat(),
            'expiration_date': datetime.now() + timedelta(days=365),
            'hipaa_compliant': True
        }
        
        self.business_associate_agreements[agreement_id] = agreement
        return agreement_id
    
    def process_protected_health_information(self, phi_data, purpose):
        """Process protected health information with HIPAA compliance"""
        # Check if purpose is allowed
        allowed_purposes = ['treatment', 'payment', 'healthcare_operations']
        if purpose not in allowed_purposes:
            raise ValueError("Cannot process PHI for this purpose")
        
        # Check minimum necessary principle
        if not self._minimum_necessary_phi(phi_data, purpose):
            raise ValueError("PHI processed is not minimum necessary")
        
        # Log access
        access_record = {
            'timestamp': datetime.now().isoformat(),
            'user_id': self._get_current_user_id(),
            'purpose': purpose,
            'phi_data_categories': self._categorize_phi(phi_data),
            'access_reason': 'business_need'
        }
        
        # Store access log
        self._log_phi_access(access_record)
        
        return phi_data
    
    def _minimum_necessary_phi(self, phi_data, purpose):
        """Check if PHI accessed is minimum necessary"""
        # Implementation depends on specific PHI type and purpose
        # This is a simplified example
        if purpose == 'treatment':
            # Only access PHI directly related to treatment
            return True
        
        return True
    
    def _categorize_phi(self, phi_data):
        """Categorize PHI data"""
        categories = []
        
        if 'name' in phi_data:
            categories.append('personal_identification')
        
        if 'ssn' in phi_data:
            categories.append('financial_identification')
        
        if 'diagnosis' in phi_data:
            categories.append('health_status')
        
        return categories
    
    def _log_phi_access(self, access_record):
        """Log PHI access for audit trail"""
        # Store in secure audit log
        # Implement proper access controls
        # Schedule regular audits
        pass
```

### 3. Privacy by Design Implementation

#### Embedding Privacy Controls
```python
class PrivacyByDesign:
    def __init__(self):
        self.privacy_controls = []
        self.privacy_impact_assessments = []
    
    def design_with_privacy(self, system_design):
        """Design system with privacy controls"""
        # 1. Data minimization
        system_design['data_minimization'] = True
        
        # 2. purpose limitation
        system_design['purpose_limitation'] = True
        
        # 3. storage limitation
        system_design['storage_limitation'] = {
            'retention_period': 365,  # days
            'auto_delete': True
        }
        
        # 4. integrity and confidentiality
        system_design['integrity_confidentiality'] = {
            'encryption': 'AES-256',
            'access_controls': 'RBAC',
            'audit_trail': True
        }
        
        # 5. accountability
        system_design['accountability'] = {
            'policies': True,
            'training': True,
            'monitoring': True,
            'reports': True
        }
        
        return system_design
    
    def conduct_privacy_impact_assessment(self, project_name, data_types, processing_purposes):
        """Conduct privacy impact assessment"""
        assessment_id = f"pia_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        assessment = {
            'assessment_id': assessment_id,
            'project_name': project_name,
            'data_types': data_types,
            'processing_purposes': processing_purposes,
            'assessment_date': datetime.now().isoformat(),
            'privacy_controls': [],
            'risks_associated': [],
            'mitigation_measures': []
        }
        
        # Assess privacy risks
        for data_type in data_types:
            for purpose in processing_purposes:
                risk_level = self._assess_privacy_risk(data_type, purpose)
                if risk_level > 0:
                    assessment['risks_associated'].append({
                        'data_type': data_type,
                        'purpose': purpose,
                        'risk_level': risk_level,
                        'mitigation': self._get_mitigation_measures(data_type, purpose)
                    })
        
        self.privacy_impact_assessments.append(assessment)
        return assessment
    
    def _assess_privacy_risk(self, data_type, purpose):
        """Assess privacy risk level"""
        # Implementation depends on specific data type and purpose
        # This is a simplified example
        high_risk_types = ['financial_data', 'health_data', 'biometric_data']
        
        if data_type in high_risk_types:
            return 3  # High risk
        elif data_type in ['personal_contact', 'email_address']:
            return 2  # Medium risk
        else:
            return 1  # Low risk
    
    def _get_mitigation_measures(self, data_type, purpose):
        """Get appropriate mitigation measures"""
        # Implementation depends on specific data type and purpose
        # This is a simplified example
        return {
            'encryption': True,
            'access_controls': True,
            'data_minimization': True,
            'retention_limits': True,
            'audit_trail': True
        }
```

## Conclusion

Sensitive data protection is a critical aspect of any data processing system. By implementing the measures described in this guide, organizations can ensure that sensitive data is handled securely and in compliance with regulatory requirements. The key principles of sensitive data protection are:

1. **Data Classification**: Identify and classify sensitive data
2. **Access Control**: Implement proper access controls
3. **Encryption**: Encrypt sensitive data at rest and in transit
4. **Anonymization/Pseudonymization**: Protect data subjects' identities
5. **Data Loss Prevention**: Prevent unauthorized data access and exfiltration
6. **Secure Backup and Recovery**: Ensure data availability while maintaining security
7. **Incident Response**: Prepare for and respond to data breaches
8. **Compliance**: Ensure compliance with regulatory requirements

Organizations must continuously monitor, test, and improve their sensitive data protection measures to address evolving threats and compliance requirements.
