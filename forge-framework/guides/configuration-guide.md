# Configuration Guide - Forge Engineering Lifecycle Framework

## Overview

This document provides detailed guidance on configuring the Forge framework for your specific needs.

## Configuration Levels

### Global Configuration

Applies to all workflows and artifacts.

**File**: `forge.config.md` (placed in project root)

```markdown
# Forge Configuration

## Global Settings
- output_format: markdown
- quality_gates: enabled
- verbosity: standard
- language: en
- strict_mode: false
```

### Per-Workflow Configuration

Overrides global settings for specific workflows.

```markdown
## Workflow Overrides
- 04-implement:
  - verbosity: detailed
  - examples: true
  - time_estimate: true
- 07-deploy:
  - strict_mode: true
  - quality_gates: enabled
```

### Per-Project Configuration

Settings specific to a project.

```markdown
## Project Settings
- project_type: greenfield
- team_size: 5
- tech_stack: [react, node, postgres]
- compliance: [soc2, gdpr]
```

## Configuration Options Reference

### output_format

Controls the format of generated artifacts.

| Value | Description | Use When |
|-------|-------------|----------|
| markdown | Standard Markdown (default) | General use, version control friendly |
| html | HTML formatted output | Web publishing, rich formatting |
| json | JSON structured output | Programmatic consumption, automation |

### quality_gates

Controls whether quality gates are enforced.

| Value | Description | Use When |
|-------|-------------|----------|
| enabled | Quality gates must be passed (default) | Production work, team projects |
| disabled | Quality gates are optional | Prototyping, personal projects, learning |

### verbosity

Controls the level of detail in outputs.

| Value | Description | Use When |
|-------|-------------|----------|
| minimal | Key points only | Quick tasks, experienced teams |
| standard | Balanced detail (default) | Most situations |
| detailed | Comprehensive detail | Complex tasks, new teams, documentation |

### language

Controls the primary output language.

| Value | Language |
|-------|----------|
| en | English (default) |
| es | Spanish |
| fr | French |
| de | German |
| ja | Japanese |
| zh | Chinese |

### strict_mode

Controls how strictly rules are enforced.

| Value | Description | Use When |
|-------|-------------|----------|
| false | Rules are guidelines, can be adapted (default) | Most situations |
| true | Rules must be followed exactly | Compliance, safety-critical |

### time_estimate

Controls whether time estimates are included.

| Value | Description |
|-------|-------------|
| true | Include time estimates for each step |
| false | Omit time estimates |

### tool_recommendations

Controls whether tool suggestions are included.

| Value | Description |
|-------|-------------|
| true | Include recommended tools for each step |
| false | Omit tool recommendations |

### examples

Controls whether worked examples are included.

| Value | Description |
|-------|-------------|
| true | Include examples in outputs |
| false | Omit examples |

### edge_cases

Controls whether edge case handling is included.

| Value | Description |
|-------|-------------|
| true | Include edge case analysis |
| false | Omit edge case analysis |

## Configuration by Project Type

### Greenfield Project

```markdown
## Project Configuration
- project_type: greenfield
- verbosity: detailed
- examples: true
- quality_gates: enabled
- strict_mode: false

## Workflow Configuration
- 01-research:
  - verbosity: detailed
  - tool_recommendations: true
- 02-analyze:
  - verbosity: detailed
- 03-design:
  - verbosity: detailed
  - examples: true
```

### Maintenance Project

```markdown
## Project Configuration
- project_type: maintenance
- verbosity: standard
- examples: false
- quality_gates: enabled
- strict_mode: false

## Workflow Configuration
- 06-debug:
  - verbosity: detailed
  - examples: true
- 04-implement:
  - verbosity: standard
```

### Modernization Project

```markdown
## Project Configuration
- project_type: modernization
- verbosity: detailed
- examples: true
- quality_gates: enabled
- strict_mode: true

## Workflow Configuration
- 08-modernize:
  - verbosity: detailed
  - time_estimate: true
- 07-deploy:
  - strict_mode: true
```

### Research Project

```markdown
## Project Configuration
- project_type: research
- verbosity: detailed
- examples: true
- quality_gates: enabled
- strict_mode: false

## Workflow Configuration
- 01-research:
  - verbosity: detailed
  - tool_recommendations: true
- 09-communication:
  - verbosity: detailed
```

## Configuration by Team Size

### Solo Developer

```markdown
- verbosity: minimal
- quality_gates: enabled (self-discipline)
- examples: false
- strict_mode: false
```

### Small Team (2-5)

```markdown
- verbosity: standard
- quality_gates: enabled
- examples: true
- strict_mode: false
```

### Medium Team (6-20)

```markdown
- verbosity: detailed
- quality_gates: enabled
- examples: true
- strict_mode: true
```

### Large Team (20+)

```markdown
- verbosity: detailed
- quality_gates: enabled
- examples: true
- strict_mode: true
- language: en (standardize)
```

## Configuration by Compliance Needs

### SOC 2

```markdown
- strict_mode: true
- quality_gates: enabled
- verbosity: detailed
- documentation: comprehensive
```

### HIPAA

```markdown
- strict_mode: true
- quality_gates: enabled
- verbosity: detailed
- security_review: required
```

### GDPR

```markdown
- strict_mode: true
- quality_gates: enabled
- verbosity: detailed
- privacy_review: required
```

## Environment Variables

For tool integration, Forge can be configured via environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| FORGE_OUTPUT_FORMAT | Output format | markdown |
| FORGE_QUALITY_GATES | Quality gates | enabled |
| FORGE_VERBOSITY | Verbosity level | standard |
| FORGE_LANGUAGE | Output language | en |
| FORGE_STRICT_MODE | Strict mode | false |

## Configuration Validation

Validate your configuration:

1. All workflows referenced must exist
2. All configuration values must be valid
3. Per-workflow overrides must not conflict with global settings
4. Project type must be one of: greenfield, maintenance, modernization, research

## Configuration Examples

### Minimal Configuration

```markdown
# forge.config.md
- output_format: markdown
- quality_gates: enabled
```

### Comprehensive Configuration

```markdown
# forge.config.md

## Global Settings
- output_format: markdown
- quality_gates: enabled
- verbosity: detailed
- language: en
- strict_mode: false

## Workflow Overrides
- 01-research:
  - verbosity: detailed
  - tool_recommendations: true
  - examples: true
- 02-analyze:
  - verbosity: detailed
- 03-design:
  - verbosity: detailed
  - examples: true
- 04-implement:
  - verbosity: detailed
  - examples: true
  - time_estimate: true
- 05-test:
  - verbosity: detailed
- 06-debug:
  - verbosity: detailed
  - examples: true
- 07-deploy:
  - strict_mode: true
  - verbosity: detailed
- 08-modernize:
  - verbosity: detailed
  - time_estimate: true
- 09-communication:
  - verbosity: detailed

## Project Settings
- project_type: greenfield
- team_size: 8
- tech_stack: [react, node, postgres, redis]
- compliance: [soc2]
```
