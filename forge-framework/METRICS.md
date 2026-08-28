# Metrics and KPIs - Forge Engineering Lifecycle Framework

## Overview

This document defines the key metrics and KPIs for measuring the effectiveness of the Forge framework and the quality of outputs at each phase.

## Framework Effectiveness Metrics

### Adoption Metrics

| Metric | Description | Target | Measurement |
|--------|-------------|--------|-------------|
| Workflow Usage | % of tasks using a workflow | >80% | Count of workflow-guided vs ad-hoc tasks |
| Template Adoption | % of artifacts using templates | >90% | Count of template-based vs free-form artifacts |
| Quality Gate Pass Rate | % of outputs passing quality gates on first attempt | >70% | Count of first-pass passes vs total |
| Framework Satisfaction | User satisfaction score | >4.0/5 | Survey of framework users |

### Consistency Metrics

| Metric | Description | Target | Measurement |
|--------|-------------|--------|-------------|
| Output Consistency | Score comparing outputs across models | >85% | Rubric-based comparison |
| Terminology Consistency | % of standard terms used correctly | >90% | Audit of artifact terminology |
| Format Compliance | % of artifacts following format spec | >95% | Format checklist audit |

## Phase-Level Metrics

### Research Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Source Diversity | Number of distinct source types used | ≥3 |
| Source Credibility | % of sources rated credible | >80% |
| Research Coverage | % of research objectives addressed | 100% |
| Finding Confidence | Average confidence level of findings | >high |
| Recommendation Actionability | % of recommendations that are actionable | 100% |
| Research Duration | Time to complete research phase | Per project |

### Analysis Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Requirements Coverage | % of requirements with acceptance criteria | 100% |
| Requirements Testability | % of requirements that are testable | 100% |
| Risk Coverage | % of identified risks with mitigation | >90% |
| Feasibility Confidence | Confidence in feasibility assessment | >high |
| Stakeholder Agreement | % of stakeholders agreeing with analysis | >80% |

### Design Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Requirements Traceability | % of requirements traced to design | 100% |
| ADR Coverage | % of significant decisions with ADRs | >80% |
| Design Review Pass Rate | % of designs passing review on first attempt | >60% |
| Component Coupling | Average coupling score | <threshold |
| Interface Completeness | % of interfaces fully specified | 100% |

### Implementation Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Code Coverage | % of code covered by tests | >80% line, >70% branch |
| Build Success Rate | % of builds succeeding | >95% |
| Code Quality Score | Static analysis score | >A or equivalent |
| Bug Density | Bugs per 1000 lines of code | <5 |
| Technical Debt Ratio | Estimated debt vs development cost | <10% |
| Review Turnaround | Average time to complete review | <24 hours |

### Testing Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Test Coverage | % of requirements covered by tests | >90% |
| Test Pass Rate | % of tests passing | >95% |
| Defect Detection Rate | % of defects found before production | >90% |
| Defect Escape Rate | % of defects found in production | <10% |
| Test Execution Rate | % of planned tests executed | 100% |
| Flaky Test Rate | % of tests that are flaky | <2% |

### Debugging Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Mean Time to Detect (MTTD) | Average time to detect an issue | Per SLA |
| Mean Time to Resolve (MTTR) | Average time to resolve an issue | Per SLA |
| Reproduction Success Rate | % of issues successfully reproduced | >80% |
| Fix Effectiveness | % of fixes that permanently resolve issue | >90% |
| Recurrence Rate | % of issues that recur | <5% |

### Deployment Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Deployment Frequency | Deployments per time period | Per team goal |
| Deployment Success Rate | % of deployments succeeding | >95% |
| Mean Time to Deploy | Average deployment duration | <1 hour |
| Rollback Rate | % of deployments requiring rollback | <5% |
| Deployment-Related Incidents | Incidents caused by deployments | <2% |
| Time to Recovery (TTR) | Average time to recover from failure | Per SLA |

### Modernization Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Migration Progress | % of system modernized | Per plan |
| Functional Equivalence | % of functionality preserved | 100% |
| Performance Improvement | % improvement in performance metrics | Per goals |
| Defect Rate Change | Change in defect rate post-migration | Decreasing |
| Rollback Frequency | Number of rollback events | 0 |

### Communication Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Stakeholder Satisfaction | Satisfaction with communication | >4.0/5 |
| Report Timeliness | % of reports delivered on time | >90% |
| Understanding Score | % of audience understanding key points | >80% |
| Decision Turnaround | Time to communicate decisions | <24 hours |

## Quality Scorecard

### Output Quality Rubric

Score each artifact on these dimensions (1-5 scale):

| Dimension | 1 (Poor) | 3 (Acceptable) | 5 (Excellent) |
|-----------|----------|-----------------|----------------|
| Completeness | Missing major sections | All sections present, some thin | All sections thorough and detailed |
| Evidence | No evidence cited | Some evidence cited | All claims supported by evidence |
| Decisions | No decisions documented | Decisions documented without rationale | Decisions with full rationale and trade-offs |
| Risks | No risks identified | Risks identified without mitigation | Risks with probability, impact, mitigation |
| Clarity | Unclear and confusing | Understandable with effort | Clear, concise, well-structured |
| Actionability | No actionable items | Some actionable items | Clear, specific, prioritized next steps |

### Overall Quality Score

```
Overall Score = Average of dimension scores

Score Interpretation:
- 4.5-5.0: Excellent (ship as-is)
- 3.5-4.4: Good (minor improvements needed)
- 2.5-3.4: Acceptable (moderate improvements needed)
- 1.5-2.4: Poor (significant rework needed)
- 1.0-1.4: Unacceptable (start over)
```

## Measurement Guidelines

### When to Measure

- **After each phase**: Score the phase output artifact
- **At project completion**: Assess overall framework effectiveness
- **Monthly**: Track adoption and consistency metrics
- **Quarterly**: Review and improve measurement approach

### How to Measure

1. **Self-assessment**: Creator scores their own work
2. **Peer assessment**: Another team member scores the work
3. **Automated checks**: Use tools to check format compliance
4. **Stakeholder survey**: Collect satisfaction data

### Using Metrics

- Track trends over time, not just point-in-time
- Use metrics to identify improvement areas
- Share metrics transparently with the team
- Celebrate improvements, don't punish misses
- Adjust targets based on context and experience
