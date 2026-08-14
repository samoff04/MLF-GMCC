import Link from "next/link";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card, Badge, SourceNote } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { countryList } from "@/lib/data";
import { formatNumber } from "@/lib/utils";
import { MapPin } from "lucide-react";

export default function WhereWeWorkPage() {
  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>Where we work</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            Four countries, four operating environments
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">
            MLF operates across Malawi, Zambia, Zimbabwe and South Africa. Explore each country's
            page for its 2023 performance, macro environment and strategic opportunities.
          </p>
        </Reveal>
      </Section>

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          {countryList.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.08}>
              <Link href={`/where-we-work/${c.slug}`}>
                <Card className="h-full transition-transform duration-200 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-clay">
                      <MapPin className="h-4 w-4" />
                      <span className="font-data text-xs uppercase tracking-wider">Country</span>
                    </div>
                    {c.activeClients > 0 && <Badge tone="gold">OSS {c.oss}%</Badge>}
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-medium">{c.name}</h2>
                  {c.activeClients > 0 ? (
                    <>
                      <p className="mt-2 text-ink/70">{formatNumber(c.activeClients)} active clients · {c.loanBookLabel} loan book</p>
                      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                        <div className="rounded-xl bg-sand p-3">
                          <p className="font-display text-xl">{c.par30}%</p>
                          <p className="text-xs text-ink/60">PAR30</p>
                        </div>
                        <div className="rounded-xl bg-sand p-3">
                          <p className="font-display text-xl">{c.repaymentRate}%</p>
                          <p className="text-xs text-ink/60">Repayment</p>
                        </div>
                        <div className="rounded-xl bg-sand p-3">
                          <p className="font-display text-xl">{c.portfolioYield}%</p>
                          <p className="text-xs text-ink/60">Yield</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="mt-2 text-ink/60">{c.narrative}</p>
                  )}
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
        <SourceNote />
      </Section>
    </>
  );
}