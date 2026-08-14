import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card, Badge } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { howWeWorkSteps, modelEconomics } from "@/lib/data";

export default function HowWeWorkPage() {
  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>How we work</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            The pathway from first meeting to repeat borrowing
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">
            Every MLF client moves through the same eight-stage pathway. Each stage is a
            precondition for the next.
          </p>
        </Reveal>
      </Section>

      <Section tone="white">
        <div className="ledger-margin space-y-10 pl-16">
          {howWeWorkSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05}>
              <div className="relative">
                <span className="absolute -left-16 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-clay font-data text-sm font-semibold text-sand">
                  {i + 1}
                </span>
                <h3 className="font-display text-2xl font-medium">{step.title}</h3>
                <p className="mt-2 max-w-2xl text-ink/70">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sandDeep">
        <SectionHeading
          eyebrow="The economics behind the model"
          title="Why operating self-sufficiency is the metric that matters"
        />
        <Reveal>
          <Card className="mt-8 max-w-4xl">
            <p className="leading-relaxed text-ink/80">{modelEconomics.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {modelEconomics.levers.map((lever) => (
                <Badge key={lever} tone="baobab">
                  {lever.split(" — ")[0]}
                </Badge>
              ))}
            </div>
            <ul className="mt-6 space-y-2 text-sm text-ink/70">
              {modelEconomics.levers.map((lever) => (
                <li key={lever}>— {lever}</li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}