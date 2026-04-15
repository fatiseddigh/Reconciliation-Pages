"use client";

import { useReconciliation } from "@/features/reconciliation/hooks/use-reconciliation";

export default function LetKnowPayPage() {
  const { data, isLoading, isError } = useReconciliation("letknowpay", {
    page: 1,
    limit: 50,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div>
      <h1>LetKnowPay</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
