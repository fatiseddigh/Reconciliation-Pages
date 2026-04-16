"use client";

import {
  ReconciliationFilters,
  ReconciliationTable,
  useReconciliation,
} from "@/features/reconciliation";
import { useState } from "react";

export default function LetKnowPayPage() {
  const [filters, setFilters] = useState<{
    search?: string;
    status?: string;
  }>({});
  const { data, isLoading, isError } = useReconciliation("letknowpay", {
    page: 1,
    limit: 10,
    ...filters,
  });
  const filteredData = data?.items.filter((item) => {
    const matchesSearch =
      !filters.search ||
      item.reference.toLowerCase().includes(filters.search.toLowerCase());

    const matchesStatus = !filters.status || item.status === filters.status;

    return matchesSearch && matchesStatus;
  });

  if (isError) {
    return <div className="p-4 text-red-500">Something went wrong</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">LetKnowPay</h1>
      <ReconciliationFilters onChange={setFilters} />
      <ReconciliationTable data={filteredData || []} isLoading={isLoading} />
    </div>
  );
}
