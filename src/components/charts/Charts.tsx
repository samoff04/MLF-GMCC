"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { CHART_COLORS } from "./ChartShell";

const tooltipStyle = {
  borderRadius: 12,
  border: `1px solid ${CHART_COLORS.line}`,
  fontSize: 13,
};

export function SimpleBarChart({
  data,
  dataKey,
  xKey,
  color = CHART_COLORS.baobab,
  unit,
}: {
  data: Record<string, string | number>[];
  dataKey: string;
  xKey: string;
  color?: string;
  unit?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <CartesianGrid stroke={CHART_COLORS.line} vertical={false} />
        <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "#6c7a72" }} axisLine={{ stroke: CHART_COLORS.line }} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "#6c7a72" }} axisLine={false} tickLine={false} unit={unit} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey={dataKey} fill={color} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function GroupedBarChart({
  data,
  bars,
  xKey,
}: {
  data: Record<string, string | number>[];
  bars: { key: string; color: string; label: string }[];
  xKey: string;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <CartesianGrid stroke={CHART_COLORS.line} vertical={false} />
        <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "#6c7a72" }} axisLine={{ stroke: CHART_COLORS.line }} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "#6c7a72" }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        {bars.map((b) => (
          <Bar key={b.key} dataKey={b.key} name={b.label} fill={b.color} radius={[6, 6, 0, 0]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export function SimpleLineChart({
  data,
  lines,
  xKey,
}: {
  data: Record<string, string | number>[];
  lines: { key: string; color: string; label: string }[];
  xKey: string;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <CartesianGrid stroke={CHART_COLORS.line} vertical={false} />
        <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "#6c7a72" }} axisLine={{ stroke: CHART_COLORS.line }} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "#6c7a72" }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        {lines.map((l) => (
          <Line key={l.key} type="monotone" dataKey={l.key} name={l.label} stroke={l.color} strokeWidth={2.5} dot={{ r: 4 }} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export function SimplePieChart({
  data,
  colors,
}: {
  data: { name: string; value: number }[];
  colors?: string[];
}) {
  const palette = colors ?? [CHART_COLORS.baobab, CHART_COLORS.clay, CHART_COLORS.gold, CHART_COLORS.dust];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={55} outerRadius={95} paddingAngle={2}>
          {data.map((_, i) => (
            <Cell key={i} fill={palette[i % palette.length]} />
          ))}
        </Pie>
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Tooltip contentStyle={tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function RiskRadarChart({
  data,
}: {
  data: { subject: string; score: number; fullMark: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data} outerRadius="75%">
        <PolarGrid stroke={CHART_COLORS.line} />
        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#6c7a72" }} />
        <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fontSize: 10, fill: "#6c7a72" }} />
        <Radar name="Risk level" dataKey="score" stroke={CHART_COLORS.clay} fill={CHART_COLORS.clay} fillOpacity={0.35} />
        <Tooltip contentStyle={tooltipStyle} />
      </RadarChart>
    </ResponsiveContainer>
  );
}