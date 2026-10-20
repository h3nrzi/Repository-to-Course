# 01: Verify pinned behavior and isolated setup

**What to build:** Reproducible creator-owned execution evidence for tele-bot's registration and welcome workflow at fixed source revision `14f5af8f5ff31149552c0403c32b261cb1a95cc0`, together with an isolated local setup that later assignment preparation can reuse. The evidence must establish the three taught scenarios without changing the revision taught or expanding the learner assignment.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] Start from the exact fixed source revision and record its full identity, checkout state, exact tool/database versions, environment configuration, commands, and actual results. Keep any verification overlay identifiable separately from the original source.
- [ ] Verify dependency installation using the pinned repository's lockfile and declared requirements: Node >=22.13.0, npm >=10.0.0, and specified npm@10.0.0. Record the exact versions actually tested rather than claiming every compatible version was tested.
- [ ] Provision a dedicated disposable PostgreSQL database and explicitly select it for test execution. Account for global setup, migrations, table truncation, and development/default URL fallbacks; verify the target before destructive test helpers run.
- [ ] Establish and record a passing baseline for the existing relevant `/start` handler tests, registration tests, and type checking. Required checks work without a live Telegram account, real bot token, or Wallex access.
- [ ] Verify that a new Buyer creates one Buyer and one Wallet with zero Available Balance and receives the original generic new-Buyer welcome, Wallet-creation confirmation, initial balance, and Buyer menu.
- [ ] Verify that repeated registration preserves Buyer and Wallet identities and a seeded nonzero Available Balance, creates no duplicates, and produces the returning-Buyer reply with the current balance and existing display-name preference.
- [ ] Execute a traceable combined changed-username/nonzero-balance check asserting persisted username, unchanged Buyer and Wallet identities and balance, no duplicate rows, and the returning reply branch. Reuse existing source test seams where possible.
- [ ] Record any execution failures or deviations from the scenario contract with supporting evidence and disposition. The combined-case evidence gap is creator preparation work, not proof of a defect or an extension of the learner assignment.
- [ ] Produce reusable setup and troubleshooting evidence that distinguishes installation/configuration failures, unexpected baseline failures, and later introduced regressions. Describe the transaction-capable service path and executor fallback accurately where relevant to verification.
- [ ] Review the evidence and verification scope, then complete the global ticket-walkthrough handoff with actual preflight results, reproducible checks, and the creator's first action. Human evaluation remains pending until observations are reported.
