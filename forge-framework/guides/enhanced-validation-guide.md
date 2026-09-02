# Enhanced Validation Guide - Forge Engineering Lifecycle Framework

## Overview
This guide provides comprehensive validation procedures for ensuring artifact quality, workflow compliance, and framework integrity across all Forge framework operations.

## Validation Principles

### 1. Automated First, Manual Second
- Automated validation should cover 80%+ of validation needs
- Manual validation focuses on subjective quality, context, and nuance

### 2. Multi-Layer Validation
- **Structural Validation**: File exists, correct format, naming convention
- **Content Validation**: Required sections present, templates followed
- **Quality Validation**: Quality gates satisfied, scorecard metrics
- **Compliance Validation**: Standards compliance, security requirements

### 3. Continuous Validation
- Validate at artifact creation
- Validate at workflow completion
- Validate at release/deployment
- Validate periodically for maintenance

### 4. Actionable Feedback
- Provide specific, actionable feedback
- Include remediation steps
- Prioritize issues by severity
- Track issue resolution

## Validation Framework

### Validation Levels
| Level | Scope | Frequency | Tools |
|-------|-------|-----------|-------|
| Level 1 | Individual Artifact | Per artifact | Linting, templates, scripts |
| Level 2 | Workflow Completion | Per workflow | Checklists, quality gates |
| Level 3 | Cross-Artifact | Per integration | Cross-reference, linking |
| Level 4 | Project | End of project | Audit, scorecard, review |
| Level 5 | Organization | Periodic | Metrics, benchmarking |

### Validation Categories
1. **Format Compliance**: Markdown syntax, template adherence
2. **Content Completeness**: Required sections, quality gates
3. **Quality Standards**: Scorecard metrics, clarity, accuracy
4. **Security Compliance**: Security requirements, vulnerability checks
5. **Standards Compliance**: Coding standards, documentation standards

## Validation Tools and Scripts

### Automated Validation Script
```bash
#!/bin/bash
# Forge Artifact Validator
ARTIFACT_FILE="$1"
TEMPLATE_NAME="$2"
ERRORS=0

# Check file existence
if [ ! -f "$ARTIFACT_FILE" ]; then
    echo "ERROR: File not found: $ARTIFACT_FILE"
    exit 1
fi

# Extract template name from artifact header if not provided
if [ -z "$TEMPLATE_NAME" ]; then
    TEMPLATE_NAME=$(grep -oP 'Template: \K.*' "$ARTIFACT_FILE" | head -1)
fi

if [ -z "$TEMPLATE_NAME" ]; then
    echo "ERROR: Template not specified or found in artifact header"
    ((ERRORS++))
else
    echo "INFO: Validating against template: $TEMPLATE_NAME"
    
    if [ -f "templates/$TEMPLATE_NAME.md" ]; then
        while IFS= read -r section; do
            if echo "$section" | grep -qE '^#{1,3} '; then
                section_name=$(echo "$section" | grep -oP '#{1,3} \K.*')
                if ! grep -qE "^#{1,3} .*$section_name" "$ARTIFACT_FILE"; then
                    echo "WARNING: Missing section: $section_name"
                fi
            fi
        done < "templates/$TEMPLATE_NAME.md"
    else
        echo "WARNING: Template file not found: templates/$TEMPLATE_NAME.md"
    fi
fi

# Check header fields
echo "INFO: Checking header fields"
for field in "Created" "Phase" "Status"; do
    if ! grep -q "**$field**:" "$ARTIFACT_FILE"; then
        echo "WARNING: Missing header field: $field"
        ((ERRORS++))
    fi
done

# Summary
echo ""
echo "=== Validation Summary ==="
if [ $ERRORS -eq 0 ]; then
    echo "PASS: No required validation failures"
elif [ $ERRORS -lt 5 ]; then
    echo "WARN: $ERRORS validation warnings found"
else
    echo "FAIL: $ERRORS validation errors found"
fi
```

## Validation Checklists

### Artifact Creation Checklist
**Before Creating Artifact**
- [ ] Identified correct template for artifact type
- [ ] Understood artifact purpose and audience
- [ ] Gathered sufficient source material
- [ ] Established version control for artifact

**While Creating Artifact**
- [ ] Used exact template structure
- [ ] Included all required header fields
- [ ] Followed Markdown formatting rules
- [ ] Used tables for structured data
- [ ] Cited sources for all claims
- [ ] Documented decisions and rationale
- [ ] Analyzed risks and mitigations
- [ ] Considered edge cases

**After Creating Artifact**
- [ ] Ran automated validation script
- [ ] Verified all template sections present
- [ ] Checked quality gate compliance
- [ ] Performed self-verification checklist
- [ ] Reviewed for hallucination/clarity

### Workflow Completion Checklist
**Pre-Workflow**
- [ ] Identified correct workflow for task
- [ ] Understood workflow triggers and outputs
- [ ] Gathered necessary input information
- [ ] Allocated sufficient time/resources

**During Workflow**
- [ ] Followed all workflow steps in order
- [ ] Completed all actions for each step
- [ ] Produced required outputs for each step
- [ ] Considered edge cases and constraints
- [ ] Documented decisions and rationale
- [ ] Tracked time and resource usage

**Post-Workflow**
- [ ] Verified all quality gates passed
- [ ] Validated artifact against template
- [ ] Updated related artifacts and contexts
- [ ] Documented lessons learned
- [ ] Filed artifact in appropriate location

## Validation Procedures

### Procedure 1: Structural Validation
1. Verify file exists at correct path
2. Check file naming convention follows pattern
3. Read first few lines to verify template header
4. Check for required header fields
5. Verify all template sections present
6. Validate Markdown formatting
7. Check for HTML tag usage (should be none)
8. Validate table formatting

### Procedure 2: Content Validation
1. Review artifact against template requirements
2. Check completeness of all required sections
3. Verify quality gate satisfaction
4. Validate evidence and citations
5. Assess decision documentation
6. Evaluate risk analysis

### Procedure 3: Quality Assessment
1. Apply quality scorecard dimensions
2. Score each dimension (1-5)
3. Calculate overall quality score
4. Identify quality gaps
5. Generate improvement recommendations

## Quality Scorecard

### Dimensions
| Dimension | 1 (Poor) | 3 (Acceptable) | 5 (Excellent) |
|-----------|----------|-----------------|----------------|
| Completeness | Missing sections | All present | Thorough and detailed |
| Evidence | No evidence | Some evidence | All claims supported |
| Decisions | Not documented | Without rationale | Full rationale and trade-offs |
| Risks | Not identified | Without mitigation | With probability, impact, mitigation |
| Clarity | Unclear | Understandable | Clear and concise |
| Actionability | No next steps | Some steps | Clear, specific, prioritized |

### Score Interpretation
- 4.5-5.0: Excellent
- 3.5-4.4: Good
- 2.5-3.4: Acceptable
- 1.5-2.4: Poor
- 1.0-1.4: Unacceptable

## Continuous Improvement

### Validation Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Validation Pass Rate | >90% | Test execution |
| Artifact Quality Score | >4.0/5 | Scorecard assessment |
| Validation Coverage | >95% | Template coverage |
| Feedback Loop Time | <24h | Issue resolution |
| Validation Automation | >90% | Automated vs manual |

### Feedback Integration
- Collect feedback on validation procedures
- Review validation effectiveness periodically
- Update validation tools and processes
- Incorporate stakeholder feedback
- Measure validation ROI

## Integration with Forge Workflows

### Workflow Integration Points
| Workflow | Validation Integration | Purpose |
|----------|----------------------|---------|
| 15-documentation.md | Documentation validation | Document quality |
| 76-doc-quality-scorecard.md | Quality scorecard | Quality assessment |
| 18-qa.md | Quality assurance | QA process validation |
| 41-internal-audit.md | Audit procedures | Compliance validation |
| 43-process-audit.md | Process validation | Process compliance |

This enhanced validation guide ensures comprehensive quality assurance across all Forge framework artifacts and workflows.