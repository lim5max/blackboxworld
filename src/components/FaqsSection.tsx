"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { PlusIcon, CloseIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function FaqsSection() {
  // Default: first item of first group open
  const [open, setOpen] = useState<string>("0-0");

  return (
    <section id="faqs" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2
          className="font-semibold tracking-tight"
          style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.1 }}
        >
          Questions? Answers.
        </h2>
      </div>

      <div className="mt-16 max-w-[1100px] mx-auto space-y-12">
        {faqs.map((group, gi) => (
          <div key={group.category}>
            <p className="text-[14px] text-[var(--ink-muted)] mb-4">
              {group.category}
            </p>
            <ul className="space-y-3">
              {group.items.map((item, ii) => {
                const key = `${gi}-${ii}`;
                const isOpen = open === key;
                return (
                  <li
                    key={key}
                    className={cn(
                      "rounded-2xl transition",
                      "bg-[var(--surface-muted)]"
                    )}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? "" : key)}
                      className="w-full flex items-center justify-between text-left p-5 md:px-6 md:py-5"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[16px] md:text-[17px] font-medium text-[var(--ink)]">
                        {item.q}
                      </span>
                      <span className="text-[var(--ink-muted)]">
                        {isOpen ? (
                          <CloseIcon className="w-5 h-5" />
                        ) : (
                          <PlusIcon className="w-5 h-5" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 text-[15px] leading-relaxed text-[var(--ink-muted)] max-w-[820px]">
                        {item.a}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
