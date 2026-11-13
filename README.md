# Plexmoor starter

Template for Plexmoor LLC projects. Every pull request into `main` automatically runs:

- **Lint and test**: ESLint + Vitest
- **Security scan**: Semgrep (code vulnerabilities) + Gitleaks (leaked secrets)

`main` is protected: changes go through a pull request and must pass both checks. Dependabot opens weekly update PRs.

```
npm ci && npm run lint && npm test
```
