import Image from "next/image";
import { howWeWork } from "@/lib/content";
import { CodeIcon, CheckSquareIcon, PencilIcon, UserIcon } from "@/components/icons";

const ICONS = [CodeIcon, CheckSquareIcon, PencilIcon, UserIcon];

// Sticky-stack scroll: each card sticks at top with progressively larger offset,
// so the next card slides on top of the previous one as you scroll.
export function HowWeWorkSection() {
  const cards = howWeWork.cards;
  return (
    <section
      id="howwework"
      className="relative px-6"
      // Full gradient backdrop spanning whole section
      style={{
        background:
          "linear-gradient(180deg, #0e1024 0%, #4a2bff 25%, #bd2bff 55%, #ff5b50 80%, #ffd1a9 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto pt-24 pb-16 text-center">
        <h2
          className="font-semibold tracking-tight max-w-[920px] mx-auto"
          style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.15 }}
        >
          <span className="text-white">{howWeWork.title}</span>{" "}
          <span className="text-white/60">{howWeWork.subtitle}</span>
        </h2>
      </div>

      <div className="max-w-[1180px] mx-auto pb-32 space-y-6">
        {cards.map((card, i) => {
          const Icon = ICONS[i] ?? CodeIcon;
          return (
            <article
              key={card.tag}
              className="sticky rounded-3xl bg-white overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
              style={{
                top: `${100 + i * 24}px`,
                background:
                  "radial-gradient(120% 80% at 80% 60%, #ffe7e1 0%, #fff 60%)",
              }}
            >
              <div className="grid md:grid-cols-2 gap-6 p-8 md:p-12 min-h-[460px]">
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-lg bg-[var(--surface-muted)]">
                    <Icon className="w-4 h-4 text-[var(--ink-muted)]" />
                    <span className="text-[13px] text-[var(--ink-muted)]">
                      {card.tag}
                    </span>
                  </div>
                  <h3
                    className="mt-6 font-semibold tracking-tight text-[var(--ink)]"
                    style={{ fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.1 }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-5 text-[16px] leading-relaxed text-[var(--ink-muted)] max-w-[420px]">
                    {card.body}
                  </p>
                </div>
                <div className="relative min-h-[300px]">
                  {/* Decorative inner mock — uses one of the downloaded thumbnails per card */}
                  <Image
                    src={
                      [
                        "/images/zE1srbw5NnBTIC4p1Pm1mHUTk94.webp",
                        "/images/IT1W6gntZPGU1A4GevRerlK68.png",
                        "/images/MZqo6c6HSB1iiPbtffXjDbkcpc.png",
                        "/images/iSFUsF49xj8JjmIL3iiJffzrji8.png",
                      ][i] ?? "/images/zE1srbw5NnBTIC4p1Pm1mHUTk94.webp"
                    }
                    alt=""
                    fill
                    sizes="(min-width: 768px) 540px, 100vw"
                    className="object-contain object-right"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
