# Metrics and KPIs - Forge Engineering Lifecycle Framework

## Framework Effectiveness Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Workflow Usage | % of tasks using a workflow | >80% |
| Template Adoption | % of artifacts using templates | >90% |
| Quality Gate Pass Rate | % passing on first attempt | >70% |
| Output Consistency | Score comparing outputs across models | >85% |

## Phase-Level Metrics

### Research

| Metric | Target |
|--------|--------|
| Source Diversity | ≥3 source types |
| Verification Rate | ≥80% claims verified |
| Research Coverage | ≥100% objectives addressed |
| Recommendation Actionability | 100% |

### Analysis

| Metric | Target |
|--------|--------|
| Requirements Coverage | 100% with acceptance criteria |
| Risk Coverage | ≥90% with mitigation |
| Stakeholder Agreement | >80% |

### Design

| Metric | Target |
|--------|--------|
| Requirements Traceability | 100% traced to design |
| ADR Coverage | ≥80% significant decisions |
| Design Review Pass Rate | >60% first attempt |

### Implementation

| Metric | Target |
|--------|--------|
| Code Coverage | >80% line, >70% branch |
| Build Success Rate | >95% |
| Bug Density | <5 per 1K LOC |
| Review Turnaround | <24 hours |

### Testing

| Metric | Target |
|--------|--------|
| Test Coverage | >90% requirements |
| Test Pass Rate | >95% |
| Defect Detection Rate | >90% before production |
| Flaky Test Rate | <2% |

### Debugging

| Metric | Target |
|--------|--------|
| Mean Time to Resolve | Per SLA |
| Reproduction Success Rate | >80% |
| Fix Effectiveness | >90% permanent |
| Recurrence Rate | <5% |

### Deployment

| Metric | Target |
|--------|--------|
| Deployment Success Rate | >95% |
| Mean Time to Deploy | <1 hour |
| Rollback Rate | <5% |
| Deployment-Related Incidents | <2% |

### Modernization

| Metric | Target |
|--------|--------|
| Migration Progress | Per plan |
| Functional Equivalence | 100% preserved |
| Performance Improvement | Per goals |

### Enterprise Security

| Metric | Target |
|--------|--------|
| Secrets Coverage | 100% in vault |
| IAM Coverage | 100% apps with SSO |
| DR Test Frequency | 2+ per year |
| Pen Test Frequency | 1+ per year |

### Enterprise Operations

| Metric | Target |
|--------|--------|
| Incident Communication SLA | <15 min initial |
| Post-Incident Review | <48h after resolution |
| Multi-Region RTO | Per SLA |
| Log Coverage | 100% sources aggregated |

### Architecture & Optimization

| Metric | Target |
|--------|--------|
| Cache Hit Ratio | >80% |
| Query Performance | Per SLA |
| Chaos Experiment Frequency | 1+ per month |
| A/B Test Significance | >95% |

## Quality Scorecard

| Dimension | 1 (Poor) | 3 (Acceptable) | 5 (Excellent) |
|-----------|----------|-----------------|----------------|
| Completeness | Missing sections | All present | Thorough and detailed |
| Evidence | No evidence | Some evidence | All claims supported |
| Decisions | Not documented | Without rationale | Full rationale and trade-offs |
| Risks | Not identified | Without mitigation | With probability, impact, mitigation |
| Clarity | Unclear | Understandable | Clear and concise |
| Actionability | No next steps | Some steps | Clear, specific, prioritized |

**Score Interpretation**: 4.5-5.0: Excellent | 3.5-4.4: Good | 2.5-3.4: Acceptable | 1.5-2.4: Poor | 1.0-1.4: Unacceptable

## Measurement Guidelines

- **After each phase**: Score the phase output artifact
- **At project completion**: Assess overall framework effectiveness
- **Monthly**: Track adoption and consistency metrics
- **Quarterly**: Review and improve measurement approach
