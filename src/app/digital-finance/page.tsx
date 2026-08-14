import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card, StatCard, SourceNote } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { digitalFinance } from "@/lib/data";

export default function DigitalFinancePage() {
  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>Digital finance</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            From cash to mobile money
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">{digitalFinance.reference}</p>
        </Reveal>
      </Section>

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard value="100%" label="Zambia disbursements via mobile money, 2023" tone="baobab" />
          <StatCard value="4" label="Countries with a digital finance roadmap" tone="clay" />
          <StatCard value="1" label="Digital savings initiative launched in 2023" tone="gold" />
        </div>
      </Section>

      <Section tone="sandDeep">
        <SectionHeading eyebrow="The pipeline" title="From disbursement to future credit scoring" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {digitalFinance.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <Card className="h-full">
                <p className="font-data text-xs text-clay">{`0${i + 1}`}</p>
                <h3 className="mt-2 font-display text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{p.detail}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <SourceNote />
      </Section>
    </>
  );
}