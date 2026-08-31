# Workflow 50: Database Design

**Duration**: 4-16h | **Outputs**: Database schema, data model, migration plan, performance benchmarks

## Trigger

- New application database design, database migration
- Database performance optimization, data model refinement
- Database technology selection, data architecture design
- Multi-database strategy, data governance implementation

## Steps

### Step 1: Requirements Analysis
**Actions**: Identify data entities, define data relationships, document data volumes, analyze access patterns, identify performance requirements.
**Output**: Data requirements | **Time**: 2-4h | **Tools**: Data modeling tools, requirement templates
**Edge Cases**: Unclear relationships → use ER diagrams; high-volume data → plan sharding; complex queries → denormalize; regulatory data → document compliance

### Step 2: Database Technology Selection
**Actions**: Evaluate database technologies, compare features, assess scalability, consider ecosystem, make selection.
**Types**: Relational, Document, Key-Value, Graph, Time-Series, Search.
**Output**: Technology selection | **Time**: 1-2h | **Tools**: Comparison matrices, POC environments
**Edge Cases**: Polyglot persistence → use multiple databases; existing investments → leverage current tech; skill gaps → consider learning curve; cloud-native → use managed services

### Step 3: Logical Data Model
**Actions**: Design entity-relationship model, define attributes, establish relationships, normalize data, document model.
**Output**: Logical data model | **Time**: 2-4h | **Tools**: Data modeling tools, ER diagrams
**Edge Cases**: Complex relationships → use associative entities; inheritance → use supertype/subtype; temporal data → add versioning; multi-tenancy → add tenant ID

### Step 4: Physical Data Model
**Actions**: Convert logical to physical model, define data types, design indexes, plan partitioning, optimize for performance.
**Output**: Physical data model | **Time**: 2-4h | **Tools**: Database design tools, performance analyzers
**Edge Cases**: Large tables → partition; high-write throughput → optimize indexes; read-heavy → denormalize; JSON data → use JSON columns

### Step 5: Migration Planning
**Actions**: Design migration strategy, plan data migration, create rollback procedures, test migration, document migration.
**Strategies**: Big bang, incremental, parallel run.
**Output**: Migration plan | **Time**: 1-2h | **Tools**: Migration tools, data validation tools
**Edge Cases**: Large data volumes → use incremental migration; downtime constraints → use parallel run; data quality issues → clean before migration; complex transformations → use ETL

### Step 6: Performance Optimization
**Actions**: Establish performance baselines, identify bottlenecks, optimize queries, implement caching, monitor performance.
**Output**: Performance benchmarks | **Time**: 2-4h | **Tools**: Performance monitoring, query analyzers
| QG1 | Requirements analyzed |
| QG2 | Technology selected |
| QG3 | Logical model designed |
| QG4 | Physical model designed |
| QG5 | Migration plan created |
| QG6 | Performance benchmarks established |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Database type? | Relational / NoSQL / Multi-model | Data structure, query patterns |
| DP2: Normalization level? | 3NF / Denormalized / Hybrid | Read/write ratio, consistency needs |
| DP3: Indexing strategy? | B-Tree / Hash / GIN / GIST | Query patterns, data types |
| DP4: Partitioning strategy? | Range / List / Hash / Composite | Data volume, access patterns |

## Anti-Patterns

1. **God table** — Single table for everything
2. **Index overload** — Too many indexes
3. **No indexing** — Missing critical indexes
4. **EAV anti-pattern** — Entity-Attribute-Value abuse

## Edge Cases

- High-volume data: Plan sharding
- Complex queries: Denormalize
- Temporal data: Add versioning
- Multi-tenancy: Add tenant ID

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Requirements analyzed |
| QG2 | Technology selected |
| QG3 | Logical model designed |
| QG4 | Physical model designed |
| QG5 | Migration plan created |
| QG6 | Performance benchmarks established |

## Decision Points

| Point | Options | Criteria |
|-------|---------|----------|
| DP1: Database type? | Relational / NoSQL / Multi-model | Data structure, query patterns |
| DP2: Normalization level? | 3NF / Denormalized / Hybrid | Read/write ratio, consistency needs |
| DP3: Indexing strategy? | B-Tree / Hash / GIN / GIST | Query patterns, data types |
| DP4: Partitioning strategy? | Range / List / Hash / Composite | Data volume, access patterns |

## Anti-Patterns

1. **God table** — Single table for everything
2. **Index overload** — Too many indexes
3. **No indexing** — Missing critical indexes
4. **EAV anti-pattern** — Entity-Attribute-Value abuse

## Edge Cases

- High-volume data: Plan sharding
- Complex queries: Denormalize
- Temporal data: Add versioning
- Multi-tenancy: Add tenant ID

## Output

Use: `templates/database-design.md` | Capability: `capabilities/database-design.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [20-data-migration](workflows/20-data-migration.md) | **Related** | To migrate data |
| [44-data-audit](workflows/44-data-audit.md) | **Related** | To audit data quality |
| [11-performance](workflows/11-performance.md) | **Related** | To optimize database performance |
| [03-design](workflows/03-design.md) | **Related** | To design system architecture |