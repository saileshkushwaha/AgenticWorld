# Workflow 07: Deployment

## Phase Overview

The Deployment phase releases software to target environments through environment setup, deployment execution, and post-deployment verification.

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

## Output Artifact

Use template: `templates/deployment-plan.md`

## References
- Related workflow: `05-test.md` (pre-deployment verification)
- Related workflow: `08-modernize.md` (infrastructure modernization)
- Related capability: `capabilities/deployment.md`
