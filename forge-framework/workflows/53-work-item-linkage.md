# Workflow 53: Work Item Linkage

**Duration**: 4-16h | **Outputs**: Integration framework, linkage mapping, traceability matrix, automation rules

## Trigger

- Project management tool integration, work item traceability
- Cross-tool linkage, requirement tracking
- Compliance traceability, audit requirements
- Multi-team coordination, dependency management

## Steps

### Step 1: Tool Inventory and Assessment
**Actions**: Inventory all work management tools, assess integration capabilities, identify data flows, document current state.
**Tools**: Jira, Azure DevOps, GitHub Issues, Linear, Asana, Monday.com.
**Output**: Tool inventory | **Time**: 1-2h | **Tools**: Inventory templates, API documentation
**Edge Cases**: Shadow IT tools → include in inventory; no API access → document limitations; custom tools → assess integration points; legacy tools → plan migration

### Step 2: Linkage Model Design
**Actions**: Design work item hierarchy, define linkage types, establish mapping rules, create traceability model.
**Hierarchy**: Epic → Feature → User Story → Task → Subtask.
**Linkage Types**: Parent-child, related, blocks, duplicates, triggers.
**Output**: Linkage model | **Time**: 2-4h | **Tools**: Modeling tools, diagramming software
**Edge Cases**: Different hierarchies → map between tools; circular dependencies → detect and resolve; missing items → create placeholders; tool-specific types → map to common model

### Step 3: Integration Implementation
**Actions**: Implement tool integrations, configure sync rules, establish data mapping, test integrations.
**Integration Types**: Native integration, API integration, webhook integration, manual sync.
**Output**: Integration framework | **Time**: 4-8h | **Tools**: Integration platforms, API tools
**Edge Cases**: API rate limits → implement throttling; data conflicts → establish precedence rules; sync failures → implement retry logic; large data volumes → use batch processing

### Step 4: Traceability Matrix Creation
**Actions**: Create traceability matrix, map requirements to work items, establish forward and backward traceability, validate completeness.
**Traceability Types**: Forward (requirements to implementation), backward (implementation to requirements), bidirectional.
**Output**: Traceability matrix | **Time**: 2-4h | **Tools**: Traceability tools, spreadsheet software
| QG1 | Tool inventory complete |
| QG2 | Linkage model designed |
| QG3 | Integrations implemented |
| QG4 | Traceability matrix created |
| QG5 | Automation rules configured |
| QG6 | Documentation complete |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Integration approach? | Native / API / Webhook / Manual | Tool capabilities, resources |
| DP2: Sync direction? | Unidirectional / Bidirectional | Data flow needs, conflict potential |
| DP3: Sync frequency? | Real-time / Near real-time / Batch | Data volume, latency needs |
| DP4: Conflict resolution? | Source wins / Target wins / Manual | Data criticality, user impact |

## Anti-Patterns

1. **Point-to-point sprawl** — Direct integrations between all tools
2. **Data duplication** — Same data in multiple tools without sync
3. **Broken traceability** — Missing links between items
4. **Integration fragility** — Integrations that break frequently

## Edge Cases

- Tool without API: Use screen scraping or manual sync
- Different hierarchies: Map between tool hierarchies
- Circular dependencies: Detect and resolve cycles
- Large data volumes: Use batch processing

## Output

Use: `templates/work-item-linkage.md` | Capability: `capabilities/work-item-linkage.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [14-project-planning](workflows/14-project-planning.md) | **Related** | To link project plans to work items |
| [20-data-migration](workflows/20-data-migration.md) | **Related** | To migrate work items between tools |
| [52-productivity-metrics](workflows/52-productivity-metrics.md) | **Related** | To track work item metrics |
| [54-flow-time-tracking](workflows/54-flow-time-tracking.md) | **Related** | To track work item flow time |