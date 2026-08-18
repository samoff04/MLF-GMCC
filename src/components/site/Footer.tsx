import Link from "next/link";
import { dataCurrencyNote } from "@/lib/data";

const columns = [
  {
    title: "Our work",
    links: [
      { href: "/about", label: "About MLF" },
      { href: "/how-we-work", label: "How we work" },
      { href: "/where-we-work", label: "Where we work" },
      { href: "/our-impact", label: "Our impact" },
    ],
  },
  {
    title: "Analysis",
    links: [
      { href: "/financials", label: "Financials" },
      { href: "/risk-management", label: "Risk management" },
      { href: "/digital-finance", label: "Digital finance" },
      { href: "/agriculture-climate", label: "Agriculture & climate" },
    ],
  },
  {
    title: "Organisation",
    links: [
      { href: "/partners", label: "Fundraising & partners" },
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "GMCC solution",
    links: [{ href: "/solution", label: "Anchor & Amplify strategy" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-baobab-dark/40 bg-baobab text-sand">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-lg font-semibold">MicroLoan Foundation</p>
            <p className="mt-3 max-w-xs text-sm text-sand/70">
              Giving hope, not handouts. An educational recreation built for a GMCC case
              competition project, using original assets and copy.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-data text-xs uppercase tracking-wider text-gold">{col.title}</p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-sand/75 hover:text-sand">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ledger-lines mt-12 h-6" />
        <div className="flex flex-col gap-2 pt-6 text-xs text-sand/60 md:flex-row md:items-center md:justify-between">
          <p>Educational project for a GMCC case competition. Not affiliated with or endorsed by MicroLoan Foundation.</p>
          <p className="max-w-md">{dataCurrencyNote}</p>
        </div>
      </div>
    </footer>
  );
}