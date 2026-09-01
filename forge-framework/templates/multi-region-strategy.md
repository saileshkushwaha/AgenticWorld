# Multi-Region Strategy

**Created**: [ISO 8601] | **Phase**: Multi-Region Deployment | **Status**: [draft|review|approved]
**Author**: [Name] | **Version**: [SemVer]

## Executive Summary
[2-3 sentences: regions selected, architecture, failover strategy]

## Requirements

| Requirement | Target |
|-------------|--------|
| Latency | [ms] |
| Availability | [%] |
| Data Residency | [regions] |

## Region Selection

| Region | Provider | Purpose | Latency |
|--------|----------|---------|---------|
| [Region] | [provider] | [primary/secondary] | [ms] |

## Architecture

| Component | Strategy | Replication |
|-----------|----------|-------------|
| Application | [strategy] | [sync/async] |
| Database | [strategy] | [sync/async] |
| Cache | [strategy] | [sync/async] |

## Data Strategy

| Data Type | Partitioning | Residency |
|-----------|--------------|-----------|
| [Type] | [strategy] | [region] |

## Failover Configuration

| Scenario | Detection | Action | RTO |
|----------|-----------|--------|-----|
| Region Down | [detection] | [action] | [time] |

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
