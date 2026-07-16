import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Locale } from "@/lib/i18n/config";
import type { SiteContent } from "@/types/content";

export function LegalPage({
  locale,
  site,
  title,
  children,
}: {
  locale: Locale;
  site: SiteContent;
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar locale={locale} content={site.nav} />
      <main className="flex-1 px-5 pb-16 pt-32 md:px-6 md:pt-36">
        <article className="mx-auto max-w-[820px]">
          <h1 className="font-semibold tracking-tight text-[var(--ink)]" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1 }}>{title}</h1>
          <p className="mt-3 text-[14px] text-[var(--ink-muted)]">{site.legal.updatedLabel}: {site.legal.updatedDate}</p>
          <div className="mt-10 space-y-6 text-[15.5px] leading-relaxed text-[var(--ink)] [&_a]:text-[var(--ink)] [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-[17px] [&_h3]:font-semibold [&_p]:text-[var(--ink-soft)] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-[var(--ink-soft)]">{children}</div>
        </article>
      </main>
      <Footer locale={locale} cta={site.cta} content={site.footer} />
    </>
  );
}
