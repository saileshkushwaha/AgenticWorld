# Artifact Output Format Specification

## Overview

This document defines the standard format for all artifacts produced by the Forge framework. Consistent formatting ensures predictable outputs regardless of the AI model or agentic tool used.

## Standard Artifact Structure

Every artifact must follow this structure:

```markdown
# [Artifact Title]

**Created**: [ISO 8601 timestamp]
**Phase**: [Current workflow phase]
**Status**: [draft | review | approved]
**Author**: [Agent/Team name]
**Version**: [Semantic version]

---

## Executive Summary

[2-3 sentence overview of the artifact content and key findings/recommendations]

## [Main Content Sections]

[Phase-specific content as defined in the template]

## Decisions & Rationale

| Decision | Options Considered | Rationale |
|----------|-------------------|-----------|
| [Decision 1] | [options] | [why this choice] |
| [Decision 2] | [options] | [why this choice] |

## Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk 1] | [H/M/L] | [H/M/L] | [strategy] |
| [Risk 2] | [H/M/L] | [H/M/L] | [strategy] |

## Assumptions

- [Assumption 1]: [description and basis]
- [Assumption 2]: [description and basis]

## Open Issues

- [Issue 1]: [description and blocker]
- [Issue 2]: [description and blocker]

## Next Steps

1. [Action item 1]
2. [Action item 2]
3. [Action item 3]

## References

- [Reference 1]: [description and link]
- [Reference 2]: [description and link]

## Appendix

[Any supplementary material]
```

## Complete Example

*Guidance: This is a complete example of a filled artifact header and executive summary.*

```markdown
# Research Report: Message Queue Evaluation

**Created**: 2026-08-28T10:00:00Z
**Phase**: Research
**Status**: draft
**Author**: Forge Agent
**Version**: 1.0.0

---

## Executive Summary

This report evaluates message queue technologies for a high-throughput event processing system handling 100K events/second. After comparing Kafka, RabbitMQ, AWS SQS, Google Pub/Sub, and Redis Streams across 12 criteria, we recommend Apache Kafka for its superior throughput, durability, and ecosystem maturity. The recommendation is made with high confidence based on extensive community adoption and proven production use cases.
```

## Field Definitions

### Header Fields

| Field | Format | Required | Description |
|-------|--------|----------|-------------|
| Created | ISO 8601 | Yes | When the artifact was created (e.g., 2026-08-28T10:00:00Z) |
| Phase | Workflow name | Yes | Current SDLC phase (Research, Analysis, Design, etc.) |
| Status | draft/review/approved | Yes | Current status of the artifact |
| Author | String | Yes | Who created the artifact |
| Version | SemVer | Yes | Artifact version (e.g., 1.0.0) |

### Section Definitions

#### Executive Summary
- **Purpose**: Quick overview for busy readers
- **Length**: 2-3 sentences
- **Content**: What, why, and key takeaway
- **Write this last**: Even though it appears first, write it after completing the rest

#### Decisions & Rationale
- **Purpose**: Document key decisions and why they were made
- **Format**: Table with Decision, Options, Rationale columns
- **Required**: Yes, if any decisions were made
- **Tip**: Include at least 2 options considered for each decision

#### Risks & Mitigations
- **Purpose**: Identify risks and how they will be addressed
- **Format**: Table with Risk, Probability, Impact, Mitigation columns
- **Required**: Yes
- **Tip**: Be honest about risks; don't downplay them

#### Assumptions
- **Purpose**: Document assumptions made during the phase
- **Format**: Bulleted list
- **Required**: Yes, if any assumptions were made
- **Tip**: State the basis for each assumption

#### Open Issues
- **Purpose**: Track unresolved items
- **Format**: Bulleted list
- **Required**: Yes, if any open issues exist
- **Tip**: State what is blocking resolution

#### Next Steps
- **Purpose**: Define what happens next
- **Format**: Numbered list
- **Required**: Yes
- **Tip**: Make items specific and actionable

#### References
- **Purpose**: Link to related artifacts and sources
- **Format**: Bulleted list
- **Required**: Yes, if any references exist
- **Tip**: Use consistent citation format

## Artifact Types

### Research Report
- **Template**: `templates/research-report.md`
- **Phase**: Research
- **Key Sections**: Research objectives, methodology, findings, technology comparison, best practices, recommendations

### Analysis Report
- **Template**: `templates/analysis-report.md`
- **Phase**: Analysis
- **Key Sections**: Requirements, feasibility assessment, risk assessment, constraints, trade-off analysis

### Design Document
- **Template**: `templates/design-document.md`
- **Phase**: Design
- **Key Sections**: Architecture, component designs, data model, API specification, ADRs

### Implementation Plan
- **Template**: `templates/implementation-plan.md`
- **Phase**: Implementation
- **Key Sections**: Task breakdown, implementation order, coding standards, progress tracking

### Test Plan
- **Template**: `templates/test-plan.md`
- **Phase**: Testing
- **Key Sections**: Test strategy, test cases, coverage, defect summary, quality assessment

### Debug Report
- **Template**: `templates/debug-report.md`
- **Phase**: Debugging
- **Key Sections**: Issue description, reproduction, isolation, root cause, fix, prevention

### Deployment Plan
- **Template**: `templates/deployment-plan.md`
- **Phase**: Deployment
- **Key Sections**: Deployment strategy, steps, rollback plan, verification, results

### Modernization Plan
- **Template**: `templates/modernization-plan.md`
- **Phase**: Modernization
- **Key Sections**: Current state, goals, migration strategy, phases, outcomes

## Formatting Rules

### General Rules
1. Use Markdown for all artifacts
2. Use ATX-style headers (# not underlines)
3. Use fenced code blocks with language identifiers
4. Use tables for structured comparisons
5. Use bulleted lists for unordered items
6. Use numbered lists for sequential items

### Tables
- Always include header row
- Align columns with pipes
- Use consistent formatting within columns
- Keep tables readable (avoid too many columns)

### Code Blocks
- Specify language for syntax highlighting
- Keep code snippets focused and relevant
- Include comments for clarity

### Links
- Use descriptive link text
- Prefer relative links for internal references
- Use absolute URLs for external references

## Status Workflow

```
draft → review → approved
  ↑         ↓
  └── revise ←──┘
```

- **Draft**: Initial creation, work in progress
- **Review**: Ready for peer/stakeholder review
- **Approved**: Reviewed and accepted
- **Revise**: Needs changes based on review feedback

## Versioning

Artifacts use semantic versioning (MAJOR.MINOR.PATCH):

- **MAJOR**: Significant content changes (new analysis, new design)
- **MINOR**: Additions (new sections, updated findings)
- **PATCH**: Corrections (typos, minor updates)

## Quality Checklist

Before delivering any artifact, verify:

- [ ] All required sections present
- [ ] Header fields complete and accurate
- [ ] Executive summary captures key points
- [ ] Decisions documented with rationale
- [ ] Risks identified with mitigations
- [ ] Assumptions documented
- [ ] Next steps defined
- [ ] References included
- [ ] Formatting follows this specification
- [ ] Spelling and grammar checked
