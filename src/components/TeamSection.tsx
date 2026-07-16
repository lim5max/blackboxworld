import Image from "next/image";

import type { AboutContent } from "@/types/content";

export function TeamSection({ content }: { content: AboutContent }) {
  return (
    <section className="mx-auto mt-24 max-w-[1200px]">
      <div className="max-w-[740px]">
        <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">{content.teamEyebrow}</p>
        <h2 className="mt-3 font-semibold tracking-tight text-[var(--ink)]" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.08 }}>{content.teamTitle}</h2>
        <p className="mt-4 max-w-[620px] text-[16px] leading-relaxed text-[var(--ink-muted)]">{content.teamSubtitle}</p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
        {content.team.map((member) => (
          <article key={member.role} className="min-w-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--surface-muted)] md:rounded-3xl">
              <Image src={member.image} alt={member.role} fill sizes="(min-width: 1024px) 285px, (min-width: 640px) 50vw, 50vw" className="object-cover transition duration-500 hover:scale-[1.015]" />
            </div>
            <h3 className="mt-4 text-[15px] font-semibold leading-tight text-[var(--ink)] md:text-[18px]">{member.role}</h3>
            <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--ink-muted)] md:text-[14px]">{member.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
