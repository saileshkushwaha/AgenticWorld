# Telemetry Log

**Created**: {ISO 8601} | **Session**: {session_id} | **Level**: {telemetry_level}

## Session Metadata

| Field | Value |
|-------|-------|
| Session ID | {session_id} |
| Workflows Executed | {count} |
| Start Time | {start_time} |
| End Time | {end_time} |
| Total Duration | {duration} |
| Telemetry Level | {level} |

## Event Summary

| Metric | Count |
|--------|-------|
| Workflows Started | {workflows_started} |
| Workflows Completed | {workflows_completed} |
| Workflows Aborted | {workflows_aborted} |
| Quality Gates Passed | {gates_passed} |
| Quality Gates Failed | {gates_failed} |
| Artifacts Created | {artifacts_created} |
| Decisions Made | {decisions_made} |
| Errors Encountered | {errors_encountered} |

## Quality Metrics

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Quality Pass Rate | {qpr}% | ≥90% | {status} |
| Average Workflow Duration | {avg_duration} | - | - |
| Retry Rate | {retry_rate}% | ≤10% | {status} |
| Error Rate | {error_rate}% | ≤5% | {status} |

## Events Log

| Timestamp | Event | Workflow | Data |
|-----------|-------|----------|------|
| {timestamp} | {event_type} | {workflow_id} | {data} |

## Workflow Breakdown

### {workflow_name}

| Phase | Duration | Gates Passed | Gates Failed |
|-------|----------|--------------|--------------|
| {phase} | {duration} | {passed} | {failed} |

## Decisions Made

| ID | Decision | Rationale | Timestamp |
|----|----------|-----------|-----------|
| {id} | {decision} | {rationale} | {timestamp} |

## Errors Encountered

| ID | Type | Severity | Resolution | Timestamp |
|----|------|----------|------------|-----------|
| {id} | {type} | {severity} | {resolution} | {timestamp} |

## Recommendations

1. {recommendation}

## Next Steps

- [ ] Review failed quality gates
- [ ] Address high retry rates
- [ ] Implement preventive measures
- [ ] Update workflows based on insights
