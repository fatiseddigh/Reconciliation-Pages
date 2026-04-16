// import { ReconciliationQueryParams } from "@/features/reconciliation/types/types";
export interface ReconciliationQueryParams {
  page: number;
  limit: number;
  search?: string;
  status?: string;
}
export const queryKeys = {
  reconciliation: (
    type: "letknowpay" | "withdrawal",
    params: ReconciliationQueryParams,
  ) => ["reconciliation", type, JSON.stringify(params)] as const,
};
