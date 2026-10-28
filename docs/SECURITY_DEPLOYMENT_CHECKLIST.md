# Preflight security and release checklist

## Never do these automatically

Do not publish or expose a live service, `git push`, edit DNS, install remote skills, rotate credentials or change tailnet ACLs without owner authorization. This checklist does not establish that any action has happened.

## 1. Before any commit

- [ ] Confirm private values and files were never placed in repo, Codex prompts, chat transcript or screenshots.
- [ ] Verify `.gitignore` excludes secret files from git, **and** `.gitignore` is configured in Codex IDE. Remember: Codex Web does not honor `.gitignore` presently.
- [ ] Inspect `git status --short` and `git diff --stat` (no secret contents displayed). Review intended tracked paths. Avoid indiscriminate staging.
- [ ] Run a reputable local secrets scanner (e.g., Gitleaks) across staged changes and repository history with non-verbose/redacted output. A clean scan does **not** guarantee there are no secrets.
- [ ] If leaked previously, **revoke/rotate first**. History rewriting alone cannot revoke leaked credentials.
- [ ] Check dependency advisories and verify provenance/lockfile. For agent skills, review `SKILL.md` **and any scripts**, external links, permissions, and licensing.
- [ ] No public runtime or build variable contains a password, paid provider API key, session token or secret.

## 2. Before building

- [ ] Verify implementation is still static by default; no new API route or client authentication token.
- [ ] Verify claims, figures, images and code excerpts are owner-approved and lawful to publish.
- [ ] Run package-specific lint, typecheck and build commands **after confirming which scripts exist**. Record failures rather than guess they passed.
- [ ] Inspect generated static `dist/` for accidentally bundled config, credentials, private paths, maps, logs, `.env` or sensitive material, using non-disclosing review methods.
- [ ] Test navigation on phone, tablet and desktop, keyboard only, reduced motion, alt text and broken links.

## 3. Before public launch

- [ ] Select a static hosting provider, HTTPS/custom domain if desired, deployment permission scopes, cache headers and reasonable CSP/security headers. Test headers in a real deployment.
- [ ] Inspect any configured GitHub Actions secrets and permissions **without printing secret values**. Use least-privilege workflow token/OIDC where available.
- [ ] Validate public website has no dependence on tailnet IPs/names or private API endpoints; no accidental public Funnel.
- [ ] Test deployment from an unauthenticated internet device. Verify private preview only from allowed tailnet devices.
- [ ] Confirm hosting rollback and incident/rotation procedures.

## 4. Optional tailnet preview (private)

- [ ] Bind preview server to `127.0.0.1`, not `0.0.0.0`.
- [ ] Restrict tailnet access through Tailscale grants/ACLs and strong tailnet account security.
- [ ] `tailscale serve --bg 3000` after verifying actual preview port and owner approval.
- [ ] `tailscale serve status` and test allowed vs disallowed access.
- [ ] Verify no Funnel, router port-forward, or public reverse proxy.
- [ ] Shut off preview; check other Serve configurations before any `tailscale serve reset`.

## Security note

A static personal portfolio generally does **not** need an API. Each extra provider key or permanent laptop-hosted proxy increases attack surface, cost and operational burden. Prefer public static hosting plus a separate **private** service only when a genuine use case exists.
