# Forge Engineering Lifecycle Framework

A production-ready, markdown-based agentic framework for end-to-end SDLC operations. Tool-independent, model-agnostic, and produces consistent artifacts across any AI agent platform.

## Why Forge?

| Feature | Ad-hoc Prompting | Forge Framework |
|---------|-----------------|-----------------|
| Consistency | Low | High |
| Quality Gates | None | Built-in |
| Artifact Format | Inconsistent | Standardized |
| Decision Documentation | Rare | Required |
| Edge Case Coverage | Hit or miss | Systematic |

## Core Capabilities (19 Workflows)

| # | Capability | Workflow |
|---|------------|----------|
| 1 | Research | [01-research](workflows/01-research.md) |
| 2 | Analysis | [02-analyze](workflows/02-analyze.md) |
| 3 | Design | [03-design](workflows/03-design.md) |
| 4 | Implementation | [04-implement](workflows/04-implement.md) |
| 5 | Testing | [05-test](workflows/05-test.md) |
| 6 | Debugging | [06-debug](workflows/06-debug.md) |
| 7 | Deployment | [07-deploy](workflows/07-deploy.md) |
| 8 | Modernization | [08-modernize](workflows/08-modernize.md) |
| 9 | Communication | [09-communication](workflows/09-communication.md) |
| 10 | Security Audit | [10-security](workflows/10-security.md) |
| 11 | Performance Optimization | [11-performance](workflows/11-performance.md) |
| 12 | Incident Management | [12-incident](workflows/12-incident.md) |
| 13 | Code Review | [13-code-review](workflows/13-code-review.md) |
| 14 | Project Planning | [14-project-planning](workflows/14-project-planning.md) |
| 15 | Documentation | [15-documentation](workflows/15-documentation.md) |
| 16 | Configuration Management | [16-configuration](workflows/16-configuration.md) |
| 17 | Release Management | [17-release](workflows/17-release.md) |
| 18 | Quality Assurance | [18-qa](workflows/18-qa.md) |
| 19 | API Management | [19-api](workflows/19-api.md) |

## Quick Start

1. Load `core/system-prompt.md` as system prompt
2. Select and load the relevant workflow
3. Execute the task following workflow steps
4. Review output against quality gates

## Directory Structure

```
forge-framework/
├── README.md, QUICK-REFERENCE.md, GLOSSARY.md, ANTI-PATTERNS.md
├── METRICS.md, CHANGELOG.md, DIAGRAMS.md, FRAMEWORK_ENHANCEMENT_RESEARCH.md
├── core/ (system-prompt.md, persona.md, principles.md)
├── workflows/ (01-19)
├── capabilities/ (19 capability definitions)
├── templates/ (19 artifact templates)
├── artifacts/ (output-format.md)
├── guides/ (integration, configuration, troubleshooting, web-search,
│           research-mode-selection, onboarding, migration, compatibility)
└── examples/ (research-report-example.md, analysis-report-example.md)
```

## Configuration

| Option | Default | Values |
|--------|---------|--------|
| `output_format` | markdown | markdown, html, json |
| `quality_gates` | enabled | enabled, disabled |
| `verbosity` | standard | minimal, standard, detailed |
| `language` | en | en, es, fr, de, ja, zh |
| `strict_mode` | false | true, false |

Create `forge.config.md` in project root with global settings and per-workflow overrides.

## Key Features

- **Model-Agnostic**: Works with any instruction-tuned LLM
- **Tool-Agnostic**: Works with CLI, web, API, IDE, and custom agents
- **19 Complete Workflows**: Covering the full modern SDLC
- **Template-Enforced**: Consistent output structure
- **Quality Gates**: Objective, measurable criteria
- **Deep Research**: Quick and Deep research modes
- **Self-Verification**: Built-in validation and refinement
- **Hallucination Detection**: Source verification
- **Security Built-In**: Dedicated security audit workflow
- **Incident Response**: Production incident management

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v2.0.0 | 2026-08-28 | Added 10 new workflows (Security, Performance, Incident, Code Review, Planning, Docs, Config, Release, QA, API) |
| v1.4.0 | 2026-08-28 | Optimized for token efficiency |
| v1.3.0 | 2026-08-28 | Compatibility guide for model/tool-agnostic output |
| v1.2.0 | 2026-08-28 | Enhanced research, web search, onboarding, migration |
| v1.1.0 | 2026-08-28 | Supporting docs, diagrams, metrics, anti-patterns |
| v1.0.0 | 2026-08-28 | Initial release |

## FAQ

**Q: What AI models work with Forge?**
A: Any instruction-tuned LLM. Tested with Claude, GPT-4/5, Gemini, Llama.

**Q: How much context window do I need?**
A: Minimum 8K tokens. 32K+ recommended for complex projects.

**Q: Can I customize workflows?**
A: Yes. Fork and modify to fit your specific needs.

**Q: How is output consistency ensured?**
A: Template enforcement + quality gates + output normalization.

**Q: What if quality gates fail?**
A: Iterative refinement up to 3 retries with specific feedback.

**Q: How many workflows are there?**
A: 19 complete workflows covering the full modern SDLC.

## License

Open source. Free for personal and commercial use.

---

**Next Steps**: Read [QUICK-REFERENCE.md](QUICK-REFERENCE.md) | Explore [workflows/](workflows/) | View [DIAGRAMS.md](DIAGRAMS.md)
