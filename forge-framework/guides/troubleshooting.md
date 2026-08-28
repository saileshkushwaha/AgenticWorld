# Troubleshooting Guide - Forge Engineering Lifecycle Framework

## Overview

This document provides solutions to common issues encountered when using the Forge framework.

## General Issues

### Issue: Output Too Long

**Symptoms**: The AI generates excessively long outputs that are hard to review.

**Solutions**:
1. Set verbosity to `minimal` or `standard` in config
2. Ask for specific sections only
3. Use quick research mode instead of deep
4. Break complex tasks into smaller subtasks

### Issue: Output Too Short

**Symptoms**: The AI generates brief outputs missing important details.

**Solutions**:
1. Set verbosity to `detailed` in config
2. Enable quality gates: `quality_gates: enabled`
3. Explicitly request the template be followed
4. Ask for specific sections to be expanded

### Issue: Inconsistent Outputs Across Models

**Symptoms**: Different AI models produce different quality/structure of outputs.

**Solutions**:
1. Ensure system prompt is fully loaded
2. Provide the complete workflow as context
3. Use `strict_mode: true` in config
4. Include explicit format requirements
5. Reference the output-format specification

### Issue: Quality Gates Not Passed

**Symptoms**: Output doesn't meet quality gate criteria.

**Solutions**:
1. Re-run the workflow step that failed
2. Explicitly check each quality gate criterion
3. Add missing evidence or documentation
4. Use the quality gate checklist as a review tool

### Issue: Agent Doesn't Follow Workflow

**Symptoms**: Agent skips steps or doesn't follow the workflow structure.

**Solutions**:
1. Ensure the workflow is provided as context
2. Explicitly ask the agent to follow the workflow step by step
3. Reference specific steps by number
4. Check that the system prompt is loaded correctly

## Research Issues

### Issue: Can't Find Enough Sources

**Symptoms**: Research has too few sources or only one source type.

**Solutions**:
1. Broaden search terms and try different query templates
2. Use snowball sampling from reference lists
3. Try different source types (academic, industry, community)
4. Check Google Scholar's "Cited by" and "Related articles"
5. Use the web search guide for query templates

### Issue: Conflicting Information

**Symptoms**: Different sources provide conflicting recommendations.

**Solutions**:
1. Document the conflict explicitly in the verification log
2. Assess source credibility using the quality hierarchy
3. Note the context of each recommendation
4. Present both perspectives with evidence
5. Recommend further investigation if needed
6. Lower confidence level for conflicting claims

### Issue: Technology Too New to Evaluate

**Symptoms**: Technology is too new for reliable evaluation.

**Solutions**:
1. Acknowledge the limitation in the report
2. Evaluate based on early indicators (team, funding, community)
3. Recommend a proof-of-concept
4. Suggest waiting for maturity if risk is high
5. Document the uncertainty level as high

### Issue: Paywalled Content

**Symptoms**: Important sources are behind paywalls.

**Solutions**:
1. Search for preprint versions on arXiv or SSRN
2. Check author's personal website
3. Use Google Scholar's "All versions" feature
4. Contact authors directly (often willing to share)
5. Find alternative open-access sources
6. Document the limitation and plan for upgrade

### Issue: Low Confidence in Findings

**Symptoms**: Research findings have low confidence levels.

**Solutions**:
1. Deepen the research (switch to deep mode)
2. Seek additional sources for weak claims
3. Consult experts if possible
4. Consider a proof-of-concept
5. Be transparent about limitations
6. Recommend decision points where uncertainty can be resolved

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

## Configuration Issues

### Issue: Config Not Taking Effect

**Symptoms**: Configuration changes don't affect output.

**Solutions**:
1. Verify `forge.config.md` is in project root
2. Check for syntax errors in config
3. Ensure config values are valid
4. Reload the agent with new config
5. Check for conflicting per-workflow overrides

### Issue: Context Window Exceeded

**Symptoms**: Agent loses context or outputs are truncated.

**Solutions**:
1. Use a model with larger context window
2. Break complex tasks into smaller steps
3. Focus on one workflow at a time
4. Summarize context between steps
5. Use concise mode for simple tasks

## Getting More Help

If you encounter issues not covered in this guide:

1. Check the [Quick Reference](QUICK-REFERENCE.md) for quick answers
2. Review the [Anti-Patterns](ANTI-PATTERNS.md) for common mistakes
3. Consult the [Glossary](GLOSSARY.md) for terminology
4. Refer to the specific workflow for detailed guidance
5. Check the [Integration Guide](guides/integration-guide.md) for workflow connections
