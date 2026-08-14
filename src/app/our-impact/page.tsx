import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { StatCard, SourceNote } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { ChartCard } from "@/components/charts/ChartShell";
import { SimpleBarChart, SimplePieChart } from "@/components/charts/Charts";
import { socialImpact } from "@/lib/data";

export default function OurImpactPage() {
  const povertyData = [
    { metric: "Below $2.50/day", value: socialImpact.newClientsBelow250 },
    { metric: "Below $1.25/day", value: socialImpact.newClientsBelow125 },
  ];
  const wellbeingData = [
    { metric: "Food security", value: socialImpact.foodSecurity },
    { metric: "Asset ownership", value: socialImpact.assetOwnershipIncrease },
    { metric: "Quality of life", value: socialImpact.improvedQualityOfLife },
    { metric: "Confidence", value: socialImpact.increasedConfidence },
    { metric: "Able to save", value: socialImpact.ableToSave },
  ];
  const savingsPie = [
    { name: "Able to save", value: socialImpact.ableToSave },
    { name: "Not yet saving", value: 100 - socialImpact.ableToSave },
  ];

  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>Our impact</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            What changes for a client's household
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">
            MLF measures impact beyond loan disbursement — poverty status, food security, savings
            behaviour, business profitability and self-reported quality of life. All figures below
            are drawn from the 2023 Annual Report.
          </p>
        </Reveal>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Starting point" title="Who MLF's new clients are" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <StatCard value={`${socialImpact.newClientsBelow250}%`} label="New clients living below $2.50/day" tone="clay" />
          <StatCard value={`${socialImpact.newClientsBelow125}%`} label="New clients living below $1.25/day" tone="gold" />
        </div>
        <div className="mt-8">
          <ChartCard title="Poverty line at entry" note="Share of new clients below each threshold">
            <SimpleBarChart data={povertyData} dataKey="value" xKey="metric" unit="%" color="#c1622d" />
          </ChartCard>
        </div>
      </Section>

      <Section tone="sandDeep">
        <SectionHeading eyebrow="Household outcomes" title="Wellbeing indicators" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ChartCard title="Wellbeing indicators, 2023" height={320}>
            <SimpleBarChart data={wellbeingData} dataKey="value" xKey="metric" unit="%" />
          </ChartCard>
          <ChartCard title="Clients able to save" height={320}>
            <SimplePieChart data={savingsPie} />
          </ChartCard>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Business & poverty transition" title="Growth and graduation out of poverty" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <StatCard value={`${socialImpact.businessProfitIncrease}%`} label="Average increase in business profits" />
          <StatCard value={`${socialImpact.movingOutOfExtremePoverty}%+`} label="Clients with 1+ year membership moving out of extreme poverty" tone="clay" />
          <StatCard value={`${socialImpact.foodSecurity}%`} label="Families reporting food security" tone="gold" />
        </div>
        <SourceNote />
      </Section>
    </>
  );
}