# Workflow 06: Debugging

## Phase Overview

The Debugging phase identifies, isolates, and resolves defects in software through systematic investigation and root cause analysis.

**Estimated Duration**: 30 minutes - 8 hours (depending on bug complexity)
**Typical Outputs**: Debug report, root cause analysis, fix implementation, prevention measures

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

**Time Estimate**: 15-60 minutes

**Tools**: Screen recording, log aggregators (Datadog, Splunk), error trackers (Sentry)

**Example Reproduction**:
```
Issue: Users report checkout fails intermittently with "Payment processing error"

Reproduction Steps:
1. Add item to cart
2. Proceed to checkout
3. Enter valid credit card details
4. Click "Pay Now"

Result: Fails ~30% of the time with error "Payment processing error"
Environment: Production, Chrome 120, macOS
Frequency: Intermittent (3 of 10 attempts)
Impact: Users cannot complete purchase
```

**Edge Cases**:
- Cannot reproduce → Ask for more details, check environment differences
- Intermittent → Add logging, monitor for occurrence
- Environment-specific → Compare configurations, check dependencies
- Data-specific → Identify common patterns in failing data

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

**Time Estimate**: 30-120 minutes

**Tools**: Git bisect, debuggers (gdb, pdb, Chrome DevTools), log analysis tools

**Example Isolation**:
```
Initial scope: Entire checkout flow

Step 1: Add logging to payment service → Error occurs before service call
Step 2: Check client-side code → Error in form validation logic
Step 3: Isolate validation function → Fails when card number has spaces
Step 4: Create minimal reproduction → "4111 1111 1111 1111" fails, "4111111111111111" works

Isolated: Card number formatting function doesn't strip spaces
```

**Edge Cases**:
- Multiple contributing factors → Isolate each factor independently
- Heisenbug (changes when observed) → Use non-intrusive logging
- Race condition → Add synchronization points, use thread analysis tools
- Memory corruption → Use memory analysis tools (Valgrind, AddressSanitizer)

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

**Time Estimate**: 30-60 minutes

**Tools**: Analysis templates, diagram tools, code review tools

**Example 5 Whys**:
```
Problem: Checkout fails with spaces in card number

Why 1: Why does checkout fail? → Card validation rejects the number
Why 2: Why does validation reject it? → Regex doesn't allow spaces
Why 3: Why doesn't regex allow spaces? → Original spec said "digits only"
Why 4: Why didn't spec account for spaces? → Didn't consider user input formatting
Why 5: Why wasn't this caught in testing? → Test data used formatted numbers without spaces

Root cause: Incomplete requirements for input formatting handling
```

**Edge Cases**:
- Multiple root causes → Document all, prioritize by impact
- Systemic issue → Look for patterns, not just individual bug
- Third-party bug → Document workaround, report upstream

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

**Time Estimate**: 30-120 minutes

**Tools**: IDE, version control, test frameworks

**Example Fix**:
```
Root cause: Card validation regex doesn't handle spaces

Fix Options:
1. Strip spaces before validation (chosen - minimal, defensive)
2. Update regex to allow spaces (rejected - allows invalid formats)
3. Add client-side formatting only (rejected - server should be robust)

Implementation:
- Add input sanitization before validation
- Add test cases for various input formats
- Document the sanitization approach
```

**Edge Cases**:
- Fix affects other functionality → Expand regression testing
- Fix is temporary (workaround) → Document technical debt, plan proper fix
- Fix requires data migration → Plan migration carefully, test thoroughly

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

**Time Estimate**: 30-60 minutes

**Tools**: Test frameworks, CI/CD pipeline, automated test suites

**Edge Cases**:
- No existing tests for component → Write tests before fixing (TDD approach)
- Fix changes behavior → Update affected tests, document changes
- Performance regression → Run performance benchmarks

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

**Time Estimate**: 15-30 minutes

**Tools**: CI/CD pipeline, static analysis tools, monitoring tools

**Example Prevention**:
```
Prevention Measures:
1. Added unit tests for card validation with various input formats
2. Added E2E test for checkout with formatted card numbers
3. Updated code review checklist: "Input sanitization considered?"
4. Added ESLint rule for input validation patterns
5. Added monitoring alert for payment processing errors
6. Shared learnings in team tech talk
```

**Edge Cases**:
- Similar bugs likely → Search codebase for same pattern
- Systemic issue → Propose process improvement
- Third-party issue → Report upstream, add defensive checks

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

**Time Estimate**: 15-30 minutes

**Tools**: Debug report template, knowledge base, team communication tools

**Edge Cases**:
- Bug is a duplicate → Link reports, consolidate learnings
- Bug is a feature request → Convert to feature request, document rationale

## Quality Gates

| Gate | Criteria | Check |
|------|----------|-------|
| QG1 | Issue reproduced successfully | |
| QG2 | Root cause identified and documented | |
| QG3 | Fix addresses root cause (not just symptoms) | |
| QG4 | Fix verified with tests | |
| QG5 | No regressions introduced | |
| QG6 | Prevention measures implemented | |
| QG7 | Report follows template format | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Can reproduce? | Proceed with isolation / Need more info / Cannot reproduce | Reproduction success, information quality |
| DP2: Fix or workaround? | Fix root cause / Implement workaround / Defer | Risk, timeline, impact |
| DP3: Similar bugs likely? | Search for similar issues / Proceed with fix | Root cause category, codebase patterns |
| DP4: Escalation needed? | Handle independently / Escalate to team | Complexity, impact, expertise required |

## Common Anti-Patterns

1. **Fixing symptoms not causes**: Addressing visible symptoms without root cause
2. **Debugging without reproduction**: Attempting to fix without reproducing
3. **No prevention measures**: Fixing without preventing recurrence
4. **Blaming the user**: Assuming user error without investigation
5. **Ignoring intermittent bugs**: Dismissing bugs that don't always reproduce

## Output Artifact

Use template: `templates/debug-report.md`

## References

- Related workflow: `05-test.md` (where bugs are found)
- Related workflow: `04-implement.md` (where fixes are applied)
- Related capability: `capabilities/debugging.md`
- Anti-patterns: `ANTI-PATTERNS.md` (Debugging section)
