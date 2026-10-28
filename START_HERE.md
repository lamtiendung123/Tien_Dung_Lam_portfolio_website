# Codex portfolio starter

This is a **configuration and planning package**, not a finished or deployed website. The prior Kiro-specific setup has been migrated to Codex conventions.

## Start in Codex
1. After merging the migration PR, open or clone this repository in Codex.
2. Codex discovers root `AGENTS.md`. Read `docs/REQUIREMENTS.md`, `docs/DESIGN.md`, `docs/TASKS.md`, `docs/SECURITY.md` and `docs/ANTI_SLOP.md` for details.
3. Repository-local skills live under `.agents/skills/`; they contain review instructions, not executable scripts or permission grants.
4. Configure sandbox and approval settings in the Codex client. Keep private keys, env values, Tailscale credentials and other sensitive files outside the repository and agent-accessible workspace. `.gitignore` cannot block reads.
5. Begin with task 1: inspect current files, propose an Astro static-site implementation and obtain approval before dependency installation. Nothing is deployed by this starter.

## First Codex prompt

> Read AGENTS.md, docs/REQUIREMENTS.md, docs/DESIGN.md, docs/TASKS.md, docs/SECURITY.md and docs/ANTI_SLOP.md. Work on task 1 only: inspect non-sensitive repository files and propose a minimal Astro static-site plan. Identify missing evidence and dependencies. Stop for my review before installing packages or implementing task 2. Do not read secrets, create an API, expose ports, push, or deploy.

## File map
- `AGENTS.md`: Codex's repository instructions.
- `.agents/skills/portfolio-quality-review/SKILL.md` and `.agents/skills/portfolio-security-review/SKILL.md`: review skills.
- `docs/REQUIREMENTS.md`, `docs/DESIGN.md`, `docs/TASKS.md`: specifications and plan.
- `docs/PRODUCT.md`, `docs/TECH.md`, `docs/STRUCTURE.md`, `docs/WORKFLOW.md`, `docs/ANTI_SLOP.md`: engineering and design decisions.
- `docs/SECURITY.md`, `docs/HOSTING.md`, `docs/SECURITY_DEPLOYMENT_CHECKLIST.md`: security and Tailscale.
- `docs/CONTENT_EVIDENCE.md`, `docs/REFERENCE_REVIEW.md`: evidence and third-party source review.

## Hosting
The public site should eventually use a static HTTPS host after approval. Tailscale Serve is **tailnet-only** for private previews, not public hosting. Do not enable Funnel automatically. The MVP needs no API keys.

Docs: https://developers.openai.com/blog/skills-agents-sdk
