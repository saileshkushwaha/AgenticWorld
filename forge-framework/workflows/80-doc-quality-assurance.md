# Workflow 80: Documentation Quality Assurance

**Duration**: 4-8h | **Outputs**: Quality report, peer review feedback, improvement recommendations, approval documentation

## Trigger

- Documentation ready for quality review
- New or updated technical documentation
- Documentation compliance audit required
- Peer review needed for accuracy
- Pre-publication quality gate

## Steps

### Step 1: Documentation Quality Review
**Actions**: Verify documentation meets quality standards, check completeness, accuracy, clarity, and consistency.
**Tools**: Quality check scripts, spell checkers, grammar checkers, link validators
**Output**: Quality review report | **Time**: 1-2h | **Tools**: Documentation quality tools
**Edge Cases**: Missing sections → flag for completion; unclear content → request clarification; outdated info → update before review

### Step 2: Peer Review
**Actions**: Assign subject matter experts, gather feedback, document review findings, track revision requests.
**Output**: Peer review feedback | **Time**: 2-4h | **Tools**: Review platforms, collaboration tools
**Edge Cases**: No available SME → schedule for later; conflicting feedback → reconcile with author; urgent deadline → prioritize critical feedback

### Step 3: Quality Metrics Collection
**Actions**: Measure quality dimensions, calculate scores, compare against benchmarks, identify trends.
**Output**: Quality metrics dashboard | **Time**: 1h | **Tools**: Metrics tools, analytics platforms
**Edge Cases**: Insufficient data → collect baseline; benchmarks not applicable → define custom targets; metrics declining → investigate causes

### Step 4: Improvement Implementation
**Actions**: Apply feedback, implement enhancements, update documentation, re-verify quality.
**Output**: Updated documentation | **Time**: 2-4h | **Tools**: Documentation tools, version control
**Edge Cases**: Major changes needed → extend timeline; conflicting improvements → prioritize by impact; no time for improvements → defer to next cycle

### Step 5: Final Quality Gate
**Actions**: Verify all issues resolved, confirm quality standards met, approve for publication, schedule next review.
**Output**: Approval documentation | **Time**: 30 min | **Tools**: Approval workflows, notification systems
**Edge Cases**: Issues remain unresolved → do not approve; stakeholder pressure → document rationale for conditional approval; quality standards changed → re-verify against current standards

## Quality Standards

| Dimension | Target | Measurement |
|-----------|--------|-------------|
| Completeness | 100% | Section checklist |
| Accuracy | 99% | Fact verification |
| Readability | Grade 8-10 | Flesch Reading Ease |
| Consistency | 100% | Style guide compliance |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Review depth? | Full / Partial / Automated | Documentation criticality, time available |
| DP2: Peer reviewer count? | 1 / 2 / 3+ | Topic complexity, risk level |
| DP3: Quality threshold? | 80% / 90% / 95% | Documentation type, audience |

## Anti-Patterns

1. **Skip review for "simple" docs** — All documentation needs review
2. **Automated checks only** — Human review adds critical context
3. **One-and-done quality** — Quality is ongoing, not one-time
4. **Ignore feedback** — Peer review exists to improve quality

## Edge Cases

- No subject matter expert available: Use cross-functional review or defer
- Documentation is outdated: Update before review, not after
- Urgent publication needed: Conduct abbreviated review, document rationale
- Conflicting feedback: Reconcile with documentation author and stakeholders

## Output

Use: `templates/doc-quality-scorecard.md` | Capability: `capabilities/doc-quality-assurance.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [75-autodoc-generate](workflows/75-autodoc-generate.md) | **Related** | Generate documentation before quality review |
| [76-doc-quality-scorecard](workflows/76-doc-quality-scorecard.md) | **Related** | Score documentation quality after review |
| [13-code-review](workflows/13-code-review.md) | **Parallel** | Review code alongside documentation |
| [15-documentation](workflows/15-documentation.md) | **Parent** | Overall documentation workflow |