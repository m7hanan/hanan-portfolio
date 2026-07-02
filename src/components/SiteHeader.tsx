import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-sm font-medium tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-sm border border-border bg-secondary font-mono text-xs">
            HI
          </span>
          <span>Hanan Ibrahim</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-sm px-3 py-1.5 text-sm transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden rounded-sm border border-foreground/80 px-3.5 py-1.5 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background md:inline-flex"
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </header>
  );
}
