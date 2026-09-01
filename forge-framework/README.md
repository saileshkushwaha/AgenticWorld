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

## Core Capabilities (34 Workflows)

### Foundation Workflows (01-09)
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

### Critical Workflows (10-14)
| # | Capability | Workflow |
|---|------------|----------|
| 10 | Security Audit | [10-security](workflows/10-security.md) |
| 11 | Performance Optimization | [11-performance](workflows/11-performance.md) |
| 12 | Incident Management | [12-incident](workflows/12-incident.md) |
| 13 | Code Review | [13-code-review](workflows/13-code-review.md) |
| 14 | Project Planning | [14-project-planning](workflows/14-project-planning.md) |

### Important Workflows (15-19)
| # | Capability | Workflow |
|---|------------|----------|
| 15 | Documentation | [15-documentation](workflows/15-documentation.md) |
| 16 | Configuration Management | [16-configuration](workflows/16-configuration.md) |
| 17 | Release Management | [17-release](workflows/17-release.md) |
| 18 | Quality Assurance | [18-qa](workflows/18-qa.md) |
| 19 | API Management | [19-api](workflows/19-api.md) |

### Specialized Workflows (20-29)
| # | Capability | Workflow |
|---|------------|----------|
| 20 | Data Migration | [20-data-migration](workflows/20-data-migration.md) |
| 21 | Disaster Recovery | [21-disaster-recovery](workflows/21-disaster-recovery.md) |
| 22 | Compliance Audit | [22-compliance](workflows/22-compliance.md) |
| 23 | FinOps | [23-finops](workflows/23-finops.md) |
| 24 | Monitoring & Observability | [24-monitoring](workflows/24-monitoring.md) |
| 25 | Stakeholder Management | [25-stakeholder](workflows/25-stakeholder.md) |
| 26 | Change Management | [26-change-management](workflows/26-change-management.md) |
| 27 | Knowledge Management | [27-knowledge](workflows/27-knowledge.md) |
| 28 | Mentoring | [28-mentoring](workflows/28-mentoring.md) |
| 29 | Accessibility Audit | [29-accessibility](workflows/29-accessibility.md) |

### Emerging Workflows (30-34)
| # | Capability | Workflow |
|---|------------|----------|
| 30 | DevSecOps | [30-devsecops](workflows/30-devsecops.md) |
| 31 | Green Coding | [31-green-coding](workflows/31-green-coding.md) |
| 32 | AI-Augmented Development | [32-ai-augmented](workflows/32-ai-augmented.md) |
| 33 | Multi-Agent Coordination | [33-multi-agent](workflows/33-multi-agent.md) |
| 34 | Post-Quantum Security | [34-post-quantum](workflows/34-post-quantum.md) |

### Enterprise Security Workflows (55-61)
| # | Capability | Workflow |
|---|------------|----------|
| 55 | Secrets Management | [55-secrets-management](workflows/55-secrets-management.md) |
| 56 | Identity & Access Management | [56-iam](workflows/56-iam.md) |
| 57 | Business Continuity Planning | [57-business-continuity](workflows/57-business-continuity.md) |
| 58 | Disaster Recovery Testing | [58-dr-testing](workflows/58-dr-testing.md) |
| 59 | Failover Testing | [59-failover-testing](workflows/59-failover-testing.md) |
| 60 | Data Governance | [60-data-governance](workflows/60-data-governance.md) |
| 61 | Penetration Testing | [61-penetration-testing](workflows/61-penetration-testing.md) |

### Enterprise Operations Workflows (62-66)
| # | Capability | Workflow |
|---|------------|----------|
| 62 | Incident Communication | [62-incident-communication](workflows/62-incident-communication.md) |
| 63 | Post-Incident Review | [63-post-incident-review](workflows/63-post-incident-review.md) |
| 64 | Multi-Region Deployment | [64-multi-region-deployment](workflows/64-multi-region-deployment.md) |
| 65 | Log Aggregation | [65-log-aggregation](workflows/65-log-aggregation.md) |
| 66 | Distributed Tracing | [66-distributed-tracing](workflows/66-distributed-tracing.md) |

### Architecture & Optimization Workflows (67-74)
| # | Capability | Workflow |
|---|------------|----------|
| 67 | Microservices Decomposition | [67-microservices-decomposition](workflows/67-microservices-decomposition.md) |
| 68 | Domain-Driven Design | [68-domain-driven-design](workflows/68-domain-driven-design.md) |
| 69 | Chaos Engineering | [69-chaos-engineering](workflows/69-chaos-engineering.md) |
| 70 | A/B Testing | [70-ab-testing](workflows/70-ab-testing.md) |
| 71 | Caching Strategy | [71-caching-strategy](workflows/71-caching-strategy.md) |
| 72 | Database Optimization | [72-database-optimization](workflows/72-database-optimization.md) |
| 73 | ISO 27001 Preparation | [73-iso27001-preparation](workflows/73-iso27001-preparation.md) |
| 74 | SOC 2 Preparation | [74-soc2-preparation](workflows/74-soc2-preparation.md) |

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
├── VERSIONING.md, CONTRIBUTING.md, EXTENSION-POINTS.md, API-REFERENCE.md
├── core/ (system-prompt.md, persona.md, principles.md)
├── workflows/ (01-34)
├── capabilities/ (34 capability definitions)
├── templates/ (34 artifact templates)
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
- **55 Complete Workflows**: Covering the full modern SDLC plus enterprise operations
- **Template-Enforced**: Consistent output structure
- **Quality Gates**: Objective, measurable criteria
- **Deep Research**: Quick and Deep research modes
- **Self-Verification**: Built-in validation and refinement
- **Hallucination Detection**: Source verification
- **Security Built-In**: Security audit + DevSecOps + Post-Quantum + Penetration Testing + Secrets Management + IAM
- **Incident Response**: Production incident management + communication + post-incident review
- **Compliance**: Regulatory compliance audit + ISO 27001 + SOC 2 preparation
- **Sustainability**: Green coding and FinOps
- **AI-Ready**: AI-augmented development and multi-agent coordination
- **Enterprise Grade**: Multi-region deployment, DR testing, failover testing, chaos engineering
- **Observability**: Monitoring, telemetry, log aggregation, distributed tracing
- **Architecture**: Microservices decomposition, domain-driven design, caching strategy

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v3.2.0 | 2026-09-01 | Added 20 new workflows (55-74) for enterprise security, operations, architecture, and compliance. Includes secrets management, IAM, BCP, DR testing, penetration testing, multi-region deployment, log aggregation, distributed tracing, microservices decomposition, DDD, chaos engineering, A/B testing, caching strategy, database optimization, ISO 27001, SOC 2 preparation. |
| v3.1.0 | 2026-08-29 | Added CONTRIBUTING.md, VERSIONING.md, EXTENSION-POINTS.md, API-REFERENCE.md. Enhanced diagrams, troubleshooting, onboarding. Added code examples. |
| v3.0.0 | 2026-08-28 | Added 15 new workflows (Tier 3 + Tier 4) for complete SDLC coverage |
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
A: 55 complete workflows covering the full modern SDLC plus enterprise operations, security, and compliance.

**Q: What about emerging practices like AI and quantum?**
A: Covered in workflows 30-34 (DevSecOps, Green Coding, AI-Augmented, Multi-Agent, Post-Quantum).

## License

Open source. Free for personal and commercial use.

---

**Next Steps**: Read [QUICK-REFERENCE.md](QUICK-REFERENCE.md) | Explore [workflows/](workflows/) | View [DIAGRAMS.md](DIAGRAMS.md)
