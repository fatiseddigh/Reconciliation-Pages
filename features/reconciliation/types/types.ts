// Raw API Response
export interface ReconciliationApiResponse {
  data: ReconciliationApiItem[];
  total: number;
  page: number;
  limit: number;
}

// Raw Item ( API)
export interface ReconciliationApiItem {
  id: string;
  amount: number;
  currency: string;
  status: string;
  reference: string;
  created_at: string;
  updated_at?: string;
}

// UI Types
export interface ReconciliationItem {
  id: string;
  amount: number;
  currency: string;
  status: "matched" | "unmatched" | "pending";
  reference: string;
  createdAt: Date;
}
