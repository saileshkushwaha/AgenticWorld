# Workflow 01: Research

## Phase Overview

The Research phase gathers information, evaluates technologies, identifies best practices, and synthesizes findings to inform subsequent SDLC phases.

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

### Step 4: Best Practices Identification

**Actions**:
- Identify patterns across successful implementations
- Document recommended approaches
- Note common pitfalls and anti-patterns
- Identify industry standards and conventions
- Document configuration and tuning recommendations
- Note scalability and performance patterns

**Output**: Best practices document

### Step 5: Competitive Analysis (if applicable)

**Actions**:
- Identify competitors or alternative solutions
- Compare features, approaches, and trade-offs
- Analyze strengths and weaknesses
- Identify differentiation opportunities
- Document market positioning insights

**Output**: Competitive analysis matrix

### Step 6: Synthesis and Reporting

**Actions**:
- Synthesize findings into coherent narrative
- Identify key insights and recommendations
- Document confidence levels for each finding
- Note areas of uncertainty or disagreement
- Create executive summary
- Prepare detailed findings report

**Output**: Research report (using research-report template)

## Quality Gates

| Gate | Criteria | Check |
|------|----------|-------|
| QG1 | Research objectives are clear and scoped | |
| QG2 | Multiple credible sources consulted | |
| QG3 | Source credibility assessed | |
| QG4 | Evaluation criteria defined and applied | |
| QG5 | Findings supported by evidence | |
| QG6 | Uncertainties and limitations documented | |
| QG7 | Recommendations are actionable | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Sufficient information found? | Continue to analysis / Extend research | Coverage of objectives, confidence in findings |
| DP2: Multiple viable options? | Recommend top option / Present all options | Stakeholder preference, decision complexity |
| DP3: Need proof-of-concept? | Create PoC / Proceed with analysis | Risk level, uncertainty, cost of being wrong |

## Output Artifact

Use template: `templates/research-report.md`

## References

- Related workflow: `02-analyze.md` (next phase)
- Related capability: `capabilities/research.md`
