# Workflow 06: Debugging

## Phase Overview

The Debugging phase identifies, isolates, and resolves defects in software through systematic investigation and root cause analysis.

## Trigger Conditions

This workflow is triggered when:
- A bug or defect is reported
- Unexpected behavior is observed
- Test failures need investigation
- Production issues need resolution
- Performance degradation occurs
- Intermittent failures need diagnosis

## Steps

### Step 1: Issue Reproduction

**Actions**:
- Understand the reported issue
- Gather reproduction steps
- Identify environment where issue occurs
- Attempt to reproduce the issue
- Document exact reproduction steps
- Determine reproducibility (always, intermittent, once)
- Capture logs, screenshots, and error messages

**Reproduction checklist**:
- [ ] Steps documented clearly
- [ ] Environment identified
- [ ] Input data identified
- [ ] Expected behavior documented
- [ ] Actual behavior documented
- [ ] Frequency determined
- [ ] Impact assessed

**Output**: Reproduction documentation

### Step 2: Isolation

**Actions**:
- Narrow down the scope of the issue
- Identify which component/module is affected
- Determine if issue is code, configuration, or data related
- Use binary search (comment out half the code)
- Check recent changes (git bisect)
- Isolate variables (change one thing at a time)
- Create minimal reproduction case

**Isolation techniques**:
- **Binary search**: Eliminate half the code at a time
- **Git bisect**: Find the commit that introduced the bug
- **Logging**: Add strategic log statements
- **Debugging**: Use debugger to step through code
- **Configuration**: Test with minimal configuration
- **Data**: Test with different data sets

**Output**: Isolated issue scope

### Step 3: Root Cause Analysis

**Actions**:
- Analyze the isolated code/behavior
- Identify the root cause (not just symptoms)
- Use structured analysis techniques
- Document the root cause clearly
- Identify why the bug was not caught earlier
- Assess if similar bugs might exist elsewhere

**Analysis techniques**:
- **5 Whys**: Ask "why" repeatedly until root cause found
- **Fishbone (Ishikawa)**: Categorize potential causes
- **Fault tree analysis**: Trace failure paths
- **Pareto analysis**: Focus on most likely causes
- **Change analysis**: What changed recently

**Root cause categories**:
- Logic errors
- Off-by-one errors
- Null/undefined handling
- Race conditions
- Resource leaks
- Configuration errors
- Data quality issues
- Integration failures

**Output**: Root cause analysis document

### Step 4: Fix Implementation

**Actions**:
- Design the fix (consider multiple approaches)
- Evaluate fix options (correctness, risk, side effects)
- Implement the fix
- Write tests that verify the fix
- Ensure fix does not introduce regressions
- Document the fix and its rationale

**Fix design principles**:
- Fix the root cause, not just symptoms
- Keep the fix minimal and targeted
- Consider side effects
- Make the fix defensive
- Add tests to prevent recurrence
- Document why the fix works

**Output**: Implemented fix with tests

### Step 5: Regression Testing

**Actions**:
- Run tests for the fixed component
- Run integration tests
- Run related test cases
- Verify no new issues introduced
- Test edge cases around the fix
- Verify fix in target environment
- Confirm original issue is resolved

**Regression scope**:
- Directly affected component
- Dependent components
- Integration points
- Related functionality
- Performance characteristics

**Output**: Regression test results

### Step 6: Prevention Strategy

**Actions**:
- Identify how to prevent similar bugs
- Add automated tests
- Improve code review checklist
- Update coding guidelines
- Add static analysis rules
- Improve monitoring and alerting
- Share learnings with team

**Prevention techniques**:
- Automated tests (unit, integration, e2e)
- Static analysis and linting
- Code review improvements
- Better error handling patterns
- Monitoring and alerting
- Documentation updates

**Output**: Prevention strategy document

### Step 7: Debug Report

**Actions**:
- Document the issue and resolution
- Summarize root cause and fix
- Document lessons learned
- Update knowledge base
- Share findings with team
- Close defect report
- Archive debug artifacts

**Output**: Debug report (using debug-report template)

## Quality Gates

| Gate | Criteria | Check |
|------|----------|-------|
| QG1 | Issue reproduced successfully | |
| QG2 | Root cause identified and documented | |
| QG3 | Fix addresses root cause (not just symptoms) | |
| QG4 | Fix verified with tests | |
| QG5 | No regressions introduced | |
| QG6 | Prevention measures implemented | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Can reproduce? | Proceed with isolation / Need more info / Cannot reproduce | Reproduction success, information quality |
| DP2: Fix or workaround? | Fix root cause / Implement workaround / Defer | Risk, timeline, impact |
| DP3: Similar bugs likely? | Search for similar issues / Proceed with fix | Root cause category, codebase patterns |

## Output Artifact

Use template: `templates/debug-report.md`

## References
- Related workflow: `05-test.md` (where bugs are found)
- Related workflow: `04-implement.md` (where fixes are applied)
- Related capability: `capabilities/debugging.md`
