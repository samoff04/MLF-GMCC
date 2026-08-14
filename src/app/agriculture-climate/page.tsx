import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card, StatCard, SourceNote } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { agricultureClimate } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function AgricultureClimatePage() {
  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>Agriculture & climate</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            A climate shock is a credit event
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">
            Around {agricultureClimate.clientShare}% of clients are engaged in smallholder farming,
            which makes weather risk one of the clearest transmission channels into portfolio
            quality.
          </p>
        </Reveal>
      </Section>

      <Section tone="white">
        <StatCard value={`~${agricultureClimate.clientShare}%`} label="Clients engaged in smallholder farming" />
        <SectionHeading eyebrow="The transmission chain" title="How a climate shock becomes a PAR30 problem" />
        <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:flex-wrap">
          {agricultureClimate.chain.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <Reveal delay={i * 0.05}>
                <Card className="max-w-xs">
                  <p className="text-sm font-medium text-ink">{step}</p>
                </Card>
              </Reveal>
              {i < agricultureClimate.chain.length - 1 && (
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-clay md:block" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sandDeep">
        <SectionHeading eyebrow="Potential solutions" title="Reducing the climate transmission channel" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {agricultureClimate.solutions.map((s, i) => (
            <Reveal key={s} delay={i * 0.05}>
              <Card className="h-full">
                <p className="text-sm text-ink/75">{s}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <SourceNote>Climate transmission chain and solutions are analytical interpretation informed by MLF Annual Report 2023 disclosures.</SourceNote>
      </Section>
    </>
  );
}