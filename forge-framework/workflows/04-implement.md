# Workflow 04: Implementation

## Phase Overview

The Implementation phase translates design into working code through incremental development, unit testing, and integration.

**Estimated Duration**: 4-40 hours (depending on feature complexity)
**Typical Outputs**: Source code, unit tests, code review comments, implementation report

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

**Time Estimate**: 30-60 minutes

**Tools**: IDE (VS Code, IntelliJ), Docker, package managers (npm, pip, cargo), version control (Git)

**Example Setup**:
```
# Clone repository
git clone https://github.com/project/repo.git
cd repo

# Install dependencies
npm install

# Set up local database
docker-compose up -d postgres redis

# Verify build
npm run build

# Run tests to verify setup
npm test
```

**Edge Cases**:
- Incompatible OS → Use Docker or VM for consistent environment
- Missing dependencies → Document minimum versions, provide install scripts
- Network restrictions → Set up offline mirrors or proxy configuration

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

**Time Estimate**: 30-60 minutes

**Tools**: Jira, Linear, GitHub Projects, Trello, spreadsheet

**Example Task Breakdown**:
```
Task 1: Set up authentication module [4h]
- Create User model
- Implement password hashing
- Create JWT token service

Task 2: Implement login endpoint [2h]
- POST /api/auth/login
- Input validation
- Token generation

Task 3: Implement registration endpoint [3h]
- POST /api/auth/register
- Email validation
- Password strength check
```

**Edge Cases**:
- Scope unclear → Break into spikes/investigation tasks first
- Dependencies unknown → Start with proof-of-concept
- Tight deadline → Identify MVP scope, defer nice-to-have

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

**Time Estimate**: 2-20 hours

**Tools**: IDE, linters (ESLint, Pylint), formatters (Prettier, Black)

**Example Code Structure**:
```
src/
├── models/
│   └── user.ts          # User data model
├── services/
│   └── auth.service.ts  # Authentication business logic
├── controllers/
│   └── auth.controller.ts # HTTP request handlers
├── middleware/
│   └── auth.middleware.ts # Authentication middleware
├── utils/
│   └── validation.ts     # Input validation utilities
└── routes/
    └── auth.routes.ts   # Route definitions
```

**Edge Cases**:
- Design ambiguity → Document assumption, proceed, flag for review
- Performance concern → Write naive version first, optimize if needed
- Third-party API changes → Abstract behind adapter/interface

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

**Time Estimate**: 1-8 hours

**Tools**: Jest, pytest, JUnit, Go testing, mocking libraries

**Example Test**:
```typescript
describe('AuthService', () => {
  describe('login', () => {
    it('should return token for valid credentials', async () => {
      // Arrange
      const credentials = { email: 'test@test.com', password: 'Pass123!' }
      
      // Act
      const result = await authService.login(credentials)
      
      // Assert
      expect(result.token).toBeDefined()
      expect(result.user.email).toBe(credentials.email)
    })

    it('should throw error for invalid password', async () => {
      const credentials = { email: 'test@test.com', password: 'wrong' }
      await expect(authService.login(credentials))
        .rejects.toThrow('Invalid credentials')
    })
  })
})
```

**Edge Cases**:
- Untestable code → Refactor for testability, use dependency integration
- Flaky tests → Investigate timing, shared state, external dependencies
- Slow tests → Mock heavy dependencies, use test doubles

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

**Time Estimate**: 30-120 minutes

**Tools**: GitHub Pull Requests, GitLab Merge Requests, Gerrit

**Edge Cases**:
- Reviewer unavailable → Have backup reviewers, set SLA
- Disagreement on approach → Discuss rationale, escalate if needed
- Large changeset → Break into smaller, focused PRs

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

**Time Estimate**: 1-4 hours

**Tools**: CI/CD pipeline, integration test frameworks, API testing tools

**Edge Cases**:
- Interface mismatch → Update to match specification, document changes
- Performance degradation → Profile, optimize bottlenecks
- Data inconsistency → Implement transaction boundaries, data validation

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

**Time Estimate**: 30-60 minutes

**Tools**: Test runners, coverage tools, static analysis, CI/CD dashboards

**Edge Cases**:
- Acceptance criteria not met → Identify gaps, create follow-up tasks
- Known limitations → Document clearly, communicate to stakeholders

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
| QG9 | Report follows template format | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Implementation order? | Dependencies first / High-value first / Risk-first | Project priorities, team capacity |
| DP2: Refactor or work around? | Refactor / Work around / Defer | Technical debt impact, timeline |
| DP3: Proceed to testing? | Proceed / Fix issues first | Test results, bug severity |
| DP4: Code review approach? | Synchronous / Async / Pair programming | Team size, change complexity |

## Common Anti-Patterns

1. **Copy-paste programming**: Copying code without understanding
2. **Premature optimization**: Optimizing before identifying bottlenecks
3. **Ignoring error handling**: Only handling the happy path
4. **No tests**: Writing code without corresponding tests
5. **Big bang integration**: Integrating everything at once

## Output Artifact

Use template: `templates/implementation-plan.md`

## References

- Related workflow: `03-design.md` (previous phase)
- Related workflow: `05-test.md` (next phase)
- Related capability: `capabilities/implementation.md`
- Anti-patterns: `ANTI-PATTERNS.md` (Implementation section)
