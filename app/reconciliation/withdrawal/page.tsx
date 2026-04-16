"use client";

import {
  ReconciliationFilters,
  ReconciliationTable,
  useReconciliation,
} from "@/features/reconciliation";
import { Pagination } from "@/shared/components/pagination/pagination";
import { useState, useMemo } from "react";

export default function WithdrawalPage() {
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState<{
    search?: string;
    status?: string;
  }>({});

  const queryParams = useMemo(
    () => ({
      page,
      limit: 10,
      ...filters,
    }),
    [page, filters],
  );

  const { data, isLoading, isError } = useReconciliation(
    "withdrawal",
    queryParams,
  );

  const filteredData = data?.items.filter((item) => {
    const matchesSearch =
      !filters.search ||
      String(item.reference)
        .toLowerCase()
        .includes(filters.search.toLowerCase());

    const matchesStatus = !filters.status || item.status === filters.status;

    return matchesSearch && matchesStatus;
  });

  const isFiltering = !!filters.search || !!filters.status;

  const paginatedData = isFiltering
    ? filteredData?.slice((page - 1) * 10, page * 10)
    : data?.items || [];

  const totalPages = isFiltering
    ? Math.ceil((filteredData?.length || 0) / 10)
    : data?.totalPages || 1;

  if (isError) {
    return <div className="p-4 text-red-500">Something went wrong</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Withdrawal</h1>

      <ReconciliationFilters
        onChange={(newFilters) => {
          setFilters((prev) => {
            const isSame =
              prev.search === newFilters.search &&
              prev.status === newFilters.status;

            if (isSame) return prev;

            setPage(1);
            return newFilters;
          });
        }}
      />

      <ReconciliationTable data={paginatedData || []} isLoading={isLoading} />

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
