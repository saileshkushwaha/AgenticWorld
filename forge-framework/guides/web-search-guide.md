# Web Search Integration Guide - Forge Engineering Lifecycle Framework

## Overview

This document provides explicit guidance for using web search tools and APIs for research within the Forge framework. Effective web search is critical for deep research and accurate output.

## Search Query Templates

### Technology Evaluation Queries

```
# Basic technology comparison
"{technology A} vs {technology B} {year}" site:news.ycombinator.com
"{technology A} vs {technology B} comparison" site:medium.com OR site:dev.to
"{technology A} benchmarks {year}" site:github.com
"{technology A} limitations" site:news.ycombinator.com

# Deep research queries
"{technology} architecture deep dive" site:infoq.com OR site:oreilly.com
"{technology} production experience" site:engineering.{company}.com
"{technology} failure stories" site:news.ycombinator.com OR site:reddit.com
"{technology} performance tuning" site:benchmarksgame.alioth.debian.org
```

### Best Practices Queries

```
"{domain} best practices {year}" site:docs.{vendor}.com
"{domain} anti-patterns" site:refactoring.guru OR site:sourcemaking.com
"{domain} design patterns" site:oreilly.com OR site:manning.com
"{domain} style guide" site:google.com OR site:microsoft.com
```

### Competitive Analysis Queries

```
"{product} vs {competitor} {year}" site:g2.com OR site:capterra.com
"{product} reviews" site:trustradius.com OR site:g2.com
"{product} alternatives" site:alternativeto.net
"{industry} trends {year}" site:gartner.com OR site:forrester.com
```

### Academic Research Queries

```
"{topic} research paper" site:scholar.google.com
"{topic} survey" site:arxiv.org
"{topic} conference paper" site:dl.acm.org OR site:ieeexplore.ieee.org
"{topic} thesis" site:proquest.com
```

## Search Strategies

### Strategy 1: Snowball Sampling
1. Start with one high-quality source
2. Extract all references and citations
3. Follow up on the most cited/relevant sources
4. Repeat until saturation (no new information)

### Strategy 2: Multi-Angle Search
1. Search from technology perspective ("X vs Y")
2. Search from problem perspective ("how to solve Z")
3. Search from domain perspective ("Z in domain W")
4. Search from experience perspective ("lessons learned from X")
5. Synthesize findings across all angles

### Strategy 3: Source Triangulation
1. Find claim in one source
2. Search for confirming sources
3. Search for contradicting sources
4. Assess consensus and document disagreements
5. Weight by source credibility

### Strategy 4: Temporal Analysis
1. Search for latest information (current year)
2. Search for historical context (2-5 years ago)
3. Search for future direction (roadmaps, RFCs)
4. Identify trends and evolution patterns

### Strategy 5: Expert Identification
1. Search for "{topic} expert" or "{topic} author"
2. Identify most cited/referenced authors
3. Search for their other works
4. Check their social media/blog for latest views
5. (If possible) Reach out for consultation

## Search Tool Configuration

### Google Scholar
- Set up alerts for key topics
- Use "Cited by" to find follow-up research
- Use "Related articles" to expand coverage
- Export citations in BibTeX format

### GitHub
- Search issues for real-world problems
- Search discussions for community insights
- Check stars/forks for adoption metrics
- Review release notes for evolution

### Stack Overflow
- Search for common problems and solutions
- Check accepted answers for best practices
- Look for highly voted answers
- Identify recurring themes in questions

### Reddit/Hacker News
- Search for experience reports
- Check for community consensus
- Identify common pitfalls
- Find alternative perspectives

## Search Result Evaluation

### Credibility Indicators
- Author expertise and reputation
- Publication venue quality
- Citation count and influence
- Recency and relevance
- Corroboration by other sources

### Red Flags
- Single source for critical claims
- Outdated information without updates
- Vendor-sponsored content without disclosure
- Lack of technical depth
- Contradictory information without resolution

## Citation Format Standard

### IEEE Format (Recommended)
```
[#] Author, "Title," Publication, vol. X, no. Y, pp. Z, Month Year.
```

### Examples
```
[1] J. Kreps, N. Narkhe, and J. Rao, "Kafka: A Distributed Messaging System for Log Processing," in Proc. 6th Int. Workshop Netw. Meets Databases (NetDB), 2011.
[2] "Amazon SQS Documentation," AWS, 2024. [Online]. Available: https://docs.aws.amazon.com/sqs/
[3] M. Kleppmann, Designing Data-Intensive Applications. O'Reilly Media, 2017.
```

## Paywalled Content Handling

### Alternatives to Paywalled Content
1. **Preprint versions** — Search arXiv, SSRN, or author websites
2. **Author copies** — Check author's personal website or institutional repository
3. **Open access mirrors** — Use Google Scholar's "All versions" feature
4. **Library access** — Use institutional or public library subscriptions
5. **Interlibrary loan** — Request through library services
6. **Contact authors** — Email authors directly (often willing to share)
7. **Alternative sources** — Find similar content from open sources

### Documentation
- Note when content was inaccessible
- Document alternative sources used
- Flag findings that need stronger sources
- Plan for source upgrade when access becomes available

## Research Time Tracking

### Time Budget Template

| Phase | Estimated | Actual | Variance |
|-------|-----------|--------|----------|
| Objectives | [min] | [min] | [min] |
| Gathering | [hrs] | [hrs] | [hrs] |
| Verification | [hrs] | [hrs] | [hrs] |
| Evaluation | [hrs] | [hrs] | [hrs] |
| Synthesis | [hrs] | [hrs] | [hrs] |
| **Total** | **[hrs]** | **[hrs]** | **[hrs]** |

### Time Management Rules
- If gathering exceeds 150% of estimate, reassess scope
- If verification reveals major gaps, escalate to stakeholder
- Track time per source to improve future estimates
- Document time savings from reusable research
