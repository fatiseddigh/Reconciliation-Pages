import { ReactNode } from "react";

export interface Column<T> {
  key: keyof T;
  header: string;

  // optional custom render
  render?: (value: T[keyof T], row: T) => ReactNode;

  className?: string;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  isLoading?: boolean;
  emptyMessage?: string;
}
