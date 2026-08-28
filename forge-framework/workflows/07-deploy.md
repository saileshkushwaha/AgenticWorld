# Workflow 07: Deployment

**Duration**: 1-4h | **Outputs**: Deployment plan, verification report, deployment report

## Trigger

- New release ready, hotfix needed, infrastructure changes, configuration rollout, rollback needed, environment provisioning

## Steps

### Step 1: Pre-Deployment Planning
Define scope, identify environments, define strategy, create rollback plan, schedule window, identify stakeholders, obtain approvals, verify quality gates.
**Strategies**: Blue-Green, Canary, Rolling, Recreate, Shadow
**Time**: 30-60 min. **Edge Cases**: Window conflicts → coordinate; no approval → delay/escalate; gates not passed → fix

### Step 2: Environment Setup
Provision infrastructure, configure network/security, set up databases, configure monitoring, set up load balancers/DNS, verify health, document config.
**IaC**: Terraform, CloudFormation, Pulumi — version control, automate, reproduce
**Time**: 30-120 min. **Edge Cases**: Provisioning fails → fix templates; drift → reconcile; limits → quota increase

### Step 3: Deployment Execution
Execute per strategy, monitor progress, verify steps, watch errors, monitor health, inform stakeholders, document steps.
**Time**: 15-60 min. **Edge Cases**: Health check fails → pause/rollback; migration fails → rollback/retry; partial → complete/rollback

### Step 4: Post-Deployment Verification
Smoke tests, verify user journeys, check health, verify integrations, confirm data integrity, check error rates, validate performance, verify monitoring.
**Time**: 15-30 min. **Edge Cases**: Smoke fails → rollback; performance → investigate/rollback; integration → fallback

### Step 5: Rollback Planning
Define triggers, document steps, test procedure, ensure artifacts available, define authority, set time limits, communicate.
**Triggers**: Critical broken, performance threshold, error rate threshold, data corruption, security
**Time**: 15-30 min. **Edge Cases**: Rollback fails → backup plan; data migration → reversal plan; schema → backward compat

### Step 6: Monitoring and Alerting
Set up monitoring, configure logs, define thresholds, set up dashboards, configure on-call, define escalation, verify.
**Dimensions**: Availability, Performance, Business, Infrastructure, Security
**Time**: 15-30 min. **Edge Cases**: Alert fatigue → tune; missing metrics → add; false positives → adjust

### Step 7: Deployment Reporting
Document details, record timeline, note issues, document lessons, update runbooks, communicate, archive.
**Time**: 15-30 min. **Edge Cases**: Issues → document; rollback → reason/lessons

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | All pre-deployment quality gates passed |
| QG2 | Deployment plan reviewed and approved |
| QG3 | Rollback plan documented and tested |
| QG4 | Deployment executed successfully |
| QG5 | Post-deployment verification passed |
| QG6 | Monitoring and alerting active |
| QG7 | Stakeholders notified |

## Anti-Patterns

1. **No rollback plan** — No failure plan
2. **End of day deploy** — No support available
3. **No verification** — Assuming success
4. **Skipping staging** — Direct to prod
5. **Big bang** — Everything at once

## Output

Use: `templates/deployment-plan.md` | Prev: `05-test.md` | Next: `08-modernize.md` | Capability: `capabilities/deployment.md`
