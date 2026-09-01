# Workflow 70: A/B Testing and Experimentation

**Duration**: 4-20h | **Outputs**: Experiment design, implementation plan, results analysis, decision framework

## Trigger

- Feature validation, conversion optimization
- UX improvement, pricing optimization
- Algorithm comparison, performance optimization
- Data-driven decision making, product experimentation

## Steps

### Step 1: Experiment Design
Define hypothesis and success metrics. Select experiment type (A/B, multivariate, bandit). Determine sample size and duration. Define control and treatment groups.
**Time**: 2-4h. **Edge Cases**: Low traffic → extend duration; multiple metrics → prioritize primary; network effects → cluster-based assignment.

### Step 2: Technical Design
Design experiment architecture. Plan feature flag integration. Define user assignment strategy. Design data collection. Plan rollback procedures.
**Time**: 2-4h. **Edge Cases**: Client-side experiments → handle flicker; server-side experiments → consistent assignment; mobile apps → delayed updates.

### Step 3: Implementation
Implement experiment code. Configure feature flags. Set up tracking. Test experiment flow. Verify data collection.
**Time**: 2-6h. **Edge Cases**: Performance impact → optimize; third-party integration → coordinate; complex logic → unit test.

### Step 4: Quality Assurance
Verify experiment activation. Test all variants. Validate tracking accuracy. Check for conflicts. Confirm data pipeline.
**Time**: 1-2h. **Edge Cases**: Variant imbalance → check assignment; tracking gaps → fix before launch; conflicting experiments → resolve.

### Step 5: Launch and Monitoring
Launch experiment to production. Monitor for technical issues. Track guardrail metrics. Monitor sample ratio. Watch for anomalies.
**Time**: 1-2h. **Edge Cases**: Technical issues → pause immediately; negative impact → early stopping; sample ratio mismatch → investigate.

### Step 6: Analysis and Decision
Analyze results for statistical significance. Evaluate secondary metrics. Assess segment differences. Make ship/no-ship decision. Document learnings.
**Time**: 2-4h. **Edge Cases**: Inconclusive results → extend or abandon; conflicting metrics → weigh by priority; unexpected findings → investigate.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Hypothesis defined |
| QG2 | Technical design complete |
| QG3 | Implementation tested |
| QG4 | QA passed |
| QG5 | Monitoring active |
| QG6 | Results analyzed |

## Anti-Patterns

1. **Peeking** — Checking results too early and stopping prematurely
2. **Multiple testing** — Testing many hypotheses without correction
3. **Ignoring network effects** — Not accounting for user interactions
4. **No control** — Comparing to historical data instead of concurrent control

## Edge Cases

- Low traffic → Bayesian methods or extended duration
- Multiple experiments → Orthogonal assignment
- Long-term effects → Extended monitoring after launch
- Ethical considerations → Review board approval

## Output

Use: `templates/ab-testing-report.md` | Capability: `capabilities/ab-testing.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [51-ux-design](workflows/51-ux-design.md) | **Related** | UX design |
| [11-performance](workflows/11-performance.md) | **Related** | Performance |
| [02-analyze](workflows/02-analyze.md) | **Related** | Analysis |
| [32-ai-augmented](workflows/32-ai-augmented.md) | **Related** | AI-augmented |
