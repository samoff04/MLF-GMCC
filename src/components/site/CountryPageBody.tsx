import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card, StatCard, Badge, SourceNote } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { ChartCard } from "@/components/charts/ChartShell";
import { SimpleBarChart } from "@/components/charts/Charts";
import { CountryStats } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

export function CountryPageBody({ c }: { c: CountryStats }) {
  const metricData = [
    { metric: "PAR30", value: c.par30 },
    { metric: "Repayment", value: c.repaymentRate },
    { metric: "OSS", value: c.oss },
    { metric: "Yield", value: c.portfolioYield },
  ];

  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>Where we work</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            {c.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">{c.narrative}</p>
        </Reveal>
      </Section>

      {c.activeClients > 0 ? (
        <>
          <Section tone="white">
            <SectionHeading eyebrow="2023 performance" title="Scale and portfolio quality" />
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              <StatCard value={formatNumber(c.activeClients)} label="Active clients" />
              <StatCard value={c.loanBookLabel} label="Loan book" tone="clay" />
              <StatCard value={`£${c.averageLoanGBP}`} label="Average loan" tone="gold" />
              <StatCard value={`${c.oss}%`} label="Operating self-sufficiency" />
            </div>
            <div className="mt-8">
              <ChartCard title={`${c.name} — quality metrics`} note="PAR30, repayment, OSS and portfolio yield, 2023">
                <SimpleBarChart data={metricData} dataKey="value" xKey="metric" unit="%" />
              </ChartCard>
            </div>

            {c.followUp && (
              <Reveal>
                <Card className="mt-8">
                  <Badge tone="clay">{c.followUp.year} comparison</Badge>
                  <h3 className="mt-3 font-display text-xl font-medium">
                    How the {c.followUp.year} book season changed the picture
                  </h3>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full min-w-[420px] border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-line text-left text-ink/60">
                          <th className="py-2 pr-4 font-data text-xs uppercase tracking-wider">Metric</th>
                          <th className="py-2 pr-4 font-data text-xs uppercase tracking-wider">2023</th>
                          <th className="py-2 pr-4 font-data text-xs uppercase tracking-wider">{c.followUp.year}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-line/60">
                          <td className="py-2 pr-4 font-medium">Active clients</td>
                          <td className="py-2 pr-4">{formatNumber(c.activeClients)}</td>
                          <td className="py-2 pr-4">{formatNumber(c.followUp.activeClients)}</td>
                        </tr>
                        <tr className="border-b border-line/60">
                          <td className="py-2 pr-4 font-medium">Loan book</td>
                          <td className="py-2 pr-4">{c.loanBookLabel}</td>
                          <td className="py-2 pr-4">{c.followUp.loanBookLabel}</td>
                        </tr>
                        <tr className="border-b border-line/60">
                          <td className="py-2 pr-4 font-medium">PAR30</td>
                          <td className="py-2 pr-4">{c.par30}%</td>
                          <td className="py-2 pr-4 font-semibold text-clay">{c.followUp.par30}%</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 font-medium">OSS</td>
                          <td className="py-2 pr-4">{c.oss}%</td>
                          <td className="py-2 pr-4 font-semibold text-clay">{c.followUp.oss}%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-ink/60">{c.followUp.note}</p>
                </Card>
              </Reveal>
            )}
          </Section>

          <Section tone="sandDeep">
            <div className="grid gap-8 md:grid-cols-2">
              <Reveal>
                <Card className="h-full">
                  <h3 className="font-display text-xl font-medium">Macro environment</h3>
                  <ul className="mt-4 space-y-2 text-sm text-ink/75">
                    {c.macro.map((m) => (
                      <li key={m}>— {m}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
              <Reveal delay={0.08}>
                <Card className="h-full">
                  <h3 className="font-display text-xl font-medium">Currency risk</h3>
                  <p className="mt-3 text-sm text-ink/75">{c.currencyRisk}</p>
                  <h3 className="mt-6 font-display text-xl font-medium">Climate & agriculture exposure</h3>
                  <p className="mt-3 text-sm text-ink/75">{c.climateExposure}</p>
                </Card>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <Card className="mt-8">
                <h3 className="font-display text-xl font-medium">Digital adoption</h3>
                <p className="mt-3 text-sm text-ink/75">{c.digitalAdoption}</p>
              </Card>
            </Reveal>
          </Section>

          <Section tone="white">
            <div className="grid gap-8 md:grid-cols-2">
              <Reveal>
                <div>
                  <Badge tone="clay">Key operational problems</Badge>
                  <ul className="mt-4 space-y-3 text-ink/75">
                    {c.keyProblems.map((p) => (
                      <li key={p} className="border-l-2 border-clay/40 pl-4">{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div>
                  <Badge tone="baobab">Strategic opportunities</Badge>
                  <ul className="mt-4 space-y-3 text-ink/75">
                    {c.opportunities.map((p) => (
                      <li key={p} className="border-l-2 border-baobab/40 pl-4">{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <SourceNote />
          </Section>
        </>
      ) : (
        <Section tone="white">
          <Card className="max-w-2xl">
            <h3 className="font-display text-xl font-medium">Data availability note</h3>
            <p className="mt-3 text-sm text-ink/75">{c.keyProblems[0]}</p>
            <p className="mt-3 text-sm text-ink/75">{c.opportunities[0]}</p>
          </Card>
        </Section>
      )}
    </>
  );
}