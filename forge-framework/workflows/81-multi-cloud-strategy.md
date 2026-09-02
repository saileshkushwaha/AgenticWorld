# Workflow 81: Multi-Cloud Strategy

**Duration**: 16-40h | **Outputs**: Multi-cloud strategy document, vendor evaluation matrix, architecture diagrams, migration roadmap, governance framework

## Trigger

- New multi-cloud initiative required
- Cloud vendor evaluation needed
- Cloud cost optimization required
- Cloud independence strategy needed
- Disaster recovery across clouds required
- Vendor lock-in risk assessment needed

## Steps

### Step 1: Multi-Cloud Strategy Definition
**Actions**: Establish multi-cloud vision, define objectives, identify success metrics, set constraints, align with business goals.
**Output**: Strategy definition | **Time**: 2-4h | **Tools**: Strategy documents, stakeholder interviews
**Edge Cases**: Unclear objectives → facilitated workshops; competing priorities → executive alignment; budget constraints → phase approach

### Step 2: Vendor Evaluation and Selection
**Actions**: Identify candidate providers, define evaluation criteria, score options, assess risks, select primary and secondary providers.
**Output**: Vendor evaluation matrix | **Time**: 4-8h | **Tools**: Evaluation spreadsheets, RFP templates
**Edge Cases**: Too many providers → narrow to 2-3; Equal scores → add criteria or PoC; New entrants → evaluate but prioritize established; Vendor lock-in → evaluate exit costs

### Step 3: Architecture Design
**Actions**: Design multi-cloud architecture, plan inter-cloud networking, define data synchronization, plan failover, design security controls.
**Output**: Architecture design | **Time**: 4-8h | **Tools**: Architecture tools, diagramming software
**Edge Cases**: Complex networking → use managed services; Data residency → design for regional compliance; Latency issues → optimize data flow; Integration complexity → standardize APIs

### Step 4: Migration Planning
**Actions**: Plan workload migration, prioritize workloads, create migration schedule, design rollback procedures, plan validation.
**Output**: Migration roadmap | **Time**: 4-8h | **Tools**: Migration tools, project management
**Edge Cases**: Mission-critical workloads → phase migration; Data volume too large → use physical transfer; Legacy systems → replatform or wrap; Downtime not allowed → blue-green migration

### Step 5: Governance Implementation
**Actions**: Establish governance framework, define policies, implement cost management, set up monitoring, create operational procedures.
**Output**: Governance framework | **Time**: 2-4h | **Tools**: Governance tools, policy engines
**Edge Cases**: Conflicting policies → unified framework; Cost overruns → automated alerts; Operational complexity → automation first; Skill gaps → training and hiring

## Key Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Vendor Lock-in Risk | Low | Dependency scorecard |
| Cost Savings | 15-25% | Cloud cost analysis |
| Availability | 99.99% | Cross-cloud uptime |
| Deployment Success | 99% | Deployment logs |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Cloud provider count? | 2 / 3 / 4+ | Complexity vs redundancy |
| DP2: Primary use case? | Cost / Performance / Compliance / Innovation | Business priorities |
| DP3: Migration approach? | Greenfield / Lift-and-shift / Replatform / Refactor | Application complexity, risk tolerance |

## Anti-Patterns

1. **All-in on one vendor** — Defeats multi-cloud purpose
2. **Ignore cost complexity** — Multi-cloud costs more to manage
3. **Over-engineer architecture** — Start simple, scale as needed
4. **Neglect operational skills** — Multi-cloud needs specialized skills

## Edge Cases

- Budget constraints: Start with 2 clouds, expand later
- Team skill gaps: Invest in training or use managed services
- Regulatory requirements: Design for data residency from start
- Integration complexity: Standardize on APIs and protocols

## Output

Use: `templates/multi-region-strategy.md` | Capability: `capabilities/multi-cloud-strategy.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [64-multi-region-deployment](workflows/64-multi-region-deployment.md) | **Related** | Deploy across regions after strategy |
| [21-disaster-recovery](workflows/21-disaster-recovery.md) | **Related** | DR planning across clouds |
| [23-finops](workflows/23-finops.md) | **Related** | Cost management across clouds |
| [03-design](workflows/03-design.md) | **Parent** | Architecture design phase |