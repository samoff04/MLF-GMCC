"use client";

import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>Contact</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            Get in touch
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">
            This is a demo contact form for an educational project. It does not send a real
            message.
          </p>
        </Reveal>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <Card>
              {submitted ? (
                <p className="text-ink/80">Thank you — this demo form does not send real messages.</p>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div>
                    <label className="text-sm font-medium text-ink/80">Name</label>
                    <input required className="mt-1 w-full rounded-lg border border-line bg-sand px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-ink/80">Email</label>
                    <input required type="email" className="mt-1 w-full rounded-lg border border-line bg-sand px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-ink/80">Message</label>
                    <textarea required rows={4} className="mt-1 w-full rounded-lg border border-line bg-sand px-3 py-2 text-sm" />
                  </div>
                  <Button type="submit">Send message</Button>
                </form>
              )}
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-clay" />
                <p className="text-sm text-ink/75">Demo office address — educational project, not a real MLF office.</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-clay" />
                <p className="text-sm text-ink/75">demo@example.org (placeholder, not a real MLF contact)</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-clay" />
                <p className="text-sm text-ink/75">+00 000 000 0000 (placeholder, not a real MLF contact)</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}