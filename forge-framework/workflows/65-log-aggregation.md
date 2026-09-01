# Workflow 65: Log Aggregation and Analysis

**Duration**: 4-16h | **Outputs**: Log aggregation architecture, parsing rules, alert configuration, analysis queries

## Trigger

- Log management initiative, troubleshooting improvement
- Compliance requirement (audit logs), security monitoring
- Centralized logging implementation, SIEM integration
- Log cost optimization, log retention policy

## Steps

### Step 1: Log Source Inventory
Identify all log sources (apps, infra, network, security). Document log formats and volumes. Assess log quality. Identify gaps in logging.
**Time**: 1-2h. **Edge Cases**: Undocumented sources → discovery scan; inconsistent formats → normalization plan; high-volume sources → sampling strategy.

### Step 2: Architecture Design
Select log aggregation platform (ELK, Splunk, Datadog, Grafana Loki). Design ingestion pipeline. Plan storage tiers (hot, warm, cold). Design retention policies.
**Time**: 2-4h. **Edge Cases**: Budget constraints → open-source options; compliance → immutable storage; multi-region → regional aggregation.

### Step 3: Parsing and Normalization
Design log parsing rules. Create field mappings. Implement log enrichment. Handle multi-line logs. Standardize timestamps.
**Time**: 2-4h. **Edge Cases**: Unstructured logs → regex extraction; nested JSON → flattening; encoding issues → conversion.

### Step 4: Alert Design
Define log-based alerts. Create correlation rules. Design anomaly detection. Configure notification channels. Document runbooks.
**Time**: 2-4h. **Edge Cases**: Alert fatigue → tune thresholds; false positives → refine rules; complex correlations → multi-condition alerts.

### Step 5: Analysis Queries
Create common analysis queries. Design dashboards. Implement log pattern analysis. Set up trend reporting. Enable ad-hoc search.
**Time**: 1-2h. **Edge Cases**: Slow queries → optimize indexing; large time ranges → pre-aggregation; complex joins → denormalization.

### Step 6: Compliance and Retention
Define retention policies per log type. Implement automated archival. Ensure tamper-proof storage. Configure access controls. Enable audit trails.
**Time**: 1-2h. **Edge Cases**: Legal hold → override retention; cross-border → data residency; sensitive data → redaction.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Log sources inventoried |
| QG2 | Architecture designed |
| QG3 | Parsing rules implemented |
| QG4 | Alerts configured |
| QG5 | Analysis queries created |
| QG6 | Retention policies defined |

## Anti-Patterns

1. **Log everything** — Collecting without purpose
2. **No retention policy** — Indefinite storage or premature deletion
3. **Log in isolation** — Not correlating across sources
4. **Ignoring cost** — Uncontrolled log volume growth

## Edge Cases

- High cardinality fields → Sampling or exclusion
- Multi-line stack traces → Proper parsing configuration
- Log bursts → Buffer and rate limiting
- Encrypted logs → Decryption pipeline

## Output

Use: `templates/log-aggregation-report.md` | Capability: `capabilities/log-aggregation.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [24-monitoring](workflows/24-monitoring.md) | **Related** | Monitoring setup |
| [66-distributed-tracing](workflows/66-distributed-tracing.md) | **Related** | Distributed tracing |
| [37-telemetry](workflows/37-telemetry.md) | **Related** | Telemetry |
| [10-security](workflows/10-security.md) | **Related** | Security logging |
