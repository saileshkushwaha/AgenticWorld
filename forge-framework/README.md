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

## Core Capabilities

| Capability | Workflow |
|------------|----------|
| Research | [01-research](workflows/01-research.md) |
| Analysis | [02-analyze](workflows/02-analyze.md) |
| Design | [03-design](workflows/03-design.md) |
| Implementation | [04-implement](workflows/04-implement.md) |
| Testing | [05-test](workflows/05-test.md) |
| Debugging | [06-debug](workflows/06-debug.md) |
| Deployment | [07-deploy](workflows/07-deploy.md) |
| Modernization | [08-modernize](workflows/08-modernize.md) |
| Communication | [09-communication](workflows/09-communication.md) |

## Quick Start

1. Load `core/system-prompt.md` as system prompt
2. Select and load the relevant workflow
3. Execute the task following workflow steps
4. Review output against quality gates

## Directory Structure

```
forge-framework/
├── README.md, QUICK-REFERENCE.md, GLOSSARY.md, ANTI-PATTERNS.md
├── METRICS.md, CHANGELOG.md, DIAGRAMS.md
├── core/ (system-prompt.md, persona.md, principles.md)
├── workflows/ (01-09)
├── capabilities/ (8 capability definitions)
├── templates/ (8 artifact templates)
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

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.4.0 | 2026-08-28 | Optimized for token efficiency |
| v1.3.0 | 2026-08-28 | Compatibility guide for model/tool-agnostic output |
| v1.2.0 | 2026-08-28 | Enhanced research, web search, onboarding, migration |
| v1.1.0 | 2026-08-28 | Supporting docs, diagrams, metrics, anti-patterns |
| v1.0.0 | 2026-08-28 | Initial release |

## Key Features

- **Model-Agnostic**: Works with any instruction-tuned LLM (Claude, GPT, Gemini, Llama)
- **Tool-Agnostic**: Works with CLI, web, API, IDE, and custom agent tools
- **Consistent Output**: Template-enforced structure regardless of model/tool
- **Quality Gates**: Objective, measurable criteria for every phase
- **Deep Research**: Quick (2-8h) and Deep (8-40h) research modes
- **Self-Verification**: Built-in validation and iterative refinement
- **Hallucination Detection**: Source verification and cross-referencing
- **Output Normalization**: Ensures consistent formatting across models

## FAQ

**Q: What AI models work with Forge?**
A: Any instruction-tuned LLM. Tested with Claude, GPT-4/5, Gemini, Llama.

**Q: How much context window do I need?**
A: Minimum 8K tokens. 32K+ recommended for complex projects.

**Q: Can I customize workflows?**
A: Yes. Fork and modify. See guides/customization.

**Q: How is output consistency ensured?**
A: Template enforcement + quality gates + output normalization. See guides/compatibility-guide.md.

**Q: What if quality gates fail?**
A: Iterative refinement up to 3 retries with specific feedback.

## License

Open source. Free for personal and commercial use.

---

**Next Steps**: Read [QUICK-REFERENCE.md](QUICK-REFERENCE.md) | Explore [workflows/](workflows/) | View [DIAGRAMS.md](DIAGRAMS.md)
