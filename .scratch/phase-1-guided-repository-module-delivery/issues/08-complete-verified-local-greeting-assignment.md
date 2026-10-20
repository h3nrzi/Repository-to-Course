# 08: Complete the verified local greeting assignment

**What to build:** A learner can move from browser prediction practice to an independent local change: personalize only the new-Buyer welcome at the exact fixed source revision, write their own regression tests, and validate the bounded result. Publish actionable instructions and optional assistance that the creator has actually rehearsed.

**Blocked by:** 01 — Verify pinned behavior and isolated setup; 07 — Practice returning and changed-username predictions.

**Status:** ready-for-agent

- [ ] Link the readable assignment from Apply the understanding after the invitation to trace and justify all three original scenarios, with links back to relevant explanations. Provide context, desired behavior, exact fixed-revision references, acceptance criteria, and validation guidance as prepared content.
- [ ] Start from tele-bot revision `14f5af8f5ff31149552c0403c32b261cb1a95cc0`. Ask learners to personalize only the new-Buyer welcome using trimmed first name, otherwise `@username`, otherwise the existing generic greeting.
- [ ] State all required cases: a usable first name; trimmed first name; first-name precedence when both names exist; username fallback when first name is absent; username fallback for whitespace-only first name; and generic fallback when neither supplies a usable name.
- [ ] Limit learner and reference-solution edits to the welcome handler and its tests. Preserve Wallet-creation confirmation, initial balance display, Buyer keyboard, registration behavior, and Admin/returning-Buyer branches. Exclude registration services, schemas, databases, test infrastructure changes, and the creator's combined-case verification gap.
- [ ] Use ticket 01's verified dependency and disposable-database setup, including exact tested versions and commands, explicit database selection, global setup/migrations, truncation behavior, and baseline checks. Required execution needs no live Telegram account, real bot token, or Wallex access.
- [ ] Keep main instructions focused on behavior and independent test writing rather than a step-by-step implementation. Supply optional staged hints and a separately revealed reference solution without silently completing an independent attempt.
- [ ] Actually follow the published setup from the fixed revision and record the passing baseline. Demonstrate that new personalization assertions fail for the original generic greeting and pass after the bounded change, while generic-fallback assertions already pass and remain passing.
- [ ] Demonstrate all required name cases, preserved observable reply content/keyboard, and passing existing `/start` tests, registration tests, and type checking after the reference change. Review the reference diff against the allowed boundary.
- [ ] Provide troubleshooting that distinguishes setup failures, unexpected baseline failures, and introduced regressions without weakening assertions. Ask learners to review their final diff and briefly explain why registration and Wallet behavior remain preserved.
- [ ] Describe local checks and self-reviewed explanations as learner-reported or unverified by the platform. Do not imply submissions, remote grading, or broader demonstrated proficiency.
- [ ] Validate assignment/assistance references and check the built anonymous site's assignment links, readable instructions, staged hints, and separate solution reveal. Preserve actual local rehearsal evidence independently from learner results.
- [ ] Complete required checks and review, then the global ticket-walkthrough handoff with actual preflight evidence and the creator's first action. Human evaluation remains pending until observations are reported.
