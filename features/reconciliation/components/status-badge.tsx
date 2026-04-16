type Status = "matched" | "unmatched" | "pending";

const statusStyles: Record<Status, string> = {
  matched: "bg-green-100 text-green-700",
  unmatched: "bg-red-100 text-red-700",
  pending: "bg-yellow-100 text-yellow-700",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`px-2 py-1 text-xs rounded-md font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
