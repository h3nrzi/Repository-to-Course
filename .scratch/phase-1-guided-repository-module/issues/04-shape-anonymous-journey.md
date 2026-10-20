# Shape discovery and anonymous study

Parent: [Plan the first guided repository module](../map.md)
Type: grilling
Labels: wayfinder:grilling
Status: resolved
Blocked by: 03

Prerequisite decisions: [Define the module's teaching progression](03-define-lesson-progression.md).

## Question

How should an anonymous visitor discover the preview, judge fit, follow the module, and move between explanation and exact source references while understanding what is and is not available?

Decide the minimum presentation and navigation needed for the required catalog/introduction information, lesson order, readable excerpts, connected walkthrough, useful diagrams, evidence distinctions, and preview/release identity. How will the visitor reach browser and local practice without registration or payment? Preserve the agreed source-exploration boundary; do not turn navigation into an in-app repository browser. Resolve experience choices here; final exercise and assignment semantics live in their own decisions. If discussion needs a prototype, scope a separate decision aid rather than implementing the product.

## Comments

### Discovery, navigation, source reading, and trust presentation approved — 2026-10-20

The creator answered “Q1–Q4: Yes to all” in live exchange and added an explicit repository-agnostic product constraint:

- Use a minimal catalog card leading to a module introduction. The card identifies the teaching repository, motivating problem, target learner, and limited preview. The introduction supplies purpose, technologies, architectural context, complexity, prerequisites, objectives, expected outcomes, and available lessons. “Start learning” opens the first lesson; visitors can select another available lesson directly.
- Recommend the agreed lesson sequence while keeping every published lesson freely accessible. Provide a lesson list, previous/next links, and direct lesson/section links. Readiness self-checks guide without locking access. Browser practice and the local assignment are reached through Apply the understanding, with links back to relevant explanations. State clearly that progress and results are not saved in Phase 1. Exercise and assignment semantics remain their own decisions.
- Keep the walkthrough self-contained with readable source excerpts beside their explanations. Each excerpt identifies its file, relevant lines, and exact pinned-source link. Revisit the agreed workflow diagram where it connects components; external source links supplement the teaching rather than being required for every explanation.
- Show the educational release, fixed source revision, and limited preview scope on the introduction, with compact identity information accessible from every lesson. Identify educational reconstruction, label engineering interpretations and hypothetical alternatives beside affected passages, and disclose material uncertainty where it affects claims. Existing evidence and publication prerequisites remain binding.
- Keep the platform's catalog, module, and lesson structure repository-agnostic. tele-bot is the first teaching example, not a hardcoded product model. Repository-specific names, workflows, lesson counts, and examples belong to the selected educational content rather than defining the platform's general structure. This constraint does not add another repository or course to Phase 1.

All current experience-choice branches are covered. Final shared-understanding confirmation is pending before recording the resolution and closing this ticket. No specification, application changes, lesson assets, publication, or learner evaluation was produced.

### Final agreement — 2026-10-20

The creator explicitly confirmed: “Yes, this completes our shared understanding of Shape discovery and anonymous study.” This confirms Q1–Q4 together with the repository-agnostic structure constraint.

## Answer

Resolved through live exchange with the creator on 2026-10-20, with explicit confirmation of shared understanding. This decision defines the anonymous discovery and study experience for subsequent specification.

### Repository-agnostic product structure

Keep catalog, module, and lesson structures repository-agnostic. tele-bot is the first teaching example, not a hardcoded product model. Its name, `/start` workflow, domain concepts, examples, and five-lesson progression are educational content for this module; they do not prescribe the platform's general structure or a universal lesson count. This constraint adds no second repository or course to Phase 1 and selects no implementation architecture or content-storage format. The minimum content and delivery approach remains a separate decision.

### Discovery and fit

Use a minimal catalog card leading to a module introduction. For the first teaching example, the card identifies tele-bot, the `/start` problem, the target learner, and the limited preview. The introduction supplies the project's purpose, technologies, architectural context, complexity, prerequisites, objectives, expected outcomes, and five available lessons. “Start learning” opens the first lesson; visitors may also select any available lesson directly. Discovery, reading, and practice require neither registration nor payment, subject to the existing creator-approved preview distribution boundary.

### Study navigation and practice access

Recommend the agreed sequence while keeping all published lessons freely accessible. Supply a lesson list, previous/next links, and direct links to individual lessons and sections. Readiness self-checks guide learners without mandatory pass gates or access locks.

Reach browser practice and the local assignment through Apply the understanding, with links back to relevant explanations. State clearly that progress and results are not saved in Phase 1. Exact exercise behavior, feedback, local assignment requirements, hints, and solution details remain their separate practice decisions. Navigation and completion make no proficiency claim.

### Connected reading and exact source references

Keep the walkthrough self-contained: place readable excerpts beside the associated explanations, identify each excerpt's file and relevant lines, and provide an exact link at the approved fixed source revision. External source links supplement the teaching. Revisit the agreed workflow diagram where it helps connect components and behavior. Preserve the connected, problem-first explanation and the boundary excluding a full in-app repository browser.

### Preview identity and evidence presentation

Show the educational release, fixed source revision, and limited preview scope on the introduction; make compact identity information accessible from every lesson. Concrete release naming remains part of the publication-process decision.

Identify the teaching sequence as educational reconstruction. Label engineering interpretations and hypothetical alternatives beside the relevant passages, and disclose material uncertainty or evidence gaps where they affect claims. Preserve all previously agreed evidence distinctions, exact-reference rules, behavior-verification requirements, rights review, technical/educational review, and explicit creator approval before preview distribution. This decision supplies presentation rules, not evidence that those prerequisites have been completed.

### Map consequences and boundaries

No newly exposed question requires an additional ticket: bounded browser practice, local practice, creator publication, content/delivery choices, and walkthrough evidence already have their own tickets. Existing fog remains unresolved. No glossary term was newly resolved and no ADR is needed for this experience decision. No specification, implementation, lesson assets, publication, or learner evaluation was produced or completed.
