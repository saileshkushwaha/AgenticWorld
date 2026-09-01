# Workflow 38: Network Security

**Duration**: 4-16h | **Outputs**: Network security architecture, firewall rules, segmentation plan, monitoring config

## Trigger

- Network security assessment, firewall review
- Network segmentation design, zero trust implementation
- VPN setup, DDoS protection planning
- Compliance requirement (PCI-DSS, SOC2)

## Steps

### Step 1: Network Assessment
Map network topology. Identify trust zones. Document traffic flows. Assess current security controls.
**Time**: 2-4h. **Edge Cases**: Undocumented networks → discovery scan; legacy systems → document constraints; cloud-hybrid → map all connections.

### Step 2: Segmentation Design
Design network segments (DMZ, internal, restricted). Define inter-segment traffic rules. Plan micro-segmentation.
**Time**: 2-4h. **Edge Cases**: Legacy apps requiring flat network → compensatory controls; east-west traffic → service mesh; IoT devices → isolated segment.

### Step 3: Firewall Configuration
Define firewall rules. Implement least privilege access. Configure NAT. Plan rule lifecycle management.
**Time**: 2-4h. **Edge Cases**: Cloud firewalls → infrastructure as code; rule conflicts → analysis tools; performance → hardware acceleration.

### Step 4: VPN and Remote Access
Select VPN technology. Configure encryption. Implement MFA for remote access. Plan split tunneling.
**Time**: 1-2h. **Edge Cases**: Zero trust replacement → ZTNA; performance → protocol optimization; mobile clients → always-on VPN.

### Step 5: Monitoring and Response
Deploy network monitoring. Configure IDS/IPS. Design alerting. Plan incident response for network events.
**Time**: 1-2h. **Edge Cases**: Encrypted traffic → metadata analysis; high volume → sampling; false positives → tuning.

### Step 6: Testing and Validation
Penetration test network. Validate segmentation. Test failover. Document compliance evidence.
**Time**: 1-2h. **Edge Cases**: Production impact → maintenance window; external testing → scope definition; findings → remediation plan.

## Quality Gates

| Gate | Criteria |
|------|----------|
| QG1 | Network topology documented |
| QG2 | Segmentation designed |
| QG3 | Firewall rules configured |
| QG4 | VPN implemented |
| QG5 | Monitoring active |
| QG6 | Testing complete |

## Anti-Patterns

1. **Flat network** — No segmentation between trust zones
2. **Any-any rules** — Overly permissive firewall rules
3. **No monitoring** — Blind to network threats
4. **Set and forget** — Firewall rules never reviewed

## Edge Cases

- Cloud-native → Use cloud-native security groups
- Hybrid cloud → Consistent security policies
- Legacy systems → Compensating controls
- High availability → Redundant firewalls

## Output

Use: `templates/network-security-report.md` | Capability: `capabilities/network-security.md`

## Related Workflows

| Workflow | Relationship | When to Use |
|----------|-------------|-------------|
| [10-security](workflows/10-security.md) | **Related** | Security audit |
| [30-devsecops](workflows/30-devsecops.md) | **Related** | DevSecOps pipeline |
| [56-iam](workflows/56-iam.md) | **Related** | Access control |
| [61-penetration-testing](workflows/61-penetration-testing.md) | **Related** | Network pentest |
