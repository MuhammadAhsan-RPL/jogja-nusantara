type Props = { number: string; label: string; align?: "left" | "center" };

export function SectionLabel({ number, label, align = "left" }: Props) {
  return (
    <div
      className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
    >
      <span className="font-mono text-xs tracking-[0.3em] text-terracotta">{number}</span>
      <span className="h-px w-10 bg-terracotta" />
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">{label}</span>
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
      {children}
    </h2>
  );
}
