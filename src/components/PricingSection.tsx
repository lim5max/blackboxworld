import Image from "next/image";
import { pricing } from "@/lib/content";
import { cn } from "@/lib/utils";
import { CheckCircleIcon } from "@/components/icons";

export function PricingSection() {
  return (
    <section id="price" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2
          className="font-semibold tracking-tight max-w-[820px] mx-auto"
          style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.15 }}
        >
          <span className="text-[var(--ink)]">Our Pricing.</span>{" "}
          <span className="text-[var(--ink-muted)]">
            Your own fractionalized team, with flexible pricing. No contract term.
          </span>
        </h2>
      </div>

      <div className="mt-14 max-w-[1100px] mx-auto grid gap-6 md:grid-cols-2">
        {pricing.map((tier) => {
          const dark = tier.isDark;
          return (
            <article
              key={tier.name}
              className={cn(
                "rounded-3xl p-8 md:p-10 flex flex-col",
                dark ? "bg-[var(--surface-dark)] text-white" : "bg-white border border-black/5"
              )}
            >
              <header className="flex items-start gap-3">
                <Image
                  src={tier.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-xl"
                />
                <div>
                  <h3 className={cn("text-[22px] font-semibold", dark ? "text-white" : "text-[var(--ink)]")}>
                    {tier.name}
                  </h3>
                  <p className={cn("text-[14px]", dark ? "text-white/60" : "text-[var(--ink-muted)]")}>
                    {tier.subtitle}
                  </p>
                </div>
              </header>

              <p className={cn("mt-5 text-[14px] leading-relaxed max-w-[400px]", dark ? "text-white/70" : "text-[var(--ink-muted)]")}>
                {tier.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span
                  className="text-grad font-semibold tracking-tight"
                  style={{ fontSize: "clamp(48px, 5.5vw, 84px)", lineHeight: 1 }}
                >
                  {tier.price}
                </span>
                <span className={cn("text-[14px]", dark ? "text-white/70" : "text-[var(--ink-muted)]")}>
                  {tier.cadence}
                </span>
              </div>
              <p className={cn("mt-1 text-[13px]", dark ? "text-white/50" : "text-[var(--ink-muted)]")}>
                Pause or cancel anytime
              </p>

              <a
                href="/book"
                className={cn(
                  "mt-6 inline-flex items-center justify-center w-full py-4 rounded-full font-medium text-[15px] transition",
                  dark
                    ? "bg-white text-[var(--ink)] hover:bg-white/90"
                    : "bg-white text-[var(--ink)] border border-black/10 hover:bg-black/5"
                )}
              >
                {tier.cta}
              </a>

              <div className="mt-7">
                <p className={cn("text-[14px]", dark ? "text-white/60" : "text-[var(--ink-muted)]")}>
                  What&apos;s included:
                </p>
                <ul className="mt-3 space-y-2.5">
                  {tier.included.map((item) => (
                    <li
                      key={item}
                      className={cn("flex items-center gap-3 text-[14.5px]", dark ? "text-white/90" : "text-[var(--ink)]")}
                    >
                      <CheckCircleIcon className={cn("w-5 h-5 shrink-0", dark ? "text-white" : "text-[var(--ink)]")} />
                      {item}
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
