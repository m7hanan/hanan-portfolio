import { Link } from "@tanstack/react-router";
import { Home, User, Wrench, Folder, BookOpen, Mail, Briefcase, Plus, X } from "lucide-react";
import { useState } from "react";

const items = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/about", label: "About", icon: User },
  { to: "/skills", label: "Skills", icon: Wrench },
  { to: "/projects", label: "Projects", icon: Folder },
  { to: "/experience", label: "Experience", icon: Briefcase },
  { to: "/education", label: "Education", icon: BookOpen },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function MobileAssistiveNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-3 top-1/2 z-[999] -translate-y-1/2 md:hidden">
      {open && (
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 -z-10 h-full w-full cursor-default bg-background/70 backdrop-blur-sm"
        />

      )}

      <div className="flex flex-col items-end gap-2">
        {open && (
          <div className="mb-1 flex flex-col items-end gap-2 animate-in fade-in slide-in-from-right-2 duration-200">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-primary text-primary-foreground" }}
                inactiveProps={{ className: "bg-background/90 text-foreground" }}
                className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium shadow-lg backdrop-blur-md transition-transform active:scale-95"
              >
                <span>{item.label}</span>
                <item.icon className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            ))}
          </div>
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="grid h-12 w-12 place-items-center rounded-full border border-border bg-foreground/90 text-background shadow-2xl backdrop-blur-md transition-transform active:scale-90"
        >
          {open ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}
