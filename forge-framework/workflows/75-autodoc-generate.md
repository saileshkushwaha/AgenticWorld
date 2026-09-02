# Workflow 75: AutoDoc Generation

**Duration**: 1-4h | **Outputs**: API reference documentation, SDK docs, code annotations, documentation site

## Trigger

- API documentation needed from source code
- Library/SDK documentation generation required
- Code annotation extraction for documentation
- Documentation site generation from comments
- API reference updates after code changes

## Steps

### Step 1: Source Analysis
Analyze codebase to identify documentable elements (classes, methods, endpoints, etc.). Determine documentation format (OpenAPI, Javadoc, Doxygen, Sphinx). Extract docstrings/comments.
**Time**: 15-30 min | **Tools**: Code analysis tools, regex parsers
**Edge Cases**: No comments → flag for documentation; mixed formats → standardize; deprecated code → version appropriately

### Step 2: Tool Selection & Configuration
Select appropriate documentation generator (Swagger/OpenAPI, Javadoc, Doxygen, Sphinx, TypeDoc, etc.). Configure tool with source paths, output format, themes, and plugins. Set up CI/CD integration if needed.
**Time**: 30-60 min | **Tools**: Documentation generators, config files
**Edge Cases**: Language mismatch → use language-appropriate tool; complex annotations → simplify; build failures → fix config

### Step 3: Documentation Generation
Run documentation generator to produce API reference, code documentation, or SDK docs. Validate generated output for completeness and accuracy. Fix any generation errors or warnings.
**Time**: 30-90 min | **Tools**: CLI documentation generators
**Edge Cases**: Generation fails → debug config; incomplete output → enhance source comments; slow generation → incremental builds

### Step 4: Output Validation & Enhancement
Review generated documentation for accuracy, completeness, and readability. Add missing descriptions, examples, and diagrams. Ensure proper formatting and navigation.
**Time**: 30-60 min | **Tools**: Documentation review, markdown editors
**Edge Cases**: Missing content → enhance source docs; formatting issues → adjust templates; broken links → fix references

### Step 5: Publishing & Distribution
Publish generated documentation to appropriate location (docs site, wiki, package registry). Set up versioning if applicable. Notify stakeholders of availability.
**Time**: 15-30 min | **Tools**: Static site hosts, package managers, wikis
**Edge Cases**: Publish fails → check permissions; version conflicts → use proper tagging; access issues → configure auth

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Source analyzed and documentable elements identified |
| QG2 | Documentation tool selected and configured |
| QG3 | Documentation generated successfully |
| QG4 | Output validated for accuracy and completeness |
| QG5 | Documentation published and accessible |

## Anti-Patterns

1. **Comment-only documentation** — Relying solely on code comments without review
2. **Stale generated docs** — Not regenerating after code changes
3. **Over-commenting** — Adding excessive comments just for generation
4. **Ignoring generation warnings** — Proceeding with incomplete or erroneous output

## Edge Cases

- No documentation comments → Extract structural info and flag gaps
- Mixed documentation standards → Enforce single standard via linting
- Large codebases → Use incremental generation or microservice scoping
- Private/internal APIs → Configure access controls or separate docs
- Dynamic languages → Use runtime introspection or strict typing

## Output

Use: `templates/autodoc-report.md` | Capability: `capabilities/autodoc-generation.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [15-documentation](workflows/15-documentation.md) | **Complementary** | For manual documentation enhancement |
| [04-implement](workflows/04-implement.md) | **Related** | To document new implementations |
| [19-api](workflows/19-api.md) | **Related** | For API design and management |
| [32-ai-augmented](workflows/32-ai-augmented.md) | **Related** | To enhance documentation with AI |