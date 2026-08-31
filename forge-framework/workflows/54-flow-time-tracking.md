# Workflow 54: Flow Time Tracking

**Duration**: 2-8h | **Outputs**: Flow time dashboard, bottleneck analysis, optimization recommendations

## Trigger

- Flow time measurement, cycle time optimization
- Bottleneck identification, process optimization
- Lean/Agile metrics implementation, continuous improvement
- Workflow efficiency analysis, queue time reduction

## Steps

### Step 1: Workflow State Definition
**Actions**: Define workflow states, establish state transitions, identify queue states, identify active states, document workflow.
**States**: Backlog, Ready, In Progress, Review, Done.
**Transition Types**: Forward, backward, skip.
**Output**: Workflow state definition | **Time**: 1-2h | **Tools**: Workflow modeling tools, team workshops
**Edge Cases**: Multiple workflows → define each separately; overlapping states → clarify definitions; tool limitations → adapt to tool; team disagreements → facilitate consensus

### Step 2: Time Tracking Setup
**Actions**: Configure time tracking, establish measurement points, set up data collection, test tracking accuracy.
**Tracking Types**: Automated, manual, hybrid.
**Measurement Points**: State entry, state exit, state transitions.
**Output**: Time tracking configuration | **Time**: 1-2h | **Tools**: Time tracking tools, project management platforms
| QG1 | Workflow states defined |
| QG2 | Time tracking configured |
| QG3 | Data collection started |
| QG4 | Flow time baseline established |
| QG5 | Bottleneck analysis complete |
| QG6 | Optimization recommendations documented |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Tracking method? | Automated / Manual / Hybrid | Tool availability, accuracy needs |
| DP2: Granularity? | State-level / Item-level | Analysis needs, overhead |
| DP3: Analysis frequency? | Real-time / Daily / Weekly | Decision-making needs, overhead |
| DP4: Visualization? | Dashboard / Report / Both | Audience, complexity |

## Anti-Patterns

1. **Tracking without acting** — Collecting data but not using it
2. **Perfectionism** — Waiting for perfect data before acting
3. **Ignoring outliers** — Not investigating extreme values
4. **Metric manipulation** — Gaming the metrics

## Edge Cases

- Items that skip states: Document transition paths
- Items that return to previous states: Track rework loops
- Long-running items: Set expectations and investigate
- Blocked items: Track blocker time separately

## Output

Use: `templates/flow-time-tracking.md` | Capability: `capabilities/flow-time-tracking.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [52-productivity-metrics](workflows/52-productivity-metrics.md) | **Related** | To measure productivity impact |
| [53-work-item-linkage](workflows/53-work-item-linkage.md) | **Related** | To link flow time to work items |
| [46-devops](workflows/46-devops.md) | **Related** | To track DevOps flow time |
| [47-sre](workflows/47-sre.md) | **Related** | To track incident response time |