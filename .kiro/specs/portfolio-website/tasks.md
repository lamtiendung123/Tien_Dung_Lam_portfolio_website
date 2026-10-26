# Execution tasks — human-reviewed checkpoints

> Do **not** mark completed merely because this starter kit exists. These checkboxes refer to implementation tasks that remain undone.

## Stage A — design and content (no secrets/network changes)

- [ ] **1. Verify repo and define implementation plan.** Inspect current non-sensitive tree, decide whether Astro is acceptable, document exact new files and avoid overwriting README/LICENSE. Show plan for approval.
- [ ] **2. Verify content claims.** Complete `docs/CONTENT_EVIDENCE.md` from owner-provided facts, links, license/IP permissions and screenshots. Resolve any questionable numbers or project ownership. Never publish TODO values.
- [ ] **3. Build a visual direction board in code/prose.** Define design tokens, fonts, responsive layout, a distinctive hero and one representative case-study layout. Owner reviews screenshots before applying style throughout.

## Stage B — implementation

- [ ] **4. Scaffold Astro static output** (after approval), TypeScript, necessary scripts and lockfile. Explain every dependency. Confirm no server/API routes created.
- [ ] **5. Build semantic navigation and home page.** Accessible header and hero; strong hierarchy and responsive styling; real links only.
- [ ] **6. Add featured projects and case study structure.** Separate structured content from components, retain citations/evidence and status labels.
- [ ] **7. Add research/about/contact.** No fake publications/affiliations; use only owner-approved contact details; no unrequested contact backend.
- [ ] **8. Accessibility/performance pass.** Phone/tablet/desktop, keyboard focus, reduced motion, real mobile menu, image optimization, scripts kept minimal.

## Stage C — security and deployment (owner approval required)

- [ ] **9. Run automated checks and a manual security review.** Typecheck/build; dependencies; generated output; secret scan with redacted findings; ensure .gitignore + .kiroignore are active on local environment. Apply review skills.
- [ ] **10. Public static deployment** only after host, domain, CI permissions, headers and content are approved. No sensitive env variables at build time.
- [ ] **11. Optional Tailscale-only local preview.** Only if the owner requests it: loopback server, authorized tailnet, restrictive grants/ACLs, `tailscale serve --bg 3000`, access validation and shutdown plan. Do not enable Funnel.
- [ ] **12. Launch audit / handoff.** Verify URL and mobile/keyboard UX, verify absence of secrets and private APIs, record any remaining issues.

## Change-control rule

Agent executes **one task at a time**, demonstrates actual results, and stops for approval before moving to risky steps. Tasks 10 and 11 are never automatic.
