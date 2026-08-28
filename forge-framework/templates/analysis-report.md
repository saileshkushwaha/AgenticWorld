# Analysis Report

**Created**: [ISO 8601 timestamp]
**Phase**: Analysis
**Status**: [draft | review | approved]
**Author**: [Agent/Team name]
**Version**: [Semantic version]

---

## Executive Summary

*Guidance: 2-3 sentences covering what was analyzed, key findings, and whether the project is feasible.*

[2-3 sentence overview of the analysis objectives, key findings, and primary recommendation]

*Example: "This report analyzes requirements for the e-commerce platform modernization. All functional and non-functional requirements are documented and traced. The project is technically and economically feasible with an estimated 18-month payback period. Primary risks include team skill gaps and integration complexity, both with defined mitigations."*

## Analysis Objectives

*Guidance: List 3-5 specific objectives for the analysis.*

- Objective 1: [description]
- Objective 2: [description]
- Objective 3: [description]

## Requirements

### Functional Requirements

*Guidance: Use MoSCoW prioritization (Must, Should, Could, Won't). Each requirement needs testable acceptance criteria.*

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|-------------------|
| FR-01 | [description] | [Must/Should/Could] | [criteria] |
| FR-02 | [description] | [Must/Should/Could] | [criteria] |

*Example:*
| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|-------------------|
| FR-01 | User login with email/password | Must | Login succeeds with valid creds; fails with invalid; locks after 5 attempts |
| FR-02 | Product search | Must | Returns results in < 500ms; supports filtering by category and price |

### Non-Functional Requirements

*Guidance: Make targets measurable. Include specific numbers.*

| ID | Requirement | Category | Target |
|----|-------------|----------|--------|
| NFR-01 | [description] | [Performance/Security/Reliability] | [metric] |
| NFR-02 | [description] | [Performance/Security/Reliability] | [metric] |

*Example:*
| ID | Requirement | Category | Target |
|----|-------------|----------|--------|
| NFR-01 | Page load time | Performance | < 2 seconds p95 |
| NFR-02 | System availability | Reliability | 99.9% uptime |
| NFR-03 | Data encryption | Security | AES-256 at rest, TLS 1.3 in transit |

## Feasibility Assessment

### Technical Feasibility

**Assessment**: [Feasible / Feasible with constraints / Not feasible]

**Details**:
- Technology readiness: [assessment]
- Integration complexity: [assessment]
- Team capability: [assessment]
- Infrastructure requirements: [assessment]

### Economic Feasibility

**Assessment**: [Feasible / Feasible with constraints / Not feasible]

**Details**:
- Development cost estimate: [amount]
- Operational cost estimate: [amount]
- Projected ROI: [percentage]
- Payback period: [duration]

### Operational Feasibility

**Assessment**: [Feasible / Feasible with constraints / Not feasible]

**Details**:
- Operational readiness: [assessment]
- Process changes required: [description]
- Training needs: [description]
- Organizational impact: [assessment]

## Risk Assessment

*Guidance: Score = Probability (1-3) x Impact (1-3). Focus on risks with score >= 6.*

| ID | Risk | Category | Probability | Impact | Score | Mitigation |
|----|------|----------|-------------|--------|-------|------------|
| R-01 | [description] | [category] | [H/M/L] | [H/M/L] | [score] | [strategy] |
| R-02 | [description] | [category] | [H/M/L] | [H/M/L] | [score] | [strategy] |

## Constraints

### Technical Constraints
- [Constraint 1]: [description and impact]
- [Constraint 2]: [description and impact]

### Business Constraints
- [Constraint 1]: [description and impact]
- [Constraint 2]: [description and impact]

### Regulatory Constraints
- [Constraint 1]: [description and impact]
- [Constraint 2]: [description and impact]

## Trade-off Analysis

### Decision: [Decision Title]

*Guidance: Use weighted scoring for objective comparison. Document why weights were chosen.*

| Option | Pros | Cons | Score |
|--------|------|------|-------|
| [Option A] | [pros] | [cons] | [score] |
| [Option B] | [pros] | [cons] | [score] |
| [Option C] | [pros] | [cons] | [score] |

**Recommendation**: [Option] - [rationale]

## SWOT Analysis

| | Positive | Negative |
|---|----------|----------|
| **Internal** | **Strengths**: [list] | **Weaknesses**: [list] |
| **External** | **Opportunities**: [list] | **Threats**: [list] |

## Recommendations

1. **[Primary Recommendation]**: [description and rationale]
2. **[Secondary Recommendation]**: [description and rationale]
3. **[Risk Mitigation]**: [description]

## Decisions & Rationale

| Decision | Options Considered | Rationale |
|----------|-------------------|-----------|
| [Decision 1] | [options] | [why this choice] |
| [Decision 2] | [options] | [why this choice] |

## Assumptions

*Guidance: Document all assumptions made during analysis. State the basis for each.*

- [Assumption 1]: [description and basis]
- [Assumption 2]: [description and basis]

## Open Issues

*Guidance: List unresolved items that could affect the analysis.*

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
