"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

const ourWork = [
  { href: "/about", label: "About MLF" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/where-we-work", label: "Where we work" },
  { href: "/our-impact", label: "Our impact" },
  { href: "/financials", label: "Financials" },
  { href: "/risk-management", label: "Risk management" },
  { href: "/digital-finance", label: "Digital finance" },
  { href: "/agriculture-climate", label: "Agriculture & climate" },
];

const more = [
  { href: "/partners", label: "Fundraising & partners" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

function Dropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  const pathname = usePathname();
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 py-2 text-sm font-semibold text-sand/90 hover:text-sand">
        {label}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="invisible absolute left-0 top-full z-40 min-w-[220px] rounded-xl border border-line bg-white p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-sand hover:text-ink",
              pathname === item.href && "bg-sand text-clay"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-baobab-dark/40 bg-baobab/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-sand">
          MicroLoan<span className="text-gold"> Foundation</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Dropdown label="Our work" items={ourWork} />
          <Dropdown label="More" items={more} />
          <Link href="/solution" className="text-sm font-semibold text-gold hover:text-sand">
            Solution
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-sand/90 hover:text-sand">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/solution" variant="primary">
            Anchor & Amplify
          </ButtonLink>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-sand lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-baobab-dark/40 bg-baobab px-6 py-4 lg:hidden">
          <MobileGroup title="Our work" items={ourWork} onNavigate={() => setOpen(false)} />
          <MobileGroup title="More" items={more} onNavigate={() => setOpen(false)} />
          <MobileGroup title="GMCC solution" items={[{ href: "/solution", label: "Anchor & Amplify" }]} onNavigate={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}

function MobileGroup({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: { href: string; label: string }[];
  onNavigate: () => void;
}) {
  return (
    <div className="mb-4">
      <p className="mb-2 font-data text-xs uppercase tracking-wider text-gold">{title}</p>
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="rounded-lg px-2 py-2 text-sm text-sand/90 hover:bg-baobab-dark"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}