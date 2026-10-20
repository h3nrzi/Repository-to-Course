# 07: Practice returning and changed-username predictions

**What to build:** A learner can practice all three registration scenarios in the same bounded exercise and receive evidence-linked feedback that distinguishes identity, Wallet/balance preservation, reply behavior, and supporting explanation. Extend the prepared exercise with returning-Buyer and changed-username scenarios and complete the cross-scenario experience.

**Blocked by:** 04 — Explain repeated registration and state preservation; 06 — Practice the new-Buyer prediction.

**Status:** ready-for-agent

- [ ] Add returning-Buyer and returning-Buyer-with-changed-username scenarios using the same prepared exercise contract and reusable interaction as the new-Buyer scenario.
- [ ] The returning-Buyer answers preserve Buyer and Wallet identities, avoid duplicate creation and balance reset, and select the returning welcome with current balance and the existing display-name preference.
- [ ] The changed-username scenario explicitly starts with a nonzero Wallet balance. Its accepted state answer persists the username while preserving Buyer identity, Wallet identity, balance, and row counts; its reply remains in the returning branch with the appropriate current balance and display name.
- [ ] Each added scenario has separately evaluated state, reply, and explanation choices, with complete correct/incorrect per-choice feedback, relevant fixed-revision source references, optional source-directed hints, and a separately revealed worked explanation.
- [ ] Supporting explanations connect the handler, service, repositories, and relevant constraints rather than merely repeating the selected prediction. Align claims with source evidence and keep pending execution gaps visible until ticket 01 evidence is reconciled.
- [ ] All three scenarios retain distinct correct, incorrect, unanswered, and unsupported states; partial submissions and explanation reveals do not silently complete missing parts. Edited selections require resubmission, and retries/reset behave consistently across scenarios.
- [ ] Before local practice, invite the learner to trace and justify all three scenarios, with an explanation available. Keep lesson, diagram, and excerpt references freely accessible and describe the activity as reference-assisted practice.
- [ ] Through the built site's controls, inspect every supported state/reply/explanation choice and intended feedback/evidence link for each scenario, plus mixed reasoning, partial/unanswered/unsupported submissions, assistance, edits/resubmission, repeated attempts, and reset. Independent-part coverage and mixed cases suffice without every Cartesian combination.
- [ ] Verify the complete anonymous exercise journey, direct practice access, and absence of an overall score, proficiency claim, timer, pass gate, or saved result. Keep scenarios and feedback in content rather than repository-specific evaluator code.
- [ ] Complete required checks and review, then the global ticket-walkthrough handoff with actual preflight evidence and the creator's first action. Human evaluation remains pending until observations are reported.
