# Workflow 39: API Gateway Management

**Duration**: 4-16h | **Outputs**: Gateway architecture, routing config, rate limiting rules, analytics setup

## Trigger

- API gateway implementation, API management initiative
- Rate limiting design, API versioning strategy
- Developer portal setup, API monetization
- Multi-region API deployment

## Steps

### Step 1: Requirements Analysis
Identify API consumers. Define SLAs. Document security requirements. Plan scaling needs.
**Time**: 1-2h. **Edge Cases**: Multiple consumer types → tiered access; regulatory → compliance controls; bursty traffic → auto-scaling.

### Step 2: Gateway Selection
Evaluate gateway solutions (Kong, Apigee, AWS API Gateway, Azure APIM). Compare features. Select platform.
**Time**: 1-2h. **Edge Cases**: Multi-cloud → cloud-agnostic; budget → open-source; existing investment → integrate.

### Step 3: Routing and Transformation
Configure request routing. Set up request/response transformation. Implement header manipulation. Plan versioning.
**Time**: 2-4h. **Edge Cases**: Legacy APIs → adapter pattern; protocol conversion → gRPC-REST; path conflicts → priority rules.

### Step 4: Security and Rate Limiting
Configure authentication. Implement rate limiting. Set up IP filtering. Plan quota management.
**Time**: 2-4h. **Edge Cases**: DDoS → burst limits; fair use → sliding window; API keys → rotation policy.

### Step 5: Analytics and Monitoring
Set up API analytics. Configure dashboards. Design alerting. Plan usage reporting.
**Time**: 1-2h. **Edge Cases**: High cardinality → sampling; real-time → streaming; cost → log filtering.

### Step 6: Developer Portal
Create API documentation. Set up developer onboarding. Implement sandbox. Plan SDK generation.
**Time**: 2-4h. **Edge Cases**: Multiple APIs → catalog; versioning → docs per version; self-service → automated provisioning.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Requirements defined |
| QG2 | Gateway selected |
| QG3 | Routing configured |
| QG4 | Security implemented |
| QG5 | Analytics active |
| QG6 | Developer portal live |

## Anti-Patterns

1. **No rate limiting** — APIs vulnerable to abuse
2. **Single gateway** — Single point of failure
3. **No versioning** — Breaking changes affect consumers
4. **Missing documentation** — Developers can't use APIs

## Edge Cases

- Multi-region → Global load balancing
- Legacy APIs → Adapter/transformation layer
- High throughput → Caching and CDN
- Regulatory compliance → Audit logging

## Output

Use: `templates/api-gateway-report.md` | Capability: `capabilities/api-gateway.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [19-api](workflows/19-api.md) | **Related** | API management |
| [49-api-design](workflows/49-api-design.md) | **Related** | API design |
| [30-devsecops](workflows/30-devsecops.md) | **Related** | Security integration |
| [24-monitoring](workflows/24-monitoring.md) | **Related** | Monitoring |
