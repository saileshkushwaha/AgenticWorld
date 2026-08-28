# Workflow 02: Analysis

## Phase Overview

The Analysis phase evaluates requirements, assesses feasibility, identifies risks, and defines constraints to establish a solid foundation for design and implementation.

**Estimated Duration**: 4-16 hours (depending on project size)
**Typical Outputs**: Requirements document, feasibility assessment, risk register, trade-off analysis

## Trigger Conditions

This workflow is triggered when:
- Requirements need to be analyzed and refined
- Feasibility of a project or feature needs assessment
- Risks need to be identified and evaluated
- Constraints need to be documented
- A business case needs to be evaluated
- Trade-offs between options need analysis

## Steps

### Step 1: Requirements Elicitation

**Actions**:
- Gather functional requirements (what the system should do)
- Gather non-functional requirements (quality attributes)
- Identify stakeholders and their needs
- Document user stories or use cases
- Prioritize requirements (MoSCoW: Must, Should, Could, Won't)
- Validate requirements with stakeholders

**Requirements types**:
- **Functional**: Features, behaviors, inputs/outputs
- **Performance**: Response time, throughput, resource usage
- **Security**: Authentication, authorization, data protection
- **Reliability**: Availability, fault tolerance, recovery
- **Usability**: Accessibility, user experience, learnability
- **Compliance**: Regulatory, legal, industry standards

**Output**: Requirements document

**Time Estimate**: 2-4 hours

**Tools**: Interviews, surveys, Jira, Confluence, user story mapping tools

**Example User Story**:
```
As a registered user,
I want to reset my password via email,
So that I can regain access if I forget my password.

Acceptance Criteria:
- User receives reset email within 1 minute
- Reset link expires after 24 hours
- New password must meet complexity requirements
- User is notified if email is not registered
```

**Edge Cases**:
- Stakeholders unavailable → Use asynchronous methods (surveys, documents)
- Conflicting stakeholder needs → Facilitate prioritization session
- Vague requirements → Use prototypes to elicit specifics
- Too many requirements → Apply MoSCoW prioritization

### Step 2: Requirements Analysis

**Actions**:
- Check requirements for completeness
- Check requirements for consistency (no conflicts)
- Check requirements for testability
- Check requirements for feasibility
- Identify ambiguous or vague requirements
- Refine and clarify requirements
- Create acceptance criteria

**Analysis techniques**:
- Requirements traceability matrix
- Dependency analysis
- Conflict resolution
- Prioritization validation

**Output**: Refined requirements with acceptance criteria

**Time Estimate**: 1-2 hours

**Tools**: Traceability matrix template, requirements management tools

**Example Traceability Matrix**:
```
| Req ID | Description | Source | Priority | Acceptance Criteria | Design Ref |
|--------|-------------|--------|----------|---------------------|------------|
| FR-01  | User login   | Stakeholder A | Must | Login succeeds with valid creds | Auth Module |
| NFR-01 | Response time | Performance spec | Should | < 200ms p95 | Architecture |
```

**Edge Cases**:
- Circular dependencies → Break cycle by introducing intermediate requirement
- Untestable requirement → Rewrite with measurable criteria
- Conflicting requirements → Facilitate stakeholder resolution

### Step 3: Feasibility Study

**Actions**:

**Technical Feasibility**:
- Assess technology readiness
- Evaluate integration complexity
- Identify technical constraints
- Assess team capability and capacity
- Evaluate infrastructure requirements

**Economic Feasibility**:
- Estimate development costs
- Estimate operational costs
- Project benefits and ROI
- Calculate total cost of ownership (TCO)
- Assess payback period

**Operational Feasibility**:
- Assess operational readiness
- Evaluate process changes required
- Identify training needs
- Assess organizational impact
- Evaluate timeline feasibility

**Output**: Feasibility assessment report

**Time Estimate**: 2-4 hours

**Tools**: Spreadsheet for cost estimation, architecture assessment tools

**Example Cost Estimate**:
```
Development Costs:
- Team: 5 engineers × 3 months × $15K/month = $225K
- Infrastructure: $2K/month × 12 = $24K
- Tools and licenses: $10K
- Total Development: $259K

Operational Costs (annual):
- Infrastructure: $24K
- Support: $60K
- Maintenance: $48K
- Total Annual Operational: $132K

Projected Benefits (annual):
- Revenue increase: $200K
- Cost savings: $80K
- Total Annual Benefits: $280K

ROI: ($280K - $132K) / $259K = 57% first year
Payback Period: ~11 months
```

**Edge Cases**:
- Technical infeasibility → Propose alternative approaches or scope reduction
- Negative ROI → Recommend against project or identify value drivers
- Operational unreadiness → Recommend phased approach with training

### Step 4: Risk Assessment

**Actions**:
- Identify potential risks (technical, operational, business)
- Categorize risks by type
- Assess probability of each risk
- Assess impact of each risk
- Calculate risk score (probability x impact)
- Prioritize risks
- Develop mitigation strategies
- Identify contingency plans

**Risk categories**:
- **Technical**: Technology failure, integration issues, performance
- **Schedule**: Delays, dependencies, resource constraints
- **Cost**: Budget overruns, scope creep, unexpected expenses
- **Operational**: Process failures, skill gaps, tool issues
- **External**: Market changes, regulatory changes, vendor issues

**Output**: Risk register with mitigation strategies

**Time Estimate**: 1-2 hours

**Tools**: Risk register template, risk matrix tools

**Example Risk Register**:
```
| ID | Risk | Category | Prob | Impact | Score | Mitigation |
|----|------|----------|------|--------|-------|------------|
| R001 | Key person leaves | Operational | M | H | 9 | Cross-train, document knowledge |
| R002 | Integration fails | Technical | M | H | 9 | Early integration testing, fallback plan |
| R003 | Scope creep | Schedule | H | M | 8 | Change control process, MoSCoW |
| R004 | Vendor price increase | Cost | L | M | 4 | Multi-year contract, alternatives |
```

**Edge Cases**:
- Too many risks → Focus on top 10 by score
- Low-probability high-impact risks → Include in contingency planning
- Interdependent risks → Assess combined impact

### Step 5: Constraint Identification

**Actions**:
- Document technical constraints (technology stack, platforms)
- Document business constraints (budget, timeline, resources)
- Document regulatory constraints (compliance, legal)
- Document organizational constraints (policies, processes)
- Document environmental constraints (infrastructure, tools)
- Assess constraint impact on solution space

**Output**: Constraint document

**Time Estimate**: 30-60 minutes

**Tools**: Constraint matrix, stakeholder interviews

**Example Constraints**:
```
Technical:
- Must use existing PostgreSQL database
- Must support IE11 (legacy requirement)
- Must integrate with legacy SOAP API

Business:
- Budget capped at $300K
- Must launch before Q4
- Must support 10K users at launch

Regulatory:
- Must comply with GDPR
- Must maintain SOC2 certification
```

**Edge Cases**:
- Over-constrained → Identify which constraints are flexible
- Conflicting constraints → Facilitate stakeholder prioritization
- Hidden constraints → Probe stakeholders for unstated limitations

### Step 6: Trade-off Analysis

**Actions**:
- Identify decision points and options
- Define evaluation criteria
- Weight criteria by importance
- Score options against criteria
- Calculate weighted scores
- Identify trade-offs for each option
- Recommend optimal approach with rationale

**Analysis frameworks**:
- SWOT analysis (Strengths, Weaknesses, Opportunities, Threats)
- Cost-benefit analysis
- Decision matrix
- Pareto analysis

**Output**: Trade-off analysis document

**Time Estimate**: 1-2 hours

**Tools**: Decision matrix template, spreadsheet

**Example Trade-off Analysis**:
```
Decision: Build vs Buy for authentication

| Criteria (Weight) | Build | Buy (Auth0) |
|-------------------|-------|-------------|
| Time to market (25%) | 2 | 5 |
| Customization (20%) | 5 | 3 |
| Cost over 3 years (20%) | 3 | 4 |
| Maintenance burden (15%) | 2 | 5 |
| Security (20%) | 3 | 5 |
| Weighted Total | 2.95 | 4.45 |

Recommendation: Buy (Auth0) - faster to market, better security,
lower maintenance, acceptable cost premium
```

**Edge Cases**:
- Options score equally → Add criteria or conduct PoC
- Stakeholder disagrees with analysis → Document dissent, provide data
- New options emerge → Re-run analysis with new options

### Step 7: Analysis Synthesis

**Actions**:
- Consolidate all analysis findings
- Create executive summary
- Document key findings and recommendations
- Note assumptions and limitations
- Define entry criteria for design phase
- Prepare handoff documentation

**Output**: Analysis report (using analysis-report template)

**Time Estimate**: 1-2 hours

**Tools**: Analysis report template, presentation tools

**Edge Cases**:
- Analysis inconclusive → Recommend further investigation
- Stakeholder disagreement → Document areas of agreement and disagreement
- Scope changed → Update analysis to reflect new scope

## Quality Gates

| Gate | Criteria | Check |
|------|----------|-------|
| QG1 | All requirement types addressed | |
| QG2 | Requirements are testable and unambiguous | |
| QG3 | Feasibility assessed across all dimensions | |
| QG4 | Risks identified with mitigation strategies | |
| QG5 | Constraints documented and assessed | |
| QG6 | Trade-offs analyzed with clear rationale | |
| QG7 | Stakeholder validation obtained | |
| QG8 | Report follows template format | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Requirements complete? | Proceed to feasibility / Refine further | Coverage, clarity, stakeholder agreement |
| DP2: Project feasible? | Proceed to design / Recommend changes / Stop | Technical, economic, operational feasibility |
| DP3: Risks acceptable? | Proceed with mitigations / Re-evaluate scope | Risk scores, mitigation effectiveness |
| DP4: Constraints too tight? | Proceed within constraints / Negotiate relaxation | Impact on solution quality, stakeholder flexibility |

## Common Anti-Patterns

1. **Vague requirements**: Accepting ambiguous requirements without clarification
2. **Ignoring non-functional requirements**: Focusing only on features
3. **Optimistic risk assessment**: Underestimating probability or impact
4. **Analysis paralysis**: Spending too long without making decisions
5. **No stakeholder validation**: Not confirming analysis with stakeholders

## Output Artifact

Use template: `templates/analysis-report.md`

## References

- Related workflow: `01-research.md` (previous phase)
- Related workflow: `03-design.md` (next phase)
- Related capability: `capabilities/analysis.md`
- Anti-patterns: `ANTI-PATTERNS.md` (Analysis section)
