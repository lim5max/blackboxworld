"use client";

import Link from "next/link";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "flex items-center gap-6 rounded-full pl-2 pr-2 py-2",
          "bg-[rgba(242,242,242,0.8)] backdrop-blur-xl",
          "border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
        )}
      >
        <Link href="/" className="flex items-center gap-2 pl-2 pr-3 py-1">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-[var(--surface-dark)]">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.7.5 1 1.3 1 2.1V18h6v-1.2c0-.8.3-1.6 1-2.1A7 7 0 0 0 12 2z" />
            </svg>
          </span>
          <span className="font-semibold text-[15px] text-[var(--ink)]">
            BlackBoxWorld
          </span>
        </Link>
        <ul className="flex items-center gap-1 text-[14px] text-[var(--ink)]">
          {nav.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-full hover:bg-black/5 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={nav.cta.href}
              className="ml-1 inline-flex items-center px-4 py-2 rounded-full bg-[var(--ink)] text-white text-[14px] font-medium hover:opacity-90 transition"
            >
              {nav.cta.label}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
