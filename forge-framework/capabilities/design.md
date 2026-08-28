# Design Capability

## Definition

The ability to create system architectures, component designs, data models, and API specifications that satisfy requirements and constraints.

## Scope

### In Scope
- System architecture design
- Component and module design
- Data model design (conceptual, logical, physical)
- API design (REST, GraphQL, gRPC)
- Design pattern application
- Architecture Decision Records (ADR)
- Interface specification
- Design validation

### Out of Scope
- Implementation of designs (see Implementation capability)
- Infrastructure design (see Deployment capability)
- UI/UX design (consult design experts)

## Skills

### Architecture Design
- Architectural style selection (microservices, monolith, serverless)
- Component decomposition
- Interface definition
- Communication pattern design
- Scalability and reliability design

### Component Design
- Single responsibility application
- Design pattern selection and application
- Interface segregation
- Dependency management
- Error handling design

### Data Modeling
- Entity-relationship modeling
- Normalization and denormalization
- Index strategy design
- Data migration planning
- Data constraint definition

### API Design
- Resource identification
- Endpoint design
- Request/response specification
- Authentication and authorization design
- Versioning strategy
- Error response standardization

### Documentation
- Architecture diagram creation
- ADR writing
- Design rationale documentation
- Trade-off documentation

## Inputs
- Requirements document
- Analysis report
- Constraints and assumptions
- Technology decisions
- Non-functional requirements

## Outputs
- Architecture document
- Component design document
- Data model with ER diagrams
- API specification (OpenAPI/Swagger)
- Architecture Decision Records
- Design validation report

## Quality Criteria
- Architecture addresses all requirements
- Components follow SOLID principles
- Data model normalized and indexed
- APIs follow best practices
- Security integrated into design
- Performance considerations documented
- ADRs created for significant decisions

## Related Workflows
- `workflows/03-design.md` - Primary workflow
- `workflows/02-analyze.md` - Provides input
- `workflows/04-implement.md` - Uses design outputs

## Metrics
- Design coverage (% of requirements addressed)
- Component cohesion and coupling scores
- API consistency score
- Design review pass rate
- ADR coverage (% of significant decisions documented)
