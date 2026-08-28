# Workflow 01: Research

## Phase Overview

The Research phase gathers information, evaluates technologies, identifies best practices, and synthesizes findings to inform subsequent SDLC phases.

**Estimated Duration**: 2-8 hours (depending on scope)
**Typical Outputs**: Research report, technology comparison matrix, best practices document

## Trigger Conditions

This workflow is triggered when:
- A new technology needs to be evaluated
- Best practices need to be identified for a domain
- Competitive analysis is required
- Industry trends need to be understood
- Technical feasibility needs preliminary investigation
- A knowledge gap exists that blocks progress

## Steps

### Step 1: Define Research Objectives

**Actions**:
- Clarify the research question or problem statement
- Define scope (what is in scope, what is out of scope)
- Identify success criteria for the research
- Determine required depth and breadth
- Set timeline and resource constraints

**Output**: Research objectives document

**Time Estimate**: 15-30 minutes

**Tools**: Note-taking app, mind mapping tool (Miro, XMind)

**Example**:
```
Research Question: "What is the best message queue for a high-throughput
event processing system handling 100K events/second?"

Scope:
- In scope: Kafka, RabbitMQ, AWS SQS, Google Pub/Sub, Redis Streams
- Out of scope: Custom solutions, non-message-queue approaches

Success Criteria:
- Compare on: throughput, latency, durability, cost, operational complexity
- Provide recommendation with evidence
- Include migration considerations if switching from existing system
```

**Edge Cases**:
- Research question is too broad → Narrow by adding constraints
- Research question is too narrow → Expand to include alternatives
- No clear success criteria → Define measurable criteria with stakeholder

### Step 2: Information Gathering

**Actions**:
- Search academic sources (papers, journals, conferences)
- Search industry sources (blogs, documentation, case studies)
- Search community sources (forums, Stack Overflow, GitHub)
- Identify subject matter experts and their work
- Collect quantitative data (benchmarks, statistics)
- Collect qualitative data (opinions, experiences)

**Research methodology**:
- Use systematic search strategies
- Document search queries and sources
- Evaluate source credibility and recency
- Cross-reference findings across multiple sources
- Maintain a source bibliography

**Output**: Raw research data collection

**Time Estimate**: 1-3 hours

**Tools**: Google Scholar, GitHub, Stack Overflow, tech blogs, documentation sites, benchmark databases

**Example Sources**:
```
Academic: "Kafka: a Distributed Messaging System for Log Processing" (Neild et al.)
Industry: Confluent blog, AWS documentation, Google Cloud blog
Community: Stack Overflow tags, GitHub issues, Reddit r/programming
Benchmarks: CloudAMQP benchmarks, LinkedIn engineering blog
```

**Edge Cases**:
- Too few sources → Broaden search terms, try different source types
- Conflicting information → Document both sides, assess source credibility
- Outdated information → Prioritize recent sources, note deprecation
- Paywalled content → Use abstracts, preprints, or alternative sources

### Step 3: Technology Evaluation

**Actions**:
- Identify candidate technologies/solutions
- Define evaluation criteria (performance, maturity, community, licensing, etc.)
- Score each candidate against criteria
- Conduct proof-of-concept if needed
- Document strengths and weaknesses of each option
- Identify integration considerations

**Evaluation criteria categories**:
- **Technical**: Performance, scalability, reliability, security
- **Ecosystem**: Community size, documentation quality, tooling, libraries
- **Operational**: Deployment complexity, monitoring, maintenance
- **Business**: Licensing, cost, vendor lock-in, support
- **Organizational**: Team skills, learning curve, hiring availability

**Output**: Technology comparison matrix

**Time Estimate**: 1-2 hours

**Tools**: Spreadsheet (Google Sheets, Excel), comparison matrix template

**Example Matrix**:
```
| Criteria (Weight)    | Kafka | RabbitMQ | AWS SQS |
|----------------------|-------|----------|---------|
| Throughput (30%)     | 5     | 3        | 4       |
| Latency (20%)        | 4     | 5        | 3       |
| Durability (20%)     | 5     | 4        | 4       |
| Operational (15%)    | 3     | 4        | 5       |
| Cost (15%)           | 3     | 4        | 4       |
| Weighted Total       | 4.1   | 3.95     | 3.95    |
```

**Edge Cases**:
- Two options score equally → Add more criteria or conduct PoC
- No option meets all requirements → Document trade-offs, consider hybrid
- New/unproven technology → Note risk, suggest PoC
- Vendor lock-in concerns → Evaluate exit cost and alternatives

### Step 4: Best Practices Identification

**Actions**:
- Identify patterns across successful implementations
- Document recommended approaches
- Note common pitfalls and anti-patterns
- Identify industry standards and conventions
- Document configuration and tuning recommendations
- Note scalability and performance patterns

**Output**: Best practices document

**Time Estimate**: 30-60 minutes

**Tools**: Documentation sites, case studies, conference talks

**Example Best Practices**:
```
1. Use idempotent consumers to handle duplicate messages
2. Implement dead-letter queues for failed message processing
3. Monitor consumer lag as a key health metric
4. Partition keys should distribute evenly across partitions
5. Set retention policies based on business requirements, not defaults
```

**Edge Cases**:
- Best practices conflict → Document context where each applies
- No established best practices → Note as emerging area, suggest experimentation
- Best practices outdated → Verify against current documentation

### Step 5: Competitive Analysis (if applicable)

**Actions**:
- Identify competitors or alternative solutions
- Compare features, approaches, and trade-offs
- Analyze strengths and weaknesses
- Identify differentiation opportunities
- Document market positioning insights

**Output**: Competitive analysis matrix

**Time Estimate**: 30-60 minutes

**Tools**: Product websites, review sites (G2, Capterra), analyst reports

**Edge Cases**:
- No direct competitors → Analyze adjacent solutions
- Proprietary solutions → Use available documentation and reviews
- Rapidly changing market → Note date of analysis, suggest re-evaluation

### Step 6: Synthesis and Reporting

**Actions**:
- Synthesize findings into coherent narrative
- Identify key insights and recommendations
- Document confidence levels for each finding
- Note areas of uncertainty or disagreement
- Create executive summary
- Prepare detailed findings report

**Output**: Research report (using research-report template)

**Time Estimate**: 30-60 minutes

**Tools**: Research report template, diagram tools (draw.io, Lucidchart)

**Edge Cases**:
- Findings inconclusive → Recommend further research or PoC
- Stakeholders disagree with recommendation → Document dissent and rationale
- Scope changed during research → Update objectives, note impact

## Quality Gates

| Gate | Criteria | Check |
|------|----------|-------|
| QG1 | Research objectives are clear and scoped | |
| QG2 | Multiple credible sources consulted (≥3) | |
| QG3 | Source credibility assessed | |
| QG4 | Evaluation criteria defined and applied | |
| QG5 | Findings supported by evidence | |
| QG6 | Uncertainties and limitations documented | |
| QG7 | Recommendations are actionable | |
| QG8 | Best practices identified | |
| QG9 | Report follows template format | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Sufficient information found? | Continue to analysis / Extend research | Coverage of objectives, confidence in findings |
| DP2: Multiple viable options? | Recommend top option / Present all options | Stakeholder preference, decision complexity |
| DP3: Need proof-of-concept? | Create PoC / Proceed with analysis | Risk level, uncertainty, cost of being wrong |
| DP4: Scope needs adjustment? | Expand scope / Reduce scope / Maintain | New information, stakeholder feedback |

## Common Anti-Patterns

1. **Confirmation bias**: Only seeking information that confirms pre-existing beliefs
2. **Single source reliance**: Making recommendations based on one source
3. **Shallow research**: Surface-level research without depth
4. **Ignoring recency**: Using outdated sources without verification
5. **No confidence levels**: Presenting all findings with equal certainty

## Output Artifact

Use template: `templates/research-report.md`

## References

- Related workflow: `02-analyze.md` (next phase)
- Related capability: `capabilities/research.md`
- Anti-patterns: `ANTI-PATTERNS.md` (Research section)
