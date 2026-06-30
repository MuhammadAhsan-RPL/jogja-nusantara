import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";
import { SectionLabel } from "@/components/ui-heritage/SectionLabel";
import { useI18n } from "@/lib/i18n";
import type { Category } from "@/data/wisata";

const LeafletMap = lazy(() => import("@/components/map/LeafletMap").then((m) => ({ default: m.LeafletMap })));

export const Route = createFileRoute("/peta")({
  head: () => ({
    meta: [
      { title: "Peta Interaktif Yogyakarta — Jogja Heritage" },
      { name: "description", content: "Peta interaktif destinasi Yogyakarta: candi, keraton, kota, pantai, alam, dan gua." },
      { property: "og:title", content: "Peta Interaktif Yogyakarta" },
    ],
  }),
  component: PetaPage,
});

const categories: ("Semua" | Category)[] = ["Semua", "Candi", "Keraton", "Kota", "Pantai", "Alam", "Gua"];

const legendColors: Record<Category, string> = {
  Candi: "#b5532a",
  Keraton: "#c9a14a",
  Kota: "#1a1714",
  Pantai: "#2f6e7a",
  Alam: "#2f4a3a",
  Gua: "#5a3a8a",
};

function PetaPage() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<"Semua" | Category>("Semua");
  return (
    <article className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <header className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <SectionLabel number="05" label={t("nav.peta")} />
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            {t("peta.title.a")} <span className="italic text-terracotta">{t("peta.title.em")}</span> {t("peta.title.b")}
          </h1>
        </div>
        <div className="md:col-span-4">
          <p className="mt-2 text-base leading-relaxed text-ink-soft">{t("peta.lead")}</p>
        </div>
      </header>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
              filter === c ? "border-ink bg-ink text-cream" : "border-[var(--color-rule)] text-ink-soft hover:border-ink"
            }`}
          >
            {c === "Semua" ? t("common.all") : t("cat." + c)}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <Suspense fallback={<div className="flex h-[75vh] items-center justify-center border border-[var(--color-rule)] bg-paper text-sm text-ink-soft">{t("peta.loading")}</div>}>
          <LeafletMap filter={filter} />
        </Suspense>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <span className="eyebrow">{t("peta.legend")}</span>
        {(Object.keys(legendColors) as Category[]).map((c) => (
          <span key={c} className="flex items-center gap-2 text-xs text-ink-soft">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: legendColors[c] }} />
            {t("cat." + c)}
          </span>
        ))}
      </div>

      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
        {t("peta.attrib")}
      </p>
    </article>
  );
}
