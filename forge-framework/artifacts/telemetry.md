# Forge Telemetry System Specification

## Overview

The Forge Telemetry System captures execution events, quality metrics, and performance data across all framework workflows. This enables audit trails, improvement analysis, and operational insights.

## Event Types

### Workflow Events
| Event | Trigger | Data |
|-------|---------|------|
| `workflow.start` | Workflow initiated | workflow_id, trigger, timestamp, context |
| `workflow.complete` | Workflow finished | workflow_id, duration, outcome, outputs |
| `workflow.abort` | Workflow stopped | workflow_id, reason, partial_outputs |

### Phase Events
| Event | Trigger | Data |
|-------|---------|------|
| `phase.start` | Phase begun | phase_id, workflow_id, timestamp |
| `phase.complete` | Phase finished | phase_id, duration, quality_gates_passed |
| `phase.skip` | Phase bypassed | phase_id, reason |

### Quality Gate Events
| Event | Trigger | Data |
|-------|---------|------|
| `gate.pass` | Gate criteria met | gate_id, criteria, evidence |
| `gate.fail` | Gate criteria unmet | gate_id, criteria, gap, retry_count |
| `gate.retry` | Gate retry attempt | gate_id, attempt_number, previous_gap |

### Artifact Events
| Event | Trigger | Data |
|-------|---------|------|
| `artifact.create` | New artifact | artifact_id, type, template, author |
| `artifact.update` | Artifact modified | artifact_id, changes, author |
| `artifact.validate` | Artifact verified | artifact_id, validation_result |

### Decision Events
| Event | Trigger | Data |
|-------|---------|------|
| `decision.make` | Decision recorded | decision_id, options, rationale, choice |
| `decision.revise` | Decision changed | decision_id, original, revision, reason |

### Error Events
| Event | Trigger | Data |
|-------|---------|------|
| `error.encounter` | Error detected | error_id, type, severity, context |
| `error.resolved` | Error fixed | error_id, resolution, duration |

## Event Schema

```json
{
  "event_id": "uuid-v4",
  "event_type": "workflow.complete",
  "timestamp": "2026-08-31T12:00:00Z",
  "workflow_id": "01-research",
  "session_id": "agent-session-123",
  "data": {
    "duration_seconds": 1800,
    "outcome": "success",
    "quality_gates_passed": 6,
    "quality_gates_total": 6,
    "artifacts_created": ["research-report"],
    "decisions_made": 3,
    "errors_encountered": 0
  },
  "metadata": {
    "model": "claude-sonnet-4",
    "token_usage": {
      "input": 12000,
      "output": 8000
    }
  }
}
```

## Telemetry Levels

| Level | Events Captured | Use Case |
|-------|-----------------|----------|
| `minimal` | workflow.start/complete, errors | Basic tracking |
| `standard` | All workflow + phase events | Standard auditing |
| `detailed` | All events including artifacts | Full analysis |
| `verbose` | All events + token usage | Performance tuning |

## Export Formats

### JSON Lines (default)
```
{"event_id":"...","event_type":"workflow.start",...}
{"event_id":"...","event_type":"phase.complete",...}
```

### CSV
```
event_id,event_type,timestamp,workflow_id,data
uuid,workflow.start,2026-08-31T12:00:00Z,01-research,{...}
```

### Markdown Table
```markdown
| Event ID | Type | Workflow | Timestamp | Outcome |
|----------|------|----------|-----------|---------|
| uuid | workflow.complete | 01-research | 2026-08-31T12:30:00Z | success |
```

## Storage

| Environment | Storage Location |
|-------------|------------------|
| Local | `.forge/telemetry/` |
| CI/CD | Artifacts directory |
| Agent Platform | Via MCP/tool callbacks |

## Configuration

```yaml
telemetry:
  enabled: true
  level: standard
  format: jsonl
  destination: .forge/telemetry/session-{session_id}.jsonl
  encryption: false
  retention_days: 90
```

## Privacy

- **No PII**: Telemetry captures workflow events, not personal data
- **Token counts only**: No prompt/response content stored
- **Decision rationale**: Captured without exposing context

## Integration

Each workflow includes telemetry hooks at:
1. Workflow start
2. Each step start/complete
3. Each quality gate
4. Artifact creation
5. Workflow complete

## Metrics Derived

| Metric | Calculation |
|--------|-------------|
| Quality Pass Rate | gates_passed / gates_total × 100 |
| Workflow Duration | complete.timestamp - start.timestamp |
| Retry Rate | retries / gates_total × 100 |
| Error Rate | errors / workflows × 100 |
| Workflow Adoption | count per workflow type |
