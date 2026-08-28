# Integration Guide - Forge Engineering Lifecycle Framework

## Overview

This document explains how the Forge workflows connect and integrate with each other to form a complete SDLC process.

## Workflow Dependencies

### Linear Flow (Most Common)

```
Research → Analysis → Design → Implementation → Testing → Deployment
```

Each phase produces an artifact that serves as input to the next phase.

### Iterative Flow

```
Research ↔ Analysis ↔ Design ↔ Implementation ↔ Testing
    ↑_________________________________________________↓
```

Findings in later phases may require revisiting earlier phases.

### Parallel Flow

```
                    → Implementation → Testing →
Research → Analysis → Design →                     → Deployment
                    → Implementation → Testing →
```

Multiple components can be in different phases simultaneously.

## Phase Handoff Points

### Research → Analysis

**Handoff**: Research report with technology recommendations and best practices

**What transfers**:
- Technology evaluation results
- Best practices identified
- Competitive analysis insights
- Confidence levels and uncertainties

**How to transfer**:
- Reference the research report in analysis
- Carry forward technology decisions
- Note any unresolved research questions

### Analysis → Design

**Handoff**: Analysis report with requirements, feasibility, and risks

**What transfers**:
- Functional and non-functional requirements
- Feasibility constraints
- Risk register
- Trade-off decisions

**How to transfer**:
- Create requirements traceability matrix
- Reference analysis decisions in ADRs
- Carry forward constraints into design

### Design → Implementation

**Handoff**: Design document with architecture, components, data models, APIs

**What transfers**:
- Component specifications
- Interface definitions
- Data models
- Architecture decisions (ADRs)

**How to transfer**:
- Break design into implementation tasks
- Reference design specs in code comments
- Use ADRs to guide implementation decisions

### Implementation → Testing

**Handoff**: Implemented code with unit tests and integration

**What transfers**:
- Source code
- Unit test suite
- Integration points
- Implementation decisions

**How to transfer**:
- Use implementation plan to guide test planning
- Reference acceptance criteria from analysis
- Carry forward known limitations

### Testing → Deployment

**Handoff**: Test results with quality assessment and known issues

**What transfers**:
- Test coverage report
- Open defects and their severity
- Quality assessment
- Known limitations

**How to transfer**:
- Use test results to inform deployment strategy
- Include known issues in deployment notes
- Define monitoring based on test findings

### Deployment → Modernization

**Handoff**: Deployment results with operational insights

**What transfers**:
- Operational performance data
- User feedback
- Technical debt observations
- Improvement opportunities

**How to transfer**:
- Use operational data to inform modernization priorities
- Reference deployment issues in modernization planning
- Carry forward lessons learned

## Cross-Cutting Workflows

### Communication (Supports All Phases)

Communication is not a linear phase but a cross-cutting concern that supports all other phases:

| Phase | Communication Output |
|-------|---------------------|
| Research | Research presentation, technology brief |
| Analysis | Requirements presentation, risk report |
| Design | Architecture review, ADR presentation |
| Implementation | Code review, sprint demo |
| Testing | Test results report, quality assessment |
| Debugging | Incident report, root cause summary |
| Deployment | Release notes, deployment status |
| Modernization | Migration progress, lessons learned |

### Modernization (Can Start at Any Phase)

Modernization can be initiated from any phase:
- **From Research**: New technology enables new capabilities
- **From Analysis**: Current system doesn't meet requirements
- **From Design**: Architecture needs evolution
- **From Implementation**: Code quality issues
- **From Testing**: Quality not meeting standards
- **From Deployment**: Operational issues
- **From Debugging**: Recurring issues indicate systemic problems

## Context Preservation Across Phases

### Decision Log

Maintain a running decision log across all phases:

| ID | Phase | Decision | Rationale | Date |
|----|-------|----------|-----------|------|
| D001 | Research | Selected PostgreSQL | Best fit for requirements | 2026-08-28 |
| D002 | Analysis | Must support 10K users | Business requirement | 2026-08-28 |
| D003 | Design | Microservices architecture | Scalability requirement | 2026-08-28 |

### Assumption Log

Track assumptions across phases:

| ID | Phase | Assumption | Basis | Status |
|----|-------|------------|-------|--------|
| A001 | Research | Technology X is mature | Community evidence | Validated |
| A002 | Analysis | Budget is sufficient | Stakeholder statement | At risk |
| A003 | Design | Team knows technology | Self-assessment | To verify |

### Risk Register Evolution

Risks evolve across phases:

| ID | Research | Analysis | Design | Implementation | Testing | Deployment |
|---|----------|----------|--------|----------------|---------|------------|
| R001 | Technology immaturity | Integration complexity | Performance risk | Implementation difficulty | Coverage gaps | Rollback plan |
| R002 | - | Resource availability | Skill gaps | Team capacity | - | Support coverage |

## Integration Patterns

### Pattern 1: Full Lifecycle

For new projects or major features:

```
Research → Analysis → Design → Implementation → Testing → Deployment
```

Use when: Starting from scratch, no existing system

### Pattern 2: Feature Addition

For adding features to existing systems:

```
Analysis → Design → Implementation → Testing → Deployment
```

Use when: Existing system, well-understood domain

### Pattern 3: Bug Fix

For fixing defects:

```
Debugging → Implementation → Testing → Deployment
```

Use when: Specific issue to resolve

### Pattern 4: Hotfix

For urgent production fixes:

```
Debugging → Implementation → Testing (minimal) → Deployment (expedited)
```

Use when: Production issue requiring immediate resolution

### Pattern 5: Modernization

For upgrading existing systems:

```
Research → Analysis → Design → Modernization → Testing → Deployment
```

Use when: Legacy system needs upgrading

### Pattern 6: Research Only

For knowledge gathering:

```
Research → Communication
```

Use when: Need to inform a decision without immediate implementation

### Pattern 7: Design Review

For evaluating existing designs:

```
Research → Analysis → Design (review) → Communication
```

Use when: Evaluating architecture for acquisition or improvement

## Multi-Team Integration

### Shared Artifacts

Teams should share:
- Research reports (common knowledge base)
- Architecture Decision Records (consistent decisions)
- API specifications (integration contracts)
- Test results (quality visibility)

### Coordination Points

| Point | Participants | Purpose |
|-------|-------------|---------|
| Research review | All teams | Share findings, avoid duplication |
| Design review | Architecture team | Ensure consistency |
| Code review | Development team | Maintain quality |
| Test review | QA and dev | Align on quality |
| Release planning | All teams | Coordinate deployments |

### Dependency Management

Track dependencies between teams:

| Team A | Depends On | Team B | Artifact | Due Date |
|--------|-----------|--------|----------|----------|
| Backend | API Design | API Team | OpenAPI spec | 2026-09-01 |
| Frontend | API Implementation | Backend | API endpoints | 2026-09-15 |
| QA | Test Environment | DevOps | Environment | 2026-09-10 |

## Tool Integration

### Version Control

All artifacts should be version controlled:
- Store alongside code in the same repository
- Use pull requests for artifact review
- Tag releases with corresponding artifacts

### CI/CD Pipeline

Integrate Forge artifacts into CI/CD:
- Design documents inform pipeline configuration
- Test plans inform test automation
- Deployment plans inform deployment automation

### Project Management

Link artifacts to project management:
- Research reports link to epics
- Implementation plans link to stories
- Test plans link to test cases
- Deployment plans link to releases

### Documentation

Publish artifacts to documentation systems:
- Design documents to wiki
- API specs to developer portal
- Runbooks to operations wiki
- Reports to stakeholder portal
