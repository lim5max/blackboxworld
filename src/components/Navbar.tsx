"use client";

import Link from "next/link";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { replaceLocale, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import type { NavContent } from "@/types/content";

function localizedHref(href: string, locale: Locale) {
  if (href.startsWith("mailto:") || href.startsWith("#")) return href;
  return replaceLocale(href, locale);
}

export function Navbar({
  locale,
  content,
}: {
  locale: Locale;
  content: NavContent;
}) {
  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3 md:top-4 md:px-4">
      <nav
        className={cn(
          "flex max-w-full items-center gap-1.5 rounded-full p-1.5 pl-2",
          "bg-[rgba(242,242,242,0.84)] backdrop-blur-xl",
          "border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.05)]",
        )}
      >
        <Link href={`/${locale}`} className="flex items-center gap-2 px-1 py-1 sm:pr-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--surface-dark)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.7.5 1 1.3 1 2.1V18h6v-1.2c0-.8.3-1.6 1-2.1A7 7 0 0 0 12 2z" />
            </svg>
          </span>
          <span className="hidden text-[15px] font-semibold text-[var(--ink)] sm:inline">
            BlackBoxWorld
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 text-[14px] text-[var(--ink)] md:flex">
          {content.links.map((link) => (
            <li key={link.label}>
              <Link href={localizedHref(link.href, locale)} className="rounded-full px-3 py-2 transition hover:bg-black/5">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <LanguageSwitcher locale={locale} label={content.languageLabel} />

        <a
          href={content.cta.href}
          className="ml-0.5 hidden items-center rounded-full bg-[var(--ink)] px-4 py-2 text-[14px] font-medium text-white transition hover:opacity-90 sm:inline-flex"
        >
          {content.cta.label}
        </a>
      </nav>
    </header>
  );
}
