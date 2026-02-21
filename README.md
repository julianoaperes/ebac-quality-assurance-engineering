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
