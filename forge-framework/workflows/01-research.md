# Workflow 01: Research

**Duration**: 2-8 hours (quick) / 8-40 hours (deep) | **Outputs**: Research report, comparison matrix, best practices

## Trigger

- New technology evaluation needed
- Best practices identification
- Competitive analysis required
- Industry trend understanding
- Technical feasibility investigation
- Knowledge gap blocking progress

## Research Modes

### Quick Research (2-8 hours)
For time-constrained decisions. Focus on top 3-5 sources, surface-level comparison, single-pass analysis.

### Deep Research (8-40 hours)
For critical decisions. Comprehensive source coverage, multi-pass analysis, expert consultation, iterative investigation.

## Steps

### Step 1: Define Research Objectives
**Actions**: Clarify question, define scope, identify success criteria, determine depth/breadth, set constraints.
**Output**: Research objectives | **Time**: 15-30 min | **Tools**: Note-taking, mind mapping
**Deep Research Additions**:
- Define sub-questions and investigation threads
- Identify known unknowns and knowledge gaps
- Set minimum source count threshold (≥10 for deep)
- Define accuracy targets (e.g., ≥3 independent sources per claim)

**Edge Cases**: Too broad → narrow; too narrow → expand; no criteria → define with stakeholder

### Step 2: Information Gathering
**Actions**: Search academic, industry, community sources. Collect quantitative and qualitative data. Cross-reference findings.
**Research methodology**:
- Use systematic search strategies with documented queries
- Evaluate source credibility and recency
- Cross-reference findings across multiple sources
- Maintain a source bibliography
- **Source Quality Hierarchy**:
  1. Peer-reviewed papers, official documentation
  2. Reputable industry publications, established blogs
  3. Expert opinions, conference talks
  4. Community forums, social media
  5. Vendor materials (bias-aware)

**Output**: Raw research data | **Time**: 1-3 hours (quick) / 4-16 hours (deep)
**Tools**: Google Scholar, GitHub, Stack Overflow, tech blogs, documentation, benchmark databases
**Deep Research Additions**:
- Snowball sampling from reference lists
- Expert identification and consultation
- Historical trend analysis
- Primary research (surveys, interviews) if needed

**Edge Cases**: Too few sources → broaden search; conflicting → document both; outdated → prioritize recent; paywalled → use abstracts

### Step 3: Fact-Checking and Verification
**Actions**: Verify claims across independent sources, identify consensus vs disagreement, assess source bias, validate quantitative data.
**Verification protocol**:
- Each key claim must have ≥2 independent sources
- Quantitative data must be reproducible or from authoritative sources
- Conflicting claims must be investigated and resolved
- Source bias must be documented and accounted for
**Output**: Verified findings with confidence ratings | **Time**: 30-60 min (quick) / 2-4 hours (deep)
**Edge Cases**: Unverifiable claims → mark as unverified; consensus unclear → document range of opinions

### Step 4: Technology Evaluation
**Actions**: Identify candidates, define criteria, score options, document strengths/weaknesses, identify integration needs.
**Evaluation criteria categories**:
- **Technical**: Performance, scalability, reliability, security
- **Ecosystem**: Community size, documentation quality, tooling, libraries
- **Operational**: Deployment complexity, monitoring, maintenance
- **Business**: Licensing, cost, vendor lock-in, support
- **Organizational**: Team skills, learning curve, hiring availability
**Output**: Comparison matrix | **Time**: 1-2 hours | **Tools**: Spreadsheet
**Deep Research Additions**:
- Weighted scoring with sensitivity analysis
- Proof-of-concept for top candidates
- Total cost of ownership (TCO) modeling
- Risk-adjusted scoring

**Edge Cases**: Equal scores → add criteria or PoC; no fit → document trade-offs; new tech → note risk; vendor lock-in → evaluate exit cost

### Step 5: Best Practices Identification
**Actions**: Identify patterns, document approaches, note pitfalls, identify standards, document tuning recommendations.
**Output**: Best practices document | **Time**: 30-60 min | **Tools**: Documentation, case studies, talks
**Edge Cases**: Conflicts → document context; no practices → note as emerging; outdated → verify

### Step 6: Competitive Analysis (if applicable)
**Actions**: Identify competitors, compare features, analyze strengths/weaknesses, identify differentiation.
**Output**: Competitive analysis matrix | **Time**: 30-60 min | **Tools**: Product sites, review sites
**Edge Cases**: No direct competitors → analyze adjacent; proprietary → use docs; rapid change → note date

### Step 7: Iterative Deepening (Deep Research Only)
**Actions**: Review initial findings, identify gaps and follow-up questions, conduct secondary investigation, validate emerging conclusions, refine recommendations.
**Iteration triggers**:
- Contradictory findings that need resolution
- New questions raised by initial findings
- Stakeholder feedback requiring additional investigation
- Emerging patterns needing validation
**Output**: Refined findings | **Time**: 2-8 hours | **Tools**: Follow-up searches, expert consultation

### Step 8: Synthesis and Reporting
**Actions**: Synthesize findings, identify insights, document confidence levels, note uncertainties, create summary, prepare report.
**Accuracy validation**:
- All key claims traceable to sources
- Confidence levels justified by evidence quality
- Limitations and uncertainties explicitly stated
- Recommendations supported by evidence chain
**Output**: Research report | **Time**: 30-60 min (quick) / 2-4 hours (deep)
**Tools**: Report template, diagram tools
**Edge Cases**: Inconclusive → recommend further research; disagreement → document dissent; scope changed → update

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Research objectives clear and scoped |
| QG2 | Multiple credible sources consulted (≥3 quick, ≥10 deep) |
| QG3 | Source credibility assessed and documented |
| QG4 | Claims verified across independent sources |
| QG5 | Evaluation criteria defined and applied |
| QG6 | Findings supported by evidence |
| QG7 | Uncertainties and limitations documented |
| QG8 | Recommendations actionable with confidence levels |
| QG9 | Best practices identified |
| QG10 | Report follows template format |
| QG11 | (Deep) Iterative investigation completed |

## Accuracy Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Source diversity | ≥3 source types | Count of source categories |
| Verification rate | ≥80% claims verified | % claims with ≥2 sources |
| Confidence accuracy | ≥90% | High-confidence claims validated |
| Recommendation support | 100% | Recommendations with evidence chain |
| Completeness | ≥90% objectives addressed | % objectives with findings |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Sufficient info? | Continue / Extend research | Coverage, confidence |
| DP2: Multiple options? | Recommend top / Present all | Stakeholder preference |
| DP3: Need PoC? | Create PoC / Proceed | Risk, uncertainty, cost |
| DP4: Scope adjustment? | Expand / Reduce / Maintain | New information |
| DP5: (Deep) Further iteration? | Iterate / Conclude | Gap severity, time |

## Anti-Patterns

1. **Confirmation bias** — Only seeking confirming information
2. **Single source reliance** — One source for recommendations
3. **Shallow research** — Surface-level without depth
4. **Ignoring recency** — Outdated sources
5. **No confidence levels** — Equal certainty for all findings
6. **Unverified claims** — Assertions without source backing
7. **False precision** — Overconfident conclusions from limited data

## Output

Use: `templates/research-report.md` | Next: `02-analyze.md` | Capability: `capabilities/research.md`
