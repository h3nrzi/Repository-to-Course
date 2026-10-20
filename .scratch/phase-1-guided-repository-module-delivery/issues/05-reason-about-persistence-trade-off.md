# 05: Reason about the persistence trade-off

**What to build:** A learner can study Reason about the trade-off and explain registration-local state preservation alongside the implementation's PostgreSQL-specific new-versus-existing detection, then consider one clearly hypothetical persistence alternative.

**Blocked by:** 04 — Explain repeated registration and state preservation.

**Status:** ready-for-agent

- [ ] Publish Reason about the trade-off in the content-defined lesson sequence with free navigation, direct lesson/section access, and release/source identity.
- [ ] Connect the state-preservation explanation to the bounded trade-off: uniqueness and conflict handling support identity and Wallet preservation, while insertion detection uses PostgreSQL-specific `xmax`.
- [ ] Use relevant exact fixed-revision excerpts and revisit the same workflow diagram where helpful. Keep the discussion local to registration rather than asserting system-wide balance guarantees or a full architecture assessment.
- [ ] Describe portability implications as engineering interpretation, without presenting a verified defect, a portability guarantee, or the developer's proven original rationale.
- [ ] Briefly compare a hypothetical persistence design that explicitly returns a registration outcome. Label it as hypothetical and keep replacement implementation, `xmax` internals, and advanced concurrency analysis outside the lesson.
- [ ] Distinguish source-supported facts, verified defects, potential risks, engineering interpretations, hypothetical scenarios, proposed improvements, and educational reconstruction where those categories occur. Genuine-history claims require specific evidence; material gaps remain visible.
- [ ] Give the learner a bounded prompt to justify the trade-off, with an explanation available, connecting the lesson to the engineering-judgment objective without awarding proficiency.
- [ ] Check source-reference relevance, excerpt fidelity, disclosure presentation, and built-site navigation through observable behavior. Record technical/content review findings; page existence alone does not establish teaching coherence.
- [ ] Complete required checks and review, then the global ticket-walkthrough handoff with actual preflight evidence and the creator's first action. Human evaluation remains pending until observations are reported.
