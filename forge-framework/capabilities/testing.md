# Testing Capability

## Definition

The ability to verify that implementation meets requirements through systematic test planning, execution, and analysis.

## Scope

### In Scope
- Test planning and strategy
- Test case design
- Test execution (unit, integration, e2e, performance, security)
- Defect management
- Coverage analysis
- Test reporting
- Quality assessment

### Out of Scope
- Code fixes (see Debugging capability)
- Test environment infrastructure (see Deployment capability)
- Production monitoring (see Deployment capability)

## Skills

### Test Planning
- Test strategy development
- Test scope definition
- Test type selection
- Resource planning
- Schedule creation
- Risk-based test prioritization

### Test Case Design
- Equivalence partitioning
- Boundary value analysis
- Decision table testing
- State transition testing
- Exploratory testing
- Test data design

### Test Execution
- Manual test execution
- Automated test execution
- Performance testing
- Security testing
- Regression testing
- Acceptance testing

### Defect Management
- Defect identification and logging
- Severity and priority assignment
- Defect tracking
- Root cause analysis (basic)
- Verification of fixes

### Analysis
- Coverage analysis (code, requirement, risk)
- Quality metrics calculation
- Trend analysis
- Risk assessment
- Go/no-go recommendation

## Inputs
- Requirements document
- Design documents
- Implementation (code)
- Test environment
- Test data

## Outputs
- Test plan
- Test case suite
- Test execution results
- Defect reports
- Coverage report
- Test summary report
- Quality assessment

## Quality Criteria
- Test plan approved
- Test cases reviewed and approved
- All planned tests executed
- Critical and high defects resolved
- Coverage targets met
- Exit criteria satisfied

## Related Workflows
- `workflows/05-test.md` - Primary workflow
- `workflows/04-implement.md` - Provides input
- `workflows/06-debug.md` - For defect resolution

## Metrics
- Test coverage (%)
- Defect detection rate
- Defect escape rate
- Test execution rate
- Test pass rate
- Defect density
