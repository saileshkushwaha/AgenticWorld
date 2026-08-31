# Secure Coding Guide - Forge Engineering Lifecycle Framework

## Overview
This guide provides secure coding practices and procedures to prevent vulnerabilities in software developed using the Forge framework. It covers input validation, output encoding, authentication, session management, and other security-critical development practices.

## Secure Development Principles

### 1. Trust No Input
- All user input is untrusted until validated
- Never trust data from clients, APIs, or databases
- Assume malicious intent in all inputs

### 2. Validate Everything
- Validate at the point of entry
- Validate on the server side (never client-side only)
- Use whitelisting over blacklisting
- Validate format, length, type, and business rules

### 3. Encode Output
- Never trust output from the application
- Encode output based on context
- Use context-specific encoding functions

### 4. Separate Duties
- Implement proper authentication
- Use least privilege principle
- Separate development, testing, and production environments

## Input Validation

### Validation Framework

#### 1. Input Validation Categories

| Category | Description | Examples |
|----------|-------------|----------|
| **Type Validation** | Verify data type | Email, URL, IP, Date |
| **Length Validation** | Verify data length | String limits, array sizes |
| **Format Validation** | Verify data format | Credit card, SSN, ZIP |
| **Range Validation** | Verify value ranges | Numeric min/max, enum values |
| **Pattern Validation** | Verify data patterns | Regex matching |
| **Business Validation** | Verify business rules | Credit limits, age requirements |

#### 2. Validation Techniques

##### Server-Side Validation
```python
# Example: Server-side validation
def validate_input(data):
    if not isinstance(data, str):
        raise ValueError("Input must be a string")
    
    if len(data) > 100:
        raise ValueError("Input too long (max 100 characters)")
    
    if not re.match(r'^[a-zA-Z0-9_]+$', data):
        raise ValueError("Invalid characters in input")
    
    return True
```

##### Client-Side Validation (Supplementary Only)
```javascript
// Example: Client-side validation (for user experience)
function validateInputOnClient(input) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(input.value)) {
        showError('Invalid email format');
        return false;
    }
    return true;
}
```

##### Database Validation
```sql
-- Example: Database constraint validation
ALTER TABLE users ADD CONSTRAINT chk_email_format
CHECK (email ~ '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');

ALTER TABLE orders ADD CONSTRAINT chk_amount_range
CHECK (amount > 0 AND amount <= 1000000);
```

#### 3. Validation Pipeline

1. **Layer 1: Edge Cases**
   - Null/undefined values
   - Empty strings
   - Maximum/minimum lengths

2. **Layer 2: Format Validation**
   - Type checking
   - Regular expressions
   - Date/time validation

3. **Layer 3: Business Rules**
   - Domain-specific validation
   - Cross-field validation
   - State-dependent validation

4. **Layer 4: Contextual Validation**
   - User permissions
   - Session context
   - Request source validation

### Injection Prevention

#### SQL Injection Prevention
```python
# VULNERABLE
query = f"SELECT * FROM users WHERE id = {user_input}"

# SECURE
query = "SELECT * FROM users WHERE id = %s"
params = [user_input]
cursor.execute(query, params)
```

#### Command Injection Prevention
```python
# VULNERABLE
os.system(f"rm -rf {user_input}")

# SECURE
import shlex
parts = shlex.split(user_input)
os.system("rm", "-rf", *parts[1:])
```

#### NoSQL Injection Prevention
```python
# VULNERABLE
query = {"user_id": int(user_input)}

# SECURE
import json
query = json.loads('{"user_id": ' + json.dumps(int(user_input)) + '}')
```

#### LDAP Injection Prevention
```python
# VULNERABLE
filter = f"(uid={user_input})"

# SECURE
import ldap
from ldap.filter import escape_filter_chars
safe_input = escape_filter_chars(user_input)
filter = f"(uid={safe_input})"
```

### XSS Prevention

#### Stored XSS Prevention
```python
from markupsafe import escape

def store_user_content(content):
    # Store escaped content in database
    escaped_content = escape(content)
    db.execute("INSERT INTO posts (content) VALUES (%s)", (escaped_content,))
    return escaped_content
```

#### Reflected XSS Prevention
```python
from flask import Flask, escape, request

app = Flask(__name__)

@app.route('/search')
def search():
    query = request.args.get('q', '')
    # Escape the query before rendering in template
    safe_query = escape(query)
    return render_template('search_results.html', query=safe_query)
```

#### DOM XSS Prevention
```javascript
// Client-side prevention
function processUserInput(input) {
    // Use textContent instead of innerHTML
    var element = document.getElementById('result');
    element.textContent = input;
    
    // Or use appropriate sanitization library
    var sanitized = DOMPurify.sanitize(input);
    element.innerHTML = sanitized;
}
```

### File Upload Security

#### Validation
```python
import os
from werkzeug.utils import secure_filename
from magic import Magic

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'pdf', 'doc', 'docx'}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def validate_file(file):
    # Check file extension
    if not allowed_file(file.filename):
        raise ValueError("File type not allowed")
    
    # Check file size
    file.seek(0, os.SEEK_END)
    file_length = file.tell()
    file.seek(0)
    
    if file_length > MAX_FILE_SIZE:
        raise ValueError("File too large (max 10MB)")
    
    # Check file content type
    mime = Magic(mime=True)
    file_content_type = mime.from_buffer(file.read(2048))
    file.seek(0)
    
    if not file_content_type.startswith('image/') and file_content_type != 'application/pdf':
        raise ValueError("File content type not allowed")
    
    # Generate secure filename
    filename = secure_filename(file.filename)
    return filename
```

#### Storage
```python
# Store file with secure path
import uuid
from werkzeug.utils import secure_filename

def save_uploaded_file(file):
    # Generate unique filename
    file_extension = file.filename.rsplit('.', 1)[1].lower()
    unique_filename = f"{uuid.uuid4().hex}.{file_extension}"
    
    # Create secure storage path
    storage_path = os.path.join(
        CURRENT_APP_DIR,
        'uploads',
        'secure',
        unique_filename
    )
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(storage_path), exist_ok=True)
    
    # Save file
    file.save(storage_path)
    
    # Set appropriate permissions
    os.chmod(storage_path, 0o640)
    
    return unique_filename, storage_path
```

### Authentication Security

#### Password Security
```python
import bcrypt
import re

def hash_password(password):
    # Validate password strength
    if len(password) < 12:
        raise ValueError("Password must be at least 12 characters")
    
    if not re.search(r'[A-Z]', password):
        raise ValueError("Password must contain at least one uppercase letter")
    
    if not re.search(r'[a-z]', password):
        raise ValueError("Password must contain at least one lowercase letter")
    
    if not re.search(r'\d', password):
        raise ValueError("Password must contain at least one number")
    
    if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
        raise ValueError("Password must contain at least one special character")
    
    # Hash password with salt
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed

def verify_password(hashed_password, user_input):
    return bcrypt.checkpw(user_input.encode('utf-8'), hashed_password)
```

#### Session Management
```python
from flask import Flask, session
import secrets
from datetime import datetime, timedelta

app = Flask(__name__)
app.secret_key = secrets.token_hex(32)

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    # Validate credentials
    if authenticate_user(username, password):
        # Regenerate session ID to prevent session fixation
        session.clear()
        session.permanent = True
        app.permanent_session_lifetime = timedelta(hours=24)
        
        # Set secure session attributes
        session['user_id'] = get_user_id(username)
        session['username'] = username
        session['login_time'] = datetime.now().isoformat()
        session['session_id'] = secrets.token_hex(16)
        
        # Set secure cookie attributes
        response = redirect(url_for('dashboard'))
        response.set_cookie(
            'session_token',
            session['session_id'],
            secure=True,  # Only over HTTPS
            httponly=True,  # Not accessible via JavaScript
            samesite='Strict',  # CSRF protection
            max_age=86400  # 24 hours
        )
        
        return response
    
    return render_template('login.html', error='Invalid credentials')
```

#### OAuth Security
```python
from authlib.integrations.flask_client import OAuth

app.config['SECRET_KEY'] = secrets.token_hex(32)
app.config['OAuth'] = OAuth(app)

# Configure OAuth providers
oauth = OAuth(app)

# Google OAuth
oauth.register(
    name='google',
    client_id=os.environ.get('GOOGLE_CLIENT_ID'),
    client_secret=os.environ.get('GOOGLE_CLIENT_SECRET'),
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={
        'scope': 'openid email profile',
        'prompt': 'consent',
        'access_type': 'offline'
    }
)

@app.route('/login/google')
def google_login():
    redirect_uri = url_for('google_callback', _external=True)
    return oauth.google.authorize_redirect(redirect_uri)

@app.route('/callback/google')
def google_callback():
    token = oauth.google.authorize_access_token()
    user_info = oauth.google.parse_id_token(token)
    
    # Validate user info
    email = user_info.get('email')
    name = user_info.get('name')
    
    # Process user authentication
    user = authenticate_or_create_user(email, name)
    
    # Create session
    session['user_id'] = user.id
    session['provider'] = 'google'
    
    return redirect(url_for('dashboard'))
```

### API Security

#### API Key Management
```python
import hashlib
import secrets
from datetime import datetime, timedelta

class APIKeyManager:
    def __init__(self, db):
        self.db = db
    
    def generate_api_key(self, user_id, name, permissions):
        # Generate secure API key
        key = secrets.token_urlsafe(32)
        key_hash = hashlib.sha256(key.encode()).hexdigest()
        
        # Store key hash (never store plain key)
        expires_at = datetime.now() + timedelta(days=365)
        
        self.db.execute('''
            INSERT INTO api_keys (user_id, name, key_hash, permissions, expires_at)
            VALUES (?, ?, ?, ?, ?)
        ''', (user_id, name, key_hash, permissions, expires_at))
        
        return key
    
    def validate_api_key(self, provided_key):
        # Hash provided key
        key_hash = hashlib.sha256(provided_key.encode()).hexdigest()
        
        # Find matching key
        result = self.db.execute('''
            SELECT * FROM api_keys 
            WHERE key_hash = ? AND expires_at > NOW()
        ''', (key_hash,)).fetchone()
        
        if result:
            # Check permissions
            if not self.check_permissions(result['permissions']):
                return False, "Insufficient permissions"
            
            return True, result
        
        return False, "Invalid API key"
```

#### Rate Limiting
```python
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"]
)

@app.route('/api/data')
@limiter.limit("10 per minute")
def get_data():
    return {"data": "sensitive"}

@app.route('/api/admin', methods=['POST'])
@limiter.limit("5 per hour", key=lambda: session.get('user_id'))
def admin_action():
    # Admin-only endpoint with rate limiting
    if not is_admin(session.get('user_id')):
        return jsonify({"error": "Unauthorized"}), 403
    
    # Perform admin action
    return jsonify({"status": "success"})
```

### Error Handling Security

#### Secure Error Messages
```python
from flask import Flask, jsonify
import logging

app = Flask(__name__)

@app.errorhandler(404)
def not_found_error(error):
    # Log the error internally
    logging.error(f"404 error: {error}")
    
    # Return generic error message
    return jsonify({
        "error": "Resource not found",
        "error_code": "NOT_FOUND"
    }), 404

@app.errorhandler(500)
def internal_error(error):
    # Log the detailed error internally
    logging.error(f"500 error: {error}")
    
    # Return generic error message
    return jsonify({
        "error": "Internal server error",
        "error_code": "INTERNAL_ERROR"
    }), 500

@app.route('/debug')
def debug():
    # Only allow in development
    if not app.debug:
        return jsonify({"error": "Debug mode not available"}), 404
    
    # Return debug info safely
    return jsonify({
        "debug_info": {
            "version": app.version,
            "environment": app.config['ENV'],
            "debug": app.debug
        }
    })
```

### Cryptography

#### Data Encryption
```python
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
import base64

class SecureData:
    def __init__(self, password: str):
        # Derive encryption key from password
        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA256(),
            length=32,
            salt=b'static_salt_for_demo',  # In production, use random salt
            iterations=100000,
        )
        key = base64.urlsafe_b64encode(kdf.derive(password.encode()))
        self.cipher_suite = Fernet(key)
    
    def encrypt(self, data: str) -> str:
        encrypted_data = self.cipher_suite.encrypt(data.encode())
        return encrypted_data.decode()
    
    def decrypt(self, encrypted_data: str) -> str:
        decrypted_data = self.cipher_suite.decrypt(encrypted_data.encode())
        return decrypted_data.decode()
```

### Cross-Site Request Forgery (CSRF)

#### CSRF Protection
```python
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
csrf = CSRFProtect(app)

@app.route('/form', methods=['GET', 'POST'])
@csrf.exempt  # Exempt if this is an API endpoint

def form_example():
    if request.method == 'POST':
        # Process form data
        return jsonify({"status": "success"})
    
    return render_template('form.html')
```

#### JavaScript CSRF Protection
```javascript
// Client-side CSRF protection
function submitForm(event) {
    event.preventDefault();
    
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    
    fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': token
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle success
    })
    .catch(error => {
        // Handle error
    });
}
```

## Secure Development Lifecycle

### Development Phase

1. **Requirements Gathering**
   - Identify security requirements
   - Define compliance needs
   - Document data flow diagrams

2. **Design**
   - Create security architecture
   - Define authentication mechanisms
   - Design secure data flows

3. **Implementation**
   - Follow secure coding practices
   - Implement validation
   - Use prepared statements
   - Secure configuration management

4. **Testing**
   - Unit testing with security in mind
   - Integration testing with security scenarios
   - Penetration testing
   - Security code review

### Deployment Phase

1. **Configuration**
   - Secure deployment configuration
   - Environment-specific settings
   - Security headers implementation

2. **Monitoring**
   - Security monitoring setup
   - Log aggregation
   - Alert configuration

3. **Maintenance**
   - Regular security patches
   - Dependency updates
   - Security audits

## Security Tools

### Static Analysis
```bash
# OWASP ZAP
zap-baseline.py -t https://your-application.com

# Snyk
snyk test

# GitLeaks (secrets detection)
gitleaks detect --source .
```

### Dynamic Analysis
```bash
# Burp Suite
# Use intercept and modify requests

# Nmap
nmap -sV -p 80,443 your-server.com

# Dirb/Wordlists
 dirb http://your-server.com /usr/share/wordlists/common.txt
```

### Container Security
```dockerfile
# Secure Dockerfile example
FROM python:3.9-slim

# Use non-root user
RUN useradd -m -u 1000 appuser
USER appuser

# Set security headers
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Use virtual environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Install dependencies with security constraints
COPY requirements.txt .
RUN pip install --no-cache-dir --require-hashes -r requirements.txt

# Copy application
COPY . /app
WORKDIR /app

# Run with security constraints
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "4", "--timeout", "120", "app:app"]
```

## Common Vulnerabilities and Prevention

### SQL Injection
- **Vulnerability**: Direct string concatenation in SQL queries
- **Prevention**: Use parameterized queries or ORM

### Cross-Site Scripting (XSS)
- **Vulnerability**: Unescaped user input in web pages
- **Prevention**: Escape all output, use Content Security Policy

### Insecure Direct Object References
- **Vulnerability**: Direct reference to internal objects
- **Prevention**: Use indirect references with authorization checks

### Security Misconfiguration
- **Vulnerability**: Default credentials, error messages
- **Prevention**: Remove defaults, custom error messages

### Sensitive Data Exposure
- **Vulnerability**: Hard-coded secrets, unencrypted data
- **Prevention**: Use environment variables, encryption

### Broken Authentication
- **Vulnerability**: Weak passwords, session fixation
- **Prevention**: Strong authentication, secure sessions

### XML External Entities
- **Vulnerability**: XXE in XML parsing
- **Prevention**: Disable external entity parsing

### Insecure Deserialization
- **Vulnerability**: Unsafe deserialization of untrusted data
- **Prevention**: Use safe serialization, validate input

## Conclusion

Secure coding is a fundamental aspect of software development. By following these secure coding practices, you can significantly reduce the risk of security vulnerabilities in your applications. Remember that security is a continuous process that requires:

1. **Continuous Learning**: Stay updated on security trends and vulnerabilities
2. **Regular Testing**: Continuously test for vulnerabilities
3. **Code Review**: Review code with security in mind
4. **Monitoring**: Monitor for security incidents
5. **Improvement**: Continuously improve security controls

The Forge framework's secure coding practices ensure that applications developed using the framework are built with security in mind from the ground up.