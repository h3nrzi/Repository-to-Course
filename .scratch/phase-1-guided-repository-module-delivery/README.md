# Phase 1 guided repository module — delivery tickets

The creator approved this 12-ticket breakdown and its dependencies on 2026-10-20. These are implementation tickets for the [approved Phase 1 specification](../phase-1-guided-repository-module/spec.md). The resolved planning tickets and their decision map remain unchanged in the original feature directory.

## Authority and scope

Use the specification as the full behavior and acceptance contract, together with the [V1 Product Overview](../../docs/product/product-overview-v1.md) and [Phase 1 roadmap](../../docs/product/phased-roadmap-v1.md#phase-1--guided-repository-module). Teach tele-bot at fixed source revision `14f5af8f5ff31149552c0403c32b261cb1a95cc0`. A course release identifies prepared teaching content separately from that source revision.

Deliver one English-language module with five lessons, one bounded browser exercise, and one authentic local assignment. Keep repository-specific names, ordering, and lesson counts in content. Use prepared Markdown and structured data compiled into a Next.js/TypeScript static export; exercise state is browser-only and unsaved. There is no runtime application server, learner-record database, or remote evaluation service in this increment.

Tickets 01, 02, and 09 can start immediately. Work any ticket whose declared blockers are complete. Blocking numbers refer only to the delivery tickets below, not the original planning tickets. `ready-for-agent` identifies specified work; it does not mean its blockers are complete or that a release is approved.

| Ticket | Blocked by |
| --- | --- |
| [01 — Verify pinned behavior and isolated setup](issues/01-verify-pinned-behavior-and-isolated-setup.md) | None |
| [02 — Discover the module and study the first lesson](issues/02-discover-module-and-study-first-lesson.md) | None |
| [03 — Follow the connected /start workflow](issues/03-follow-connected-start-workflow.md) | 02 |
| [04 — Explain repeated registration and state preservation](issues/04-explain-repeated-registration-and-state-preservation.md) | 03 |
| [05 — Reason about the persistence trade-off](issues/05-reason-about-persistence-trade-off.md) | 04 |
| [06 — Practice the new-Buyer prediction](issues/06-practice-new-buyer-prediction.md) | 03 |
| [07 — Practice returning and changed-username predictions](issues/07-practice-returning-and-changed-username-predictions.md) | 04, 06 |
| [08 — Complete the verified local greeting assignment](issues/08-complete-verified-local-greeting-assignment.md) | 01, 07 |
| [09 — Rehearse anonymous preview delivery and withdrawal](issues/09-rehearse-anonymous-preview-delivery-and-withdrawal.md) | None |
| [10 — Prepare the reviewed, exact course-release package](issues/10-prepare-reviewed-exact-course-release-package.md) | 05, 08, 09 |
| [11 — Distribute the creator-approved preview](issues/11-distribute-creator-approved-preview.md) | 10 |
| [12 — Evaluate the complete Phase 1 journey](issues/12-evaluate-complete-phase-1-journey.md) | 11 |

## Shared implementation and handoff requirements

- Each application slice includes usable prepared content, rendering, build-time validation of its content contract, and appropriate checks of the built static site. Extend the contract as the slices introduce source excerpts, diagrams, exercise data, and assignment materials. An intermediate local slice is not the complete distributable Phase 1 candidate.
- Use the built site's anonymous pages, links, and exercise controls as the primary application test seam. Derive expected behavior independently from reviewed source evidence rather than the evaluator being tested. Check intended source revision and evidence relevance, not merely anchor existence. Keep source execution, content integrity, and operational checks where browser tests cannot establish the claim.
- Source verification in 01 gates final release preparation, without blocking local lesson development. Until required verification is recorded, keep pending execution evidence and material gaps explicit beside affected explanations; do not describe inspection as execution. Resolve those gaps and reconcile the content with actual evidence in 10.
- After each implementation ticket's required checks and review, use the global ticket-walkthrough skill in the same implementation chat. Preserve feature-by-feature steps, actual preflight evidence, and per-ticket checkpoints, and give the creator the first concrete action. Guide readiness does not establish human acceptance or create a new implementation approval gate.
- Approval of these tickets authorizes ticket creation only. Creator publication approval must explicitly identify the final exact package and preview scope before teaching material is distributed. The non-teaching hosting rehearsal also requires authorization for the actual account actions and test material used. Do not infer release approval from planning approval, automation, or an agent review.
- Keep implementation readiness, publication approval, human evaluation, and optional formative observations distinct. The creator owns the external review and evaluation records; agents may assist. Human evaluation remains pending until observations are reported. Do not infer measured learning effectiveness or broader proficiency from bounded practice or local results.

Publication and evaluation tickets include concrete human contributions. Prepare all authorized, reviewable work first; record any outstanding approval, access, or observations explicitly rather than substituting agent judgment for them.
