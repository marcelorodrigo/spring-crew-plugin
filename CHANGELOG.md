# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.2](https://github.com/marcelorodrigo/spring-crew-plugin/compare/opencode-spring-crew-v0.3.1...opencode-spring-crew-v0.3.2) (2026-04-22)


### Bug Fixes

* enhance approval process in orchestrator agent with two-step output pattern ([#30](https://github.com/marcelorodrigo/spring-crew-plugin/issues/30)) ([16c1ce0](https://github.com/marcelorodrigo/spring-crew-plugin/commit/16c1ce06616489fcac2e9c04aec8865747086a57))

## [0.3.1](https://github.com/marcelorodrigo/spring-crew-plugin/compare/opencode-spring-crew-v0.3.0...opencode-spring-crew-v0.3.1) (2026-04-21)


### Bug Fixes

* refine orchestrator agent responses and remove emojis for clarity ([#21](https://github.com/marcelorodrigo/spring-crew-plugin/issues/21)) ([dfb4313](https://github.com/marcelorodrigo/spring-crew-plugin/commit/dfb4313b5be2790e258411678bb8dc1b3cebbd4d))

## [0.3.0](https://github.com/marcelorodrigo/spring-crew-plugin/compare/opencode-spring-crew-v0.2.0...opencode-spring-crew-v0.3.0) (2026-04-20)


### Features

* Add Claude Code plugin and marketplace support ([#14](https://github.com/marcelorodrigo/spring-crew-plugin/issues/14)) ([e74515b](https://github.com/marcelorodrigo/spring-crew-plugin/commit/e74515ba8d7938443afb07197f05a199e398f638))
* add orchestrator agent for automated pipeline execution ([#16](https://github.com/marcelorodrigo/spring-crew-plugin/issues/16)) ([8fa1c1f](https://github.com/marcelorodrigo/spring-crew-plugin/commit/8fa1c1feed70f11f2bc58fc81279fc1e80494029))
* **opencode:** add opencode plugin support ([#3](https://github.com/marcelorodrigo/spring-crew-plugin/issues/3)) ([29c24fa](https://github.com/marcelorodrigo/spring-crew-plugin/commit/29c24fa251c360f61bd11fe2cb9325dfbb5911cc))
* Package Spring Crew agents as a GitHub Copilot plugin ([7383209](https://github.com/marcelorodrigo/spring-crew-plugin/commit/738320947b22c5864efe89d2188c196df5665aac))
* Package Spring Crew agents as a GitHub Copilot plugin ([17e95d5](https://github.com/marcelorodrigo/spring-crew-plugin/commit/17e95d519e30cbdfaa80cadb04875edba8d96d16))
* **plugin:** Package Spring Crew as Copilot CLI plugin with marketplace support ([5055704](https://github.com/marcelorodrigo/spring-crew-plugin/commit/505570439b2c13dfa5fc633141bce5b0022501ba))
* rename npm package to @marcelorodrigo/opencode-spring-crew ([#8](https://github.com/marcelorodrigo/spring-crew-plugin/issues/8)) ([d5af85e](https://github.com/marcelorodrigo/spring-crew-plugin/commit/d5af85ebe5215f97d3c8b84099b28ced7059fa81))


### Bug Fixes

* **ci:** harden validate-plugin workflow ([b248532](https://github.com/marcelorodrigo/spring-crew-plugin/commit/b2485324e702a5434bb34692521ed2a75e27bdfa))
* update README raw link from main to master branch ([#15](https://github.com/marcelorodrigo/spring-crew-plugin/issues/15)) ([7e855e4](https://github.com/marcelorodrigo/spring-crew-plugin/commit/7e855e4614a8f229a5bc8a1ea16e344f16d7b7be))

## [Unreleased]

### Changed

- Bump version to 0.2.0 across `package.json`, `plugin.json`, and `marketplace.json`

## [0.1.1] - 2026-04-20

### Changed

- Orchestrator agent now uses interactive `ask_user` choices for approval gates and error handling instead of free-form text prompts

## [0.1.0] - 2026-04-17

### Added

- Orchestrator agent for automated multi-agent pipeline execution (Rubber Duck → Architect → Implementer → Code Reviewer)
- Claude Code plugin and marketplace support (`.claude-plugin/` directory)

### Fixed

- README raw content link updated from `main` to `master` branch

### Changed

- Upgrade Node.js to 24 LTS; workflows now use `.node-version` file
- npm publishing switched to Node 24 with latest npm for OIDC Trusted Publisher compatibility
- Improved README with structured agent descriptions and detailed installation steps

## [0.0.2] - 2026-04-15

### Changed

- npm publishing switched from `NPM_TOKEN` secret to OIDC Trusted Publisher (provenance support)
- Improved build configuration and tooling setup

## [0.0.1] - 2026-04-15

### Added

- Initial release: Spring Crew agents packaged as a GitHub Copilot plugin
- opencode plugin support
- Dependabot configuration for npm and GitHub Actions dependencies
- Hardened `validate-plugin` CI workflow
- Mermaid pipeline diagram in README

### Changed

- npm package renamed to `@marcelorodrigo/opencode-spring-crew`
- Upgraded `actions/checkout` from v4 to v6
- Upgraded `actions/setup-node` from 4.4.0 to 6.3.0

[Unreleased]: https://github.com/marcelorodrigo/spring-crew-plugin/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/marcelorodrigo/spring-crew-plugin/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/marcelorodrigo/spring-crew-plugin/compare/v0.0.2...v0.1.0
[0.0.2]: https://github.com/marcelorodrigo/spring-crew-plugin/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/marcelorodrigo/spring-crew-plugin/releases/tag/v0.0.1
