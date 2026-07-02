import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hanan Ibrahim" },
      { name: "description", content: "About Hanan Ibrahim — robotics engineer and researcher." },
      { property: "og:title", content: "About — Hanan Ibrahim" },
      { property: "og:description", content: "About Hanan Ibrahim — robotics engineer and researcher." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        index="02."
        eyebrow="About Me"
        title={<>Crafting the future <em className="text-muted-foreground">of robotics.</em></>}
        description="Passionate about building intelligent systems that push the boundaries of what's possible in autonomous technology."
      />

      <section className="container-prose grid gap-16 py-20 md:grid-cols-12">
        <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-foreground/85">
          <h2 className="text-3xl">My Journey</h2>
          <p>
            Hello! I'm Hanan Ibrahim, a Robotics Engineer passionate about creating
            autonomous systems that solve real-world challenges. Currently pursuing my
            degree in Instrumentation and Automation Technology at the University of
            Colombo, I combine academic rigor with hands-on innovation.
          </p>
          <p>
            My expertise spans autonomous drone navigation, computer vision and
            AI-powered robotics. I thrive on transforming complex problems into
            elegant, intelligent solutions that bridge cutting-edge research with
            practical applications.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 pt-4 font-mono text-sm text-primary hover:underline"
          >
            Let's collaborate →
          </Link>
        </div>

        <aside className="md:col-span-5 md:border-l md:border-border/60 md:pl-10">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Education
          </p>
          <div className="mt-6 space-y-8">
            <div>
              <p className="text-sm font-medium">University of Colombo</p>
              <p className="mt-1 text-sm text-muted-foreground">
                BET (Hons) Instrumentation and Automation Technology
              </p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                2023 – 2027 · Colombo, Sri Lanka
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">MACN Markar National School</p>
              <p className="mt-1 text-sm text-muted-foreground">Advanced Level Education</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                2020 – 2022 · Eravur, Sri Lanka
              </p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
