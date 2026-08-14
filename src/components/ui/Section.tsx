import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  id,
  tone = "sand",
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "sand" | "baobab" | "white" | "sandDeep";
}) {
  const toneClass = {
    sand: "bg-sand text-ink",
    baobab: "bg-baobab text-sand",
    white: "bg-white text-ink",
    sandDeep: "bg-sand-deep text-ink",
  }[tone];
  return (
    <section id={id} className={cn("py-20 md:py-28", toneClass, className)}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={cn("font-data text-xs uppercase tracking-[0.2em]", light ? "text-gold" : "text-clay")}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={cn("mt-3 text-balance font-display text-3xl font-medium leading-tight md:text-5xl", light ? "text-sand" : "text-ink")}>
        {title}
      </h2>
      {lede && <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-sand/80" : "text-ink/70")}>{lede}</p>}
    </div>
  );
}