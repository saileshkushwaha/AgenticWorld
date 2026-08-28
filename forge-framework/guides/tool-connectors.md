# Tool Connectors & Integration Guide - Forge Engineering Lifecycle Framework

## Overview

This document provides integration patterns for connecting the Forge framework to external tools including Jira, Confluence, Figma, Slack, GitHub/GitLab, and other common development tools.

## Supported Connectors

### Project Management

#### Jira Integration

| Capability | Description | API Endpoint |
|------------|-------------|--------------|
| Create issues | Create stories, tasks, bugs from artifacts | `POST /rest/api/3/issue` |
| Update status | Transition issues based on workflow progress | `POST /rest/api/3/issue/{id}/transitions` |
| Link issues | Link related issues across workflows | `POST /rest/api/3/issueLink` |
| Search | Find issues by project, status, assignee | `GET /rest/api/3/search` |
| Add comments | Add review feedback as comments | `POST /rest/api/3/issue/{id}/comment` |

**Integration Patterns**:

```
Research Complete → Create Jira epic with findings
Analysis Complete → Create stories for requirements
Design Complete → Create tasks for design review
Implementation → Link PRs to stories
Testing → Update status based on test results
Deployment → Close related issues
```

**Authentication**: API token (Basic Auth) or OAuth 2.0

**Configuration**:
```markdown
## Jira Configuration
- jira_url: https://your-domain.atlassian.net
- jira_project: PROJECT_KEY
- jira_token: [API_TOKEN]
- jira_email: [EMAIL]
```

#### Confluence Integration

| Capability | Description | API Endpoint |
|------------|-------------|--------------|
| Create pages | Publish artifacts as Confluence pages | `POST /wiki/rest/api/content` |
| Update pages | Update existing documentation | `PUT /wiki/rest/api/content/{id}` |
| Search | Find related documentation | `GET /wiki/rest/api/content` |
| Attach files | Upload reports and diagrams | `POST /wiki/rest/api/content/{id}/child/attachment` |

**Integration Patterns**:

```
Research Report → Confluence page in Research space
Analysis Report → Confluence page in Requirements space
Design Document → Confluence page in Architecture space
Test Plan → Confluence page in QA space
Incident Report → Confluence page in Incidents space
```

**Authentication**: API token (Basic Auth) or OAuth 2.0

**Configuration**:
```markdown
## Confluence Configuration
- confluence_url: https://your-domain.atlassian.net/wiki
- confluence_space: SPACE_KEY
- confluence_token: [API_TOKEN]
- confluence_email: [EMAIL]
```

### Design Tools

#### Figma Integration

| Capability | Description | API Endpoint |
|------------|-------------|--------------|
| Get files | Retrieve design files for review | `GET /v1/files/{file_key}` |
| Get images | Export design images | `GET /v1/images/{file_key}` |
| Get comments | Read design feedback | `GET /v1/files/{file_key}/comments` |
| Post comments | Add design review feedback | `POST /v1/files/{file_key}/comments` |

**Integration Patterns**:

```
Design Review → Pull Figma files for review
Implementation → Reference Figma designs in tasks
Testing → Compare UI against Figma designs
Documentation → Embed Figma screenshots
```

**Authentication**: Personal Access Token

**Configuration**:
```markdown
## Figma Configuration
- figma_token: [PERSONAL_ACCESS_TOKEN]
- figma_team_id: [TEAM_ID]
```

### Communication

#### Slack Integration

| Capability | Description | API Endpoint |
|------------|-------------|--------------|
| Post messages | Send notifications to channels | `POST /api/chat.postMessage` |
| Update messages | Update status messages | `POST /api/chat.update` |
| Add reactions | Acknowledge events | `POST /api/reactions.add` |
| Upload files | Share reports and artifacts | `POST /api/files.upload` |

**Integration Patterns**:

```
Research Complete → Post summary to #research channel
Incident Detected → Alert #incidents channel
Deployment Complete → Notify #deployments channel
Code Review Ready → DM reviewers
```

**Authentication**: Bot OAuth Token

**Configuration**:
```markdown
## Slack Configuration
- slack_token: [BOT_OAUTH_TOKEN]
- slack_channel: #general
- slack_signing_secret: [SIGNING_SECRET]
```

### Version Control

#### GitHub Integration

| Capability | Description | API Endpoint |
|------------|-------------|--------------|
| Create issues | Create issues from artifacts | `POST /repos/{owner}/{repo}/issues` |
| Create PRs | Create pull requests | `POST /repos/{owner}/{repo}/pulls` |
| Review PRs | Submit code reviews | `POST /repos/{owner}/{repo}/pulls/{id}/reviews` |
| Create releases | Create releases with notes | `POST /repos/{owner}/{repo}/releases` |
| Update status | Update commit status | `POST /repos/{owner}/{repo}/statuses/{sha}` |

**Integration Patterns**:

```
Implementation → Create PR with template
Code Review → Submit review with findings
Testing → Update commit status
Deployment → Create release with notes
Documentation → Update wiki pages
```

**Authentication**: Personal Access Token or GitHub App

**Configuration**:
```markdown
## GitHub Configuration
- github_token: [PERSONAL_ACCESS_TOKEN]
- github_owner: [OWNER]
- github_repo: [REPO]
```

#### GitLab Integration

| Capability | Description | API Endpoint |
|------------|-------------|--------------|
| Create issues | Create issues from artifacts | `POST /projects/{id}/issues` |
| Create MRs | Create merge requests | `POST /projects/{id}/merge_requests` |
| Review MRs | Submit code reviews | `POST /projects/{id}/merge_requests/{iid}/notes` |
| Create releases | Create releases with notes | `POST /projects/{id}/releases` |
| Update pipelines | Trigger pipelines | `POST /projects/{id}/pipeline` |

**Authentication**: Personal Access Token or Project Token

**Configuration**:
```markdown
## GitLab Configuration
- gitlab_url: https://gitlab.com
- gitlab_token: [PERSONAL_ACCESS_TOKEN]
- gitlab_project_id: [PROJECT_ID]
```

### CI/CD

#### Jenkins Integration

| Capability | Description | API Endpoint |
|------------|-------------|--------------|
| Trigger builds | Start CI/CD pipelines | `POST /job/{name}/build` |
| Get status | Check build status | `GET /job/{name}/lastBuild/api/json` |
| Get logs | Retrieve build logs | `GET /job/{name}/lastBuild/consoleText` |

**Configuration**:
```markdown
## Jenkins Configuration
- jenkins_url: https://jenkins.example.com
- jenkins_user: [USERNAME]
- jenkins_token: [API_TOKEN]
```

### Testing

#### TestRail Integration

| Capability | Description | API Endpoint |
|------------|-------------|--------------|
| Create runs | Create test runs | `POST /index.php?/api/v2/add_run/{project_id}` |
| Add results | Add test results | `POST /index.php?/api/v2/add_result/{test_id}` |
| Get cases | Retrieve test cases | `GET /index.php?/api/v2/get_cases/{project_id}` |

**Configuration**:
```markdown
## TestRail Configuration
- testrail_url: https://your-domain.testrail.io
- testrail_user: [EMAIL]
- testrail_token: [API_KEY]
```

### Monitoring

#### Datadog Integration

| Capability | Description | API Endpoint |
|------------|-------------|--------------|
| Create incidents | Create incidents from alerts | `POST /api/v1/events` |
| Query metrics | Retrieve performance metrics | `GET /api/v1/query` |
| Create dashboards | Create monitoring dashboards | `POST /api/v1/dash` |

**Configuration**:
```markdown
## Datadog Configuration
- datadog_api_key: [API_KEY]
- datadog_app_key: [APP_KEY]
- datadog_site: datadoghq.com
```

## MCP (Model Context Protocol) Support

### Overview

MCP is a standard protocol for AI models to interact with external tools. The Forge framework supports MCP for seamless tool integration.

### MCP Server Configuration

```json
{
  "mcpServers": {
    "jira": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-jira"],
      "env": {
        "JIRA_URL": "https://your-domain.atlassian.net",
        "JIRA_API_TOKEN": "[TOKEN]"
      }
    },
    "confluence": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-confluence"],
      "env": {
        "CONFLUENCE_URL": "https://your-domain.atlassian.net/wiki",
        "CONFLUENCE_API_TOKEN": "[TOKEN]"
      }
    },
    "figma": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-figma"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "[TOKEN]"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "[TOKEN]"
      }
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "[TOKEN]"
      }
    }
  }
}
```

### MCP Tool Mapping

| Forge Workflow | MCP Tools | Usage |
|----------------|-----------|-------|
| Research | `jira.search_issues`, `confluence.search` | Find related research |
| Analysis | `jira.create_issue`, `confluence.create_page` | Create requirements |
| Design | `figma.get_files`, `figma.get_comments` | Review designs |
| Implementation | `github.create_pr`, `github.create_issue` | Create PRs and issues |
| Testing | `testrail.add_result`, `github.update_status` | Update test results |
| Deployment | `github.create_release`, `slack.post_message` | Notify deployment |
| Incident | `slack.post_message`, `jira.create_issue` | Alert and track |
| Documentation | `confluence.create_page`, `confluence.update_page` | Publish docs |

## Webhook Integrations

### Incoming Webhooks

Receive events from external tools:

| Source | Event | Action |
|--------|-------|--------|
| GitHub | PR created | Trigger code review |
| GitHub | Issue created | Create analysis task |
| Jira | Issue updated | Update artifact status |
| Slack | Slash command | Execute workflow |
| Figma | Comment added | Create design review |

### Outgoing Webhooks

Send events to external tools:

| Event | Target | Payload |
|-------|--------|---------|
| Research complete | Jira | Epic with findings |
| Analysis complete | Confluence | Requirements page |
| Design complete | Figma | Design review comment |
| Incident detected | Slack | Alert message |
| Deployment complete | GitHub | Release notes |

## API Integration Patterns

### REST API Integration

```markdown
## API Integration Template

### Authentication
- Type: [Bearer Token/API Key/OAuth2]
- Header: Authorization: Bearer {token}

### Endpoints
- Base URL: https://api.example.com/v1
- Create: POST /resources
- Read: GET /resources/{id}
- Update: PUT /resources/{id}
- Delete: DELETE /resources/{id}

### Rate Limiting
- Limit: 100 requests/minute
- Retry: Exponential backoff
```

### GraphQL Integration

```markdown
## GraphQL Integration Template

### Endpoint
- URL: https://api.example.com/graphql

### Queries
- Get issue: query { issue(id: "123") { title status } }
- Search: query { search(query: "term") { results { id title } } }

### Mutations
- Create: mutation { createIssue(input: {title: "New"}) { id } }
- Update: mutation { updateIssue(id: "123", input: {status: "Done"}) { id } }
```

## Integration Workflows

### Research to Jira

```
1. Research workflow completes
2. Extract key findings and recommendations
3. Create Jira epic with findings
4. Create child stories for each recommendation
5. Link to related epics
6. Post summary to Slack
```

### Design to Figma

```
1. Design workflow completes
2. Export design document
3. Create Figma comment with link
4. Tag design reviewers
5. Create Jira task for review
6. Update Confluence with design link
```

### Incident to Slack + Jira

```
1. Incident detected
2. Post alert to #incidents channel
3. Create Jira incident ticket
4. Assign incident commander
5. Post updates to Slack thread
6. Close ticket when resolved
```

### Deployment to GitHub + Slack

```
1. Deployment workflow completes
2. Create GitHub release with notes
3. Tag release in repository
4. Post deployment notice to Slack
5. Update Jira issues to "Deployed"
6. Update Confluence changelog
```

## Configuration File

```markdown
# forge.connectors.md

## Jira
- enabled: true
- url: https://your-domain.atlassian.net
- project: PROJECT_KEY
- token: [API_TOKEN]
- email: [EMAIL]

## Confluence
- enabled: true
- url: https://your-domain.atlassian.net/wiki
- space: SPACE_KEY
- token: [API_TOKEN]
- email: [EMAIL]

## Figma
- enabled: true
- token: [PERSONAL_ACCESS_TOKEN]
- team_id: [TEAM_ID]

## Slack
- enabled: true
- token: [BOT_OAUTH_TOKEN]
- channel: #general

## GitHub
- enabled: true
- token: [PERSONAL_ACCESS_TOKEN]
- owner: [OWNER]
- repo: [REPO]

## GitLab
- enabled: false
- url: https://gitlab.com
- token: [PERSONAL_ACCESS_TOKEN]
- project_id: [PROJECT_ID]

## MCP
- enabled: true
- config_path: .mcp.json

## Webhooks
- enabled: true
- secret: [WEBHOOK_SECRET]
- allowed_ips: [IP_LIST]
```

## Security Considerations

1. **Token Storage**: Never commit tokens to version control
2. **Environment Variables**: Use env vars for sensitive config
3. **Least Privilege**: Grant minimum required permissions
4. **Rotation**: Rotate tokens regularly
5. **Audit Logging**: Log all API calls for audit
6. **Rate Limiting**: Respect API rate limits
7. **Encryption**: Use HTTPS for all API calls

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| 401 Unauthorized | Invalid token | Check token and permissions |
| 403 Forbidden | Insufficient scope | Request additional permissions |
| 429 Too Many Requests | Rate limit exceeded | Implement exponential backoff |
| 404 Not Found | Wrong endpoint | Verify API URL and version |
| 500 Server Error | External tool issue | Check tool status page |
