# Workflow 41: Service Mesh Implementation

**Duration**: 8-24h | **Outputs**: Mesh architecture, traffic policies, security config, observability setup

## Trigger

- Service mesh adoption, Istio/Linkerd implementation
- mTLS implementation, traffic management
- Microservices networking, zero trust networking
- Multi-cluster networking

## Steps

### Step 1: Assessment and Planning
Evaluate service mesh solutions (Istio, Linkerd, Consul Connect). Assess cluster readiness. Plan migration.
**Time**: 2-4h. **Edge Cases**: Multi-cluster → mesh federation; VM workloads → hybrid mesh; brownfield → incremental adoption.

### Step 2: Control Plane Installation
Install control plane. Configure high availability. Set up certificate management. Plan upgrades.
**Time**: 2-4h. **Edge Cases**: Multi-cluster → primary-remote; resource constraints → ambient mesh; compliance → custom CA.

### Step 3: Data Plane Configuration
Configure sidecar injection. Set up traffic routing. Implement canary deployments. Plan circuit breaking.
**Time**: 2-4h. **Edge Cases**: Performance → sidecar limits; init containers → iptables rules; host networking → CNI config.

### Step 4: Security Configuration
Implement mTLS. Configure authorization policies. Set up ingress gateway. Plan egress control.
**Time**: 2-4h. **Edge Cases**: Legacy services → permissive mode; external traffic → ingress config; audit → access logging.

### Step 5: Observability Setup
Configure distributed tracing. Set up metrics collection. Create dashboards. Plan SLO monitoring.
**Time**: 2-4h. **Edge Cases**: High cardinality → sampling; storage → retention policies; tool integration → OTel.

### Step 6: Traffic Management
Implement traffic splitting. Configure retries and timeouts. Set up fault injection. Plan load balancing.
**Time**: 2-4h. **Edge Cases**: A/B testing → header routing; region affinity → locality LB; circuit breaking → outlier detection.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Mesh solution selected |
| QG2 | Control plane installed |
| QG3 | Data plane configured |
| QG4 | Security policies active |
| QG5 | Observability operational |
| QG6 | Traffic management configured |

## Anti-Patterns

1. **Mesh everywhere** — Adopting mesh for simple architectures
2. **No mTLS** — Service mesh without security benefits
3. **Ignoring overhead** — Not accounting for sidecar resource usage
4. **Complex configs** — Overly complex traffic policies

## Edge Cases

- Multi-cluster → Mesh federation
- VM workloads → Hybrid mesh
- Brownfield → Incremental sidecar injection
- Performance-critical → Ambient mesh (sidecar-less)

## Output

Use: `templates/service-mesh-report.md` | Capability: `capabilities/service-mesh.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [67-microservices-decomposition](workflows/67-microservices-decomposition.md) | **Related** | Microservices |
| [38-network-security](workflows/38-network-security.md) | **Related** | Network security |
| [66-distributed-tracing](workflows/66-distributed-tracing.md) | **Related** | Tracing |
| [69-chaos-engineering](workflows/69-chaos-engineering.md) | **Related** | Chaos testing |
