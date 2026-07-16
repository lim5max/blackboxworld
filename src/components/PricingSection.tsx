"use client";

import Image from "next/image";
import { useState } from "react";

import { CheckCircleIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import type { PricingContent } from "@/types/content";

type PricingModeKey = "design" | "development";

export function PricingSection({
  locale,
  content,
}: {
  locale: Locale;
  content: PricingContent;
}) {
  const [activeMode, setActiveMode] = useState<PricingModeKey>("design");
  const mode = content[activeMode];
  const subject = locale === "ru" ? "Проект с BlackBoxWorld" : "Project with BlackBoxWorld";

  return (
    <section
      id="price"
      className={cn(
        "px-4 py-24 transition-colors duration-500 md:px-6",
        activeMode === "design"
          ? "bg-[linear-gradient(180deg,#fff_0%,#f8f5ff_48%,#fff_100%)]"
          : "bg-white",
      )}
    >
      <div className="mx-auto max-w-[1200px] text-center">
        <div
          role="tablist"
          aria-label={content.selectorLabel}
          className="mx-auto inline-flex max-w-full rounded-full border border-black/5 bg-[var(--surface-muted)] p-1"
        >
          {(["design", "development"] as const).map((key) => (
            <button
              key={key}
              id={`pricing-tab-${key}`}
              type="button"
              role="tab"
              aria-selected={activeMode === key}
              aria-controls="pricing-panel"
              onClick={() => setActiveMode(key)}
              className={cn(
                "rounded-full px-3.5 py-2.5 text-[12px] font-semibold transition sm:px-5 sm:text-[14px]",
                activeMode === key
                  ? "bg-[var(--ink)] text-white shadow-sm"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink)]",
              )}
            >
              {content[key].label}
            </button>
          ))}
        </div>

        <p className="mt-10 text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
          {mode.eyebrow}
        </p>
        <h2
          className="mx-auto mt-3 max-w-[900px] font-semibold tracking-tight"
          style={{ fontSize: "clamp(30px, 4vw, 54px)", lineHeight: 1.08 }}
        >
          <span className="text-[var(--ink)]">{mode.title}</span>{" "}
          <span className="text-[var(--ink-muted)]">{mode.subtitle}</span>
        </h2>
      </div>

      <div
        id="pricing-panel"
        role="tabpanel"
        aria-labelledby={`pricing-tab-${activeMode}`}
        className={cn(
          "mx-auto mt-14 grid max-w-[1200px] gap-5",
          activeMode === "design" ? "lg:grid-cols-3" : "max-w-[1100px] md:grid-cols-2",
        )}
      >
        {mode.plans.map((plan) => {
          const dark = plan.isDark;
          return (
            <article
              key={plan.name}
              className={cn(
                "relative flex min-w-0 flex-col overflow-hidden rounded-3xl p-7 md:p-8",
                dark
                  ? "bg-[var(--surface-dark)] text-white shadow-[0_24px_70px_-38px_rgba(82,40,210,0.8)]"
                  : plan.kind === "trial"
                    ? "border border-violet-100 bg-white/75"
                    : "border border-black/5 bg-white",
                plan.featured && "ring-2 ring-violet-400/45",
              )}
            >
              {plan.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white ring-1 ring-white/15">
                  {content.featuredLabel}
                </span>
              )}

              <header className="flex items-start gap-3 pr-20">
                <Image src={plan.icon} alt="" width={46} height={46} className="h-11 w-11 rounded-xl" />
                <div>
                  <h3 className={cn("text-[21px] font-semibold", dark ? "text-white" : "text-[var(--ink)]")}>{plan.name}</h3>
                  <p className={cn("mt-0.5 text-[13px]", dark ? "text-white/55" : "text-[var(--ink-muted)]")}>{plan.subtitle}</p>
                </div>
              </header>

              <p className={cn("mt-5 min-h-[62px] text-[14px] leading-relaxed", dark ? "text-white/68" : "text-[var(--ink-muted)]")}>{plan.description}</p>

              <div className="mt-6 flex flex-wrap items-end gap-x-2 gap-y-1">
                <span className="text-grad min-w-0 break-words text-[clamp(42px,5vw,68px)] font-semibold leading-none tracking-[-0.05em]">{plan.price}</span>
                <span className={cn("pb-1 text-[13px]", dark ? "text-white/65" : "text-[var(--ink-muted)]")}>{plan.cadence}</span>
              </div>
              <p className={cn("mt-3 min-h-[40px] text-[12.5px] leading-relaxed", dark ? "text-white/55" : plan.kind === "trial" ? "font-medium text-violet-700" : "text-[var(--ink-muted)]")}>{plan.note}</p>

              <a
                href={`mailto:hello@blackboxworld.com?subject=${encodeURIComponent(`${subject}: ${plan.name}`)}`}
                className={cn(
                  "mt-6 inline-flex w-full items-center justify-center rounded-full py-3.5 text-[14px] font-semibold transition",
                  dark
                    ? "bg-white text-[var(--ink)] hover:bg-white/90"
                    : "bg-[var(--ink)] text-white hover:opacity-90",
                )}
              >
                {plan.cta}
              </a>

              <div className="mt-7 border-t border-current/10 pt-6">
                <p className={cn("text-[13px] font-medium", dark ? "text-white/55" : "text-[var(--ink-muted)]")}>{content.includedLabel}</p>
                <ul className="mt-3 space-y-2.5">
                  {plan.included.map((item) => (
                    <li key={item} className={cn("flex items-start gap-3 text-[13.5px] leading-snug", dark ? "text-white/88" : "text-[var(--ink)]")}>
                      <CheckCircleIcon className="mt-0.5 h-4.5 w-4.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
