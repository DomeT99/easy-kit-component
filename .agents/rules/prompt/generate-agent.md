Generate a project documentation in markdown format for the project located at the root of the repository.

Save it in a file named `AGENTS.md` in the `.agents/rules` directory.

Use the following structure for the documentation:

```markdown
# [Project-name]

## Overview

### Project Name

### Project Description

## Architecture

### Project Structure

### Technology Stack

### High-level Components

#### [Component-name]

##### Repository Location

##### Description

##### API / Interface / Contracts specification

##### Dependencies and Integrations

## Infrastructure

### Setup Instructions

### Local Development

## Development Guidelines

### Coding Standards
```

## Instructions

- Analyze the project located at the root of the repository to gather all necessary information for each section of the documentation. Read the project structure and code files to understand the architecture, components, and dependencies.
- Replace the placeholders (e.g., `[Project-name]`, `[Component-name]`) with actual values relevant to the project. If certain sections are not applicable, omit them from the documentation. Ensure that the documentation is clear, concise, and well-organized.
- Use bullet points, tables, and diagrams where appropriate to enhance readability and understanding.
- Architecture > Overview try to include a high-level diagram of the architecture in mermaid syntax if possible.
- In the technology stack section, list all major technologies, frameworks, and tools used in the project, but omit versions unless specifically relevant (and in that case include only the major version).
- DO NOT INCLUDE ANY OTHER INFORMATION THAN THE ONE REQUESTED.
- BE SURE TO NOT ADD SENSITIVE INFORMATION OR CREDENTIALS.
