import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card, Badge } from "@/components/ui/Card";
import { Reveal } from "@/components/site/Reveal";
import Link from "next/link";

const posts = [
  {
    title: "Reading MLF's 2023 results: growth and pressure, at once",
    tag: "Financials",
    href: "/financials",
    excerpt: "Operating self-sufficiency improved across every reporting country in 2023 — while FX depreciation, inflation and rising funding costs squeezed the margin behind it.",
  },
  {
    title: "Why Zimbabwe's small portfolio is worth studying",
    tag: "Strategy",
    href: "/where-we-work/zimbabwe",
    excerpt: "0% PAR30, 100% repayment and 133% OSS in a 172%-inflation economy: what a USD lending strategy achieved at small scale.",
  },
  {
    title: "Climate risk is credit risk for a smallholder portfolio",
    tag: "Climate",
    href: "/agriculture-climate",
    excerpt: "With roughly 90% of clients farming, a single cyclone season can move PAR30 by several points.",
  },
  {
    title: "What 100% mobile-money disbursement unlocks next",
    tag: "Digital",
    href: "/digital-finance",
    excerpt: "Zambia's fully digital disbursement rail is also the foundation for the credit-scoring model MLF is exploring for agricultural lending.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <Section tone="baobab">
        <Reveal>
          <Eyebrow light>Insights</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-medium text-sand md:text-5xl">
            Analysis notes from the 2023 results
          </h1>
        </Reveal>
      </Section>

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <Link href={p.href}>
                <Card className="h-full transition-transform duration-200 hover:-translate-y-1">
                  <Badge tone="clay">{p.tag}</Badge>
                  <h2 className="mt-3 font-display text-xl font-medium">{p.title}</h2>
                  <p className="mt-2 text-sm text-ink/70">{p.excerpt}</p>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}