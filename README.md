# ebac-quality-assurance-engineering

## Project structure (Cypress)

- cypress/e2e/ # Specs grouped by feature
- cypress/pages/ # Page Objects (locators + page methods)
- cypress/actions/ # Flows/actions that use Pages
- cypress/fixtures/ # Static test data
- cypress/utils/ # Pure helpers (no UI)
- cypress/support/ # Cypress setup files
- cypress/support/commands/ # Custom commands grouped by domain

## Naming conventions

- Specs: `cypress/e2e/<feature>/<feature>.cy.js`
- Pages: `cypress/pages/<Thing>Page.js`
- Actions: `cypress/actions/<Thing>Actions.js`
- Commands: `cypress/support/commands/<domain>.commands.js`

## Environments

This project reads the base URL from `CYPRESS_baseUrl`.

### Local setup

1. Copy the example env file:
   - `cp .env.example .env`
2. Set `CYPRESS_baseUrl` in `.env`

### Run

- Open Cypress: `npm run cy:open`
- Run headless: `npm run cy:run`

### Override baseUrl inline (Git Bash)

- `CYPRESS_baseUrl=https://example.com npm run cy:run`

## Roadmap (Steps)

This repository follows a step-by-step roadmap to build a scalable Cypress automation framework.

- Tracking Epic: #8

### Completed (Steps 1–4)

- ✅ Step 1: Repository foundation (Git + GitHub) — #9
- ✅ Step 2: Node + Cypress setup (npm) — #10
- ✅ Step 3: Code quality baseline (ESLint + Prettier) — #11
- ✅ Step 4: Scalable structure (POM-friendly) — #12

### In progress

- 🔧 Step 5: Config + environments — #13
