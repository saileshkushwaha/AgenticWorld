# Design Document

**Created**: [ISO 8601 timestamp]
**Phase**: Design
**Status**: [draft | review | approved]
**Author**: [Agent/Team name]
**Version**: [Semantic version]

---

## Executive Summary

[2-3 sentence overview of the design, key decisions, and rationale]

## Design Objectives

- Objective 1: [description]
- Objective 2: [description]
- Objective 3: [description]

## Requirements Traceability

| Requirement | Design Element | Status |
|-------------|----------------|--------|
| [REQ-01] | [Component/Module] | [addressed] |
| [REQ-02] | [Component/Module] | [addressed] |

## Architecture

### Architectural Style

[Selected style and rationale]

### System Context

[Diagram and description of system boundaries]

### Component Architecture

[Diagram and description of major components]

### Deployment Architecture

[Diagram and description of deployment topology]

## Component Designs

### Component 1: [Name]

**Responsibility**: [single responsibility description]

**Interface**:
```
[Interface definition]
```

**Dependencies**: [list of dependencies]

**Design Patterns**: [patterns applied]

**Internal Structure**:
[Classes, modules, or functions]

### Component 2: [Name]

**Responsibility**: [single responsibility description]

**Interface**:
```
[Interface definition]
```

**Dependencies**: [list of dependencies]

**Design Patterns**: [patterns applied]

**Internal Structure**:
[Classes, modules, or functions]

## Data Model

### Entity-Relationship Diagram

[ER diagram]

### Entity Definitions

#### Entity 1: [Name]

| Attribute | Type | Constraints | Description |
|-----------|------|-------------|-------------|
| [attr] | [type] | [constraints] | [description] |

#### Entity 2: [Name]

| Attribute | Type | Constraints | Description |
|-----------|------|-------------|-------------|
| [attr] | [type] | [constraints] | [description] |

### Indexes

| Entity | Index | Type | Purpose |
|--------|-------|------|---------|
| [entity] | [columns] | [type] | [purpose] |

## API Specification

### API 1: [Name]

**Endpoint**: `[METHOD] /path/to/resource`

**Request**:
```json
{
  "field": "type - description"
}
```

**Response**:
```json
{
  "field": "type - description"
}
```

**Errors**:
| Status | Code | Description |
|--------|------|-------------|
| [status] | [code] | [description] |

### API 2: [Name]

[Repeat format above]

## Architecture Decision Records

### ADR-001: [Title]

**Status**: [proposed | accepted | superseded]

**Context**: [What is the issue?]

**Decision**: [What was decided?]

**Consequences**:
- Positive: [list]
- Negative: [list]

### ADR-002: [Title]

[Repeat format above]

## Security Design

### Authentication
[Approach and rationale]

### Authorization
[Approach and rationale]

### Data Protection
[Approach and rationale]

### Security Controls
- [Control 1]: [description]
- [Control 2]: [description]

## Performance Design

### Scalability Approach
[How the system scales]

### Caching Strategy
[What is cached and how]

### Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| [metric] | [target] | [how measured] |

## Error Handling

### Error Categories
- [Category 1]: [description and handling]
- [Category 2]: [description and handling]

### Error Response Format
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message",
    "details": {}
  }
}
```

## Design Principles Applied

1. **[Principle 1]**: [how it was applied]
2. **[Principle 2]**: [how it was applied]
3. **[Principle 3]**: [how it was applied]

## Trade-offs Accepted

| Trade-off | What Was Gained | What Was Sacrificed |
|-----------|-----------------|---------------------|
| [trade-off] | [benefit] | [cost] |

## Open Issues

- [Issue 1]: [description and impact]
- [Issue 2]: [description and impact]

## Next Steps

1. [Action item 1]
2. [Action item 2]
3. [Action item 3]

## References

- [Reference 1]: [description and link]
- [Reference 2]: [description and link]

## Appendix

[Any supplementary material]
