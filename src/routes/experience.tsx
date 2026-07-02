import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Hanan Ibrahim" },
      { name: "description", content: "Professional experience of Hanan Ibrahim across AI, robotics and defence research." },
      { property: "og:title", content: "Experience — Hanan Ibrahim" },
      { property: "og:description", content: "Professional experience of Hanan Ibrahim across AI, robotics and defence research." },
    ],
  }),
  component: Experience,
});

const experiences = [
  {
    role: "Research Assistant",
    org: "Centre for Defence Research and Development",
    type: "Internship",
    period: "Jan 2026 — Jul 2026 · 6 mos",
    location: "Colombo, Western Province, Sri Lanka · On-site",
    points: [
      "Research and development work on AI-enabled surveillance and threat detection systems, with a focus on deep learning and computer vision for aerial and RF-based monitoring.",
      "Actively contributing to projects involving intelligent detection, signal analysis, and decision-support systems for defence and security applications.",
      "Supporting research at the intersection of artificial intelligence, radio-frequency systems, and electronic warfare technologies.",
    ],
  },
];

function Experience() {
  return (
    <>
      <PageHeader
        index="04."
        eyebrow="Experience"
        title={<>Building intelligent systems <em className="text-muted-foreground">in the field.</em></>}
        description="Hands-on research and engineering experience across AI, computer vision and defence technologies."
      />

      <section className="container-prose py-20">
        {experiences.map((exp) => (
          <div key={exp.role} className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-xs text-primary">{exp.period}</p>
              <p className="mt-3 text-sm text-muted-foreground">{exp.location}</p>
            </div>
            <div className="md:col-span-8 border-l border-border/60 pl-8">
              <h3 className="text-3xl">{exp.role}</h3>
              <p className="mt-2 font-mono text-sm text-muted-foreground">
                {exp.org} · {exp.type}
              </p>
              <ul className="mt-6 space-y-4">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                    <span className="mt-1.5 text-primary">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
