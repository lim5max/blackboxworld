import Image from "next/image";

import { XCircleIcon } from "@/components/icons";
import type { SiteContent } from "@/types/content";

export function WhySubscribeSection({ content }: { content: SiteContent["whySubscribe"] }) {
  const [first, second, third, fourth] = content.cards;
  return (
    <section id="why" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="mx-auto max-w-[860px] font-semibold tracking-tight" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.15 }}>
          <span className="text-[var(--ink)]">{content.title}</span>{" "}<span className="text-[var(--ink-muted)]">{content.subtitle}</span>
        </h2>
      </div>
      <div className="mx-auto mt-14 grid max-w-[1200px] gap-5 md:grid-cols-3">
        <article className="flex min-h-[360px] flex-col items-center rounded-3xl border border-black/5 bg-white p-8 text-center">
          <div className="mb-6 mt-4 grid h-24 w-24 place-items-center rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(255,0,128,0.45)]"><Image src="/images/ZRtxLmrOOhPhCC1iP45Ws8qUxKo.svg" alt="" width={60} height={60} className="h-14 w-14" /></div>
          <h3 className="mt-auto text-[20px] font-semibold text-[var(--ink)]">{first.title}</h3><p className="mt-3 max-w-[280px] text-[14px] leading-relaxed text-[var(--ink-muted)]">{first.body}</p>
        </article>
        <article className="relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-8 md:col-span-2">
          <div className="relative -mx-2 h-[200px]"><Image src="/images/Ga8vfNFxAf9JwpbK2esRcOPBtc.png" alt="" fill sizes="600px" className="object-contain object-top" /></div>
          <h3 className="mt-6 text-center text-[20px] font-semibold text-[var(--ink)]">{second.title}</h3><p className="mx-auto mt-3 max-w-[500px] text-center text-[14px] leading-relaxed text-[var(--ink-muted)]">{second.body}</p>
        </article>
        <article className="flex min-h-[360px] flex-col rounded-3xl border border-black/5 bg-white p-8 md:col-span-2">
          <div className="relative -mx-2 h-[220px]"><Image src="/images/SJZYFUNVc7Pa0NeJ7Ivl64cQ4dA.png" alt="" fill sizes="600px" className="object-contain object-top" /></div>
          <h3 className="mt-6 text-center text-[20px] font-semibold text-[var(--ink)]">{third.title}</h3><p className="mx-auto mt-3 max-w-[500px] text-center text-[14px] leading-relaxed text-[var(--ink-muted)]">{third.body}</p>
        </article>
        <article className="flex min-h-[360px] flex-col rounded-3xl border border-black/5 bg-white p-8 text-center">
          <div className="mx-auto text-left"><p className="mb-4 text-[18px] font-semibold text-[var(--ink)]">{content.sayNoMoreLabel}</p><ul className="space-y-3">{content.sayNoMoreTo.map((item) => <li key={item} className="flex items-center gap-3 text-[15px] text-[var(--ink)]"><XCircleIcon className="h-5 w-5 shrink-0" />{item}</li>)}</ul></div>
          <h3 className="mt-auto text-[20px] font-semibold text-[var(--ink)]">{fourth.title}</h3><p className="mx-auto mt-3 max-w-[280px] text-[14px] leading-relaxed text-[var(--ink-muted)]">{fourth.body}</p>
        </article>
      </div>
    </section>
  );
}
