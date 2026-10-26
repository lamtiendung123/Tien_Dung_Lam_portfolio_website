# Technical design — static-first portfolio

## Decision log

**Chosen for proposal:** Astro static build + TypeScript + native CSS. Why: new repository, mostly content-focused site, little client interaction, low attack surface, easy deployment. Do not install until owner agrees. If requirements change, document competing framework tradeoffs instead of silently replacing it.

## Architecture

```text
Human-reviewed Markdown / typed project entries
                    │
                    ▼
         Astro build (local/CI)
                    │
           static HTML/CSS/JS
                    │
                    ▼
         Public static host (HTTPS)
              no secrets

Local Astro preview ─── localhost:3000 ─── Tailscale Serve ─── approved tailnet viewers
```

There is **no API** or database in MVP. Public visitors never access the Tailscale preview. The later optional AI/API feature requires separate spec, deployment and threats assessment.

## Routes / experience

- `/` — editorial hero, current interests and selected project index; genuine primary image/technical figure only when available.
- `/projects/` — index; a case study for each verified project (optional slug pages as content grows).
- `/research/` — subjects and experiments with clear work-in-progress labeling, no fake publications.
- `/about/` — experience, education, toolchain and concise technical motivation.
- Contact — GitHub and verified owner-approved channels; no data-capturing custom form in MVP.

## Proposed reusable components

`SiteLayout`, `HeaderNav`, `HeroSummary`, `SelectedWork`, `ProjectCard`, `ProjectCaseStudy`, `EvidenceLink`, `SkillGroup`, `Footer`. Add only on proven reuse. Keep most pages server-rendered/static.

## Data model (draft)

Each project should track:

```ts
type Project = {
  slug: string;
  title: string;
  status: 'completed' | 'in-progress' | 'research-exploration';
  oneLineProblem: string;
  myContribution: string[];
  platformAndTools: string[];
  methodology: string[];
  verifiedResults: string[]; // blank until approved
  limitations: string[];
  evidence: {label: string; url: string}[];
  media?: {path: string; alt: string; provenance: string};
};
```

Require the owner to validate `verifiedResults` and `evidence`. Do not write speculative data to fill an empty field.

## Design system

- Editorial hardware-document aesthetic; high-quality type hierarchy, practical spacing tokens, subtle grid/hairlines, restrained accent. Avoid arbitrary glowing effects.
- Clear labels and technical visuals; avoid faux schematics or fake charts.
- Document layout decisions and inspect actual screenshots before final styling.

## Security architecture

- Static files contain public facts only; no server-side key or personalized content.
- `.gitignore` guards commits; `.kiroignore` guards reads in supported Kiro IDE/CLI environments; OS permissions/tool review also required. Web/cloud sessions do **not** get protected by `.kiroignore`.
- Use same-origin/local assets where reasonable, no unreviewed remote scripts. Review generated `dist/` and any source maps before release. Configure appropriate security headers on selected hosting platform.
- Supply-chain minimization: inspect packages and maintain lockfile. Third-party agent skills are executable trust inputs; never install and run unseen ones.
- CI/CD authentication should rely on minimal GitHub workflow permissions, and protected secrets only if actually required.

## Testing plan

1. Unit-level data/schema validation where applicable; typecheck and build.
2. Manually inspect small phone, tablet and desktop renderings.
3. Keyboard-only navigation; reduced-motion; alt text and landmarks.
4. Check asset URLs, broken links, console errors and unexpected network calls.
5. Run secret scanning with redacted result reporting and inspect build output.
6. Deployment review: confirm static host public, private Tailscale service not public, no Funnel and no router forwarding.

## Deployment

Default public hosting: GitHub Pages or Cloudflare Pages, chosen only after owner review. Tailscale Serve may run locally for authorized previews; do not run a permanent API on a personal laptop merely to serve static pages.

## Non-goals

No AI assistant, backend, login, blog engine, analytics provider, or content scraping required to build v1.
