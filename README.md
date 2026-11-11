# Tien_Dung_Lam_portfolio_website
This is Tien Dung Lam website that contains projects and works that he have done in his high school and college journey

## The site

`site/` holds the whole portfolio: `index.html`, `assets/soc.css`, `assets/soc.js` and a favicon. It is static, has no dependencies or build step, and makes no external requests. Open `site/index.html` in a browser to view it.

The page is a system-on-chip floorplan. Each block is a section of the résumé; selecting one zooms into it. `Esc` zooms out and the arrow keys step between blocks. With JavaScript off it reads as one plain document.

## Private preview over Tailscale

Serve shares the folder with devices on your tailnet only, over HTTPS. Do not use Funnel, which is public.

Start a local server bound to loopback, then proxy it:

```bash
python -m http.server 3000 --bind 127.0.0.1 --directory site
```

```bash
tailscale serve --bg 3000
```

```bash
tailscale serve status
```

The page is reachable only while the local server is running. To serve without one, run `tailscale serve --bg` with the full path to `site/` from an administrator terminal (Windows requires local admin to serve a folder).

Turn it off when finished (this removes every Serve config on the device):

```bash
tailscale serve reset
```

Only `site/` is served, so the docs, Git history and agent files in the rest of the repository are not reachable. See `docs/HOSTING.md` for the access-control checklist.
