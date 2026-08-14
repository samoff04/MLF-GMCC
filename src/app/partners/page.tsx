import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const partnerTypes = [
  { title: "Institutional funders", detail: "Grant and programme funding that underwrites field operations and training delivery." },
  { title: "Individual donors", detail: "Voluntary income contributed £1.178M in 2023, funding growth alongside interest income." },
  { title: "Corporate partners", detail: "Skills-based and financial partnerships supporting digitisation and product development." },
  { title: "Impact investors", detail: "Capital that funds the loan book itself, repaid through portfolio interest income." },
];

export default function PartnersPage() {
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
            funds the loan book itself.
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
        <SectionHeading eyebrow="Get involved" title="Explore the site, or get in touch" />
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/financials">See the financial dashboard</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Contact the team</ButtonLink>
        </div>
      </Section>
    </>
  );
}