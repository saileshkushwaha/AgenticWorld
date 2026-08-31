# Workflow 26: Change Management

**Duration**: 2-8h | **Outputs**: Change request, impact assessment, approval documentation

## Trigger
- Change request, feature request, scope change
- Process improvement, policy update

## Steps

### Step 1: Change Request
Document change (what, why, who). Submit for review.
**Time**: 30-60 min.

### Step 2: Impact Assessment
Assess technical impact. Assess schedule impact. Assess cost impact.
**Time**: 1-2h.

### Step 3: Risk Assessment
Identify risks of change. Identify risks of not changing. Define mitigations.
**Time**: 1-2h.

### Step 4: Approval Process
Present to change board. Address concerns. Get approval/rejection.
**Time**: 1-2h.

### Step 5: Implementation Planning
Plan implementation. Define rollback. Communicate to stakeholders.
**Time**: 1-2h.

### Step 6: Post-Implementation Review
Verify change worked. Document lessons. Update processes.
**Time**: 30-60 min.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Change documented |
| QG2 | Impact assessed |
| QG3 | Risks identified |
| QG4 | Approval obtained |
| QG5 | Implementation planned |
| QG6 | Review complete |

## Anti-Patterns

1. **Shadow IT** — Changes outside process
2. **Rubber stamping** — Approvals without review
3. **Scope creep** — Continuous small changes
4. **Emergency bypass** — Frequent "emergencies"

## Edge Cases

- Failed change: Rollback execution
- Cascade effects: Impact on dependencies
- Out-of-hours changes: On-call procedures
- Rollback not possible: Go-forward strategy

## Output
Use: `templates/change-request.md` | Capability: `capabilities/change-management.md`

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

Use: `templates/change-request.md` | Capability: `capabilities/change-management.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [25-stakeholder](workflows/25-stakeholder.md) | **Related** | To manage stakeholder expectations |
| [14-project-planning](workflows/14-project-planning.md) | **Related** | To plan changes |
| [08-modernize](workflows/08-modernize.md) | **Related** | To manage modernization changes |
