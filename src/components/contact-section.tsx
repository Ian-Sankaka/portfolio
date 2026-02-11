"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim();
    const projectType = (form.elements.namedItem("projectType") as HTMLSelectElement)?.value;
    const budget = (form.elements.namedItem("budget") as HTMLSelectElement)?.value;
    const timeline = (form.elements.namedItem("timeline") as HTMLSelectElement)?.value;
    const details = (form.elements.namedItem("details") as HTMLTextAreaElement)?.value?.trim();

    const errors: Record<string, boolean> = {};
    if (!name) errors.name = true;
    if (!email) errors.email = true;
    if (!projectType) errors.projectType = true;
    if (!budget) errors.budget = true;
    if (!timeline) errors.timeline = true;
    if (!details) errors.details = true;

    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      setFieldErrors(errors);
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Form is valid – wire up to your API or form action here
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Share a bit about your project, and I&apos;ll get back to you with
            next steps, timelines, and how we can collaborate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-10 max-w-3xl"
        >
          <div className="rounded-2xl border border-border/60 bg-card/90 p-6 md:p-8 shadow-sm">
            <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="text-left">
                  <label
                    htmlFor="name"
                    className="text-[15px] md:text-[15px] font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className={`mt-2 h-[2.875rem] w-full rounded-lg border px-3 text-[15px] placeholder:text-[14.5px] outline-none focus-visible:ring-2 focus-visible:ring-ring bg-background ${fieldErrors.name ? "border-destructive" : "border-input"}`}
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-sm text-destructive">Required</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="email"
                    className="text-[15px] md:text-[15px] font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={`mt-2 h-[2.875rem] w-full rounded-lg border px-3 text-[15px] placeholder:text-[14.5px] outline-none focus-visible:ring-2 focus-visible:ring-ring bg-background ${fieldErrors.email ? "border-destructive" : "border-input"}`}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm text-destructive">Required</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="text-left">
                  <label
                    htmlFor="company"
                    className="text-[15px] md:text-[15px] font-medium text-foreground"
                  >
                    Company / Organisation
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Optional"
                    className="mt-2 h-[2.875rem] w-full rounded-lg border border-input bg-background px-3 text-[15px] placeholder:text-[14.5px] outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="text-left">
                  <label
                    htmlFor="project-type"
                    className="text-[15px] md:text-[15px] font-medium text-foreground"
                  >
                    Project type
                  </label>
                  <select
                    id="project-type"
                    name="projectType"
                    className={`mt-2 h-[2.875rem] w-full rounded-lg border px-3 text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-ring bg-background select-arrow-left ${fieldErrors.projectType ? "border-destructive" : "border-input"}`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="web">Web app / website</option>
                    <option value="mobile">Mobile app</option>
                    <option value="api">API / backend</option>
                    <option value="system-design">System design / consulting</option>
                    <option value="other">Something else</option>
                  </select>
                  {fieldErrors.projectType && (
                    <p className="mt-1 text-sm text-destructive">Required</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="text-left">
                  <label
                    htmlFor="budget"
                    className="text-[15px] md:text-[15px] font-medium text-foreground"
                  >
                    Budget range (USD)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className={`mt-2 h-[2.875rem] w-full rounded-lg border px-3 text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-ring bg-background select-arrow-left ${fieldErrors.budget ? "border-destructive" : "border-input"}`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="500-1k">$500 – $1,000</option>
                    <option value="1k-1.5k">$1,000 – $1,500</option>
                    <option value="1.5k-2k">$1,500 – $2,000</option>
                  </select>
                  {fieldErrors.budget && (
                    <p className="mt-1 text-sm text-destructive">Required</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="timeline"
                    className="text-[15px] md:text-[15px] font-medium text-foreground"
                  >
                    Ideal timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className={`mt-2 h-[2.875rem] w-full rounded-lg border px-3 text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-ring bg-background select-arrow-left ${fieldErrors.timeline ? "border-destructive" : "border-input"}`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      When do you want to start?
                    </option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-3-months">Within 1–3 months</option>
                    <option value="3-6-months">In 3–6 months</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                  {fieldErrors.timeline && (
                    <p className="mt-1 text-sm text-destructive">Required</p>
                  )}
                </div>
              </div>

              <div className="text-left">
                <label
                  htmlFor="details"
                  className="text-[15px] md:text-[15px] font-medium text-foreground"
                >
                  Project details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="Tell me about your idea, goals, and what success would look like for you."
                  className={`mt-2 w-full rounded-lg border px-3 py-2 text-[15px] placeholder:text-[14.5px] outline-none focus-visible:ring-2 focus-visible:ring-ring bg-background ${fieldErrors.details ? "border-destructive" : "border-input"}`}
                />
                {fieldErrors.details && (
                  <p className="mt-1 text-sm text-destructive">Required</p>
                )}
              </div>

              {errorMessage && (
                <p className="text-[15px] font-medium text-destructive" role="alert">
                  {errorMessage}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[15px] text-muted-foreground">
                  I&apos;ll respond personally, usually within 1–2 business days.
                </p>
                <Button
                  type="submit"
                  className="mt-1 w-full sm:w-auto px-6"
                >
                  Let&apos;s Connect
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
