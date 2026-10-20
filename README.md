# Repository-to-Course

This repository contains the project planning documents and a minimal Next.js + TypeScript scaffold. Delivery tickets have not been implemented.

## Local development

Use Node.js 24 and npm 11. `.nvmrc` records the verified Node version for version managers.

```bash
node --version
npm --version
npm ci
npm run dev
```

Open <http://localhost:3000>. The placeholder heading is **Repository-to-Course**.

## Checks and static output

```bash
npm run check
```

This runs ESLint, route type generation and strict TypeScript checking, then a production build. You can also run `npm run lint`, `npm run typecheck`, and `npm run build` separately. Type checking works before the first build because it generates Next.js route types first.

`next.config.ts` enables `output: "export"` and `trailingSlash: true`. A build produces `out/index.html`, `out/404.html`, and static assets; future nested pages will export as directories with `index.html` files. The application does not need a Next.js server at runtime. `next start` does not serve this export.

To inspect the built files locally with Python 3:

```bash
python3 -m http.server 3000 --bind 127.0.0.1 --directory out
```

Open <http://localhost:3000> and <http://localhost:3000/404.html>. Stop the server with Ctrl+C. This is a local preview; publication packaging and hosting belong to later delivery work.

## Project layout

- `src/app/`: App Router layout, placeholder page, and Tailwind CSS theme.
- `src/components/ui/`: shadcn/ui component source.
- `src/lib/utils.ts`: shared `cn()` helper for merging Tailwind classes.
- `docs/setup/`: setup provenance, skill audit, verification evidence, and a manual walkthrough.
- `docs/product/`, `GLOSSARY.md`, and `.scratch/`: existing product and delivery planning.
- `.agents/skills/`: project skills, including three reviewed additions from Vercel and OpenAI; see the [skill audit](docs/setup/skills-audit.md).

No environment variables, external fonts, database, or service credentials are required for this scaffold. Dependencies are locked in `package-lock.json`; generated output, dependencies, local environment files, and Vercel state are ignored by Git.

## Styling and UI components

Tailwind CSS v4 runs through `@tailwindcss/postcss` in `postcss.config.mjs`.
Theme tokens and base styles live in `src/app/globals.css`; v4 uses CSS configuration
and does not need a `tailwind.config.js` file.

shadcn/ui uses `components.json` and the existing `@/*` import alias. Add components with:

```bash
npx shadcn@latest add card
```

Import installed components from `@/components/ui/<name>`. Component source is checked
into this repository and can be edited directly. See the
[styling verification guide](docs/setup/styling-verification.md) for checks and a hands-on walkthrough.

The setup follows the current [create-next-app documentation](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and [static export documentation](https://nextjs.org/docs/app/guides/static-exports), retrieved through Context7. See the [setup verification guide](docs/setup/verification.md) for recorded results and the first hands-on check.
