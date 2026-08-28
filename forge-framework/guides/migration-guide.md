# Migration Guide - Forge Engineering Lifecycle Framework

## Overview

This guide helps you migrate from other frameworks or ad-hoc approaches to the Forge framework.

## Migrating from Ad-hoc Prompting

### Assessment
1. Document your current prompting approach
2. Identify which SDLC phases you cover
3. Note any existing templates or conventions
4. Identify pain points and gaps

### Migration Steps

#### Week 1: Start with Research
1. Replace ad-hoc research prompts with `workflows/01-research.md`
2. Use `templates/research-report.md` for output format
3. Compare output quality with previous approach

#### Week 2: Add Analysis
1. Introduce `workflows/02-analyze.md` for requirements analysis
2. Use `templates/analysis-report.md` for output format
3. Connect research outputs to analysis inputs

#### Week 3: Add Implementation
1. Introduce `workflows/04-implement.md` for coding tasks
2. Use `templates/implementation-plan.md` for output format
3. Connect design outputs to implementation inputs

#### Week 4: Full Coverage
1. Introduce remaining workflows as needed
2. Build a library of completed artifacts
3. Train team on framework conventions

## Migrating from Other Frameworks

### From Waterfall/SDLC
1. Map your existing phases to Forge workflows
2. Identify gaps where Forge provides more structure
3. Adopt Forge templates for consistency
4. Leverage quality gates for verification

### From Agile/Scrum
1. Map sprint activities to Forge workflows
2. Use research workflow for spike stories
3. Use implementation workflow for feature development
4. Use testing workflow for acceptance testing
5. Use communication workflow for sprint reviews

### From DevOps/CI-CD
1. Map pipeline stages to Forge workflows
2. Use deployment workflow for release management
3. Use debugging workflow for incident response
4. Use modernization workflow for infrastructure upgrades

### From Design Thinking
1. Map empathize/define to analysis workflow
2. Map ideate to research workflow
3. Map prototype to implementation workflow
4. Map test to testing workflow

## Template Migration

### Converting Existing Templates
1. Map your template sections to Forge template sections
2. Identify missing sections and add them
3. Remove redundant sections
4. Align terminology with Forge glossary

### Creating New Templates
1. Start with the relevant Forge template
2. Customize for your domain
3. Add organization-specific sections
4. Validate with quality gates

## Data Migration

### Research Repository
1. Catalog existing research findings
2. Convert to Forge research report format
3. Add source quality assessments
4. Add verification logs
5. Store in accessible location

### Artifact Library
1. Catalog existing artifacts
2. Map to Forge artifact types
3. Convert to Forge templates
4. Add metadata (phase, status, version)
5. Organize by project/phase

## Team Migration

### Training Plan
1. **Week 1**: Framework overview and quick start
2. **Week 2**: Hands-on with one workflow
3. **Week 3**: Expand to multiple workflows
4. **Week 4**: Full adoption and customization

### Resistance Management
1. Demonstrate value with pilot project
2. Show before/after comparison
3. Address specific concerns
4. Provide hands-on support
5. Celebrate early wins

## Validation

### Post-Migration Checklist
- [ ] All workflows documented and accessible
- [ ] Team trained on framework conventions
- [ ] Templates customized for organization
- [ ] Quality gates being used consistently
- [ ] Artifacts being produced in standard format
- [ ] Research repository established
- [ ] Configuration files in place
- [ ] Troubleshooting guide accessible

### Success Metrics
- Research quality (verification rate, completeness)
- Output consistency (format compliance)
- Time to completion (vs pre-migration)
- Stakeholder satisfaction
- Team adoption rate
