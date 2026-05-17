import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 md:pt-36 pb-16 px-6">
        <article className="max-w-[820px] mx-auto">
          <h1
            className="font-semibold tracking-tight text-[var(--ink)]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1 }}
          >
            {title}
          </h1>
          <p className="mt-3 text-[14px] text-[var(--ink-muted)]">
            Last updated: {updated}
          </p>
          <div className="mt-10 space-y-6 text-[15.5px] leading-relaxed text-[var(--ink)] [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-[17px] [&_h3]:font-semibold [&_p]:text-[var(--ink-soft)] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-[var(--ink-soft)] [&_a]:text-[var(--ink)] [&_a]:underline">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
