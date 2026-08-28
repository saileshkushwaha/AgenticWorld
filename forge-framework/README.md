# Forge Engineering Lifecycle Framework

A production-ready, markdown-based agentic framework for end-to-end Software Development Lifecycle (SDLC) operations. Forge is tool-independent, model-agnostic, and produces consistent artifacts across any AI agent platform.

## Overview

Forge provides a structured framework for AI agents to perform complex SDLC tasks including research, analysis, design, implementation, testing, debugging, deployment, modernization, and communication. The framework ensures consistent, high-quality outputs regardless of the underlying AI model or agentic tool.

## Core Capabilities

| Capability | Description |
|------------|-------------|
| Research | Technology evaluation, best practices, competitive analysis |
| Analysis | Requirements analysis, feasibility study, risk assessment |
| Design | Architecture, component, data model, API design |
| Implementation | Coding, unit testing, integration |
| Testing | Test planning, execution, coverage analysis |
| Debugging | Reproduction, root cause analysis, fix implementation |
| Deployment | Environment setup, deployment strategy, rollback planning |
| Modernization | Legacy migration, tech stack upgrades, refactoring |
| Communication | Reporting, documentation, stakeholder updates |

## Directory Structure

```
forge-framework/
├── README.md                    # This file
├── core/
│   ├── system-prompt.md         # Main system prompt and agent identity
│   ├── persona.md               # Agent persona definition
│   └── principles.md            # Core operating principles
├── workflows/
│   ├── 01-research.md           # Research phase workflow
│   ├── 02-analyze.md            # Analysis phase workflow
│   ├── 03-design.md             # Design phase workflow
│   ├── 04-implement.md          # Implementation phase workflow
│   ├── 05-test.md               # Testing phase workflow
│   ├── 06-debug.md              # Debugging phase workflow
│   ├── 07-deploy.md             # Deployment phase workflow
│   ├── 08-modernize.md          # Modernization phase workflow
│   └── 09-communication.md      # Communication phase workflow
├── capabilities/
│   ├── research.md              # Research capability definition
│   ├── analysis.md              # Analysis capability definition
│   ├── design.md                # Design capability definition
│   ├── implementation.md        # Implementation capability definition
│   ├── testing.md               # Testing capability definition
│   ├── debugging.md             # Debugging capability definition
│   ├── deployment.md            # Deployment capability definition
│   └── modernization.md         # Modernization capability definition
├── templates/
│   ├── research-report.md       # Research report template
│   ├── analysis-report.md       # Analysis report template
│   ├── design-document.md       # Design document template
│   ├── implementation-plan.md  # Implementation plan template
│   ├── test-plan.md             # Test plan template
│   ├── debug-report.md          # Debug report template
│   ├── deployment-plan.md       # Deployment plan template
│   └── modernization-plan.md    # Modernization plan template
└── artifacts/
    └── output-format.md         # Artifact output format specification
```

## Quick Start

1. **Load the system prompt**: Use `core/system-prompt.md` as the base system prompt for your agent
2. **Select a workflow**: Choose the appropriate workflow from `workflows/` based on the task
3. **Follow the workflow**: Execute each step in the workflow sequentially
4. **Generate artifacts**: Use templates from `templates/` to produce consistent outputs
5. **Verify quality**: Check outputs against quality gates defined in each workflow

## Usage with Any AI Model

Forge is designed to be model-agnostic. The framework works with:

- Claude (Anthropic)
- GPT-4 / GPT-5 (OpenAI)
- Gemini (Google)
- Llama (Meta)
- Any instruction-tuned LLM

The key is loading the system prompt and relevant workflow into the agent's context window.

## Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `output_format` | Artifact output format | markdown |
| `quality_gates` | Enable/disable quality gates | enabled |
| `verbosity` | Output detail level | standard |
| `language` | Primary output language | en |

## Design Principles

1. **Evidence over assumption** - All conclusions must be supported by evidence
2. **Incremental verification** - Verify each step before proceeding
3. **Structured thinking** - Follow defined processes for consistency
4. **Artifact consistency** - Produce standardized outputs across all phases
5. **Context preservation** - Maintain context across workflow transitions
6. **Proactive risk identification** - Identify and mitigate risks early
7. **Documentation as first-class concern** - Document decisions and rationale

## Version

v1.0.0 - Initial release
