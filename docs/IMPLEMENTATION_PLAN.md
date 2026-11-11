# Task 1: repository inspection and proposed implementation

Status: direction and staged file plan approved by the owner on 2026-10-28: "Follow the direction and staged file plan IMPLEMENTATION_PLAN.md". Task 1 is complete; task 2 (content verification) is next. Dependency installation and deployment still require the separate approvals described below.

## Acceptance criteria

- Inspect the current non-sensitive repository and preserve existing work.
- Decide whether Astro fits the requirements and explain the dependency proposal.
- Describe a distinctive portfolio direction, information structure, and restrained motion.
- Identify exact proposed files, missing content evidence, validation gates, and approval boundaries.
- Stop before dependency installation, website implementation, or the next task.

## Observed baseline

- The working tree was clean before this document was added.
- The repository contains README, MIT LICENSE, START_HERE, AGENTS, specifications under `docs/`, `.gitignore`, and two local review skills.
- No application source, package manifest, lockfile, installed project dependencies, or approved technical media appeared in the inspected tree.
- Node and npm commands are available locally; their versions and compatibility have not been checked. Gitleaks was not found on PATH.
- Read all documents required by AGENTS, including requirements, design, task order, content evidence, security, hosting, and reference handling.
- Every potential project in `CONTENT_EVIDENCE.md` is marked unapproved for publication. Only the portfolio repository link is approved there.
- README and LICENSE require no changes. Existing specifications and security configuration remain as inspected.

## Proposed architecture

Use Astro with static output, TypeScript, semantic HTML, and native CSS. This matches a portfolio whose primary job is to make engineering work easy to read and inspect. Generate all pages at build time, store content locally, and use ordinary navigation links. No client framework is needed for the proposed interactions.

Proposed direct dependencies for the later scaffold:

| Package | Purpose | Why include it |
|---|---|---|
| `astro` | Static page and asset build | Provides the approved framework direction, reusable templates, and route generation. |
| `typescript` (development) | Strict content and source checking | Catches inconsistent project fields before publication. |
| `@astrojs/check` (development) | Check Astro templates and TypeScript | Extends validation to `.astro` files; a successful build alone is insufficient. |

No package versions are selected or approved yet. Before an installation request, verify compatible releases, Node requirements, package provenance, maintenance, license terms, advisories, and install scripts; disclose unresolved findings. Commit the resulting lockfile when implementation is authorized. Do not execute a downloaded starter script to populate this existing repository.

Proposed scripts: `dev`, `check`, `build`, and `preview`. Running a preview server remains a separate permission-dependent action. Formatting/lint tooling may be proposed later if needed; do not claim those checks exist now.

## Proposed visual direction: engineering notebook

Use a warm paper surface, graphite text, one dark copper accent, fine rules, and numbered project entries. This should feel like a carefully edited design review: readable, specific, and organized around artifacts. Colors and typography are provisional until task 3 contrast checks and screenshots.

The opening composition pairs the owner's name and a short, owner-approved hardware focus statement with a prominent technical artifact and its caption. Below it, a numbered index exposes selected work within the first scroll. Desktop can use an asymmetric text/artifact split; a 360px phone stacks the same reading order. If no media is cleared, use a strong typographic composition and the approved project index rather than substitute graphics.

Use system sans-serif for prose and large headings, with system monospace only for project identifiers, platform labels, and figure captions. Build hierarchy through type size, whitespace, and alignment. Avoid loading remote fonts. Keep the interface vocabulary literal: Selected Work, Research, About, Contact, Source, Verification.

Project entries should be horizontal editorial rows rather than an interchangeable card grid. Each row presents an approved title, a specific problem, the author's contribution, platform, status, and evidence link. A case study follows problem → architecture → personal contribution → verification → results and limitations → sources. Present metrics only with approved measurement definitions and evidence.

This is a direction proposal, not the task 3 visual board. Token values, representative layouts, and rendered screenshot review belong to task 3 after content verification.

## Routes and content boundaries

| Route | Proposed content |
|---|---|
| `/` | Concise positioning, featured artifact when cleared, selected work, contact anchor. |
| `/projects/` | Numbered project index with status and evidence. |
| `/projects/<approved-slug>/` | Static case studies, added individually after evidence and titles are approved. |
| `/research/` | Approved explorations and artifacts, clearly labeled by actual status. |
| `/about/` | Approved biography, education/experience, grouped toolchain, contact links. |

Contact is a normal section linked from navigation, with approved links or email only. Omit unapproved sections and details. No draft claims, fabricated metrics, inferred affiliations, or placeholder evidence links should enter the public build.

Keep project facts separate from layout. Proposed records include slug, title, actual status, problem, personal contribution, platform/tools, architecture, verification method, verified results, limitations, evidence links, and optional media provenance/alt text. Add explicit publication approval, defaulting to false; both indexes and case pages must exclude unapproved entries. Content validation should reject approved entries missing required facts or provenance.

## Motion reference review

The owner authorized read-only review of [vibe-motion/skills](https://github.com/vibe-motion/skills). Its README currently states that the project is no longer maintained. External instructions were treated as reference material; no skill was enabled, installed, or executed.

| Reference inspected | Finding | Proposed use |
|---|---|---|
| [ruler-progress-render](https://github.com/vibe-motion/skills/blob/main/ruler-progress-render/SKILL.md) | A video-rendering workflow that clones/updates another repository and installs dependencies. | Take visual inspiration from sparse ticks and precise alignment for project numbering; use native CSS for interaction. No rendering workflow needed. |
| [disney-animation-rule-skill](https://github.com/vibe-motion/skills/blob/main/disney-animation-rule-skill/SKILL.md) | Discusses staging, timing, readable primary motion, and avoiding unjustified bounce/effects. | Favor a clear resting state and brief, deliberate transitions. Apply judgment to interface needs rather than importing the skill. |
| [pixel2motion](https://github.com/vibe-motion/skills/blob/main/pixel2motion/SKILL.md) | A logo vectorization/animation workflow with scripts and QA artifacts. | Defer: no approved logo asset or logo-animation requirement exists. |

Proposed motion scope for later approval:

- Navigation underline: 120–160ms on hover/focus; focus visibility is immediate.
- Project row: 140–180ms border/text emphasis, optionally a 2px arrow translation, with an equivalent focus state.
- An approved explanatory diagram may later support an explicit step control if it helps explain actual architecture; this is outside the initial proposal and requires its own content review.
- Main text, navigation, and evidence are immediately visible. No automatic entrances, scroll reveals, looping backgrounds, or delayed reading.
- Reduced-motion mode removes spatial transitions; JavaScript disabled retains all content and ordinary navigation. Touch interaction must not depend on hover.

No third-party code or assets are proposed for reuse. Their helper scripts, transitive dependencies, and complete licensing have not been audited. Any future installation/reuse needs an individual review and explicit permission; inspection is not a safety endorsement.

## Exact proposed file changes by later task

This task adds only `docs/IMPLEMENTATION_PLAN.md`. The following is a reviewable future file plan, not permission to implement it.

| Task | Proposed files | Scope |
|---|---|---|
| 2 | Edit `docs/CONTENT_EVIDENCE.md` | Record owner-approved facts, roles, evidence, and rights. |
| 3 | Add `docs/VISUAL_DIRECTION.md` | Specify tokens, responsive composition, representative case layout, and screenshot review procedure. Any preview artifact must be individually identified and approved before creation. |
| 4 | Add `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `src/pages/index.astro` | Minimal static scaffold and neutral smoke-test page. No public biography/project copy yet. |
| 5 | Edit `src/pages/index.astro`; add `src/layouts/SiteLayout.astro`, `src/components/HeaderNav.astro`, `src/components/Footer.astro`, `src/styles/global.css` | Metadata, navigation, home, contact anchor, design tokens/base styles. Use ordinary wrapping navigation unless a tested need justifies a menu. |
| 6 | Add `src/content/projects.ts`, `src/components/ProjectEntry.astro`, `src/components/EvidenceLinks.astro`, `src/layouts/ProjectCaseStudy.astro`, `src/pages/projects/index.astro`; edit home | Typed approved project content and reusable case presentation. Name each concrete case page only after approved slugs exist; do not invent filenames/content now. |
| 7 | Add `src/content/profile.ts`, `src/content/research.ts`, `src/pages/research.astro`, `src/pages/about.astro`; edit home/footer as needed | Verified research, biography, toolchain, and contact. |

Add media under `public/` only after task 2 records provenance, permission, alt text, and exact approved filenames. No media placeholder files are needed. Tests, formatting configuration, deployment files, or integrations beyond this list require a justified later plan.

## Validation and approval gates

For task 1, verify the file scope and Markdown diff, and review the proposal using the two local skills. Do not run a package install or claim a build, screenshot review, accessibility test, dependency audit, or secret scan has passed.

After authorized implementation, run the actual configured check/build scripts; inspect pages at 360px, 768px, and desktop; exercise keyboard focus, touch navigation, reduced motion, and JavaScript-disabled behavior. Check content approval filtering, local assets, links, generated output, and unexpected network requests. Add meaningful tests for publication filtering/schema if implemented. Run an approved local secret scanner with redacted output before release. A scanner was not available on PATH during this task.

Task 1 review findings:

- IMPORTANT — Project claims and media remain unapproved (`CONTENT_EVIDENCE.md`). Resolve in task 2 before public copy or evidence visuals.
- IMPORTANT — Dependency versions, licenses, advisories, and Node compatibility remain unverified. Resolve before requesting a concrete installation.
- IMPORTANT — Visual, responsive, contrast, keyboard, and motion behavior are proposals with no rendered evidence. Review in the corresponding later tasks; no quality score awarded.
- Security scope check — This change is documentation only; it introduces no package, script, API, credential requirement, service, or hosting configuration. No repository-wide secret scan or runtime security audit was performed.

Owner decision recorded: proceed with the Astro direction, notebook composition, native-CSS motion proposal, and staged file plan. Follow the one-task-at-a-time workflow, starting with task 2. Dependency installation, external skill installation, opening ports, pushing, and deployment retain their explicit approval gates. Do not request approval of this direction again unless the scope changes.
