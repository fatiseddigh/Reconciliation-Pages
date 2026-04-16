"use client";

import { useState, useEffect } from "react";

interface Props {
  onChange: (filters: { search?: string; status?: string }) => void;
}

export function ReconciliationFilters({ onChange }: Props) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // 🔥 debounce
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange({
        search: search || undefined,
        status: status || undefined,
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, status, onChange]);

  return (
    <div className="flex gap-4">
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-lg px-3 py-2 w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📌 Status */}
      <select
        className="border rounded-lg px-3 py-2 bg-black"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="matched">Matched</option>
        <option value="unmatched">Unmatched</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}
