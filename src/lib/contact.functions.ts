import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const FORM_ID = "261712539753058";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Valid email is required").max(200),
  subject: z.string().trim().min(1, "Subject is required").max(300),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const body = new URLSearchParams();
    body.set("q3_name", data.name);
    body.set("q4_email", data.email);
    body.set("q5_subject", data.subject);
    body.set("q6_message", data.message);

    const res = await fetch(`https://submit.jotform.com/submit/${FORM_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!res.ok) {
      throw new Error("Failed to send message. Please try again.");
    }

    return { ok: true };
  });
