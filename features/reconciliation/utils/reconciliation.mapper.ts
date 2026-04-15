import { ReconciliationApiItem, ReconciliationItem } from "../types/types";

export const mapReconciliationItem = (
  item: ReconciliationApiItem,
): ReconciliationItem => {
  return {
    id: item.id,
    amount: item.amount,
    currency: item.currency,
    status: mapStatus(item.status),
    reference: item.reference,
    createdAt: new Date(item.created_at),
  };
};

const mapStatus = (status: string): "matched" | "unmatched" | "pending" => {
  switch (status?.toLowerCase()) {
    case "matched":
      return "matched";
    case "unmatched":
      return "unmatched";
    default:
      return "pending";
  }
};
