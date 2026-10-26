---
inclusion: always
---
# Anti-slop standards — design, writing, engineering

## Visual identity

Build an **editorial engineering notebook with a polished professional finish**. Visual references: silicon die/layout geometry, schematics, waveform timing diagrams, monospace annotations, restrained typography, deliberate grids and technical evidence — but **do not randomly decorate every section with fake circuits**.

- Distinctive but restrained: deep graphite or warm neutral background, high-contrast text, one muted technical accent. Colors must pass contrast checks; choice is provisional until screenshots reviewed.
- Typography: strong readable sans-serif for prose, optional sparse monospace for technical labels/metrics. Maintain clear hierarchy, generous breathing room, consistent rhythm.
- Composition: an informative hero; one strong featured project with a credible visual; asymmetric/editorial layouts only where they improve scanning; restrained borders; responsive modules.
- Interactions: subtle on hover/focus only; content remains available with JS off; respect `prefers-reduced-motion`.
- No stock portraits, random futuristic AI-chip graphics, fake dashboards, glowing gradient blobs, huge neon cards, generic glassmorphism, endless scroll animations, animated particle backgrounds, emoji-filled headers, or cloned template hero copy.
- No inventing waveform charts or chip screenshots. Diagrams must reflect real architecture. Show actual RTL snippets, FPGA/PCB photos, timing measurements, CAD screenshots or original diagrams **only when user-provided or verified and permission-cleared**.

## Writing bans

Avoid generic AI rhetoric: “passionate about technology,” “cutting-edge solutions,” “bridging the gap,” “revolutionizing the future,” “delve,” “leveraging,” “synergy,” “seamless experience,” “journey of innovation,” and unsupported superlatives.

Prefer: “Built a PicoRV32 SoC on Spartan-7 with BRAM and memory-mapped UART; wrote firmware in C.” Only show metrics verified against evidence and approved for release.

Every showcased project answers:

1. **Problem** — what specific engineering constraint mattered?
2. **Role** — what did the author personally implement vs teammates or upstream components?
3. **Implementation** — architecture, device/platform, RTL/EDA flow, verification method.
4. **Evidence** — source, measured data, synthesis report, scope notes, diagrams, demo.
5. **Tradeoff** — a limitation, cost, bug solved, or genuine next step.

No synthetic testimonials, job titles, dates, paper titles, impact numbers, benchmark results or “tapeout complete” claims without evidence.

## Design rejection tests

Before acceptance, inspect a real rendered screenshot at phone and desktop widths (when site exists). Reject if:
- It looks interchangeable with a random AI-generated developer portfolio after changing the name.
- A recruiter cannot see key technical work without scrolling through generic slogans.
- Any project lacks a genuine technical explanation or ownership attribution.
- A fancy animation slows navigation, creates vestibular issues or obscures text.
- Screenshot/media is decorative or implies experimental proof it does not provide.
- Hero / project copy contains filler or claims that cannot be traced to evidence.

## Quality score (each 0–2; ship at 10/12 or higher, with **zero** security/claim blockers)

- Distinct voice and visual composition
- Accurate technical substance
- Proof and provenance
- Accessibility/responsive behavior
- Maintainability and performance
- Security and privacy by design

Score with explicit findings. Never self-award perfect scores without demonstration and evidence.
