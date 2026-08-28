# Workflow 09: Communication

## Phase Overview

The Communication phase creates reports, documentation, and stakeholder updates to ensure clear information flow throughout the SDLC.

**Estimated Duration**: 30 minutes - 4 hours (depending on scope)
**Typical Outputs**: Status reports, technical reports, presentations, decision documents

## Trigger Conditions

This workflow is triggered when:
- Status updates are needed
- Technical reports must be created
- Documentation needs to be written
- Stakeholder presentations are required
- Decisions need to be communicated
- Knowledge transfer is needed
- Phase transitions require handoff documentation

## Steps

### Step 1: Audience Analysis

**Actions**:
- Identify the target audience
- Determine audience technical level
- Understand audience needs and concerns
- Determine appropriate level of detail
- Choose appropriate format and medium
- Identify key messages for the audience
- Determine timing and frequency

**Audience types**:
- **Technical peers**: Deep technical detail, code examples
- **Engineering managers**: Technical summary, risks, timeline
- **Product managers**: Business impact, features, trade-offs
- **Executives**: High-level summary, ROI, strategic alignment
- **Stakeholders**: Impact on their area, timeline, needs
- **Users**: How-to, benefits, changes

**Output**: Audience analysis document

**Time Estimate**: 15-30 minutes

**Tools**: Stakeholder mapping, audience personas, communication plan template

**Example Audience Analysis**:
```
Audience: Executive team (CTO, CEO, CFO)
Technical Level: Low to medium
Key Concerns: Cost, timeline, risk, business impact
Preferred Format: 1-page summary with key metrics
Key Messages:
- Migration will reduce operational costs by 30%
- Timeline: 6 months with monthly milestones
- Risk: Medium, mitigated by incremental approach
- ROI: 18 months payback period
```

**Edge Cases**:
- Multiple audiences with different needs → Create versions for each
- Conflicting stakeholder interests → Address concerns proactively
- Unknown audience → Default to balanced technical/business level

### Step 2: Content Planning

**Actions**:
- Define the purpose of the communication
- Identify key messages
- Determine required information
- Gather supporting data and evidence
- Structure the content logically
- Plan visuals (diagrams, charts, tables)
- Define the call to action (if any)

**Content structure**:
- Executive summary (key points)
- Background (context and motivation)
- Details (main content)
- Decisions (what was decided and why)
- Next steps (what happens next)
- Appendix (supporting details)

**Output**: Content outline

**Time Estimate**: 15-30 minutes

**Tools**: Mind mapping, outline tools, content templates

**Example Content Outline**:
```
Purpose: Communicate architecture decision to use microservices

Key Messages:
1. Microservices chosen for scalability and team autonomy
2. Migration will be incremental over 6 months
3. No disruption to current operations during migration

Structure:
1. Executive Summary (3 bullets)
2. Background (current monolith limitations)
3. Decision (microservices with API gateway)
4. Rationale (scalability, team structure, technology fit)
5. Migration Plan (phased approach)
6. Risks and Mitigations
7. Next Steps (approval needed, Phase 1 kickoff)

Visuals:
- Current architecture diagram
- Target architecture diagram
- Migration timeline Gantt chart
```

**Edge Cases**:
- Too much content → Prioritize key messages, move details to appendix
- Sensitive information → Consider audience clearance, redact as needed
- Controversial decisions → Present multiple perspectives, document rationale

### Step 3: Report Writing

**Actions**:
- Write clear, concise content
- Use appropriate technical depth
- Support claims with evidence
- Use visuals to aid understanding
- Follow the relevant template
- Include all required sections
- Proofread and edit

**Writing principles**:
- Lead with the key message
- Use active voice
- Be specific, not vague
- Use examples to illustrate
- Keep paragraphs short
- Use headers and lists for scannability
- Define acronyms on first use

**Output**: Draft report/document

**Time Estimate**: 30-120 minutes

**Tools**: Markdown editors, Google Docs, Notion, Confluence

**Example Executive Summary**:
```
Architecture Decision: Adopt Microservices for E-commerce Platform

After evaluating monolithic, microservices, and serverless architectures,
we recommend adopting a microservices architecture for the following reasons:

1. Scalability: Independent scaling of high-traffic services (product catalog,
   order processing) will reduce infrastructure costs by an estimated 30%.

2. Team Autonomy: Microservices align with our team structure, enabling
   independent development and deployment.

3. Technology Flexibility: Each service can use the best technology for its
   specific requirements.

Migration will follow an incremental approach over 6 months, with no
disruption to current operations. Approval is requested to proceed with
Phase 1 (User Service extraction).
```

**Edge Cases**:
- Technical topic for non-technical audience → Use analogies, avoid jargon
- Bad news to communicate → Be direct, focus on solutions
- Complex decision → Break into smaller, digestible sections

### Step 4: Visual Aids

**Actions**:
- Create architecture diagrams
- Design flow charts
- Build comparison tables
- Create timelines
- Design dashboards
- Create screenshots with annotations
- Build decision matrices

**Visual types**:
- **Architecture diagrams**: System structure and components
- **Sequence diagrams**: Interaction flows
- **Flowcharts**: Process flows
- **Tables**: Comparisons and data
- **Charts**: Metrics and trends
- **Timelines**: Schedules and milestones

**Output**: Visual aids

**Time Estimate**: 15-60 minutes

**Tools**: draw.io, Lucidchart, Miro, PlantUML, Excalidraw

**Edge Cases**:
- Complex system → Use multiple diagrams at different abstraction levels
- Data-heavy content → Use charts instead of tables for trends
- Process explanation → Use flowcharts with clear decision points

### Step 5: Review and Refinement

**Actions**:
- Self-review for accuracy and completeness
- Peer review for technical accuracy
- Stakeholder review for alignment
- Check for clarity and readability
- Verify all claims are supported
- Ensure format is correct
- Incorporate feedback

**Review checklist**:
- [ ] Content accurate and complete
- [ ] Appropriate technical depth
- [ ] Key messages clear
- [ ] Visuals clear and labeled
- [ ] Format follows template
- [ ] No spelling or grammar errors
- [ ] Call to action clear

**Output**: Reviewed document

**Time Estimate**: 15-30 minutes

**Tools**: Grammar tools (Grammarly), peer review, stakeholder feedback

**Edge Cases**:
- Conflicting feedback → Facilitate discussion, find consensus
- Tight deadline → Prioritize critical fixes, defer nice-to-haves
- Reviewer unavailable → Use asynchronous review, set deadline

### Step 6: Delivery

**Actions**:
- Choose delivery medium (email, meeting, document)
- Distribute to intended audience
- Present key points (if meeting)
- Allow time for questions
- Document decisions and feedback
- Follow up on action items
- Archive for future reference

**Delivery methods**:
- **Email**: Status updates, brief reports
- **Meetings**: Presentations, discussions
- **Documentation**: Wikis, shared documents
- **Dashboards**: Real-time metrics
- **Pull requests**: Code review comments

**Output**: Delivered communication

**Time Estimate**: 15-60 minutes

**Tools**: Email, Slack, Teams, Zoom, Confluence, SharePoint

**Edge Cases**:
- Large audience → Use meeting recording, follow up with written summary
- Distributed team → Record presentation, share asynchronously
- Urgent communication → Use immediate channels (Slack, phone)

### Step 7: Feedback and Iteration

**Actions**:
- Collect feedback from audience
- Assess understanding and clarity
- Identify areas for improvement
- Update communication approach
- Document lessons learned
- Iterate on future communications

**Output**: Communication report

**Time Estimate**: 15-30 minutes

**Tools**: Surveys, feedback forms, analytics (for written content)

**Edge Cases**:
- No feedback received → Proactively ask specific questions
- Negative feedback → Address concerns, improve approach
- Misunderstanding detected → Clarify immediately, update document

## Quality Gates

| Gate | Criteria | Check |
|------|----------|-------|
| QG1 | Audience identified and analyzed | |
| QG2 | Content planned and structured | |
| QG3 | Report written following template | |
| QG4 | Visual aids created where needed | |
| QG5 | Content reviewed and refined | |
| QG6 | Delivered to intended audience | |
| QG7 | Feedback collected and incorporated | |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Communication format? | Report / Presentation / Email / Dashboard | Audience, complexity, urgency |
| DP2: Technical depth? | High-level / Balanced / Detailed | Audience technical level, purpose |
| DP3: Follow-up needed? | Yes / No | Questions raised, action items identified |
| DP4: Urgency level? | Immediate / Standard / Low | Business impact, stakeholder needs |

## Common Anti-Patterns

1. **No stakeholder updates**: Failing to communicate progress and risks
2. **Technical jargon with non-technical stakeholders**: Confusing the audience
3. **Hiding bad news**: Delaying communication of problems
4. **No call to action**: Audience doesn't know what to do next
5. **One-size-fits-all**: Using same content for all audiences

## Output Artifact

Use the appropriate template based on communication type:
- `templates/research-report.md` for research findings
- `templates/analysis-report.md` for analysis results
- `templates/design-document.md` for design documentation
- `templates/implementation-plan.md` for implementation status
- `templates/test-plan.md` for test results
- `templates/debug-report.md` for debug findings
- `templates/deployment-plan.md` for deployment status
- `templates/modernization-plan.md` for modernization progress

## References

- All workflows (communication supports all phases)
- Anti-patterns: `ANTI-PATTERNS.md` (Communication section)
