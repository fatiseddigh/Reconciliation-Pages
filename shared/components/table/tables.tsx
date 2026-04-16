import { TableProps } from "./types";

export function Table<T>({
  data,
  columns,
  isLoading,
  emptyMessage = "No data found",
}: TableProps<T>) {
  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div className="p-4 text-gray-500">{emptyMessage}</div>;
  }

  return (
    <div className="overflow-auto border rounded-xl">
      <table className="min-w-full text-sm">
        <thead className="bg-blue-500 text-left">
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="p-3 font-medium">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-t hover:bg-blue-300 hover:text-black transition"
            >
              {columns.map((col) => {
                const value = row[col.key];

                return (
                  <td
                    key={String(col.key)}
                    className={`p-3 ${col.className || ""}`}
                  >
                    {col.render ? col.render(value, row) : String(value)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
