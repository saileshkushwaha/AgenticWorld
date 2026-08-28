# Forge Engineering Lifecycle Framework

A production-ready, markdown-based agentic framework for end-to-end Software Development Lifecycle (SDLC) operations. Forge is tool-independent, model-agnostic, and produces consistent artifacts across any AI agent platform.

## Table of Contents

- [Overview](#overview)
- [Why Forge?](#why-forge)
- [Core Capabilities](#core-capabilities)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Directory Structure](#directory-structure)
- [Usage Guide](#usage-guide)
- [Configuration](#configuration)
- [Use Cases](#use-cases)
- [Design Principles](#design-principles)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [FAQ](#faq)
- [License](#license)

## Overview

Forge provides a structured framework for AI agents to perform complex SDLC tasks including research, analysis, design, implementation, testing, debugging, deployment, modernization, and communication. The framework ensures consistent, high-quality outputs regardless of the underlying AI model or agentic tool.

Unlike ad-hoc prompting, Forge provides:
- **Structured workflows** with clear steps, inputs, outputs, and quality gates
- **Standardized templates** for all artifacts ensuring consistency
- **Decision frameworks** for navigating trade-offs
- **Self-verification habits** built into every phase

## Why Forge?

### The Problem

AI agents producing software engineering work often:
- Skip critical steps (jumping from requirements to code)
- Produce inconsistent outputs across different models
- Lack verification and quality assurance
- Make undocumented assumptions
- Ignore edge cases and error handling

### The Solution

Forge addresses these issues by:
1. **Enforcing structure**: Every phase has defined steps that must be followed
2. **Standardizing outputs**: Templates ensure consistent artifact format
3. **Building in verification**: Quality gates at every step prevent skipping
4. **Requiring documentation**: Assumptions, decisions, and rationale must be recorded
5. **Being model-agnostic**: Works with any instruction-tuned LLM

### Comparison

| Feature | Ad-hoc Prompting | Forge Framework |
|---------|-----------------|-----------------|
| Consistency | Low | High |
| Completeness | Variable | Guaranteed |
| Quality Gates | None | Built-in |
| Artifact Format | Inconsistent | Standardized |
| Decision Documentation | Rare | Required |
| Edge Case Coverage | Hit or miss | Systematic |

## Core Capabilities

| Capability | Description | Workflow |
|------------|-------------|----------|
| Research | Technology evaluation, best practices, competitive analysis | [01-research](workflows/01-research.md) |
| Analysis | Requirements analysis, feasibility study, risk assessment | [02-analyze](workflows/02-analyze.md) |
| Design | Architecture, component, data model, API design | [03-design](workflows/03-design.md) |
| Implementation | Coding, unit testing, integration | [04-implement](workflows/04-implement.md) |
| Testing | Test planning, execution, coverage analysis | [05-test](workflows/05-test.md) |
| Debugging | Reproduction, root cause analysis, fix implementation | [06-debug](workflows/06-debug.md) |
| Deployment | Environment setup, deployment strategy, rollback planning | [07-deploy](workflows/07-deploy.md) |
| Modernization | Legacy migration, tech stack upgrades, refactoring | [08-modernize](workflows/08-modernize.md) |
| Communication | Reporting, documentation, stakeholder updates | [09-communication](workflows/09-communication.md) |

## Quick Start

### 5-Minute Setup

1. **Clone or download** the framework files
2. **Load the system prompt** from `core/system-prompt.md` into your agent
3. **Select a workflow** based on your current task
4. **Follow the workflow** steps sequentially
5. **Generate artifacts** using the provided templates

### Example: Research Task

```
1. Load core/system-prompt.md as system prompt
2. Load workflows/01-research.md as context
3. Ask: "Research the best ORM for a Python microservice"
4. Forge follows the 7-step research workflow
5. Output uses templates/research-report.md format
```

### Example: Implementation Task

```
1. Load core/system-prompt.md as system prompt
2. Load workflows/04-implement.md as context
3. Ask: "Implement a JWT authentication middleware"
4. Forge follows the 7-step implementation workflow
5. Output uses templates/implementation-plan.md format
```

## Installation

### Option 1: Direct Download

Download the framework files and place them in your project:

```
your-project/
├── forge-framework/
│   ├── README.md
│   ├── core/
│   ├── workflows/
│   ├── capabilities/
│   ├── templates/
│   └── artifacts/
└── your-code/
```

### Option 2: Git Submodule

```bash
git submodule add https://github.com/your-repo/forge-framework.git
```

### Option 3: Copy Core Files

For minimal setup, copy only the files you need:

```
your-project/
├── system-prompt.md    # From core/
├── workflows/          # Select relevant workflows
└── templates/          # Select relevant templates
```

### Requirements

- An AI agent or LLM with instruction-following capability
- Context window large enough to hold system prompt + workflow (recommended: 8K+ tokens)
- No specific programming language or framework required

## Directory Structure

```
forge-framework/
├── README.md                     # This file
├── QUICK-REFERENCE.md            # One-page quick reference card
├── GLOSSARY.md                   # Terms and definitions
├── ANTI-PATTERNS.md              # Common mistakes and how to avoid them
├── METRICS.md                    # KPIs and measurement guide
├── core/
│   ├── system-prompt.md          # Main system prompt and agent identity
│   ├── persona.md                # Agent persona definition
│   └── principles.md             # Core operating principles
├── workflows/
│   ├── 01-research.md            # Research phase workflow
│   ├── 02-analyze.md             # Analysis phase workflow
│   ├── 03-design.md              # Design phase workflow
│   ├── 04-implement.md           # Implementation phase workflow
│   ├── 05-test.md                # Testing phase workflow
│   ├── 06-debug.md               # Debugging phase workflow
│   ├── 07-deploy.md              # Deployment phase workflow
│   ├── 08-modernize.md           # Modernization phase workflow
│   └── 09-communication.md       # Communication phase workflow
├── capabilities/
│   ├── research.md               # Research capability definition
│   ├── analysis.md               # Analysis capability definition
│   ├── design.md                 # Design capability definition
│   ├── implementation.md         # Implementation capability definition
│   ├── testing.md                # Testing capability definition
│   ├── debugging.md              # Debugging capability definition
│   ├── deployment.md             # Deployment capability definition
│   └── modernization.md          # Modernization capability definition
├── templates/
│   ├── research-report.md        # Research report template
│   ├── analysis-report.md        # Analysis report template
│   ├── design-document.md        # Design document template
│   ├── implementation-plan.md   # Implementation plan template
│   ├── test-plan.md             # Test plan template
│   ├── debug-report.md          # Debug report template
│   ├── deployment-plan.md       # Deployment plan template
│   └── modernization-plan.md    # Modernization plan template
├── artifacts/
│   └── output-format.md          # Artifact output format specification
└── guides/
    ├── integration-guide.md      # How workflows connect
    ├── configuration-guide.md    # Configuration options
    └── troubleshooting.md        # Common issues and solutions
```

## Usage Guide

### Basic Usage

1. **Load the system prompt** into your agent's system prompt field
2. **Identify the task** you need to accomplish
3. **Select the appropriate workflow** from the workflows directory
4. **Provide the workflow** as context to your agent
5. **Execute the task** following the workflow steps
6. **Review the output** against quality gates

### Advanced Usage

#### Multi-Phase Projects

For projects spanning multiple phases:

1. Complete the first phase workflow
2. Use the output artifact as input to the next phase
3. Reference previous decisions and rationale
4. Maintain context preservation across phases

#### Custom Workflows

To create custom workflows:

1. Copy an existing workflow as a starting point
2. Modify steps to fit your domain
3. Define quality gates appropriate to your context
4. Create a matching template for the output
5. Document the new workflow in the capabilities directory

#### Team Adoption

For team-wide adoption:

1. Start with one workflow (e.g., research or implementation)
2. Train the team on using the framework
3. Gather feedback and iterate
4. Gradually introduce additional workflows
5. Build a library of completed artifacts as examples

## Configuration

### Global Configuration

| Option | Description | Default | Values |
|--------|-------------|---------|--------|
| `output_format` | Artifact output format | markdown | markdown, html, json |
| `quality_gates` | Enable/disable quality gates | enabled | enabled, disabled |
| `verbosity` | Output detail level | standard | minimal, standard, detailed |
| `language` | Primary output language | en | en, es, fr, de, ja, zh |
| `strict_mode` | Enforce all rules strictly | false | true, false |

### Per-Workflow Configuration

Each workflow can be configured individually:

| Option | Description | Default |
|--------|-------------|---------|
| `time_estimate` | Include time estimates | true |
| `tool_recommendations` | Include tool suggestions | true |
| `edge_cases` | Include edge case handling | true |
| `examples` | Include worked examples | true |

### Configuration File

Create a `forge.config.md` in your project root:

```markdown
# Forge Configuration

## Global Settings
- output_format: markdown
- quality_gates: enabled
- verbosity: detailed
- language: en
- strict_mode: true

## Workflow Overrides
- 04-implement:
  - verbosity: detailed
  - examples: true
- 07-deploy:
  - strict_mode: true
```

## Use Cases

### Use Case 1: Greenfield Project

**Scenario**: Starting a new project from scratch

**Workflows Used**: Research → Analysis → Design → Implementation → Testing → Deployment

**Process**:
1. Research technologies and approaches
2. Analyze requirements and feasibility
3. Design system architecture
4. Implement features incrementally
5. Test thoroughly
6. Deploy to production

### Use Case 2: Feature Addition

**Scenario**: Adding a new feature to an existing system

**Workflows Used**: Analysis → Design → Implementation → Testing → Deployment

**Process**:
1. Analyze the feature requirements
2. Design the feature within existing architecture
3. Implement with proper integration
4. Test the feature and regressions
5. Deploy with appropriate strategy

### Use Case 3: Bug Fix

**Scenario**: Fixing a production bug

**Workflows Used**: Debugging → Implementation → Testing → Deployment

**Process**:
1. Reproduce and isolate the bug
2. Perform root cause analysis
3. Implement the fix
4. Test the fix and regressions
5. Deploy with rollback plan

### Use Case 4: Legacy Modernization

**Scenario**: Migrating a legacy system to modern stack

**Workflows Used**: Research → Analysis → Design → Modernization → Testing → Deployment

**Process**:
1. Research modernization approaches
2. Analyze current system and constraints
3. Design target architecture
4. Execute incremental migration
5. Test thoroughly at each phase
6. Deploy with coexistence strategy

### Use Case 5: Technical Due Diligence

**Scenario**: Evaluating a codebase for acquisition

**Workflows Used**: Research → Analysis → Communication

**Process**:
1. Research the technology stack and market
2. Analyze code quality, architecture, and risks
3. Communicate findings to stakeholders

## Design Principles

1. **Evidence over assumption** - All conclusions must be supported by evidence
2. **Incremental verification** - Verify each step before proceeding
3. **Structured thinking** - Follow defined processes for consistency
4. **Artifact consistency** - Produce standardized outputs across all phases
5. **Context preservation** - Maintain context across workflow transitions
6. **Proactive risk identification** - Identify and mitigate risks early
7. **Documentation as first-class concern** - Document decisions and rationale
8. **Security by design** - Integrate security at every phase
9. **Performance awareness** - Consider performance at every phase
10. **Continuous learning** - Incorporate lessons learned

## Versioning

Forge uses semantic versioning (MAJOR.MINOR.PATCH):

- **MAJOR**: Breaking changes to workflows or templates
- **MINOR**: New workflows, capabilities, or features
- **PATCH**: Corrections, clarifications, improvements

### Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.0.0 | 2026-08-28 | Initial release |

## Contributing

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes following the framework conventions
4. Test your changes with at least one AI model
5. Submit a pull request

### Contribution Guidelines

- Follow the existing file structure and naming conventions
- Use the templates provided for new artifacts
- Include quality gates for new workflows
- Document decisions and rationale
- Test with multiple AI models for consistency
- Update the version number appropriately

### Reporting Issues

- Use the issue tracker
- Include the workflow or file where the issue occurs
- Describe the expected vs actual behavior
- Include the AI model used (if relevant)

## FAQ

### General Questions

**Q: What AI models does Forge work with?**
A: Forge works with any instruction-tuned LLM including Claude, GPT-4/5, Gemini, Llama, and others. The framework is model-agnostic.

**Q: Do I need to use all workflows?**
A: No. Use only the workflows relevant to your current task. Start with one and expand as needed.

**Q: Can I customize the workflows?**
A: Yes. Fork the framework and modify workflows to fit your specific needs. See the Usage Guide for customization tips.

**Q: How much context window do I need?**
A: Minimum 8K tokens for basic usage. 32K+ recommended for complex multi-phase projects.

### Technical Questions

**Q: What if a workflow step doesn't apply to my situation?**
A: Skip the step but document why it was skipped. Quality gates should still be satisfied.

**Q: How do I handle multi-phase projects?**
A: Complete one phase, use its output as input to the next phase. Maintain context by referencing previous decisions.

**Q: Can I use Forge for non-software projects?**
A: While designed for SDLC, the structured approach works for any complex problem-solving task.

### Adoption Questions

**Q: How do I get my team to adopt Forge?**
A: Start with one workflow, demonstrate value, gather feedback, and gradually expand. See the Team Adoption section.

**Q: How long does it take to learn Forge?**
A: Basic usage takes 15 minutes. Full proficiency takes 1-2 weeks of regular use.

## License

This framework is open source and available for use in personal and commercial projects.

---

**Next Steps**:
- Read the [Quick Reference](QUICK-REFERENCE.md) for a one-page summary
- Explore the [Workflows](workflows/) directory
- Review the [Templates](templates/) for artifact formats
- Check the [Glossary](GLOSSARY.md) for terminology
