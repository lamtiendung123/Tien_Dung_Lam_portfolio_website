# Technical decisions

- **Starting state:** only README.md and LICENSE were observed in the public repository as of 2026-10-26. Inspect before implementing because repo contents may change.
- **Proposed MVP stack:** Astro (static output), TypeScript, semantic HTML, native CSS custom properties. Avoid React, Tailwind, animation libraries, database and serverless functions unless justified by a tested requirement.
- Content: local typed data or Markdown, validated at build time; no CMS required for a personal site.
- Performance: minimal client-side JavaScript, optimized local media, responsive images, modern formats and descriptive alt text.
- Accessibility: WCAG 2.2 AA target; keyboard-visible focus, meaningful landmarks, contrasts, reduced motion, accessible navigation, real heading structure.
- Quality gates: format/lint/typecheck/build (once the project exists); manual keyboard/mobile verification; broken-link and asset checks; audit generated output for secrets/external calls.
- Deployment: public build to a static hosting provider only with approval. Tailscale Serve is for private devices and development preview; never assume it makes the public website available to the world.
- No runtime API in MVP. Any future model/provider key belongs on a server controlled by the owner, in a secrets manager, never client-side. Front-end env prefixes like Astro `PUBLIC_` do NOT make a secret safe.

Before adding dependencies, document their purpose, maintenance signal, licensing, security risks, and reason a simpler approach fails.
