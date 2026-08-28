# Anti-Patterns - Forge Engineering Lifecycle Framework

## Overview

Anti-patterns are common mistakes or counterproductive practices that undermine the effectiveness of the SDLC process. This document catalogs the most common anti-patterns across all phases, with guidance on how to avoid them.

## General Anti-Patterns

### AP-01: Skipping Phases

**Description**: Jumping directly from requirements to implementation without analysis or design.

**Why it happens**: Pressure to deliver quickly, overconfidence, lack of process.

**Consequences**:
- Missed requirements
- Architectural flaws discovered late
- Rework and delays
- Technical debt accumulation

**How to enforce Forge**:
- Require quality gate completion before phase transition
- Document rationale for any skipped steps
- Use the workflow selection logic to ensure appropriate phase is used

### AP-02: Analysis Paralysis

**Description**: Spending excessive time in analysis without making decisions or moving forward.

**Why it happens**: Fear of making wrong decisions, perfectionism, lack of deadlines.

**Consequences**:
- Missed market opportunities
- Team frustration
- Wasted resources
- Stakeholder dissatisfaction

**How to enforce Forge**:
- Set timeboxes for each phase
- Use decision points with clear criteria
- Accept "good enough" analysis to proceed

### AP-03: Documentation After the Fact

**Description**: Writing documentation after implementation is complete, often from memory.

**Why it happens**: Documentation seen as low priority, time pressure, focus on code.

**Consequences**:
- Inaccurate documentation
- Missing rationale and context
- Knowledge loss when team members leave
- Poor knowledge transfer

**How to enforce Forge**:
- Require documentation as part of each workflow step
- Include documentation in quality gates
- Use templates that prompt for rationale at decision time

### AP-04: Ignoring Edge Cases

**Description**: Focusing only on the happy path and ignoring error conditions and edge cases.

**Why it happens**: Optimism bias, time pressure, lack of systematic approach.

**Consequences**:
- Production failures
- Poor user experience
- Security vulnerabilities
- Increased debugging time

**How to enforce Forge**:
- Include edge case analysis in every workflow
- Require error handling in implementation templates
- Include edge case testing in test plans

### AP-05: Not Preserving Context

**Description**: Losing track of decisions, rationale, and constraints across phases.

**Why it happens**: Phase handoffs without documentation, team turnover, poor tooling.

**Consequences**:
- Repeated discussions
- Contradictory decisions
- Loss of project history
- Onboarding difficulties

**How to enforce Forge**:
- Use context preservation practices in each workflow
- Maintain decision logs
- Reference previous artifacts in new phases

## Research Anti-Patterns

### AP-R01: Confirmation Bias in Research

**Description**: Only seeking information that confirms pre-existing beliefs.

**Why it happens**: Cognitive bias, pressure to justify a decision already made.

**Consequences**:
- Poor technology choices
- Missed better alternatives
- Stakeholder distrust when bias is discovered

**How to prevent**:
- Require evaluation of multiple alternatives
- Document evidence for and against each option
- Use structured evaluation criteria

### AP-R02: Single Source Reliance

**Description**: Making recommendations based on a single source or opinion.

**Why it happens**: Convenience, time pressure, authoritative source bias.

**Consequences**:
- Incomplete understanding
- Biased recommendations
- Missed important perspectives

**How to prevent**:
- Require multiple credible sources in quality gates
- Cross-reference findings across sources
- Document source diversity

### AP-R03: Shallow Research

**Description**: Conducting surface-level research without depth or critical evaluation.

**Why it happens**: Time pressure, lack of research skills, superficial understanding.

**Consequences**:
- Poor recommendations
- Missed important considerations
- Lack of confidence in findings

**How to prevent**:
- Define research depth in objectives
- Require evaluation criteria application
- Include confidence levels in findings

## Analysis Anti-Patterns

### AP-A01: Vague Requirements

**Description**: Accepting requirements that are ambiguous, untestable, or incomplete.

**Why it happens**: Assumed shared understanding, lack of stakeholder engagement.

**Consequences**:
- Implementation that doesn't meet needs
- Scope creep
- Rework and disputes

**How to prevent**:
- Require testable acceptance criteria
- Validate requirements with stakeholders
- Use requirements traceability matrix

### AP-A02: Ignoring Non-Functional Requirements

**Description**: Focusing only on functional requirements and ignoring performance, security, etc.

**Why it happens**: Non-functional requirements seen as secondary, hard to specify.

**Consequences**:
- System that works but performs poorly
- Security vulnerabilities
- Scalability issues

**How to prevent**:
- Include non-functional requirements in analysis template
- Define specific, measurable targets
- Include non-functional testing in test plans

### AP-A03: Optimistic Risk Assessment

**Description**: Underestimating risk probability or impact, or ignoring risks entirely.

**Why it happens**: Optimism bias, lack of experience, pressure to proceed.

**Consequences**:
- Unprepared for problems
- No mitigation plans
- Project delays and cost overruns

**How to prevent**:
- Require risk assessment in every phase
- Use structured risk assessment techniques
- Include risk mitigation in all plans

## Design Anti-Patterns

### AP-D01: Big Design Up Front

**Description**: Attempting to design every detail before any implementation begins.

**Why it happens**: Desire for certainty, waterfall thinking, fear of rework.

**Consequences**:
- Delayed feedback
- Design that doesn't account for implementation realities
- Wasted effort on unused features

**How to prevent**:
- Design incrementally with implementation feedback
- Focus on significant decisions first
- Use ADRs for decisions that may evolve

### AP-D02: Designing in a Vacuum

**Description**: Creating designs without input from implementers, operators, or users.

**Why it happens**: Ivory tower syndrome, lack of collaboration, time pressure.

**Consequences**:
- Impractical designs
- Implementation resistance
- Missed operational concerns

**How to prevent**:
- Include implementation team in design reviews
- Consider operational requirements
- Validate designs with proof-of-concepts

### AP-D03: Pattern Over-Application

**Description**: Applying design patterns unnecessarily, adding complexity without benefit.

**Why it happens**: Pattern enthusiasm, resume-driven development, premature abstraction.

**Consequences**:
- Unnecessary complexity
- Harder to understand and maintain
- Slower development

**How to prevent**:
- Follow YAGNI principle
- Apply patterns only when clear benefit exists
- Review designs for unnecessary complexity

## Implementation Anti-Patterns

### AP-I01: Copy-Paste Programming

**Description**: Copying code without understanding or adapting it properly.

**Why it happens**: Time pressure, convenience, lack of understanding.

**Consequences**:
- Duplicated code
- Inconsistent behavior
- Bug propagation
- Maintenance burden

**How to prevent**:
- Require code understanding before reuse
- Refactor duplicated code into shared modules
- Use code review to catch copy-paste

### AP-I02: Premature Optimization

**Description**: Optimizing code before identifying actual bottlenecks.

**Why it happens**: Performance anxiety, premature concern about scale.

**Consequences**:
- Complex, hard-to-read code
- Wasted effort on non-bottlenecks
- Delayed feature delivery

**How to prevent**:
- Measure before optimizing
- Focus on readability first
- Optimize only proven bottlenecks

### AP-I03: Ignoring Error Handling

**Description**: Only handling the happy path and ignoring errors and exceptions.

**Why it happens**: Optimism, time pressure, focus on core functionality.

**Consequences**:
- Production crashes
- Poor user experience
- Data corruption
- Security vulnerabilities

**How to prevent**:
- Require error handling in code review
- Include error cases in unit tests
- Define error handling strategy in design

### AP-I04: No Tests

**Description**: Writing code without corresponding tests.

**Why it happens**: Time pressure, tests seen as overhead, lack of discipline.

**Consequences**:
- Undetected regressions
- Fear of refactoring
- Lower quality
- Slower long-term development

**How to prevent**:
- Make tests part of definition of done
- Require coverage targets
- Use test-driven development where appropriate

## Testing Anti-Patterns

### AP-T01: Testing Only Happy Path

**Description**: Only testing expected behavior and ignoring error cases and edge cases.

**Why it happens**: Optimism, time pressure, incomplete test planning.

**Consequences**:
- Undetected bugs in edge cases
- Poor error handling
- Production failures

**How to prevent**:
- Require negative test cases in test plans
- Include edge case testing
- Use boundary value analysis

### AP-T02: Testing in Production

**Description**: Using production environment for testing instead of proper test environments.

**Why it happens**: Lack of test environments, convenience, overconfidence.

**Consequences**:
- Production outages
- Data corruption
- User impact
- Loss of trust

**How to prevent**:
- Require test environment in test plan
- Use feature flags for production testing
- Maintain separate test environments

### AP-T03: Flaky Tests Ignored

**Description**: Allowing intermittently failing tests to continue without investigation.

**Why it happens**: Time pressure, seen as non-critical, hard to reproduce.

**Consequences**:
- Loss of test suite credibility
- Ignored failures hiding real issues
- Reduced confidence in tests

**How to prevent**:
- Treat flaky tests as bugs
- Investigate and fix root causes
- Quarantine flaky tests until fixed

## Debugging Anti-Patterns

### AP-X01: Fixing Symptoms Not Causes

**Description**: Addressing the visible symptoms without finding the root cause.

**Why it happens**: Time pressure, lack of systematic approach, superficial analysis.

**Consequences**:
- Recurring issues
- Temporary fixes becoming permanent
- Growing technical debt

**How to prevent**:
- Require root cause analysis for all bugs
- Use structured analysis techniques (5 Whys, fishbone)
- Document root cause in debug report

### AP-X02: Debugging Without Reproduction

**Description**: Attempting to fix a bug without first reproducing it reliably.

**Why it happens**: Pressure to fix quickly, overconfidence, intermittent bugs.

**Consequences**:
- Fixes that don't address the real issue
- Wasted effort
- Introduction of new bugs

**How to prevent**:
- Require reproduction steps in debug workflow
- Document minimal reproduction case
- Verify fix resolves the reproduction case

### AP-X03: No Prevention Measures

**Description**: Fixing a bug without implementing measures to prevent similar bugs.

**Why it happens**: Focus on immediate fix, time pressure, narrow focus.

**Consequences**:
- Recurring similar bugs
- Growing defect count
- Decreasing quality

**How to prevent**:
- Require prevention section in debug report
- Add automated tests for fixed bugs
- Update checklists and guidelines

## Deployment Anti-Patterns

### AP-P01: Deploying Without Rollback Plan

**Description**: Deploying changes without a documented and tested rollback plan.

**Why it happens**: Overconfidence, time pressure, lack of experience.

**Consequences**:
- Extended outages when issues occur
- Panic during incidents
- Data loss or corruption

**How to prevent**:
- Require rollback plan in deployment plan
- Test rollback procedure before deployment
- Define rollback triggers

### AP-P02: Deploying at End of Day

**Description**: Deploying changes at the end of the workday when fresh support is unavailable.

**Why it happens**: Deadline pressure, poor planning, lack of policy.

**Consequences**:
- Issues discovered when team is tired or unavailable
- Extended resolution time
- Weekend firefighting

**How to prevent**:
- Establish deployment windows
- Avoid Friday deployments
- Ensure support availability during deployment

### AP-P03: No Post-Deployment Verification

**Description**: Assuming deployment was successful without verification.

**Why it happens**: Overconfidence, assumption that deployment equals success.

**Consequences**:
- Undetected deployment issues
- Delayed incident discovery
- User impact before detection

**How to prevent**:
- Require post-deployment verification in deployment plan
- Include smoke tests and health checks
- Monitor key metrics after deployment

## Modernization Anti-Patterns

### AP-M01: Big Bang Rewrite

**Description**: Attempting to rewrite an entire system at once.

**Why it happens**: Desire for clean slate, frustration with legacy, underestimation of complexity.

**Consequences**:
- Extended timelines
- Feature freeze during rewrite
- High risk of failure
- Loss of institutional knowledge

**How to prevent**:
- Prefer incremental migration strategies
- Use strangler fig pattern
- Maintain working system throughout

### AP-M2: Lift and Shift Without Improvement

**Description**: Moving to new platform without taking advantage of improvements.

**Why it happens**: Time pressure, risk aversion, lack of understanding of new platform.

**Consequences**:
- Missed benefits of new platform
- Same problems in new environment
- Wasted migration effort

**How to prevent**:
- Define modernization goals upfront
- Identify improvement opportunities
- Plan for optimization after migration

## Communication Anti-Patterns

### AP-C01: No Stakeholder Updates

**Description**: Failing to communicate progress, risks, and decisions to stakeholders.

**Why it happens**: Focus on technical work, discomfort with communication, assumption of understanding.

**Consequences**:
- Misaligned expectations
- Loss of stakeholder trust
- Late discovery of concerns
- Project cancellation risk

**How to prevent**:
- Include communication plan in each phase
- Define stakeholder communication schedule
- Use communication workflow for reporting

### AP-C02: Technical Jargon with Non-Technical Stakeholders

**Description**: Using technical language when communicating with non-technical audiences.

**Why it happens**: Habit, lack of audience awareness, assumption of understanding.

**Consequences**:
- Misunderstanding
- Poor decision-making
- Stakeholder disengagement

**How to prevent**:
- Adapt language to audience level
- Use business terms for business stakeholders
- Include communication style guidance in communication workflow

### AP-C03: Hiding Bad News

**Description**: Delaying communication of problems or bad news to stakeholders.

**Why it happens**: Fear of consequences, hope that problems will resolve, discomfort.

**Consequences**:
- Loss of trust when truth emerges
- Reduced time to address issues
- Compounding of problems

**How to prevent**:
- Create culture of transparency
- Report risks and issues promptly
- Include risk communication in communication plan
