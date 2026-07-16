import { ChevronRightIcon } from "@/components/icons";
import type { SiteContent } from "@/types/content";

export function HeroSection({ content }: { content: SiteContent["hero"] }) {
  return (
    <section id="landing" className="relative px-6 pb-12 pt-32 md:pt-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-1.5 text-[13px] shadow-sm">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
          <span className="text-[var(--ink-muted)]">{content.badge.prefix}</span>
          <span className="font-semibold text-[var(--ink)]">{content.badge.emphasis}</span>
          <span className="text-[var(--ink-muted)]">{content.badge.suffix}</span>
        </div>

        <h1 className="mt-6 max-w-[1050px] font-bold tracking-tight text-[var(--ink)]" style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.05 }}>
          {content.title}
        </h1>
        <p className="mt-6 max-w-[600px] text-[17px] leading-relaxed text-[var(--ink-muted)]">{content.body}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={content.primaryCta.href} className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] py-3 pl-4 pr-5 text-[15px] font-medium text-white transition hover:opacity-90">
            <ChevronRightIcon className="h-4 w-4" />
            {content.primaryCta.label}
          </a>
          <a href={content.secondaryCta.href} className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-3 text-[15px] font-medium text-[var(--ink)] transition hover:bg-black/5">
            {content.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
