# Select the smallest coherent teaching experience

Parent: [Plan the first guided repository module](../map.md)
Type: grilling
Labels: wayfinder:grilling
Status: resolved
Blocked by: none

## Question

Which repository, target learner and prerequisites, bounded learning objective or objective set, and real workflow form the smallest coherent problem-to-understanding-to-practice experience for Phase 1?

Evaluate the choice against educational value, relevance, code quality, documentation, complexity, and likely rights feasibility. What can this learner reasonably understand and practice within one module, and what surrounding system context must be included without teaching the whole repository? Identify candidate repositories with the creator; do not assume this planning repository is the teaching repository or treat illustrative overview examples as approved choices. Detailed revision and evidence suitability remain a subsequent decision.

## Comments

### Learner and repository choices — 2026-10-20

- The creator accepted the proposed learner: someone who can write small programs but struggles to trace how an unfamiliar repository implements a feature; comfortable with one programming language, functions, basic tests, and Git, but new to reasoning across components. Language-specific prerequisites remain open until repository inspection.
- The creator chose their repository, [tele-bot](https://github.com/h3nrzi/tele-bot), and described it as developed using Matt Pocock's skills. That description is creator-provided context, not yet verified development history or a code-quality finding.
- Repository reconnaissance, the bounded workflow, objectives, surrounding context, and selection rationale remain pending. The ticket is still claimed, not resolved. Source revision approval and detailed evidence suitability belong to the subsequent source/evidence decision.

### Selection reconnaissance — 2026-10-20

Read-only inspection of the clean local checkout `/Users/hossein/Projects/tele-bot` at `14f5af8f5ff31149552c0403c32b261cb1a95cc0`; remote HEAD matched via `git ls-remote`. This is an inspection reference, not an approved course revision. No application or tests were run and no teaching-repository files changed.

- TypeScript Telegram marketplace with routing/handlers, domain services, repositories, and PostgreSQL. `CONTEXT.md` and fourteen ADRs provide domain/design context. These support selection, not an overall code-quality certification.
- Smallest trace: `/balance`, from `src/bot/buyer/buyer.composer.ts` through `handlers/balance.handler.ts`, `src/modules/wallet/wallet.service.ts`, Buyer/Wallet lookups, formatting, and reply. Tests: `tests/bot/buyer/balance.test.ts` and `tests/modules/wallet/wallet.service.test.ts`. Clear orientation; relatively thin for substantial change practice.
- Recommended candidate for discussion: `/start`, through `handlers/start.handler.ts` and `src/modules/buyer/buyer.service.ts` into Buyer/Wallet repositories. New versus returning Buyer, username refresh, and preservation of an existing Wallet give observable outcomes and reasoning opportunities. Tests: `tests/bot/buyer/start.test.ts` and `tests/modules/buyer/registration.service.test.ts`. Transactions, upsert, dependency wiring, and PostgreSQL-specific insertion detection need bounded scaffolding.
- Alternative: active Catalog Item listing via `handlers/shop.handler.ts`, `CatalogService.listActive`, and `keyboards/shop.keyboards.ts`. Stop before selection/ordering callbacks, which expand into multiple other domains.
- Rights evidence gap: no tracked README, LICENSE, or COPYING found; package metadata is private with no license field. Creator ownership is reported; publication permission and third-party rights remain unestablished.
- Test feasibility constraint: real PostgreSQL setup uses migrations and table truncation, with fallback from `TEST_DATABASE_URL` to `DATABASE_URL`. Future execution must explicitly use an isolated disposable test database. Synthetic update tests stub outgoing Telegram messages. Existing tests were read, not executed or certified passing.
- Pending live decisions: language-specific prerequisite level and workflow selection, then bounded objectives/context. No proposed workflow or practice opportunity is approved yet.

### Workflow and prerequisites approved — 2026-10-20

- The creator approved `/start` as the central workflow: register a new Buyer or welcome a returning Buyer; trace command → handler → Buyer service → database → reply. Purchasing, Top-Ups, and administration are outside the module's teaching scope.
- The creator approved basic TypeScript prerequisites: functions, objects, basic types, `async`/`await`, simple tests, and Git. Teach Telegram updates, dependency injection, database relationships, and transactions as needed; prior knowledge of the repository's frameworks is not required.
- The bounded learning objectives and amount of surrounding context remain to be agreed in live exchange. Detailed lesson progression and assignment selection remain later tickets.

### Objectives and context approved — 2026-10-20

The creator accepted all four proposed learning outcomes and the proposed surrounding-context boundary (Q5 and Q6). Together with the accepted learner, repository, workflow, and prerequisites, these settle this ticket's selection decision.

## Answer

Resolved through live exchange with the creator on 2026-10-20.

### Selected teaching experience

Use the creator's [tele-bot](https://github.com/h3nrzi/tele-bot), centered on **`/start`: register a new Buyer or welcome a returning Buyer**. The motivating question is why sending `/start` again uses an existing Wallet rather than recreating it or resetting its balance. Teach the connected path from incoming Telegram update through routing, handler, Buyer service, persistence, and reply.

### Learner and prerequisites

The learner can write small programs but struggles to trace a feature across an unfamiliar repository. Require basic TypeScript functions, objects, types, `async`/`await`, simple tests, and Git. Prior knowledge of the repository's frameworks is not required. Introduce Telegram updates, dependency injection, database relationships, transactions, and relevant upsert behavior as needed for the chosen path.

### Bounded learning outcomes

1. Trace `/start` from the incoming update through the handler, service, and persistence to the reply, explaining component responsibilities and cooperation.
2. Predict behavior for a new Buyer, a returning Buyer, and a returning Buyer whose username changed.
3. Explain how repeat registration preserves an existing Wallet and discuss one architectural trade-off. The specific evidenced trade-off remains to be selected in the source/evidence and teaching-progression decisions.
4. Make and locally validate a small change within this workflow. The exact assignment, acceptance criteria, and validation guidance remain a later decision; local results retain the roadmap's learner-reported/unverified status.

These are intended outcomes, not established learner proficiency or a promise that the learner can independently build the entire bot.

### Context boundary

Include the marketplace's purpose, the Buyer–Wallet relationship, relevant component responsibilities, dependency wiring, and transaction/upsert behavior. Acknowledge the admin branch and missing-sender guard so the trace remains accurate; administration itself is not a teaching topic. Exclude payment processing, purchasing/ordering, Top-Ups, admin functionality, framework internals, and advanced database concurrency. Teach one coherent feature rather than the whole repository or a general framework/database course. Detailed lesson order, diagrams, exercise, and assignment belong to later tickets.

### Selection rationale and remaining conditions

- **Relevance and educational value:** a real user command connects identity, persistent state, domain behavior, and a visible response. New/returning behavior creates concrete prediction and verification opportunities beyond merely reading files.
- **Complexity:** `/balance` is smaller but thinner for meaningful reasoning and change practice; Catalog listing becomes substantially broader once selection/ordering is included. `/start` offers a bounded path with substantive state-preservation reasoning, provided unfamiliar database and wiring concepts receive scaffolding.
- **Code quality and documentation:** separated handlers, services, and repositories, existing handler/service tests, `CONTEXT.md`, and ADRs provide promising instructional material. Read-only reconnaissance is not an overall quality certification; tests have not been executed and behavior/evidence claims still require review.
- **Likely rights feasibility:** the creator identifies the repository as their own, making it a reasonable candidate to pursue. No declared repository license was found. Ownership scope, third-party material, and permission for educational distribution remain unestablished and must be addressed before publication.
- **Evidence and feasibility:** the inspected commit is only a reconnaissance reference, not an approved course revision. Tests require an explicitly isolated disposable PostgreSQL database; they have not been run. The fixed revision, rights basis, exact evidence, and any material gaps belong to [Establish the fixed source and evidence basis](02-establish-source-evidence-basis.md), which may require revisiting this choice if an obstacle emerges.

No course content, assignment asset, source revision approval, publication approval, or learner acceptance is established by this decision.
