import Image from "next/image";
import { logos } from "@/lib/content";

export function LogosMarquee() {
  const items = [...logos, ...logos, ...logos];
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[15px] text-[var(--ink-muted)]">
          Trusted by industry leaders
        </p>
      </div>
      <div className="mt-10 marquee-mask overflow-hidden">
        <div
          className="flex items-center gap-16 animate-marquee opacity-40"
          style={{ ["--marquee-duration" as string]: "45s" }}
        >
          {items.map((l, i) => (
            <Image
              key={`${l.alt}-${i}`}
              src={l.src}
              alt={l.alt}
              width={l.width}
              height={l.height}
              className="h-7 w-auto shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
