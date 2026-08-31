# Secure API Guide - Forge Engineering Lifecycle Framework

## Overview
This guide provides comprehensive procedures for developing secure APIs within the Forge framework. It covers API security design, implementation, testing, and operation to prevent unauthorized access, data breaches, and other security vulnerabilities.

## Secure API Design

### 1. Authentication and Authorization

#### Authentication Methods
| Method | Security Level | Implementation Complexity | Use Case |
|--------|---------------|-------------------------|----------|
| **API Keys** | Medium | Low | Machine-to-machine communication |
| **Bearer Tokens** | High | Medium | Web applications |
| **OAuth 2.0** | Very High | High | Third-party applications |
| **JWT (JSON Web Tokens)** | High | Medium | Web applications |
| **Mutual TLS** | Very High | High | High-security environments |

#### Token-Based Authentication
```python
from flask import Flask, request, jsonify
import jwt
import datetime
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        
        # Check authorization header
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            if auth_header.startswith('Bearer '):
                token = auth_header.split(' ')[1]
        
        # Check cookie
        if not token and 'token' in request.cookies:
            token = request.cookies['token']
        
        if not token:
            return jsonify({'error': 'Token is missing'}), 401
        
        try:
            # Decode token
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            request.user_id = data['user_id']
            request.role = data['role']\n        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
    return jsonify({'error': 'Invalid token'}), 401
    
    return decorated

def admin_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if not hasattr(request, 'role') or request.role != 'admin':
            return jsonify({'error': 'Admin access required'}), 403
        return f(*args, **kwargs)
    return decorated
```

#### Session Management
```python
class SessionManager:
    def __init__(self, redis_client):
        self.redis = redis_client
    
    def create_session(self, user_id, role, permissions):
        """Create a new session"""
        session_id = self.generate_session_id()
        session_data = {
            'user_id': user_id,
            'role': role,
            'permissions': permissions,
            'created_at': datetime.now().isoformat(),
            'last_accessed': datetime.now().isoformat(),
            'ip_address': self.get_client_ip(),
            'user_agent': self.get_user_agent()
        }
        
        # Store session in Redis
        self.redis.setex(
            f'session:{session_id}',
            3600,  # 1 hour expiration
            json.dumps(session_data)
        )
        
        return session_id
    
    def validate_session(self, session_id):
        """Validate session and return session data"""
        session_data = self.redis.get(f'session:{session_id}')
        
        if not session_data:
            return None
        
        session_data = json.loads(session_data)
        
        # Check if session is expired
        last_accessed = datetime.fromisoformat(session_data['last_accessed'])
        if datetime.now() - last_accessed > timedelta(hours=1):
            self.invalidate_session(session_id)
            return None
        
        # Update last accessed time
        session_data['last_accessed'] = datetime.now().isoformat()
        self.redis.setex(
            f'session:{session_id}',
            3600,
            json.dumps(session_data)
        )
        
        return session_data
    
    def invalidate_session(self, session_id):
        """Invalidate session"""
        self.redis.delete(f'session:{session_id}')
    
    def generate_session_id(self):
        """Generate unique session ID"""
        return secrets.token_urlsafe(32)
    
    def get_client_ip(self):
        """Get client IP address"""
        if 'X-Forwarded-For' in request.headers:
            return request.headers['X-Forwarded-For'].split(',')[0].strip()
        return request.remote_addr
    
    def get_user_agent(self):
        """Get user agent string"""
        return request.headers.get('User-Agent', '')
```

### 2. API Security Headers

#### Security Headers
```python
from flask import Flask, Response

app = Flask(__name__)

@app.after_request
def add_security_headers(response: Response):
    response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains'
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Content-Security-Policy'] = "default-src 'self'; script-src 'self'; style-src 'self'"
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    response.headers['Permissions-Policy'] = 'geolocation=(), microphone=(), camera=()'
    
    # Remove server header
    response.headers['Server'] = 'Secure Server'
    
    return response
```

### 3. Input Validation and Sanitization

#### Request Validation
```python
from pydantic import BaseModel, validator
from typing import Optional
import re

class SecureAPIRequest(BaseModel):
    """Base secure API request model"""
    
    # Input validation patterns
    username_pattern = r'^[a-zA-Z0-9_-]{3,50}$'
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    alphanumeric_pattern = r'^[a-zA-Z0-9]+$'
    
    @validator('username')
    def validate_username(cls, v):
        if not re.match(cls.username_pattern, v):
            raise ValueError('Username must contain only alphanumeric characters, underscores, and hyphens')
        return v
    
    @validator('email')
    def validate_email(cls, v):
        if not re.match(cls.email_pattern, v):
            raise ValueError('Invalid email format')
        return v
    
    @validator('id')
    def validate_id(cls, v):
        if not isinstance(v, int) or v <= 0:
            raise ValueError('ID must be a positive integer')
        return v
    
    @validator('name')
    def validate_name(cls, v):
        if len(v) < 1 or len(v) > 100:
            raise ValueError('Name must be between 1 and 100 characters')
        if not re.match(r'^[a-zA-Z0-9\s-\.,\'()]+$', v):
            raise ValueError('Name contains invalid characters')
        return v
```

#### Sanitization
```python
import re
from html import escape

class InputSanitizer:
    def __init__(self):
        # SQL injection patterns
        self.sql_injection_patterns = [
            r'(?i)(union\s+select)',
            r'(?i)(select\s+.*\s+from)',
            r'(?i)(insert\s+into)',
            r'(?i)(update\s+.*\s+set)',
            r'(?i)(delete\s+from)',
            r'(?i)(drop\s+table)',
            r'(?i)(--\s*$)',
            r'(?i)(#\s*$)',
            r'(?i)(\bexec\b)',
            r'(?i)(\bxp_cmdshell\b)'
        ]
        
        # XSS patterns
        self.xss_patterns = [
            r'<script[^>]*>',
            r'javascript:',
            r'onload\s*=',
            r'onerror\s*=',
            r'onclick\s*=',
            r'<iframe[^>]*>',
            r'<object[^>]*>',
            r'<embed[^>]*>'
        ]
    
    def sanitize_input(self, input_data, input_type='text'):
        """Sanitize user input"""
        if not input_data:
            return input_data
        
        sanitized = input_data.strip()
        
        # Check for injection attempts
        if self._contains_injection(sanitized, input_type):
            raise ValueError('Potential security threat detected')
        
        # Sanitize based on input type
        if input_type == 'html':
            sanitized = escape(sanitized)
        elif input_type == 'sql':
            sanitized = self._sanitize_sql_input(sanitized)
        elif input_type == 'url':
            sanitized = self._sanitize_url_input(sanitized)
        
        return sanitized
    
    def _contains_injection(self, input_data, input_type):
        """Check if input contains injection attempts"""
        for pattern in self.sql_injection_patterns + self.xss_patterns:
            if re.search(pattern, input_data, re.IGNORECASE):
                return True
        return False
    
    def _sanitize_sql_input(self, input_data):
        """Sanitize SQL input"""
        # Replace common SQL injection patterns
        sanitized = input_data
        for pattern in self.sql_injection_patterns:
            sanitized = re.sub(pattern, '', sanitized, flags=re.IGNORECASE)
        return sanitized
    
    def _sanitize_url_input(self, input_data):
        """Sanitize URL input"""
        # Validate URL format
        url_pattern = r'^https?:\/\/(?:[a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?$'
        if not re.match(url_pattern, input_data):
            raise ValueError('Invalid URL format')
        return input_data
```

### 4. Rate Limiting and Throttling

#### Rate Limiting Implementation
```python
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask import request

limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=[
        "100 per hour",  # General API users
        "10 per minute",  # Authenticated users
        "5 per minute"    # Admin users
    ]
)

@app.route('/api/users')
@limiter.limit("10 per minute")
def get_users():
    # Implement rate limiting
    pass

@app.route('/api/admin/users')
@limiter.limit("5 per minute", key=lambda: request.args.get('user_id', ''))
def get_user(user_id):
    # Implement user-specific rate limiting
    pass
```

#### Sliding Window Rate Limiting
```python
class SlidingWindowRateLimiter:
    def __init__(self):
        self.requests = {}
    
    def is_allowed(self, client_id, limit, window_seconds):
        """Check if client is allowed to make request"""
        current_time = time.time()
        window_start = current_time - window_seconds
        
        if client_id not in self.requests:
            self.requests[client_id] = []
        
        # Remove old requests
        self.requests[client_id] = [
            req_time for req_time in self.requests[client_id]
            if req_time >= window_start
        ]
        
        # Check if limit exceeded
        if len(self.requests[client_id]) >= limit:
            return False
        
        # Record new request
        self.requests[client_id].append(current_time)
        return True
```

### 5. API Security Testing

#### Security Testing Framework
```python
import requests
import json
from urllib.parse rewriter import URLParser

class API securityTester:
    def __init__(self, base_url):
        self.base_url = base_url
        self.session = requests.Session()
    
    def test_security_headers(self):
        """Test if security headers are present"""
        response = self.session.get(self.base_url)
        
        security_headers = {
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Content-Security-Policy': 'default-src self'
        }
        
        results = {}
        for header, expected in security_headers.items():
            actual = response.headers.get(header)
            results[header] = {
                'expected': expected,
                'actual': actual,
                'pass': actual == expected
            }
        
        return results
    
    def test_authentication(self):
        """Test authentication mechanisms"""
        # Test login endpoint
        login_data = {
            'username': 'testuser',
            'password': 'testpass123'
        }
        
        response = self.session.post(
            f'{self.base_url}/api/login',
            json=login_data
        )
        
        return {
            'login_endpoint': response.status_code,
            'authentication_successful': response.status_code == 200,
            'requires_token': 'Authorization' in response.headers
        }
    
    def test_authorization(self):
        """Test authorization controls"""
        # Get token first
        login_response = self.session.post(
            f'{self.base_url}/api/login',
            json={'username': 'testuser', 'password': 'testpass123'}
        )
        
        if login_response.status_code != 200:
            return {'error': 'Cannot test authorization without valid token'}
        
        token = login_response.json().get('token')
        
        # Test protected endpoint
        headers = {'Authorization': f'Bearer {token}'}
        response = self.session.get(
            f'{self.base_url}/api/protected',
            headers=headers
        )
        
        return {
            'protected_endpoint_access': response.status_code,
            'authorization_works': response.status_code == 200,
            'unauthorized_access': response.status_code == 403
        }
    
    def test_input_validation(self):
        """Test input validation and sanitization"""
        # Test SQL injection attempt
        sql_injection = {
            'username': "admin'--",
            'password': "anything"
        }
        
        response = self.session.post(
            f'{self.base_url}/api/login',
            json=sql_injection
        )
        
        sql_test_result = {
            'sql_injection_detected': response.status_code != 200,
            'security_vulnerability': response.status_code == 200,
            'input_validation_effective': response.status_code != 200
        }
        
        # Test XSS attempt
        xss_payload = '<script>alert("xss")</script>'
        
        response = self.session.post(
            f'{self.base_url}/api/comment',
            json={'comment': xss_payload}
        )
        
        xss_test_result = {
            'xss_detected': response.status_code != 200,
            'security_vulnerability': response.status_code == 200,
            'input_validation_effective': response.status_code != 200
        }
        
        return {
            'sql_injection_test': sql_test_result,
            'xss_test': xss_test_result,
            'overall_security': 'good' if (sql_test_result['input_validation_effective'] and xss_test_result['input_validation_effective']) else 'vulnerable'
        }
    
    def test_rate_limiting(self):
        """Test rate limiting functionality"""
        # Make multiple requests quickly
        results = []
        for i in range(15):
            response = self.session.post(
                f'{self.base_url}/api/login',
                json={'username': f'user{i}', 'password': 'testpass123'}
            )
            results.append({
                'request_number': i + 1,
                doing_rate_limit': response.status_code,
                response_code': response.status_code
            })
        
        # Analyze results
        successful_requests = sum(1 for r in results if r['response_code'] == 200)
        rate_limited_requests = sum(1 for r in results if r['response_code'] == 429)
        
        return {
            'total_requests': len(results),
            'successful_requests': successful_requests,
            'rate_limited_requests': rate_limited_requests,
            'rate_limiting_effective': rate_limited_requests > 0,
            'rate_limit_configuration': self._check_rate_limit_configuration()
        }
    
    def _check_rate_limit_configuration(self):
        """Check if rate limiting is properly configured"""
        # Implementation would check actual rate limit configuration
        return {
            'ip_based_limiting': True,
            'user_based_limiting': True,
            'admin_specific_limits': True,
            'sliding_window': True,
            'burst_limiting': True
        }
```

### 6. API Documentation Security

#### Secure API Documentation
```python
class SecureAPIDocumentation:
    def __init__(self):
        self.api_specs = {}
    
    def generate_secure_api_docs(self, api_spec):
        """Generate secure API documentation"""
        # Validate API specification
        self._validate_api_spec(api_spec)
        
        # Generate documentation with security considerations
        docs = {
            'title': api_spec.get('title', 'API Documentation'),\n                       'version': api_spec.get('version', '1.0.0'),
            'base_url': api_spec.get('base_url', '/api'),
            'security_schemes': self._generate_security_scheme_docs(api_spec),
            'endpoint_security': self._generate_endpoint_security_docs(api_spec),
            'authentication_methods': self._generate_authentication_docs(api_spec),
            'rate_limiting': self._generate_rate_limiting_docs(api_spec),
            'error_handling': self._generate_error_handling_docs(api_spec),
            'security_best_practices': self._generate_security_best_practices(api_spec)
        }
        
        return docs
    
    def _validate_api_spec(self, api_spec):
        """Validate API specification"""
        required_fields = ['openapi', 'info', 'paths', 'security']
        for field in required_fields:
            if field not in api_spec:
                raise ValueError(f'Missing required field: {field}')
        \n        # Validate security schemes
        if 'securitySchemes' not in api_spec:
            api_spec['securitySchemes'] = {}
        
        # Validate rate limiting configuration
        if 'x-rate-limiting' not in api_spec.get('extensions', {}):
            api_spec.setdefault('extensions', {})['x-rate-limiting'] = True
    
    def _generate_security_scheme_docs(self, api_spec):
        """Generate documentation for security schemes"""
        schemes = api_spec.get('securitySchemes', {})
        
        security_docs = {}
        for scheme_name, scheme_config in schemes.items():
            security_docs[scheme_name] = {
                'type': scheme_config.get('type', 'http'),
                'scheme': scheme_config.get('scheme', 'bearer'),
                'bearerFormat': scheme_config.get('bearerFormat', 'JWT'),
                'description': scheme_config.get('description', ''),
                'requirements': self._get_security_requirements(scheme_config)
            }
        
        return security_docs
    
    def _get_security_requirements(self, scheme_config):
        """Get security requirements for authentication scheme"""
        scheme_type = scheme_config.get('type', 'http')
        
        if scheme_type == 'http':
            return [
                'Include "Authorization: Bearer <token>" in headers',
                'Token must be obtained from authentication endpoint',
                'Token expires after specified duration'
            ]
        elif scheme_type == 'apiKey':
            return [
                'Include "X-API-Key: <api_key>" in headers',
                'API key must be obtained from admin',
                'API key has specific permissions'
            ]
        elif scheme_type == 'oauth2':
            return [
                'Obtain OAuth2 token from authorization server',
                'Use "Authorization: Bearer <access_token>" header',
                'Refresh access token when expired'
            ]
        
        return ['Follow authentication requirements for specified scheme']
    
    def _generate_endpoint_security_docs(self, api_spec):
        """Generate documentation for endpoint security"""
        endpoint_security = {}
        
        for path, methods in api_spec.get('paths', {}).items():
            for method, spec in methods.items():
                endpoint_id = f'{method.upper()} {path}'
                endpoint_security[endpoint_id] = {
                    'authentication_required': spec.get('security', [{}]),
                    'rate_limiting': spec.get('x-rate-limiting', True),
                    'input_validation': spec.get('x-input-validation', True),
                    'output_sanitization': spec.get('x-output-sanitization', True),
                    'logging_required': spec.get('x-logging-required', True)
                }
        
        return endpoint_security
    
    def _generate_authentication_docs(self, api_spec):
        """Generate documentation for authentication methods"""
        return {
            'jwt_authentication': {
                'description': 'JWT (JSON Web Token) authentication',
                'implementation': 'Bearer token in Authorization header',
                'expiration': 'Token expires after specified time',
                'validation': 'Token must be validated before access'
            },
            'api_key_authentication': {
                'description': 'API key authentication',
                'implementation': 'X-API-Key header',
                'permissions': 'API key has specific permissions',
                'management': 'API keys managed through admin interface'
            },
            'oauth2_authentication': {
                'description': 'OAuth 2.0 authentication',
                'implementation': 'Authorization code flow',
                'scopes': 'Scopes define user permissions',
                'tokens': 'Access and refresh tokens'
            }
        }
    
    def _generate_rate_limiting_docs(self, api_spec):
        """Generate documentation for rate limiting"""
        return {
            'overview': 'Rate limiting protects API from abuse and ensures fair usage',
            'limit_types': [
                'IP-based: Limits per IP address',
                'User-based: Limits per authenticated user',
                'Admin-based: Different limits for admin users'
            ],
            'configurations': [
                'Burst limiting: Allow temporary bursts of requests',
                'Sliding window: Track requests over time window',
                'Token bucket: Distribute tokens for requests'
            ],
            'monitoring': 'Monitor rate limit usage and adjust limits as needed'
        }
    
    def _generate_error_handling_docs(self, api_spec):
        """Generate documentation for error handling"""
        return {
            'standard_error_responses': [
                '400 Bad Request: Invalid request format',
                '401 Unauthorized: Missing or invalid authentication',
                '403 Forbidden: Insufficient permissions',
                '404 Not Found: Resource not found',
                '429 Too Many Requests: Rate limit exceeded',
                '500 Internal Server Error: Server error'
            ],
            'error_information': 'Include error codes, messages, and recommendations in responses',
            'security_logging': 'Log all security-related errors for analysis'
        }
    
    def _generate_security_best_practices(self, api_spec):
        """Generate documentation for security best practices"""
        return [
            'Always validate and sanitize all input data',
            'Implement proper authentication and authorization',
            'Use secure communication protocols (HTTPS)',
            'Implement rate limiting to prevent abuse',
            'Log security events for monitoring and analysis',
            'Regularly update dependencies and security patches',
            'Conduct regular security audits and penetration testing',
            'Implement proper error handling without revealing sensitive information',
            'Use secure cookies and session management',
            'Encrypt sensitive data at rest and in transit'
        ]
```

## Conclusion

API security is critical for protecting applications, users, and data. By implementing the security measures outlined in this guide, organizations can ensure their APIs are secure and compliant with industry standards. The key principles are:

1. **Defense in Depth**: Multiple layers of security controls
2. **Principle of Least Privilege**: Grant only necessary permissions
3. **Continuous Monitoring**: Monitor and analyze API usage and security events
4. **Regular Updates**: Keep dependencies and security measures current
5. **Comprehensive Testing**: Test security controls thoroughly

The Forge framework provides comprehensive API security guidance to ensure secure API development and operation.
