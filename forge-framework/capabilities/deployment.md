# Deployment Capability

## Definition

The ability to release software to target environments through planning, execution, and post-deployment verification.

## Scope

### In Scope
- Deployment planning
- Environment setup and configuration
- Deployment execution
- Post-deployment verification
- Rollback execution
- Monitoring and alerting setup
- Infrastructure as Code (IaC)

### Out of Scope
- Code implementation (see Implementation capability)
- Test execution (see Testing capability)
- Architecture design (see Design capability)

## Skills

### Planning
- Deployment strategy selection
- Rollback planning
- Communication planning
- Risk assessment
- Timeline creation
- Approval coordination

### Environment Management
- Infrastructure provisioning
- Configuration management
- Network and security setup
- Database setup
- Service configuration
- Environment verification

### Execution
- Deployment automation
- Blue-green deployment
- Canary deployment
- Rolling deployment
- Database migration
- Configuration deployment

### Verification
- Smoke testing
- Health check validation
- Performance verification
- Integration verification
- Monitoring verification

### Monitoring
- Metric collection setup
- Log aggregation configuration
- Alert configuration
- Dashboard creation
- On-call setup

## Inputs
- Deployment artifacts (code, configs)
- Deployment plan
- Environment specifications
- Rollback plan
- Monitoring requirements

## Outputs
- Deployment plan
- Configured environment
- Deployed application
- Verification report
- Monitoring dashboard
- Deployment report

## Quality Criteria
- All pre-deployment quality gates passed
- Deployment plan reviewed and approved
- Rollback plan documented and tested
- Deployment executed successfully
- Post-deployment verification passed
- Monitoring and alerting active

## Related Workflows
- `workflows/07-deploy.md` - Primary workflow
- `workflows/05-test.md` - Pre-deployment verification
- `workflows/08-modernize.md` - Infrastructure modernization

## Metrics
- Deployment frequency
- Deployment success rate
- Mean time to deploy (MTTD)
- Rollback rate
- Deployment-related incidents
- Time to recovery (TTR)
