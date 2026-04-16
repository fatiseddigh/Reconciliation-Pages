"use client";

import { Column } from "@/shared/components/table/types";
import { ReconciliationItem } from "../types/types";
import { StatusBadge } from "./status-badge";
import { Table } from "@/shared/components/table/tables";

interface Props {
  data: ReconciliationItem[];
  isLoading?: boolean;
}

export function ReconciliationTable({ data, isLoading }: Props) {
  const columns: Column<ReconciliationItem>[] = [
    {
      key: "reference",
      header: "Reference",
    },
    {
      key: "amount",
      header: "Amount",
      render: (_, row) => (
        <span>
          {row.currency} {row.amount}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (_, row) => <StatusBadge status={row.status} />,
    },

    // only  withdrawal
    {
      key: "method",
      header: "Method",
      render: (_, row) => row.method || "-",
    },
    {
      key: "approvedBy",
      header: "Approved By",
      render: (_, row) => row.approvedBy || "-",
    },

    {
      key: "createdAt",
      header: "Date",
      render: (_, row) => new Date(row.createdAt).toLocaleDateString(),
    },
  ];

  return <Table data={data} columns={columns} isLoading={isLoading} />;
}
