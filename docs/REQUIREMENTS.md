# Requirements — engineering portfolio

**Status:** proposal for owner review. **Repo baseline:** no application code on 2026-10-26. **MVP:** static only.

## Goal
Create an authentic hardware/semiconductor research portfolio that communicates technical ownership and reproducible evidence, with secure static publication and optional tailnet-only preview.

## User stories and acceptance criteria (EARS-style)

### R1 — Positioning and navigation
As a recruiter or researcher, I want to identify the engineer's specialty and inspect work quickly.
- WHEN a visitor loads the homepage, THE SITE SHALL identify hardware/FPGA/digital IC/research focus in a concise, truthful hero.
- THE SITE SHALL provide obvious links to Selected Work, Research, About/Skills and Contact; key content accessible within two navigation actions.

### R2 — Project case studies
- THE SITE SHALL offer a curated set of projects with problem, personal contribution, architecture, tools, verification, results/limitations and source/demo link when public.
- IF a measurement or project fact has not been approved with evidence, THE SITE SHALL omit that claim or label it clearly as draft in local data, not publish it as fact.

### R3 — Research and credibility
- THE SITE SHALL distinguish explored research directions, active work, published work and completed artifacts without exaggerating.
- THE SITE SHALL not claim a paper, patent, tapeout, measured latency, or employer affiliation without owner verification.

### R4 — Original design
- THE SITE SHALL follow `docs/ANTI_SLOP.md` and reject generic template clichés and fabricated media.
- WHEN viewed at 360px, 768px and desktop widths, THE SITE SHALL remain readable and navigable without horizontal overflow.

### R5 — Accessibility and performance
- THE SITE SHALL have semantic landmarks, appropriate heading order, accessible labels, keyboard focus, reduced-motion handling and contrast aimed at WCAG 2.2 AA.
- THE SITE SHALL pre-render pages and minimize unnecessary JS, external fonts and trackers.

### R6 — Privacy and security
- THE SITE SHALL function without any runtime API key, authentication, custom backend, or database in MVP.
- WHEN built, THE OUTPUT SHALL contain no secrets, env values, private material or accidental network endpoints.
- THE REPOSITORY SHALL include `.gitignore` and a documented preflight process; no actual credentials SHALL be committed. Codex sandbox permissions are separate from Git ignore rules.

### R7 — Reviewable implementation
- WHEN Codex changes files, THE AGENT SHALL execute the applicable validation gates, show a concise diff summary and stop before any deployment, push, DNS, tunneling or network exposure without owner approval.
- THE AGENT SHALL not install untrusted community skills or run their scripts by default.

### R8 — Deployment model
- WHEN publishing, THE OWNER SHALL select and approve a public static host.
- IF a private preview is requested, THE SITE SHALL be reachable via Tailscale Serve only to authorized tailnet devices; THE AGENT SHALL NOT enable Funnel by default.

### R9 — Maintainable content
- THE SITE SHALL keep project data separate from presentation components and use straightforward update instructions.
- ALL meaningful visuals SHALL have provenance, alt text, and usage permission where needed.

## Explicitly out of scope for MVP
Public AI chat, proxying LLM subscriptions, Tailscale Funnel, storing visitor messages, tracking scripts, CMS, authentication, database, administrative dashboard, social feed integrations, AI-generated endorsements, synthetic performance metrics.

## Acceptance review
Build succeeds; pages render desktop/mobile; keyboard path works; no unsupported public claims; no secrets in tracked files/build output; no public API dependency; site still reads well without heavy animation. Record unresolved limitations.
