import Image from "next/image";
import { workCarousel } from "@/lib/content";

export function WorkCarousel() {
  // Duplicate items twice for seamless marquee
  const items = [...workCarousel, ...workCarousel];
  return (
    <section className="py-10 overflow-hidden">
      <div className="marquee-mask">
        <div
          className="flex gap-6 animate-marquee"
          style={{ ["--marquee-duration" as string]: "60s" }}
        >
          {items.map((item, idx) => (
            <article
              key={`${item.id}-${idx}`}
              className="shrink-0"
              style={{
                width: item.variant === "phone" ? 250 : 560,
              }}
            >
              <div
                className="relative overflow-hidden rounded-2xl bg-[var(--surface-muted)]"
                style={{ aspectRatio: item.variant === "phone" ? "250/550" : "560/350" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 560px, 250px"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Image
                  src={item.logo}
                  alt=""
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded"
                />
                <span className="text-[14px] font-medium text-[var(--ink)]">
                  {item.title}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
