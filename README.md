# Simple Node CI/CD App

This repository contains a minimal Node.js (Express) application and a GitHub Actions CI/CD workflow.

## What is included
- `index.js` — small Express app
- `package.json` — scripts and dependency
- `test/test.js` — basic test run by `npm test`
- `Dockerfile` — Docker image build
- `.github/workflows/ci-cd.yml` — GitHub Actions workflow to run tests and build & optionally push Docker image
- `.gitignore`

## How to use locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npm test
   ```
3. Start app:
   ```bash
   npm start
   ```
4. Open http://localhost:3000

## GitHub Actions notes
The workflow will:
- checkout the code
- set up Node.js
- install dependencies and run tests
- build Docker image
- optionally push to Docker Hub if `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` secrets are provided

To enable Docker push, add repo secrets `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` (or use a different registry and update the workflow).
