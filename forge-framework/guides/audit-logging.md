# Audit Logging Guide - Forge Engineering Lifecycle Framework

## Overview
This guide provides comprehensive audit logging procedures to track, record, and analyze security events, access attempts, and system changes throughout the Forge framework. It covers log collection, analysis, compliance requirements, and incident investigation.

## Audit Logging Principles

### 1. Comprehensive Coverage
- Log all security-relevant events
- Capture user actions and system changes
- Record access to sensitive data
- Track authentication and authorization events

### 2. Immutable and Secure Logs
- Use write-once, append-only log storage
- Implement log integrity verification
- Secure logs from unauthorized access
- Regular log rotation and archival

### 3. Structured Logging
- Standardize log format and structure
- Include timestamps and event correlation
- Use consistent log levels and severity
- Enable log parsing and analysis

### 4. Privacy Considerations
- Separate sensitive logs from general logs
- Redact sensitive information in logs
- Implement data minimization for log collection
- Ensure compliance with privacy regulations

## Audit Log Categories

### 1. Access Control Logs

#### User Authentication
**Events Tracked:**
- Login attempts (successful/failed)
- Logout actions
- Session creation and termination
- Password changes
- Multi-factor authentication attempts

**Log Format Example:**
```json
{
  "event_type": "authentication",
  "timestamp": "2026-08-31T12:00:00Z",
  "user_id": "user123",
  "ip_address": "192.168.1.100",
  "user_agent": "Mozilla/5.0...",
  "action": "login",
  "result": "success",
  "failure_reason": null,
  "mfa_used": true,
  "session_id": "sess_abc123"
}
```

#### Authorization Changes
**Events Tracked:**
- Role assignments and changes
- Permission modifications
- Access level changes
- Privilege escalation attempts

**Log Format Example:**
```json
{
  "event_type": "authorization_change",
  "timestamp": "2026-08-31T12:01:00Z",
  "user_id": "admin123",
  "target_user_id": "user456",
  "action": "role_change",
  "old_role": "developer",
  "new_role": "senior_developer",
  "reason": "promotion",
  "approved_by": "manager789"
}
```

#### Access Denied Events
**Events Tracked:**
- Unauthorized access attempts
- Permission violations
- Resource access rejections

**Log Format Exponent:**
```json
{
  "event_type": "access_denied",
  "timestamp": "2026-08-31T12:02:00Z",
  "user_id": "user456",
  "target_resource": "database_config",
  "action": "read",
  "reason": "insufficient_permissions",
  "ip_address": "192.168.1.100",
  "user_agent": "Mozilla/5.0..."
}
```

### 2. Data Access Logs

#### Sensitive Data Access
**Events Tracked:**
- Access to PII data
- Database queries on sensitive tables
- File system access to sensitive files
- API access to sensitive endpoints

**Log Format Example:**
```json
{
  "event_type": "data_access",
  "timestamp": "2026-08-31T12:03:00Z",
  "user_id": "user123",
  "resource_type": "database",
  "resource_id": "customers",
  "action": "select",
  "columns_accessed": ["name", "email", "phone"],
  "where_clause": "customer_id = 456",
  "ip_address": "192.168.1.100",
  "session_id": "sess_abc123"
}
```

#### File System Access
**Events Tracked:**
- File read/write operations
- Directory listings
- File creation and deletion
- Permission changes

**Log Format Example:**
```json
{
  "event_type": "file_access",
  "timestamp": "2026-08-31T12:04:00Z",
  "user_id": "service_account",
  "file_path": "/var/www/config/secrets.json",
  "action": "read",
  "file_size": 1024,
  "hash": "sha256:a1b2c3d4...",
  "source_ip": "10.0.0.1"
}
```

### 3. System Configuration Changes

#### Configuration Modifications
**Events Tracked:**
- Application configuration changes
- Security policy modifications
- System parameter updates
- Database schema changes

**Log Format Example:**
```json
{
  "event_type": "configuration_change",
  "timestamp": "2026-08-31T12:05:00Z",
  "user_id": "admin123",
  "component": "application",
  "configuration_key": "security.maximum_login_attempts",
  "old_value": "3",
  "new_value": "5",
  "reason": "security enhancement",
  "approved_by": "manager789"
}
```

#### Service Configuration
**Events Tracked:**
- Service startup/stops
- Network configuration changes
- SSL/TLS certificate updates
- Backup configuration changes

**Log Format Example:**
```json
{
  "event_type": "service_configuration",
  "timestamp": "2026-08-31T12:06:00Z",
  "user_id": "dev123",
  "service_name": "auth-service",
  "action": "update",
  "changes": {
    "auth_method": "ldap",
    "timeout": 300,
    "max_connections": 1000
  },
  "impact_assessment": "high"
}
```

### 4. Security Events

#### Threat Detection
**Events Tracked:**
- Intrusion detection system alerts
- Anomaly detection alerts
- Malware scanning results
- Network security events

**Log Format Example:**
```json
{
  "event_type": "threat_detection",
  "timestamp": "2026-08-31T12:07:00Z",
  "alert_id": "ALERT-2026-0831-0007",
  "threat_type": "brute_force_login",
  "severity": "high",
  "source_ip": "192.168.1.200",
  "target_user": "admin123",
  "attempts_count": 15,
  "time_window_seconds": 300,
  "action_taken": "account_locked"
}
```

#### Vulnerability Assessment
**Events Tracked:**
- Scanner results
- Vulnerability reports
- Patch availability
- Security configuration issues

**Log Format Example:**
```json
{
  "event_type": "vulnerability_assessment",
  "timestamp": "2026-08-31T12:08:00Z",
  "scan_id": "SCAN-2026-0831-001",
  "target": "prod-database-server",
  "severity": "medium",
  "vulnerability_type": "outdated_software",
  "description": "Apache Tomcat 9.0.0 - CVE-2021-12037",
  "remediation": "Apply Tomcat 9.0.40 or later"
}
```

### 5. Incident Response

#### Security Incident Reports
**Events Tracked:**
- Security breach reports
- Incident investigation results
- Response actions taken
- Post-incident analysis

**Log Format Example:**
```json
{
  "event_type": "security_incident",
  "timestamp": "2026-08-31T12:09:00Z",
  "incident_id": "INC-2026-0831-001",
  "incident_type": "unauthorized_access",
  "severity": "high",
  "affected_systems": ["database", "api_gateway"],
  "initial_detection": "2026-08-31T11:45:00Z",
  "response_started": "2026-08-31T11:50:00Z",
  "response_completed": "2026-08-31T12:00:00Z",
  "root_cause": "stolen_credentials",
  "affected_users": ["user456", "user789"]
}
```

## Audit Log Management

### 1. Log Collection

#### Centralized Logging
```python
import structlog
from structlog.processors import TimeStamper
import json

class AuditLogger:
    def __init__(self, log_level='INFO'):
        # Configure structured logging
        structlog.configure(
            processors=[
                structlog.processors.TimeStamper(fmt="iso"),
                structlog.processors.add_log_level,
                structlog.processors.format_exc_info,
                structlog.processors.dict_template,
                self.enrich_with_context,
                self.filter_sensitive_data,
                self.write_to_storage,
            ],
            wrapper_class=structlog.make_filtering_bound_logger,
            logger_factory=structlog.PrintLoggerFactory(),
            cache_logger_on_first_use=True,
            context_class=dict,
        )
        
        self.logger = structlog.get_logger()
        self.log_level = log_level
    
    def enrich_with_context(self, logger, method_name, event_dict):
        # Add relevant context
        event_dict.update({
            'application': 'forge-framework',
            'version': '1.0.0',
            'environment': self.get_environment(),
            'log_source': 'audit',
        })
        return event_dict
    
    def filter_sensitive_data(self, logger, method_name, event_dict):
        # Remove or redact sensitive information
        sensitive_keys = ['password', 'token', 'secret', 'key', 'credit_card', 'ssn']
        for key in list(event_dict.keys()):
            if any(sensitive in key.lower() for sensitive in sensitive_keys):
                event_dict[key] = '[REDACTED]'
        return event_dict
    
    def write_to_storage(self, logger, method_name, event_dict):
        # Write to secure log storage
        self.store_audit_log(event_dict)
        return {}
    
    def log_event(self, event_type, event_details, user_id=None, context=None):
        """Log audit event"""
        log_data = {
            'event_type': event_type,
            'timestamp': datetime.now().isoformat(),
            'user_id': user_id,
            'context': context or {},
            'event_details': event_details,
        }
        
        # Log at appropriate level
        log_level = self.get_log_level(event_type)
        getattr(self.logger, log_level)(log_data)
        
        # Store in audit database
        self.store_audit_log(log_data)
    
    def get_log_level(self, event_type):
        """Determine appropriate log level based on event type"""
        # Map event types to log levels
        info_events = ['access_granted', 'configuration_change', 'data_access']
        warning_events = ['access_denied', 'suspicious_activity']
        error_events = ['security_breach', 'data_leakage', 'unauthorized_access']
        
        if event_type in info_events:
            return 'info'
        elif event_type in warning_events:
            return 'warning'
        elif event_type in error_events:
            return 'error'
        else:
            return 'info'
    
    def store_audit_log(self, log_data):
        """Store audit log in secure storage"""
        # Implement secure storage
        # This could be a database, file system, or other storage
        pass
    
    def get_environment(self):
        """Get current environment"""
        # This could be set via environment variable
        return os.getenv('ENVIRONMENT', 'development')
```

#### Log Rotation
```python
import time
import os
from datetime import datetime, timedelta

class LogRotationManager:
    def __init__(self, log_directory, max_size_mb=100, max_files=10):
        self.log_directory = log_directory
        self.max_size_mb = max_size_mb
        under_files = max_files
        self.current_log_file = None
        self.log_counter = 0
    
    def rotate_logs(self, log_data):
        """Rotate logs based on size and retention policies"""
        # Calculate current log file size
        if self.current_log_file:
            file_size = os.path.getsize(self.current_log_file)
        else:
            file_size = 0
        
        # Check if rotation is needed
        if file_size > (self.max_size_mb * 1024 * 1024) or self.log_counter >= self.max_files:
            self._perform_rotation()
        
        # Write log data
        self._write_log_data(log_data)
    
    def _perform_rotation(self):
        """Perform log rotation"""
        # Close current log file
        if self.current_log_file:
            self.current_log_file.close()
        
        # Rename current log file
        if os.path.exists(self.current_log_file):
            rotated_file = f"{self.current_log_file}.{self.log_counter}"
            os.rename(self.current_log_file, rotated_file)
            
            # Apply appropriate permissions
            os.chmod(rotated_file, 0o640)
        
        # Create new log file
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        self.current_log_file = os.path.join(
            self.log_directory,
            f"audit_log_{timestamp}.json"
        )
        
        # Open new log file
        with open(self.current_log_file, 'a') as f:
            f.write('[')  # JSON array start
        
        # Increment counter
        self.log_counter += 1
    
    def _write_log_data(self, log_data):
        """Write log data to current log file"""
        if not self.current_log_file:
            self.current_log_file = os.path.join(
                self.log_directory,
                f"audit_log_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
            )
        
        # Append log data
        with open(self.current_log_file, 'a') as f:
            if self.log_counter > 1:
                f.write(', ')  # Add comma between entries
            json.dump(log_data, f)
    
    def cleanup_old_logs(self):
        """Clean up old log files based on retention policy"""
        current_time = datetime.now()
        cutoff_time = current_time - timedelta(days=30)
        
        for filename in os.listdir(self.log_directory):
            if filename.startswith('audit_log_') and filename.endswith('.json'):
                file_time_str = filename[10:-5]  # Extract timestamp from filename
                try:
                    file_time = datetime.strptime(file_time_str, '%Y%m%d_%H%M%S')
                    if file_time < cutoff_time:
                        os.remove(os.path.join(self.log_directory, filename))
                except ValueError:
                    # Skip files with invalid timestamp format
                    pass
```

#### Log Analysis
```python
import json
import pandas as pd
from datetime import datetime
from collections import defaultdict

class AuditLogAnalyzer:
    def __init__(self, log_directory):
        self.log_directory = log_directory
    
    def analyze_logs(self, time_range=None):
        """Analyze audit logs within specified time range"""
        all_logs = []
        
        # Collect all log files
        for filename in os.listdir(self.log_directory):
            if filename.startswith('audit_log_') and filename.endswith('.json'):
                file_path = os.path.join(self.log_directory, filename)
                all_logs.extend(self._load_log_file(file_path))
        
        # Filter by time range
        if time_range:
            start_time, end_time = time_range
            all_logs = [
                log for log in all_logs
                if start_time <= datetime.fromisoformat(log['timestamp']) <= end_time
            ]
        
        return self._analyze_log_data(all_logs)
    
    def _load_log_file(self, file_path):
        """Load logs from file"""
        try:
            with open(file_path, 'r') as f:
                # Handle JSON array format
                content = f.read()
                if content.startswith('[') and content.endswith(']'):
                    content = content[1:-1]
                    if content:
                        logs = [json.loads(log.strip()) for log in content.split(',')]
                        return logs
        except Exception as e:
            print(f"Error loading log file {file_path}: {e}")
        
        return []
    
    def _analyze_log_data(self, logs):
        """Analyze log data and generate statistics"""
        analysis = {
            'total_events': len(logs),
            'event_types': self._count_event_types(logs),
            'user_activity': self._analyze_user_activity(logs),
            'security_events': self._identify_security_events(logs),
            'access_patterns': self._analyze_access_patterns(logs),
            'compliance_metrics': self._calculate_compliance_metrics(logs),
            'time_patterns': self._analyze_time_patterns(logs)
        }
        
        return analysis
    
    def _count_event_types(self, logs):
        """Count occurrences of each event type"""
        event_counts = defaultdict(int)
        for log in logs:
            event_counts[log['event_type']] += 1
        return dict(event_counts)
    
    def _analyze_user_activity(self, logs):
        """Analyze user activity patterns"""
        user_activity = defaultdict(list)
        for log in logs:
            user_activity[log['user_id']].append(log)
        
        return {
            'active_users': len(user_activity),
            clearance_users': user_activity,
            'average_actions_per_user': sum(len(actions) for actions in user_activity.values()) / max(len(user_activity), 1)
        }
    
    def _identify_security_events(self, logs):
        """Identify and categorize security events"""
        security_events = {
            'access_denied': [],
            'authentication_failures': [],
            'suspicious_activities': [],
            'data_access_violations': []
        }
        
        for log in logs:
            if log['event_type'] == 'access_denied':
                security_events['access_denied'].append(log)
            elif log['event_type'] == 'authentication':
                if log.get('result') == 'failure':
                    security_events['authentication_failures'].append(log)
                elif log.get('suspicious', False):
                    security_events['suspicious_activities'].append(log)
            elif log['event_type'] == 'data_access':
                security_events['data_access_violations'].append(log)
        
        return {
            'access_denied_count': len(security_events['access_denied']),
            'authentication_failures_count': len(security_events['authentication_failures']),
            'suspicious_activities_count': len(security_events['suspicious_activities']),
            'data_access_violations_count': len(security_events['data_access_violations'])
        }
    \n    def _analyze_access_patterns(self, logs):
        """Analyze access patterns"""
        access_patterns = {
            'hourly_distribution': defaultdict(int),
            'daily_distribution': defaultdict(int),
            'resource_access': defaultdict(int),
            'action_types': defaultdict(int)
        }
        
        for log in logs:
            # Extract hour from timestamp
            timestamp = datetime.fromisoformat(log['timestamp'])
            hour = timestamp.hour
            access_patterns['hourly_distribution'][hour] += 1
            
            # Extract day of week
            day = timestamp.strftime('%A')
            access_patterns['daily_distribution'][day] += 1
            
            # Count resource access
            if 'resource_type' in log:
                access_patterns['resource_access'][log['resource_type']] += 1
            
            # Count action types
            if 'action' in log:
                access_patterns['action_types'][log['action']] += 1
        
        return dict(access_patterns)
    
    def _calculate_compliance_metrics(self, logs):
        """Calculate compliance metrics"""
        # Implementation would depend on specific compliance requirements
        # This is a simplified example
        compliance_metrics = {
            'audit_coverage': self._calculate_audit_coverage(logs),
            'response_time_metrics': self._calculate_response_time_metrics(logs),
            'escalation_metrics': self._calculate_escalation_metrics(logs),
            'remediation_tracking': self._calculate_remediation_tracking(logs)
        }
        
        return compliance_metrics
    
    def _calculate_response_time_metrics(self, logs):
        """Calculate security response time metrics"""
        response_times = []
        
        for log in logs:
            if log['event_type'] == 'security_incident':
                if 'response_started' in log and 'response_completed' in log:
                    start_time = datetime.fromisoformat(log['response_started'])
                    end_time = datetime.fromisoformat(log['response_completed'])
                    response_time = (end_time - start_time).total_seconds()
                    response_times.append(response_time)
        
        if not response_times:
            return {
                'average_response_time': 0,
                'median_response_time': 0,
                'max_response_time': 0,
                'min_response_time': 0
            }
        
        response_times.sort()
        return {
            'average_response_time': sum(response_times) / len(response_times),
            'median_response_time': response_times[len(response_times) // 2],
            'max_response_time': max(response_times),
            'min_response_time': min(response_times),
            'response_time_distribution': self._distribute_response_times(response_times)
        }
    
    def _distribute_response_times(self, response_times):
        """Distribute response times into categories"""
        categories = {
            'under_5_minutes': 0,
            '5_to_15_minutes': 0,
            '15_to_30_minutes': 0,
            'over_30_minutes': 0
        }
        
        for rt in response_times:
            minutes = rt / 60
            if minutes < 5:
                categories['under_5_minutes'] += 1
            elif minutes < 15:
                categories['5_to_15_minutes'] += 1
            elif minutes < 30:
                categories['15_to_30_minutes'] += 1
            else:
                categories['over_30_minutes'] += 1
        
        return categories
    
    def _analyze_time_patterns(self, logs):
        """Analyze patterns over time"""
        # Implementation would analyze temporal patterns
        return {
            'peak_hours': self._find_peak_hours(logs),
            'trend_analysis': self._analyze_trends(logs),
            'seasonal_patterns': self._identify_seasonal_patterns(logs)
        }
    
    def _find_peak_hours(self, logs):
        """Find hours with highest activity"""
        # Implementation would analyze hourly distribution
        return []
    
    def _analyze_trends(self, logs):
        """Analyze trends over time"""
        # Implementation would analyze trends
        return []
    
    def _identify_seasonal_patterns(self, logs):
        """Identify seasonal patterns"""
        # Implementation would identify seasonal patterns
        return []
```

## Log Security

### 1. Access Controls

#### Log File Permissions
```python
def set_log_file_permissions(log_directory):
    """Set secure permissions for log files"""
    for filename in os.listdir(log_directory):
        if filename.startswith('audit_log_') and filename.endswith('.json'):
            file_path = os.path.join(log_directory, filename)
            
            # Set owner to root or specific user
            os.chown(file_path, 0, 0)  # root:root
            
            # Set file permissions to read-only for owner, read for group
            os.chmod(file_path, 0o640)
            
            # Ensure directory permissions
            os.chmod(log_directory, 0o750)
```

#### Encryption of Logs
```python
import hashlib
import os
from cryptography.fernet import Fernet

class LogEncryption:
    def __init__(self, encryption_key):
        self.encryption_key = encryption_key
        self.cipher = Fernet(encryption_key)
    
    def encrypt_log_file(self, input_path, output_path):
        """Encrypt log file"""
        with open(input_path, 'rb') as input_file:
            data = input_file.read()
        
        encrypted_data = self.cipher.encrypt(data)
        
        with open(output_path, 'wb') as output_file:
            output_file.write(encrypted_data)
        
        # Set appropriate permissions
        os.chmod(output_path, 0o600)
    
    def decrypt_log_file(self, input_path, output_path):
        """Decrypt log file"""
        with open(input_path, 'rb') as input_file:
            encrypted_data = input_file.read()
        
        decrypted_data = self.cipher.decrypt(encrypted_data)
        
        with open(output_path, 'wb') as output_file:
            output_file.write(decrypted_data)
        
        # Set appropriate permissions
        os.chmod(output_path, 0o640)
    
    def generate_encryption_key(self):
        """Generate encryption key"""
        return Fernet.generate_key()
```

### 2. Log Storage Security

#### Secure Log Storage
```python
import sqlite3
import hashlib
import os
from datetime import datetime

class SecureLogStorage:
    def __init__(self, database_path):
        self.database_path = database_path
        self.init_database()
    
    def init_database(self):
        """Initialize database for log storage"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Create audit logs table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS audit_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                log_id TEXT UNIQUE,
                event_type TEXT NOT NULL,
                timestamp TEXT NOT NULL,
                user_id TEXT,
                event_data TEXT NOT NULL,
                hash TEXT NOT NULL,
                created_at TEXT NOT NULL,
                is_encrypted BOOLEAN DEFAULT FALSE
            )
        ''')
        
        # Create indexes
        cursor.execute('CREATE INDEX IF NOT EXISTS idx_audit_logs_timestamp ON audit_logs (timestamp)')
        cursor.execute('CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON audit_logs (user_id)')
        cursor.execute('CREATE INDEX IF NOT EXISTS idx_audit_logs_event_type ON audit_logs (event_type)')
        
        conn.commit()
        conn.close()
    
    def store_log(self, log_data):
        """Store log in secure database"""
        # Generate unique log ID
        log_id = hashlib.sha256(
            f"{log_data['timestamp']}{log_data['user_id']}{hashlib.sha256(json.dumps(log_data['event_data']).encode()).hexdigest()}".encode()
        ).hexdigest()
        
        # Calculate hash of log data
        data_hash = hashlib.sha256(json.dumps(log_data['event_data'], sort_keys=True).encode()).hexdigest()
        
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Insert log data
        cursor.execute('''
            INSERT INTO audit_logs (
                log_id, event_type, timestamp, user_id, event_data, hash, created_at, is_encrypted
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            log_id,
            log_data['event_type'],
            log_data['timestamp'],
            log_data.get('user_id'),
            json.dumps(log_data['event_data']),
            data_hash,
            datetime.now().isoformat(),
            log_data.get('is_encrypted', False)
        ))
        
        conn.commit()
        conn.close()
    
    def retrieve_log(self, log_id):
        """Retrieve log by ID"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        cursor.execute('SELECT * FROM audit_logs WHERE log_id = ?', (log_id,))
        result = cursor.fetchone()
        
        conn.close()
        
        if result:
            return {
                'id': result[0],
                'log_id': result[1],
                'event_type': result[2],
                'timestamp': result[3],
                'user_id': result[4],
                'event_data': json.loads(result[5]),
                'hash': result[6],
                'created_at': result[7],
                'is_encrypted': result[8]
            }
        
        return None
    
    def query_logs(self, filters=None, limit=None, offset=None):
        """Query logs with optional filters"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        # Build query
        query = 'SELECT * FROM audit_logs WHERE 1=1'
        params = []
        
        if filters:
            if 'event_type' in filters:
                query += ' AND event_type = ?'
                params.append(filters['event_type'])
            
            if 'user_id' in filters:
                query += ' AND user_id = ?'
                params.append(filters['user_id'])
            
            if 'start_timestamp' in filters and 'end_timestamp' in filters:
                query += ' AND timestamp BETWEEN ? AND ?'
                params.extend([filters['start_timestamp'], filters['end_timestamp']])
        
        query += ' ORDER BY timestamp DESC'
        
        if limit:
            query += f' LIMIT {limit}'
        
        if offset:
            query += f' OFFSET {offset}'
        
        cursor.execute(query, params)
        results = cursor.fetchall()
        
        conn.close()
        
        # Convert to list of dictionaries
        logs = []
        for result in results:
            logs.append({
                'id': result[0],
                'log_id': result[1],
                'event_type': result[2],
                'timestamp': result[3],
                'user_id': result[4],
                'event_data': json.loads(result[5]),
                'hash': result[6],
                'created_at': result[7],
                'is_encrypted': result[8]
            })
        
        return logs
```

### 3. Log Integrity

#### Hash Verification
```python
class LogIntegrityChecker:
    def __init__(self, database_path):
        self.database_path = database_path
    
    def verify_log_integrity(self, log_id):
        """Verify integrity of log entry"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        cursor.execute('SELECT log_id, event_data, hash, created_at FROM audit_logs WHERE log_id = ?', (log_id,))
        result = cursor.fetchone()
        
        conn.close()
        
        if not result:
            return {
                'valid': False,
                'error': 'Log entry not found'
            }
        
        log_id, stored_event_data, stored_hash, created_at = result
        
        # Calculate current hash
        current_hash = hashlib.sha256(json.dumps(stored_event_data, sort_keys=True).encode()).hexdigest()
        
        # Verify hash
        is_valid = current_hash == stored_hash
        
        return {
            'valid': is_valid,
            'log_id': log_id,
            'stored_hash': stored_hash,
            'current_hash': current_hash,
            'created_at': created_at
        }
    
    def check_integrity_of_all_logs(self):
        """Check integrity of all logs in database"""
        conn = sqlite3.connect(self.database_path)
        cursor = conn.cursor()
        
        cursor.execute('SELECT log_id, event_data, hash FROM audit_logs')
        results = cursor.fetchall()
        
        conn.close()
        
        integrity_results = []
        invalid_count = 0
        
        for result in results:
            log_id, stored_event_data, stored_hash = result
            
            # Calculate current hash
            current_hash = hashlib.sha256(json.dumps(stored_event_data, sort_keys=True).encode()).hexdigest()
            
            # Check integrity
            is_valid = current_hash == stored_hash
            integrity_results.append({
                'log_id': log_id,
                'valid': is_valid,
                'stored_hash': stored_hash,
                'current_hash': current_hash
            })
            
            if not is_valid:
                invalid_count += 1
        \n        return {
            'total_logs': len(results),
            'valid_logs': len(results) - invalid_count,
            'invalid_logs': invalid_count,
            'integrity_percentage': (len(results) - invalid_count) / len(results) * 100 if results else 0,
            'details': integrity_results
        }
```

## Compliance Requirements

### 1. Regulatory Compliance

#### GDPR Compliance
- **Data Minimization**: Only collect necessary data
- **Consent Management**: Track and manage user consent
- **Right to Access**: Enable users to access their data
- **Right to Erasure**: Enable users to delete their data
- **Data Portability**: Enable data export in standard format

#### CCPA Compliance
- **Right to Know**: Disclose personal data collection
- **Right to Delete**: Delete personal data
- **Right to Opt-Out**: Opt-out of sale of personal data
- **Non-Discrimination**: No discrimination for exercising rights

#### HIPAA Compliance
- **Administrative Safeguards**: Security management processes
- **Technical Safeguards**: Access controls and security measures
- **Physical Safeguards**: Physical security measures
- **Breach Notification**: Notify individuals of security breaches

### 2. Industry Compliance

#### PCI DSS Compliance
- **Build Secure Networks and Systems**: Protect cardholder data
- **Protect Cardholder Data**: Encrypt transmission of cardholder data
- **Maintain a Vulnerability Management Program**: Regularly test and secure systems
- **Implement Strong Access Controls**: Restrict access to cardholder data
- **Identify and Protect Rational Systems**: Identify all systems that store, process, or transmit cardholder data
- **Regularly Monitor and Test Security Systems**: Monitor and test security controls

#### SOX Compliance
- **Section 302**: Corporate responsibility for financial reports
- **Section 404**: Management assessment of internal controls
- **Section 409**: Real-time disclosure of material changes
- **Section 802**: Document retention requirements

### 3. Internal Compliance

#### Policy Compliance
- **Policy Definition**: Define security and privacy policies
- **Policy Communication**: Communicate policies to employees
- **Policy Enforcement**: Enforce policies through disciplinary actions
- **Policy Review**: Regularly review and update policies

#### Training Compliance
- **Initial Training**: Train all employees on security policies
- **Refresher Training**: Provide regular refresher training
- **Compliance Training**: Provide compliance-specific training
- **Awareness Programs**: Conduct awareness campaigns

## Compliance Reporting

### 1. Compliance Dashboard
```python
class ComplianceDashboard:
    def __rit__:
        self.log_analyzer = AuditLogAnalyzer('path/to/logs')
    
    def generate_dashboard(self):
        """Generate compliance dashboard"""
        # Analyze logs
        analysis = self.log_analyzer.analyze_logs()
        
        # Generate dashboard data
        dashboard_data = {
            'summary': self._generate_summary(analysis),
            'security_metrics': self._generate_security_metrics(analysis),
            'compliance_status': self._generate_compliance_status(analysis),
            'trend_analysis': self._generate_trend_analysis(analysis),
            'recommendations': self._generate_recommendations(analysis)
        }
        
        return dashboard_data
    
    def _generate_summary(self, analysis):
        """Generate summary of analysis"""
        return {
            'total_events': analysis['total_events'],
            'compliance_score': self._calculate_compliance_score(analysis),
            'security_incidents': analysis['security_events']['access_denied_count'],
            'data_access_violations': analysis['security_events']['data_access_violations_count']
        }
    
    def _generate_security_metrics(self, analysis):
        """Generate security metrics"""
        return {
            'access_denied_rate': self._calculate_access_denied_rate(analysis),
            'authentication_failure_rate': self._calculate_authentication_failure_rate(analysis),
            'response_time_metrics': analysis['security_metrics']['response_time']
        }
    
    def _generate_compliance_status(self, analysis):
        """Generate compliance status"""
        return {
            'gdpr_compliance': self._check_gdpr_compliance(analysis),
            'ccpa_compliance': self._check_ccpa_compliance(analysis),
            'hipaa_compliance': self._check_hipaa_compliance(analysis),
            'pci_dss_compliance': self._check_pci_dss_compliance(analysis)
        }
    
    def _generate_trend_analysis(self, analysis):
        """Generate trend analysis"""
        return {
            'monthly_trends': self._analyze_monthly_trends(analysis),
            'event_type_trends': self._analyze_event_type_trends(analysis),
            'user_behavior_trends': self._analyze_user_behavior_trends(analysis)
        }
    
    def _generate_recommendations(self, analysis):
        """Generate compliance recommendations"""
        recommendations = []
        
        if analysis['security_events']['access_denied_count'] > 100:
            recommendations.append(
                'Implement multi-factor authentication to reduce unauthorized access attempts'
            )
        
        if analysis['security_events']['authentication_failures_count'] > 50:
            recommendations.append(
                'Implement account lockout policies to prevent brute force attacks'
            )
        
        if analysis['security_events']['data_access_violations_count'] > 20:
            recommendations.append(
                'Review and strengthen access controls for sensitive data'
            )
        
        return recommendations
```

### 2. Compliance Reporting Templates

#### Monthly Compliance Report
```markdown
# Monthly Compliance Report - [Month] [Year]

## Executive Summary
- Total Events Logged: [number]
- Compliance Score: [percentage]%
- Security Incidents: [number]
- Recommendations Implemented: [count]

## Compliance Metrics
- GDPR Compliance: [score]%
- CCPA Compliance: [score]%
- HIPAA Compliance: [score]%
- PCI DSS Compliance: [score]%

## Security Metrics
- Access Denied Events: [number]
- Authentication Failures: [number]
- Data Access Violations: [number]
- Response Time: [time]ms

## Incident Response
- Total Incidents: [number]
- High Severity Incidents: [number]
- Medium Severity Incidents: [number]
- Low Severity Incidents: [number]

## Compliance Gaps
1. [Gap 1 description]
2. [Gap 2 description]
3. [Gap 3 description]

## Recommendations
1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]

## Conclusion
[Summary of compliance status and outlook]
```

## Future Directions

### 1. Artificial Intelligence in Auditing
- **AI-Driven Log Analysis**: Use machine learning to analyze logs
- **Anomaly Detection**: Detect unusual patterns using AI
- **Predictive Analytics**: Predict security incidents before they occur

### 2. Advanced Logging Technologies
- **Distributed Ledger Logging**: Immutable audit logs using blockchain
- **Trusted Execution Environments**: Secure logging in TEEs
- **Homomorphic Encryption**: Analyze encrypted logs without decryption

### 3. Real-Time Compliance
- **Streaming Analytics**: Real-time log analysis
- **Instant Compliance Checks**: Continuous compliance validation
- **Dynamic Policy Enforcement**: Adjust policies based on real-time data

### 4. Integrated Compliance Management
- **Single Source of Truth**: Centralized compliance data
- **Cross-System Integration**: Integrate audit logs across systems
- **Unified Compliance Framework**: Common compliance framework for all systems

## Conclusion

Comprehensive audit logging is essential for security and compliance in modern systems. This guide provides the foundation for implementing effective audit logging that meets regulatory requirements and supports security operations.

Key takeaways:
1. **Comprehensive Coverage**: Log all security-relevant events
2. **Secure Storage**: Protect audit logs from unauthorized access
3. **Regular Analysis**: Analyze logs for security events and compliance
4. **Continuous Improvement**: Update logging policies and procedures
5. **Compliance Reporting**: Report on compliance status and metrics

The Forge framework provides comprehensive audit logging capabilities to ensure security and compliance throughout the SDLC.
