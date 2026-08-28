# Research Report

**Created**: [ISO 8601 timestamp]
**Phase**: Research
**Status**: [draft | review | approved]
**Author**: [Agent/Team name]
**Version**: [Semantic version]

---

## Executive Summary

*Guidance: 2-3 sentences covering what was researched, key finding, and primary recommendation. Write this last.*

[2-3 sentence overview of the research objectives, key findings, and primary recommendation]

*Example: "This report evaluates message queue technologies for a high-throughput event processing system. After comparing Kafka, RabbitMQ, AWS SQS, Google Pub/Sub, and Redis Streams across 12 criteria, we recommend Apache Kafka for its superior throughput, durability, and ecosystem maturity. The recommendation is made with high confidence based on extensive community adoption and proven production use cases."*

## Research Objectives

*Guidance: List 3-5 specific, measurable objectives. Each should be answerable with the research.*

- Objective 1: [description]
- Objective 2: [description]
- Objective 3: [description]

*Example:*
- *Objective 1: Compare throughput and latency characteristics of candidate message queues*
- *Objective 2: Evaluate operational complexity and monitoring capabilities*
- *Objective 3: Assess total cost of ownership for each option at 100K events/second*

## Scope

### In Scope
*Guidance: List specific technologies, approaches, or areas being evaluated.*
- [Item 1]
- [Item 2]

### Out of Scope
*Guidance: Explicitly state what is NOT being evaluated to set expectations.*
- [Item 1]
- [Item 2]

## Methodology

*Guidance: Describe how the research was conducted so others can assess its rigor.*

- **Search strategy**: [description]
- **Sources consulted**: [types and count]
- **Evaluation criteria**: [criteria used]
- **Time period**: [research duration]

*Example:*
- *Search strategy: Systematic search of academic papers, vendor documentation, and community benchmarks*
- *Sources consulted: 3 academic papers, 12 vendor docs, 8 blog posts, 5 GitHub repositories*
- *Evaluation criteria: Throughput, latency, durability, operational complexity, cost, ecosystem*
- *Time period: Research conducted over 3 days*

## Findings

### Finding 1: [Title]

*Guidance: Each finding should have a clear description, evidence from sources, confidence level, and implications.*

**Description**: [Detailed description]

**Evidence**:
- [Source 1]: [finding]
- [Source 2]: [finding]

**Confidence**: [high | medium | low]
*Guidance: High = multiple credible sources agree; Medium = some evidence but limited; Low = single source or conflicting evidence.*

**Implications**: [What this means for the project]

*Example:*
**Description**: Kafka achieves significantly higher throughput than alternatives, handling 1M+ messages/second on modest hardware.

**Evidence**:
- *Confluent benchmark: 1.2M msgs/sec on 3-node cluster*
- *LinkedIn engineering blog: 2M msgs/sec in production*
- *Academic paper (Kreps et al.): Linear scalability with partition count*

**Confidence**: High

**Implications**: Kafka can handle our 100K msgs/sec requirement with significant headroom for growth.

### Finding 2: [Title]

**Description**: [Detailed description]

**Evidence**:
- [Source 1]: [finding]
- [Source 2]: [finding]

**Confidence**: [high | medium | low]

**Implications**: [What this means for the project]

## Technology Comparison

*Guidance: Use weighted scoring for objective comparison. Weights should reflect project priorities.*

| Criteria (Weight) | Option A | Option B | Option C |
|-------------------|----------|----------|----------|
| [Criterion 1] (%) | [score 1-5] | [score 1-5] | [score 1-5] |
| [Criterion 2] (%) | [score 1-5] | [score 1-5] | [score 1-5] |
| [Criterion 3] (%) | [score 1-5] | [score 1-5] | [score 1-5] |
| **Weighted Total** | [total] | [total] | [total] |

*Example:*
| Criteria (Weight) | Kafka | RabbitMQ | AWS SQS |
|-------------------|-------|----------|---------|
| Throughput (30%) | 5 | 3 | 4 |
| Latency (20%) | 4 | 5 | 3 |
| Durability (20%) | 5 | 4 | 4 |
| Operational (15%) | 3 | 4 | 5 |
| Cost (15%) | 3 | 4 | 4 |
| **Weighted Total** | 4.1 | 3.95 | 3.95 |

### Option A: [Name]
*Guidance: Provide enough detail for the reader to understand the option's fit.*
- **Strengths**: [list]
- **Weaknesses**: [list]
- **Best for**: [use case]

### Option B: [Name]
- **Strengths**: [list]
- **Weaknesses**: [list]
- **Best for**: [use case]

### Option C: [Name]
- **Strengths**: [list]
- **Weaknesses**: [list]
- **Best for**: [use case]

## Best Practices

*Guidance: List actionable best practices identified during research. Include rationale.*

1. **[Practice 1]**: [description and rationale]
2. **[Practice 2]**: [description and rationale]
3. **[Practice 3]**: [description and rationale]

*Example:*
1. *Use idempotent consumers: Message queues may deliver duplicates; design consumers to handle this safely.*
2. *Implement dead-letter queues: Route failed messages to a DLQ for investigation rather than blocking the main queue.*
3. *Monitor consumer lag: Track the difference between latest produced and consumed message as a key health metric.*

## Risks and Limitations

*Guidance: Be honest about what the research could not determine or where uncertainty exists.*

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk 1] | [high/med/low] | [high/med/low] | [strategy] |
| [Risk 2] | [high/med/low] | [high/med/low] | [strategy] |

*Example:*
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Team lacks Kafka experience | High | Medium | Training budget, hire consultant for initial setup |
| Kafka operational overhead | Medium | Medium | Use managed service (Confluent Cloud) |

## Recommendations

*Guidance: Provide clear, actionable recommendations. Primary recommendation should be specific.*

1. **[Primary Recommendation]**: [description and rationale]
2. **[Secondary Recommendation]**: [description and rationale]
3. **[Future Consideration]**: [description]

*Example:*
1. **Primary: Adopt Apache Kafka** - Highest throughput, proven at scale, strong ecosystem. Use Confluent Cloud to reduce operational burden.
2. **Secondary: Start with 3-node cluster** - Sufficient for current needs with room to scale. Add nodes as throughput grows.
3. **Future: Evaluate Kafka Streams** - For stream processing needs that may emerge as the platform matures.

## Decisions & Rationale

| Decision | Options Considered | Rationale |
|----------|-------------------|-----------|
| [Decision 1] | [options] | [why this choice] |
| [Decision 2] | [options] | [why this choice] |

## Open Questions

*Guidance: List questions that could not be answered during research and need further investigation.*

- [Question 1]: [what needs to be resolved]
- [Question 2]: [what needs to be resolved]

## Next Steps

*Guidance: Specific, actionable items with clear owners and timelines.*

1. [Action item 1]
2. [Action item 2]
3. [Action item 3]

## References

*Guidance: Use a consistent citation format. Include enough information for the reader to find the source.*

- [Source 1]: [title, author, date, URL]
- [Source 2]: [title, author, date, URL]
- [Source 3]: [title, author, date, URL]

## Appendix

*Guidance: Include supplementary material that supports but is not essential to the main report.*

[Any supplementary material]
