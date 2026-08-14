import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-2xl border border-line bg-white/70 p-6 shadow-sm", className)}>
      {children}
    </div>
  );
}

export function StatCard({
  value,
  label,
  suffix,
  tone = "baobab",
}: {
  value: string;
  label: string;
  suffix?: string;
  tone?: "baobab" | "clay" | "gold";
}) {
  const toneClass = {
    baobab: "text-baobab",
    clay: "text-clay",
    gold: "text-gold",
  }[tone];
  return (
    <div className="rounded-2xl border border-line bg-white/70 p-6">
      <div className={cn("font-display text-4xl font-medium leading-none md:text-5xl", toneClass)}>
        {value}
        {suffix && <span className="ml-1 text-2xl align-top">{suffix}</span>}
      </div>
      <div className="mt-3 text-sm text-ink/70">{label}</div>
    </div>
  );
}

export function Badge({ children, tone = "baobab" }: { children: React.ReactNode; tone?: "baobab" | "clay" | "gold" | "dust" }) {
  const toneClass = {
    baobab: "bg-baobab/10 text-baobab",
    clay: "bg-clay/10 text-clay",
    gold: "bg-gold/15 text-gold",
    dust: "bg-dust/10 text-dust",
  }[tone];
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider font-data", toneClass)}>
      {children}
    </span>
  );
}

export function SourceNote({ children }: { children?: React.ReactNode }) {
  return (
    <p className="mt-3 font-data text-xs uppercase tracking-wider text-dust">
      {children ?? "Source: MicroLoan Foundation Annual Report & Financial Statements 2023."}
    </p>
  );
}