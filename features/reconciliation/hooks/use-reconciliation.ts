import { useQuery } from "@tanstack/react-query";
import {
  getLetKnowPay,
  getWithdrawals,
} from "../services/reconciliation.service";

export const useReconciliation = (
  type: "letknowpay" | "withdrawal",
  params: {
    page: number;
    limit: number;
    search?: string;
    status?: string;
  },
) => {
  return useQuery({
    queryKey: ["reconciliation", type, params],
    queryFn: () =>
      type === "letknowpay" ? getLetKnowPay(params) : getWithdrawals(params),
  });
};
