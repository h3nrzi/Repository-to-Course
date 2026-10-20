# Choose the minimum content and delivery approach

Parent: [Plan the first guided repository module](../map.md)
Type: grilling
Labels: wayfinder:grilling
Status: resolved
Blocked by: 04, 05, 06, 07

Prerequisite decisions: [Shape discovery and anonymous study](04-shape-anonymous-journey.md); [Choose bounded practice and prepared feedback](05-choose-bounded-exercise.md); [Choose authentic local practice and validation guidance](06-choose-local-assignment.md); [Define the external creator publication process](07-define-creator-publication-process.md).

## Question

What content representation and minimum application, preview-delivery, and publication choices can support the agreed anonymous journey, source/evidence distinctions, practice, and external creator process?

Compare only choices needed for this module: representing ordered teaching material and source references, prepared bounded feedback and local instructions, identifying approved releases, and delivering a controlled preview with anonymous access. Account for operability and the creator's ability to publish the approved release without embedding production in the application. Defer architectural choices that only serve later phases. No stack is preselected and no existing application is assumed; resolve trade-offs through conversation and use current documentation if evaluating a named technology. Record decisions rather than schemas, specifications, infrastructure, or implementation tickets.

## Comments

### Content representation, application shape, and preview reach agreed — 2026-10-20

The creator answered “Q1–Q3: Yes to all” in live exchange:

- Keep teaching material in version-controlled text files: Markdown for explanations and local instructions, with structured metadata and prepared exercise data for ordering, release identity, source references, and choices/feedback. Rendering and exercise behavior live in reusable application components. Keep tele-bot-specific material out of the general product structure.
- Use prebuilt catalog, introduction, lesson, excerpt, and assignment pages, with browser-side interaction for the prepared prediction exercise and no saved results. Phase 1 needs no runtime content database or application server; later personal features are planned separately.
- An unlisted preview address, deliberately shared with invited evaluators and excluded from search indexing, is sufficient for initial preview distribution. The creator accepts that anyone obtaining the address can access and forward it. Reading and practice remain anonymous. This limits promotion rather than enforcing a restricted audience.

Specific build and hosting technologies, the concrete release/distribution mechanism, and final confirmation of shared understanding remain open. No application, content assets, deployment, or publication approval is created by this agreement.

### Approved artifact and inspectable practice agreed — 2026-10-20

The creator answered “Q4–Q5: Yes to both” in live exchange:

- Review and approve the built site locally, then publish those same files without rebuilding. Link the content commit, build environment, and artifact checksum in the release record. Keep drafts and review records off the preview host. Disable automatic publication from repository pushes so edits cannot bypass approval.
- Learners may inspect the prepared exercise answers and feedback delivered to their browser. This is reference-assisted practice with an available worked explanation and no proficiency claim; answer secrecy and tamper-resistant grading are unnecessary. The browser-only exercise remains within the agreed prepared-response and evidence boundaries.

Build and hosting choices and final confirmation of shared understanding remain open. These decisions approve neither an artifact nor its publication.

### Existing-stack preference — 2026-10-20

In response to the Astro and Netlify recommendations, the creator stated: “Q6–Q7: I prefer Next.js + TypeScript and Vercel because they are part of my existing stack.” Use Next.js with TypeScript and Vercel as the selected stack preference. Astro and Netlify were recommendations only and were not accepted.

Check the preferred stack's static delivery, exact-artifact publication, and withdrawal capabilities against the already agreed process before asking the remaining operational questions. Do not infer acceptance of provider-specific procedures from the stack preference. No account access, configured project, deployment, or publication approval is established by this preference.

### Preferred-stack documentation findings — 2026-10-20

A fact-finding subagent used Context7 and current official documentation. These are capability findings and proposed mechanisms, not creator approval or executed preflight:

- [Next.js static export](https://nextjs.org/docs/app/guides/static-exports) produces static HTML/assets with build-time routes and interactive Client Components. Build-time Markdown processing and metadata validation fit the selected content approach; no runtime server or database is required for this journey. Parser choice and detailed configuration belong to later implementation.
- [Vercel prebuilt deployment](https://vercel.com/docs/cli/deploying-from-cli#deploying-from-local-build-prebuilt) uploads locally prepared Build Output API output without a remote rebuild. The Next.js export directory is not itself the final Vercel package. Prepare the complete [Build Output API package](https://vercel.com/docs/build-output-api), including static files, routes, and headers, before local review, checksum, and exact-artifact approval. Limit the published package to learner-facing content and assets; exclude drafts and internal review records.
- A manually operated dedicated Vercel preview project can remain unconnected to Git. Its stable production domain can support anonymous preview access in principle; the provider's production target does not establish public V1 launch. Current [deployment protection](https://vercel.com/docs/deployment-protection) distinguishes production domains from generated deployment URLs. Actual protection settings, noindex behavior, anonymous access, account permissions, and operational suitability require pre-delivery verification.
- Withdrawal must address [retained deployments](https://vercel.com/docs/deployments/managing-deployments), aliases, and any [separately retained immutable assets](https://vercel.com/docs/caching/cdn-cache#deleting-immutable-static-assets), rather than merely repointing the main address. Preserve internal evidence, serve the notice at the stable release entry, remove hosted copies, and verify former lesson, data, deployment, alias, and asset URLs. Provider documentation does not prove account capability or successful removal. Unsupported withdrawal would require revisiting the delivery arrangement before distribution.

### Preferred-stack delivery and withdrawal agreed — 2026-10-20

The creator answered “Q8–Q10: Yes to all” in live exchange:

- Use Next.js with TypeScript in static-export mode. Compile Markdown and metadata at build time and use a Client Component for the prepared exercise. This preserves prebuilt lessons and browser-only practice without a runtime server or database. Later personal features may revisit the architecture.
- Use a dedicated Vercel preview project disconnected from Git. Prepare the complete deployment package, including routing and headers, before local review and checksumming; manually upload the locally approved package without rebuilding. Use a stable, release-specific learner address, verify anonymous access, and apply noindex controls. Vercel's production deployment target serves the limited preview and does not signify public V1 launch.
- Withdrawal covers every hosted copy, including old deployments and separately retained immutable assets. Publish the withdrawal notice at the stable entry, remove affected deployments and aliases, delete separately retained assets where applicable, and verify former URLs stop serving the material. Verify account permissions and the procedure before distribution. Changing the main alias alone is insufficient.

All content and delivery choices are now agreed. The ticket remains claimed pending explicit confirmation of the complete shared understanding required by the grilling skill. The Next.js/Vercel preference supersedes the unaccepted Astro/Netlify recommendations. No application, deployment package, account configuration, successful preflight, or creator publication approval is established by this planning agreement.

### Final agreement — 2026-10-20

The creator answered “Yes” when asked whether the recorded choices complete the shared understanding of Choose the minimum content and delivery approach as a planning decision only, explicitly without publication approval.

## Answer

Resolved through live exchange with the creator on 2026-10-20, including explicit confirmation of the complete shared understanding. This selects a content and delivery approach for later specification. It does not approve a content release, execute deployment, or establish learner acceptance.

### Version-controlled prepared content

Use Markdown for explanations and local-assignment instructions, with structured metadata and prepared exercise data for ordering, release identity, source references, answer choices, and feedback. Keep content in version-controlled text files. Reusable application components handle rendering and exercise behavior; tele-bot-specific concepts and its five lessons remain content rather than a hardcoded product structure.

Compile Markdown and metadata at build time. Exact parser, metadata validation implementation, file layout, and schemas belong to later specification and implementation. Preserve the already agreed exact source references, self-contained excerpts, recurring diagram, evidence distinctions, and visible uncertainty. Keep draft content and internal review records out of the deployed package.

### Next.js and TypeScript static delivery

Use Next.js with TypeScript in static-export mode for the catalog, introduction, lessons, excerpts, and assignment. Use a Client Component for the prepared prediction exercise, with browser-only state and no saved results. Phase 1 requires no runtime application server or content database. Later account-dependent features may revisit this architecture without expanding the present scope.

Learners may inspect the answers and feedback shipped to their browsers. This is acceptable for the agreed reference-assisted practice with optional worked explanation and no proficiency claim. Do not introduce answer secrecy, tamper-resistant grading, or arbitrary-response evaluation.

The creator selected Next.js, TypeScript, and Vercel because they are part of the existing stack. Astro and Netlify were unaccepted alternatives. Current capability documentation is linked in this ticket's Comments; it does not substitute for actual environment or account checks.

### Exact-artifact review and manual Vercel publication

Prepare the complete static deployment package locally, including routing and headers. A Next.js export directory is not itself the final Vercel Build Output API package; finish any packaging before review and approval. Review the built site locally, record the content commit, build environment, and artifact checksum, and obtain explicit creator publication approval for that exact package and scope through [Define the external creator publication process](07-define-creator-publication-process.md).

Use a dedicated Vercel preview project disconnected from Git, with automatic publication from repository pushes disabled. After approval, manually upload the same package through prebuilt deployment without rebuilding. Drafts and internal review evidence stay off the preview host; no remote draft review deployment is needed. The creator records the actual distributed location and checks its agreement with the approved artifact under the publication process.

### Anonymous, unlisted preview

Use a stable, release-specific learner address rather than an immutable deployment permalink as the shared entry point. Share it deliberately with invited evaluators and apply noindex controls. Anyone obtaining the address may access or forward it; this limits promotion rather than enforcing a restricted audience. Discovery, reading, and practice remain free and anonymous.

Vercel's production deployment target may serve this limited preview; the provider's target name does not signify public V1 launch. Before distribution, verify actual protection settings, anonymous access, indexing controls, project access, and account permissions. No account capability or configured preview project has been verified in this decision session.

### Withdrawal and operational feasibility

Follow the approved withdrawal process with provider-specific coverage: publish the withdrawal notice at the stable release entry, remove affected retained deployments and aliases, delete separately retained immutable assets where applicable, and verify former deployment, lesson, data, alias, and asset URLs stop serving the withdrawn material. Preserve release identity, evidence, and the approved artifact internally. Repointing the main address alone is insufficient. Restoration or changed teaching material follows the approval and versioning rules in the publication-process decision.

Verify permissions and the practical withdrawal procedure before distribution. Documentation establishes a candidate mechanism, not successful preflight. If the account or deployment arrangement cannot satisfy anonymous access, exact-artifact publication, or withdrawal, revisit the arrangement before distribution rather than weakening the approved process. This is a known preparation obligation, not evidence that checks have passed.

### Handoff and map consequences

The minimum approach is settled sufficiently for later specification. No additional decision ticket or glossary term was exposed; parser choices, exact versions, file schemas, hosting configuration, and executed checks remain subsequent specification/implementation details. Existing repository-specific fog remains unchanged. [Define Phase 1 walkthrough and handoff evidence](09-define-phase-1-evaluation-evidence.md) is now unblocked and owns the future coverage and evidence decision.

No application, lesson assets, exercise bank, release package, infrastructure, specification, or implementation tickets were created. No deployment, publication approval, walkthrough, or learner evaluation was completed. This map remains open for its remaining decision.
