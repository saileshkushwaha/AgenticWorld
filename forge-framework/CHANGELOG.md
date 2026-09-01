# Changelog - Forge Engineering Lifecycle Framework

All notable changes to the Forge framework will be documented in this file.

## [v3.2.0] - 2026-09-01

### Added
- **31 new workflows (44-74)** for enterprise-grade coverage:
  - **Audit & Governance (44-45)**: Data Audit, Configuration Audit
  - **DevOps & SRE (46-48)**: DevOps, SRE, Infrastructure as Code
  - **Design (49-51)**: API Design, Database Design, UX Design
  - **Metrics & Tracking (52-54)**: Productivity Metrics, Work Item Linkage, Flow Time Tracking
  - **Enterprise Security (55-61)**: Secrets Management, Identity & Access Management, Business Continuity Planning, Disaster Recovery Testing, Failover Testing, Data Governance, Penetration Testing
  - **Enterprise Operations (62-66)**: Incident Communication, Post-Incident Review, Multi-Region Deployment, Log Aggregation, Distributed Tracing
  - **Architecture & Optimization (67-74)**: Microservices Decomposition, Domain-Driven Design, Chaos Engineering, A/B Testing, Caching Strategy, Database Optimization, ISO 27001 Preparation, SOC 2 Preparation
- **31 new capabilities** for each new workflow
- **31 new templates** for each new workflow
- Cross-references updated in workflows 12-incident.md and 21-disaster-recovery.md
- README.md updated with new workflow categories and key features

### Enhanced
- Framework now covers 69 workflows (up from 34)
- Added enterprise production grade capabilities
- Added certification preparation (ISO 27001, SOC 2)
- Added observability depth (log aggregation, distributed tracing)
- Added architecture patterns (microservices decomposition, DDD)
- Added resilience engineering (chaos engineering, DR testing, failover testing)

## [v1.1.0] - 2026-08-28

### Added
- QUICK-REFERENCE.md: One-page workflow selection and cheat sheet
- GLOSSARY.md: Comprehensive terminology definitions (100+ terms)
- ANTI-PATTERNS.md: Common mistakes across all phases (30+ anti-patterns)
- METRICS.md: KPIs and quality scorecard with measurement guidelines
- guides/integration-guide.md: Workflow connections and handoff documentation
- guides/configuration-guide.md: Configuration options reference
- guides/troubleshooting.md: Common issues and solutions

### Enhanced
- README.md: Added TOC, why Forge section, installation guide, use cases, FAQ, configuration, contributing, versioning, and license
- core/system-prompt.md: Added multi-turn conversation handling, error recovery, edge case handling, quality standards per phase
- core/persona.md: Added domain expertise (fintech, healthcare, e-commerce, SaaS, gaming, IoT), creative thinking, conflict handling
- core/principles.md: Added actionable checklists for each of the 10 principles
- workflows/01-09: All enhanced with time estimates, tool recommendations, worked examples, edge case handling, common anti-patterns
- capabilities/01-08: All enhanced with 5-level proficiency scale, assessment criteria, development paths
- templates/01-08: All enhanced with guidance notes and filled examples
- artifacts/output-format.md: Added complete example, formatting tips

### Changed
- Version bumped from v1.0.0 to v1.1.0

## [v1.0.0] - 2026-08-28

### Added
- Initial release of the Forge Engineering Lifecycle Framework
- Core files: system-prompt.md, persona.md, principles.md
- 9 workflow definitions covering full SDLC
- 8 capability definitions
- 8 artifact templates
- Output format specification
