import { useQuery } from "@tanstack/react-query";
import {
  fetchLetKnowPay,
  fetchWithdrawals,
} from "../services/reconciliation.service";
import { ReconciliationQueryParams } from "../types/types";
import { mapReconciliationResponse } from "../utils/reconciliation.mapper";
import { queryKeys } from "@/shared/lib/query-keys";
import { normalizeReconciliationParams } from "../utils/reconciliation.query";

type ReconciliationType = "letknowpay" | "withdrawal";

export const useReconciliation = (
  type: ReconciliationType,
  params: ReconciliationQueryParams,
) => {
  const normalizedParams = normalizeReconciliationParams(params);

  return useQuery({
    queryKey: queryKeys.reconciliation(type, normalizedParams),

    queryFn: async () => {
      try {
        const data =
          type === "letknowpay"
            ? await fetchLetKnowPay(normalizedParams)
            : await fetchWithdrawals(normalizedParams);

        console.log("RAW API DATA:", data);

        const mapped = mapReconciliationResponse(data);

        console.log("MAPPED DATA:", mapped);

        return mapped;
      } catch (error) {
        console.error("QUERY ERROR:", error);
        throw error;
      }
    },

    placeholderData: (previousData) => previousData, // for pagination
    staleTime: 1000 * 30, // 30s cache
  });
};
