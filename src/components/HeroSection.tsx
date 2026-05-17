import { hero } from "@/lib/content";
import { ChevronRightIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section id="landing" className="relative pt-32 md:pt-36 pb-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-sm text-[13px]">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
          <span className="text-[var(--ink-muted)]">{hero.badge.prefix}</span>
          <span className="font-semibold text-[var(--ink)]">{hero.badge.emphasis}</span>
          <span className="text-[var(--ink-muted)]">{hero.badge.suffix}</span>
        </div>

        <h1
          className="mt-6 font-bold tracking-tight text-[var(--ink)] max-w-[1050px]"
          style={{ fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.05 }}
        >
          {hero.title}
        </h1>

        <p className="mt-6 max-w-[560px] text-[var(--ink-muted)] text-[17px] leading-relaxed">
          {hero.body}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-[var(--ink)] text-white text-[15px] font-medium hover:opacity-90 transition"
          >
            <ChevronRightIcon className="w-4 h-4" />
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center px-5 py-3 rounded-full bg-white border border-black/10 text-[var(--ink)] text-[15px] font-medium hover:bg-black/5 transition"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
