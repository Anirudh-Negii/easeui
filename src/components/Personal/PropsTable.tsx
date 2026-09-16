interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-(--border-color) bg-(--surface) shadow-(--shadow-soft)">
      <table className="w-full border-collapse">
        <thead className="bg-(--surface-alt)">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.14em] text-(--muted-text)">
              Prop
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.14em] text-(--muted-text)">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.14em] text-(--muted-text)">
              Default
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.14em] text-(--muted-text)">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-(--border-color)">
          {data.map((row, i) => (
            <tr key={i} className="transition-colors hover:bg-(--accent-soft)/60">
              <td className="px-4 py-3 text-sm font-mono font-semibold text-indigo-600 dark:text-indigo-300">
                {row.prop}
              </td>
              <td className="px-4 py-3 text-sm font-mono text-(--muted-strong)">
                {row.type}
              </td>
              <td className="px-4 py-3 text-sm font-mono text-(--muted-text)">
                {row.default}
              </td>
              <td className="px-4 py-3 text-sm leading-6 text-(--text-color)">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
