# Workflow 49: API Design

**Duration**: 4-16h | **Outputs**: API specification, API prototype, API documentation, API governance

## Trigger

- New API development, API modernization
- API versioning strategy, API governance
- Developer experience improvement, API monetization
- Third-party API integration, microservices architecture

## Steps

### Step 1: Requirements Gathering
**Actions**: Identify API consumers, define use cases, gather functional requirements, document non-functional requirements, prioritize features.
**Consumer Types**: Internal, partner, public.
**Output**: API requirements | **Time**: 2-4h | **Tools**: Requirement templates, user story maps
**Edge Cases**: Conflicting consumer needs → prioritize by impact; unclear requirements → use prototyping; multiple consumers → design for all; regulatory requirements → document compliance needs

### Step 2: API Architecture Design
**Actions**: Select API style, define resource model, design endpoints, plan versioning, design authentication.
**Styles**: REST, GraphQL, gRPC, WebSocket, Webhook.
**Output**: API architecture | **Time**: 2-4h | **Tools**: Architecture diagrams, API design tools
**Edge Cases**: Multiple protocols → use API gateway; backward compatibility → version from start; high latency → use GraphQL; real-time needs → use WebSocket

### Step 3: API Specification
**Actions**: Write API specification, define request/response schemas, document error codes, create examples, validate specification.
**Formats**: OpenAPI, AsyncAPI, GraphQL Schema.
**Output**: API specification | **Time**: 2-4h | **Tools**: API design tools, specification validators
**Edge Cases**: Complex schemas → use composition; binary data → use multipart; file uploads → use streaming; large payloads → use pagination

### Step 4: Security Design
**Actions**: Design authentication, implement authorization, plan rate limiting, design input validation, document security requirements.
**Methods**: OAuth 2.0, JWT, API keys, mTLS.
**Output**: API security design | **Time**: 1-2h | **Tools**: Security frameworks, threat modeling
**Edge Cases**: Public APIs → use API keys; sensitive data → use mTLS; third-party access → use OAuth; high-volume → implement rate limiting

### Step 5: Developer Experience
**Actions**: Create API documentation, develop SDKs, implement sandbox environment, create tutorials, establish support channels.
**Documentation**: Reference docs, guides, tutorials, changelog.
**Output**: Developer experience package | **Time**: 2-4h | **Tools**: Documentation tools, SDK generators
**Edge Cases**: Multiple languages → generate SDKs; complex APIs → create tutorials; breaking changes → maintain changelog; developer feedback → iterate on DX

### Step 6: Governance and Lifecycle
**Actions**: Define API governance, establish versioning policy, create deprecation process, implement analytics, plan lifecycle management.
**Policies**: Versioning, deprecation, retirement, analytics.
**Output**: API governance framework | **Time**: 1-2h | **Tools**: API management platforms, analytics tools
**Edge Cases**: Breaking changes → use versioning; deprecated APIs → communicate timeline; analytics → track usage patterns; lifecycle → plan retirement

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Requirements gathered |
| QG2 | API architecture designed |
| QG3 | API specification complete |
| QG4 | Security design implemented |
| QG5 | Developer experience package created |
| QG6 | Governance framework established |

## Anti-Patterns

1. **RPC-style REST** — Using REST for remote procedure calls
2. **Chatty APIs** — Too many small requests
3. **Ignoring versioning** — No versioning strategy
4. **Undocumented APIs** — No documentation

## Edge Cases

- Multiple consumer types: Design for all
- High-volume APIs: Implement rate limiting
- Real-time requirements: Use WebSocket
- Backward compatibility: Version from start

## Output

Use: `templates/api-design.md` | Capability: `capabilities/api-design.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [19-api](workflows/19-api.md) | **Related** | To manage APIs after design |
| [03-design](workflows/03-design.md) | **Related** | To design system architecture |
| [10-security](workflows/10-security.md) | **Related** | To secure APIs |
| [09-communication](workflows/09-communication.md) | **Related** | To document APIs |