# Domain Docs

This repo uses a single-context layout: `GLOSSARY.md` at the repo root and architecture decision records in `docs/adr/`.

## Before exploring

Read `GLOSSARY.md` and the ADRs in `docs/adr/` that touch the area you are about to work in.

If these files do not exist, proceed silently. The `/domain-modeling` skill creates them lazily when terms or decisions are resolved.

## Use the glossary's vocabulary

Use the terms defined in `GLOSSARY.md` when naming domain concepts in issues, proposals, hypotheses, and tests.

If a concept is missing, reconsider whether it belongs to the project's vocabulary. Note real gaps for `/domain-modeling`.

## Flag ADR conflicts

If a proposal contradicts an existing ADR, identify the ADR and explain why the decision should be reconsidered.
