# Plan the first guided repository module

Labels: wayfinder:map
Status: open

## Destination

A product- and content-specification-ready Phase 1 module, including its learner journey, source/evidence contract, bounded exercise, local assignment, and creator publication process. This effort ends with the decisions needed for subsequent specification; it does not create that specification or execute delivery.

## Notes

- Authority: the [V1 Product Overview](../../docs/product/product-overview-v1.md), especially §§2–7, 9–10, 13–15, 17–18, and the [agreed decisions, common rules, and Phase 1 Focused Wayfinder Handoff](../../docs/product/phased-roadmap-v1.md#phase-1--guided-repository-module). Preserve all approved product decisions. The overview remains the primary product reference.
- Scope: one coherent English-language module from one real repository, for a defined learner and bounded objective set. The journey connects a problem, concepts, a connected source workflow, an architectural trade-off or limitation, browser practice, and local repository practice.
- Settled access and production rules: free anonymous discovery, reading, and practice; external creator-controlled preparation and publication; explicit creator approval before distribution, including preview distribution. No dedicated in-app authoring dashboard.
- Settled source and trust rules: fixed repository revision and identifiable stable course release; exact source references; visible uncertainty and material evidence gaps. Distinguish source-supported facts, verified defects, potential risks, engineering interpretations, hypothetical scenarios, proposed improvements, and educational reconstruction. Genuine history requires evidence. Rights and technical/educational review remain prerequisites for distribution.
- Settled release rules: revised educational content, major corrections, and newer source revisions require separate course versions under the roadmap. Expanding a preview must respect stable releases. Future learning records stay associated with the version studied; no migration or synchronization is planned here.
- Settled practice rules: at least one bounded interactive exercise with immediate prepared feedback and one actionable local repository assignment with acceptance criteria and validation guidance. Browser results need not persist. Local results are learner-reported or unverified; neither completion nor a bounded response proves broader independent proficiency.
- Settled delivery boundary: a minimal catalog/introduction identifies purpose, technologies, architectural context, complexity, prerequisites, objectives, expected outcomes, available curriculum, and limited preview scope. Teaching is problem-first, with connected code explanation and a diagram or illustration where it aids understanding; curriculum is not a directory listing.
- Completion of this map means the route is clear for a later specification effort. It does not establish implementation readiness checks, creator publication approval, learner acceptance, or measured learning effectiveness. Phase 1 delivery later requires an approved preview and recorded acceptance walkthrough results; formative observations remain separate.
- Session skills: use [Wayfinder](../../.agents/skills/wayfinder/SKILL.md); resolve conversation tickets with [grilling](../../.agents/skills/grilling/SKILL.md) and [domain-modeling](../../.agents/skills/domain-modeling/SKILL.md). The roadmap supplies this map's destination and boundaries; this charting session resolves no new product decision. Human decisions must be made in live exchange, not inferred by an agent. Consult the [local tracker conventions](../../docs/agents/issue-tracker.md) each session. No glossary or ADR exists at charting time; introduce terminology only when actually resolved.
- Tracker: child questions live in `issues/`; `Type:` and `Labels: wayfinder:<type>` identify their type. Only Wayfinder labels apply. `Status: open` is unclaimed; claim by saving `Status: claimed` before work. Dependencies are the local `Blocked by:` convention. Scan children in numerical order for open, unclaimed tickets whose blockers are all resolved; the map deliberately does not list open tickets. On resolution, append `## Answer`, set `Status: resolved`, and add a named link and gist below. Charting ends before resolving a child; later sessions normally resolve one decision ticket each.
- Evidence at charting: the repository contains planning documents and skills, with no application, selected teaching repository, source revision, prepared module, rights record, or publication approval found. Do not treat missing evidence as completion. No external research ticket is yet scoped: repository-specific investigation can be identified after selection, using the research skill and research subagent workflow when external knowledge is needed.

## Decisions so far

- [Select the smallest coherent teaching experience](issues/01-select-teaching-experience.md): teach tele-bot's `/start` registration/welcome workflow to basic TypeScript programmers, with bounded tracing, prediction, trade-off reasoning, and local-change objectives; the source/evidence decision follows separately.

- [Establish the fixed source and evidence basis](issues/02-establish-source-evidence-basis.md): pin tele-bot to `14f5af8`, record creator reuse authorization, require behavior verification before distribution, and teach the registration trade-off as interpretation within an educational reconstruction; execution and publication review remain pending.

- [Define the module's teaching progression](issues/03-define-lesson-progression.md): use five problem-first lessons from prediction and connected tracing through state preservation, bounded trade-off analysis, and practice, with decreasing guidance, readiness self-checks, and one recurring workflow diagram.

- [Shape discovery and anonymous study](issues/04-shape-anonymous-journey.md): use a catalog-to-introduction journey, freely navigable lessons, self-contained excerpts with exact source links, and visible release/evidence context; keep catalog, module, and lesson structures repository-agnostic.

- [Choose bounded practice and prepared feedback](issues/05-choose-bounded-exercise.md): use one reference-assisted, three-scenario prediction exercise with separately checked state, reply, and reasoning choices, immediate prepared feedback, optional hints, and unlimited retries; no overall score or proficiency claim.

## Not yet specified

- Repository-specific surprises may expose additional teaching boundaries or evidence gaps during deeper inspection of the selected workflow and fixed revision. Their educational consequences cannot yet be framed precisely; graduate concrete questions as they emerge.
- Detailed practice selection may reveal supplementary explanation needs beyond the agreed teaching scaffolding and workflow diagram, or a concrete presentation experiment. Scope any resulting decision or throwaway prototype only after its purpose is known; do not grow a full curriculum or produce course content during charting.

## Out of scope

- Specifications, implementation tickets, application implementation, course manuscripts, prepared lesson/exercise assets, deployment, and publication execution. The current user instruction narrows the handoff to decisions ready for later specification.
- Phase 2 personal records, accounts, saved progress, assessment histories, proficiency reports, and assignment-result persistence; Phase 3 adaptive recommendations, saved paths, and remedial/advanced branching.
- A complete first course, additional courses, required video/audio support, downloadable books and packaging, formal validation plans or thresholds, pilot execution, and public V1 launch. These belong to later phases; optional formative observations do not establish formal validation.
- All committed V1 exclusions: learner repository submissions; embedded generation or arbitrary repository analysis; live AI instruction; generated explanations/exercises and arbitrary-response or code evaluation; cloud development environments; automatic repository synchronization, lesson regeneration, or progress migration; user-generated publishing and marketplaces; advanced community/collaboration or public evidence portfolios; paid/freemium monetization; multilingual instruction; accreditation.
- A full in-app repository browser, dedicated publishing dashboard, routine human-grading operation, universal course-mastery badge, and offline interactive application. Required exact source references, creator workflow, and honest feedback remain in scope.
