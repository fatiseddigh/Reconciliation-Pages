"use client";

import {
  ReconciliationTable,
  useReconciliation,
} from "@/features/reconciliation";

export default function LetKnowPayPage() {
  const { data, isLoading, isError } = useReconciliation("letknowpay", {
    page: 1,
    limit: 10,
  });

  if (isError) {
    return <div className="p-4 text-red-500">Something went wrong</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">LetKnowPay</h1>

      <ReconciliationTable data={data?.items || []} isLoading={isLoading} />
    </div>
  );
}
