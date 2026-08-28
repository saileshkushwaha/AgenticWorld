# Workflow 06: Debugging

**Duration**: 30 min - 8h | **Outputs**: Debug report, root cause analysis, fix, prevention measures

## Trigger

- Bug/defect reported, unexpected behavior, test failures, production issues, performance degradation, intermittent failures

## Steps

### Step 1: Issue Reproduction
Understand issue, gather steps, identify environment, reproduce, document steps, determine reproducibility, capture evidence.
**Time**: 15-60 min. **Edge Cases**: Cannot reproduce → more details; intermittent → logging; env-specific → compare configs; data-specific → patterns

### Step 2: Isolation
Narrow scope, identify component, determine code/config/data, use binary search, git bisect, isolate variables, create minimal repro.
**Techniques**: Binary search, git bisect, logging, debugger, config isolation, data isolation
**Time**: 30-120 min. **Edge Cases**: Multiple factors → isolate each; Heisenbug → non-intrusive logging; race → thread analysis; memory → Valgrind

### Step 3: Root Cause Analysis
Analyze isolated code, identify root cause, use structured techniques, document, assess why not caught, check for similar bugs.
**Techniques**: 5 Whys, Fishbone (Ishikawa), fault tree, Pareto, change analysis
**Categories**: Logic, off-by-one, null/undefined, race conditions, resource leaks, config, data, integration
**Time**: 30-60 min. **Edge Cases**: Multiple causes → document all; systemic → patterns; third-party → workaround + report

### Step 4: Fix Implementation
Design fix, evaluate options, implement, write tests, ensure no regressions, document.
**Principles**: Fix root cause, minimal/targeted, consider side effects, defensive, add tests, document
**Time**: 30-120 min. **Edge Cases**: Affects other → expand regression; temporary → document debt; data migration → plan carefully

### Step 5: Regression Testing
Run component tests, integration tests, related cases, verify no new issues, test edge cases, verify in target env, confirm resolution.
**Time**: 30-60 min. **Edge Cases**: No tests → write first (TDD); behavior changes → update tests; performance → benchmarks

### Step 6: Prevention Strategy
Identify prevention, add tests, improve review checklist, update guidelines, add static analysis, improve monitoring, share learnings.
**Time**: 15-30 min. **Edge Cases**: Similar bugs → search codebase; systemic → process improvement; third-party → defensive checks

### Step 7: Debug Report
Document issue/resolution, summarize root cause/fix, document lessons, update knowledge base, share, close defect, archive.
**Time**: 15-30 min. **Edge Cases**: Duplicate → link; feature request → convert

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Issue reproduced successfully |
| QG2 | Root cause identified and documented |
| QG3 | Fix addresses root cause |
| QG4 | Fix verified with tests |
| QG5 | No regressions introduced |
| QG6 | Prevention measures implemented |
| QG7 | Report follows template format |

## Anti-Patterns

1. **Fixing symptoms** — Not root cause
2. **Debugging without reproduction** — No repro
3. **No prevention** — No recurrence prevention
4. **Blaming the user** — No investigation
5. **Ignoring intermittent** — Dismissing

## Output

Use: `templates/debug-report.md` | Prev: `05-test.md` | Next: `04-implement.md` | Capability: `capabilities/debugging.md`
