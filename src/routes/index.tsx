import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/Section";
import portrait from "@/assets/hanan-portrait.jpeg";
import cv from "@/assets/hanan-cv.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hanan Ibrahim — Robotics Engineer" },
      { name: "description", content: "Hanan Ibrahim — Robotics Engineer specializing in autonomous drones, computer vision and AI systems." },
      { property: "og:title", content: "Hanan Ibrahim — Robotics Engineer" },
      { property: "og:description", content: "Autonomous drones, computer vision and AI-powered robotics." },
    ],
  }),
  component: Home,
});

const stats = [
  { v: "5+", l: "Projects Completed" },
  { v: "2+", l: "Years Experience" },
  { v: "10+", l: "Technologies" },
  { v: "100%", l: "Passion Driven" },
];

const tech = ["Python", "C++", "Machine Learning", "Deep Learning", "Edge Computers", "AirSim", "ROS2", "Git"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border/60">
        <div className="container-prose grid items-center gap-12 py-10 md:grid-cols-12 md:gap-16 md:py-16">
          <div className="md:col-span-7 fade-in-up">
            <SectionLabel index="01." title="Welcome to my digital space" />
            <p className="mt-8 font-mono text-sm text-muted-foreground">Hi, I'm</p>
            <h1 className="mt-3 text-5xl leading-[1.04] md:text-7xl">
              Hanan Ibrahim.
              <br />
              <span className="text-muted-foreground">Robotics Engineer.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              I craft intelligent autonomous systems and cutting-edge drone technology —
              specializing in AI-powered robotics, computer vision, and autonomous
              navigation that bridges research and reality.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-90"
              >
                Explore My Work →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm transition-colors hover:bg-secondary"
              >
                Get in Touch
              </Link>
              <a
                href="/Hanan_Ibrahim.pdf"
                download="Hanan_Ibrahim_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Download CV ↓
              </a>
            </div>
            <div className="mt-10 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Available for research collaboration
              </p>
            </div>
          </div>

          <aside className="md:col-span-5 fade-in-up">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-sm border border-primary/40" aria-hidden />
              <div className="relative overflow-hidden rounded-sm border border-border bg-secondary shadow-sm">
                <img
                  src={portrait}
                  alt="Portrait of Hanan Ibrahim"
                  className="aspect-[4/5] w-full object-cover object-top grayscale-[10%] transition-all duration-500 hover:grayscale-0"
                  loading="eager"
                />
                <div className="flex items-center justify-between border-t border-border/80 bg-background/95 px-4 py-2.5 backdrop-blur">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Hanan Ibrahim
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    BET · 2027
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border/60">
        <div className="container-prose grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`p-8 ${i < 3 ? "border-r border-border/60" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
            >
              <p className="font-serif text-4xl">{s.v}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH */}
      <section className="container-prose py-20">
        <SectionLabel index="02." title="Core Technologies" />
        <div className="mt-10 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-sm border border-border bg-background px-4 py-2 font-mono text-xs text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
