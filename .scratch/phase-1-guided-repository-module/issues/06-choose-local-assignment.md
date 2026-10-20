# Choose authentic local practice and validation guidance

Parent: [Plan the first guided repository module](../map.md)
Type: grilling
Labels: wayfinder:grilling
Status: resolved
Blocked by: 03

Prerequisite decisions: [Define the module's teaching progression](03-define-lesson-progression.md).

## Question

Which authentic local repository assignment extends the module's teaching, and what context, environment prerequisites, starting revision, task boundaries, acceptance criteria, and observable validation guidance make it actionable for the target learner?

Decide the intended independent work and appropriate prepared assistance, including how learners recognize setup problems versus task failures and what to do when repository evidence or tests are incomplete. What can local checks actually establish, and how will their limitations remain clear? Results remain learner-reported or unverified; no platform verification, submissions, saved reporting, cloud execution, or routine grading service is implied. Resolve the assignment and validation approach without producing assignment assets or changing the selected repository.


## Comments

### Independent work and local execution boundary approved — 2026-10-20

The creator answered “Q1–Q2: Yes to both” in live exchange:

- Give learners the desired behavior, acceptance criteria, relevant file references, and validation guidance. Learners choose the implementation and write the regression tests themselves. Offer optional staged hints and a separately revealed reference solution, without a step-by-step implementation in the main instructions. Ask for a brief, self-reviewed explanation of why the change preserves existing registration and Wallet behavior.
- Make the assignment completable through local automated tests without a live Telegram account or bot token. Use an explicitly isolated disposable test database where required. Include a baseline check before editing and troubleshooting guidance distinguishing setup failures from failures introduced by the change. Live Telegram testing remains optional.

The behavior change, detailed acceptance criteria, environment feasibility, and validation limits remain to be settled after read-only inspection of the pinned source. The ticket remains claimed; no assignment assets or teaching-repository changes have been produced.


### Read-only assignment feasibility inspection — 2026-10-20

A fact-finding subagent inspected the clean local tele-bot checkout at the approved full revision `14f5af8f5ff31149552c0403c32b261cb1a95cc0`, including its agent/domain instructions and relevant ADRs. No source changes, test execution, database connections, or external documentation lookup occurred.

- `src/bot/buyer/handlers/start.handler.ts:23` already derives a greeting name from trimmed first name, then `@username`, then no name. Admin (`:26`) and returning Buyer (`:53`) replies already use it. The new-Buyer reply (`:44`) remains generic. Personalizing only the new-Buyer greeting is a genuine bounded behavior change; adding returning-Buyer username fallback would duplicate existing behavior.
- `tests/bot/buyer/start.test.ts:15` checks new-Buyer creation/content but not personalization; `:65` already covers returning username fallback. Registration service/tests establish the existing identity, Wallet, and username handling to preserve. No behavior has been runtime-verified by this inspection.
- `package.json:42` declares Node >=22.13.0, npm >=10.0.0, and npm@10.0.0; a dependency lockfile exists. Relevant handler/registration tests use a real PostgreSQL database. `vitest.config.ts:14` configures global database setup, and `tests/setup/global-setup.ts:25` applies migrations even for focused runs.
- Database URL selection falls back from `TEST_DATABASE_URL` to `DATABASE_URL` and localhost (`tests/helpers/test-db.ts:22`, global setup `:16`). The helper truncates public base tables excluding migration metadata (`:38–56`, invoked before tests at `:67`). Explicitly selecting a dedicated disposable database is necessary. `.env.example:7–8` supplies separate dev/test URL examples; no running PostgreSQL service or reproducible provisioning procedure was verified.
- `tests/helpers/mock-context.ts:23` and synthetic-update setup in `tests/bot/buyer/start.test.ts:92–121` support focused validation without live Telegram or Wallex access. Reworking test infrastructure is not needed for this candidate.

The recommended candidate is new-Buyer welcome personalization with existing name precedence and generic fallback, preserving registration, Admin/returning replies, Wallet state, and menus. This is a proposal pending the creator's live decision, not an approved assignment or execution result.


### Assignment choice and setup support approved — 2026-10-20

The creator answered “Q3–Q4: Yes to both” in live exchange:

- Assign personalization of the new-Buyer welcome using the existing preference order: trimmed first name, otherwise `@username`, otherwise the generic greeting. Require tests for all three cases, including a whitespace-only first name. Preserve Wallet-creation confirmation, displayed initial balance, keyboard, and existing registration behavior. Keep learner changes within the handler and its tests.
- Include a verified setup path for the pinned revision covering dependency installation, a dedicated disposable PostgreSQL database, explicit test configuration, and a baseline test run. Existing test migrations and table truncation make generic test-running instructions insufficient. Preparing and verifying the instructions belongs to later content preparation; learners need not redesign the test infrastructure.

Detailed validation evidence, failure handling, and completion limits remain to be settled. The ticket remains claimed; setup has not been executed or verified, and no assignment assets or teaching-repository changes have been produced.


### Validation evidence and failure handling approved — 2026-10-20

The creator answered “Q5–Q6: Yes to both” in live exchange:

- Completion requires the new greeting tests to fail against the original behavior and pass after the change, alongside passing existing `/start` tests, registration tests, and type checking. Check name precedence and fallback, preservation of Wallet confirmation, initial balance, and keyboard. Learners review their diff and explain why registration and existing-Buyer behavior remain unchanged. Checks support only this bounded change; results remain local and unverified by the platform.
- Distinguish setup failure, an existing baseline failure, and a failure introduced by the learner's change. Supply setup troubleshooting. For an unexpected baseline failure, direct learners to check the pinned revision and environment before proceeding. For a new failure, compare against the passing baseline and use staged hints. Do not recommend weakening assertions to obtain a pass.
- Keep the known combined username-change/nonzero-balance evidence gap visible as a creator preparation obligation; repairing it is not required to complete the greeting assignment.

All six recommendations are approved. No further decision branch is currently identified. Final shared-understanding confirmation is pending before recording the resolution and closing the ticket. No assignment assets, setup verification, source modifications, or learner evaluation have been produced.


### Final agreement — 2026-10-20

The creator explicitly confirmed: “Yes, this completes our shared understanding of Choose authentic local practice and validation guidance.” All six recommendations are approved; this resolves the local-assignment decision.

## Answer

Resolved through live exchange with the creator on 2026-10-20, with explicit confirmation of shared understanding. This records the assignment and validation approach for subsequent specification; it does not produce assignment assets or change the teaching repository.

### Starting point and bounded behavior change

Use tele-bot at fixed source revision `14f5af8f5ff31149552c0403c32b261cb1a95cc0`. Assign personalization of the new-Buyer `/start` welcome using the existing preference order: trimmed first name, otherwise `@username`, otherwise the generic greeting. The handler already derives this name for other branches; its new-Buyer reply is generic at the pinned revision. The read-only inspection in Comments supplies exact source and test references.

Keep learner changes within `src/bot/buyer/handlers/start.handler.ts` and its tests in `tests/bot/buyer/start.test.ts`. Preserve Wallet-creation confirmation, displayed initial balance, keyboard, existing registration behavior, and Admin/returning-Buyer behavior. Do not expand into service/schema changes, database redesign, or test-infrastructure redesign.

### Independent work and prepared assistance

Provide the desired behavior, context, acceptance criteria, relevant fixed-revision file references, and validation guidance. Learners choose the implementation and write regression tests themselves. Offer optional staged hints and a separately revealed reference solution, without a step-by-step implementation in the main instructions. Ask learners to review their diff and briefly explain why registration, existing-Buyer behavior, and Wallet state remain unchanged. This explanation is self-reviewed, not platform-evaluated.

### Environment and setup support

Make the required work completable with local automated tests, without a live Telegram account, bot token, or Wallex access. Live Telegram testing is optional. Prepare and verify a reproducible setup path for the pinned revision, covering dependency installation, an explicitly configured dedicated disposable PostgreSQL test database, and a baseline check before editing. The inspected repository declares Node >=22.13.0 and npm >=10.0.0, with npm@10.0.0 specified and a lockfile present; exact tested environment and commands belong in the prepared instructions.

Existing focused tests still invoke global database setup, apply migrations, and truncate tables. Their database selection can fall back to development/default connections. Instructions must explicitly select the isolated disposable database rather than rely on those fallbacks. No database service, provisioning path, baseline run, or setup procedure has been executed or verified in this decision session. Verification is a creator preparation obligation before distribution.

### Acceptance criteria and observable validation

Require tests covering all three name/fallback cases, including a whitespace-only first name and precedence when both a usable first name and username exist. Preserve checks for Wallet confirmation, initial balance, and keyboard. Demonstrate that the new behavior tests expose the original generic greeting and pass after the change; unchanged generic-fallback behavior should remain passing. Run existing `/start` tests, registration tests, and type checking alongside the new tests. Compare with a passing baseline at the fixed revision and review the final diff for the agreed scope.

These checks support only the bounded greeting change and the existing behavior they actually cover. Local results remain learner-reported or unverified, even when the learner observes passing tests. They do not establish independently verified proficiency or broader engineering ability. No submissions, saved reporting, cloud execution, platform verification, or routine grading service is introduced.

### Failure handling and evidence gaps

Distinguish setup failure, an existing baseline failure, and a failure introduced by the learner's change. Provide setup troubleshooting. For unexpected baseline failures, direct learners to check the pinned revision and environment before proceeding. For new failures, compare against the passing baseline and use staged hints. Do not advise weakening assertions to obtain a pass or treat an unexplained failing baseline as successful validation.

Keep the combined changed-username/nonzero-balance evidence gap from [Establish the fixed source and evidence basis](02-establish-source-evidence-basis.md) visible as a creator preparation obligation. Learners need not repair that separate gap to complete this greeting assignment. Source/evidence review and required pre-distribution checks remain in force; this decision adds no runtime evidence or publication approval.

### Handoff and map consequences

Exact assignment wording, setup commands, test cases, hints, and reference solution remain subsequent specification/content preparation. No new glossary term or ADR is needed. Browser and local practice selection exposed no supplementary explanation need or concrete presentation experiment, so that conditional fog can be removed. The known setup/evidence obligations belong to the existing creator publication-process decision and later preparation, rather than a new decision ticket. Repository-specific surprises remain possible during deeper inspection.

No assignment asset, teaching-repository modification, implementation, publication, or learner evaluation was produced. This closes a planning decision, not Phase 1 delivery or learner acceptance.
