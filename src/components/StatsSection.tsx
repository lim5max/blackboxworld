import type { StatCard } from "@/types/content";

export function StatsSection({ content }: { content: StatCard[] }) {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto grid max-w-[1200px] gap-4 md:grid-cols-3">
        {content.map((stat) => (
          <div key={stat.label} className="flex h-[200px] flex-col justify-between rounded-3xl bg-[var(--surface-muted)] p-6 md:h-[240px] md:p-7">
            <span className="text-[15px] text-[var(--ink)]">{stat.label}</span>
            <span className="text-grad font-semibold tracking-tight" style={{ fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 1 }}>{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
