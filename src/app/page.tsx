import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { StatCard, Card, SourceNote, Badge } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { orgWide, countryList, howWeWorkSteps } from "@/lib/data";
import { formatNumber } from "@/lib/utils";
import { ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-baobab text-sand">
        <div className="ledger-lines pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32 md:px-10">
          <Reveal>
            <Eyebrow light>GMCC global microfinance case competition build</Eyebrow>
            <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.05] md:text-6xl">
              Giving hope, not handouts to women in Africa
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/80">
              MicroLoan Foundation is a social microfinance institution providing business loans and
              training to women facing poverty across Malawi, Zambia, Zimbabwe and South Africa. This
              site reproduces MLF's digital platform for a case-competition project, layered with a
              2023 financial, risk and impact intelligence system built for GMCC.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/how-we-work">
                How we work <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/our-impact" variant="ghost" className="border-sand/40 text-sand hover:border-sand">
                See our impact
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-sand/15 bg-baobab-dark/60 p-8">
              <p className="font-data text-xs uppercase tracking-wider text-gold">2023 at a glance</p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <p className="font-display text-4xl font-medium">{formatNumber(orgWide.womenSupported)}</p>
                  <p className="mt-1 text-sm text-sand/70">women supported</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-medium">{formatNumber(orgWide.activeFemaleEntrepreneurs)}</p>
                  <p className="mt-1 text-sm text-sand/70">active entrepreneurs</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-medium">£{orgWide.loansDisbursedGBP}M</p>
                  <p className="mt-1 text-sm text-sand/70">loans disbursed</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-medium">£{orgWide.averageLoanGBP}</p>
                  <p className="mt-1 text-sm text-sand/70">average loan size</p>
                </div>
              </div>
              <SourceNote />
            </div>
          </Reveal>
        </div>
      </section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="Our mission"
            title="A loan is only the beginning"
            lede="MLF pairs small business loans with structured training and ongoing field support, so capital lands inside a support system rather than a transaction — the model this site's How We Work page walks through step by step."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <StatCard value={`£${orgWide.totalIncomeGBP}M`} label="Total income, 2023" tone="baobab" />
          <StatCard value={`£${orgWide.loanBookGBP}M`} label="Loan book, 2023" tone="clay" />
          <StatCard value="103%" label="OSS — Malawi & Zambia" tone="gold" />
          <StatCard value="133%" label="OSS — Zimbabwe (2023; fell to 79% in 2024 as the loan book matured — see Zimbabwe page)" tone="baobab" />
        </div>
      </Section>

      <Section tone="sandDeep">
        <Reveal>
          <SectionHeading eyebrow="Where we work" title="Four countries, one social microfinance model" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {countryList.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.08}>
              <Link href={`/where-we-work/${c.slug}`}>
                <Card className="h-full transition-transform duration-200 hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-clay">
                    <MapPin className="h-4 w-4" />
                    <span className="font-data text-xs uppercase tracking-wider">Country page</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-medium">{c.name}</h3>
                  {c.activeClients > 0 ? (
                    <>
                      <p className="mt-2 text-sm text-ink/70">{formatNumber(c.activeClients)} active clients</p>
                      <div className="mt-4 flex gap-2">
                        <Badge tone="baobab">OSS {c.oss}%{c.followUp ? "*" : ""}</Badge>
                        <Badge tone="clay">PAR30 {c.par30}%{c.followUp ? "*" : ""}</Badge>
                      </div>
                      {c.followUp && (
                        <p className="mt-2 text-xs text-ink/50">*2023 figure — see page for {c.followUp.year} comparison</p>
                      )}
                    </>
                  ) : (
                    <p className="mt-2 text-sm text-ink/60">Regional footprint — see page for detail</p>
                  )}
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="From first meeting to repeat borrowing"
            lede="Every client moves through the same structured pathway before, during and after her first loan."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {howWeWorkSteps.slice(0, 4).map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <Card>
                <p className="font-data text-xs text-clay">{`0${i + 1}`}</p>
                <h3 className="mt-2 font-display text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{step.detail}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-6">
          <ButtonLink href="/how-we-work" variant="ghost">
            See the full model <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Section>

      <Section tone="baobab">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Financial highlights"
            title="Sustainable at the field level"
            lede="Operating self-sufficiency stayed above 100% in every reporting country in 2023, even as small average loan sizes kept the model focused on reach over scale."
          />
        </Reveal>
        <div className="mt-8">
          <ButtonLink href="/financials" variant="primary">
            View financials <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Section>

      <Section tone="sandDeep">
        <Reveal>
          <SectionHeading
            eyebrow="Explore further"
            title="Risk, digital finance and climate resilience"
            lede="Read how MLF manages credit, climate and currency risk, how digital disbursement is changing field operations, and how a largely agricultural client base is affected by weather shocks."
          />
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/risk-management">Risk management</ButtonLink>
          <ButtonLink href="/digital-finance" variant="secondary">Digital finance</ButtonLink>
          <ButtonLink href="/agriculture-climate" variant="ghost">Agriculture & climate</ButtonLink>
        </div>
      </Section>
    </>
  );
}