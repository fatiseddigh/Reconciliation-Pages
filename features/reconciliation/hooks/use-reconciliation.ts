import { useQuery } from "@tanstack/react-query";
import {
  fetchLetKnowPay,
  fetchWithdrawals,
} from "../services/reconciliation.service";
import { ReconciliationQueryParams } from "../types/types";
import { mapReconciliationResponse } from "../utils/reconciliation.mapper";
import { queryKeys } from "@/shared/lib/query-keys";
import { normalizeReconciliationParams } from "../utils/reconciliation.query";
import { useMemo } from "react";

type ReconciliationType = "letknowpay" | "withdrawal";

export const useReconciliation = (
  type: ReconciliationType,
  params: ReconciliationQueryParams,
) => {
  const normalizedParams = useMemo(
    () => normalizeReconciliationParams(params),
    [params],
  );

  return useQuery({
    queryKey: ["reconciliation", type, normalizedParams],

    queryFn: async () => {
      const data =
        type === "letknowpay"
          ? await fetchLetKnowPay(normalizedParams)
          : await fetchWithdrawals(normalizedParams);

      return mapReconciliationResponse(data);
    },

    placeholderData: (prev) => prev,
  });
};
