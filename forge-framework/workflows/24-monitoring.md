# Workflow 24: Infrastructure & Application Monitoring

**Duration**: 4-16h | **Outputs**: Monitoring strategy, alerting config, dashboard design

## Trigger

- Infrastructure monitoring setup, application performance monitoring
- SLO/SLI definition, alerting review
- Incident response improvement, capacity planning
- Cloud resource monitoring, log aggregation
## Steps

### Step 1: Requirements Definition
Define what to monitor (infra, app, business). Identify SLIs, SLOs, SLAs.
**Time**: 1-2h.

### Step 2: Tool Selection
Evaluate monitoring tools (Datadog, Grafana, Prometheus, New Relic). Select stack.
**Time**: 1-2h.

### Step 3: Instrumentation Planning
Plan metrics, logs, traces. Define tagging strategy. Plan dashboards.
**Time**: 2-4h.

### Step 4: Alert Design
Define alert thresholds. Plan notification channels. Document runbooks.
**Time**: 2-4h.

### Step 5: Implementation
Deploy agents. Configure dashboards. Set up alerts.
**Time**: 2-8h.

### Step 6: Validation and Reporting
Verify monitoring works. Document setup. Train team.
**Time**: 1-2h.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Requirements defined |
| QG2 | Tools selected |
| QG3 | Instrumentation planned |
| QG4 | Alerts designed |
| QG5 | Implementation complete |
| QG6 | Validation passed |

## Anti-Patterns

1. **Tool sprawl** — Too many monitoring tools
2. **Alert fatigue** — Too many alerts, low signal
3. **Dashboard chaos** — Unused or redundant dashboards
4. **Metric overload** — Collecting everything

## Edge Cases

- High cardinality: Sampling strategies
- Clock skew: NTP synchronization
- Metric gaps: Interpolation handling
- Service mesh: Distributed tracing complexity

## Output

Use: `templates/monitoring-report.md` | Capability: `capabilities/monitoring.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [11-performance](workflows/11-performance.md) | **Related** | To monitor performance |
| [12-incident](workflows/12-incident.md) | **Related** | To detect incidents |
| [37-telemetry](workflows/37-telemetry.md) | **Related** | To collect telemetry data |
| [23-finops](workflows/23-finops.md) | **Related** | To monitor cloud costs |
## Output

Use: `templates/monitoring-report.md` | Capability: `capabilities/monitoring.md`
