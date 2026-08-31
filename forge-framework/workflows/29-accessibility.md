# Workflow 29: Accessibility Audit

**Duration**: 4-16h | **Outputs**: Accessibility report, remediation plan, compliance status

## Trigger
- Accessibility audit (WCAG 2.1/2.2), compliance review
- Inclusive design review, VPAT creation

## Steps

### Step 1: Scope Definition
Define pages/features to audit. Identify target level (A, AA, AAA).
**Time**: 1-2h.

### Step 2: Automated Testing
Run automated tools (axe, WAVE, Lighthouse). Document issues.
**Time**: 2-4h.

### Step 3: Manual Testing
Keyboard navigation. Screen reader testing. Color contrast. Focus management.
**Time**: 2-6h.

### Step 4: User Testing
Test with users with disabilities. Gather feedback. Document findings.
**Time**: 2-4h.

### Step 5: Remediation Planning
Prioritize issues. Create remediation roadmap. Assign owners.
**Time**: 1-2h.

### Step 6: Reporting
Document findings, compliance status, remediation plan. Create VPAT if needed.
**Time**: 1-2h.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Scope defined |
| QG2 | Automated testing complete |
| QG3 | Manual testing complete |
| QG4 | User testing complete |
| QG5 | Remediation planned |
| QG6 | Report complete |

## Anti-Patterns

1. **Accessibility as afterthought** — Retrofitting
2. **Over-reliance on automation** — Tools miss context
3. **One-size-fits-all** — Same approach for all disabilities
4. **WCAG compliance theater** — Checkbox mentality

## Edge Cases

- Dynamic content: Screen reader updates
- Complex interactions: ARIA patterns
- Mobile accessibility: Touch targets
- Cognitive accessibility: Plain language

## Output
Use: `templates/accessibility-report.md` | Capability: `capabilities/accessibility.md`

## Anti-Patterns

1. **Ignoring stakeholders** — Not engaging key stakeholders
2. **One-way communication** — Not gathering feedback
3. **Scope creep** — Uncontrolled expansion
4. **No documentation** — Not documenting decisions

## Edge Cases

- Conflicting stakeholder needs → Facilitate prioritization
- No stakeholder availability → Use async communication
- Resistance to change → Provide training and support

## Output

Use: `templates/accessibility-report.md` | Capability: `capabilities/accessibility.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [03-design](workflows/03-design.md) | **Related** | To design accessible interfaces |
| [05-test](workflows/05-test.md) | **Related** | To test accessibility |
| [22-compliance](workflows/22-compliance.md) | **Related** | To ensure accessibility compliance |
