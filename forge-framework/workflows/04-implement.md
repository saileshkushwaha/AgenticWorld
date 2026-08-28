# Workflow 04: Implementation

## Phase Overview

The Implementation phase translates design into working code through incremental development, unit testing, and integration.

## Trigger Conditions

This workflow is triggered when:
- New features need to be implemented
- Existing code needs to be modified
- Bug fixes need to be applied
- Code needs to be refactored
- Integration between components is needed
- Technical debt needs to be addressed

## Steps

### Step 1: Environment Setup

**Actions**:
- Set up development environment (IDE, tools, dependencies)
- Configure version control (branching strategy)
- Set up local development infrastructure (databases, services)
- Configure linting and formatting tools
- Set up pre-commit hooks
- Verify build system works
- Document setup steps for team

**Environment requirements**:
- Language runtime and package manager
- Database and caching services
- Message queues and external services
- Testing frameworks and tools
- CI/CD pipeline access

**Output**: Development environment ready

### Step 2: Implementation Planning

**Actions**:
- Break down implementation into tasks
- Prioritize tasks (dependencies first, high-value first)
- Estimate effort for each task
- Define task dependencies
- Create implementation schedule
- Assign tasks to team members
- Set up tracking (issues, boards)

**Planning techniques**:
- Task decomposition (work breakdown structure)
- Dependency analysis
- Effort estimation (story points, hours)
- Sprint/iteration planning

**Output**: Implementation plan

### Step 3: Coding

**Actions**:
- Write code following design specifications
- Follow coding standards and conventions
- Apply design patterns appropriately
- Write clean, readable, maintainable code
- Handle errors and edge cases
- Add logging and monitoring hooks
- Document public APIs and complex logic

**Coding standards**:
- Follow language-specific style guides
- Use meaningful names (variables, functions, classes)
- Keep functions small and focused
- Limit nesting depth
- Avoid magic numbers and strings
- Write self-documenting code
- Add comments only when necessary (explain "why", not "what")

**Code quality practices**:
- Single responsibility per function/class
- Avoid premature abstraction
- Prefer composition over inheritance
- Use dependency injection
- Write defensive code
- Handle null/undefined cases
- Validate inputs at boundaries

**Output**: Source code

### Step 4: Unit Testing

**Actions**:
- Write unit tests for each function/method
- Test happy paths and error paths
- Test edge cases and boundary conditions
- Mock external dependencies
- Achieve target code coverage
- Ensure tests are independent and deterministic
- Run tests frequently during development

**Testing principles**:
- **Arrange-Act-Assert**: Structure tests clearly
- **One assertion per test**: Focus each test
- **Fast**: Tests should run quickly
- **Independent**: Tests should not depend on each other
- **Repeatable**: Same results every time

**Coverage targets**:
- Line coverage: >80%
- Branch coverage: >70%
- Critical paths: 100%

**Output**: Unit test suite

### Step 5: Code Review

**Actions**:
- Submit code for review (pull request)
- Provide context and description
- Link related issues and requirements
- Address review feedback
- Iterate until approved
- Document decisions made during review

**Review checklist**:
- [ ] Code follows design specifications
- [ ] Code follows coding standards
- [ ] Tests are adequate and passing
- [ ] No security vulnerabilities
- [ ] Performance considerations addressed
- [ ] Error handling is complete
- [ ] Documentation is updated
- [ ] No unnecessary complexity

**Output**: Reviewed and approved code

### Step 6: Integration

**Actions**:
- Integrate components/modules
- Verify interfaces match specifications
- Test component interactions
- Resolve integration issues
- Update integration tests
- Verify end-to-end flows
- Document integration points

**Integration approaches**:
- **Big bang**: Integrate everything at once
- **Incremental**: Integrate one component at a time
- **Top-down**: Start from top-level components
- **Bottom-up**: Start from foundational components

**Output**: Integrated system

### Step 7: Implementation Verification

**Actions**:
- Verify all requirements are implemented
- Run full test suite
- Check code quality metrics
- Verify documentation is updated
- Confirm no regressions
- Validate against acceptance criteria
- Prepare for testing phase

**Verification checklist**:
- [ ] All tasks completed
- [ ] All tests passing
- [ ] Code coverage meets targets
- [ ] No critical bugs open
- [ ] Documentation complete
- [ ] Performance acceptable
- [ ] Security review passed

**Output**: Implementation report (using implementation-plan template)

## Quality Gates

| Gate | Criteria | Check |
|------|----------|-------|
| QG1 | Environment setup documented and reproducible | |
| QG2 | Implementation plan created and tracked | |
| QG3 | Code follows standards and conventions | |
| QG4 | Unit tests written and passing | |
| QG5 | Code reviewed and approved | |
| QG6 | Integration tests passing | |
| QG7 | Code coverage meets targets | |
| QG8 | No critical or high bugs open | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Implementation order? | Dependencies first / High-value first / Risk-first | Project priorities, team capacity |
| DP2: Refactor or work around? | Refactor / Work around / Defer | Technical debt impact, timeline |
| DP3: Proceed to testing? | Proceed / Fix issues first | Test results, bug severity |

## Output Artifact

Use template: `templates/implementation-plan.md`

## References

- Related workflow: `03-design.md` (previous phase)
- Related workflow: `05-test.md` (next phase)
- Related capability: `capabilities/implementation.md`
