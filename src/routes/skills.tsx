import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Hanan Ibrahim" },
      { name: "description", content: "Technical skills across AI, robotics, embedded systems, and research." },
      { property: "og:title", content: "Skills — Hanan Ibrahim" },
      { property: "og:description", content: "Technical skills across AI, robotics, embedded systems and research." },
    ],
  }),
  component: Skills,
});

const groups = [
  {
    title: "Programming Languages",
    desc: "Core languages for AI development and system programming.",
    items: ["Python", "C++", "JavaScript", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    desc: "Building intelligent systems with ML and deep learning.",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "Neural Networks"],
  },
  {
    title: "Robotics & Automation",
    desc: "Developing autonomous systems and robotic applications.",
    items: ["ROS2", "AirSim", "Microcontrollers", "IoT Systems"],
  },
  {
    title: "Hardware & Embedded",
    desc: "Working with microcontrollers and embedded systems.",
    items: ["Arduino", "Raspberry Pi", "Sensor Integration", "Circuit Design"],
  },
  {
    title: "Development & Research",
    desc: "Professional development practices and research methodologies.",
    items: ["Technical Writing", "Research Skills", "RAD", "Video Editing"],
  },
  {
    title: "Tools & Collaboration",
    desc: "Modern development tools and collaboration platforms.",
    items: ["Git & GitHub", "Version Control", "Project Management", "Documentation"],
  },
];

function Skills() {
  return (
    <>
      <PageHeader
        index="03."
        eyebrow="Skills & Expertise"
        title="Technical arsenal."
        description="Theoretical knowledge combined with hands-on experience to build innovative solutions across AI, robotics and automation."
      />
      <section className="container-prose py-20">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <div key={g.title} className="bg-background p-8">
              <p className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {g.desc}
              </p>
              <ul className="mt-6 space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 font-mono text-xs text-foreground/80"
                  >
                    <span className="text-primary">▹</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
