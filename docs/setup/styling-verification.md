# Tailwind CSS and shadcn/ui verification

Date: 2026-10-20. Scope: install and configure styling in the existing Next.js scaffold.
Human evaluation is pending until the user reports observations.

## Configuration

Context7 resolved Tailwind CSS to `/tailwindlabs/tailwindcss.com` and shadcn/ui to
`/shadcn-ui/ui`, then retrieved the v4 PostCSS setup and current CLI initialization
instructions. Installed versions are Tailwind CSS and its PostCSS plugin 4.3.3,
PostCSS 8.5.31, shadcn 4.22.1, and Base UI 1.9.0; the lockfile records exact dependencies.

- `postcss.config.mjs` registers `@tailwindcss/postcss`.
- `src/app/globals.css` imports Tailwind, animation utilities, and shadcn styles;
  defines neutral theme tokens, system fonts, and the `.dark` variant.
- `components.json` uses the CLI's current `base-nova` default, TypeScript, RSC,
  CSS variables, Lucide icons, and the existing `@/*` aliases.
- `src/components/ui/button.tsx` is the generated Base UI Button.
- `src/lib/utils.ts` exports the generated `cn` helper.
- The placeholder page uses Tailwind utilities and a disabled “Courses coming soon”
  Button. The project still exports static files and requires no external font fetch.

References: [Tailwind installation](https://tailwindcss.com/docs/installation/framework-guides/nextjs),
[shadcn CLI](https://ui.shadcn.com/docs/cli),
[components configuration](https://ui.shadcn.com/docs/components-json).

## Actual preflight evidence

Environment: Node.js 24.22.0, npm 11.19.1.

- `npm run check` passed after the final page change: zero-warning ESLint,
  route type generation, strict TypeScript, and production static export.
- `git diff --check` passed.
- Playwright loaded the exported site from a Python static server on port 8766.
  The title and heading were correct. Computed styles showed 48px/24px main padding,
  a 30px heading, a 32px disabled Button with the primary background, and system fonts.
- Desktop and 390px mobile viewports had no horizontal overflow. Applying `.dark`
  changed the body background and native color scheme to dark.
- Manual code review checked the PostCSS integration, generated imports and aliases,
  light/dark token mapping, component usage, and static-export compatibility. No findings.

The global `~/.codex/skills/ticket-walkthrough/SKILL.md` was unavailable; searching
the configured skill directories found no copy. This guide provides the reproducible
handoff without claiming that skill ran or that human evaluation passed.

## Hands-on walkthrough

1. Run `npm run dev` from the repository root and open <http://localhost:3000>.
   Expect a padded page, a prominent Repository-to-Course heading, muted description,
   and a disabled “Courses coming soon” button.
2. Narrow the browser to about 390px. Expect readable wrapping and no horizontal scroll.
3. In browser developer tools, add `class="dark"` to the `<html>` element. Expect
   a dark background, light text, and a lighter Button. Remove the class to restore
   light mode. There is no theme-switcher UI or persisted theme preference in this setup.
4. Inspect `components.json` and the generated Button and helper. Add future components
   with `npx shadcn@latest add <component>` and import from `@/components/ui/<component>`.
5. Run `npm run check` to reproduce the automated checks and static export.

First action: run `npm run dev`, open the home page, and report any difference from
the expected appearance above. No delivery-ticket status or human acceptance was changed.
