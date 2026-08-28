# Workflow 04: Implementation

**Duration**: 4-40h | **Outputs**: Source code, unit tests, code review comments, implementation report

## Trigger

- New features, code modification, bug fixes, refactoring, integration, technical debt

## Steps

### Step 1: Environment Setup
Set up IDE/tools/dependencies, configure version control, set up local infrastructure, configure linting, set up hooks, verify build, document setup.
**Time**: 30-60 min. **Edge Cases**: Incompatible OS → Docker/VM; missing deps → document versions; network restrictions → offline mirrors

### Step 2: Implementation Planning
Break into tasks, prioritize (dependencies first), estimate effort, define dependencies, create schedule, assign tasks, set up tracking.
**Time**: 30-60 min. **Edge Cases**: Scope unclear → spikes first; unknown deps → PoC; tight deadline → MVP scope

### Step 3: Coding
Write code per design, follow standards, apply patterns, handle errors, add logging, document APIs.
**Standards**: Meaningful names, small functions, no magic numbers, self-documenting code, comments for "why"
**Quality**: Single responsibility, no premature abstraction, composition over inheritance, dependency injection, defensive code
**Time**: 2-20h. **Edge Cases**: Design ambiguity → document assumption; performance → naive first; API changes → adapter

### Step 4: Unit Testing
Write tests for each function, test happy/error paths, test edge cases, mock dependencies, achieve coverage.
**Principles**: Arrange-Act-Assert, one assertion per test, fast, independent, repeatable
**Coverage**: Line >80%, Branch >70%, Critical paths 100%
**Time**: 1-8h. **Edge Cases**: Untestable → refactor; flaky → investigate timing/state; slow → mock dependencies

### Step 5: Code Review
Submit PR, provide context, link issues, address feedback, iterate, document decisions.
**Checklist**: Follows design? Standards? Tests? Security? Performance? Error handling? Docs? No complexity?
**Time**: 30-120 min. **Edge Cases**: Reviewer unavailable → backup; disagreement → discuss; large changeset → smaller PRs

### Step 6: Integration
Integrate components, verify interfaces, test interactions, resolve issues, update tests, verify e2e flows.
**Approaches**: Big bang, Incremental, Top-down, Bottom-up
**Time**: 1-4h. **Edge Cases**: Interface mismatch → update spec; performance → profile; data inconsistency → transactions

### Step 7: Implementation Verification
Verify requirements, run tests, check quality metrics, verify docs, confirm no regressions, validate acceptance criteria.
**Time**: 30-60 min. **Edge Cases**: Criteria not met → identify gaps; known limitations → document

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Environment setup documented and reproducible |
| QG2 | Implementation plan created and tracked |
| QG3 | Code follows standards and conventions |
| QG4 | Unit tests written and passing |
| QG5 | Code reviewed and approved |
| QG6 | Integration tests passing |
| QG7 | Code coverage meets targets |
| QG8 | No critical or high bugs open |
| QG9 | Report follows template format |

## Anti-Patterns

1. **Copy-paste programming** — Copying without understanding
2. **Premature optimization** — Optimizing before bottlenecks
3. **Ignoring error handling** — Happy path only
4. **No tests** — Code without tests
5. **Big bang integration** — Everything at once

## Output

Use: `templates/implementation-plan.md` | Prev: `03-design.md` | Next: `05-test.md` | Capability: `capabilities/implementation.md`
