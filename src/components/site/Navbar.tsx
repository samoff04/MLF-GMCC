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
];

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  const pathname = usePathname();

  const isActive = items.some(
    (item) =>
      pathname === item.href ||
      pathname.startsWith(`${item.href}/`)
  );

  return (
    <div className="group relative">
      <button
        type="button"
        className={cn(
          "relative flex items-center gap-1 py-2 text-sm font-semibold",
          "text-sand/90 transition-all duration-200",
          "hover:-translate-y-[1px] hover:text-gold",
          isActive && "text-gold"
        )}
      >
        {label}

        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />

        <span
          className={cn(
            "absolute bottom-0 left-0 h-[2px] rounded-full bg-gold transition-all duration-300",
            isActive ? "w-full" : "w-0 group-hover:w-full"
          )}
        />
      </button>

      <div
        className="
          invisible absolute left-0 top-full z-40
          min-w-[230px] translate-y-2
          rounded-xl border border-line bg-white p-2
          opacity-0 shadow-xl
          transition-all duration-200
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        {items.map((item) => {
          const active =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group/item relative block overflow-hidden rounded-lg",
                "px-3 py-2.5 text-sm transition-all duration-200",
                "hover:translate-x-1 hover:bg-sand hover:text-ink",
                active
                  ? "bg-sand text-clay"
                  : "text-ink/75"
              )}
            >
              <span className="relative z-10">
                {item.label}
              </span>

              <span
                className="
                  absolute inset-y-0 left-0 w-0
                  bg-gold/20 transition-all duration-200
                  group-hover/item:w-full
                "
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isSolution = pathname === "/solution";
  const isContact = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 border-b border-baobab-dark/40 bg-baobab/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="
            group relative font-display text-xl font-semibold
            tracking-tight text-sand transition-all duration-200
            hover:-translate-y-[1px]
          "
        >
          MicroLoan
          <span className="text-gold transition-colors duration-200 group-hover:text-sand">
            {" "}Foundation
          </span>

          <span
            className="
              absolute -bottom-1 left-0 h-[1px] w-0
              bg-gold transition-all duration-300
              group-hover:w-full
            "
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">

          <Dropdown
            label="Our work"
            items={ourWork}
          />

          <Dropdown
            label="More"
            items={more}
          />

          {/* Solution */}
          <Link
            href="/solution"
            className={cn(
              "group relative py-2 text-sm font-semibold",
              "transition-all duration-200",
              "hover:-translate-y-[1px]",
              isSolution
                ? "text-gold"
                : "text-sand/90 hover:text-gold"
            )}
          >
            Solution

            <span
              className={cn(
                "absolute bottom-0 left-0 h-[2px]",
                "rounded-full bg-gold",
                "transition-all duration-300",
                isSolution
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              )}
            />
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={cn(
              "group relative py-2 text-sm font-semibold",
              "transition-all duration-200",
              "hover:-translate-y-[1px]",
              isContact
                ? "text-gold"
                : "text-sand/90 hover:text-gold"
            )}
          >
            Contact

            <span
              className={cn(
                "absolute bottom-0 left-0 h-[2px]",
                "rounded-full bg-gold",
                "transition-all duration-300",
                isContact
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              )}
            />
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <ButtonLink
            href="/solution"
            variant="primary"
            className="
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Anchor & Amplify
          </ButtonLink>
        </div>

        {/* Mobile Menu */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="
            rounded-lg p-2 text-sand
            transition-all duration-200
            hover:bg-baobab-dark hover:text-gold
            active:scale-95
            lg:hidden
          "
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div
          className="
            border-t border-baobab-dark/40
            bg-baobab px-6 py-5
            shadow-lg lg:hidden
          "
        >
          <MobileGroup
            title="Our work"
            items={ourWork}
            onNavigate={() => setOpen(false)}
          />

          <MobileGroup
            title="More"
            items={more}
            onNavigate={() => setOpen(false)}
          />

          <MobileGroup
            title="GMCC solution"
            items={[
              {
                href: "/solution",
                label: "Anchor & Amplify",
              },
            ]}
            onNavigate={() => setOpen(false)}
          />

          <MobileGroup
            title="Contact"
            items={[
              {
                href: "/contact",
                label: "Contact",
              },
            ]}
            onNavigate={() => setOpen(false)}
          />
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
  const pathname = usePathname();

  return (
    <div className="mb-5 last:mb-0">
      <p className="mb-2 font-data text-xs uppercase tracking-wider text-gold">
        {title}
      </p>

      <div className="flex flex-col gap-1">
        {items.map((item) => {
          const active =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm",
                "transition-all duration-200",
                "hover:translate-x-1",
                "hover:bg-baobab-dark hover:text-gold",
                active
                  ? "bg-baobab-dark text-gold"
                  : "text-sand/90"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}