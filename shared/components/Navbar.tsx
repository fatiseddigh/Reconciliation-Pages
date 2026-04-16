"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/20 bg-background/90 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold text-foreground"
        >
          <span>reconciliation</span>
        </Link>

        <div className="flex items-center gap-3">
          <>
            <Link href="/reconciliation/withdrawal">
              <span>withdrawal</span>
            </Link>
            <Link href="/reconciliation/letknowpay">
              <span className="px-4">letknowpay</span>
            </Link>
          </>
        </div>
      </div>
    </nav>
  );
}
