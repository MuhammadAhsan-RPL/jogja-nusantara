import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SectionLabel } from "@/components/ui-heritage/SectionLabel";
import { destinations, type Category } from "@/data/wisata";
import { useI18n } from "@/lib/i18n";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/wisata")({
  head: () =>
    createSeo({
      title: "Wisata Yogyakarta — 8 Destinasi Pilihan",
      description:
        "Candi Borobudur, Prambanan, Keraton, Taman Sari, Malioboro, Parangtritis, Hutan Pinus Mangunan, Goa Jomblang.",
      url: "https://www.jogjadigitalcity.id/wisata",
    }),
  component: WisataPage,
});

const categories: ("Semua" | Category)[] = [
  "Semua",
  "Candi",
  "Keraton",
  "Kota",
  "Pantai",
  "Alam",
  "Gua",
];

function WisataPage() {
  const { t, tl } = useI18n();
  const [cat, setCat] = useState<(typeof categories)[number]>("Semua");
  const list = cat === "Semua" ? destinations : destinations.filter((d) => d.category === cat);

  return (
    <article className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
      <header className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <SectionLabel number="04" label={t("nav.wisata")} />
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            {t("wisata.title.a")}{" "}
            <span className="italic text-terracotta">{t("wisata.title.em")}</span>
          </h1>
        </div>
        <div className="md:col-span-4">
          <p className="mt-2 text-base leading-relaxed text-ink-soft">{t("wisata.lead")}</p>
        </div>
      </header>

      <div className="mt-12 flex flex-wrap gap-2 border-y border-[var(--color-rule)] py-4">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
              cat === c
                ? "border-ink bg-ink text-cream"
                : "border-[var(--color-rule)] text-ink-soft hover:border-ink hover:text-ink"
            }`}
          >
            {c === "Semua" ? t("common.all") : t("cat." + c)}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {list.map((d, i) => (
          <Link key={d.slug} to="/wisata/$slug" params={{ slug: d.slug }} className="group block">
            <div className="overflow-hidden">
              <img
                src={d.image}
                alt={d.name}
                width={1280}
                height={896}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-terracotta">
                {t("cat." + d.category)}
              </p>
              <p className="font-mono text-[11px] text-ink-soft">
                {String(i + 1).padStart(2, "0")}
              </p>
            </div>
            <h2 className="mt-1 font-display text-3xl text-ink group-hover:text-terracotta">
              {d.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tl(d.short)}</p>
          </Link>
        ))}
      </div>
    </article>
  );
}
