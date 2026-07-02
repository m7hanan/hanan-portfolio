import { createFileRoute } from "@tanstack/react-router";
import { Github, PlayCircle, Download, Cpu, Zap, Gauge, LayoutDashboard } from "lucide-react";
import { PageHeader } from "@/components/Section";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Hanan Ibrahim" },
      { name: "description", content: "Featured robotics, drone, and computer vision projects." },
      { property: "og:title", content: "Projects — Hanan Ibrahim" },
      { property: "og:description", content: "Featured robotics, drone, and computer vision projects." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "AirSim Drone Path Landing",
    desc: "Advanced autonomous drone navigation with multi-waypoint navigation, auto take-off and smooth landing. Configurable JSON waypoints, modular and scalable for RL or real-world UAV testing.",
    tags: ["AirSim", "Drone Navigation", "Python", "Autonomous Systems"],
  },
  {
    title: "YOLOv5 + AirSim Autonomy",
    desc: "Real-time person & car detection using YOLOv5 inside Microsoft AirSim with autonomous waypoint navigation and basic collision avoidance. Fast inference and vision-based obstacle detection.",
    tags: ["YOLOv5", "Computer Vision", "AirSim", "Autonomous Navigation"],
  },
  {
    title: "Face Recognition AI Model",
    desc: "Computer vision system for real-time face detection and recognition using deep learning. Implements modern neural networks for accurate facial identification.",
    tags: ["Computer Vision", "Deep Learning", "Python", "OpenCV"],
  },
  {
    title: "Customer Segmentation — K-Means",
    desc: "ML project that analyzes customer data to identify distinct segments using K-Means clustering for targeted marketing strategies.",
    tags: ["Machine Learning", "K-Means", "Data Analysis", "Python"],
  },
];

function Projects() {
  return (
    <>
      <PageHeader
        index="04."
        eyebrow="Featured Projects"
        title="Innovation in action."
        description="A selection of work showcasing my expertise in robotics, autonomous systems, drone technology and computer vision."
      />

      <section className="container-prose pt-16 md:pt-20">
        <article className="relative overflow-hidden rounded-md border border-primary/30 bg-secondary/40 p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-sm bg-primary px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground">
                Flagship
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Open-Source Framework
              </span>
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl">EdgeForge-Vision</h2>
            <p className="mt-3 max-w-2xl text-base text-primary">
              Hardware-Accelerated Edge-AI Framework for Industrial Inspection
            </p>

            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A production-grade edge-AI framework engineered for real-time industrial inspection.
              Built to run fully headless on embedded hardware while exposing a live web HMI for
              operators on the factory floor.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Cpu, label: "Multi-threaded headless pipeline" },
                { icon: Zap, label: "Single-digit millisecond latency" },
                { icon: Gauge, label: "Real-world hardware relay triggering (GPIO)" },
                { icon: LayoutDashboard, label: "Asynchronous web HMI dashboard" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-sm border border-border bg-background/60 px-4 py-3"
                >
                  <f.icon className="size-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "NVIDIA Jetson Orin Nano",
                  "TensorRT (FP16)",
                  "YOLOv8",
                  "GStreamer",
                  "Python",
                  "Flask",
                  "GPIO",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-sm border border-border bg-background/60 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Cross-Domain Scaling
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Domain-agnostic by design — ready to deploy across{" "}
                <span className="text-foreground">Agriculture (Coconut sorting)</span>,{" "}
                <span className="text-foreground">Beverage</span>,{" "}
                <span className="text-foreground">Pharma</span>, and{" "}
                <span className="text-foreground">Logistics</span>.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/m7hanan/EdgeForge-Vision"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Github className="size-4" /> GitHub Repo
              </a>
              <a
                href="https://www.youtube.com/watch?v=o1mMKltcRK8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-foreground/80 px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background"
              >
                <PlayCircle className="size-4" /> Video Demo
              </a>
              <a
                href="https://github.com/m7hanan/EdgeForge-Vision/releases"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm transition-colors hover:bg-secondary"
              >
                <Download className="size-4" /> Production Weights
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="container-prose py-20">
        <div className="space-y-px overflow-hidden rounded-sm border border-border bg-border">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group grid gap-6 bg-background p-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:p-10"
            >
              <div className="md:col-span-2">
                <p className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </p>
              </div>
              <div className="md:col-span-7">
                <h3 className="text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start md:col-span-3 md:justify-end">
                <a
                  href="#"
                  className="font-mono text-xs text-primary transition-transform group-hover:translate-x-1"
                >
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border/60 pt-12 text-center">
          <p className="text-sm text-muted-foreground">Want to see more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-foreground/80 px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            View All Projects on GitHub →
          </a>
        </div>
      </section>
    </>
  );
}
