# Establish the fixed source and evidence basis

Parent: [Plan the first guided repository module](../map.md)
Type: grilling
Labels: wayfinder:grilling
Status: resolved
Blocked by: 01

Prerequisite decisions: [Select the smallest coherent teaching experience](01-select-teaching-experience.md).

## Question

For the selected teaching experience, which immutable repository revision and source, tests, documentation, or history can support the proposed workflow and objectives, and what rights basis permits the intended educational use and distribution?

Decide what evidence must support behavior claims, source excerpts, the architectural trade-off or limitation, and any genuine-history claim; how exact references and reconstruction are distinguished; and which material gaps or uncertainties must be visible. Do not assume that public source implies redistribution permission or that absent tests prove a defect. If repository-specific facts require external investigation, scope a research child and record its dependency before resolving this decision. An unresolved rights or evidence obstacle may require revisiting the teaching choice rather than manufacturing certainty.

## Comments

### Fixed revision, intended reuse, and behavior evidence approved — 2026-10-20

In live exchange, the creator answered “Yes to all” to the first three questions:

- Pin the module to tele-bot commit `14f5af8f5ff31149552c0403c32b261cb1a95cc0`, using the full commit for source references and subsequent verification even if the repository changes.
- The creator confirms ownership or control of the relevant material and authorizes its use in the free course, including source excerpts and learner practice materials. This is creator-provided authorization, not an independently established ownership chain or a public repository license. Third-party material must be checked separately before distribution; publication approval for a particular educational release remains separate.
- Before distribution, require recorded checks for a new Buyer, a returning Buyer, a changed username, and preservation of an existing Wallet and balance. Combine exact source references with relevant test results from an explicitly isolated disposable database. Until execution, tests are inspected rather than passing; material failures or gaps remain visible.

### Read-only source evidence — 2026-10-20

Local checkout `/Users/hossein/Projects/tele-bot` was clean at the approved commit. No source files changed, tests executed, or database connections made. References below are relative to [the approved source tree](https://github.com/h3nrzi/tele-bot/tree/14f5af8f5ff31149552c0403c32b261cb1a95cc0).

- `src/bot/buyer/buyer.composer.ts:81` binds `/start`; `src/bot/buyer/handlers/start.handler.ts:19` guards missing sender, lines 25–35 handle the Admin branch, lines 37–40 pass identity to registration, and lines 42–61 select the new/returning reply and balance display.
- `src/modules/buyer/buyer.service.ts:26–38` selects transactional execution when supported; lines 47–69 return existing Buyer/Wallet and update a changed username; lines 74–88 perform Buyer and Wallet upserts for the creation/fallback path.
- `src/modules/buyer/buyer.repository.ts:59–71` updates on Telegram ID conflict and uses PostgreSQL `xmax` in insertion detection. `src/modules/wallet/wallet.repository.ts:54–65` updates only `userId` on conflict, leaving the existing balance intact. `src/modules/buyer/buyer.schema.ts:7` and `src/modules/wallet/wallet.schema.ts:7–11` establish the relevant uniqueness and relationship constraints.
- `tests/bot/buyer/start.test.ts:15–63` covers new registration and returning balance display; lines 92–139 exercise routing through synthetic updates. `tests/modules/buyer/registration.service.test.ts:16–66` covers creation and repeated registration identity/row counts, and lines 80–96 cover username persistence. These are inspected test definitions, not passing execution evidence.
- Gap: inspected tests do not combine a changed username with a seeded nonzero Wallet balance and explicit Wallet identity/balance assertions in one case. Source and separate tests support the proposed behavior, but the combined case requires recorded verification under the agreed pre-distribution rule. This gap is not a verified defect.
- `tests/helpers/test-db.ts:22–27` can fall back to `DATABASE_URL`, and lines 55–56 truncate tables. Future checks must explicitly select an isolated disposable test database.
- `package.json` declares `private: true` without a license field; no tracked LICENSE, COPYING, NOTICE, or README was found. Intended reuse relies on the creator authorization above, with third-party scope still requiring review.

### Final agreement — 2026-10-20

The creator accepted the registration-local trade-off (Q4), accepted educational reconstruction with evidence required for historical claims (Q5), and explicitly confirmed: “This completes our shared understanding of the source/evidence decision.”


## Answer

Resolved through live exchange with the creator on 2026-10-20. The creator approved all five recommendations and confirmed shared understanding. This resolves the planning decision; execution of the agreed checks remains future work.

### Fixed source and exact references

Use [tele-bot at `14f5af8f5ff31149552c0403c32b261cb1a95cc0`](https://github.com/h3nrzi/tele-bot/tree/14f5af8f5ff31149552c0403c32b261cb1a95cc0). Every source excerpt and reference must identify this revision and the exact file/section; use commit-permalink line anchors where available. Later repository changes do not silently change the module's source basis. Identify the educational release separately, under the roadmap's stable course-version rules; its concrete naming/publication process remains a later decision.

The read-only evidence inventory in this ticket's Comments identifies the routing, handler, service, repositories, schemas, and inspected tests supporting the connected `/start` path. It is the context pointer for subsequent specification, not an execution report.

### Rights basis and limits

The creator confirms ownership or control of the relevant tele-bot material and authorizes its use in the free course, including source excerpts and learner practice materials. Record this as creator-provided authorization, rather than inferring permission from public availability or representing it as a public repository license. No declared license was found. Check third-party material separately before distribution, respecting any applicable attribution and reuse conditions. Rights review and explicit creator approval of the particular educational release, including previews, remain prerequisites for distribution; neither is established by this decision.

### Behavior evidence required before distribution

Require exact source references plus recorded relevant test/check results for:

- New Buyer registration and initial Wallet creation.
- Returning Buyer behavior without duplicate identity or Wallet creation.
- Changed username persistence.
- Preservation of the existing Wallet and its nonzero balance, including the combined changed-username case currently missing from the inspected tests.

Use an explicitly selected isolated disposable test database. The inspected helper can fall back to `DATABASE_URL` and truncate tables, so an implicit default is not an acceptable execution setup. Record the tested source revision and relevant environment alongside actual results. Existing tests were read, not run; no passing-test or runtime-verification claim is currently supported. Material failures or gaps must remain visible and receive review before distribution. A missing test is an evidence gap, not proof of a defect.

### Selected architectural trade-off

Keep the analysis within registration: database uniqueness and conflict handling support repeated-registration identity and Wallet/balance preservation, while the implementation's new-versus-existing detection uses PostgreSQL-specific `xmax`. Cite the Buyer/Wallet repositories and service from the inventory. Present this as an engineering interpretation of the source, not a verified defect, a portability guarantee, or the developer's documented original rationale. Explain only the database details needed for this reasoning; advanced concurrency and the broader order/payment locking design remain outside the selected teaching boundary. Detailed instructional framing belongs to the teaching-progression decision.

### History, reconstruction, and claim boundaries

Present the problem-first teaching sequence as educational reconstruction. Finished code alone does not establish development order or original reasoning. Any genuine-history claim must have specific supporting evidence; no such claim was approved here. Keep source-supported facts, verified defects, potential risks, engineering interpretations, hypothetical scenarios, proposed improvements, and educational reconstruction distinguishable under the roadmap. Label uncertainty and material evidence gaps where they affect the explanation; do not turn code comments, an ADR, or unexecuted test definitions into stronger behavioral or historical claims than they support.

### Handoff and unresolved execution

The source basis, intended reuse authorization, required behavior evidence, bounded trade-off, and reconstruction policy are settled sufficiently for later specification. Test execution, combined-case verification, third-party review, technical/educational review, release identity, and creator publication approval remain future preparation/publication work. Their process belongs to the existing publication-process ticket; no additional decision ticket is required for these known execution obligations. No source code, lesson assets, specification, publication, or learner evaluation was produced or completed.
