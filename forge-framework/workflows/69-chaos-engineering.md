# Workflow 69: Chaos Engineering

**Duration**: 4-20h | **Outputs**: Chaos experiment plan, failure injection results, resilience improvements, runbooks

## Trigger

- Resilience validation, high availability improvement
- Pre-launch reliability testing, post-incident hardening
- SRE practice adoption, chaos maturity improvement
- Compliance requirement, customer SLA validation

## Steps

### Step 1: Steady State Definition
Define system steady state metrics. Identify critical user journeys. Establish baseline performance. Define acceptable degradation. Document hypotheses.
**Time**: 1-2h. **Edge Cases**: Variable traffic → define per time period; multiple user journeys → prioritize; unclear baseline → measure first.

### Step 2: Hypothesis Creation
Formulate failure hypotheses. Define expected impact. Identify blast radius. Design safety measures. Prioritize experiments by risk.
**Time**: 1-2h. **Edge Cases**: Unknown failure modes → start conservative; complex dependencies → model first; safety concerns → additional controls.

### Step 3: Experiment Design
Select failure injection targets. Design experiment scope. Define abort conditions. Plan rollback procedures. Schedule experiments.
**Time**: 2-4h. **Edge Cases**: Production experiments → start with non-prod; third-party dependencies → coordinate; state-affecting experiments → backup first.

### Step 4: Tool Selection
Select chaos engineering tool (Chaos Monkey, Litmus, Gremlin, AWS Fault Injection Simulator). Configure tooling. Set up monitoring. Define safety checks.
**Time**: 1-2h. **Edge Cases**: Kubernetes-native → Litmus or Chaos Mesh; cloud-native → vendor tools; custom needs → script-based.

### Step 5: Experiment Execution
Execute experiments in controlled manner. Monitor system response. Document observations. Validate hypotheses. Abort if needed.
**Time**: 2-8h. **Edge Cases**: Unexpected impact → abort immediately; monitoring gaps → add observability; blast radius exceeded → expand safety measures.

### Step 6: Analysis and Improvement
Analyze experiment results. Identify weaknesses. Create remediation plan. Update runbooks. Share findings. Schedule follow-up experiments.
**Time**: 2-4h. **Edge Cases**: Confirmed weaknesses → prioritize fixes; false positives → refine experiments; systemic issues → architectural review.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Steady state defined |
| QG2 | Hypotheses formulated |
| QG3 | Experiments designed |
| QG4 | Tools configured |
| QG5 | Experiments executed safely |
| QG6 | Improvements documented |

## Anti-Patterns

1. **Chaos without purpose** — Random failures without hypotheses
2. **No safety measures** — Experiments without abort conditions
3. **Production first** — Starting in production without non-prod validation
4. **Ignoring results** — Not acting on findings

## Edge Cases

- Production experiments → Start during low-traffic windows
- Third-party failures → Simulate with service virtualization
- Database failures → Test read replica promotion
- Network partitions → Test split-brain scenarios

## Output

Use: `templates/chaos-engineering-report.md` | Capability: `capabilities/chaos-engineering.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [59-failover-testing](workflows/59-failover-testing.md) | **Related** | Failover testing |
| [58-dr-testing](workflows/58-dr-testing.md) | **Related** | DR testing |
| [47-sre](workflows/47-sre.md) | **Related** | SRE practices |
| [11-performance](workflows/11-performance.md) | **Related** | Performance |
