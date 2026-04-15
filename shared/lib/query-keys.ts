import { ReconciliationQueryParams } from "@/features/reconciliation/types/types";

export const queryKeys = {
  reconciliation: (
    type: "letknowpay" | "withdrawal",
    params: ReconciliationQueryParams,
  ) => ["reconciliation", type, JSON.stringify(params)] as const,
};
