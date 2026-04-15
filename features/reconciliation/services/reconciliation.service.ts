import { api } from "@/shared/lib/api";
import {
  ReconciliationApiResponse,
  ReconciliationQueryParams,
} from "../types/types";

//  LetKnowPay
export const fetchLetKnowPay = async (
  params: ReconciliationQueryParams,
): Promise<ReconciliationApiResponse> => {
  const { data } = await api.get<ReconciliationApiResponse>(
    "/reconciliation/letknowpay",
    {
      params,
    },
  );

  return data;
};

//  Withdrawal
export const fetchWithdrawals = async (
  params: ReconciliationQueryParams,
): Promise<ReconciliationApiResponse> => {
  const { data } = await api.get<ReconciliationApiResponse>(
    "/reconciliation/letknowpay/withdrawal",
    {
      params,
    },
  );

  return data;
};
