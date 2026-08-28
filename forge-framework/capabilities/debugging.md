# Debugging Capability

## Definition

The ability to identify, isolate, and resolve defects through systematic investigation and root cause analysis.

## Scope

### In Scope
- Issue reproduction
- Defect isolation
- Root cause analysis
- Fix implementation
- Regression testing
- Prevention strategy
- Debug documentation

### Out of Scope
- Test case design (see Testing capability)
- Architecture changes (see Design capability)
- Infrastructure issues (see Deployment capability)

## Skills

### Reproduction
- Understanding reported issues
- Creating minimal reproduction cases
- Identifying reproduction conditions
- Documenting reproduction steps
- Determining reproducibility

### Isolation
- Binary search debugging
- Git bisect usage
- Strategic logging
- Debugger usage
- Variable isolation
- Configuration isolation

### Root Cause Analysis
- 5 Whys technique
- Fishbone (Ishbone) analysis
- Fault tree analysis
- Change analysis
- Pattern recognition

### Fix Implementation
- Fix design and evaluation
- Minimal, targeted fixes
- Defensive coding
- Test creation for fixes
- Regression prevention

### Prevention
- Automated test addition
- Static analysis rule creation
- Code review checklist updates
- Monitoring improvements
- Knowledge sharing

## Inputs
- Defect reports
- Test failure logs
- Application logs
- System metrics
- User reports

## Outputs
- Reproduction documentation
- Root cause analysis document
- Implemented fix
- Regression test results
- Prevention strategy
- Debug report

## Quality Criteria
- Issue reproduced successfully
- Root cause identified and documented
- Fix addresses root cause
- Fix verified with tests
- No regressions introduced
- Prevention measures implemented

## Related Workflows
- `workflows/06-debug.md` - Primary workflow
- `workflows/05-test.md` - Source of defect reports
- `workflows/04-implement.md` - Where fixes are applied

## Metrics
- Mean time to detect (MTTD)
- Mean time to resolve (MTTR)
- Reproduction success rate
- Fix effectiveness (% of fixes that stick)
- Recurrence rate
