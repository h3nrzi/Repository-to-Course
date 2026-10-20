# Choose bounded practice and prepared feedback

Parent: [Plan the first guided repository module](../map.md)
Type: grilling
Labels: wayfinder:grilling
Status: resolved
Blocked by: 03

Prerequisite decisions: [Define the module's teaching progression](03-define-lesson-progression.md).

## Question

Which bounded interactive exercise best serves the module's objectives, and what supported response space, predefined criteria, hints, and immediate prepared feedback make it educationally useful?

Decide how correct, incorrect, and incomplete or unsupported responses are handled, how another attempt works, and what the feedback can honestly establish. Keep the decision proportional to one module rather than choosing every V1 exercise format. Browser results need not persist; avoid saved histories, personal proficiency reporting, arbitrary free-form evaluation, and claims that a narrow response proves independent engineering ability. Decide the exercise contract without authoring the exercise bank or implementing its evaluator.


## Comments

### Exercise shape and reference access approved — 2026-10-20

The creator answered “Q1–Q2: Yes to both” in live exchange:

- Use one structured prediction exercise covering new Buyer, returning Buyer, and changed-username scenarios. For each scenario, learners select the expected Buyer/Wallet state and reply behavior, then select a supporting explanation tied to the source. Keep responses bounded and feedback prepared; leave the portability trade-off to the lesson's explained self-check.
- Allow consultation of lessons, the workflow diagram, and fixed-revision source excerpts during attempts. Use no timer or pass gate. Feedback describes the selected predictions and explanations without claiming independent coding proficiency.

Feedback, predefined criteria, hints, incomplete or unsupported responses, and retry behavior remain to be settled. The ticket remains claimed; no exercise assets or evaluator have been authored.


### Criteria, feedback, response handling, and retries approved — 2026-10-20

The creator answered “Q3–Q5: Yes to all” in live exchange:

- Check predicted state, reply behavior, and supporting explanation separately for each scenario, with no overall score. On submission, provide immediate prepared feedback for each selection: confirm correct reasoning, explain the misconception behind an incorrect choice, and link relevant source evidence. A correct prediction with an incorrect explanation receives mixed feedback rather than full success.
- Leave missing selections unanswered rather than marking them incorrect; provide feedback for completed parts and identify remaining unanswered parts. Accept only provided choices. Unsupported or invalid responses prompt reselection without an educational judgment.
- Offer optional source-directed hints, unlimited retries, and a separately revealed worked explanation. Hints point to relevant components or evidence without immediately giving the answer. Selections remain editable after feedback; changes require resubmission for evaluation. Offer a reset for a fresh attempt. Revealing the worked explanation neither completes unanswered parts nor establishes proficiency. No attempt history needs to persist.

All five recommendations are approved and no further decision branch is currently identified. Final shared-understanding confirmation is pending before recording the resolution and closing the ticket. No exercise bank, worked solution, evaluator, or implementation has been produced.


### Final agreement — 2026-10-20

The creator explicitly confirmed: “Yes, this completes our shared understanding of Choose bounded practice and prepared feedback.” All five recommendations are approved; this resolves the bounded browser-practice decision.

## Answer

Resolved through live exchange with the creator on 2026-10-20, with explicit confirmation of shared understanding. This is an exercise-contract decision for subsequent specification, not an authored exercise or implemented evaluator.

### Exercise and supported responses

Use one structured prediction exercise covering three scenarios in tele-bot's selected `/start` workflow: a new Buyer, a returning Buyer, and a returning Buyer whose username changed. For each scenario, learners select the expected Buyer/Wallet state and reply behavior, then select a supporting explanation tied to the source. Responses are limited to provided choices; no arbitrary free-form or code evaluation is introduced.

The exercise connects workflow tracing to state preservation. Leave the PostgreSQL portability trade-off to the lesson's explained self-check. Learners may consult lessons, the recurring workflow diagram, and fixed-revision source excerpts during attempts. There is no timer or mandatory pass gate.

### Predefined criteria and prepared feedback

Check predicted state, reply behavior, and supporting explanation separately for each scenario, without an overall score. Define the accepted choices and their prepared feedback against the approved source/evidence basis during content preparation. On submission, provide immediate feedback for each selection: confirm correct reasoning, explain the misconception behind an incorrect choice, and link relevant source evidence. A correct prediction paired with an incorrect explanation receives mixed feedback rather than full success.

Missing selections remain unanswered rather than incorrect. Provide feedback for completed parts and identify what remains unanswered. Unsupported or invalid responses prompt reselection without an educational judgment.

### Hints, explanations, and retries

Offer optional source-directed hints, unlimited retries, and a separately revealed worked explanation. Hints point to the relevant component or evidence without immediately giving the answer. After feedback, selections remain editable; changed selections require resubmission for evaluation. Offer a reset for a fresh attempt. Revealing the worked explanation neither completes unanswered parts nor establishes proficiency. No attempt history needs to persist.

### Evidence limits and preparation boundary

Feedback describes the selected predictions and explanations in this reference-assisted activity. It does not establish independent coding proficiency, broader engineering ability, or a personal proficiency record. The separate local assignment remains the decision in [Choose authentic local practice and validation guidance](06-choose-local-assignment.md).

Preserve the fixed revision, exact source references, visible evidence gaps, and pre-distribution verification requirements in [Establish the fixed source and evidence basis](02-establish-source-evidence-basis.md). This resolution supplies no new runtime evidence or publication approval. Exact scenario wording, answer choices, accepted-answer mappings, hints, feedback text, and worked explanations remain later specification/content preparation under review, not unresolved decisions in this map.

No supplementary explanation need or presentation experiment was exposed. No new decision ticket, glossary term, or ADR is needed. The remaining fog may be revisited during local-assignment selection or deeper source inspection. No exercise bank, course asset, implementation, or learner acceptance was produced.
