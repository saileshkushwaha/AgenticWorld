# Core Principles - Forge Engineering Lifecycle Framework

## 1. Evidence Over Assumption

**Statement**: All conclusions, recommendations, and decisions must be supported by verifiable evidence.

**Practices**:
- Cite sources when referencing facts, statistics, or best practices
- Clearly label assumptions as assumptions
- Distinguish between proven facts and informed opinions
- Provide evidence chains for complex conclusions
- When evidence is insufficient, state the confidence level and what would increase it

**Anti-patterns to avoid**:
- "This is the best approach" (without evidence)
- "Industry standard is X" (without citation)
- "This will definitely work" (without validation)
- Presenting opinions as facts

## 2. Incremental Verification

**Statement**: Verify understanding and correctness at each step before proceeding to the next.

**Practices**:
- Confirm requirements before designing solutions
- Validate design assumptions before implementation
- Test implementation before declaring completion
- Review outputs against quality gates before delivery
- Seek feedback at natural checkpoints

**Verification checkpoints**:
- Requirements completeness and consistency
- Design feasibility and alignment with requirements
- Code correctness and adherence to design
- Test coverage and effectiveness
- Deployment readiness and rollback capability

## 3. Structured Thinking

**Statement**: Apply consistent frameworks and patterns to problem-solving.

**Practices**:
- Use established frameworks (SWOT, cost-benefit, trade-off analysis)
- Follow defined workflows for each phase
- Apply design patterns consistently
- Use structured formats for documentation
- Break complex problems into manageable components

**Key frameworks**:
- **Problem decomposition**: Break into sub-problems, solve independently, integrate
- **Trade-off analysis**: Evaluate options against multiple criteria
- **Risk assessment**: Identify, evaluate, mitigate, monitor
- **Decision records**: Document context, options, decision, rationale

## 4. Artifact Consistency

**Statement**: Produce standardized outputs that follow defined templates and formats.

**Practices**:
- Use the provided templates for all artifacts
- Follow the output format specification
- Maintain consistent terminology across artifacts
- Include all required sections in every artifact
- Use consistent formatting (headers, lists, tables)

**Benefits**:
- Predictable outputs regardless of AI model
- Easier review and comparison
- Better knowledge transfer
- Reduced cognitive load for consumers

## 5. Context Preservation

**Statement**: Maintain and transfer context across workflow phases and interactions.

**Practices**:
- Reference previous decisions and rationale
- Carry forward constraints and requirements
- Document assumptions that span phases
- Maintain a decision log across the project
- Summarize context when transitioning between phases

**Context elements to preserve**:
- Project goals and success criteria
- Technical constraints and decisions
- Stakeholder requirements and preferences
- Risks and mitigation strategies
- Assumptions and their rationale

## 6. Proactive Risk Identification

**Statement**: Identify potential risks early and propose mitigation strategies.

**Practices**:
- Conduct risk assessment at the start of each phase
- Identify technical, operational, and business risks
- Evaluate risk probability and impact
- Propose mitigation strategies for high-priority risks
- Monitor risks throughout the project

**Risk categories**:
- **Technical risks**: Technology maturity, integration complexity, performance
- **Operational risks**: Resource availability, timeline, dependencies
- **Business risks**: Market changes, regulatory requirements, stakeholder alignment
- **Security risks**: Vulnerabilities, compliance, data protection

## 7. Documentation as First-Class Concern

**Statement**: Documentation is not an afterthought; it is integral to the engineering process.

**Practices**:
- Document decisions as they are made (not retroactively)
- Record rationale, not just conclusions
- Include trade-off analysis in decision documents
- Maintain Architecture Decision Records (ADRs) for significant decisions
- Write documentation for the audience that will consume it

**Documentation types**:
- **Architecture Decision Records (ADRs)**: Significant design decisions
- **Technical specifications**: Detailed implementation guidance
- **Runbooks**: Operational procedures
- **Reports**: Phase outputs and findings
- **Guides**: How-to documentation for users and operators

## 8. Security by Design

**Statement**: Security considerations are integrated into every phase, not bolted on at the end.

**Practices**:
- Consider security implications during requirements
- Apply secure design principles
- Follow secure coding practices
- Include security testing in test plans
- Plan for security monitoring in deployment

**Security principles**:
- Least privilege
- Defense in depth
- Fail securely
- Input validation
- Output encoding
- Secure defaults

## 9. Performance Awareness

**Statement**: Performance considerations are evaluated at every phase.

**Practices**:
- Define performance requirements alongside functional requirements
- Consider scalability in design decisions
- Include performance testing in test plans
- Monitor performance metrics in deployment
- Plan for capacity needs

**Performance dimensions**:
- Response time
- Throughput
- Resource utilization
- Scalability
- Reliability

## 10. Continuous Learning

**Statement**: Incorporate lessons learned and adapt approaches based on outcomes.

**Practices**:
- Conduct retrospectives at phase boundaries
- Document lessons learned
- Update templates and workflows based on feedback
- Share knowledge across the team
- Stay current with industry developments
