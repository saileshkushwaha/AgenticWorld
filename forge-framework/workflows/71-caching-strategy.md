# Workflow 71: Caching Strategy

**Duration**: 4-16h | **Outputs**: Caching architecture, invalidation strategy, performance metrics, implementation plan

## Trigger

- Performance optimization, database load reduction
- High-traffic event preparation, API response time improvement
- Cost optimization, read-heavy workload optimization
- Session management, distributed caching

## Steps

### Step 1: Workload Analysis
Analyze read/write ratios. Identify hot data. Measure current latency. Assess data volatility. Map data access patterns.
**Time**: 1-2h. **Edge Cases**: Write-heavy workloads → cache less; highly volatile data → short TTL; unpredictable access → adaptive caching.

### Step 2: Cache Architecture Design
Select cache layer (CDN, application, database, distributed). Choose cache technology (Redis, Memcached, Varnish, CloudFront). Design cache topology. Plan scaling strategy.
**Time**: 2-4h. **Edge Cases**: Multi-region → cache replication; large objects → chunking; complex queries → result caching.

### Step 3: Invalidation Strategy
Define invalidation patterns (TTL, write-through, write-behind, event-based). Design cache warming. Plan stale data handling. Implement cache coherence.
**Time**: 2-4h. **Edge Cases**: Real-time data → write-through; eventual consistency → TTL-based; complex dependencies → dependency tracking.

### Step 4: Implementation
Implement cache layer. Add cache middleware. Configure TTLs. Implement cache-aside or write-through. Set up monitoring.
**Time**: 2-4h. **Edge Cases**: Cache stampede → probabilistic early expiration; cold start → cache warming; large values → compression.

### Step 5: Performance Testing
Measure cache hit ratio. Compare latency with/without cache. Test under load. Validate invalidation. Measure memory usage.
**Time**: 1-2h. **Edge Cases**: Low hit ratio → adjust caching; high memory usage → eviction policies; stale data → tune invalidation.

### Step 6: Monitoring and Optimization
Set up cache monitoring. Define alert thresholds. Track hit ratio trends. Optimize eviction policies. Document patterns.
**Time**: 1-2h. **Edge Cases**: Memory pressure → tune eviction; cache penetration → bloom filters; hot keys → shard or replicate.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Workload analyzed |
| QG2 | Architecture designed |
| QG3 | Invalidation strategy defined |
| QG4 | Implementation complete |
| QG5 | Performance validated |
| QG6 | Monitoring active |

## Anti-Patterns

1. **Cache everything** — Caching data that changes frequently
2. **No invalidation** — Serving stale data indefinitely
3. **Cache stampede** — Many requests regenerating cache simultaneously
4. **Ignoring cold start** — Not warming cache after deployment

## Edge Cases

- Cache failure → Degrade gracefully to direct access
- Large objects → Compress or chunk
- Hot keys → Replicate across multiple cache nodes
- Cross-region consistency → Use cache invalidation events

## Output

Use: `templates/caching-strategy.md` | Capability: `capabilities/caching-strategy.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [11-performance](workflows/11-performance.md) | **Related** | Performance optimization |
| [64-multi-region-deployment](workflows/64-multi-region-deployment.md) | **Related** | Multi-region caching |
| [72-database-optimization](workflows/72-database-optimization.md) | **Related** | Database optimization |
| [07-deploy](workflows/07-deploy.md) | **Related** | Deployment |
