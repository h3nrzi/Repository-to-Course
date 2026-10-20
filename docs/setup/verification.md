# Project preparation verification

Date: 2026-10-20
Baseline: `1a329bd` (`docs: add Phase 1 module delivery tickets`)
Scope: application scaffold, relevant missing skills, and development/build verification only.

## Reproduction

The official `create-next-app@16.4.2` empty template was generated in a temporary directory, then its application/configuration files were copied into this existing repository. Existing planning documents, agent instructions, and skills were preserved.

```bash
npx --yes create-next-app@16.4.2 /tmp/example/repository-to-course \
  --ts --app --src-dir --eslint --no-tailwind --no-react-compiler \
  --no-cache-components --use-npm --import-alias '@/*' --empty \
  --skip-install --disable-git --no-agents-md --no-agent-feedback --yes
```

The final scaffold adds static export, directory-style routes, explicit type checking, an aggregate check command, a system-font placeholder, and Node/npm version guidance. It disables Next.js's generated agent rules so `next dev` preserves this repository's maintained instructions. No deployment connection or publication was configured.

React and React DOM were updated together from the template's `19.3.0` to stable `19.3.1`; Node type definitions use the runtime's major version, 24.

Context7 MCP resolved **Next.js** to `/vercel/next.js`, then retrieved separate documentation for create-next-app initialization, static export, and generated agent instructions. The npm registry supplied the actual stable package versions; the committed lockfile records exact resolved dependencies. Reference pages: [CLI](https://nextjs.org/docs/app/api-reference/cli/create-next-app), [static exports](https://nextjs.org/docs/app/guides/static-exports), and [agentRules](https://nextjs.org/docs/app/api-reference/config/next-config-js/agentRules).

## Actual preflight evidence

Environment: macOS/Darwin 25.1.0, Node.js 24.22.0, npm 11.19.1, Python 3.14.7. Installed application versions: Next.js 16.4.2, React/React DOM 19.3.1, TypeScript 5.9.3.

| Check | Actual result |
| --- | --- |
| Clean lockfile installation | `npm ci --no-audit` passed, installing 345 packages. The first `npm ci` was interrupted after its automatic registry audit stalled; dependency audit was performed separately below. |
| Lint | `npm run lint` passed with zero warnings. Vendored skills and generated browser evidence are excluded. |
| Type checking before the first build | `npm run typecheck` generated route types and passed strict `tsc --noEmit`. |
| Final aggregate verification | `npm run check` passed after adding the scaffold icon: lint, route type generation, strict type checking, and production build. |
| Static output | Next.js reported `/`, `/_not-found`, and `/icon.svg` as static. `out/index.html` and `out/404.html` exist. No planning/skill directories were exported. |
| Exported-file HTTP checks | Served `out/` with Python at `http://127.0.0.1:8765`. Root returned 200 with the correct heading/title; all eight linked local assets returned 200. `/404.html` returned 200 with the 404 document; an unknown path returned HTTP 404. |
| Development server | `npm run dev -- --hostname 127.0.0.1` became ready at port 3000. Root and 16 linked development assets returned 200 with the correct heading/title. Server stopped after verification. |
| Browser smoke check | Chrome through Playwright CLI 0.1.22: final root snapshot and reload passed, with zero console errors/warnings. Visually inspected the 1280×720 desktop and 390×844 mobile screenshots and the exported 404 document. A missing-favicon error in the initial empty template was resolved with the local static SVG icon; the final fresh session was clean. |
| Skill provenance | All 86 files across the three additions match the inspected pinned downloads; source revisions and SHA-256 values are in `skills-sources.json`. The Playwright wrapper's help/version commands ran successfully. |
| Git scope and generated files | Existing `AGENTS.md`, glossary, planning documents, delivery issues, and original `skills-lock.json` have no changes. Dependencies, `.next/`, `out/`, generated type declarations, environment files, Vercel state, and browser evidence are ignored. Authored files pass `git diff --check`; vendored upstream whitespace/CRLF is preserved to maintain source hashes. |

Local browser evidence is retained under ignored `output/playwright/setup/`: `desktop.png`, `mobile.png`, `not-found.png`, and CLI snapshots/logs. The guide records observations independently of those uncommitted artifacts. The temporary browser/static-server sessions are stopped before handoff.

Dependency audit limitation: `npm audit --omit=dev --json` passed with zero vulnerabilities. The full audit reported five high-severity entries from one development-tool chain: `eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch` → `braces`. The underlying [braces advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) covers the latest published `braces@3.0.3`; no patched stable version was available in the registry during setup. npm's proposed forced fix would downgrade the Next.js lint configuration to 14.2.35, so it was not applied.

The template's ESLint 9.39.5 is deprecated upstream. The current React, JSX accessibility, and import plugins in Next.js's preset still declare ESLint 9 compatibility and exclude ESLint 10; no peer-dependency overrides were introduced. These remain upstream development-tool limitations. Revisit them when compatible updates are published. They are absent from production dependencies and the exported site's runtime.

## Code review

The project's code-review skill ran independent Standards and Spec reviewers against `git diff 1a329bd...HEAD` for the separate setup commit. The user request was the scope source; existing repository instructions and the documented setup were the standards sources. Only this review record was added after those reviews.

### Standards

No findings. The scaffold follows the documented conventions, preserves existing instructions and delivery tickets, and introduces no actionable baseline smells. Skill additions have explicit pinned provenance and checksums; the missing global walkthrough skill is recorded for future delivery-ticket handoffs.

### Spec

No findings.

Standards: 0 findings, no worst issue. Spec: 0 findings, no worst issue. The documented upstream lint-tool limitations remain; neither review establishes human acceptance.

## Hands-on setup walkthrough

Human evaluation: **pending** until the user reports observations. Automated results establish setup verification, not human acceptance or delivery-ticket completion.

1. From the repository root, confirm `node --version` reports Node 24 and `npm --version` reports npm 11. Run `npm ci`, then `npm run check`. Expected: lint, type checking, and static export finish successfully; `out/index.html` and `out/404.html` exist.
2. Run `python3 -m http.server 3000 --bind 127.0.0.1 --directory out` and open <http://localhost:3000>. Expected: the heading **Repository-to-Course** and a short placeholder message, with no course catalog, lessons, or exercise.
3. Reload the page, then open <http://localhost:3000/404.html>. Expected: the root still loads from the exported files and the explicit 404 document renders. Python's server returns its own 404 for unknown paths; production routing behavior is outside this setup check.
4. Stop the static server with Ctrl+C. Run `npm run dev` and open the same root address. Expected: the same placeholder under the development server. Stop it with Ctrl+C.
5. Run `git status --short`. Expected after a clean checkout and those commands: no tracked changes. Inspect [the skill audit](skills-audit.md) and confirm the three additions match the intended future work.

First concrete action: run `npm ci && npm run check` from the repository root with Node 24 and npm 11. Report the result and any difference from the expected placeholder or 404 behavior.

No delivery issue is claimed, implemented, marked complete, or accepted by this preparation. The missing global ticket-walkthrough skill is recorded in the skill audit and must be resolved before delivery-ticket handoff.
