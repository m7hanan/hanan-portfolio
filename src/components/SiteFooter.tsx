import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-sm border border-border bg-background font-mono text-xs">
              HI
            </span>
            <div>
              <p className="text-sm font-medium">Hanan Ibrahim</p>
              <p className="font-mono text-xs text-muted-foreground">Robotics Engineer</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Crafting the future of robotics through autonomous systems, AI, and
            cutting-edge drone technology.
          </p>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Batticaloa, Eastern Province · Sri Lanka
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {["About", "Skills", "Projects", "Education", "Contact"].map((l) => (
              <li key={l}>
                <Link
                  to={`/${l.toLowerCase()}`}
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Let's Connect
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Ready to collaborate on your next robotics project?
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-sm border border-foreground/80 px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            Start a Project →
          </Link>
          <ul className="mt-6 flex flex-wrap gap-4 text-sm">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-hanan-ibrahim-a3885b341/" },
              { label: "GitHub", href: "https://github.com/m7hanan" },
              { label: "YouTube", href: "https://www.youtube.com/@QomarunHanan" },
            ].map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 Hanan Ibrahim. Made within Sri Lanka.</p>
          <p className="font-mono">Building the future, one robot at a time.</p>
        </div>
      </div>
    </footer>
  );
}
