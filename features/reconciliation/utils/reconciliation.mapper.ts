import {
  ReconciliationApiItem,
  ReconciliationApiResponse,
  ReconciliationItem,
  ReconciliationResponse,
} from "../types/types";

// Item mapper
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

// Response mapper
export const mapReconciliationResponse = (
  response: ReconciliationApiResponse,
): ReconciliationResponse => {
  return {
    items: response.data.map(mapReconciliationItem),
    total: response.total,
    page: response.page,
    limit: response.limit,
  };
};

// helper
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
