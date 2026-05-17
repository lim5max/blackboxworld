"use client";

import { cta, footer } from "@/lib/content";
import { PaperPlaneIcon } from "@/components/icons";

export function Footer() {
  return (
    <>
      {/* CTA pill */}
      <section className="px-6 pb-12">
        <div className="max-w-[760px] mx-auto rounded-full bg-[var(--surface-dark)] text-white py-3 pl-6 pr-3 flex items-center justify-between gap-4">
          <span className="text-[15px] md:text-[16px] font-medium">
            {cta.title}
          </span>
          <a
            href={cta.href}
            className="inline-flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full bg-white text-[var(--ink)] text-[14px] font-medium hover:opacity-90 transition shrink-0"
          >
            <PaperPlaneIcon className="w-4 h-4" />
            {cta.buttonLabel}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--surface-dark)] text-white px-6 pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-[22px] font-semibold">{footer.title}</h3>
            <p className="mt-3 text-[14.5px] text-white/60 max-w-[320px]">
              {footer.body}
            </p>
            <form
              className="mt-6 flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1.5 max-w-[360px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={footer.emailPlaceholder}
                className="flex-1 bg-transparent text-[14px] px-4 py-2 placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-white text-[var(--ink)] text-[14px] font-medium hover:opacity-90 transition"
              >
                {footer.submitLabel}
              </button>
            </form>
          </div>
          <div className="md:justify-self-end grid grid-cols-2 gap-10">
            <nav>
              <p className="text-[12px] uppercase tracking-wider text-white/40 mb-3">Site</p>
              <ul className="space-y-3 text-[15px]">
                {footer.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-white/80 hover:text-white transition">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <p className="text-[12px] uppercase tracking-wider text-white/40 mb-3">Legal</p>
              <ul className="space-y-3 text-[15px]">
                {footer.legalLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-white/80 hover:text-white transition">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-white/10 flex items-center text-[13px] text-white/50">
          <div className="flex items-center gap-4">
            <span className="text-white/80 font-semibold">{footer.brand}</span>
            <span>{footer.year}</span>
            <span>{footer.rightsText}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

