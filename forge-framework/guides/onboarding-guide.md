# Onboarding Guide - Forge Engineering Lifecycle Framework

## Overview

This guide helps you get started with the Forge framework, from initial setup to first successful project.

## Prerequisites

- An AI agent or LLM with instruction-following capability
- Context window: 8K+ tokens (32K+ recommended for complex projects)
- Basic familiarity with software development concepts

## 5-Minute Quick Start

### Step 1: Load the System Prompt
Copy the contents of `core/system-prompt.md` into your agent's system prompt field.

### Step 2: Select a Workflow
Identify what you need to do and select the corresponding workflow:
- Need to research? → `workflows/01-research.md`
- Need to analyze? → `workflows/02-analyze.md`
- Need to design? → `workflows/03-design.md`
- Need to implement? → `workflows/04-implement.md`
- Need to test? → `workflows/05-test.md`
- Need to debug? → `workflows/06-debug.md`
- Need to deploy? → `workflows/07-deploy.md`
- Need to modernize? → `workflows/08-modernize.md`
- Need to communicate? → `workflows/09-communication.md`

### Step 3: Load the Workflow
Provide the selected workflow as context to your agent.

### Step 4: Execute the Task
Ask your agent to perform the task. It will follow the workflow steps.

### Step 5: Review the Output
Check the output against the quality gates defined in the workflow.

## First Project Walkthrough

### Scenario: Research the Best Database for Your Application

1. **Load system prompt** from `core/system-prompt.md`
2. **Load workflow** from `workflows/01-research.md`
3. **Ask**: "Research the best database for a Python microservice handling 10K transactions/second"
4. **Agent follows the 7-step research workflow**:
   - Defines objectives
   - Gathers information from multiple sources
   - Evaluates options using weighted scoring
   - Identifies best practices
   - Synthesizes findings
   - Produces a research report
5. **Review the output** using the quality gates

### Expected Output
A research report following the `templates/research-report.md` format with:
- Executive summary
- Research findings with evidence
- Technology comparison matrix
- Recommendations with confidence levels
- Source references

## Configuration

### Basic Configuration
Create a `forge.config.md` in your project root:

```markdown
# Forge Configuration

## Global Settings
- output_format: markdown
- quality_gates: enabled
- verbosity: standard
- language: en
```

### Per-Workflow Overrides
```markdown
## Workflow Overrides
- 01-research:
  - verbosity: detailed
- 04-implement:
  - verbosity: detailed
```

## Team Adoption

### Week 1: Single Workflow
1. Choose one workflow (recommend: research or implementation)
2. Have each team member try it individually
3. Gather feedback on usefulness and usability
4. Iterate on the workflow based on feedback

### Week 2: Expand Coverage
1. Introduce 2-3 more workflows
2. Start using them on real projects
3. Build a library of completed artifacts as examples

### Week 3: Full Adoption
1. All workflows in active use
2. Team trained on framework conventions
3. Regular retrospectives on framework effectiveness

### Week 4: Optimization
1. Customize workflows for your domain
2. Create team-specific templates
3. Contribute improvements back to the framework

## Common Pitfalls to Avoid

1. **Skipping quality gates** — Always verify outputs pass quality gates
2. **Loading too many workflows** — Use only the workflow relevant to current task
3. **Ignoring templates** — Templates ensure consistency and completeness
4. **Not providing enough context** — Give your agent sufficient background information
5. **Expecting perfect output first time** — Iterate and refine

## Getting Help

- Check the [Quick Reference](QUICK-REFERENCE.md) for workflow selection
- Review the [Troubleshooting Guide](guides/troubleshooting.md) for common issues
- Consult the [FAQ](#faq) below
- Refer to the [Glossary](GLOSSARY.md) for terminology

## FAQ

**Q: Can I use multiple workflows at once?**
A: It's better to focus on one workflow at a time. Complete one phase before starting the next.

**Q: What if a workflow step doesn't apply?**
A: Skip the step but document why it was skipped. Quality gates should still be satisfied.

**Q: How do I handle large projects?**
A: Break the project into phases. Complete one workflow, use its output as input to the next.

**Q: Can I customize the workflows?**
A: Yes. Fork the framework and modify workflows to fit your specific needs.

**Q: What AI models work with Forge?**
A: Any instruction-tuned LLM. Tested with Claude, GPT-4/5, Gemini, Llama, and others.

**Q: How much context window do I need?**
A: Minimum 8K tokens for basic usage. 32K+ recommended for complex multi-phase projects.

**Q: How do I know if my research is deep enough?**
A: Check the accuracy metrics in the research report. If verification rate ≥80% and completeness ≥90%, you're in good shape.

**Q: What if I disagree with the agent's recommendation?**
A: Review the evidence chain. If insufficient, ask for additional research or provide your own sources.

**Q: Can I contribute to the framework?**
A: Yes! See the contribution guidelines in the README.

**Q: How do I report issues?**
A: Use the issue tracker on the repository with details of the workflow and expected vs actual behavior.
