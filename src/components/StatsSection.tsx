import { stats } from "@/lib/content";

export function StatsSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-3xl bg-[var(--surface-muted)] p-6 md:p-7 h-[200px] md:h-[240px] flex flex-col justify-between"
          >
            <span className="text-[15px] text-[var(--ink)]">{s.label}</span>
            <span
              className="text-grad font-semibold tracking-tight"
              style={{ fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 1 }}
            >
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
