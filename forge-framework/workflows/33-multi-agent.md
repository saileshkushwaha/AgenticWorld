# Workflow 33: Multi-Agent Coordination

**Duration**: 4-16h | **Outputs**: Agent architecture, task delegation plan, coordination protocol

## Trigger
- Multi-agent system design, agent team creation
- Complex workflow automation, agent orchestration

## Steps

### Step 1: Task Decomposition
Decompose complex task into sub-tasks. Identify agent roles and responsibilities.
**Time**: 2-4h.

### Step 2: Agent Design
Define agent capabilities. Design communication protocol. Plan coordination.
**Time**: 2-4h.

### Step 3: Orchestration Planning
Define workflow orchestration. Plan error handling. Design fallback mechanisms.
**Time**: 2-4h.

### Step 4: Implementation
Implement agents. Set up communication. Configure orchestration.
**Time**: 2-8h.

### Step 5: Testing and Validation
Test agent interactions. Validate outputs. Handle edge cases.
**Time**: 2-4h.

### Step 6: Monitoring and Optimization
Monitor agent performance. Optimize coordination. Document learnings.
**Time**: 1-2h.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Tasks decomposed |
| QG2 | Agents designed |
| QG3 | Orchestration planned |
| QG4 | Implementation complete |
| QG5 | Testing passed |
| QG6 | Monitoring configured |

## Anti-Patterns

1. **Agent proliferation** — Too many agents
2. **Coordination overhead** — More time coordinating than working
3. **Single point of failure** — Orchestrator bottleneck
4. **Unclear ownership** — Task responsibility unclear

## Edge Cases

- Agent conflicts: Resolution strategies
- Circular dependencies: Breaking cycles
- Partial failures: Graceful degradation
- Communication failures: Retry and timeout

## Output
Use: `templates/multi-agent-plan.md` | Capability: `capabilities/multi-agent.md`

## Anti-Patterns

1. **Security as afterthought** — Adding security late
2. **Tool overload** — Too many tools without integration
3. **No automation** — Manual processes in CI/CD
4. **Ignoring compliance** — Not meeting regulatory requirements

## Edge Cases

- Legacy systems → Use incremental security improvements
- No security team → Use automated tools
- Compliance conflicts → Consult legal team

## Output

Use: `templates/multi-agent-plan.md` | Capability: `capabilities/multi-agent.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [32-ai-augmented](workflows/32-ai-augmented.md) | **Related** | To use AI in multi-agent systems |
| [04-implement](workflows/04-implement.md) | **Related** | To implement multi-agent systems |
| [37-telemetry](workflows/37-telemetry.md) | **Related** | To track agent performance |
