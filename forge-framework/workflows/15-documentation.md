# Workflow 15: Documentation

**Duration**: 2-8h | **Outputs**: Technical documentation, API docs, user guides

## Trigger

- Technical documentation needed, API documentation, user guide creation
- Onboarding docs, runbook creation, knowledge base

## Steps

### Step 1: Audience Analysis
Identify target audience (developers, users, ops). Determine technical level. Define goals.
**Time**: 15-30 min.

### Step 2: Content Planning
Outline structure. Define sections. Identify examples and diagrams needed.
**Time**: 30-60 min.

### Step 3: Draft Creation
Write content following template. Include examples, diagrams, code snippets.
**Time**: 2-4h.

### Step 4: Technical Review
Review for accuracy. Verify code examples. Check completeness.
**Time**: 1-2h.

### Step 5: Editing and Refinement
Improve clarity, grammar, formatting. Ensure consistency.
**Time**: 30-60 min.

### Step 6: Publication
Publish to appropriate platform (wiki, docs site, repo). Notify stakeholders.
**Time**: 15-30 min.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Audience identified |
| QG2 | Content planned |
| QG3 | Draft complete |
| QG4 | Technical review passed |
| QG5 | Editing complete |
| QG6 | Published |

## Anti-Patterns

1. **Scope creep** — Adding content beyond original scope
2. **Perfectionism** — Endless refinement, never publishing
3. **Outdated docs** — No refresh process for existing docs
4. **Inconsistent style** — Varying formats across documents

## Edge Cases

- Null/empty content: Start with skeleton structure
- Extreme length: Split into multiple documents
- Sensitive data: Redact before documenting
- Multiple audiences: Create separate versions or use clear section markers

## Output

Use: `templates/documentation.md` | Capability: `capabilities/documentation.md`

## Anti-Patterns

1. **Writing for yourself** — Not considering audience needs
2. **No review** — Publishing without technical review
3. **Outdated docs** — Not maintaining documentation
4. **No examples** — Abstract explanations without examples

## Edge Cases

- Multiple audiences → Create separate documents per audience
- No existing template → Adapt from similar project
- Technical reviewer unavailable → Use peer review

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [09-communication](workflows/09-communication.md) | **Related** | To communicate documentation |
| [27-knowledge](workflows/27-knowledge.md) | **Related** | To manage knowledge base |
| [04-implement](workflows/04-implement.md) | **Related** | To document implementation |
