"use client";

import Link from "next/link";

import { PaperPlaneIcon } from "@/components/icons";
import { replaceLocale, type Locale } from "@/lib/i18n/config";
import type { SiteContent } from "@/types/content";

function localizedHref(href: string, locale: Locale) {
  if (href.startsWith("mailto:") || href.startsWith("#")) return href;
  return replaceLocale(href, locale);
}

export function Footer({
  locale,
  cta,
  content,
}: {
  locale: Locale;
  cta: SiteContent["cta"];
  content: SiteContent["footer"];
}) {
  return (
    <>
      <section className="px-4 pb-12 md:px-6">
        <div className="mx-auto flex max-w-[760px] items-center justify-between gap-4 rounded-3xl bg-[var(--surface-dark)] py-3 pl-5 pr-3 text-white sm:rounded-full sm:pl-6">
          <span className="text-[14px] font-medium md:text-[16px]">{cta.title}</span>
          <a href={cta.button.href} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white py-2.5 pl-4 pr-5 text-[14px] font-medium text-[var(--ink)] transition hover:opacity-90">
            <PaperPlaneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{cta.button.label}</span>
          </a>
        </div>
      </section>

      <footer className="bg-[var(--surface-dark)] px-6 pb-8 pt-16 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-[22px] font-semibold">{content.title}</h3>
            <p className="mt-3 max-w-[360px] text-[14.5px] text-white/60">{content.body}</p>
            <form className="mt-6 flex max-w-[360px] items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5" onSubmit={(event) => event.preventDefault()}>
              <input type="email" aria-label={content.emailPlaceholder} placeholder={content.emailPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 py-2 text-[14px] placeholder:text-white/40 focus:outline-none" />
              <button type="submit" className="rounded-full bg-white px-5 py-2 text-[14px] font-medium text-[var(--ink)] transition hover:opacity-90">
                {content.submitLabel}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 md:justify-self-end md:gap-10">
            <nav>
              <p className="mb-3 text-[12px] uppercase tracking-wider text-white/40">{content.siteLabel}</p>
              <ul className="space-y-3 text-[15px]">
                {content.links.map((link) => (
                  <li key={link.label}>
                    <Link href={localizedHref(link.href, locale)} className="text-white/80 transition hover:text-white">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <p className="mb-3 text-[12px] uppercase tracking-wider text-white/40">{content.legalLabel}</p>
              <ul className="space-y-3 text-[15px]">
                {content.legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={localizedHref(link.href, locale)} className="text-white/80 transition hover:text-white">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-[1200px] flex-wrap items-center gap-4 border-t border-white/10 pt-6 text-[13px] text-white/50">
          <span className="font-semibold text-white/80">{content.brand}</span>
          <span>{content.year}</span>
          <span>{content.rightsText}</span>
        </div>
      </footer>
    </>
  );
}
