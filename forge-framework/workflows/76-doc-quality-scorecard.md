# Workflow 76: Documentation Quality Scorecard

**Duration**: 1-3h | **Outputs**: Documentation quality report, scorecard, improvement recommendations

## Trigger

- Documentation quality assessment needed
- Pre-release documentation review
- Documentation improvement initiative
- Compliance with documentation standards
- User feedback indicating documentation issues

## Steps

### Step 1: Define Evaluation Criteria
Establish documentation quality dimensions and scoring rubric. Select appropriate evaluation framework (e.g., DOCUMENT framework, Diataxis, or custom). Define weighting for each dimension based on audience and use case.
**Time**: 15-30 min | **Tools**: Evaluation frameworks, scoring templates
**Edge Cases**: Multiple audiences → create weighted criteria; regulatory requirements → include compliance checks; legacy docs → establish baseline first

### Step 2: Content Collection & Preparation
Gather documentation to be evaluated. Organize by section, module, or user journey. Prepare evaluation environment with access to all documentation formats (HTML, PDF, Markdown, etc.). Set up tools for automated checks where possible.
**Time**: 15-30 min | **Tools**: Documentation repositories, access controls
**Edge Cases**: Distributed documentation → consolidate access; version differences → evaluate specific version; internal/external split → evaluate both separately

### Step 3: Automated Quality Checks
Run automated checks for measurable quality attributes:
- Link validity (broken links, anchors)
- File existence and accessibility
- Basic formatting consistency (heading levels, list formatting)
- Code example syntax validation
- Spell checking and grammar basics
- Word count, reading level estimates
- API coverage vs source code (if applicable)
**Time**: 30-60 min | **Tools**: Link checkers, linters, spell checkers, coverage tools
**Edge Cases**: False positives → create allowlists; tool limitations → supplement with manual checks; large docs → use sampling or batch processing

### Step 4: Manual Quality Evaluation
Conduct manual evaluation using rubric for qualitative attributes:
- Readability and clarity
- Completeness of coverage
- Accuracy and correctness
- Consistency of style and terminology
- Effectiveness of examples and tutorials
- Navigation and information architecture
- Accessibility compliance (if applicable)
**Time**: 30-60 min | **Tools**: Evaluation rubrics, comment tools
**Edge Cases**: Subjective disagreements → use multiple reviewers and average scores; bias → use blind evaluation where possible; fatigue → limit session length

### Step 5: Scorecard Generation & Analysis
Calculate scores for each dimension and overall quality score. Identify strengths, weaknesses, and patterns. Benchmark against previous evaluations or industry standards if available. Prioritize improvement areas based on impact and effort.
**Time**: 15-30 min | **Tools**: Spreadsheet, scoring templates, visualization tools
**Edge Cases**: Conflicting metrics → use weighted averaging; missing data → use imputation or flag; score interpretation → provide context and benchmarks

### Step 6: Reporting & Improvement Planning
Generate documentation quality report with scores, findings, and specific improvement recommendations. Create actionable roadmap with prioritized items, effort estimates, and success metrics. Share with documentation owners and stakeholders.
**Time**: 15-30 min | **Tools**: Reporting templates, presentation tools
**Edge Cases**: Low scores → focus on quick wins first; resistance → emphasize user impact; resource constraints → phase improvements

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Evaluation criteria defined and documented |
| QG2 | Documentation collected and prepared for evaluation |
| QG3 | Automated quality checks completed |
| QG4 | Manual quality evaluation completed |
| QG5 | Scorecard generated with scores and recommendations |
| QG6 | Quality report and improvement plan created |

## Anti-Patterns

1. **Perfectionism trap** — Aiming for 100% score without considering diminishing returns
2. **Checklist compliance** — Focusing on scores without improving actual usability
3. **Ignoring context** — Applying same criteria to reference docs and tutorials
4. **No baseline comparison** — Evaluating in isolation without tracking improvement
5. **Over-reliance on automation** — Missing qualitative aspects that require human judgment

## Edge Cases

- Empty/minimal documentation → Start with baseline establishment
- Contradictory reviewer feedback → Use facilitation and consensus building
- Technical complexity → Involve subject matter experts in evaluation
- Legal/compliance requirements → Include regulatory expert in evaluation
- Rapidly changing content → Evaluate stable versions or use sampling

## Output

Use: `templates/doc-quality-scorecard.md` | Capability: `capabilities/documentation-quality.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [15-documentation](workflows/15-documentation.md) | **Complementary** | For manual documentation creation/enhancement |
| [75-autodoc-generate](workflows/75-autodoc-generate.md) | **Related** | To assess quality of generated documentation |
| [09-communication](workflows/09-communication.md) | **Related** | To communicate quality findings |
| [27-knowledge](workflows/27-knowledge.md) | **Related** | To integrate with knowledge base quality |
| [42-quality-audit](workflows/42-quality-audit.md) | **Related** | As part of broader quality audit program |