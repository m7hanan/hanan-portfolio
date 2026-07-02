import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { PageHeader } from "@/components/Section";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hanan Ibrahim" },
      { name: "description", content: "Get in touch with Hanan Ibrahim for collaborations in AI, robotics and automation." },
      { property: "og:title", content: "Contact — Hanan Ibrahim" },
      { property: "og:description", content: "Get in touch with Hanan Ibrahim for collaborations in AI, robotics and automation." },
    ],
  }),
  component: Contact,
});

const details = [
  { label: "Email", value: "m7hanan@gmail.com", href: "mailto:m7hanan@gmail.com" },
  { label: "Phone", value: "+94 758 520 552", href: "tel:+94758520552" },
  { label: "Location", value: "Batticaloa, Eastern Province, Sri Lanka" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-hanan-ibrahim-a3885b341/" },
  { label: "GitHub", href: "https://github.com/m7hanan" },
  { label: "YouTube", href: "https://www.youtube.com/@QomarunHanan" },
];


function Contact() {
  const send = useServerFn(submitContact);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    setSubmitting(true);
    try {
      await send({ data: payload });
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHeader
        index="06."
        eyebrow="Get In Touch"
        title="Let's connect."
        description="Always open to new projects, opportunities and collaborations in AI, automation and robotics."
      />

      <section className="container-prose grid gap-16 py-20 md:grid-cols-12">
        <div className="md:col-span-5 space-y-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Contact Details
            </p>
            <ul className="mt-6 space-y-6">
              {details.map((d) => (
                <li key={d.label}>
                  <p className="font-mono text-xs text-muted-foreground">{d.label}</p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-1 block text-base text-foreground hover:text-primary"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base">{d.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Social
            </p>
            <ul className="mt-6 space-y-2">
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/85 hover:text-primary">
                    {s.label} ↗
                  </a>

                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          className="md:col-span-7 space-y-6 border border-border rounded-sm p-8 md:p-10"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field name="name" label="Name" placeholder="Your name" required />
            <Field name="email" label="Email" type="email" placeholder="you@example.com" required />
          </div>
          <Field name="subject" label="Subject" placeholder="Subject of your message" required />
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Your message"
              className="mt-2 w-full resize-none border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {submitting ? "Sending…" : "Send Message →"}
          </button>
        </form>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
