import { ReconciliationItem } from "../types/types";

interface Props {
  item: ReconciliationItem;
}
const statusConfig = {
  matched: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  unmatched: "bg-red-100 text-red-700",
} as const;
export function ReconciliationDetails({ item }: Props) {
  return (
    <div className="space-y-6 text-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-black">
          Transaction Details
        </h2>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            statusConfig[item.status]
          }`}
        >
          {item.status}
        </span>
      </div>

      {/* Main Info */}
      <div className="grid grid-cols-2 gap-4">
        <Info label="Reference" value={item.reference as string} />
        <Info label="Amount" value={`${item.currency} ${item.amount}`} />
        <Info label="Date" value={new Date(item.createdAt).toLocaleString()} />
        {item.method && <Info label="Method" value={item.method} />}
      </div>

      {/* Divider */}
      {item.approvedBy && (
        <div className="border-t pt-4">
          <h3 className="text-xs font-semibold text-gray-500 mb-2">Approval</h3>
          <Info label="Approved By" value={item.approvedBy} />
        </div>
      )}
    </div>
  );
}

/* Reusable Component */
function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500 text-xs">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}
