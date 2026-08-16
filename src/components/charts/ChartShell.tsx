"use client";

import { SourceNote } from "@/components/ui/Card";

export function ChartCard({
  title,
  note,
  children,
  height = 280,
  showSource = true,
  table,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
  height?: number;
  showSource?: boolean;
  table?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white/70 p-6">
      <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
      {note && <p className="mt-1 text-sm text-ink/60">{note}</p>}
      <div style={{ width: "100%", height }} className="mt-4" role="img" aria-label={`${title}${note ? " — " + note : ""}`}>
        {children}
      </div>
      {table}
      {showSource && <SourceNote />}
    </div>
  );
}

export const CHART_COLORS = {
  baobab: "#1f4b3f",
  clay: "#c1622d",
  gold: "#e2a13c",
  dust: "#6c7a72",
  line: "#ded2b8",
};