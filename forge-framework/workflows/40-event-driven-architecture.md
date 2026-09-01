# Workflow 40: Event-Driven Architecture

**Duration**: 8-24h | **Outputs**: Event schema, broker config, consumer patterns, monitoring setup

## Trigger

- Event-driven architecture adoption, messaging system implementation
- Event sourcing implementation, CQRS pattern
- Kafka/RabbitMQ setup, event mesh design
- Real-time data pipeline, async communication

## Steps

### Step 1: Event Modeling
Identify domain events. Define event schemas. Map event flows. Design event versioning.
**Time**: 2-4h. **Edge Cases**: Legacy integration → anti-corruption layer; schema evolution → compatibility rules; large events → claims check.

### Step 2: Broker Selection
Evaluate messaging platforms (Kafka, RabbitMQ, AWS EventBridge, Azure Service Bus). Compare features. Select technology.
**Time**: 1-2h. **Edge Cases**: Cloud-native → managed services; high throughput → partitioning; ordering → partition keys.

### Step 3: Producer Design
Implement event publishing. Design retry logic. Configure batching. Plan idempotency.
**Time**: 2-4h. **Edge Cases**: Transactional outbox → CDC; high volume → async publishing; ordering → partition strategy.

### Step 4: Consumer Design
Implement event consumption. Design dead letter queues. Configure concurrency. Plan error handling.
**Time**: 2-4h. **Edge Cases**: Competing consumers → partition assignment; slow processing → backpressure; ordering → sequential processing.

### Step 5: Schema Registry
Implement schema registry. Configure compatibility rules. Plan schema evolution. Version events.
**Time**: 1-2h. **Edge Cases**: Breaking changes → new event type; multiple versions → upcasters; validation → producer enforcement.

### Step 6: Monitoring and Operations
Set up event monitoring. Configure lag alerting. Design replay procedures. Plan capacity.
**Time**: 2-4h. **Edge Cases**: Message loss → alerting; consumer lag → scaling triggers; poison messages → DLQ.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Events modeled and versioned |
| QG2 | Broker selected and configured |
| QG3 | Producers implemented |
| QG4 | Consumers implemented |
| QG5 | Schema registry active |
| QG6 | Monitoring configured |

## Anti-Patterns

1. **Event spaghetti** — Unclear event flows
2. **No schema evolution** — Breaking changes
3. **Synchronous events** — Blocking calls disguised as events
4. **No DLQ** — Failed events lost

## Edge Cases

- Exactly-once semantics → Idempotent consumers
- Event sourcing → Event store design
- Stream processing → Windowing strategies
- Multi-region → Event replication

## Output

Use: `templates/event-driven-architecture-report.md` | Capability: `capabilities/event-driven-architecture.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [03-design](workflows/03-design.md) | **Related** | Architecture design |
| [67-microservices-decomposition](workflows/67-microservices-decomposition.md) | **Related** | Service decomposition |
| [68-domain-driven-design](workflows/68-domain-driven-design.md) | **Related** | Domain events |
| [37-telemetry](workflows/37-telemetry.md) | **Related** | Event telemetry |
