# Workflow 59: Failover Testing

**Duration**: 2-12h | **Outputs**: Failover test plan, test results, performance baseline, improvement actions

## Trigger

- High availability validation, load balancer testing
- Multi-region deployment verification, infrastructure change
- Compliance requirement, SLO/SLA validation
- Post-incident verification, DR plan update

## Steps

### Step 1: Architecture Review
Document current failover architecture. Identify failover triggers. Map dependencies. Review SLAs/SLOs. Identify single points of failure.
**Time**: 1-2h. **Edge Cases**: Undocumented architecture → discovery first; complex dependencies → map carefully; legacy components → document limitations.

### Step 2: Test Strategy
Define test types (automatic failover, manual failover, partial failure). Select components to test. Define success metrics (failover time, data loss, error rate). Plan test schedule.
**Time**: 1-2h. **Edge Cases**: Production systems → schedule maintenance window; critical systems → start with non-prod; limited resources → prioritize critical paths.

### Step 3: Baseline Measurement
Measure current performance metrics. Document normal behavior. Establish comparison points. Verify monitoring is active.
**Time**: 30-60 min. **Edge Cases**: No baseline → establish first; variable load → measure at different times; missing metrics → add instrumentation.

### Step 4: Test Execution
Execute failover scenarios. Measure failover time. Verify data integrity. Check error rates. Validate monitoring alerts. Test rollback.
**Time**: 2-6h. **Edge Cases**: Failover fails → activate manual procedures; data inconsistency → reconciliation process; monitoring gaps → add alerts.

### Step 5: Performance Validation
Compare post-failover performance to baseline. Measure recovery time. Validate SLO compliance. Check dependent services. Verify user experience.
**Time**: 1-2h. **Edge Cases**: Degraded performance → identify bottleneck; SLO breach → root cause analysis; partial recovery → document limitations.

### Step 6: Documentation and Improvement
Document test results. Identify improvements. Update runbooks. Share findings. Schedule regular tests.
**Time**: 1-2h. **Edge Cases**: Repeated failures → architectural review; documentation gaps → update runbooks; team changes → retrain.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Architecture documented |
| QG2 | Test strategy defined |
| QG3 | Baseline established |
| QG4 | Tests executed |
| QG5 | Performance validated |
| QG6 | Improvements documented |

## Anti-Patterns

1. **Assuming failover works** — Never testing automatic failover
2. **Testing in isolation** — Not testing dependent services
3. **Ignoring rollback** — Not testing failback procedures
4. **One-time testing** — Not establishing regular test cadence

## Edge Cases

- Database failover → Test replication lag
- DNS failover → Test TTL and propagation
- Stateful services → Test session persistence
- External dependencies → Test timeout handling

## Output

Use: `templates/failover-test-report.md` | Capability: `capabilities/failover-testing.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [58-dr-testing](workflows/58-dr-testing.md) | **Related** | DR testing |
| [47-sre](workflows/47-sre.md) | **Related** | SRE practices |
| [24-monitoring](workflows/24-monitoring.md) | **Related** | Monitoring setup |
| [11-performance](workflows/11-performance.md) | **Related** | Performance testing |
