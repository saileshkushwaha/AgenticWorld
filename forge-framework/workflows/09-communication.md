# Workflow 09: Communication

## Phase Overview

The Communication phase creates reports, documentation, and stakeholder updates to ensure clear information flow throughout the SDLC.

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

### Step 7: Feedback and Iteration

**Actions**:
- Collect feedback from audience
- Assess understanding and clarity
- Identify areas for improvement
- Update communication approach
- Document lessons learned
- Iterate on future communications

**Output**: Communication report

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
