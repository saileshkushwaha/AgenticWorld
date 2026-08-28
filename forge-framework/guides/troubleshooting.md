# Troubleshooting Guide - Forge Engineering Lifecycle Framework

## Overview

This document provides solutions to common issues encountered when using the Forge framework.

## General Issues

### Issue: Output Too Long

**Symptoms**: The AI generates excessively long outputs that are hard to review.

**Causes**:
- Verbosity set to detailed for simple tasks
- Too many examples included
- Edge case analysis too comprehensive

**Solutions**:
1. Set verbosity to `minimal` or `standard`
2. Disable examples: `examples: false`
3. Set edge_cases: `false` for simple tasks
4. Ask for specific sections only

### Issue: Output Too Short

**Symptoms**: The AI generates brief outputs missing important details.

**Causes**:
- Verbosity set to minimal for complex tasks
- Quality gates disabled
- Template not followed

**Solutions**:
1. Set verbosity to `detailed`
2. Enable quality gates: `quality_gates: enabled`
3. Explicitly request the template be followed
4. Ask for specific sections to be expanded

### Issue: Inconsistent Outputs Across Models

**Symptoms**: Different AI models produce different quality/structure of outputs.

**Causes**:
- Model capabilities differ
- System prompt not fully loaded
- Workflow not provided as context

**Solutions**:
1. Ensure system prompt is fully loaded
2. Provide the complete workflow as context
3. Use strict_mode: `true`
4. Include explicit format requirements in the prompt
5. Reference the output-format specification

### Issue: Quality Gates Not Passed

**Symptoms**: Output doesn't meet quality gate criteria.

**Causes**:
- Steps skipped or rushed
- Insufficient evidence gathered
- Decisions not documented

**Solutions**:
1. Re-run the workflow step that failed
2. Explicitly check each quality gate criterion
3. Add missing evidence or documentation
4. Use the quality gate checklist as a review tool

## Research Issues

### Issue: Can't Find Enough Sources

**Symptoms**: Research has too few sources or only one source type.

**Solutions**:
1. Broaden search terms
2. Try different source types (academic, industry, community)
3. Search for related technologies
4. Consult expert blogs and talks
5. Check GitHub for real-world usage

### Issue: Conflicting Information

**Symptoms**: Different sources provide conflicting recommendations.

**Solutions**:
1. Document the conflict explicitly
2. Assess source credibility and recency
3. Note the context of each recommendation
4. Present both perspectives with evidence
5. Recommend further investigation if needed

### Issue: Technology Too New to Evaluate

**Symptoms**: Technology is too new for reliable evaluation.

**Solutions**:
1. Acknowledge the limitation in the report
2. Evaluate based on early indicators (team, funding, community)
3. Recommend a proof-of-concept
4. Suggest waiting for maturity if risk is high
5. Document the uncertainty level

## Analysis Issues

### Issue: Requirements Unclear

**Symptoms**: Stakeholders can't articulate clear requirements.

**Solutions**:
1. Use the ambiguity handling process from persona
2. Propose assumptions and validate them
3. Create prototypes to elicit feedback
4. Use user stories to capture needs
5. Iterate on requirements with stakeholders

### Issue: Too Many Requirements

**Symptoms**: Requirements list is overwhelming or unmanageable.

**Solutions**:
1. Prioritize using MoSCoW method
2. Group related requirements
3. Identify MVP vs future requirements
4. Create a roadmap for phased delivery
5. Validate priorities with stakeholders

### Issue: Conflicting Requirements

**Symptoms**: Requirements contradict each other.

**Solutions**:
1. Document the conflict explicitly
2. Facilitate stakeholder discussion
3. Propose resolution options
4. Use trade-off analysis to evaluate options
5. Get stakeholder sign-off on resolution

## Design Issues

### Issue: Design Too Complex

**Symptoms**: Design has too many components or unnecessary abstraction.

**Solutions**:
1. Apply KISS and YAGNI principles
2. Question each component's necessity
3. Look for opportunities to simplify
4. Consider starting with a simpler design
5. Add complexity only when proven necessary

### Issue: Design Doesn't Meet Requirements

**Symptoms**: Design misses key requirements or constraints.

**Solutions**:
1. Review requirements traceability matrix
2. Identify missed requirements
3. Update design to address gaps
4. Validate with stakeholders
5. Update ADRs if decisions change

### Issue: Team Disagrees on Design

**Solutions**:
1. Use ADR process to document options
2. Evaluate options against criteria
3. Facilitate design review session
4. Consider proof-of-concept for disputed areas
5. Escalate to architecture decision maker if needed

## Implementation Issues

### Issue: Code Doesn't Match Design

**Symptoms**: Implementation deviates from design specifications.

**Solutions**:
1. Review design specifications
2. Identify deviations and their rationale
3. Update design if deviation is justified
4. Fix code if deviation is not justified
5. Document the decision

### Issue: Tests Keep Failing

**Symptoms**: Unit tests or integration tests consistently fail.

**Solutions**:
1. Check test correctness (is the test right?)
2. Check code correctness (is the code right?)
3. Verify test environment setup
4. Check for test isolation issues
5. Review error messages carefully

### Issue: Integration Problems

**Symptoms**: Components don't work together correctly.

**Solutions**:
1. Verify interface specifications match
2. Check data format compatibility
3. Review error handling at boundaries
4. Test with realistic data
5. Use contract testing

## Testing Issues

### Issue: Can't Achieve Coverage Target

**Symptoms**: Code coverage is below target.

**Solutions**:
1. Identify uncovered code paths
2. Write tests for critical paths first
3. Use coverage tools to find gaps
4. Consider if uncovered code is testable
5. Refactor if code is hard to test

### Issue: Tests Too Slow

**Symptoms**: Test suite takes too long to run.

**Solutions**:
1. Identify slow tests
2. Mock external dependencies
3. Use test parallelization
4. Separate unit and integration tests
5. Optimize test setup

### Issue: Flaky Tests

**Symptoms**: Tests pass and fail intermittently.

**Solutions**:
1. Identify the flaky test
2. Investigate root cause (timing, state, dependencies)
3. Add proper waits or synchronization
4. Isolate test state
5. Quarantine until fixed

## Debugging Issues

### Issue: Can't Reproduce Bug

**Symptoms**: Bug cannot be reproduced consistently.

**Solutions**:
1. Gather more information from reporter
2. Check environment differences
3. Look for timing or race conditions
4. Check for data-dependent behavior
5. Use logging to capture state

### Issue: Root Cause Elusive

**Symptoms**: Can't determine the root cause of a bug.

**Solutions**:
1. Use structured analysis (5 Whys, fishbone)
2. Add strategic logging
3. Use debugging tools
4. Try binary search (comment out code)
5. Consult with team members

### Issue: Fix Introduces New Bugs

**Symptoms**: Bug fix causes other issues.

**Solutions**:
1. Review fix for side effects
2. Expand regression testing
3. Check related functionality
4. Consider a different fix approach
5. Document the trade-off

## Deployment Issues

### Issue: Deployment Fails

**Symptoms**: Deployment process fails mid-way.

**Solutions**:
1. Check error logs
2. Verify environment configuration
3. Check dependencies and versions
4. Execute rollback plan
5. Investigate root cause before retry

### Issue: Rollback Fails

**Symptoms**: Rollback doesn't restore system to previous state.

**Solutions**:
1. Have a backup rollback plan
2. Verify rollback procedure before deployment
3. Test rollback in staging
4. Keep previous artifacts available
5. Document manual rollback steps

### Issue: Post-Deployment Issues

**Symptoms**: Issues appear after successful deployment.

**Solutions**:
1. Monitor key metrics
2. Check error rates
3. Verify integrations
4. Review logs for anomalies
5. Execute rollback if needed

## Communication Issues

### Issue: Stakeholders Don't Read Reports

**Solutions**:
1. Lead with executive summary
2. Use visual aids
3. Keep reports concise
4. Present key findings in meetings
5. Use the communication workflow

### Issue: Technical Jargon Confuses Audience

**Solutions**:
1. Adapt language to audience level
2. Define technical terms
3. Use analogies for complex concepts
4. Include a glossary
5. Get feedback on clarity

### Issue: Decisions Not Documented

**Solutions**:
1. Use ADR template for significant decisions
2. Document decisions immediately
3. Include rationale and trade-offs
4. Store decisions in accessible location
5. Reference decisions in future work

## Getting Help

If you encounter issues not covered in this guide:

1. Check the [Quick Reference](QUICK-REFERENCE.md) for quick answers
2. Review the [Anti-Patterns](ANTI-PATTERNS.md) for common mistakes
3. Consult the [Glossary](GLOSSARY.md) for terminology
4. Refer to the specific workflow for detailed guidance
5. Check the [Integration Guide](guides/integration-guide.md) for workflow connections
