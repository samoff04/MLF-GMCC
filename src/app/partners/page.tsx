import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card, Badge, SourceNote } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ChartCard } from "@/components/charts/ChartShell";
import { SimpleLineChart, SimplePieChart } from "@/components/charts/Charts";
import { DataTable } from "@/components/charts/DataTable";
import { partnersDetail } from "@/lib/data";

const partnerTypes = [
  { title: "Institutional funders", detail: "Grant and programme funding that underwrites field operations and training delivery — the largest channel at 53% of 2023 voluntary income." },
  { title: "Individual donors", detail: "Individuals and events contributed 42% of 2023 voluntary income, funding growth alongside interest income." },
  { title: "Corporate partners", detail: "The smallest channel by value in 2023, at 1% of voluntary income, alongside donated services and facilities at 5%." },
  { title: "Impact investors", detail: "Capital that funds the loan book itself, repaid through portfolio interest income rather than voluntary income." },
];

export default function PartnersPage() {
  const efficiencyData = partnersDetail.efficiencyRatio.map((r) => ({ year: r.year, ratio: r.ratio }));
  const channelPie = partnersDetail.channelMix.map((c) => ({ name: c.channel, value: c.amount }));
  const volatilityData = partnersDetail.volatility.map((v) => ({ year: v.year, income: v.income }));

  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>Fundraising & partners</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            Funding the model, not just the loan book
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">
            Voluntary income funds training, field operations and digitisation; interest income
            funds the loan book itself. This page covers how that voluntary income is raised, at
            what cost, and how reliable it has been year to year.
          </p>
        </Reveal>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Who funds MLF" title="Four kinds of partner" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {partnerTypes.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{p.detail}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sandDeep">
        <SectionHeading eyebrow="Cost of fundraising" title="What it costs to raise £1 of voluntary income" />
        <Reveal>
          <Card className="mt-8 max-w-3xl">
            <p className="text-sm leading-relaxed text-ink/75">{partnersDetail.efficiencyNote}</p>
          </Card>
        </Reveal>
        <div className="mt-8">
          <ChartCard title="Fundraising efficiency ratio, 2020–2023" note="Income raised ÷ cost of raising it (x)">
            <SimpleLineChart data={efficiencyData} xKey="year" lines={[{ key: "ratio", color: "#1f4b3f", label: "Efficiency ratio" }]} />
          </ChartCard>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Channel mix" title={`2023 voluntary income — £${partnersDetail.channelMixTotal.toLocaleString()} total`} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ChartCard
            title="Income by channel, 2023"
            table={
              <DataTable
                columns={["Channel", "Amount", "Share"]}
                rows={partnersDetail.channelMix.map((c) => [c.channel, `£${c.amount.toLocaleString()}`, `${c.share}%`])}
              />
            }
          >
            <SimplePieChart data={channelPie} />
          </ChartCard>
          <div className="flex flex-col justify-center gap-3">
            {partnersDetail.channelMix.map((c) => (
              <div key={c.channel} className="flex items-center justify-between rounded-xl border border-line bg-white/70 px-4 py-3">
                <span className="text-sm text-ink/75">{c.channel}</span>
                <Badge tone="baobab">{c.share}%</Badge>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sandDeep">
        <SectionHeading eyebrow="Income volatility" title="Voluntary income, 2020–2023" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ChartCard
            title="Voluntary income by year"
            note="£, group total"
            table={
              <DataTable
                columns={["Year", "Income", "YoY change"]}
                rows={partnersDetail.volatility.map((v) => [v.year, `£${v.income.toLocaleString()}`, v.change === null ? "—" : `${v.change > 0 ? "+" : ""}${v.change}%`])}
              />
            }
          >
            <SimpleLineChart data={volatilityData} xKey="year" lines={[{ key: "income", color: "#c1622d", label: "Voluntary income (£)" }]} />
          </ChartCard>
          <Reveal>
            <Card className="h-full">
              <h3 className="font-display text-lg font-medium">Reading the trend</h3>
              <p className="mt-3 text-sm text-ink/75">{partnersDetail.volatilityNote}</p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="2023 partners" title="Named funders and technical partners" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h3 className="font-display text-lg font-medium">Top donors, 2023</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/75">
                {partnersDetail.topDonors2023.map((d) => (
                  <li key={d}>— {d}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full">
              <h3 className="font-display text-lg font-medium">Technical assistance partners</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/75">
                {partnersDetail.technicalAssistancePartners.map((d) => (
                  <li key={d}>— {d}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
        <SourceNote />
      </Section>

      <Section tone="sandDeep">
        <SectionHeading eyebrow="Get involved" title="Explore the site, or get in touch" />
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/financials">See the financial dashboard</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Contact the team</ButtonLink>
        </div>
      </Section>
    </>
  );
}