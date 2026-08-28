# Workflow 02: Analysis

## Phase Overview

The Analysis phase evaluates requirements, assesses feasibility, identifies risks, and defines constraints to establish a solid foundation for design and implementation.

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

### Step 5: Constraint Identification

**Actions**:
- Document technical constraints (technology stack, platforms)
- Document business constraints (budget, timeline, resources)
- Document regulatory constraints (compliance, legal)
- Document organizational constraints (policies, processes)
- Document environmental constraints (infrastructure, tools)
- Assess constraint impact on solution space

**Output**: Constraint document

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

### Step 7: Analysis Synthesis

**Actions**:
- Consolidate all analysis findings
- Create executive summary
- Document key findings and recommendations
- Note assumptions and limitations
- Define entry criteria for design phase
- Prepare handoff documentation

**Output**: Analysis report (using analysis-report template)

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

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Requirements complete? | Proceed to feasibility / Refine further | Coverage, clarity, stakeholder agreement |
| DP2: Project feasible? | Proceed to design / Recommend changes / Stop | Technical, economic, operational feasibility |
| DP3: Risks acceptable? | Proceed with mitigations / Re-evaluate scope | Risk scores, mitigation effectiveness |

## Output Artifact

Use template: `templates/analysis-report.md`

## References

- Related workflow: `01-research.md` (previous phase)
- Related workflow: `03-design.md` (next phase)
- Related capability: `capabilities/analysis.md`
