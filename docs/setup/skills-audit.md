# Setup skill audit

Date: 2026-10-20
Scope: inspect available skills and add only missing capabilities relevant to the Next.js/TypeScript static application. No delivery-ticket workflow was started.

## Existing coverage

Inspected the 38 project skills under `.agents/skills/` and their `skills-lock.json` source records, the user skills under `~/.codex/skills/` and `~/.agents/skills/`, and the session's bundled/plugin skill catalog.

| Capability | Existing coverage | Decision |
| --- | --- | --- |
| Current framework documentation | `context7-mcp`, `find-docs`, and connected Context7 MCP | Reuse; no duplicate installation. |
| Planning, specifications, implementation, review | Existing Matt Pocock skills, including `implement`, `implement-spec`, `code-review`, `research`, and `domain-modeling` | Preserve; no bulk update. |
| Debugging and test design | `diagnosing-bugs`, `tdd`, `prototype` | Reuse. |
| Formatting, Figma, and codebase exploration | Existing user/plugin skills | Reuse when relevant. |
| React/Next.js performance guidance | No matching installed skill | Add Vercel's React guidance. |
| Web interface and accessibility review | No matching installed skill | Add Vercel's web interface review skill. |
| Reproducible browser automation | No Playwright skill installed | Add OpenAI's curated Playwright skill. |
| End-of-ticket evaluation | Required global `~/.codex/skills/ticket-walkthrough/SKILL.md` absent; no alternative found in user/project skill roots | Record the gap. Do not install an unrelated namesake or invent a replacement. The setup has its own walkthrough; the required skill must be located before a delivery ticket reaches handoff. |

## Installed additions

These skills are installed at project scope so the separate preparation commit contains them. Their contents were inspected before use; they were downloaded with the bundled `skill-installer` helper from explicit, immutable source revisions. Existing skills were not replaced.

| Installed directory | Trusted source and pinned revision | Relevant use |
| --- | --- | --- |
| `.agents/skills/vercel-react-best-practices` | [Vercel: `skills/react-best-practices`](https://github.com/vercel-labs/agent-skills/tree/063bee94c3f4df8453406c830b0a7df0f2860278/skills/react-best-practices) | React components, client rendering, and bundle efficiency. Server-only suggestions apply only if compatible with static export. |
| `.agents/skills/web-design-guidelines` | [Vercel: `skills/web-design-guidelines`](https://github.com/vercel-labs/agent-skills/tree/063bee94c3f4df8453406c830b0a7df0f2860278/skills/web-design-guidelines) | Future UI, keyboard, accessibility, and navigation reviews. It fetches Vercel's current interface guidelines when invoked. |
| `.agents/skills/playwright` | [OpenAI: `skills/.curated/playwright`](https://github.com/openai/skills/tree/49f948faa9258a0c61caceaf225e179651397431/skills/.curated/playwright) | Browser verification against the exported application. Installing the skill does not add a browser framework to application dependencies. |

The [source manifest](skills-sources.json) records source refs and file checksums for these installer-managed additions. `skills-lock.json` continues to record the existing Skills CLI installations. New skills become discoverable on the next turn; their instruction files can also be read explicitly in this setup session.

The ZIP installer did not preserve executable permissions, so executable mode was restored on `playwright/scripts/playwright_cli.sh`. File contents still match the pinned source.

## Source checks and exclusions

Checked the [skills.sh leaderboard](https://skills.sh/), the [Vercel collection](https://github.com/vercel-labs/agent-skills), and [OpenAI's curated collection](https://github.com/openai/skills/tree/49f948faa9258a0c61caceaf225e179651397431/skills/.curated). Vercel's collection was listed with over 32,000 GitHub stars and web-design-guidelines with over 760,000 installs at inspection. These are supporting signals; source ownership and inspected contents determined trust.

Skipped `next-best-practices`: [Vercel's migration notice](https://github.com/vercel-labs/next-skills#where-each-old-skill-went) says it is no longer a separate skill. Reference guidance now ships with Next.js in `node_modules/next/dist/docs/`. Context7 remains the project's required first source for library documentation. The scaffold disables generated agent rules to preserve the repository's existing `AGENTS.md`.

Skipped cache-component, migration, deployment, database, authentication, and additional design-generation skills: this preparation has no cache migration, deployment, database, authentication, or product-design implementation to support. Existing skills already cover general engineering workflows.

The curated-list helper initially encountered a DNS failure. Direct GitHub source metadata and pinned downloads subsequently succeeded; no alternate or unverified mirror was used.
