# Research Mode Selection - Forge Engineering Lifecycle Framework

## Overview

This document provides criteria for selecting between Quick Research and Deep Research modes based on decision context.

## Mode Comparison

| Factor | Quick Research | Deep Research |
|--------|---------------|---------------|
| **Duration** | 2-8 hours | 8-40 hours |
| **Sources** | 3-5 | 10+ |
| **Depth** | Surface | Comprehensive |
| **Iterations** | Single-pass | Multi-pass |
| **Confidence** | Medium | High |
| **Cost** | Low | High |
| **Risk if wrong** | Lower | Higher |

## Selection Decision Matrix

### Use Quick Research When:
- [ ] Decision is reversible or low-impact
- [ ] Time constraints are tight (< 1 week)
- [ ] Domain is well-understood
- [ ] Multiple acceptable solutions exist
- [ ] Stakeholder accepts medium confidence
- [ ] Budget is limited
- [ ] Technology is mature and stable
- [ ] Prior research exists that can be leveraged

### Use Deep Research When:
- [ ] Decision is irreversible or high-impact
- [ ] Significant investment is at stake
- [ ] Domain is novel or complex
- [ ] Only one solution will be chosen
- [ ] Stakeholder requires high confidence
- [ ] Budget allows for thorough investigation
- [ ] Technology is emerging or rapidly evolving
- [ ] Prior research is insufficient or outdated

## Decision Tree

```
Is the decision reversible?
├── YES → Is time constrained?
│   ├── YES → Quick Research
│   └── NO → Is budget limited?
│       ├── YES → Quick Research
│       └── NO → Quick Research (with option to deepen)
└── NO → Is the impact significant?
    ├── YES → Deep Research
    └── NO → Is confidence requirement high?
        ├── YES → Deep Research
        └── NO → Quick Research
```

## Risk Assessment for Mode Selection

| Risk Level | Recommended Mode | Rationale |
|------------|------------------|-----------|
| Low | Quick | Acceptable to move forward with medium confidence |
| Medium | Quick (with deepening option) | Start quick, deepen if needed |
| High | Deep | Cannot afford to be wrong |
| Critical | Deep + PoC | Must validate with proof of concept |

## Escalation Triggers (Quick → Deep)

Escalate from Quick to Deep research when:
1. Initial findings are contradictory or inconclusive
2. Stakeholder confidence in results is low
3. New questions emerge that require deeper investigation
4. Decision impact is higher than initially assessed
5. Time becomes available for deeper investigation
6. Initial recommendation is challenged by experts

## Research Output Validation

### Validation Checklist
- [ ] All research objectives addressed
- [ ] Minimum source count met (≥3 quick, ≥10 deep)
- [ ] Key claims verified (≥2 independent sources)
- [ ] Confidence levels justified by evidence
- [ ] Limitations and uncertainties documented
- [ ] Recommendations supported by evidence chain
- [ ] Accuracy metrics met
- [ ] (Deep) Iterative investigation completed
- [ ] Stakeholder review obtained
- [ ] Peer review completed (deep only)

### Validation Failure Recovery
1. Identify gaps and unmet criteria
2. Assess severity (critical vs nice-to-have)
3. Plan targeted additional research
4. Execute additional investigation
5. Re-validate output
6. Document what was added and why

## Stakeholder Review Process

### Review Steps
1. **Prepare summary**: Executive summary with key findings and recommendations
2. **Present evidence**: Show source quality and verification status
3. **Highlight uncertainties**: Be transparent about limitations
4. **Gather feedback**: Collect questions, concerns, and additional context
5. **Iterate if needed**: Address feedback with additional research
6. **Obtain sign-off**: Get explicit approval to proceed

### Review Template
```
Research Review

Topic: [research topic]
Mode: [quick | deep]
Reviewer: [name]
Date: [date]

Findings Acceptable? [YES/NO]
Evidence Sufficient? [YES/NO]
Confidence Adequate? [YES/NO]
Recommendations Actionable? [YES/NO]

Comments:
[feedback]

Approved to proceed? [YES/NO]
```
