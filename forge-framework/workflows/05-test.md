# Workflow 05: Testing

**Duration**: 4-20h | **Outputs**: Test plan, test cases, defect reports, coverage report, test summary

## Trigger

- Implementation complete, new features, regression testing, performance/security validation, release readiness

## Steps

### Step 1: Test Planning
Define scope, identify test types, define environment needs, identify test data, define entry/exit criteria, estimate effort, assign responsibilities, create schedule.
**Time**: 1-2h. **Edge Cases**: No environment → containerized/mocks; limited data → synthetic/anonymized; tight timeline → critical path first

### Step 2: Test Case Design
Write test cases per requirement, design positive/negative/edge/boundary cases, create test data, define expected results, prioritize.
**Techniques**: Equivalence partitioning, boundary value analysis, decision table, state transition, error guessing, exploratory
**Time**: 2-4h. **Edge Cases**: Unicode, long strings, special chars (XSS/SQL), null/empty, concurrent requests

### Step 3: Test Environment Setup
Provision environment, configure databases, set up test data, deploy app, configure tools, verify readiness, document config.
**Time**: 1-3h. **Edge Cases**: Differs from prod → document; shared → coordinate; limited resources → mocks

### Step 4: Test Execution
Execute by priority, record results, log defects, retest fixes, track progress, report status.
**Types**: Unit, Integration, System, Regression, Performance, Security, Usability, Acceptance
**Time**: 2-8h. **Edge Cases**: External service → mocks; time/date → mocking; large data → generation; flaky → quarantine

### Step 5: Defect Management
Log defects, assign severity/priority, assign to developers, track resolution, verify fixes, analyze trends, identify clusters.
**Time**: Ongoing. **Edge Cases**: Cannot reproduce → more info; intermittent → logging; duplicate → link

### Step 6: Coverage Analysis
Measure code/requirement/risk coverage, identify untested areas, assess effectiveness, identify gaps, plan additional tests.
**Targets**: Code >80% line, >70% branch; Requirement 100% critical; Risk all high-risk
**Time**: 30-60 min. **Edge Cases**: Incompatible tool → alternative; untestable → document/refactor; low critical → prioritize

### Step 7: Test Reporting
Summarize results, report defect stats, assess quality, identify risks, provide go/no-go, document lessons, archive artifacts.
**Time**: 1-2h. **Edge Cases**: Exit criteria not met → state gaps; disagreement → provide data

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Test plan approved |
| QG2 | Test cases reviewed and approved |
| QG3 | Test environment ready and verified |
| QG4 | All planned tests executed |
| QG5 | Critical and high defects resolved |
| QG6 | Coverage targets met |
| QG7 | Exit criteria satisfied |
| QG8 | Report follows template format |

## Anti-Patterns

1. **Testing only happy path** — Ignoring errors
2. **Testing in production** — Using prod environment
3. **Flaky tests ignored** — Allowing intermittent failures
4. **No regression testing** — Only new features
5. **Coverage obsession** — Numbers over meaning

## Output

Use: `templates/test-plan.md` | Prev: `04-implement.md` | Next: `07-deploy.md` | Capability: `capabilities/testing.md`
