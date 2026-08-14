import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card, StatCard, SourceNote } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { orgWide } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>About MLF</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            A social microfinance institution, not a lender of last resort
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand/80">
            MicroLoan Foundation provides business loans and structured training to women facing
            poverty in sub-Saharan Africa. The model combines group-based lending, seven training
            modules and ongoing field support.
          </p>
        </Reveal>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-medium">What makes it social microfinance</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Unlike commercial microlenders, MLF prices its product around client protection and
              training rather than pure yield maximisation. Groups of women co-guarantee loans,
              complete a structured curriculum before disbursement, and stay in contact with field
              officers well past the first repayment.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-medium">Where the organisation stood in 2023</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              MLF supported {orgWide.womenSupported.toLocaleString()} women to date, with{" "}
              {orgWide.activeFemaleEntrepreneurs.toLocaleString()} active female entrepreneurs across
              Malawi, Zambia and Zimbabwe, alongside its South Africa operation. Total income reached
              £{orgWide.totalIncomeGBP}M against expenditure of £{orgWide.totalExpenditureGBP}M.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <StatCard value={orgWide.womenSupported.toLocaleString()} label="Women supported to date" />
          <StatCard value={orgWide.activeFemaleEntrepreneurs.toLocaleString()} label="Active female entrepreneurs" tone="clay" />
          <StatCard value={`£${orgWide.loanBookGBP}M`} label="Loan book, 2023" tone="gold" />
          <StatCard value={`£${orgWide.averageLoanGBP}`} label="Average loan size, 2023" />
        </div>
        <SourceNote />
      </Section>

      <Section tone="sandDeep">
        <SectionHeading eyebrow="Project scope" title="What this site is" />
        <Reveal>
          <Card className="mt-8 max-w-3xl">
            <p className="text-sm leading-relaxed text-ink/75">
              This website is an educational recreation built for a GMCC case-competition
              submission. It reproduces MLF's information architecture and visual language using
              original assets and copy — it does not copy MLF's copyrighted text, logo files or
              proprietary imagery, and it is not affiliated with or endorsed by MicroLoan
              Foundation. Factual statistics on this site are limited to the figures supplied from
              the MLF Annual Report & Financial Statements 2023.
            </p>
          </Card>
        </Reveal>
      </Section>
    </>
  );
}