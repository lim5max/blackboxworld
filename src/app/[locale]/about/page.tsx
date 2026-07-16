import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { ChevronRightIcon } from "@/components/icons";
import { Navbar } from "@/components/Navbar";
import { TeamSection } from "@/components/TeamSection";
import { isLocale } from "@/lib/i18n/config";
import { getLocalizedMetadata, getSiteContent } from "@/lib/i18n/content";

type AboutProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: AboutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getLocalizedMetadata(locale, "about");
}

export default async function AboutPage({ params }: AboutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const site = getSiteContent(locale);
  const content = site.about;

  return (
    <>
      <Navbar locale={locale} content={site.nav} />
      <main className="flex-1 px-5 pb-20 pt-32 md:px-6 md:pt-36">
        <section className="mx-auto max-w-[1100px]">
          <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">{content.eyebrow}</p>
          <h1 className="mt-3 max-w-[960px] font-semibold tracking-tight text-[var(--ink)]" style={{ fontSize: "clamp(40px, 5.5vw, 68px)", lineHeight: 1.05 }}>
            {content.titleBefore}{" "}<span className="text-grad">{content.titleAccent}</span>{" "}{content.titleAfter}
          </h1>
          <p className="mt-6 max-w-[700px] text-[17px] leading-relaxed text-[var(--ink-muted)]">{content.intro}</p>
        </section>

        <section className="mx-auto mt-16 grid max-w-[1100px] items-start gap-10 md:grid-cols-[420px_1fr]">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[var(--surface-muted)]">
            <Image src="/founder.jpg" alt={content.founderImageAlt} fill sizes="(min-width: 768px) 420px, 100vw" priority className="object-cover" />
          </figure>
          <div className="md:pt-4">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">{content.founderEyebrow}</p>
            <h2 className="mt-2 font-semibold tracking-tight text-[var(--ink)]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.1 }}>{content.founderTitle}</h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[var(--ink-soft)]">{content.founderBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <a href="mailto:hello@blackboxworld.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] py-3 pl-4 pr-5 text-[15px] font-medium text-white transition hover:opacity-90"><ChevronRightIcon className="h-4 w-4" />{content.founderCta}</a>
          </div>
        </section>

        <TeamSection content={content} />

        <section className="mx-auto mt-24 max-w-[1100px]">
          <h2 className="font-semibold tracking-tight text-[var(--ink)]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.1 }}>{content.principlesTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{content.principles.map((principle) => <article key={principle.title} className="rounded-3xl bg-[var(--surface-muted)] p-7"><h3 className="text-[18px] font-semibold text-[var(--ink)]">{principle.title}</h3><p className="mt-3 text-[14.5px] leading-relaxed text-[var(--ink-muted)]">{principle.body}</p></article>)}</div>
        </section>

        <section className="mx-auto mt-24 max-w-[900px] rounded-3xl bg-[var(--surface-dark)] p-10 text-center text-white md:p-14">
          <h2 className="font-semibold tracking-tight" style={{ fontSize: "clamp(24px, 2.6vw, 34px)", lineHeight: 1.15 }}>{content.closingTitle}</h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[15px] text-white/60">{content.closingBody}</p>
          <a href="mailto:hello@blackboxworld.com" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white py-3 pl-4 pr-5 text-[15px] font-medium text-[var(--ink)] transition hover:opacity-90"><ChevronRightIcon className="h-4 w-4" />hello@blackboxworld.com</a>
        </section>
      </main>
      <Footer locale={locale} cta={site.cta} content={site.footer} />
    </>
  );
}
