# Deployment Plan

**Created**: [ISO 8601 timestamp]
**Phase**: Deployment
**Status**: [draft | review | approved]
**Author**: [Agent/Team name]
**Version**: [Semantic version]

---

## Executive Summary

*Guidance: 2-3 sentences covering what will be deployed, strategy, and status.*

[2-3 sentence overview of the deployment scope, strategy, and status]

## Deployment Scope

### Components to Deploy
- [Component 1]: [version]
- [Component 2]: [version]

### Target Environments
- [ ] Development
- [ ] Staging
- [ ] Production

### Deployment Window
- **Date**: [date]
- **Start Time**: [time and timezone]
- **End Time**: [time and timezone]
- **Duration**: [estimated duration]

## Deployment Strategy

**Strategy**: [Blue-Green | Canary | Rolling | Recreate]

**Rationale**: [Why this strategy was chosen]

### Strategy Details
*Guidance: Describe how the strategy will be executed.*

[Description of how the strategy will be executed]

## Pre-Deployment Checklist

*Guidance: All items must be checked before deployment begins.*

- [ ] All quality gates passed
- [ ] Code reviewed and approved
- [ ] Tests passing
- [ ] Documentation updated
- [ ] Stakeholders notified
- [ ] Backups completed
- [ ] Rollback plan tested
- [ ] Monitoring verified

## Environment Configuration

### Infrastructure

| Resource | Configuration | Status |
|----------|---------------|--------|
| [Resource] | [config] | [ready/not-ready] |
| [Resource] | [config] | [ready/not-ready] |

### Configuration

| Setting | Value | Environment |
|---------|-------|-------------|
| [Setting] | [value] | [env] |
| [Setting] | [value] | [env] |

## Deployment Steps

### Step 1: [Title]

**Description**: [What happens in this step]

**Command/Action**: [Specific command or action]

**Expected Outcome**: [What should happen]

**Verification**: [How to verify success]

**Duration**: [Estimated time]

### Step 2: [Title]

[Repeat format above]

### Step 3: [Title]

[Repeat format above]

## Rollback Plan

### Rollback Triggers
*Guidance: Define specific, measurable triggers for rollback.*

- [Trigger 1]: [description]
- [Trigger 2]: [description]
- [Trigger 3]: [description]

### Rollback Steps

1. [Step 1]
2. [Step 2]
3. [Step 3]

### Rollback Verification
- [Verification 1]
- [Verification 2]

### Rollback Time Limit
*Guidance: Maximum time before rollback is automatically triggered.*

[Maximum time before rollback is triggered]

## Post-Deployment Verification

### Smoke Tests

| Test | Expected | Actual | Status |
|------|----------|--------|--------|
| [Test 1] | [expected] | [actual] | [pass/fail] |
| [Test 2] | [expected] | [actual] | [pass/fail] |

### Health Checks

| Check | Endpoint | Expected | Actual | Status |
|-------|----------|----------|--------|--------|
| [Check 1] | [endpoint] | [expected] | [actual] | [pass/fail] |
| [Check 2] | [endpoint] | [expected] | [actual] | [pass/fail] |

### Monitoring Verification

- [ ] Metrics collecting
- [ ] Logs aggregating
- [ ] Alerts configured
- [ ] Dashboards displaying

## Communication Plan

### Stakeholder Notifications

| Stakeholder | When | How | Message |
|-------------|------|-----|---------|
| [Name] | [when] | [how] | [message] |
| [Name] | [when] | [how] | [message] |

### Status Updates

- **Pre-deployment**: [timing and channel]
- **During deployment**: [timing and channel]
- **Post-deployment**: [timing and channel]

## Deployment Results

**Status**: [success | partial | failed]

**Start Time**: [timestamp]
**End Time**: [timestamp]
**Duration**: [duration]

### Issues Encountered

| Issue | Impact | Resolution |
|-------|--------|------------|
| [Issue 1] | [impact] | [resolution] |
| [Issue 2] | [impact] | [resolution] |

### Metrics

| Metric | Target | Actual |
|--------|--------|--------|
| [Metric] | [target] | [actual] |
| [Metric] | [target] | [actual] |

## Lessons Learned

- [Lesson 1]
- [Lesson 2]
- [Lesson 3]

## Next Steps

1. [Action item 1]
2. [Action item 2]
3. [Action item 3]

## References

- [Reference 1]: [description and link]
- [Reference 2]: [description and link]

## Appendix

[Any supplementary material]
