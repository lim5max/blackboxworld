import Image from "next/image";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[var(--surface-muted)]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2
          className="font-semibold tracking-tight max-w-[820px] mx-auto"
          style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.15 }}
        >
          <span className="text-[var(--ink)]">Trusted by industry leaders.</span>{" "}
          <span className="text-[var(--ink-muted)]">
            Hear what clients are saying about Process.
          </span>
        </h2>
      </div>

      <div className="mt-12 marquee-mask overflow-x-auto md:overflow-hidden">
        <div className="flex gap-5 px-6 md:px-12">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="shrink-0 w-[440px] rounded-3xl bg-white p-7 flex flex-col justify-between min-h-[300px]"
            >
              <p className="text-[15px] leading-relaxed text-[var(--ink)]">
                {t.body}
              </p>
              <footer className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[14.5px] font-semibold text-[var(--ink)]">
                      {t.name}
                    </p>
                    <p className="text-[12.5px] text-[var(--ink-muted)]">
                      {t.role}
                    </p>
                  </div>
                </div>
                <Image
                  src={t.logo}
                  alt=""
                  width={80}
                  height={20}
                  className="h-5 w-auto opacity-40"
                />
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
