# Hosting model: public static portfolio + private Tailscale services

## Deliberate separation

```text
Any visitor ──HTTPS──> public static host ──> HTML/CSS/JS and public assets
                                 (NO API key, NO private network access)

Owner's authorized tailnet devices ──Tailscale Serve/HTTPS──> localhost dev preview
                                                    or optional private API
                                            (ACL + app auth where appropriate)
```

Tailscale **Serve** grants network reachability within your tailnet (subject to Tailscale grants/ACLs); it does **not** turn a service into a public portfolio. Tailscale **Funnel** is public exposure — do not enable it for private APIs, internal dashboard, LLM proxy, admin panel, or agent control surfaces.

## Development preview steps — owner must execute

1. Install Tailscale on the host and trusted viewer, log into your tailnet, and configure restrictive access controls in the Tailscale admin console. Apply updates and restrict account access with MFA. Do not post auth keys or tailnet URLs publicly.
2. Run the local **preview** server bound to loopback (not `0.0.0.0`), using the framework's supported flags, after site generation. For example, if using Astro: `npm run dev -- --host 127.0.0.1 --port 3000` (verify the configured npm script first).
3. In a terminal you control, run `tailscale serve --bg 3000` (supported by current CLI) to make the local port available **to permitted tailnet clients** over TLS. Check `tailscale serve status` and verify the URL using a second authorized device.
4. Test an unauthorized tailnet identity cannot access it (when practical). Also verify it is not reachable as a public Funnel endpoint or router port-forward.
5. Turn it off when finished: inspect `tailscale serve status`, then run `tailscale serve reset` **only after confirming no other Serve configs on that device need to survive**, or use current `tailscale serve` path-specific disable syntax. `reset` removes all Serve configs.

## Future private API

- Prefer binding backend to `127.0.0.1`, expose only through Tailscale Serve and restrictive grants/ACLs, restrict service account permissions, add application authentication if sensitive, and rate-limit even private users.
- Store provider keys in host secret storage (never repo or browser). Separate ports/processes, lock down logs and OS permissions; patch dependencies.
- Do **not** connect a public static frontend directly to a private tailnet-only endpoint: ordinary visitors cannot reach it; even with a public endpoint a browser cannot hide a key.

## Future public API (not MVP)

A public interactive AI assistant would need a new spec, internet-facing backend behind HTTPS, application-specific authentication or abuse controls, quotas/budgets, origin policy, injection/data-handling review, safe logs, and explicit owner approval. Tailscale Funnel alone is **not** a security layer that authenticates arbitrary public callers.

Source: https://tailscale.com/docs/reference/tailscale-cli/serve
