# Repository-to-Course — Phased Product Roadmap V1

## Purpose and authority

This roadmap turns the complete [V1 Product Overview](product-overview-v1.md) into six progressively valuable product increments. The overview remains the primary product reference. This document records the agreed sequencing, scope allocation, acceptance criteria, and planning handoffs; it does not replace the overview or prescribe an implementation architecture.

All phases are planned. This document records no completed implementation, creator content approval, learner acceptance, or validation results. Dates and effort estimates require subsequent planning against actual capacity.

The destination is a publicly available, curated educational platform with two complete English-language courses, reliable personal learning records, Structured Adaptive Learning, practical activities, transparent assessment, multimedia, and downloadable resources. A third course is optional within the overview's two-to-three-course range and must meet the same release requirements.

## Agreed product decisions

- Start with one coherent module from one repository. Prove saved learning and adaptive recommendations on that bounded curriculum before producing a complete first course and expanding the portfolio.
- Course preparation remains external to the running application. Require a documented creator-operated publication workflow; a dedicated in-app authoring or publishing dashboard is outside the committed V1 scope.
- Published learning content is free and readable without registration. Accounts are required for saved progress, assessment history, selected paths, adaptive recommendations, and personal proficiency reports.
- Adaptive paths recommend learning sequences. They do not lock access to other published lessons.
- Source exploration consists of readable excerpts, explanations of connected workflows, and exact references to the course's fixed repository version. A complete in-app repository browser is outside the committed scope.
- In-platform practice uses bounded responses with supported, predefined evaluation criteria. Substantial coding, execution, and project validation happen in the learner's local environment. V1 does not require routine human grading.
- Report demonstrated proficiency against individual learning objectives, grouped into conceptual understanding, practical ability, and engineering judgment. A single overall course-mastery badge is not required.
- Support and verify prepared video and audio. Use them in published lessons where they improve teaching, without per-lesson or per-course quotas.
- Each launch course supplies a coherent offline-readable course book and permitted companion exercises, examples, and reference materials. Exact packaging formats are decided during Phase 4 planning.
- Complete two meaningfully different courses before formal validation. In Phase 5, the creator approves numerical thresholds, cohort, observation period, and launch decision rules. Phase 6 cannot start formal validation without that plan.

## Rules that apply throughout

### Educational trust and publication

From the first learner-facing module, identify the repository and a fixed source revision, identify the course release, and keep references consistent with that revision. Distinguish source-supported facts, verified defects, potential risks, engineering interpretations, hypothetical scenarios, proposed improvements, and educational reconstruction. Genuine development history requires evidence; uncertainty and material gaps in tests or documentation must be visible.

The creator selects repositories after considering relevance, educational value, code quality, documentation, complexity, technological diversity, and usage rights. Before distributing content, the external workflow records rights checks and review of technical correctness, curriculum coherence, learning objectives, exercises, source references, and evidence sufficiency, followed by explicit creator approval. These are course-publication requirements, including for preview material; they do not require an in-app approval interface.

Published course versions are stable educational releases. Major corrections, revised educational content, and material based on a newer repository revision create separate course versions. Learner records remain attached to the versions actually studied. Expanding a published preview module into a revised course must respect this rule. Draft editing is part of the external production workflow. Automatic repository synchronization and progress transfer between course versions are excluded.

### Learning evidence

Keep these records distinct: exposure to a lesson, completion of an activity, an evaluated assessment result, and demonstrated proficiency against an objective. Opening or finishing a lesson does not establish proficiency.

For each objective, communicate **demonstrated proficiency**, **needs practice**, or **not yet sufficiently assessed**, with the supporting evidence and its limits. Predefined assessment criteria must be approved with the content before results can establish proficiency. A bounded assessment supports only the skill it actually measures. For example, identifying a correct implementation does not by itself prove the ability to independently build a complete system.

Learner-recorded assignment completion and local validation results remain visibly learner-reported or unverified. They do not become independently verified because the learner reports passing local tests. V1 requires neither a submission-review service nor automatic evaluation of arbitrary code or free-form explanations. Practical and engineering objectives that lack sufficient supported evidence remain unassessed or unverified; gaps must not be hidden by a course-wide score.

### Delivery, feedback, and completion

Phases 1–5 are increments available for controlled previews and formative walkthroughs, not announcements of a complete public V1. Anonymous reading must work in those increments even while preview distribution is limited. Phase 6 includes formal limited-cohort validation followed by public launch.

Each phase delivers a learner journey together with the prepared content and creator workflow needed to support it. Content research or preparation may overlap phases, but a later phase cannot claim completion before its dependencies are ready. There is no separate infrastructure-only or content-only phase.

Record reproducible acceptance walkthroughs, actual check results, content/repository versions, and outstanding findings per phase. Implementation readiness, creator publication approval, and learner evaluation are separate statuses. Automated checks do not establish human acceptance. If learner evaluation is pending, report it as pending; do not describe the learning experience as validated. The explicitly required creator approvals and Phase 6 validation remain product release gates.

## Phase sequence

| Phase | Learner outcome | Depends on | Main uncertainty addressed |
| --- | --- | --- | --- |
| 1. Guided repository module | Understand and practice one meaningful repository topic anonymously. | Product overview and this roadmap. | Can prepared, evidence-based repository teaching deliver a coherent learning experience? |
| 2. Personal learning record | Return to saved progress and understand assessment evidence. | Phase 1. | Can the product preserve useful, honest records of learning? |
| 3. Structured adaptive learning | Follow suitable prepared routes while retaining free access to lessons. | Phases 1–2. | Can predefined pathways respond usefully to learner differences and improvement? |
| 4. Complete first course | Complete a substantial course and continue studying independently. | Phases 1–3. | Does the experience hold together across a complete curriculum? |
| 5. Two-course portfolio and validation readiness | Choose between distinct courses with consistent capabilities. | Phases 1–4. | Does the product generalize, and can its success be evaluated credibly? |
| 6. Validated public V1 | Access the complete product after limited learner evaluation. | Phase 5 and the approved validation plan. | Does observed learner experience meet the agreed public-release conditions? |

## Phase 1 — Guided repository module

### Goal and user-visible outcome

A visitor studies one coherent module from a real repository and moves from a software problem through explanation and source exploration to practice. The increment demonstrates educational value without requiring a complete course or an account.

### In-scope capabilities and behaviors

- Select the first repository, its fixed revision, a target learner, and a bounded learning objective or objective set.
- Provide a minimal catalog entry and course introduction describing purpose, technologies, architectural context, complexity, prerequisites, objectives, expected outcomes, and the available curriculum. Clearly identify the limited preview scope.
- Deliver a coherent sequence of lessons within a module, with chapter organization where useful. Teach the problem and concepts before the implementation; include a diagram or illustration and a connected code walkthrough where they aid understanding.
- Present readable source excerpts and links to exact files or sections at the pinned revision. Explain component responsibilities, relevant inputs and outputs, and cooperation within a meaningful workflow.
- Include an architectural trade-off or limitation, with the appropriate evidence classification, and distinguish reconstruction from documented history.
- Supply at least one bounded interactive exercise with immediate prepared feedback and at least one local repository assignment with context, instructions, acceptance criteria, and validation guidance. Browser exercise results need not persist in this phase.
- Establish the external preparation, review, approval, version identification, and publication workflow used by subsequent phases.

### Explicit out-of-scope boundaries

Saved personal records, account-dependent features, personalized recommendations, a complete course, the second course, and formal validation are later-phase work. Video/audio support and downloadable books are not Phase 1 completion requirements. The committed V1 exclusions also apply.

### Dependencies

No earlier delivery phase. Repository selection, rights, content review, and creator approval must be resolved within this phase before its material is distributed.

### Product-level acceptance criteria

1. An anonymous visitor can discover the module, understand its prerequisites and limited scope, study its lessons in a coherent order, and attempt the exercise without registering or paying.
2. The sequence connects a stated problem to concepts, actual source behavior, and practice; its organization is educational rather than a directory listing.
3. Source references resolve to the identified revision and match the explanations. Claims, uncertainty, reconstruction, and criticism are presented with appropriate evidence distinctions.
4. Supported correct and incorrect exercise responses receive the intended feedback. The local task is actionable and includes observable validation steps without implying platform verification.
5. The creator can identify the approved content release, source revision, rights basis, review evidence, and publication decision through the external workflow.

### Clear completion conditions

The approved module is available as a preview, all acceptance criteria have a reproducible walkthrough and recorded results, and no unresolved finding prevents the stated anonymous learning journey. Record formative learner observations separately if gathered; readiness alone is not evidence of learning effectiveness.

### Focused Wayfinder handoff

- **Effort:** Plan the first guided repository module.
- **Destination:** A product- and content-specification-ready module, including its learner journey, source/evidence contract, bounded exercise, local assignment, and creator publication process.
- **Inputs and settled constraints:** Overview §§2–7, 9–10, 13–15, 17–18; the common rules and Phase 1 in this roadmap. One module, anonymous access, fixed source references, external authoring, and creator approval are settled.
- **First decision:** Which repository, learner objective, and real workflow form the smallest coherent teaching-and-practice experience?
- **Remaining planning work:** Select the revision and evidence; define lesson progression, presentation, exercise feedback, local validation guidance, content representation, and the minimum delivery choices needed for this journey.
- **Handoff boundary:** Produce decisions and a buildable specification. Do not expand into account design, adaptation, a full-course manuscript, or implementation during Wayfinder planning.

## Phase 2 — Personal learning record

### Goal and user-visible outcome

A registered learner can return to the module, resume study, and understand what they have studied, completed, demonstrated, or still need to practice. The same educational content remains anonymously accessible.

### In-scope capabilities and behaviors

- Provide account access and a personal learning profile with reliable saved records for the course version studied.
- Preserve lesson-study status, activity completion, assessment attempts and results, and objective-level proficiency with evidence across the three learning dimensions.
- Add supported assessment activities for conceptual understanding, bounded practical skills, and engineering judgment. The remaining browser exercise formats can be completed during Phase 4.
- Allow learners to record external assignment completion and validation results with explicit learner-reported or unverified status.
- Provide prepared assessment feedback and reassessment opportunities. Full adaptive route selection arrives in Phase 3.
- Support revisiting lessons, finding unfinished work, and seeing the difference between content completion and proficiency.

### Explicit out-of-scope boundaries

Adaptive recommendations, personalized prerequisite routing, and saved selected paths are Phase 3. A complete curriculum, all launch exercise formats, multimedia, downloads, and portfolio expansion are later. Routine human grading, arbitrary-response AI evaluation, and a single overall course-mastery badge are not required.

### Dependencies

Phase 1 supplies the approved teaching module, objective definitions, source references, local practice, and stable release identity. Assessment criteria and their evidence limits must be reviewed before proficiency reporting is enabled.

### Product-level acceptance criteria

1. A learner can sign in, study and practice, leave, and return in another session to the correct course-version records. One learner's records are not shown as another learner's progress.
2. Anonymous visitors retain access to published educational material. Saved personal history and reports require authentication.
3. The profile separately shows lesson study, activity completion, evaluated results, and objective-level proficiency. Studying a lesson or reporting a local assignment does not establish mastery.
4. Representative assessments across all three dimensions produce the expected outcomes against approved criteria. Unsupported broader claims remain unassessed or unverified.
5. Reassessment preserves prior results and makes improvement or continuing difficulty understandable. Completing activities cannot conceal missing evidence.
6. External assignment records remain clearly learner-reported or unverified in both detailed and summary views.

### Clear completion conditions

The return-and-resume journey and evidence distinctions are demonstrated with representative learner records, including incomplete work, failed attempts, improvement, and unverified assignments. Record actual persistence and access checks and any pending learner evaluation. No unresolved issue may lose, misattribute, or materially misrepresent the records needed for this journey.

### Focused Wayfinder handoff

- **Effort:** Plan reliable personal learning records.
- **Destination:** A specification for account-dependent study, assessment history, local assignment reporting, and transparent objective-level proficiency on the Phase 1 module.
- **Inputs and settled constraints:** Overview §§10–12, 15, 17; common rules; Phase 1's released content and completion evidence. Anonymous content access, three evidence dimensions, and course-version association are fixed.
- **First decision:** What observable evidence establishes lesson study, activity completion, and each objective's proficiency state without conflating them?
- **Remaining planning work:** Define account/resume behavior, supported assessments and criteria, attempt history, profile presentation, unverified assignment records, and necessary persistence and access choices.
- **Handoff boundary:** Specify this learner journey without designing the adaptive recommendation system or adding a grading operation. Preserve evidence gaps explicitly.

## Phase 3 — Structured adaptive learning

### Goal and user-visible outcome

A learner receives an appropriate prepared route through the bounded curriculum, can understand the recommendation, and can change course freely. A struggling learner receives useful remediation and reassessment; a prepared learner can advance without unnecessary repetition.

### In-scope capabilities and behaviors

- Collect initial knowledge and learning objectives, using supported diagnostic assessment where appropriate.
- Expand the initial module's surrounding prepared content enough to create genuine prerequisite, standard, remedial, and advanced routes. A complete course is not yet required.
- Recommend predefined paths using initial knowledge, goals, assessment evidence, and demonstrated progress. Save selected paths and subsequent recommendations in the profile for the relevant course version.
- Connect difficulty to prepared supplementary explanations, targeted exercises, hints, and reassessment. Adapt the amount of prepared guidance as the learner develops independence.
- Explain the relevant objective or evidence behind a recommendation. Treat insufficient evidence differently from demonstrated difficulty.
- Keep all other published lessons accessible; recommendations do not become enrollment or content-access locks.

### Explicit out-of-scope boundaries

No live AI instructor, generated explanations, generated exercises, unrestricted conversational evaluation, or automatic assessment of arbitrary submissions. Full-course breadth and portfolio scale remain later phases. Adaptation uses prepared content and rules rather than an open-ended tutoring system.

### Dependencies

Phases 1–2 supply trusted content, defined objectives, assessment history, honest proficiency states, and saved profiles. Branching content and recommendation criteria must be reviewed and released under the existing publication and version rules.

### Product-level acceptance criteria

1. Learners with different supported initial knowledge, goals, or assessment evidence receive meaningfully appropriate predefined recommendations; personal inputs are not merely collected and ignored.
2. Demonstrated prerequisite proficiency can lead to advanced content. A prerequisite gap can lead to foundational material. Difficulty can lead to prepared remediation and reassessment.
3. Improved reassessment evidence updates the recommendation while preserving earlier attempts and their meaning. Unverified assignment reports do not silently become verified prerequisites.
4. Recommended routes lead to existing, coherent content. The learner can understand the recommendation, select a path, leave, and return to the saved state.
5. A learner can open another published lesson despite the recommendation. Missing evidence is communicated without falsely labeling the learner proficient or incapable.
6. The experience contains both supported guidance and a less-guided opportunity to reason or solve a problem; adaptation does not simply repeat explanations indefinitely.

### Clear completion conditions

Walkthroughs cover prerequisite gaps, established knowledge, difficulty, insufficient evidence, and improvement after remediation. Each route has approved supporting content and recorded outcomes against the expected recommendation rules. The bounded adaptive experience is ready for formative evaluation; full-course effectiveness is not yet claimed.

### Focused Wayfinder handoff

- **Effort:** Plan prepared adaptive learning routes.
- **Destination:** A specification for explainable, non-locking recommendations and prepared support on the first bounded curriculum.
- **Inputs and settled constraints:** Overview §§8–12; common rules; Phase 2's objective/evidence definitions and completion evidence. Prepared content, saved paths, free lesson access, and the prohibition on generated tutoring are fixed.
- **First decision:** Which learning differences require distinct routes, and what supported evidence selects each route?
- **Remaining planning work:** Define onboarding and diagnostics, route relationships, missing-evidence behavior, remediation, reassessment transitions, guidance reduction, learner choice, and recommendation explanations.
- **Handoff boundary:** Resolve the bounded adaptive experience and the content it needs. Do not design generalized AI tutoring or require a complete course before proving the routes.

## Phase 4 — Complete first course

### Goal and user-visible outcome

A learner can complete a comprehensive course about the first repository, move from system understanding toward independent engineering practice, and retain permitted materials for offline study.

### In-scope capabilities and behaviors

- Expand to the full approved curriculum of modules, chapters, and lessons with explicit objectives, prerequisites, exercises, and assessment opportunities.
- Teach the repository's essential concepts, features, architecture, and cross-component workflows. Use progressive reconstruction, evidenced history where available, supplementary prerequisite lessons, and increasingly independent practice.
- Include critical analysis of actual limitations and alternatives, with relevant trade-offs in complexity, maintainability, security, performance, or operational cost. Keep interpretations distinct from verified defects.
- Extend saved progress, objective-level assessment, all three learning dimensions, prepared feedback, and adaptive routes across the complete course.
- Complete support for conceptual questions, code comprehension, debugging diagnosis, output prediction, and bounded code-fragment completion. Choose activities according to educational purpose.
- Provide substantial local assignments, such as implementing, testing, refactoring, investigating a defect, or reconstructing functionality, with explicit acceptance and validation guidance. Not every illustrative assignment type is mandatory.
- Deliver suitable diagrams and illustrations and support prepared instructional video and audio. Verify both media formats with representative material; published use follows teaching value, with no media quota.
- Supply a coherent offline-readable book and permitted companion exercises, examples, and references. Identify the course/source versions, rights, and any material download limitations. The book must be readable without an active platform session or connection; external references or streamed media may still need connectivity.
- Exercise controlled publication of a revised course version while preserving records associated with an earlier version. Resolve the editorial-correction policy consistently with stable educational releases.

### Explicit out-of-scope boundaries

The second launch course and formal validation are later phases. Downloads do not reproduce interactive assessment, synchronization, adaptive paths, or personal proficiency reports offline. No automatic progress migration, repository-change tracking, blanket media requirement, or exhaustive coverage of every source file is required.

### Dependencies

Phases 1–3 supply the complete learning interaction model and publication safeguards. Expanding the curriculum requires reviewed objectives, evidence, activities, and prepared route content; a page-count increase alone does not satisfy this phase.

### Product-level acceptance criteria

1. A learner can understand the course's complete scope before starting and follow a coherent path from the overall problem and architecture into meaningful implementation details and independent practice.
2. Essential course topics have sufficient instruction and appropriate prerequisites or supplementary lessons; important concepts do not routinely depend on fragmented external explanations.
3. The complete course includes exercises, external practice, supported assessment across the three dimensions, saved progress, remediation, and advanced routes. Objective/evidence gaps remain visible.
4. All five bounded activity categories are supported and verified with representative material. Video and audio work with prepared resources, while individual lessons use only suitable formats.
5. Downloads are accessible without registration, identify the relevant versions and permitted usage, open independently of the platform, and include usable companion resources. Rights restrictions are respected and disclosed; a nominal empty package does not satisfy independent study.
6. A revised course release has its own identity and consistent source references. Earlier learner records remain attributable and accessible as records of the version studied, without automatic transfer or silent replacement.
7. The creator's full-course review covers technical accuracy, curriculum coherence, objectives, activity quality, source references, and evidence sufficiency before publication.

### Clear completion conditions

The first complete course has creator publication approval and evidence for the full learning journey, representative branching paths, supported exercise formats, both media formats, downloads, and controlled revision behavior. The published scope matches the actual curriculum. Remaining findings do not prevent that experience; formal learning-effectiveness validation is still pending.

### Focused Wayfinder handoff

- **Effort:** Plan the complete first course and independent study experience.
- **Destination:** An approved full-course specification and content-production plan, including curriculum coverage, media, downloads, and version-release behavior.
- **Inputs and settled constraints:** Overview §§3–16, 18; common rules; the bounded experience and evidence from Phases 1–3. Three-dimensional assessment, prepared adaptation, optional media use, and meaningful downloads are fixed.
- **First decision:** What curriculum and independent-practice outcomes make this repository course educationally complete, and what does each require as evidence?
- **Remaining planning work:** Map concepts and subsystems to lessons and activities; identify gaps and supplementary content; choose appropriate media and download formats; specify resource rights and correction/version policies.
- **Handoff boundary:** Produce the specification and production/review plan, not the entire manuscript during Wayfinder. Do not broaden into a marketplace, the second course's curriculum, or an offline learning application.

## Phase 5 — Two-course portfolio and validation readiness

### Goal and user-visible outcome

A learner can compare two meaningfully different complete courses, choose one appropriate to their goals, and receive the same core learning capabilities in either. The product is ready for a credible formal pilot.

### In-scope capabilities and behaviors

- Select and complete a second repository-based course with meaningful differences in complexity, structure, technology, or educational value, applying the same rights, evidence, approval, and version standards.
- Apply the full common course standard: structured instruction, exercises, substantial local practice, three-dimensional assessment, saved progress, adaptive pathways, and permitted downloadable resources. Appropriate multimedia and assignment choices may differ.
- Deliver catalog and course-detail discovery across the portfolio, including project purpose, technologies, architectural characteristics, complexity, prerequisites, objectives, curriculum, expected outcomes, and fixed source version.
- Preserve distinct progress, selected paths, attempts, and proficiency when learners switch courses or revisit course versions. Avoid an unsupported unified skill credential.
- Prepare and dry-run the measurement and feedback process needed for formal validation. Lightweight manual collection can complement in-product records; a dedicated analytics dashboard is not required.
- Use formative evidence to define numerical targets, cohort size and experience mix, observation period, measurement methods, and release/iteration rules. Obtain the creator's approval before Phase 6 formal validation.
- Add a third course only if it meets the identical standards and validation coverage. It is not required to complete the two-course commitment.

### Explicit out-of-scope boundaries

A large catalog, sophisticated search or recommendation marketplace, creator self-service, public learning portfolios, and the optional third course are not completion requirements. Formal pilot execution and public launch occur in Phase 6. Numerical success thresholds are not assumed to have been approved by this roadmap.

### Dependencies

Phase 4 supplies the first complete course and a demonstrated common delivery standard. Phase 5 must also retain all earlier personal-record, adaptation, publication, and evidence behaviors across the second course.

### Product-level acceptance criteria

1. Two complete courses are available for preview, based on distinct repositories whose selection rationale and usage rights are documented. Each has explicit creator publication approval.
2. A visitor can compare the courses and judge fit from the required discovery information without registering or paying. Each course's promised capabilities and scope match its actual content.
3. Both courses meet the common educational and product standard. The second course is not a reading-only exception to assessment, adaptation, progress tracking, or independent practice.
4. Switching between courses and versions preserves the correct records and references. Evidence from one course is not represented as demonstrated proficiency in an unrelated objective.
5. A measurement dry run shows that the approved plan's required observations can be collected and interpreted without conflating completion, self-report, and demonstrated learning.
6. The creator-approved validation plan covers all four success dimensions, both required courses and any optional third, learners with different experience levels, and numerical public-release conditions.

### Clear completion conditions

Both complete courses pass the common readiness review, portfolio journeys have recorded walkthrough results, and the validation plan has explicit creator approval. Formal validation remains blocked while targets, cohort, timing, evidence collection, or launch rules are unsettled. An optional third course must not be counted as launch-ready without the same evidence.

### Focused Wayfinder handoff

- **Effort:** Plan the second course and formal validation readiness.
- **Destination:** A specification for a consistent two-course portfolio and a creator-approved, executable validation plan.
- **Inputs and settled constraints:** Overview §§3, 11–12, 14–19; common rules; Phase 4's complete-course standard and formative evidence. Two required courses, an optional third, and four validation dimensions are fixed.
- **First decision:** Which second repository most usefully tests the product beyond the first course while meeting the common standard and rights requirements?
- **Remaining planning work:** Define its curriculum and adaptations, portfolio discovery and record-switching behavior, measurement feasibility, cohort, numerical targets, observation period, and launch decision rules.
- **Handoff boundary:** Plan the portfolio and validation gate. Do not run formal validation before approval, invent unsupported targets, or expand the catalog commitment.

## Phase 6 — Validated public V1

### Goal and user-visible outcome

The complete product becomes publicly available after a limited, diverse learner group has evaluated its educational experience and the release conditions have been met.

### In-scope capabilities and behaviors

- Recruit and conduct the approved limited-cohort validation across every launch course, using the approved experience mix, duration, methods, and numerical thresholds.
- Evaluate teaching clarity, curriculum coherence, exercise quality, progression, assessment usefulness, adaptive routes, independent practice, and overall usability.
- Measure educational quality, engagement, demonstrated learning effectiveness, and perceived value according to the plan.
- Address significant findings and repeat affected evaluation where the launch rules require it. Content corrections follow creator review and course-version rules; learning records retain their original meaning.
- Publish the complete open-access catalog, courses, and permitted resources, with authenticated personal features available to registered learners.
- Record the release decision, actual evidence, known limitations, and post-launch follow-up. Public availability includes verifying the core anonymous and registered learner journeys in the public release.

### Explicit out-of-scope boundaries

Future AI generation, live tutoring, marketplace/community features, monetization, additional languages, accreditation, and automatic repository updates remain excluded. Public launch does not require a third course, an advanced analytics suite, a universal mastery claim, or proof of long-term outcomes that the approved observation period cannot measure.

### Dependencies

Phase 5 is complete, including explicit approval of the validation plan. Both courses and the evidence-collection process are ready; the thresholds are fixed before formal observations begin.

### Product-level acceptance criteria

1. Actual observations cover the approved cohort, experience mix, period, and every launch course, including an optional third if present. Missing data or recruitment shortfalls are evaluated under the agreed rules, not silently treated as success.
2. Results are assessed against the previously approved numerical thresholds in all four dimensions. Completion and self-report are not substituted for independent evidence of learning.
3. Significant educational, evidence-integrity, and usability findings receive the resolution and reevaluation required by the plan. A failed condition leads to further iteration, not an unqualified launch-ready claim.
4. The release record states whether each condition passed, what evidence supports it, and what limitations remain. A changed validation plan is explicit and requires the corresponding new evaluation; targets are not retroactively rewritten to label existing results a pass.
5. Public visitors can discover, read, practice, follow source references, and obtain permitted resources without payment or mandatory registration. Registered learners can resume version-specific records, use recommendations, and inspect honest proficiency reports across both courses.
6. Published material has the necessary creator approvals, and the public release preserves the V1 scope boundaries and stable course versions.

### Clear completion conditions

The approved formal validation and required follow-up are complete, actual results satisfy the agreed launch conditions, and the public product's core journeys are verified. The release record is reviewable. If evaluation is incomplete or launch conditions remain unmet, this phase remains incomplete even if the application is deployable.

### Focused Wayfinder handoff

- **Effort:** Plan limited learner validation and public release.
- **Destination:** An executable pilot, finding-resolution, and release-evaluation plan with clear evidence requirements and decision ownership.
- **Inputs and settled constraints:** Overview §§14–19, 21–22; common rules; Phase 5's approved validation plan and two-course readiness evidence. Previously approved thresholds and honest evidence classifications are binding.
- **First decision:** How will the approved validation plan be carried out and its observations turned into traceable release or iteration decisions?
- **Remaining planning work:** Resolve recruitment logistics, observation and feedback procedures, finding severity and ownership, required reevaluation, and public-release walkthroughs within the approved rules.
- **Handoff boundary:** Wayfinder plans this work; actual learner validation and public release require subsequent execution and recorded observations. Do not declare acceptance from planning artifacts or automated checks.

## Formal validation contract

Phase 5 must turn this framework into an approved numerical plan. The following signals are candidates from the overview, not preselected metrics or assumed targets.

| Success dimension | Candidate signals | Evidence distinction to preserve |
| --- | --- | --- |
| Educational content quality | Teaching clarity, curriculum coherence, technical accuracy findings, exercise quality, learner feedback. | A functioning page is not evidence that its explanation is clear or correct. |
| Learner engagement | Participation, return/retention over the chosen period, lesson and exercise completion. | Activity and completion are not proof of proficiency. |
| Demonstrated learning effectiveness | Assessment improvement, reassessment after remediation, supported demonstrations of independent skills. | Separate supported assessment evidence, observed independent performance, and learner-reported assignment results. |
| Perceived product value | Satisfaction, willingness to recommend, perceived usefulness, interest in future capabilities. | Interest in a future feature is not approval to add it to V1. |

For each selected metric, specify its definition, collection method, baseline or comparison where needed, denominator, numerical threshold, observation period, cohort coverage, evidence limitations, and the action taken if it fails or cannot be measured. Specify the cohort size and experience mix, coverage of every launch course, treatment of dropouts or missing data, significant-finding rules, and any required reevaluation. The creator owns approval. No sample size, success percentage, or learning-effect claim is established by this document.

## V1 coverage against the complete Product Overview

Section numbers refer to the [primary overview](product-overview-v1.md). The table accounts for requirements, recurring safeguards, and future-only material separately.

| Overview section | Requirement or boundary | Roadmap allocation |
| --- | --- | --- |
| §1. Vision | Teach understanding, reasoning, and independent engineering through real repositories. | Module proof in Phase 1; evidence and adaptation in Phases 2–3; full-course/portfolio delivery in Phases 4–5; evaluation in Phase 6. |
| §2. Creation and publication | Creator-selected repositories; external agent-assisted production; review and final creator approval; no embedded generation API required. | Publication workflow in Phase 1, applied to every subsequent release. |
| §3. Catalog and discovery | Anonymous discovery; repository/version identity; purpose, technologies, architecture, complexity, prerequisites, objectives, curriculum, outcomes; two to three courses. | Initial entry in Phase 1; complete course in Phase 4; two required courses and optional third in Phase 5; public launch in Phase 6. |
| §4. Curriculum | Modules, chapters, lessons; objectives, prerequisites, exercises, assessments; concept/feature organization and system-to-detail progression. | Initial structure in Phase 1; branching in Phase 3; complete curriculum in Phase 4 and repeated in Phase 5. |
| §5. Reconstruction | Problem-first, incremental teaching; evidenced history or explicitly identified reconstruction. | Required from Phase 1; extended across each complete course in Phases 4–5. |
| §6. Books and multimedia | Comprehensive English instruction; explanations, code, diagrams, illustrations, video, audio, walkthroughs, exercises; suitable formats without universal media quotas. | Core formats in Phase 1; complete format support and teaching breadth in Phase 4; shared standard in Phase 5. |
| §7. Source exploration | Explain responsibilities, inputs/outputs, relationships, and end-to-end behavior with fixed-version references. | Usable in Phase 1; expanded to full workflows and courses in Phases 4–5. Full in-app repository browser excluded. |
| §8. Structured Adaptive Learning | Prepared paths based on knowledge, goals, assessments, and progress; prerequisites, remediation, and advancement. | Phase 3; applied across full courses in Phases 4–5. |
| §9. Teaching methodology | Prepared hints and feedback, problem-first tasks, trade-offs, and decreasing guidance toward independence. | Initial teaching/practice in Phase 1; evidence feedback in Phase 2; adaptive guidance in Phase 3; complete progression in Phases 4–5. |
| §10. Practice | Conceptual/comprehension/debugging/output/fragment activities plus authentic local repository assignments and validation guidance. | Initial browser and local practice in Phase 1; assessment in Phase 2; full bounded format support and substantial assignments in Phase 4; repeated in Phase 5. |
| §11. Assessment | Conceptual, practical, and engineering dimensions; supported automatic evaluation; reported external results; remediation and reassessment; honest mastery claims. | Evidence/reporting and reassessment in Phase 2; remediation in Phase 3; full-course coverage in Phases 4–5; measured learning in Phase 6. |
| §12. Profiles and progress | Studied lessons, objectives, activities, results, competencies, gaps, selected paths; completion distinguished from mastery. | Core profile in Phase 2; saved selected paths in Phase 3; complete-course and portfolio records in Phases 4–5. Advanced public portfolios are future-only. |
| §13. Critical analysis | Limitations and alternative designs; distinguish defects, risks, interpretations, hypothetical scenarios, and improvements. | First example and evidence rules in Phase 1; substantial analysis and practice in Phases 4–5. |
| §14. Reliability | Traceable claims, uncertainty, material evidence gaps, technical/educational review, creator approval. | Required from Phase 1 for every release; validation findings feed corrections in Phase 6. |
| §15. Versioning | Fixed source revision; stable course releases; separate revised versions; progress tied to studied versions. | Release identity and publication rules in Phase 1; anchored records in Phase 2; revision/history walkthrough in Phase 4; portfolio checks in Phase 5. Automatic sync/migration excluded. |
| §16. Independent study | Permitted books, lessons, examples, exercises, and references; interactive records and adaptation remain online. | Concrete downloadable book and companion resources in Phase 4, supplied by each launch course in Phase 5. |
| §17. Access and accounts | Free anonymous published content; authentication for personal features; creator-controlled publishing. | Anonymous access and creator control in Phase 1; personal features in Phases 2–3; full public availability in Phase 6. |
| §18. Portfolio | Distinct repositories chosen for educational value and rights; common instruction, practice, assessment, adaptation, tracking standard. | First selection in Phase 1; first complete course in Phase 4; second complete course and optional third under identical gates in Phase 5. |
| §19. Validation | Limited learners of different experience levels before public availability; four dimensions; numerical thresholds approved in advance. | Formative feedback through Phases 1–5; approved formal plan in Phase 5; pilot, required fixes, and public release in Phase 6. |
| §20. Long-term expansion | Self-service generation, live AI teaching, creator ecosystem, collaboration, portfolios, and commercial hypotheses. | Future-only; excluded from V1 delivery phases. |
| §21. V1 limits | External production; no learner repository submissions, embedded generation, live AI, general cloud IDE, community marketplace, paid subscriptions, multilingual instruction, automatic synchronization, or accreditation. | Binding boundaries throughout all six phases. |
| §22. Overall direction | Two to three high-quality English courses with adaptive, multimedia, practical, evidence-based open education. | Complete V1 delivered and validated through Phase 6; AI generation and live teaching remain future-only. |

## Explicit future scope and noncommitments

The following are outside all six V1 phases, not hidden backlog commitments: learner repository submission; embedded AI course generation or in-app automatic analysis of arbitrary repositories; live AI instruction and unrestricted conversation; dynamically generated explanations, exercises, or arbitrary-response evaluation; automatic analysis of learner code changes; a general cloud development environment; automatic repository synchronization, lesson regeneration, or progress migration; user-generated public courses and a creator marketplace; advanced community participation and collaboration; externally accredited certification; advanced public evidence portfolios; paid subscriptions, freemium allowances, creator monetization, usage pricing, and marketplace policies; and multilingual instruction.

A complete in-app repository browser, dedicated in-app authoring/publishing dashboard, routine human-grading service, overall course-mastery badge, and offline interactive learning application are also outside the committed V1 scope under the agreed roadmap decisions. Their omission does not remove the corresponding required source references, creator workflow, bounded assessment, objective-level reporting, or static independent-study resources.

Future capabilities require separate discovery and approval. The overview's example of five free generated repositories is a business-model hypothesis, not a V1 entitlement or roadmap phase. The optional third launch course is the sole portfolio option already inside this roadmap's V1 range; it carries no reduced quality or validation standard.

## Using the Wayfinder handoffs

Each phase handoff is sufficient to start an independent Wayfinder planning effort without the interview transcript. Supply the [overview](product-overview-v1.md), this roadmap's agreed decisions and common rules, the chosen phase section, and available completion evidence from its dependencies. Missing dependency evidence is a planning constraint, not permission to assume completion.

Use the phase's named effort and destination, carry its settled constraints into the map's Notes, and separate precise open decisions from less-defined in-scope questions and explicit exclusions. Read [the local issue-tracker instructions](../agents/issue-tracker.md) before creating a map or decision tickets. No Wayfinder maps, tickets, implementation work, or course content are created by this roadmap itself.

Wayfinder is planning by default. An initial independent session charts the phase's decisions; subsequent sessions normally resolve one decision ticket at a time under the [Wayfinder skill](../../.agents/skills/wayfinder/SKILL.md). A phase can require multiple sessions. Its planning destination is a clear, reviewable specification and route to delivery, not a declaration that the product phase has been implemented or accepted.
