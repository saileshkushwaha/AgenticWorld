# Workflow 07: Deployment

## Phase Overview

The Deployment phase releases software to target environments through environment setup, deployment execution, and post-deployment verification.

**Estimated Duration**: 1-4 hours (depending on complexity)
**Typical Outputs**: Deployment plan, verification report, deployment report

## Trigger Conditions

This workflow is triggered when:
- A new release is ready for deployment
- A hotfix needs to be deployed
- Infrastructure changes need to be applied
- Configuration changes need to be rolled out
- Rollback is needed
- Environment provisioning is required

## Steps

### Step 1: Pre-Deployment Planning

**Actions**:
- Define deployment scope (what is being deployed)
- Identify target environments (staging, production)
- Define deployment strategy
- Create rollback plan
- Schedule deployment window
- Identify stakeholders and communication plan
- Obtain necessary approvals
- Verify all quality gates passed

**Deployment strategies**:
- **Blue-Green**: Two identical environments, switch traffic
- **Canary**: Gradual rollout to subset of users
- **Rolling**: Incremental instance replacement
- **Recreate**: Shutdown old, start new
- **Shadow**: Deploy alongside old, mirror traffic

**Output**: Deployment plan

**Time Estimate**: 30-60 minutes

**Tools**: Deployment plan template, calendar, approval workflows

**Example Deployment Plan**:
```
Release: v2.3.0 - User Dashboard Redesign
Date: 2026-09-01 10:00 UTC
Duration: 2 hours

Scope:
- Frontend: New dashboard UI (React)
- Backend: New analytics API endpoints
- Database: Migration for user preferences table

Strategy: Blue-Green deployment
- Green environment: Current production (v2.2.0)
- Blue environment: New version (v2.3.0)
- Switch: DNS cutover after verification

Rollback: Switch DNS back to green environment (< 5 minutes)

Approvals: [CTO] [Product Manager] [QA Lead]
```

**Edge Cases**:
- Deployment window conflicts → Coordinate with stakeholders, find alternative
- Approval not obtained → Delay deployment, escalate if urgent
- Quality gates not passed → Fix issues before deploying

### Step 2: Environment Setup

**Actions**:
- Provision infrastructure (servers, containers, services)
- Configure network and security
- Set up databases and storage
- Configure monitoring and logging
- Set up load balancers and DNS
- Verify environment health
- Document environment configuration

**Infrastructure as Code**:
- Use Terraform, CloudFormation, or Pulumi
- Version control infrastructure definitions
- Automate environment provisioning
- Ensure reproducibility
- Document infrastructure decisions

**Output**: Configured target environment

**Time Estimate**: 30-120 minutes (or automated)

**Tools**: Terraform, CloudFormation, Pulumi, Ansible, cloud consoles

**Edge Cases**:
- Environment provisioning fails → Check IaC templates, fix and retry
- Configuration drift → Reconcile with desired state
- Resource limits → Request quota increase or optimize

### Step 3: Deployment Execution

**Actions**:
- Execute deployment according to strategy
- Monitor deployment progress
- Verify each step completes successfully
- Watch for errors or warnings
- Monitor application health metrics
- Keep stakeholders informed
- Document deployment steps and timing

**Execution checklist**:
- [ ] Pre-deployment backups completed
- [ ] Deployment artifacts verified
- [ ] Deployment steps executed in order
- [ ] Health checks passing
- [ ] No critical errors in logs
- [ ] Performance within expected range

**Output**: Deployed application

**Time Estimate**: 15-60 minutes

**Tools**: CI/CD tools (GitHub Actions, Jenkins, GitLab CD), Kubernetes, AWS CodeDeploy

**Example Execution Log**:
```
10:00 - Deployment started
10:01 - Database migration completed (23 migrations)
10:05 - Blue environment provisioned (4 instances)
10:10 - Application deployed to blue environment
10:12 - Health checks passing on blue
10:15 - Smoke tests passed on blue
10:20 - DNS switched to blue environment
10:25 - Traffic routing to blue verified
10:30 - Monitoring shows normal metrics
10:45 - No errors detected, deployment successful
```

**Edge Cases**:
- Health check fails → Pause deployment, investigate, rollback if needed
- Migration fails → Rollback migration, fix, retry
- Partial deployment → Complete or rollback, never leave in inconsistent state

### Step 4: Post-Deployment Verification

**Actions**:
- Run smoke tests
- Verify critical user journeys
- Check system health metrics
- Verify integrations are working
- Confirm data integrity
- Check error rates
- Validate performance
- Verify monitoring and alerting

**Verification checklist**:
- [ ] Application starts successfully
- [ ] Health endpoints responding
- [ ] Critical features working
- [ ] Database connections working
- [ ] External integrations working
- [ ] No unexpected errors
- [ ] Performance acceptable

**Output**: Verification report

**Time Estimate**: 15-30 minutes

**Tools**: Smoke test scripts, monitoring dashboards, synthetic monitoring

**Edge Cases**:
- Smoke test fails → Execute rollback immediately
- Performance degraded → Investigate, rollback if severe
- Integration issue → Check third-party status, implement fallback

### Step 5: Rollback Planning

**Actions**:
- Define rollback triggers (when to rollback)
- Document rollback steps
- Test rollback procedure (if possible)
- Ensure rollback artifacts are available
- Define rollback decision authority
- Set rollback time limits
- Communicate rollback plan

**Rollback triggers**:
- Critical functionality broken
- Performance degradation beyond threshold
- Error rate exceeds threshold
- Data corruption detected
- Security vulnerability discovered

**Output**: Rollback plan

**Time Estimate**: 15-30 minutes (done during planning)

**Tools**: Runbooks, automated rollback scripts

**Example Rollback Plan**:
```
Rollback Triggers:
- Error rate > 5% for > 2 minutes
- P95 response time > 2 seconds for > 5 minutes
- Any critical feature non-functional
- Data integrity issues detected

Rollback Steps:
1. Switch DNS back to green environment
2. Verify green environment health
3. Confirm traffic routing to green
4. Notify stakeholders of rollback
5. Investigate issue in blue environment

Decision Authority: On-call engineer can trigger rollback
Time Limit: Rollback must complete within 5 minutes
```

**Edge Cases**:
- Rollback also fails → Have backup rollback (manual steps)
- Data migration rollback → Plan data reversal carefully
- Database schema changes → Ensure backward compatibility

### Step 6: Monitoring and Alerting

**Actions**:
- Set up application monitoring
- Configure log aggregation
- Define alert thresholds
- Set up dashboards
- Configure on-call rotation
- Define escalation procedures
- Verify monitoring is working

**Monitoring dimensions**:
- **Availability**: Uptime, health checks
- **Performance**: Response time, throughput, error rate
- **Business**: Key business metrics
- **Infrastructure**: CPU, memory, disk, network
- **Security**: Access patterns, anomalies

**Output**: Monitoring and alerting configured

**Time Estimate**: 15-30 minutes

**Tools**: Datadog, New Relic, Grafana, PagerDuty, OpsGenie

**Edge Cases**:
- Alert fatigue → Tune thresholds, prioritize critical alerts
- Missing metrics → Add instrumentation, update dashboards
- False positives → Adjust thresholds, improve alert logic

### Step 7: Deployment Reporting

**Actions**:
- Document deployment details
- Record deployment timeline
- Note any issues encountered
- Document lessons learned
- Update runbooks
- Communicate completion to stakeholders
- Archive deployment artifacts

**Output**: Deployment report (using deployment-plan template)

**Time Estimate**: 15-30 minutes

**Tools**: Deployment report template, team communication tools

**Edge Cases**:
- Deployment had issues → Document thoroughly, plan improvements
- Rollback occurred → Document reason, lessons learned, prevention

## Quality Gates

| Gate | Criteria | Check |
|------|----------|-------|
| QG1 | All pre-deployment quality gates passed | |
| QG2 | Deployment plan reviewed and approved | |
| QG3 | Rollback plan documented and tested | |
| QG4 | Deployment executed successfully | |
| QG5 | Post-deployment verification passed | |
| QG6 | Monitoring and alerting active | |
| QG7 | Stakeholders notified of completion | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Deployment strategy? | Blue-Green / Canary / Rolling / Recreate | Risk tolerance, downtime tolerance, complexity |
| DP2: Proceed or rollback? | Continue / Rollback | Verification results, error rates, business impact |
| DP3: Additional monitoring needed? | Current sufficient / Add monitoring | Coverage gaps, risk areas |
| DP4: Deploy to production? | Proceed to production / Stay in staging | Staging verification results, business readiness |

## Common Anti-Patterns

1. **Deploying without rollback plan**: No plan for when things go wrong
2. **Deploying at end of day**: When fresh support is unavailable
3. **No post-deployment verification**: Assuming success without checking
4. **Skipping staging**: Deploying directly to production
5. **Big bang deployments**: Deploying everything at once

## Output Artifact

Use template: `templates/deployment-plan.md`

## References

- Related workflow: `05-test.md` (pre-deployment verification)
- Related workflow: `08-modernize.md` (infrastructure modernization)
- Related capability: `capabilities/deployment.md`
- Anti-patterns: `ANTI-PATTERNS.md` (Deployment section)
