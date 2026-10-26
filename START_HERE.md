# Portfolio / Kiro setup — start here

This is a **configuration and planning starter**, not a deployed website. It is intended for the public repository:
`https://github.com/lamtiendung123/Tien_Dung_Lam_portfolio_website`.

Repository state when prepared (2026-10-26): `main` contains only `README.md` and `LICENSE`; no framework has been selected or deployed. Do not pretend the site, server, or API already exists.

## Install into your existing repository

1. Clone/open the repository on your own computer in Kiro IDE.
2. Copy the **contents** of this folder (including hidden `.kiro/`, `.gitignore`, and `.kiroignore`) into the repository root. Preserve the existing LICENSE and README; don't delete them.
3. Open `.kiro/specs/portfolio-website/requirements.md`, `design.md`, and `tasks.md`. Review any unverified public content before publishing.
4. In Kiro, choose the custom agent **portfolio-engineer**, or use the standard agent with the steering files. Begin with tasks 1–3, not a one-shot rewrite.
5. Keep all real tokens, environment files, keys, certs, and private data outside the repository and outside Kiro cloud workspaces. Never paste secrets into AI chat.
6. Check Settings > Agent Ignore Files (`kiroAgent.agentIgnoreFiles`) includes `.kiroignore` in Kiro IDE. Kiro CLI V3 also supports it; **Kiro Web does not presently enforce workspace `.kiroignore`**.
7. Do a local review and a secret scan before any commit or publication. Read `docs/SECURITY_DEPLOYMENT_CHECKLIST.md`.

### Suggested Kiro first prompt

> Read AGENTS.md, all `.kiro/steering/` files, and the portfolio-website spec. Implement only task 1 of tasks.md. Begin with a concise proposed file plan; inspect the actual repository before changing files. Do not read, echo, search for, or modify secrets, `.env*`, credentials, or private directories. Do not add an API, AI chatbot, server, dependency, or network request unless the spec requires it. Show a diff summary and checks, then stop for approval.

## Default architecture

- Public website: **Astro + TypeScript + plain CSS**, pre-rendered as static assets. No runtime API or secret necessary for MVP.
- Hosting: public static host (for example GitHub Pages or Cloudflare Pages) **after** owner approval.
- Tailscale: private *preview*, admin/dev service, or optional private backend using **Tailscale Serve**, not public frontend authentication.
- If a publicly accessible dynamic feature is later approved, add a separately deployed backend with its own auth, rate limits, logging policy, and secret manager. Never route a public frontend to a tailnet-only API and expect ordinary visitors to reach it.

## Files and why

- `AGENTS.md`: high-priority shared agent guardrails, recognized by Kiro.
- `.kiro/steering/product.md`, `tech.md`, `structure.md`: Kiro foundation-style project guidance.
- `.kiro/steering/security.md`: secrets, trust boundaries, API and supply-chain controls.
- `.kiro/steering/anti-slop.md`: visual and writing quality standards.
- `.kiro/steering/agent-workflow.md`: approval gates and verification loop.
- `.kiro/steering/hosting-tailscale.md`: deployment architecture and Tailscale rules.
- `.kiro/specs/portfolio-website/{requirements,design,tasks}.md`: Kiro spec workflow.
- `.kiro/agents/portfolio-engineer.md`: low-privilege custom agent (no auto-allow rules or MCP auto-import).
- `.kiro/skills/*/SKILL.md`: local review skills (no third-party scripts).
- `.gitignore` and `.kiroignore`: **different protections**; neither undoes earlier leaks.
- `docs/CONTENT_EVIDENCE.md`: claim verification before publishing.
- `docs/SECURITY_DEPLOYMENT_CHECKLIST.md`: prelaunch gate.
- `docs/REFERENCE_REVIEW.md`: inspiration and skills provenance.

## Limitations

Markdown steering files are behavioral instructions, **not a security sandbox**. Real protection also requires host permissions, review gates, secret isolation, network ACLs, and scanning. The custom agent can propose code; it cannot secure a running service merely by having these files. No credentials, live connections, or hosting settings have been provisioned by this starter.

## Documentation

- Kiro steering: https://kiro.dev/docs/steering/
- Kiro specs: https://kiro.dev/docs/specs/quick-plan/
- Kiro custom agents: https://kiro.dev/docs/custom-agents/
- Kiro skills: https://kiro.dev/docs/skills/
- Kiroignore: https://kiro.dev/docs/kiroignore/
- Tailscale Serve: https://tailscale.com/docs/features/tailscale-serve
- Tailscale CLI Serve: https://tailscale.com/docs/reference/tailscale-cli/serve
