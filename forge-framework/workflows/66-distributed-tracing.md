# Workflow 66: Distributed Tracing

**Duration**: 4-16h | **Outputs**: Tracing architecture, instrumentation config, trace analysis, performance insights

## Trigger

- Microservices debugging, latency investigation
- Performance optimization, request flow visualization
- Service dependency mapping, error propagation analysis
- Observability maturity improvement

## Steps

### Step 1: Service Inventory
Map all services and their interactions. Identify communication patterns (sync, async). Document protocols (HTTP, gRPC, messaging). Assess current observability.
**Time**: 1-2h. **Edge Cases**: Undocumented services → discovery; legacy services → agent-based instrumentation; serverless → cloud-native tracing.

### Step 2: Tracing Architecture
Select tracing backend (Jaeger, Zipkin, Datadog APM, Grafana Tempo). Design sampling strategy. Plan trace context propagation. Design storage and retention.
**Time**: 2-4h. **Edge Cases**: High traffic → head-based sampling; sensitive data → span filtering; multi-region → regional collectors.

### Step 3: Instrumentation
Implement auto-instrumentation where possible. Add manual instrumentation for business logic. Propagate trace context across services. Handle async boundaries.
**Time**: 2-6h. **Edge Cases**: Non-standard frameworks → custom instrumentation; message queues → context propagation; batch jobs → trace linking.

### Step 4: Trace Analysis
Create trace analysis queries. Design service dependency maps. Identify latency bottlenecks. Analyze error propagation. Build performance dashboards.
**Time**: 1-2h. **Edge Cases**: Incomplete traces → identify gaps; noisy traces → filter; large traces → focus on outliers.

### Step 5: Alert Design
Define trace-based alerts (latency, error rate). Create SLO-based alerts. Design anomaly detection for trace patterns. Configure notifications.
**Time**: 1-2h. **Edge Cases**: Variable traffic → dynamic thresholds; seasonal patterns → adjust baselines.

### Step 6: Integration and Optimization
Integrate with logging and metrics. Create unified dashboards. Optimize sampling based on value. Document tracing patterns. Train team.
**Time**: 1-2h. **Edge Cases**: Storage costs → adjust retention; performance overhead → optimize instrumentation.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Services mapped |
| QG2 | Architecture designed |
| QG3 | Instrumentation implemented |
| QG4 | Analysis queries created |
| QG5 | Alerts configured |
| QG6 | Integration complete |

## Anti-Patterns

1. **No sampling** — Tracing everything and overwhelming storage
2. **Broken context** — Trace context not propagated across services
3. **Trace without action** — Collecting traces but not analyzing
4. **Ignoring overhead** — Instrumentation impacting performance

## Edge Cases

- Asynchronous operations → Link traces via message metadata
- External API calls → Record as separate spans
- Background jobs → Create root spans for batch operations
- High-cardinality tags → Limit to avoid explosion

## Output

Use: `templates/distributed-tracing-report.md` | Capability: `capabilities/distributed-tracing.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [24-monitoring](workflows/24-monitoring.md) | **Related** | Monitoring |
| [65-log-aggregation](workflows/65-log-aggregation.md) | **Related** | Log aggregation |
| [11-performance](workflows/11-performance.md) | **Related** | Performance optimization |
| [37-telemetry](workflows/37-telemetry.md) | **Related** | Telemetry |
