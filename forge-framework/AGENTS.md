# AGENTS.md - Forge Engineering Lifecycle Framework

## Overview
This file provides AI agent instructions for working with the Forge Engineering Lifecycle Framework. It documents the framework's purpose, structure, conventions, and how to navigate it effectively.

## Framework Purpose
The Forge Engineering Lifecycle Framework provides a comprehensive, enterprise-grade approach to software development lifecycle (SDLC) management. It standardizes how engineering teams research, analyze, design, implement, test, debug, deploy, and modernize software systems.

## Framework Structure

```
forge-framework/
├── core/           # Framework core principles and behavior
├── workflows/      # 89 numbered workflow documents
├── capabilities/   # 88 capability definitions
├── templates/      # 84 artifact templates
├── guides/         # 52 comprehensive guides
├── examples/       # 10 filled example artifacts
├── artifacts/      # Supporting artifact definitions
└── *.md            # Root-level framework documentation
```

## Core Principles
1. **Artifact-First**: Every phase produces structured, reviewable artifacts
2. **Quality Gates**: Each workflow has defined quality criteria before proceeding
3. **Evidence-Based**: All claims and decisions require supporting evidence
4. **Traceability**: Clear links between requirements, design, implementation, and testing
5. **Continuous Improvement**: Built-in mechanisms for learning and process refinement

## Workflow Conventions
- Workflows are numbered 00-82
- Each workflow follows the pattern: `NN-workflow-name.md`
- Workflows map to SDLC phases: Research (01), Analyze (02), Design (03), Implement (04), Test (05), Debug (06), Deploy (07), Modernize (08), Communicate (09)

## Capability Conventions
- Capabilities describe what the framework can do
- Each capability maps to one or more workflows
- Capabilities are referenced by workflow documents

## Template Conventions
- Templates use Markdown with clear section headers
- Templates include metadata fields (Created, Phase, Status, Template)
- Templates are designed to be filled in by engineering teams

## Guide Conventions
- Guides provide detailed instructions for specific topics
- Guides reference relevant workflows and templates
- Guides include checklists, examples, and best practices

## Key Documents
- `README.md` - Framework overview and getting started
- `QUICK-REFERENCE.md` - Fast lookup of workflows and templates
- `PERSONA.md` - Framework behavior and personality guidelines
- `PRINCIPLES.md` - Core engineering principles
- `SYSTEM-PROMPT.md` - System prompt for AI assistants
- `ANTI-PATTERNS.md` - Common mistakes and how to avoid them
- `METRICS.md` - Key metrics and KPIs
- `API-REFERENCE.md` - API design and integration patterns
- `SECURITY.md` - Security requirements and controls
- `COMPLIANCE.md` - Compliance frameworks and requirements
- `EXTENSION-POINTS.md` - How to extend the framework
- `CHANGELOG.md` - Version history and changes
- `VERSIONING.md` - Version numbering conventions
- `CONTRIBUTING.md` - Contribution guidelines
- `GLOSSARY.md` - Framework terminology
- `CASE-STUDIES.md` - Real-world implementation examples
- `FRAMEWORK_ENHANCEMENT_RESEARCH.md` - Enhancement research and roadmap

## AI Agent Instructions
When working with this framework:
1. Always reference the relevant workflow before starting a task
2. Use the appropriate template for artifact creation
3. Follow the quality gates defined in each workflow
4. Document all decisions with evidence and rationale
5. Maintain traceability between related artifacts
6. Use the guides for detailed instructions on specific topics
7. Follow the conventions defined in this file