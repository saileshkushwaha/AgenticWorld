# Workflow 48: Infrastructure as Code

**Duration**: 4-16h | **Outputs**: IaC strategy, infrastructure templates, deployment pipeline, state management

## Trigger

- Infrastructure automation initiative, cloud migration
- Environment consistency improvement, deployment automation
- Infrastructure scalability, configuration drift prevention
- Multi-cloud strategy, disaster recovery automation

## Steps

### Step 1: Infrastructure Assessment
**Actions**: Assess current infrastructure, identify manual processes, document infrastructure topology, evaluate tooling, identify automation opportunities.
**Output**: Infrastructure assessment | **Time**: 2-4h | **Tools**: Discovery tools, diagramming tools
**Edge Cases**: Shadow IT → document all resources; legacy systems → plan migration; undocumented infrastructure → use discovery tools; multi-cloud → assess each cloud

### Step 2: IaC Strategy Definition
**Actions**: Define IaC vision and goals, select IaC tools, define coding standards, establish versioning strategy, create roadmap.
**Tools**: Terraform, Pulumi, AWS CloudFormation, Azure Resource Manager, Google Deployment Manager.
**Output**: IaC strategy | **Time**: 2-4h | **Tools**: Strategy templates, decision matrices
**Edge Cases**: Multi-cloud → use cloud-agnostic tools; existing investments → integrate with current tools; skill gaps → plan training; compliance requirements → add policy as code

### Step 3: Template Development
**Actions**: Develop infrastructure templates, implement modularity, create reusable components, document templates, test templates.
**Patterns**: Modules, stacks, environments, workspaces.
**Output**: Infrastructure templates | **Time**: 4-8h | **Tools**: IaC tools, testing frameworks
**Edge Cases**: Complex dependencies → use modules; environment differences → parameterize; sensitive data → use secrets management; large-scale infrastructure → use workspaces

### Step 4: State Management
**Actions**: Define state management strategy, configure remote state, implement state locking, establish backup procedures, document state management.
**Backend**: S3, Azure Storage, GCS, Terraform Cloud.
**Output**: State management configuration | **Time**: 1-2h | **Tools**: State management tools, version control
**Edge Cases**: Team collaboration → use remote state; state corruption → implement backup; state conflicts → use locking; large state → use state partitioning

### Step 5: Deployment Pipeline
**Actions**: Design deployment pipeline, implement plan/apply workflow, add approval gates, implement drift detection, create rollback procedures.
**Pipeline Stages**: Plan, Validate, Apply, Verify.
**Output**: Deployment pipeline | **Time**: 2-4h | **Tools**: CI/CD tools, policy tools
**Edge Cases**: Manual approvals → implement approval gates; drift detection → schedule regular checks; rollback procedures → automate rollback; multi-environment → use workspaces

### Step 6: Governance and Compliance
**Actions**: Implement policy as code, establish compliance checks, create audit trails, define access controls, document governance.
**Tools**: Open Policy Agent, Sentinel, AWS Config, Azure Policy.
**Output**: Governance framework | **Time**: 1-2h | **Tools**: Policy tools, audit tools
**Edge Cases**: Regulatory requirements → implement compliance policies; access controls → use RBAC; audit requirements → enable logging; multi-team → implement namespaces

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Infrastructure assessed |
| QG2 | IaC strategy defined |
| QG3 | Templates developed |
| QG4 | State management configured |
| QG5 | Deployment pipeline implemented |
| QG6 | Governance framework established |

## Anti-Patterns

1. **ClickOps** — Manual infrastructure changes outside IaC
2. **State file conflicts** — No state locking
3. **Monolithic templates** — No modularity
4. **Environment drift** — Inconsistent environments

## Edge Cases

- Existing infrastructure: Import into IaC
- Multi-cloud: Use cloud-agnostic tools
- Legacy systems: Plan incremental migration
- Compliance requirements: Implement policy as code

## Output

Use: `templates/iac-strategy.md` | Capability: `capabilities/iac.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [46-devops](workflows/46-devops.md) | **Related** | To implement DevOps practices |
| [07-deploy](workflows/07-deploy.md) | **Related** | To deploy infrastructure |
| [16-configuration](workflows/16-configuration.md) | **Related** | To configure infrastructure |
| [45-configuration-audit](workflows/45-configuration-audit.md) | **Related** | To audit infrastructure |