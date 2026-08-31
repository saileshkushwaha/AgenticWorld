# Workflow 47: Site Reliability Engineering

**Duration**: 4-20h | **Outputs**: SRE strategy, SLO definitions, error budgets, incident management, capacity plan

## Trigger

- SRE practice implementation, reliability improvement
- SLO definition, error budget policy
- Incident management improvement, capacity planning
- Toil reduction, automation improvement

## Steps

### Step 1: Reliability Assessment
**Actions**: Assess current reliability posture, measure availability, identify reliability risks, document incident history, evaluate toil.
**Metrics**: Availability, latency, error rate, throughput, saturation.
**Output**: Reliability assessment | **Time**: 2-4h | **Tools**: Monitoring tools, incident databases
**Edge Cases**: No historical data → establish baseline; distributed systems → use distributed tracing; legacy systems → document constraints; third-party dependencies → assess external risks

### Step 2: SLO Definition
**Actions**: Define service level indicators, set service level objectives, establish error budgets, create SLO monitoring, communicate SLOs.
**SLIs**: Availability, latency, error rate, throughput, freshness.
**Output**: SLO definitions | **Time**: 2-4h | **Tools**: SLO calculators, monitoring tools
**Edge Cases**: Conflicting SLOs → prioritize by business impact; no baseline → start conservative; multiple services → define per-service SLOs; external dependencies → account for third-party SLIs

### Step 3: Error Budget Policy
**Actions**: Define error budget policy, establish budget consumption tracking, define policy actions, create escalation procedures, communicate policy.
**Policy Actions**: Feature freeze, reliability focus, postmortem required.
**Output**: Error budget policy | **Time**: 1-2h | **Tools**: Budget calculators, policy templates
**Edge Cases**: Budget exhaustion → implement policy actions; budget surplus → accelerate features; conflicting priorities → escalate to leadership; seasonal variations → adjust budgets

### Step 4: Incident Management
**Actions**: Define incident response process, establish incident severity levels, create runbooks, implement incident tracking, conduct postmortems.
**Severity**: SEV1 (critical), SEV2 (major), SEV3 (minor), SEV4 (low).
**Output**: Incident management process | **Time**: 2-4h | **Tools**: Incident management tools, runbook templates
**Edge Cases**: No on-call rotation → establish rotation; complex incidents → use incident commander; cross-team incidents → coordinate response; customer-facing incidents → communicate proactively

### Step 5: Capacity Planning
**Actions**: Analyze capacity trends, forecast future needs, plan scaling, optimize costs, document capacity plan.
**Methods**: Trend analysis, load testing, predictive modeling.
**Output**: Capacity plan | **Time**: 2-4h | **Tools**: Capacity planning tools, forecasting models
**Edge Cases**: Unpredictable load → use auto-scaling; budget constraints → optimize existing resources; rapid growth → plan for scale; seasonal patterns → adjust capacity

### Step 6: Toil Reduction
**Actions**: Identify toil, prioritize toil reduction, implement automation, measure toil reduction, document automation.
**Toil Types**: Manual deployments, manual scaling, manual incident response, manual reporting.
**Output**: Toil reduction plan | **Time**: 2-4h | **Tools**: Automation tools, time tracking
**Edge Cases**: Complex toil → use orchestration; fragile automation → implement safeguards; manual approvals → document exceptions; cross-team toil → coordinate automation

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Reliability assessed |
| QG2 | SLOs defined |
| QG3 | Error budget policy established |
| QG4 | Incident management process defined |
| QG5 | Capacity plan created |
| QG6 | Toil reduction plan defined |

## Anti-Patterns

1. **SLO theater** — Defining SLOs without enforcement
2. **Error budget hoarding** — Not using error budget
3. **Toil accumulation** — Not addressing toil
4. **Incident blame culture** — Focusing on blame not learning

## Edge Cases

- No historical data: Establish baseline
- Distributed systems: Use distributed tracing
- Third-party dependencies: Account for external SLIs
- Seasonal patterns: Adjust capacity and budgets

## Output

Use: `templates/sre-strategy.md` | Capability: `capabilities/sre.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [12-incident](workflows/12-incident.md) | **Related** | To manage incidents |
| [24-monitoring](workflows/24-monitoring.md) | **Related** | To monitor reliability |
| [46-devops](workflows/46-devops.md) | **Related** | To implement DevOps practices |
| [11-performance](workflows/11-performance.md) | **Related** | To optimize performance |