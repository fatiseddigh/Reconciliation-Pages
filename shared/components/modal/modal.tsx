"use client";

import { ReactNode } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export function Modal({ open, onClose, title, children }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* content */}
      <div className="relative bg-white rounded-xl p-6 w-full max-w-lg shadow-lg">
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}

        <div>{children}</div>

        <button onClick={onClose} className="mt-4 px-4 py-2 border rounded">
          Close
        </button>
      </div>
    </div>
  );
}
