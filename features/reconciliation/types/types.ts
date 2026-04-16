// Raw API Response
export interface ReconciliationApiResponse {
  rows: ReconciliationApiItem[];
  total: number;
  page: number;
  limit: number;
  total_pages: number;
}

// Raw Item ( API)
export interface ReconciliationApiItem {
  crm_id: number;
  deal_id: number;
  mt5_id: number;
  crm_amount: number;
  gateway_amount: number;
  mt5_amount: number;
  email: string;
  payment_id: string;
  letknowpay_id: string;
  recon_status: string;
  deal_time: string;
  // optional fields
  crm_mt5_status?: string;
  comment?: string;
  description?: string;
}

// UI Types
export interface ReconciliationItem {
  id: string;
  reference: string | number | unknown;
  amount: number;
  currency: string;
  status: "matched" | "unmatched" | "pending";
  createdAt: Date;

  // optional (withdrawal)
  crm_mt5_status?: string;
  method?: string;
  approvedBy?: string;
}

// Query Params
export interface ReconciliationQueryParams {
  page: number;
  limit: number;
  search?: string;
  status?: string;
}

// UI Response
export interface ReconciliationResponse {
  items: ReconciliationItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
