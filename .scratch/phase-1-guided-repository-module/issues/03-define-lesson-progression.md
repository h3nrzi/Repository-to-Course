# Define the module's teaching progression

Parent: [Plan the first guided repository module](../map.md)
Type: grilling
Labels: wayfinder:grilling
Status: resolved
Blocked by: 02

Prerequisite decisions: [Establish the fixed source and evidence basis](02-establish-source-evidence-basis.md).

## Question

What bounded sequence of learning steps takes the chosen learner from the motivating problem and concepts through the actual connected source workflow to practice and engineering reasoning?

Decide the purpose of each lesson, prerequisites, chapter organization where useful, necessary system context, opportunities for a useful diagram or illustration, and the role of the evidenced trade-off or limitation. How will responsibilities, inputs/outputs, and component cooperation become understandable without organizing teaching by file order? Establish the amount of guidance and the handoff toward independent practice. Resolve the progression and its boundaries, without writing a manuscript or drafting lesson assets.


## Comments

### Teaching sequence, scaffolding, and diagram approved — 2026-10-20

The creator answered “Yes to all” to Q1–Q3 in live exchange:

- Use five lessons without an extra chapter layer: **Predict the behavior** (bot purpose, Buyer–Wallet relationship, new/returning scenarios); **Follow the command** (update → routing → handler → registration service → reply, responsibilities and inputs/outputs); **Explain state preservation** (persistence, username changes, uniqueness, transactions, conflict handling); **Reason about the trade-off** (repeated-registration behavior and PostgreSQL-specific insertion detection, separating source facts from interpretation); **Apply the understanding** (bounded browser practice followed by a local repository change).
- Explain unfamiliar concepts where needed: Telegram updates and dependency wiring during the trace; database relationships, transactions, and upserts during state preservation. Acknowledge the Admin branch and missing-sender guard, while keeping their implementation, framework internals, and advanced concurrency outside the teaching path.
- Plan one workflow diagram, revisited as the explanation deepens: connected components, distinct new/returning Buyer branches, and the Buyer–Wallet relationship. No separate architecture survey.

Guidance reduction, lesson transitions/prerequisites, and the depth of trade-off comparison remain to be settled. Exact exercise and assignment choices remain separate tickets. No lesson assets have been created; this ticket remains claimed.

### Guidance, readiness, and comparison depth approved — 2026-10-20

The creator answered “Yes to all” to Q4–Q6 in live exchange:

- Explain the new-Buyer trace in full, then invite predictions for returning-Buyer and changed-username behavior before revealing explanations. Browser practice provides prepared feedback. The local assignment provides acceptance criteria, validation guidance, optional hints, and a separately available solution; exact activities remain later decisions.
- Use explicit readiness self-checks with explanations, without mandatory pass gates or proficiency claims: distinguish Buyer identity from Wallet/balance before tracing; explain the components receiving identity, registering the Buyer, and constructing the reply before persistence details; explain what changes and stays unchanged on repeated registration before trade-off analysis; trace the workflow and justify all three scenarios before local practice.
- Keep the trade-off conceptual: explain what PostgreSQL-specific insertion detection contributes and its portability implications, then briefly compare with an explicitly returned registration outcome from another persistence design. Present that alternative as hypothetical; require no replacement implementation, `xmax` internals, or concurrency analysis.

The progression decision has no remaining open branches. Final shared-understanding confirmation is pending before recording the resolution and closing the ticket. No implementation or lesson assets were produced.

### Final agreement — 2026-10-20

The creator explicitly confirmed: “Yes, this completes our shared understanding.” All six recommendations are approved; this resolves the progression decision.

## Answer

Resolved through live exchange with the creator on 2026-10-20, with explicit confirmation of shared understanding. This is a teaching-progression decision for subsequent specification, not a lesson manuscript or an implemented module.

### Five-lesson progression

Use one module with five lessons, without an additional chapter layer. Organize around the problem and connected behavior rather than file order. The motivating question is why repeating `/start` preserves an existing Wallet and balance.

1. **Predict the behavior.** Introduce the bot's purpose, Buyer–Wallet relationship, and new/returning Buyer scenarios. The learner enters with the basic TypeScript, tests, and Git prerequisites already agreed in the selection decision. Before the command trace, use an explained self-check on the distinction between Buyer identity and Wallet/balance.
2. **Follow the command.** Trace update → routing → handler → registration service → persistence → reply, explaining component responsibilities, inputs/outputs, and cooperation. Introduce Telegram updates and dependency wiring where needed. Before persistence details, the learner should be able to explain which components receive identity, register the Buyer, and construct the reply.
3. **Explain state preservation.** Examine Buyer/Wallet persistence, changed usernames, uniqueness, transactions, and conflict handling. Introduce database relationships, transactions, and upserts as they become necessary. Before trade-off analysis, use an explained self-check on what changes and what stays unchanged when registration repeats.
4. **Reason about the trade-off.** Relate repeated-registration behavior to the approved registration-local analysis: uniqueness and conflict handling support identity and Wallet/balance preservation, while new-versus-existing detection uses PostgreSQL-specific `xmax`. Explain its contribution and portability implications at a conceptual level. Briefly compare with an explicitly returned registration outcome from another persistence design, clearly labelled hypothetical. Require no replacement implementation, `xmax` internals, or advanced concurrency analysis.
5. **Apply the understanding.** Move from bounded browser practice with prepared feedback into a local repository change. Before local practice, use an explained self-check asking learners to trace the workflow and justify new-Buyer, returning-Buyer, and changed-username behavior. The exact browser activity and local assignment remain the separate practice decisions.

### Guidance and readiness

Walk through the new-Buyer case with full explanation. Invite predictions for returning-Buyer and changed-username behavior before revealing explanations, progressively transferring responsibility to the learner. Browser practice provides immediate prepared feedback. The local assignment supplies acceptance criteria, validation guidance, optional hints, and a separately available solution; selecting and preparing those materials remains later work.

Readiness points are self-checks with explanations, not mandatory pass gates. They neither establish proficiency nor add persistent progress, adaptive routing, or automatic evaluation of arbitrary learner work.

### System context and visual explanation

Plan one workflow diagram, revisited as the explanation deepens. It connects the components, distinguishes new/returning Buyer branches, and shows the Buyer–Wallet relationship to explain cooperation and state changes. No separate architecture survey is needed.

Include only the surrounding context required for this workflow. Acknowledge the Admin branch and missing-sender guard for trace accuracy, without teaching their implementation. Keep framework internals, advanced concurrency, purchasing, payments, Top-Ups, and administration beyond the teaching boundary.

### Evidence and handoff boundaries

Preserve the approved fixed source revision, exact-reference rules, educational-reconstruction framing, and required pre-distribution behavior verification from [Establish the fixed source and evidence basis](02-establish-source-evidence-basis.md). Source facts, engineering interpretation, and the hypothetical comparison remain distinguishable. This decision adds no runtime-verification or publication claim.

No new terminology or ADR is needed. No additional decision ticket is exposed by this resolution: anonymous discovery, exact browser practice, local assignment, publication process, delivery approach, and walkthrough evidence remain covered by existing tickets. No specification, lesson asset, exercise, assignment solution, implementation, or learner acceptance was produced.
