export function DataTable({
  columns,
  rows,
  footnote,
}: {
  columns: string[];
  rows: string[][];
  footnote?: string;
}) {
  return (
    <details className="mt-4 rounded-xl border border-line bg-sand/60 p-3 text-sm">
      <summary className="cursor-pointer select-none font-data text-xs uppercase tracking-wider text-clay">
        View underlying data
      </summary>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line text-left text-ink/60">
              {columns.map((col) => (
                <th key={col} className="py-2 pr-4 font-data text-xs uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-line/60 last:border-0">
                {row.map((cell, j) => (
                  <td key={j} className="py-2 pr-4">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && <p className="mt-3 text-xs leading-relaxed text-ink/60">{footnote}</p>}
    </details>
  );
}