import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Hanan Ibrahim" },
      { name: "description", content: "Academic background and educational journey." },
      { property: "og:title", content: "Education — Hanan Ibrahim" },
      { property: "og:description", content: "Academic background and educational journey." },
    ],
  }),
  component: Education,
});

const areas = [
  "Control Systems Engineering",
  "Industrial Automation",
  "Robotics and AI",
  "Sensor Technology",
  "Process Control",
  "Embedded Systems",
];

function Education() {
  return (
    <>
      <PageHeader
        index="05."
        eyebrow="Education & Journey"
        title="An academic foundation."
        description="A continuous pursuit of knowledge across automation, AI and robotics."
      />

      <section className="container-prose py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs text-primary">2023 — 2027</p>
          </div>
          <div className="md:col-span-8 border-l border-border/60 pl-8">
            <h3 className="text-3xl">University of Colombo</h3>
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              Bachelor's in Instrumentation and Automation Technology
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">
              Currently pursuing my undergraduate degree with a focus on
              instrumentation, automation and control systems. The program combines
              theoretical knowledge with practical applications in industrial
              automation, robotics and intelligent systems.
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Key Areas of Study
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {areas.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-foreground/85">
                  <span className="text-primary">▹</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-border/60 pt-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs text-primary">2020 — 2022</p>
          </div>
          <div className="md:col-span-8 border-l border-border/60 pl-8">
            <h3 className="text-3xl">MACN Markar National School</h3>
            <p className="mt-2 font-mono text-sm text-muted-foreground">
              Advanced Level Education · Eravur
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">
              Completed Advanced Level studies with a strong foundation in
              mathematics, science and technology — providing the analytical and
              problem-solving skills essential for AI and automation.
            </p>
          </div>
        </div>

        <p className="mt-20 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Passionate about continuous learning and staying updated with the latest
          developments in AI, robotics and automation technologies.
        </p>
      </section>
    </>
  );
}
