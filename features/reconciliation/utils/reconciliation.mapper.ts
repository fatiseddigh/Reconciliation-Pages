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
    id: String(item.crm_id),
    amount: item.gateway_amount,
    currency: "USD",
    status: mapStatus(item.recon_status),
    reference: item.payment_id,
    createdAt: new Date(item.deal_time),
  };
};

// Response mapper
export const mapReconciliationResponse = (
  response: ReconciliationApiResponse,
): ReconciliationResponse => {
  return {
    items: response.rows.map(mapReconciliationItem),
    total: response.total,
    page: response.page,
    limit: response.limit,
    totalPages: response.total_pages,
  };
};

// helper
const mapStatus = (status: string): "matched" | "unmatched" | "pending" => {
  switch (status) {
    case "FULL_MATCH":
      return "matched";
    case "NO_MATCH":
      return "unmatched";
    default:
      return "pending";
  }
};
