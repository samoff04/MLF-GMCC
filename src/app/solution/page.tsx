import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card, Badge, StatCard } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { DataTable } from "@/components/charts/DataTable";
import { FundingModelChart } from "@/components/charts/Charts";
import { ButtonLink } from "@/components/ui/Button";
import {
  solutionMeta,
  horizons,
  pillars,
  tenYearFundingModel,
  fundingModelNote,
  fundingModelSummary,
  caseStudies,
  solutionClosingGuidance,
} from "@/lib/solutionData";
import { ExternalLink } from "lucide-react";

export default function SolutionPage() {
  const fundingTableRows = tenYearFundingModel.map((y) => [
    y.year,
    y.horizon,
    `$${y.foundationGrant.toFixed(1)}M`,
    `$${y.corporate.toFixed(1)}M`,
    `$${y.digital.toFixed(1)}M`,
    `$${y.cumulative.toFixed(1)}M`,
  ]);

  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>GMCC solution</Eyebrow>

          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            {solutionMeta.name}
          </h1>

          <p className="mt-3 max-w-2xl text-lg font-medium text-gold">
            {solutionMeta.tagline}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-sand/80">
            {solutionMeta.headlineThesis}
          </p>
        </Reveal>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="The roadmap"
          title="Three horizons to $30M"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {horizons.map((h, i) => (
            <Reveal key={h.id} delay={i * 0.08}>
              <Card className="h-full">
                <Badge
                  tone={
                    i === 0 ? "baobab" : i === 1 ? "gold" : "clay"
                  }
                >
                  Horizon {h.number}: {h.name}
                </Badge>

                <p className="mt-3 font-data text-xs uppercase tracking-wider text-ink/50">
                  {h.years}
                </p>

                <p className="mt-2 font-display text-2xl font-medium">
                  {h.cumulativeTarget}
                </p>

                <p className="mt-4 text-sm text-ink/70">
                  {h.primaryEngine}
                </p>

                <div className="mt-4 rounded-lg bg-sand px-3 py-2">
                  <p className="text-xs text-ink/60">Fundraising cost</p>
                  <p className="text-sm font-medium text-ink">
                    {h.fundraisingCost}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sandDeep">
        <SectionHeading
          eyebrow="10-year estimation model"
          title="Funding by channel: Foundation grant, Corporate, Digital"
          lede="An illustrative GMCC projection built from the roadmap above and extended to Year 10. Not an MLF-published figure."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <StatCard
            value="$30.0M"
            label="Cumulative by Year 6 (roadmap target)"
            tone="baobab"
          />

          <StatCard
            value="$54.5M"
            label="Cumulative by Year 10 (extended)"
            tone="clay"
          />

          <StatCard
            value="4.6M"
            label="Digital channel, Year 10 (largest single source)"
            tone="gold"
          />

          <StatCard
            value={`${Math.round(
              fundingModelSummary.digitalShareYear10 * 100
            )}%`}
            label="Digital share of Year 10 new income"
          />
        </div>

        <Reveal>
          <Card className="mt-10">
            <h3 className="font-display text-xl font-medium">
              Annual funding raised by channel, Years 1 to 10
            </h3>

            <p className="mt-1 text-sm text-ink/60">
              Toggle between annual channel mix and cumulative total raised.
              Bars are stacked: foundation grant, corporate, digital.
            </p>

            <div
              style={{ width: "100%", height: 360 }}
              className="mt-4"
            >
              <FundingModelChart data={tenYearFundingModel} />
            </div>

            <DataTable
              columns={[
                "Year",
                "Horizon",
                "Foundation grant",
                "Corporate",
                "Digital",
                "Cumulative",
              ]}
              rows={fundingTableRows}
              footnote={fundingModelNote}
            />
          </Card>
        </Reveal>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="The four pillars"
          title="How the strategy actually works"
        />

        <div className="mt-10 space-y-8">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <Card>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone="baobab">
                    Pillar {p.number}
                  </Badge>

                  <h3 className="font-display text-2xl font-medium">
                    {p.title}
                  </h3>
                </div>

                <p className="mt-2 text-sm font-medium text-clay">
                  {p.summary}
                </p>

                <ul className="mt-4 space-y-3 text-sm text-ink/75">
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="border-l-2 border-baobab/30 pl-4"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-xl bg-sand px-4 py-3">
                  <p className="font-data text-xs uppercase tracking-wider text-clay">
                    What to stop
                  </p>

                  <p className="mt-1 text-sm text-ink/75">
                    {p.whatToStop}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sandDeep">
        <SectionHeading
          eyebrow="Evidence"
          title="Case studies supporting Anchor and Amplify"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 0.05}>
              <Card className="h-full">
                <Badge tone="clay">{cs.pillar}</Badge>

                <h3 className="mt-3 font-display text-lg font-medium">
                  {cs.name}
                </h3>

                <p className="mt-2 text-sm text-ink/70">
                  {cs.detail}
                </p>

                <a
                  href={cs.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-baobab hover:text-clay"
                >
                  Read source
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Card className="mt-8 max-w-3xl">
            <p className="font-data text-xs uppercase tracking-wider text-clay">
              How to use these in the pitch
            </p>

            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              {solutionClosingGuidance}
            </p>
          </Card>
        </Reveal>
      </Section>

      <Section tone="baobab">
        <SectionHeading
          light
          eyebrow="Next"
          title="See how this lands on MLF's own numbers"
        />

        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/financials">
            Financial dashboard
          </ButtonLink>

          <ButtonLink
            href="/where-we-work/zimbabwe"
            variant="secondary"
          >
            Zimbabwe: the risk case
          </ButtonLink>

          <ButtonLink
            href="/partners"
            variant="ghost"
            className="border-sand/40 text-sand hover:border-sand"
          >
            Fundraising & partners
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}