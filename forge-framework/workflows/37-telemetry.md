# Workflow 37: Telemetry and Observability

**Duration**: 2-8h | **Outputs**: Telemetry system, analytics dashboard, improvement plan

## Trigger

- Framework implementation, quality improvement initiative
- Performance optimization, adoption analysis
- Post-project retrospective with data-driven insights

## Steps

### Step 1: Telemetry System Setup
Configure telemetry collection for framework execution. Define event types, storage, export format.
**Time**: 1-2h.

### Step 2: Event Capture Integration
Add telemetry hooks to relevant workflows. Ensure consistent event emission across all phases.
**Time**: 2-4h.

### Step 3: Data Collection
Execute workflows with telemetry enabled. Collect sufficient data for meaningful analysis (≥10 sessions).
**Time**: 4-16h (ongoing).

### Step 4: Analytics Generation
Analyze telemetry data. Generate quality metrics, workflow adoption rates, performance insights.
**Time**: 1-2h.

### Step 5: Dashboard Creation
Create visualization dashboard for key metrics. Enable real-time monitoring of framework health.
**Time**: 1-2h.

### Step 6: Improvement Planning
Based on insights, identify workflow improvements. Prioritize changes by impact on quality/duration.
**Time**: 1-2h.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Telemetry system configured |
| QG2 | Event hooks integrated |
| QG3 | Data collected (≥10 sessions) |
| QG4 | Analytics generated |
| QG5 | Dashboard created |
| QG6 | Improvement plan documented |

## Anti-Patterns

1. **Telemetry overload** — Collecting too many events
2. **Analysis paralysis** — Data without action
3. **Privacy violations** — Capturing PII
4. **Tool sprawl** — Too many analytics tools

## Edge Cases

- Missing events: Graceful degradation, partial analysis
- Large datasets: Sampling strategies
- Cross-session analysis: Session correlation
- Real-time vs batch: Different use cases

## Output

Use: `templates/telemetry-log.md` | Artifact: `artifacts/telemetry.md`
