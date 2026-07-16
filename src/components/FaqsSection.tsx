"use client";

import { useState } from "react";

import { CloseIcon, PlusIcon } from "@/components/icons";
import type { SiteContent } from "@/types/content";

export function FaqsSection({ content }: { content: SiteContent["faqs"] }) {
  const [open, setOpen] = useState("0-0");
  return (
    <section id="faqs" className="px-6 py-24">
      <div className="mx-auto max-w-[1100px] text-center"><h2 className="font-semibold tracking-tight" style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.1 }}>{content.title}</h2></div>
      <div className="mx-auto mt-16 max-w-[1100px] space-y-12">
        {content.groups.map((group, groupIndex) => (
          <div key={group.category}><p className="mb-4 text-[14px] text-[var(--ink-muted)]">{group.category}</p><ul className="space-y-3">
            {group.items.map((item, itemIndex) => { const key = `${groupIndex}-${itemIndex}`; const isOpen = open === key; return (
              <li key={item.q} className="rounded-2xl bg-[var(--surface-muted)] transition"><button type="button" onClick={() => setOpen(isOpen ? "" : key)} className="flex w-full items-center justify-between gap-5 p-5 text-left md:px-6 md:py-5" aria-expanded={isOpen}><span className="text-[16px] font-medium text-[var(--ink)] md:text-[17px]">{item.q}</span><span className="shrink-0 text-[var(--ink-muted)]">{isOpen ? <CloseIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}</span></button>{isOpen && <div className="-mt-1 max-w-[840px] px-5 pb-5 text-[15px] leading-relaxed text-[var(--ink-muted)] md:px-6 md:pb-6">{item.a}</div>}</li>
            ); })}
          </ul></div>
        ))}
      </div>
    </section>
  );
}
