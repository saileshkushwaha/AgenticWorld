# Telemetry and Observability Guide - Forge Engineering Lifecycle Framework

## Overview
This guide provides comprehensive instructions for implementing telemetry, observability, and monitoring within systems built using the Forge framework. It covers the three pillars of observability (metrics, logs, and traces), implementation strategies, tooling, and best practices for building observable systems.

## Three Pillars of Observability

### 1. Metrics
**Purpose**: Quantitative measurements collected at regular intervals
**Characteristics**:
- Aggregated and summarized
- Low storage overhead
- Fast querying and alerting
- Good for system health monitoring

**Types of Metrics**:
| Type | Description | Examples |
|------|-------------|----------|
| **Counter** | Monotonically increasing value | Request count, error count |
| **Gauge** | Value that can go up or down | CPU usage, memory usage |
| **Histogram** | Distribution of values | Request latencies, response sizes |
| **Summary** | Calculated quantiles over time | 95th percentile latency |

### 2. Logs
**Purpose**: Discrete events with rich context, stored over time
**Characteristics**:
- Structured or unstructured text
- Rich contextual information
- Useful for debugging and forensics
- Higher storage overhead

### 3. Traces
**Purpose**: Request path through distributed systems
**Characteristics**:
- End-to-end request tracking
- Distributed context propagation
- Latency analysis across services
- Critical for microservices debugging

### Correlation
The three pillars work together:
1. **Metrics** identify *what* is happening
2. **Traces** show *why* it's happening
3. **Logs** provide *context* for debugging

## Telemetry Implementation

### Instrumentation Strategy
1. **Standard Libraries**: Use OpenTelemetry or framework-native instrumentation
2. **Custom Metrics**: Add business and operational metrics where needed
3. **Context Propagation**: Ensure trace context propagation across services
4. **Semantic Conventions**: Follow OpenTelemetry semantic conventions

### Instrumentation Code Example (Node.js)
```javascript
const opentelemetry = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new opentelemetry.tracing.ConsoleSpanExporter(),
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start();

// Custom metric
const meter = opentelemetry.metrics.getMeter('forge-app');
const requestCounter = meter.createCounter('http_requests_total', {
  description: 'Total HTTP requests'
});

app.use((req, res, next) => {
  requestCounter.add(1, {
    method: req.method,
    route: req.path,
    status_code: res.statusCode
  });
  next();
});
```

### Log Structure (JSON)
```json
{
  "timestamp": "2026-08-25T14:48:40.407Z",
  "level": "info",
  "service": "order-service",
  "trace_id": "4bf92f3577b34da6a3ce929d019de361",
  "span_id": "00f069e711968d2e",
  "user_id": "user-123",
  "event": "order.created",
  "data": {
    "order_id": "ord_abc123",
    "amount": 99.99,
    "items_count": 3
  },
  "metadata": {
    "environment": "production",
    "version": "1.2.3",
    "hostname": "app-server-01"
  }
}
```

## Observability Stack Components

### Metrics Collection (Prometheus)
```yaml
# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'app-metrics'
    static_configs:
      - targets: ['app-server:9090']
    metrics_path: '/metrics'
    scrape_interval: 10s

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

rule_files:
  - "alert-rules/*.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets: ['alertmanager:9093']
```

### Log Aggregation (Loki)
```yaml
# loki-config.yaml
auth_enabled: false

server:
  http_listen_port: 3100

ingester:
  lifecycler:
    address: localhost
    ring:
      kvstore:
        store: inmemory
    final_sleep: 0s
  chunk_idle_period: 5m
  max_chunk_age: 216h

schema_config:
  configs:
    - from: 2020-10-24
      store: boltdb-shipper
      object_store: filesystem
      schema: v11
      index:
        prefix: index_
        period: 24h

compactor:
  working_directory: /tmp/loki/compactor
  shared: true
```

### Distributed Tracing (Jaeger)
```yaml
# docker-compose.yml for Jaeger
version: '3.4'
services:
  jaeger:
    image: jaegertracing/all-in-one:latest
    ports:
      - "5775:5775/udp"
      - "6831:6831/udp"
      - "6832:6832/udp"
      - "16686:16686"
      - "14268:14268"
    environment:
      - COLLECTOR_ZIPKIN_HTTP_PORT=9411
      - COLLECTOR_OTLP_ENABLED=true
```

### Visualization (Grafana)
Dashboard templates should include:
1. **Service Overview**: Request rate, error rate, latency
2. **Resource Utilization**: CPU, memory, disk, network
3. **Application Metrics**: Business KPIs, user metrics
4. **Error Analysis**: Error rates by type and service
5. **Trace Analysis**: Top slowest traces, error traces

## Implementation Workflow Integration

### Research Phase (01-research)
- Research observability requirements with teams
- Evaluate monitoring tools (Prometheus, Grafana, etc.)
- Compare APM solutions (DataDog, New Relic, etc.)
- Assess existing tooling compatibility

### Design Phase (03-design)
- Define observability requirements in architecture
- Specify metrics collection points
- Design log structure and content
- Plan distributed tracing instrumentation

### Implementation Phase (04-implement)
- Implement OpenTelemetry instrumentation
- Add metrics for business and operational needs
- Structure logging with context
- Propagate trace context across services

### Testing Phase (05-test)
- Validate observability data collection
- Test alert conditions and thresholds
- Verify dashboard accuracy
- Test tracing across service boundaries

### Deployment Phase (07-deploy)
- Deploy observability stack alongside application
- Configure alerting rules
- Set up dashboards
- Validate production monitoring

### Post-Deployment (37-telemetry)
- Monitor system health and performance
- Tune alert thresholds based on baseline
- Optimize metric collection for performance
- Implement advanced observability features

## SLIs, SLOs, and Error Budgets

### Service Level Indicators (SLIs)
| SLI Category | Key Metrics | Target |
|--------------|-------------|--------|
| **Latency** | p50, p95, p99 response times | <100ms p95 |
| **Availability** | HTTP success rate | 99.9% |
| **Throughput** | Requests per second | >1000 RPS |
| **Correctness** | Error rate | <0.1% |
| **Freshness** | Data staleness | <1 minute |

### Service Level Objectives (SLOs)
```promql
# 95th percentile latency target
histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le)) < 0.1

# 99.9% availability target
sum(rate(http_requests_total{status!~"5.."}[5m])) / sum(rate(http_requests_total[5m])) >= 0.999

# Error rate target
sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m])) < 0.001
```

### Error Budgets
```
Error Budget = 100% - SLO Target

Example:
- SLO: 99.9% availability
- Error Budget: 0.1% allowable errors
- Error Budget Remaining: 
  ((30 days * 24 hours * 60 minutes * 60 seconds) * 0.001 - actual_errors) 
  / ((30 days * 24 hours * 60 minutes * 60 seconds) * 0.001)
```

### Burn Rate Alerts
```yaml
alert: HighErrorRate
expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > (0.001 * 14.40)
for: 10m
labels:
  severity: critical
annotations:
  summary: "High error rate detected"
  description: "Service error rate is burning error budget >14.40x"
```

## Alerting Strategy

### Alert Routing
```yaml
# alertmanager.yml
route:
  group_by: ['alertname', 'cluster']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 3h
  receiver: 'default-receiver'
  routes:
    - match:
        severity: 'critical'
      receiver: 'pagerduty'
      continue: true
    - match:
        severity: 'warning'
      receiver: 'slack'
      continue: true
    - match:
        team: 'business'
      receiver: 'email'
```

### Alert Types
| Type | Purpose | Response Time |
|------|---------|---------------|
| **Critical** | Immediate action required | Within 5 minutes |
| **Warning** | Attention needed | Within 30 minutes |
| **Info** | Informational | Within 2 hours |

### Alert Examples
```yaml
- alert: HighErrorRate
  expr: rate(http_requests_total{code="500"}[5m]) / rate(http_requests_total[5m]) > 0.05
  for: 5m
  labels:
    severity: critical
    service: api-gateway
  annotations:
    summary: "High error rate in {{ $labels.service }}"
    description: "{{ $value }}% error rate over the last 5 minutes"

- alert: HighLatency
  expr: histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) > 1
  for: 10m
  labels:
    severity: warning
    service: product-service
  annotations:
    summary: "High latency in {{ $labels.service }}"
    description: "99th percentile latency above 1 second"
```

## Dashboard Design

### Dashboard Hierarchy
1. **Executive Dashboard**: High-level KPIs and trends
2. **Service Dashboard**: Per-service health and performance
3. **Operational Dashboard**: Real-time system status
4. **Development Dashboard**: Deployment and CI/CD metrics
5. **Business Dashboard**: User impact and business metrics

### Dashboard Templates
Each dashboard should include:
- Time range selectors (last 5m, 1h, 24h, 7d)
- Key metric summary cards
- Trend charts with baselines
- Drill-down capabilities
- Alert status indicators

### Example: Service Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│  Service: Order-Service                        [Last 1h]   │
├─────────────────────────────────────────────────────────────┤
│  Health: ✅ Healthy   Errors: 0.2%   Latency: 45ms          │
├─────────────────────────────────────────────────────────────┤
│  Requests/sec    Errors/min    Latency (p95)    CPU Usage  │
│  [Chart]         [Chart]       [Chart]           [Chart]    │
├─────────────────────────────────────────────────────────────┤
│  Recent Traces (slowest first):                          │
│  ▶ POST /orders (235ms) - span count: 12                │
│  ▶ GET /orders/{id} (186ms) - span count: 8            │
│  ▶ POST /orders (150ms) - span count: 11                │
├─────────────────────────────────────────────────────────────┤
│  Active Alerts:                                             │
│  ⚠ None                                                     │
└─────────────────────────────────────────────────────────────┘
```

## Troubleshooting and Debugging

### Debugging Checklist
When investigating issues:

1. **Start High-Level**
   - Check overall system health
   - Review recent changes
   - Look at alert history
   - Check external dependencies

2. **Narrow Focus**
   - Identify affected services
   - Check service-specific metrics
   - Review recent logs
   - Trace request paths

3. **Deep Dive**
   - Analyze specific traces
   - Review detailed logs
   - Check resource utilization
   - Test hypotheses

4. **Verify Fix**
   - Implement and test fix
   - Monitor for regression
   - Validate with stakeholders
   - Document resolution

### Debugging Tools
| Tool | Purpose | Access Method |
|------|---------|---------------|
| **Grafana** | Metric visualization | Web UI |
| **Prometheus** | Query language (PromQL) | API/UI |
| **Loki** | Log querying | Web UI/API |
| **Jaeger** | Trace analysis | Web UI |
| **Alertmanager** | Alert management | Web UI |

### Query Examples

**Prometheus Queries**:
```promql
# Error rate by service
sum(rate(http_requests_total{code=~"5.."}[5m])) by (service) / 
sum(rate(http_requests_total[5m])) by (service)

# Top slowest endpoints
topk(10, histogram_quantile(0.99, 
  sum(rate(http_request_duration_seconds_bucket[5m])) by (le, endpoint)))

# Service dependency map
sum(rate(http_client_requests_total[5m])) by (service, peer_service)
```

**Loki Queries**:
```
# Error logs from a service
{job="order-service"} |= "ERROR"

# Log correlation using trace ID
{job="order-service"} |~ "trace_id:4bf92f3577b34da6a3ce929d019de361"

# Count errors by type
count_over_time({job="order-service"} |= "ERROR"[1h])
```

## Best Practices

### Instrumentation Best Practices
1. **Instrument Early**: Add instrumentation during development
2. **Use Standard Libraries**: Prefer OpenTelemetry over custom solutions
3. **Semantic Conventions**: Follow industry naming conventions
4. **Context Enrichment**: Add business context to telemetry data
5. **Performance Consideration**: Minimize overhead of instrumentation

### Metric Naming Best Practices
1. **Use Clear Names**: Descriptive and self-explanatory
2. **Consistent Units**: Use standard units (seconds, bytes, count)
3. **Follow Conventions**: Use snake_case
4. **Include Labels**: Add relevant dimensions
5. **Document Metrics**: Maintain metric catalogs

### Log Best Practices
1. **Structured Logging**: Use JSON format for machine readability
2. **Log Levels**: Appropriate use of INFO, WARN, ERROR
3. **Context**: Include trace IDs, user context, session info
4. **Sampling**: Implement sampling for high-volume logs
5. **Rotation**: Implement log rotation policies

### Trace Best Practices
1. **End-to-End Tracking**: Ensure trace continuity across services
2. **Meaningful Spans**: Name spans appropriately
3. **Context Propagation**: Use W3C Trace Context
4. **Error Recording**: Record exceptions in spans
5. **PII Handling**: Avoid logging sensitive data in traces

### Alerting Best Practices
1. **Meaningful Alerts**: Alerts should require action
2. **Avoid Alert Fatigue**: Don't alert on symptoms
3. **Context in Alerts**: Include relevant context
4. **On-Call Considerations**: Consider team capacity
5. **Documentation**: Document alert meanings and responses

## Tools and Technologies

### Open Source Stack
| Component | Tool | Version | Notes |
|-----------|------|---------|-------|
| **Metrics** | Prometheus | v2.40+ | CNCF graduated project |
| **Visualization** | Grafana | v10.0+ | Rich dashboard capabilities |
| **Logging** | Loki | v2.9+ | Lightweight log aggregation |
| **Tracing** | Jaeger | v1.50+ | Distributed tracing system |
| **Alerting** | Alertmanager | v0.25+ | Alert routing and suppression |
| **Agent** | OpenTelemetry Collector | v0.80+ | Telemetry data collection |

### Commercial Solutions
| Vendor | Features | Integration |
|--------|----------|-------------|
| **DataDog** | Full-stack observability | OpenTelemetry, agents |
| **New Relic** | Full-stack observability | OpenTelemetry, agents |
| **Dynatrace** | AI-powered observability | OneAgent, APIs |
| **Splunk** | Log analytics and monitoring | Universal forwarder, APIs |
| **Elastic** | Observability suite | Beats, APM agents |

## Integration with Forge Workflows

### Integration Points
| Workflow | Telemetry Integration | Purpose |
|----------|----------------------|---------|
| 03-design.md | Observability requirements in architecture | Design for observability |
| 05-test.md | Observability testing | Validate monitoring in tests |
| 11-performance.md | Performance metrics | Performance monitoring |
| 12-incident.md | Incident correlation data | Incident investigation |
| 24-monitoring.md | Alerting and monitoring setup | Monitoring implementation |
| 46-devops.md | Deployment monitoring | Monitor deployments |
| 65-log-aggregation.md | Log collection implementation | Logging setup |
| 66-distributed-tracing.md | Tracing implementation | Distributed tracing |
| 77-static-analysis-security.md | Security telemetry | Security monitoring |

### Artifact Outputs
- Observability Architecture Document
- Monitoring Strategy Document
- Alert Definition Catalog
- Dashboard Templates
- Telemetry Implementation Guide
- SLO/SLI Definitions
- Incident Response Runbooks

## Conclusion

This telemetry and observability guide provides a comprehensive framework for implementing effective observability in systems built with the Forge framework. Key takeaways:

✅ **Understand the Three Pillars**: Metrics, logs, and traces work together
✅ **Design for Observability**: Instrument during development, not after
✅ **Use Standard Tools**: Leverage OpenTelemetry and CNCF ecosystem
✅ **Implement SLOs**: Define clear objectives and error budgets
✅ **Smart Alerting**: Alert on symptoms, not causes
✅ **Continuous Improvement**: Regularly review and refine observability

By following this guide, teams can build systems that are observable, debuggable, and maintainable, leading to faster incident response, better user experience, and higher system reliability.

The key to success is to embed observability into the development process from the start, treat telemetry data as a first-class citizen, and continuously evolve the observability strategy based on learnings and new requirements. This ensures that systems built with the Forge framework are not only functional but also highly observable and maintainable at scale.