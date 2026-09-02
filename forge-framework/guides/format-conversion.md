# Format Conversion Guide - Forge Engineering Lifecycle Framework

## Overview
This guide provides procedures for converting artifacts between different formats while maintaining consistency, data integrity, and template compliance within the Forge framework.

## Conversion Principles

1. **Preserve Semantic Structure**: Convert meaning, not just format
2. **Maintain Data Integrity**: No data loss during conversion
3. **Template Compliance**: Ensure converted artifacts meet template standards
4. **Metadata Preservation**: Retain all header fields and metadata
5. **Reversibility**: Conversions should be reversible where possible

## Format Pairs and Conversion Matrices

### Markdown ↔ HTML
| Markdown Element | HTML Equivalent | Conversion Notes |
|------------------|-----------------|-----------------|
| `# Header` | `<h1>Header</h1>` | Preserve heading hierarchy |
| `**bold**` | `<strong>bold</strong>` | Use semantic tags |
| `*italic*` | `<em>italic</em>` | Use semantic tags |
| `` `code` `` | `<code>code</code>` | Preserve inline code |
| Tables | `<table>` | Complex conversion, test thoroughly |

### Markdown → JSON
**Use Case**: API responses, data exchange
**Structure**:
```json
{
  "metadata": {
    "title": "[Artifact Title]",
    "created": "[ISO 8601]",
    "phase": "[Phase]",
    "status": "[draft/review/approved]"
  },
  "sections": [
    {"heading": "Executive Summary", "content": "..."},
    {"heading": "Decisions & Rationale", "content": "..."}
  ]
}
```

### Markdown → PDF
**Tools**: Pandoc, wkhtmltopdf, print-to-PDF
**Considerations**: Page breaks, table overflow, image embedding
**Process**:
1. Convert to intermediate HTML
2. Apply PDF-specific CSS
3. Generate with proper headers/footers
4. Validate page structure

## Conversion Validation

### Checklists
| Validation Point | Markdown→HTML | Markdown→JSON | Markdown→PDF |
|------------------|---------------|---------------|--------------|
| Structure preserved | ✅ | ✅ | ✅ |
| Metadata retained | ✅ | ✅ | ✅ |
| Links functional | ✅ | N/A | ✅ |
| Tables convert | ✅ (check) | ✅ | ✅ (check) |
| Code blocks | ✅ | ✅ | ✅ |
| Formatting | ✅ | ✅ | ✅ |

### Automated Validation Script
```bash
#!/bin/bash
# validate_conversion.sh
validate_conversion() {
  local source=$1
  local converted=$2
  local target_format=$3
  
  # Check if all required sections preserved
  for section in $(grep "^## " "$source" | cut -d' ' -f2-); do
    if [[ $target_format == "json" ]]; then
      jq ".sections[] | select(.heading==\"$section\")" "$converted" > /dev/null || echo "Missing: $section"
    fi
  done
  
  # Check header fields
  for field in Created Phase Status; do
    grep -q "$field" "$source" && echo "Field $field: ✓" || echo "Field $field: ✗"
  done
}
```

## Batch Processing Scripts

### Multi-file Conversion Script
```bash
#!/bin/bash
# batch_convert.sh
convert_directory() {
  local source_dir=$1
  local target_dir=$2
  local target_format=$3
  
  mkdir -p "$target_dir"
  
  for file in "$source_dir"/*.md; do
    base=$(basename "$file" .md)
    case $target_format in
      html)  pandoc "$file" -o "$target_dir/$base.html" ;;
      json)  pandoc "$file" -o "$target_dir/$base.json" -t json ;;
      pdf)   pandoc "$file" -o "$target_dir/$base.pdf" ;;
    esac
  done
}
```

## Cross-Platform Considerations

| Platform | Considerations |
|----------|----------------|
| **GitHub/GitLab** | Native MD preview, markdownlint validation |
| **Confluence** | Wiki markup conversion, macro handling |
| **Jira** | Jira storage format, custom fields |
| **SharePoint** | Office formats, embedded objects |
| **CMS** | Content model mapping, SEO metadata |
| **API Docs** | OpenAPI/Swagger conversion |

## Template Adaptation

### Adapting Templates for Conversion
1. **Metadata Standards**: Use universal metadata fields
2. **Section Markers**: Use clear section delimiters
3. **Content Blocks**: Identify reusable content blocks
4. **Validation Rules**: Define format-specific validation

### Format-Specific Optimizations
| Format | Optimization Strategy |
|--------|---------------------|
| **HTML** | Semantic HTML, CSS classes |
| **JSON** | Structured data, nested objects |
| **PDF** | Print layout, embedded fonts |
| **EPUB** | EPUB structure, metadata |
| **DOCX** | Microsoft Word formatting |

## Integration with Forge Workflows

| Workflow | Format Conversion Integration |
|----------|-------------------------------|
| 15-documentation.md | Output format selection |
| 09-communication.md | Format selection for audience |
| 07-deploy.md | Documentation packaging |
| 79-ai-augmented-dev.md | Multi-format generation |

## Best Practices

1. **Version Control**: Store both source and converted formats
2. **Automation**: Use scripts and CI/CD for conversions
3. **Validation**: Always validate converted artifacts
4. **Metadata**: Preserve all metadata in conversions
5. **Testing**: Test conversions with sample artifacts
6. **Documentation**: Document conversion procedures
7. **Tool Selection**: Choose tools that preserve semantic meaning