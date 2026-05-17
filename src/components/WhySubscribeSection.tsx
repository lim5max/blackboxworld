import Image from "next/image";
import { whySubscribe } from "@/lib/content";
import { XCircleIcon } from "@/components/icons";

export function WhySubscribeSection() {
  const [c1, c2, c3, c4] = whySubscribe.cards;
  return (
    <section id="why-1" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2
          className="font-semibold tracking-tight max-w-[820px] mx-auto"
          style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.15 }}
        >
          <span className="text-[var(--ink)]">{whySubscribe.title}</span>{" "}
          <span className="text-[var(--ink-muted)]">{whySubscribe.subtitle}</span>
        </h2>
      </div>

      <div className="mt-14 max-w-[1200px] mx-auto grid gap-5 md:grid-cols-3">
        {/* AI Native — single card with heart icon */}
        <article className="rounded-3xl border border-black/5 bg-white p-8 flex flex-col items-center text-center min-h-[360px]">
          <div className="mt-4 mb-6 grid place-items-center w-24 h-24 rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(255,0,128,0.45)]">
            <Image
              src="/images/ZRtxLmrOOhPhCC1iP45Ws8qUxKo.svg"
              alt=""
              width={60}
              height={60}
              className="w-14 h-14"
            />
          </div>
          <h3 className="mt-auto text-[20px] font-semibold text-[var(--ink)]">
            {c1.title}
          </h3>
          <p className="mt-3 text-[14px] text-[var(--ink-muted)] leading-relaxed max-w-[260px]">
            {c1.body}
          </p>
        </article>

        {/* Clear async collab — wider 2-col with chat mockup */}
        <article className="rounded-3xl border border-black/5 bg-white p-8 md:col-span-2 flex flex-col min-h-[360px] relative overflow-hidden">
          <div className="relative h-[200px] -mx-2">
            <Image
              src="/images/Ga8vfNFxAf9JwpbK2esRcOPBtc.png"
              alt=""
              fill
              sizes="600px"
              className="object-contain object-top"
            />
          </div>
          <h3 className="mt-6 text-[20px] font-semibold text-[var(--ink)] text-center">
            {c2.title}
          </h3>
          <p className="mt-3 text-[14px] text-[var(--ink-muted)] leading-relaxed text-center max-w-[480px] mx-auto">
            {c2.body}
          </p>
        </article>

        {/* Design matters — wider 2-col with project mockup */}
        <article className="rounded-3xl border border-black/5 bg-white p-8 md:col-span-2 flex flex-col min-h-[360px]">
          <div className="relative h-[220px] -mx-2">
            <Image
              src="/images/SJZYFUNVc7Pa0NeJ7Ivl64cQ4dA.png"
              alt=""
              fill
              sizes="600px"
              className="object-contain object-top"
            />
          </div>
          <h3 className="mt-6 text-[20px] font-semibold text-[var(--ink)] text-center">
            {c3.title}
          </h3>
          <p className="mt-3 text-[14px] text-[var(--ink-muted)] leading-relaxed text-center max-w-[480px] mx-auto">
            {c3.body}
          </p>
        </article>

        {/* Operate with freedom — "say no more to" list */}
        <article className="rounded-3xl border border-black/5 bg-white p-8 flex flex-col text-center min-h-[360px]">
          <div className="text-left mx-auto">
            <p className="text-[18px] font-semibold text-[var(--ink)] mb-4">
              Say no more to
            </p>
            <ul className="space-y-3">
              {whySubscribe.sayNoMoreTo.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-[var(--ink)]">
                  <XCircleIcon className="w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <h3 className="mt-auto text-[20px] font-semibold text-[var(--ink)]">
            {c4.title}
          </h3>
          <p className="mt-3 text-[14px] text-[var(--ink-muted)] leading-relaxed max-w-[280px] mx-auto">
            {c4.body}
          </p>
        </article>
      </div>
    </section>
  );
}
