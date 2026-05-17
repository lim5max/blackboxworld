import Image from "next/image";
import { exploreWork } from "@/lib/content";
import { ChevronRightIcon } from "@/components/icons";

export function ExploreWorkSection() {
  return (
    <section id="why" className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2
          className="font-semibold tracking-tight text-[var(--ink)]"
          style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.1 }}
        >
          {exploreWork.title}
        </h2>
        <p className="mt-4 text-[16px] text-[var(--ink-muted)] max-w-[420px] mx-auto">
          {exploreWork.body}
        </p>
        <a
          href={exploreWork.cta.href}
          className="mt-6 inline-flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-[var(--ink)] text-white text-[15px] font-medium hover:opacity-90 transition"
        >
          <ChevronRightIcon className="w-4 h-4" />
          {exploreWork.cta.label}
        </a>
      </div>

      <div className="mt-16 max-w-[1200px] mx-auto grid gap-6 md:grid-cols-3">
        {exploreWork.cards.map((card) => (
          <article key={card.id} className="group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--surface-muted)] relative">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover transition group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span
                aria-hidden
                className="grid place-items-center w-8 h-8 rounded-lg bg-[var(--ink)] text-white text-[12px] font-semibold tracking-tight shrink-0"
              >
                {card.title.charAt(0)}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-[var(--ink)]">
                  {card.title}
                </h3>
                <p className="text-[13px] text-[var(--ink-muted)]">
                  {card.subtitle}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
