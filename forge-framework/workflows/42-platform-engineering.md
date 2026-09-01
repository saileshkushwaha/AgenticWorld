# Workflow 42: Platform Engineering

**Duration**: 8-40h | **Outputs**: Platform roadmap, self-service portal, IDP architecture, developer workflows

## Trigger

- Platform engineering initiative, internal developer platform
- Developer experience improvement, self-service infrastructure
- Golden path creation, developer portal implementation
- Infrastructure standardization, DevOps maturation

## Steps

### Step 1: Developer Experience Assessment
Survey developers. Identify pain points. Map current workflows. Measure developer productivity.
**Time**: 4-8h. **Edge Cases**: Multiple teams → segment analysis; remote developers → async feedback; resistance → anonymous surveys.

### Step 2: Platform Strategy
Define platform vision. Identify platform capabilities. Prioritize features. Create roadmap.
**Time**: 2-4h. **Edge Cases**: Executive alignment → business case; budget constraints → phased approach; existing tools → integrate.

### Step 3: Self-Service Portal
Design developer portal. Implement service catalog. Create templates. Plan onboarding.
**Time**: 8-16h. **Edge Cases**: Multiple tech stacks → flexible templates; compliance → guardrails; adoption → gamification.

### Step 4: Golden Paths
Design golden path templates. Implement infrastructure as code. Create CI/CD templates. Plan paved roads.
**Time**: 8-16h. **Edge Cases**: Edge cases → escape hatches; customization → configuration options; versioning → template updates.

### Step 5: Platform Operations
Implement platform monitoring. Set up support channels. Create documentation. Plan platform SLOs.
**Time**: 4-8h. **Edge Cases**: Platform as product → product management; feedback loops → NPS; incidents → platform on-call.

### Step 6: Adoption and Iteration
Drive platform adoption. Measure developer satisfaction. Iterate based on feedback. Plan evolution.
**Time**: 4-8h. **Edge Cases**: Champions → advocate network; resistance → demonstrate value; metrics → DORA improvements.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Developer needs assessed |
| QG2 | Platform strategy defined |
| QG3 | Self-service portal operational |
| QG4 | Golden paths implemented |
| QG5 | Platform operations established |
| QG6 | Adoption metrics tracked |

## Anti-Patterns

1. **Build it and they will come** — No adoption strategy
2. **One size fits all** — Ignoring team diversity
3. **Platform team silo** — Not collaborating with developers
4. **Tool focus** — Focusing on tools not outcomes

## Edge Cases

- Multi-cloud → Cloud-agnostic abstractions
- Regulated environments → Compliance guardrails
- Legacy systems → Migration paths
- Open source → Community engagement

## Output

Use: `templates/platform-engineering-report.md` | Capability: `capabilities/platform-engineering.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [46-devops](workflows/46-devops.md) | **Related** | DevOps practices |
| [48-iac](workflows/48-iac.md) | **Related** | Infrastructure as Code |
| [52-productivity-metrics](workflows/52-productivity-metrics.md) | **Related** | Productivity measurement |
| [32-ai-augmented](workflows/32-ai-augmented.md) | **Related** | AI tools |
