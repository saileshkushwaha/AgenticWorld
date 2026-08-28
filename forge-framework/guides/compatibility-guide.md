# Model & Tool Compatibility Guide - Forge Engineering Lifecycle Framework

## Overview

This document ensures the Forge framework produces consistent outputs across any LLM model and any agentic tool. It defines adaptation strategies, fallback mechanisms, and validation procedures.

## Model-Agnostic Compatibility

### Core Principles

1. **No model-specific features**: The framework uses only text-based instructions that any instruction-tuned LLM can follow
2. **Template-enforced structure**: All outputs follow defined templates regardless of model
3. **Objective quality gates**: Quality criteria are measurable and not model-dependent
4. **Fallback mechanisms**: Clear procedures when models produce different outputs

### Model Capability Tiers

#### Tier 1: Full-Capability Models
Examples: Claude 3.5+, GPT-4+, Gemini Pro+
- Can handle complex multi-step workflows
- Follow detailed instructions precisely
- Produce structured outputs matching templates
- **Configuration**: Use default settings

#### Tier 2: Mid-Capability Models
Examples: Claude 3, GPT-3.5, Gemini, Llama 2 70B
- Can handle most workflows with clear guidance
- May need explicit template reminders
- May produce slightly different formatting
- **Configuration**: Enable `strict_mode: true`, use `verbosity: standard`

#### Tier 3: Basic-Capability Models
Examples: Smaller open-source models, older models
- May struggle with complex multi-step workflows
- Need explicit step-by-step guidance
- May produce inconsistent formatting
- **Configuration**: Use `verbosity: minimal`, break tasks into smaller steps

### Model Adaptation Strategies

#### For Verbose Models (e.g., Claude tendencies)
```
- Set verbosity: minimal or standard
- Explicitly request concise output
- Use bullet points instead of prose
- Set word limits per section
```

#### For Concise Models (e.g., GPT tendencies)
```
- Set verbosity: detailed
- Request comprehensive explanations
- Ask for examples and rationale
- Expand on key points
```

#### For Format-Challenged Models
```
- Provide explicit template in prompt
- Use strict_mode: true
- Request output in specific format markers
- Validate and re-format if needed
```

### Output Normalization

#### Step 1: Validate Structure
Check that output contains all required sections from template:
- [ ] Header fields (Created, Phase, Status, Author, Version)
- [ ] Executive Summary
- [ ] Main content sections
- [ ] Decisions & Rationale table
- [ ] Risks & Mitigations table
- [ ] Assumptions, Open Issues, Next Steps, References

#### Step 2: Normalize Format
If structure is correct but formatting differs:
- Convert prose to bullet points where appropriate
- Ensure tables use proper Markdown syntax
- Standardize header levels
- Normalize list formats

#### Step 3: Fill Gaps
If sections are missing:
- Request missing sections explicitly
- Use template to prompt for specific content
- Validate completeness against quality gates

### Hallucination Detection

#### Common Hallucination Patterns
1. **Fabricated statistics**: Numbers without sources
2. **False citations**: References that don't exist
3. **Invented features**: Capabilities that don't exist
4. **Incorrect versions**: Wrong version numbers or dates
5. **Plagiarized content**: Copied without attribution

#### Detection Methods
1. **Source verification**: Check that all claims have citations
2. **Cross-reference check**: Verify claims against known sources
3. **Plausibility check**: Assess if claims are reasonable
4. **Consistency check**: Ensure internal consistency

#### Handling Hallucinations
1. Flag the specific claim as unverified
2. Request source or evidence
3. If unverifiable, mark as "unverified" in output
4. Do not include unverified claims in recommendations

### Iterative Refinement

#### When Output Doesn't Meet Quality Gates
1. **Identify gaps**: Which quality gates failed?
2. **Provide specific feedback**: What exactly is missing?
3. **Request targeted revision**: Ask for specific improvements
4. **Re-validate**: Check if revision meets criteria
5. **Repeat if needed**: Iterate up to 3 times

#### Refinement Prompt Template
```
The output does not meet the following quality gates:
- [List failed gates]

Please revise the output to address:
- [Specific issue 1]
- [Specific issue 2]
- [Specific issue 3]

Ensure the revised output follows the template: [template name]
```

## Agentic Tool Compatibility

### Tool Categories

#### Category 1: CLI Tools (e.g., Kilo, Claude CLI, GPT CLI)
- Text-based interaction
- System prompt + user prompt model
- **Configuration**: Load system prompt as system prompt, workflow as context

#### Category 2: Web Interfaces (e.g., ChatGPT, Claude.ai, Gemini)
- Chat-based interaction
- May have system prompt field
- **Configuration**: Use system prompt field if available, else prepend to first message

#### Category 3: API-Based (e.g., OpenAI API, Anthropic API)
- Programmatic access
- System + user message model
- **Configuration**: System prompt as system message, workflow as user message context

#### Category 4: IDE Integrations (e.g., Cursor, Copilot, Cody)
- Code-focused interaction
- May have custom prompt fields
- **Configuration**: Adapt system prompt to IDE's prompt structure

#### Category 5: Custom Agents (e.g., LangChain, AutoGPT, CrewAI)
- Framework-based agents
- May have memory, tools, planning
- **Configuration**: Use system prompt as agent persona, workflow as task description

### Tool Capability Detection

#### Detecting Available Capabilities
1. **Function calling**: Can the tool call external functions?
2. **Code execution**: Can the tool execute code?
3. **Web search**: Can the tool search the web?
4. **File access**: Can the tool read/write files?
5. **Multi-modal**: Can the tool process images, PDFs?

#### Adapting to Tool Capabilities

##### If Web Search Available
- Use real-time search for research
- Validate sources in real-time
- Access up-to-date information

##### If No Web Search
- Rely on model's training data
- Note knowledge cutoff limitations
- Recommend manual verification of recent information

##### If Code Execution Available
- Execute code examples to verify
- Run benchmarks and tests
- Validate technical claims

##### If No Code Execution
- Provide code for manual execution
- Note that code is unverified
- Recommend testing before use

### Context Window Management

#### Small Context (< 8K tokens)
- Use only system prompt OR workflow (not both)
- Break complex tasks into smaller steps
- Use minimal verbosity
- Reference files instead of including content

#### Medium Context (8K-32K tokens)
- Load system prompt + one workflow
- Use standard verbosity
- Include relevant context

#### Large Context (32K+ tokens)
- Load system prompt + workflow + additional context
- Use detailed verbosity
- Include examples and references

### Session Management

#### Single-Session Workflow
1. Load system prompt
2. Load workflow
3. Execute task
4. Review output
5. Iterate if needed

#### Multi-Session Workflow
1. **Session 1**: Research → Save research report
2. **Session 2**: Load research report → Analysis → Save analysis report
3. **Session 3**: Load analysis report → Design → Save design report
4. **Continue** for each phase

#### Context Preservation Between Sessions
1. Always reference previous artifacts by name
2. Include key decisions from previous phases
3. Maintain decision log across sessions
4. Use consistent terminology

### Streaming Output Handling

#### For Streaming Tools
- Output appears incrementally
- May need to wait for complete output before validation
- Can provide real-time feedback during generation

#### For Non-Streaming Tools
- Output appears all at once
- Easier to validate complete structure
- May need to wait longer for response

## Consistency Validation

### Cross-Model Consistency Check
To verify output consistency across models:
1. Run same task on 2+ models
2. Compare output structure (should match template)
3. Compare key findings (should be similar)
4. Compare recommendations (should be consistent)
5. Document and resolve discrepancies

### Consistency Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Structure consistency | 100% | All outputs match template |
| Finding consistency | ≥80% | Key findings agree across models |
| Recommendation consistency | ≥90% | Recommendations agree across models |
| Quality gate pass rate | ≥90% | Outputs pass quality gates |

### Discrepancy Resolution
When outputs differ between models:
1. Identify the specific differences
2. Assess which output has better evidence
3. Check for hallucinations in either output
4. Synthesize the best elements from both
5. Document the resolution

## Configuration for Compatibility

### Universal Configuration (Works with Any Model/Tool)
```markdown
# forge.config.md

## Global Settings
- output_format: markdown
- quality_gates: enabled
- verbosity: standard
- language: en
- strict_mode: true
- validate_output: true
- normalize_output: true
```

### Model-Specific Overrides
```markdown
## Model Overrides
- model_family: [claude|gpt|gemini|llama|other]
- verbosity: [minimal|standard|detailed]
- template_reminders: true
- max_retries: 3
```

### Tool-Specific Overrides
```markdown
## Tool Overrides
- tool_type: [cli|web|api|ide|agent]
- context_window: [small|medium|large]
- streaming: [true|false]
- session_persistence: [true|false]
```

## Troubleshooting Compatibility Issues

### Issue: Output Doesn't Match Template
**Solution**: Enable `strict_mode: true`, provide explicit template in prompt, request specific format

### Issue: Model Skips Steps
**Solution**: Break into smaller steps, number each step, request confirmation after each step

### Issue: Inconsistent Outputs Between Models
**Solution**: Increase `strict_mode`, add more specific instructions, use template reminders

### Issue: Hallucinated Information
**Solution**: Enable fact-checking, require sources for all claims, cross-reference key facts

### Issue: Context Window Exceeded
**Solution**: Use smaller context mode, break task into phases, reference files instead of including content

### Issue: Tool Doesn't Support System Prompt
**Solution**: Prepend system prompt to first user message, use persona framing
