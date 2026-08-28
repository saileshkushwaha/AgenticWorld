# Workflow 05: Testing

## Phase Overview

The Testing phase verifies that the implementation meets requirements, functions correctly, and meets quality standards through systematic test planning, execution, and analysis.

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

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Ready for testing? | Begin testing / Fix blockers first | Environment readiness, build stability |
| DP2: Ship or fix? | Ship with known issues / Fix and retest | Defect severity, business impact |
| DP3: Additional testing needed? | Proceed / Add targeted tests | Coverage gaps, risk areas |

## Output Artifact

Use template: `templates/test-plan.md`

## References

- Related workflow: `04-implement.md` (previous phase)
- Related workflow: `06-debug.md` (if defects found)
- Related workflow: `07-deploy.md` (next phase)
- Related capability: `capabilities/testing.md`
