"use client";

import { usePathname, useRouter } from "next/navigation";

import { LOCALES, replaceLocale, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function selectLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;

    const response = await fetch("/api/locale", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ locale: nextLocale }),
    });

    if (!response.ok) return;
    router.push(`${replaceLocale(pathname, nextLocale)}${window.location.search}`);
  }

  return (
    <div
      className="flex items-center rounded-full bg-white/70 p-0.5 ring-1 ring-black/8"
      role="group"
      aria-label={label}
    >
      {LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => selectLocale(option)}
          aria-current={option === locale ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition",
            option === locale
              ? "bg-[var(--ink)] text-white"
              : "text-[var(--ink-muted)] hover:text-[var(--ink)]",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
