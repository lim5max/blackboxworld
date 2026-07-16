import Image from "next/image";

import { CheckSquareIcon, CodeIcon, PencilIcon, UserIcon } from "@/components/icons";
import type { SiteContent } from "@/types/content";

const icons = [CodeIcon, CheckSquareIcon, PencilIcon, UserIcon];
const cardImages = [
  "/images/zE1srbw5NnBTIC4p1Pm1mHUTk94.webp",
  "/images/IT1W6gntZPGU1A4GevRerlK68.png",
  "/images/MZqo6c6HSB1iiPbtffXjDbkcpc.png",
  "/images/iSFUsF49xj8JjmIL3iiJffzrji8.png",
];

export function HowWeWorkSection({ content }: { content: SiteContent["howWeWork"] }) {
  return (
    <section id="howwework" className="relative px-4 md:px-6" style={{ background: "linear-gradient(180deg, #0e1024 0%, #4a2bff 25%, #bd2bff 55%, #ff5b50 80%, #ffd1a9 100%)" }}>
      <div className="mx-auto max-w-[1200px] pb-16 pt-24 text-center">
        <h2 className="mx-auto max-w-[920px] font-semibold tracking-tight" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.15 }}>
          <span className="text-white">{content.title}</span>{" "}
          <span className="text-white/60">{content.subtitle}</span>
        </h2>
      </div>

      <div className="mx-auto max-w-[1180px] space-y-6 pb-32">
        {content.cards.map((card, index) => {
          const Icon = icons[index] ?? CodeIcon;
          return (
            <article key={card.tag} className="sticky overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]" style={{ top: `${92 + index * 20}px`, background: "radial-gradient(120% 80% at 80% 60%, #ffe7e1 0%, #fff 60%)" }}>
              <div className="grid min-h-[460px] gap-6 p-7 md:grid-cols-2 md:p-12">
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-2 self-start rounded-lg bg-[var(--surface-muted)] px-3 py-1.5">
                    <Icon className="h-4 w-4 text-[var(--ink-muted)]" />
                    <span className="text-[13px] text-[var(--ink-muted)]">{card.tag}</span>
                  </div>
                  <h3 className="mt-6 font-semibold tracking-tight text-[var(--ink)]" style={{ fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.1 }}>{card.title}</h3>
                  <p className="mt-5 max-w-[440px] text-[16px] leading-relaxed text-[var(--ink-muted)]">{card.body}</p>
                </div>
                <div className="relative min-h-[260px]">
                  <Image src={cardImages[index]} alt="" fill sizes="(min-width: 768px) 540px, 100vw" className="object-contain object-right" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
