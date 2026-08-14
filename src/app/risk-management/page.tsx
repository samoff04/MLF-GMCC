import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card, Badge, SourceNote } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { ChartCard } from "@/components/charts/ChartShell";
import { RiskRadarChart } from "@/components/charts/Charts";
import { riskCategories } from "@/lib/data";

const levelScore: Record<string, number> = { Watch: 1, Moderate: 2, Elevated: 3, High: 4, Severe: 5 };
const levelTone: Record<string, "baobab" | "clay" | "gold" | "dust"> = {
  Watch: "dust",
  Moderate: "gold",
  Elevated: "clay",
  High: "clay",
  Severe: "clay",
};

export default function RiskManagementPage() {
  const radarData = riskCategories.map((r) => ({ subject: r.name, score: levelScore[r.level], fullMark: 5 }));

  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>Risk management</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            Six risk categories shaping the 2023 portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">
            Credit, climate, currency, liquidity, operational and regulatory risk each contributed
            to the pressure behind the 2023 results.
          </p>
        </Reveal>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <ChartCard title="Risk profile overview" note="Relative severity, 1 (watch) to 5 (severe)" height={340}>
            <RiskRadarChart data={radarData} />
          </ChartCard>
          <div className="grid gap-4">
            {riskCategories.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.05}>
                <Card>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-medium">{r.name}</h3>
                    <Badge tone={levelTone[r.level]}>{r.level}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-ink/70">{r.detail}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
        <SourceNote>Risk levels are analytical interpretation of MLF Annual Report 2023 disclosures, not an MLF-published risk rating.</SourceNote>
      </Section>
    </>
  );
}