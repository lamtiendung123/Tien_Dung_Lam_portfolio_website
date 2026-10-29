---
name: portfolio-security-review
description: Review portfolio changes before commits/deployments for secret exposure, unexpected APIs, risky dependencies, unsafe host/Tailscale exposure and insecure agent permissions. Use before merge or release and when adding integrations.
---

# Portfolio security review

- Confirm no API is needed for requested changes. Challenge added server code, client keys, third-party scripts, MCPs and dependencies.
- Review only visible, non-secret source and redacted scan outcomes. **Do not open `.env` or other secret files to inspect their values**, and never paste matched tokens in report.
- Verify `.gitignore` protects Git staging, but not Codex file reads. Check sandbox and approval boundaries separately.
- Ensure browser bundles contain no server secrets, provider API keys, tokens, credentials, private service URLs or private documents.
- Check secret scanning configured/run (do not assume); if a secret is found, stop and recommend immediate revoke/rotate.
- Verify dependencies/lockfile, headers/config appropriate to chosen static host, escaped dynamic content, secure links, minimal telemetry and no unexpected outgoing requests.
- For Tailscale, confirm Serve is private to allowed tailnet identities, service bound to loopback, Funnel disabled, and any private backend has its own relevant auth. Do not alter tailnet controls without user approval.
- Report precise risk, affected files, reproduction steps that **do not print sensitive values**, and remediation. Mark untested areas unverified; never promise 100% security.
