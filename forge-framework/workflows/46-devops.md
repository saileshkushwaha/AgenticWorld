# Workflow 46: DevOps

**Duration**: 4-20h | **Outputs**: DevOps strategy, CI/CD pipeline, automation framework, monitoring setup

## Trigger

- DevOps transformation initiative, CI/CD implementation
- Automation improvement, deployment frequency increase
- Team collaboration improvement, release cycle optimization
- Infrastructure automation, monitoring improvement

## Steps

### Step 1: Current State Assessment
**Actions**: Assess current development and operations practices, identify bottlenecks, evaluate tooling, document pain points, measure current metrics.
**Metrics**: Deployment frequency, lead time for changes, mean time to recovery, change failure rate.
**Output**: Current state assessment | **Time**: 2-4h | **Tools**: Assessment templates, metrics dashboards
**Edge Cases**: No existing metrics → establish baseline; siloed teams → facilitate workshops; legacy systems → document constraints; resistance to change → communicate benefits

### Step 2: DevOps Strategy Definition
**Actions**: Define DevOps vision and goals, identify improvement areas, prioritize initiatives, establish success metrics, create roadmap.
**Principles**: Culture, Automation, Measurement, Sharing (CAMS).
**Output**: DevOps strategy | **Time**: 2-4h | **Tools**: Strategy templates, roadmap tools
**Edge Cases**: Conflicting priorities → facilitate alignment; limited budget → phase implementation; skill gaps → plan training; executive skepticism → demonstrate value

### Step 3: CI/CD Pipeline Design
**Actions**: Design continuous integration pipeline, design continuous delivery pipeline, define branching strategy, select tools, plan environments.
**Tools**: Jenkins, GitHub Actions, GitLab CI, CircleCI, Azure DevOps.
**Output**: CI/CD pipeline design | **Time**: 2-4h | **Tools**: Pipeline design tools, architecture diagrams
**Edge Cases**: Multiple tech stacks → design flexible pipelines; compliance requirements → add approval gates; legacy systems → plan incremental adoption; distributed teams → use cloud-based tools

### Step 4: Automation Framework
**Actions**: Identify automation opportunities, design automation framework, select automation tools, implement automation, measure automation impact.
**Areas**: Build automation, test automation, deployment automation, infrastructure automation, monitoring automation.
**Output**: Automation framework | **Time**: 4-8h | **Tools**: Automation tools, scripting languages
**Edge Cases**: Complex workflows → use orchestration tools; fragile automation → implement retry logic; manual approvals → document exceptions; cross-team dependencies → coordinate implementation

### Step 5: Monitoring and Feedback
**Actions**: Define monitoring strategy, implement monitoring tools, create dashboards, establish alerting, create feedback loops.
**Metrics**: Application performance, infrastructure health, deployment metrics, team metrics.
**Output**: Monitoring framework | **Time**: 2-4h | **Tools**: Monitoring tools, dashboard tools
**Edge Cases**: Alert fatigue → tune thresholds; data overload → focus on key metrics; tool sprawl → consolidate tools; distributed systems → use distributed tracing

### Step 6: Continuous Improvement
**Actions**: Establish improvement process, conduct regular retrospectives, measure progress, adjust strategy, share learnings.
**Cadence**: Daily standups, weekly reviews, monthly retrospectives, quarterly planning.
**Output**: Continuous improvement plan | **Time**: 1-2h | **Tools**: Retrospective templates, metrics dashboards
**Edge Cases**: Improvement fatigue → prioritize initiatives; conflicting metrics → align on priorities; team turnover → document knowledge; changing requirements → adapt strategy

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Current state assessed |
| QG2 | DevOps strategy defined |
| QG3 | CI/CD pipeline designed |
| QG4 | Automation framework implemented |
| QG5 | Monitoring framework established |
| QG6 | Continuous improvement plan defined |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: CI/CD tool? | Jenkins / GitHub Actions / GitLab CI | Team skills, ecosystem, cost |
| DP2: Deployment strategy? | Blue-Green / Canary / Rolling | Risk tolerance, infrastructure |
| DP3: Automation scope? | Full / Phased | Resource availability, risk |
| DP4: Monitoring approach? | Centralized / Distributed | Team structure, scale |

## Anti-Patterns

1. **DevOps team silo** — Creating another silo instead of breaking them
2. **Tool-first approach** — Focusing on tools before culture
3. **Automation for automation's sake** — Automating without purpose
4. **Ignoring culture** — Focusing only on technical changes

## Edge Cases

- Legacy systems: Plan incremental adoption
- Regulated environments: Add compliance gates
- Distributed teams: Use cloud-based tools
- Multiple tech stacks: Design flexible pipelines

## Output

Use: `templates/devops-strategy.md` | Capability: `capabilities/devops.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [30-devsecops](workflows/30-devsecops.md) | **Related** | To integrate security into DevOps |
| [24-monitoring](workflows/24-monitoring.md) | **Related** | To monitor DevOps metrics |
| [16-configuration](workflows/16-configuration.md) | **Related** | To configure DevOps tools |
| [45-configuration-audit](workflows/45-configuration-audit.md) | **Related** | To audit DevOps configurations |