# Cypress sample application

First application with Cypress library for training purposes.

## GitHub comments

- `git init`
- `git config user.name "paulinakaras"`
- `git config user.email "ppaulina.karas@gmail.com"`

- `git status`
- `git add .`
- `git commit -m "title"`
- `git push -u origin main`

## Cypress commands

- `node_modules/.bin/cypress open` opens inital cypress web view
- `npx cypress open` opens inital cypress web view
- `npx cypress open --config-file <config_file_name>` opens inital cypress web view with custom config file
- `npx cypress run` runs tests scenarios, designed for CI/CD purposes, it's not opening web browser
- `npx cypress run -h` list all possible properties for run command
- `npx cypress run -s cypress/e2e/1-getting-started/*` runs all tests located in cypress/e2e/1-getting-started/ folder
- `npx cypress run -s cypress/e2e/1-getting-started/todo.cy.js` runs test located in cypress/e2e/1-getting-started/todo.cy.js file

## For running 03_nextjs_application.cy.js 

- Clone repository from https://github.com/hoangvvo/nextjs-mongodb-app and run locally with:
 `npm install` command -> add `MONGODB_URI="mongodb://127.0.0.1:27017/"` variable in `.env.local` file ->  `npm run dev` command
- Run `docker-compose -f docker-compose.yaml up` comand to start mongodb server
