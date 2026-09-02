# Workflow 40: Risk Assessment

**Duration**: 4-16h | **Outputs**: Risk register, risk matrix, treatment plans, monitoring framework

## Trigger

- New project initiation, major system changes
- Security incidents, compliance violations
- Regular risk review cycles, audit findings
- Third-party integrations, technology migrations

## Steps

### Step 1: Risk Identification
**Actions**: Conduct brainstorming sessions, use checklists, perform SWOT analysis, apply fault tree analysis, review historical data, consult subject matter experts, document all potential risks in risk register.
**Techniques**: Brainstorming, checklists, SWOT, FTA, Delphi technique, HAZID, HAZOP.
**Output**: Initial risk register | **Time**: 2-4h | **Tools**: Risk register template, brainstorming tools, checklists
**Edge Cases**: No historical data → use expert judgment; new technology → use analogous estimation; complex systems → use system thinking; stakeholder unavailability → use asynchronous methods

### Step 2: Risk Analysis
**Actions**: Assess likelihood and impact for each risk, determine risk root causes, identify risk interdependencies, apply qualitative and quantitative analysis methods, document analysis results.
**Technitative Methods**: Qualitative (probability impact matrix), Quantitative (Monte Carlo simulation, decision tree analysis, sensitivity analysis, EMV).
**Output**: Analyzed risk register | **Time**: 2-4h | **Tools**: Risk matrix, simulation software, spreadsheets
**Edge Cases**: Limited data → use expert elicitation; complex interdependencies → use Bayesian networks; rare events → use extreme value theory; rapidly changing risks → use real-time data

### Step 3: Risk Evaluation
**Actions**: Compare risk analysis results against risk appetite and tolerance, prioritize risks for treatment, determine risk acceptance criteria, document evaluation decisions.
**Criteria**: Risk appetite statements, risk tolerance thresholds, strategic objectives, regulatory requirements.
**Output**: Prioritized risk register | **Time**: 1-2h | **Tools**: Risk heat maps, prioritization matrices
**Edge Cases**: Conflicting stakeholder views → facilitate risk workshops; unclear appetite → escalate to board; borderline risks → use sensitivity analysis; new risk categories → develop criteria

### Step 4: Risk Treatment Planning
**Actions**: Develop treatment strategies for high-priority risks, define mitigation measures, assign risk owners, establish timelines, estimate treatment costs, document treatment plans.
**Strategies**: Avoid (eliminate), Mitigate (reduce), Transfer (share), Accept (monitor).
**Output**: Risk treatment plans | **Time**: 2-4h | **Tools**: Treatment plan templates, cost estimation tools
**Edge Cases**: Cost-prohibitive treatment → accept with monitoring; shared risks → coordinate with partners; residual risks → document acceptance; treatment conflicts → prioritize based on risk score

### Step 5: Risk Monitoring Framework
**Actions**: Define key risk indicators (KRIs), establish monitoring frequency, create reporting templates, assign monitoring responsibilities, set escalation procedures.
**KRIs**: Schedule variance, cost variance, defect density, team turnover, stakeholder satisfaction.
**Output**: Risk monitoring framework | **Time**: 1-2h | **Tools**: KRI dashboards, reporting templates
**Edge Cases**: Leading indicators → use predictive analytics; lagging indicators → use trend analysis; qualitative risks → use expert judgment; automated monitoring → use real-time dashboards

### Step 6: Reporting and Communication
**Actions**: Document risk assessment results, prepare executive summary, communicate risks to stakeholders, present treatment plans, obtain approval for treatment plans.
**Audience**: Executive leadership, project team, steering committee, external stakeholders.
**Output**: Risk assessment report | **Time**: 1-2h | **Tools**: Report templates, presentation tools
**Edge Cases**: Sensitive risks → use confidential reporting; technical risks → use visual aids; executive audience → focus on impact; distributed teams → use virtual presentations

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Risks systematically identified |
| QG2 | Risk analysis uses appropriate methods |
| QG3 | Risk evaluation is consistent |
| QG4 | Risk treatment plans are actionable |
| QG5 | Risk monitoring framework defined |
| QG6 | Report follows template |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Analysis depth? | Qualitative / Quantitative | Data availability, complexity, stakeholder needs |
| DP2: Treatment strategy? | Avoid / Mitigate / Transfer / Accept | Cost-benefit, risk appetite, feasibility |
| DP3: Monitoring frequency? | Real-time / Daily / Weekly / Monthly | Risk volatility, resource availability |
| DP4: Reporting format? | Dashboard / Report / Presentation | Audience, complexity, urgency |

## Anti-Patterns

1. **Risk blindness** — Ignoring obvious risks
2. **Risk paralysis** — Over-analyzing without action
3. **Risk dumping** — Identifying risks without treatment
4. **Risk amnesia** — Not monitoring identified risks
5. **Risk theater** — Performing risk management for show

## Edge Cases

- Emerging risks: Use scenario analysis
- Interconnected risks: Use system thinking
- Low-probability high-impact risks: Use stress testing
- Rapidly changing risks: Use continuous monitoring
- No historical data: Use expert judgment and analogous estimation
- Conflicting stakeholder views: Facilitate risk workshops

## Output

Use: `templates/risk-assessment.md` | Capability: `capabilities/risk-assessment.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [10-security](workflows/10-security.md) | **Related** | To assess security risks |
| [21-disaster-recovery](workflows/21-disaster-recovery.md) | **Related** | To plan for disaster risks |
| [41-internal-audit](workflows/41-internal-audit.md) | **Related** | To audit risk management |

## Output

Use: `templates/risk-assessment.md` | Capability: `capabilities/risk-assessment.md`
