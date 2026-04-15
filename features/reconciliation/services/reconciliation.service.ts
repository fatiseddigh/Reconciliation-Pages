import { api } from "@/shared/lib/api";

export const getLetKnowPay = async (params: {
  page: number;
  limit: number;
  search?: string;
  status?: string;
}) => {
  const { data } = await api.get("/reconciliation/letknowpay", {
    params,
  });
  return data;
};

export const getWithdrawals = async (params: {
  page: number;
  limit: number;
  search?: string;
  status?: string;
}) => {
  const { data } = await api.get("/reconciliation/letknowpay/withdrawal", {
    params,
  });
  return data;
};
