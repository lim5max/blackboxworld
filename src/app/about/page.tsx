import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About — BlackBoxWorld LLP",
  description:
    "BlackBoxWorld LLP is a UK-based AI product studio building MVPs and software products in two-week sprints.",
};

const principles = [
  {
    title: "Ship in weeks, not quarters",
    body: "Every engagement is broken into 2-week sprints with a working build at the end of each one.",
  },
  {
    title: "Design-led engineering",
    body: "Code is downstream of clarity. We invest in product thinking and UI before a single line is written.",
  },
  {
    title: "AI as a multiplier",
    body: "We use modern AI tooling to remove friction, not as a marketing label. The output is real, scalable code.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 md:pt-36 pb-20 px-6">
        <section className="max-w-[1100px] mx-auto">
          <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
            About
          </p>
          <h1
            className="mt-3 font-semibold tracking-tight text-[var(--ink)] max-w-[820px]"
            style={{ fontSize: "clamp(40px, 5.5vw, 68px)", lineHeight: 1.05 }}
          >
            A small studio shipping{" "}
            <span className="text-grad">real products</span> for founders.
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-[var(--ink-muted)] max-w-[640px]">
            BlackBoxWorld LLP is a UK-based product studio. We partner with
            founders and product teams to take ideas from a blank doc to a
            launched MVP in two weeks &mdash; design, engineering and AI under
            one roof.
          </p>
        </section>

        <section className="mt-16 max-w-[1100px] mx-auto grid gap-10 md:grid-cols-[420px_1fr] items-start">
          <figure className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--surface-muted)]">
            <Image
              src="/founder.jpg"
              alt="Founder of BlackBoxWorld"
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              priority
              className="object-cover"
            />
          </figure>

          <div className="md:pt-4">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              Founder
            </p>
            <h2
              className="mt-2 font-semibold tracking-tight text-[var(--ink)]"
              style={{ fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.1 }}
            >
              Maksim &mdash; Founder &amp; Product Engineer
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[var(--ink-soft)]">
              <p>
                I started BlackBoxWorld because the gap between a great idea
                and a usable product has never been smaller &mdash; if you
                pair the right tooling with disciplined product thinking.
              </p>
              <p>
                I&apos;ve built products with founders at every stage: from
                first-time operators with a Figma sketch to YC-backed teams
                rebuilding their core surface. The pattern that wins is always
                the same &mdash; ruthless scope, sharp design, fast feedback.
              </p>
              <p>
                Outside of work I sketch, travel and break things in side
                projects. If any of that resonates, let&apos;s talk.
              </p>
            </div>

            <a
              href="mailto:hello@blackboxworld.com"
              className="mt-8 inline-flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-[var(--ink)] text-white text-[15px] font-medium hover:opacity-90 transition"
            >
              <ChevronRightIcon className="w-4 h-4" />
              Book a call
            </a>
          </div>
        </section>

        <section className="mt-24 max-w-[1100px] mx-auto">
          <h2
            className="font-semibold tracking-tight text-[var(--ink)]"
            style={{ fontSize: "clamp(28px, 3.2vw, 40px)", lineHeight: 1.1 }}
          >
            How we operate
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {principles.map((p) => (
              <article
                key={p.title}
                className="rounded-3xl bg-[var(--surface-muted)] p-7"
              >
                <h3 className="text-[18px] font-semibold text-[var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--ink-muted)]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 max-w-[900px] mx-auto rounded-3xl bg-[var(--surface-dark)] text-white p-10 md:p-14 text-center">
          <h2
            className="font-semibold tracking-tight"
            style={{ fontSize: "clamp(24px, 2.6vw, 34px)", lineHeight: 1.15 }}
          >
            Got an idea? Let&apos;s build it.
          </h2>
          <p className="mt-3 text-[15px] text-white/60 max-w-[520px] mx-auto">
            Two-week sprints, fixed pricing, no long contracts. We&apos;ll
            scope your MVP on a 30-minute call.
          </p>
          <a
            href="mailto:hello@blackboxworld.com"
            className="mt-7 inline-flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-white text-[var(--ink)] text-[15px] font-medium hover:opacity-90 transition"
          >
            <ChevronRightIcon className="w-4 h-4" />
            hello@blackboxworld.com
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
