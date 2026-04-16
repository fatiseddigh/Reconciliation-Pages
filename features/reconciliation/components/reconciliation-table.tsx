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
      render: (value, row) => (
        <span>
          {row.currency} {value as number}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (value) => (
        <StatusBadge status={value as ReconciliationItem["status"]} />
      ),
    },
    {
      key: "createdAt",
      header: "Date",
      render: (value) => new Date(value as Date).toLocaleDateString(),
    },
  ];

  return <Table data={data} columns={columns} isLoading={isLoading} />;
}
