# AGENTS.md

## Project

OpenCode plugin that bundles 5 Spring Boot AI agents. Published as `@marcelorodrigo/opencode-spring-crew` on npm. Also ships manifests for Claude Code and GitHub Copilot.

## Commands

```sh
npm ci                # install (use ci, not install)
npm run typecheck     # tsc --noEmit
npm run build         # tsup → dist/
npm run dev           # tsup --watch
```

No tests, linter, or formatter are configured. CI runs `typecheck` then `build`.

## How the build works

- Entry point: `src/opencode/index.ts`
- Agent prompts live in `agents/*.agent.md`. tsup bundles them as text strings into `dist/index.js` via `loader: { '.md': 'text' }`.
- CI verifies every agent `name:` from frontmatter appears in the bundle. If you add/rename an agent, the build-verify step will catch mismatches.

## Agent `.agent.md` contract

Each file in `agents/` must have YAML frontmatter with exactly `name` and `description`, followed by the prompt body:

```
---
name: Agent Name
description: One-line description
---
Prompt content here...
```

`src/opencode/parse-agent-md.ts` parses this. The agent key is `spring-crew:<filename-without-.agent.md>` (e.g. `spring-crew:rubber-duck`).

## Version management

Versions must be identical across 7 files. release-please keeps them in sync on `master`. The files:
- `package.json`, `package-lock.json`
- `.github/plugin/plugin.json`, `.github/plugin/marketplace.json`
- `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`

Do not bump versions manually; release-please handles it via conventional commits.

## Conventions

- Default branch is `master` (not `main`).
- Conventional commits required: `feat`, `fix`, `perf`, `deps`, `docs`, `chore`, `ci`, `refactor`, `test`, `build`, `style`, `revert`.
- Node >= 24 (`.node-version`).
- Zero runtime dependencies; everything is devDependencies.
- `.opencode/` at root is a local plugin config for development — not part of the published package.
