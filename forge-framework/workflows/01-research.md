# Workflow 01: Research

**Duration**: 2-8h (quick) / 8-40h (deep) | **Outputs**: Research report, comparison matrix, best practices

## Trigger

- Technology evaluation, best practices identification, competitive analysis
- Industry trend understanding, technical feasibility investigation
- Knowledge gap blocking progress

## Research Modes

**Quick** (2-8h): Top 3-5 sources, surface comparison, single-pass. For reversible decisions.

**Deep** (8-40h): 10+ sources, comprehensive, multi-pass, expert consultation. For critical/irreversible decisions.

**Selection**: Reversible? → Quick. High impact? → Deep. Low confidence? → Deep.

## Steps

### Step 1: Define Research Objectives
Clarify question, define scope, identify success criteria, determine depth, set constraints.
**Time**: 15-30 min. **Deep additions**: Sub-questions, known unknowns, ≥10 sources, accuracy targets.

### Step 2: Information Gathering
Search academic, industry, community sources. Collect quantitative/qualitative data. Cross-reference.
**Source Hierarchy**: 1) Peer-reviewed, 2) Industry pubs, 3) Expert opinions, 4) Community, 5) Vendor (bias-aware)
**Time**: 1-3h (quick) / 4-16h (deep). **Deep additions**: Snowball sampling, expert consultation, historical analysis.
**Edge Cases**: Too few → broaden; conflicting → document both; outdated → prioritize recent; paywalled → use abstracts

### Step 3: Fact-Checking and Verification
Verify claims across independent sources (≥2 per key claim), assess bias, validate quantitative data.
**Time**: 30-60 min (quick) / 2-4h (deep).
**Edge Cases**: Unverifiable → mark as unverified; consensus unclear → document range

### Step 4: Technology Evaluation
Identify candidates, define criteria, score options, document strengths/weaknesses.
**Criteria**: Technical (performance, scalability), Ecosystem (community, docs), Operational (complexity), Business (cost, licensing), Organizational (skills)
**Time**: 1-2h. **Deep additions**: Weighted scoring, PoC, TCO modeling.
**Edge Cases**: Equal scores → add criteria/PoC; no fit → trade-offs; new tech → risk; vendor lock-in → exit cost

### Step 5: Best Practices Identification
Identify patterns, document approaches, note pitfalls, identify standards.
**Time**: 30-60 min. **Edge Cases**: Conflicts → context; no practices → emerging; outdated → verify

### Step 6: Competitive Analysis (if applicable)
Identify competitors, compare features, analyze strengths/weaknesses, identify differentiation.
**Time**: 30-60 min. **Edge Cases**: No direct → adjacent; proprietary → docs; rapid change → note date

### Step 7: Iterative Deepening (Deep Only)
Review findings, identify gaps, conduct secondary investigation, validate conclusions.
**Triggers**: Contradictory findings, new questions, stakeholder feedback, emerging patterns.
**Time**: 2-8h.

### Step 8: Synthesis and Reporting
Synthesize findings, identify insights, document confidence levels, note uncertainties, create summary.
**Accuracy validation**: Claims traceable, confidence justified, limitations stated, recommendations supported.
**Time**: 30-60 min (quick) / 2-4h (deep).
**Edge Cases**: Inconclusive → more research; disagreement → document; scope changed → update

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Objectives clear and scoped |
| QG2 | Multiple sources (≥3 quick, ≥10 deep) |
| QG3 | Source credibility assessed |
| QG4 | Claims verified (≥2 sources per claim) |
| QG5 | Evaluation criteria applied |
| QG6 | Findings supported by evidence |
| QG7 | Uncertainties documented |
| QG8 | Recommendations actionable with confidence |
| QG9 | Best practices identified |
| QG10 | Report follows template |
| QG11 | (Deep) Iterative investigation completed |

## Accuracy Metrics

| Metric | Target |
|--------|--------|
| Source diversity | ≥3 types |
| Verification rate | ≥80% claims verified |
| Confidence accuracy | ≥90% |
| Recommendation support | 100% |
| Completeness | ≥90% objectives addressed |

## Anti-Patterns

1. **Confirmation bias** — Only seeking confirming information
2. **Single source reliance** — One source for recommendations
3. **Shallow research** — Surface-level without depth
4. **Ignoring recency** — Outdated sources
5. **No confidence levels** — Equal certainty for all findings
6. **Unverified claims** — Assertions without sources
7. **False precision** — Overconfident from limited data |

## Output

Use: `templates/research-report.md` | Next: `02-analyze.md` | Capability: `capabilities/research.md`
