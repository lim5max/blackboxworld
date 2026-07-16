import Image from "next/image";

import type { SiteContent } from "@/types/content";

export function LogosMarquee({ content }: { content: SiteContent["logos"] }) {
  const items = [...content.items, ...content.items, ...content.items];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center text-[15px] text-[var(--ink-muted)]">{content.title}</p>
      </div>
      <div className="marquee-mask mt-10 overflow-hidden">
        <div className="flex items-center gap-16 opacity-40 animate-marquee" style={{ ["--marquee-duration" as string]: "45s" }}>
          {items.map((logo, index) => (
            <Image key={`${logo.alt}-${index}`} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-7 w-auto shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
}
