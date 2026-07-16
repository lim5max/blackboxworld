import Image from "next/image";

import type { SiteContent } from "@/types/content";

export function TestimonialsSection({ content }: { content: SiteContent["testimonials"] }) {
  return (
    <section id="testimonials" className="bg-[var(--surface-muted)] py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="mx-auto max-w-[860px] font-semibold tracking-tight" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.15 }}>
          <span className="text-[var(--ink)]">{content.title}</span>{" "}<span className="text-[var(--ink-muted)]">{content.subtitle}</span>
        </h2>
      </div>
      <div className="marquee-mask mt-12 overflow-x-auto md:overflow-hidden">
        <div className="flex gap-5 px-6 md:px-12">
          {content.items.map((item) => (
            <article key={item.name} className="flex min-h-[300px] w-[min(88vw,440px)] shrink-0 flex-col justify-between rounded-3xl bg-white p-7">
              <p className="text-[15px] leading-relaxed text-[var(--ink)]">{item.body}</p>
              <footer className="mt-6 flex items-center justify-between gap-4"><div className="flex items-center gap-3"><Image src={item.avatar} alt={item.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" /><div><p className="text-[14.5px] font-semibold text-[var(--ink)]">{item.name}</p><p className="text-[12.5px] text-[var(--ink-muted)]">{item.role}</p></div></div><Image src={item.logo} alt="" width={80} height={20} className="h-5 w-auto opacity-40" /></footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
