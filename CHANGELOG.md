# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
