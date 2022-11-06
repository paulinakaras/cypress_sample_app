# Cypress sample application

First application with Cypress library for training purposes.

## Cypress commands

- `node_modules/.bin/cypress open` opens inital cypress web view
- `npx cypress open` opens inital cypress web view
- `npx cypress run` runs tests scenarios, designed for CI/CD purposes, it's not opening web browser
- `npx cypress run -h` list all possible properties for run command
- `npx cypress run -s cypress/e2e/1-getting-started/*` runs all tests located in cypress/e2e/1-getting-started/ folder
- `npx cypress run -s cypress/e2e/1-getting-started/todo.cy.js` runs test located in cypress/e2e/1-getting-started/todo.cy.js file
