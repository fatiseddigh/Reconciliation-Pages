import { ReconciliationQueryParams } from "../types/types";

export const normalizeReconciliationParams = (
  params: ReconciliationQueryParams,
): ReconciliationQueryParams => {
  return {
    ...params,
    search: params.search || undefined,
    status: params.status || undefined,
  };
};
