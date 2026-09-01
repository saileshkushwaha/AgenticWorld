# Caching Strategy

**Created**: [ISO 8601] | **Phase**: Caching Strategy | **Status**: [draft|review|approved]
**Author**: [Name] | **Version**: [SemVer]

## Executive Summary
[2-3 sentences: caching scope, architecture, expected improvement]

## Workload Analysis

| Data Type | Read/Write Ratio | Volatility | Access Pattern |
|-----------|------------------|------------|----------------|
| [Type] | [ratio] | [H/M/L] | [pattern] |

## Cache Architecture

| Layer | Technology | Use Case |
|-------|------------|----------|
| CDN | [tech] | [use case] |
| Application | [tech] | [use case] |
| Database | [tech] | [use case] |

## Invalidation Strategy

| Strategy | Use Case | TTL |
|----------|----------|-----|
| TTL | [use case] | [time] |
| Write-through | [use case] | [N/A] |
| Event-based | [use case] | [N/A] |

## Performance

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Hit Ratio | [%] | [%] | [%] |
| Latency | [ms] | [ms] | [%] |
| DB Load | [%] | [%] | [%] |

## Decisions & Rationale
| Decision | Options Considered | Rationale |

## Risks & Mitigations
| Risk | Probability | Impact | Mitigation |

## Assumptions
- [Assumption 1]: [basis]

## Open Issues
- [Issue 1]: [blocker]

## Next Steps
1. [Action item 1]

## References
- [Reference 1]: [citation]
