# Project structure (target, not existing state)

After task 1 establishes Astro, prefer:

```text
src/
  components/       # Small presentational components
  layouts/          # Site layout and metadata
  pages/            # Routes (static output)
  content/          # Human-reviewed project and bio content
  styles/           # Tokens, base styles, component styles
public/             # Only intentionally public assets
.agents/skills/     # Codex review skills
docs/               # Specs, security, review and deployment policies
```

Do not create server/, api/, auth/, database/, vendor/, or a dynamic route without an approved spec. Use semantic filenames and small components. Track public project claims separately from UI markup to make verification possible. Keep private material **outside** `public/`, `src/`, build output and repository altogether.

Ensure any existing application code, once added, is inspected and incorporated rather than replaced indiscriminately.
