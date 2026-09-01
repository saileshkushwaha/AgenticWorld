# Workflow 72: Database Optimization

**Duration**: 4-20h | **Outputs**: Optimization plan, query analysis, index strategy, performance benchmarks

## Trigger

- Slow query investigation, database performance degradation
- Cost optimization, scalability improvement
- Migration preparation, index optimization
- High connection count, lock contention

## Steps

### Step 1: Performance Baseline
Measure current query performance. Identify slow queries. Assess connection patterns. Document resource usage. Establish comparison metrics.
**Time**: 1-2h. **Edge Cases**: No monitoring → implement first; variable load → measure at peak; missing metrics → add instrumentation.

### Step 2: Query Analysis
Analyze slow query log. Identify missing indexes. Detect N+1 queries. Find full table scans. Assess join efficiency.
**Time**: 2-4h. **Edge Cases**: ORM-generated queries → optimize at ORM level; dynamic queries → analyze patterns; complex joins → denormalize.

### Step 3: Index Strategy
Design indexes for common queries. Remove unused indexes. Implement partial indexes. Plan covering indexes. Assess index maintenance cost.
**Time**: 2-4h. **Edge Cases**: Write-heavy tables → minimize indexes; large text → full-text index; composite queries → multi-column index.

### Step 4: Schema Optimization
Evaluate normalization level. Plan denormalization where needed. Optimize data types. Implement partitioning. Design archival strategy.
**Time**: 2-4h. **Edge Cases**: Large tables → partitioning; JSON data → document store; time-series → specialized engine.

### Step 5: Connection and Configuration
Optimize connection pooling. Tune buffer sizes. Configure query cache. Adjust parallelism. Plan read replicas.
**Time**: 2-4h. **Edge Cases**: Connection leaks → pool configuration; memory constraints → buffer tuning; high concurrency → connection limits.

### Step 6: Validation and Monitoring
Benchmark optimized queries. Validate improvements. Set up ongoing monitoring. Create alert thresholds. Document changes.
**Time**: 1-2h. **Edge Cases**: Regression → rollback plan; partial improvement → iterate; new bottlenecks → address next.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Baseline established |
| QG2 | Queries analyzed |
| QG3 | Index strategy defined |
| QG4 | Schema optimized |
| QG5 | Configuration tuned |
| QG6 | Improvements validated |

## Anti-Patterns

1. **Index everything** — Over-indexing slowing writes
2. **No analysis** — Optimizing without understanding queries
3. **Premature optimization** — Optimizing before bottlenecks
4. **Ignoring maintenance** — Not monitoring index fragmentation

## Edge Cases

- Lock contention → Optimistic locking or queue
- Large result sets → Cursor-based pagination
- Cross-database queries → Data federation or replication
- Time-series data → Specialized time-series database

## Output

Use: `templates/database-optimization-report.md` | Capability: `capabilities/database-optimization.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [11-performance](workflows/11-performance.md) | **Related** | Performance optimization |
| [71-caching-strategy](workflows/71-caching-strategy.md) | **Related** | Caching strategy |
| [50-database-design](workflows/50-database-design.md) | **Related** | Database design |
| [20-data-migration](workflows/20-data-migration.md) | **Related** | Data migration |
