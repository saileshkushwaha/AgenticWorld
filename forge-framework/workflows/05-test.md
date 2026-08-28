# Workflow 05: Testing

## Phase Overview

The Testing phase verifies that the implementation meets requirements, functions correctly, and meets quality standards through systematic test planning, execution, and analysis.

**Estimated Duration**: 4-20 hours (depending on feature complexity)
**Typical Outputs**: Test plan, test case suite, defect reports, coverage report, test summary report

## Trigger Conditions

This workflow is triggered when:
- Implementation is complete and ready for testing
- New features need verification
- Bug fixes need regression testing
- Performance validation is needed
- Security testing is required
- Release readiness needs assessment

## Steps

### Step 1: Test Planning

**Actions**:
- Define test scope (what to test, what not to test)
- Identify test types needed (unit, integration, e2e, performance, security)
- Define test environment requirements
- Identify test data needs
- Define entry and exit criteria
- Estimate testing effort
- Assign testing responsibilities
- Create test schedule

**Test plan components**:
- Test objectives
- Test scope (in scope / out of scope)
- Test strategy (types, approaches)
- Test environment and tools
- Test data requirements
- Entry and exit criteria
- Risks and contingencies
- Roles and responsibilities
- Schedule and milestones

**Output**: Test plan document

**Time Estimate**: 1-2 hours

**Tools**: Test plan template, Jira, TestRail, Qase, spreadsheet

**Example Test Plan Excerpt**:
```
Scope: User authentication feature (login, logout, password reset)

Test Types:
- Unit tests: Already covered in implementation
- Integration tests: Auth service + database + email service
- E2E tests: Full login flow including UI
- Performance tests: Login under load (1000 concurrent users)
- Security tests: Brute force protection, session management

Entry Criteria:
- Code deployed to test environment
- Unit tests passing
- Test data prepared

Exit Criteria:
- All critical/high tests passing
- No critical defects open
- Code coverage > 80%
```

**Edge Cases**:
- No test environment available → Use containerized environment or mock services
- Limited test data → Generate synthetic data or anonymize production data
- Tight timeline → Prioritize critical path tests, defer nice-to-have

### Step 2: Test Case Design

**Actions**:
- Write test cases for each requirement
- Design positive test cases (valid inputs)
- Design negative test cases (invalid inputs)
- Design edge case tests
- Design boundary condition tests
- Create test data sets
- Define expected results for each test case
- Prioritize test cases (critical, high, medium, low)

**Test case format**:
- Test case ID
- Title/description
- Preconditions
- Test steps
- Test data
- Expected result
- Actual result (filled during execution)
- Status (pass/fail/blocked)
- Priority

**Test design techniques**:
- Equivalence partitioning
- Boundary value analysis
- Decision table testing
- State transition testing
- Error guessing
- Exploratory testing

**Output**: Test case suite

**Time Estimate**: 2-4 hours

**Tools**: Test case management tools, spreadsheet, BDD tools (Cucumber, SpecFlow)

**Example Test Case**:
```
TC-AUTH-001: Valid Login
Priority: Critical
Preconditions: User account exists with email@test.com/Password123

Steps:
1. Navigate to login page
2. Enter email: email@test.com
3. Enter password: Password123
4. Click "Login" button

Expected Result:
- User is redirected to dashboard
- Session cookie is set
- Last login timestamp updated

TC-AUTH-002: Invalid Password
Priority: High
Preconditions: User account exists

Steps:
1. Navigate to login page
2. Enter email: email@test.com
3. Enter password: WrongPassword
4. Click "Login" button

Expected Result:
- Error message: "Invalid email or password"
- User remains on login page
- Failed login attempt logged
```

**Edge Cases**:
- Unicode characters in input fields
- Very long strings (buffer overflow testing)
- Special characters (XSS, SQL injection attempts)
- Null/empty inputs
- Concurrent requests

### Step 3: Test Environment Setup

**Actions**:
- Provision test environment
- Configure test databases
- Set up test data
- Deploy application under test
- Configure test tools
- Verify environment readiness
- Document environment configuration

**Environment considerations**:
- Isolated from production
- Representative of production
- Data privacy (no PII in test data)
- Reset capability between test runs
- Monitoring and logging enabled

**Output**: Ready test environment

**Time Estimate**: 1-3 hours

**Tools**: Docker, Kubernetes, Terraform, Ansible, cloud consoles

**Edge Cases**:
- Environment differs from production → Document differences, assess impact
- Shared test environment → Coordinate with other teams, use test data isolation
- Limited resources → Use lightweight mocks for non-critical dependencies

### Step 4: Test Execution

**Actions**:
- Execute test cases according to priority
- Record actual results
- Log defects for failed tests
- Retest fixed defects
- Track test progress
- Report test status

**Test types to execute**:
- **Unit tests**: Individual functions/methods
- **Integration tests**: Component interactions
- **System tests**: End-to-end workflows
- **Regression tests**: Existing functionality
- **Performance tests**: Response time, throughput
- **Security tests**: Vulnerabilities, access control
- **Usability tests**: User experience
- **Acceptance tests**: Business requirements

**Output**: Test execution results

**Time Estimate**: 2-8 hours

**Tools**: Test runners (Jest, pytest, JUnit), Selenium, Cypress, k6, OWASP ZAP

**Edge Cases**:
- Test depends on external service → Use mocks or stubs
- Test requires specific time/date → Use time mocking
- Test requires large data set → Use data generation scripts
- Flaky test → Quarantine, investigate root cause

### Step 5: Defect Management

**Actions**:
- Log defects with detailed information
- Assign severity and priority
- Assign defects to developers
- Track defect resolution
- Verify defect fixes
- Analyze defect trends
- Identify root causes of defect clusters

**Defect report format**:
- Defect ID
- Title/description
- Steps to reproduce
- Expected result
- Actual result
- Severity (critical, high, medium, low)
- Priority (immediate, high, medium, low)
- Environment
- Screenshots/logs
- Status (open, in-progress, fixed, verified, closed)

**Output**: Defect reports and tracking

**Time Estimate**: Ongoing during execution

**Tools**: Jira, GitHub Issues, Bugzilla, Linear, YouTrack

**Example Defect**:
```
DEF-AUTH-001: Login fails with valid credentials after 3 attempts
Severity: High | Priority: High
Environment: Test (v1.2.3)

Steps to reproduce:
1. Navigate to login
2. Enter valid email and WRONG password (3 times)
3. Enter correct password on 4th attempt

Expected: Login succeeds
Actual: Error "Account locked" even with correct password

Evidence: Screenshot attached, logs show lock not released after timeout
```

**Edge Cases**:
- Cannot reproduce → Get more info from reporter, check environment
- Intermittent defect → Add logging, increase monitoring
- Duplicate defect → Link to existing, add new evidence

### Step 6: Coverage Analysis

**Actions**:
- Measure code coverage (line, branch, path)
- Measure requirement coverage
- Measure risk coverage
- Identify untested areas
- Assess test effectiveness
- Identify gaps in test coverage
- Plan additional tests for gaps

**Coverage targets**:
- Code coverage: >80% line, >70% branch
- Requirement coverage: 100% of critical requirements
- Risk coverage: All high-risk areas tested

**Output**: Coverage report

**Time Estimate**: 30-60 minutes

**Tools**: Istanbul/nyc, JaCoCo, Coverage.py, SonarQube

**Edge Cases**:
- Coverage tool incompatible with framework → Use alternative tool or manual tracking
- Untestable code → Document reason, consider refactoring
- Low coverage in critical path → Prioritize adding tests

### Step 7: Test Reporting

**Actions**:
- Summarize test results
- Report defect statistics
- Assess quality against exit criteria
- Identify remaining risks
- Provide go/no-go recommendation
- Document lessons learned
- Archive test artifacts

**Report contents**:
- Test summary (tests run, passed, failed, blocked)
- Defect summary (found, fixed, open, by severity)
- Coverage summary
- Quality assessment
- Risks and concerns
- Recommendation (ship, fix, retest)

**Output**: Test report (using test-plan template)

**Time Estimate**: 1-2 hours

**Tools**: Test report template, dashboard tools, presentation tools

**Edge Cases**:
- Exit criteria not met → Clearly state gaps, recommend actions
- Stakeholder disagreement on quality → Provide data, facilitate discussion

## Quality Gates

| Gate | Criteria | Check |
|------|----------|-------|
| QG1 | Test plan approved | |
| QG2 | Test cases reviewed and approved | |
| QG3 | Test environment ready and verified | |
| QG4 | All planned tests executed | |
| QG5 | Critical and high defects resolved | |
| QG6 | Coverage targets met | |
| QG7 | Exit criteria satisfied | |
| QG8 | Report follows template format | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Ready for testing? | Begin testing / Fix blockers first | Environment readiness, build stability |
| DP2: Ship or fix? | Ship with known issues / Fix and retest | Defect severity, business impact |
| DP3: Additional testing needed? | Proceed / Add targeted tests | Coverage gaps, risk areas |
| DP4: Flaky tests blocking? | Quarantine / Fix immediately | Impact on confidence, fix complexity |

## Common Anti-Patterns

1. **Testing only happy path**: Ignoring error cases and edge cases
2. **Testing in production**: Using production environment for testing
3. **Flaky tests ignored**: Allowing intermittently failing tests to persist
4. **No regression testing**: Only testing new features
5. **Coverage obsession**: Focusing on coverage numbers over meaningful tests

## Output Artifact

Use template: `templates/test-plan.md`

## References

- Related workflow: `04-implement.md` (previous phase)
- Related workflow: `06-debug.md` (if defects found)
- Related workflow: `07-deploy.md` (next phase)
- Related capability: `capabilities/testing.md`
- Anti-patterns: `ANTI-PATTERNS.md` (Testing section)
