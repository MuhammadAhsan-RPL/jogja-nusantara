import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { SectionLabel, SectionTitle } from "@/components/ui-heritage/SectionLabel";
import { GununganAnimation } from "@/components/ui-heritage/GununganAnimation";
import { destinations } from "@/data/wisata";
import heroTugu from "@/assets/hero-tugu.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jogja Heritage — Yogyakarta, Kota Pusaka & Masa Depan Digital" },
      { name: "description", content: "Esai visual interaktif Daerah Istimewa Yogyakarta: sejarah Mataram, budaya keraton, kuliner gudeg, wisata Borobudur–Prambanan, dan Jogja Smart City." },
      { property: "og:title", content: "Jogja Heritage — Yogyakarta" },
      { property: "og:description", content: "Sejarah, budaya, kuliner, wisata, dan teknologi Yogyakarta dalam satu naratif editorial." },
      { property: "og:image", content: heroTugu },
    ],

    links: [
      {
        rel: "icon",
        type: "image/png", 
        href: "/favicon.png", 
      },
    ],

  }),
  component: Index,
});

const pillars = [
  { no: "01", to: "/sejarah", titleKey: "nav.sejarah", subKey: "pillar.sejarah.sub" },
  { no: "02", to: "/budaya", titleKey: "nav.budaya", subKey: "pillar.budaya.sub" },
  { no: "03", to: "/kuliner", titleKey: "nav.kuliner", subKey: "pillar.kuliner.sub" },
  { no: "04", to: "/wisata", titleKey: "nav.wisata", subKey: "pillar.wisata.sub" },
  { no: "05", to: "/teknologi", titleKey: "nav.teknologi", subKey: "pillar.teknologi.sub" },
] as const;

function Index() {
  const { t, tl } = useI18n();
  const featured = destinations.slice(0, 3);
  const [line1, line2, line3] = t("home.title").split("\n");

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <GununganAnimation />
        <div className="relative z-10 mx-auto grid max-w-[1400px] gap-10 px-6 pt-12 pb-20 md:grid-cols-12 md:px-10 md:pt-20 md:pb-32">
          <div className="md:col-span-7">
            <p className="eyebrow fade-up">{t("home.eyebrow")}</p>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] text-ink md:text-[7.5rem] fade-up">
              {line1}
              <br />
              <span className="italic text-terracotta">{line2}</span>
              <br />
              {line3}
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg fade-up">
              {t("home.lead")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3 fade-up">
              <Link
                to="/wisata"
                className="group inline-flex items-center gap-2 border border-ink bg-ink px-7 py-4 text-sm tracking-wide text-cream transition-colors hover:bg-terracotta hover:border-terracotta"
              >
                {t("home.cta.explore")}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/peta"
                className="inline-flex items-center gap-2 border border-ink px-7 py-4 text-sm tracking-wide hover:bg-ink hover:text-cream"
              >
                {t("home.cta.map")}
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <figure className="relative">
              <img
                src={heroTugu}
                alt="Tugu Yogyakarta"
                className="aspect-[3/4] w-full object-cover"
                width={1280}
                height={1700}
              />
              <figcaption className="mt-3 font-display italic text-sm text-ink-soft">
                {t("home.hero.caption")}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* marquee filosofi */}
        <div className="border-y border-[var(--color-rule)] bg-paper py-5 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap font-display text-2xl italic text-ink-soft animate-[scroll_45s_linear_infinite]">
            {Array(6).fill(0).map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                Hamemayu Hayuning Bawana
                <span className="text-terracotta">✦</span>
                Sawiji · Greget · Sengguh · Ora Mingkuh
                <span className="text-terracotta">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <SectionLabel number="I" label={t("home.pillars")} />
        <SectionTitle>
          {t("home.pillars.title.a")} <span className="italic text-terracotta">{t("home.pillars.title.b")}</span>
        </SectionTitle>

        <div className="mt-16 divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
          {pillars.map((p) => (
            <Link
              key={p.no}
              to={p.to}
              className="group grid grid-cols-12 items-baseline gap-6 py-8 transition-colors hover:bg-paper"
            >
              <span className="col-span-2 font-mono text-sm tracking-widest text-terracotta md:col-span-1">{p.no}</span>
              <h3 className="col-span-10 font-display text-3xl text-ink md:col-span-3 md:text-5xl">
                {t(p.titleKey)}
              </h3>
              <p className="col-span-12 text-sm text-ink-soft md:col-span-6 md:text-base">{t(p.subKey)}</p>
              <span className="col-span-12 flex justify-end md:col-span-2">
                <ArrowUpRight size={28} className="text-ink-soft transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-terracotta" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-deepgreen py-32 text-paper">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <p className="eyebrow !text-keraton-soft">{t("home.quote.label")}</p>
          <blockquote className="mt-8 font-display text-3xl italic leading-snug md:text-5xl">
            “{t("home.quote")}”
          </blockquote>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-keraton-soft">
            — {t("home.quote.source")}
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel number="II" label={t("home.featured")} />
            <SectionTitle>
              {t("home.featured.title.a")} <span className="italic text-terracotta">{t("home.featured.title.b")}</span>
            </SectionTitle>
          </div>
          <Link to="/wisata" className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta hover:underline">
            {t("home.featured.all")} →
          </Link>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {featured.map((d, i) => (
            <Link key={d.slug} to="/wisata/$slug" params={{ slug: d.slug }} className="group block">
              <div className="overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  loading={i === 0 ? "eager" : "lazy"}
                  width={1280}
                  height={896}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-terracotta">{t("cat." + d.category)}</p>
                <p className="font-mono text-[11px] text-ink-soft">{String(i + 1).padStart(2, "0")} / 03</p>
              </div>
              <h3 className="mt-2 font-display text-3xl text-ink group-hover:text-terracotta">{d.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tl(d.short)}</p>
            </Link>
          ))}
        </div>
      </section>

      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </>
  );
}
