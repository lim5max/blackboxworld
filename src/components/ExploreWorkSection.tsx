import Image from "next/image";

import { ChevronRightIcon } from "@/components/icons";
import type { SiteContent } from "@/types/content";

export function ExploreWorkSection({ content }: { content: SiteContent["exploreWork"] }) {
  return (
    <section id="work" className="px-6 py-20">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="font-semibold tracking-tight text-[var(--ink)]" style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.1 }}>{content.title}</h2>
        <p className="mx-auto mt-4 max-w-[460px] text-[16px] text-[var(--ink-muted)]">{content.body}</p>
        <a href={content.cta.href} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] py-3 pl-4 pr-5 text-[15px] font-medium text-white transition hover:opacity-90">
          <ChevronRightIcon className="h-4 w-4" />{content.cta.label}
        </a>
      </div>
      <div className="mx-auto mt-16 grid max-w-[1200px] gap-6 md:grid-cols-3">
        {content.cards.map((card) => (
          <article key={card.id} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--surface-muted)]">
              <Image src={card.image} alt={card.title} fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover transition group-hover:scale-[1.02]" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span aria-hidden className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[var(--ink)] text-[12px] font-semibold text-white">{card.title.charAt(0)}</span>
              <div><h3 className="text-[15px] font-semibold text-[var(--ink)]">{card.title}</h3><p className="text-[13px] text-[var(--ink-muted)]">{card.subtitle}</p></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
