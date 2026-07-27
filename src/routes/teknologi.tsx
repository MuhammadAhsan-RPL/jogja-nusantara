import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/ui-heritage/SectionLabel";
import { useI18n } from "@/lib/i18n";
import kampus from "@/assets/teknologi-kampus.jpg";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/teknologi")({
  head: () =>
    createSeo({
      title: "Teknologi Yogyakarta — Jogja Smart City & Ekosistem Digital",
      description:
        "Jogja Smart Province, kampus UGM/UII/UNY, dan ekosistem startup digital Yogyakarta.",
      url: "https://www.jogjadigitalcity.id/teknologi",
      image: kampus,
    }),
  component: TeknologiPage,
});

function TeknologiPage() {
  const { t } = useI18n();
  const stats = [
    { n: "120+", l: t("tek.stat.1") },
    { n: "400rb+", l: t("tek.stat.2") },
    { n: "200+", l: t("tek.stat.3") },
    { n: "#1", l: t("tek.stat.4") },
  ];
  const pillars = [
    { title: t("tek.p1.t"), body: t("tek.p1.b") },
    { title: t("tek.p2.t"), body: t("tek.p2.b") },
    { title: t("tek.p3.t"), body: t("tek.p3.b") },
    { title: t("tek.p4.t"), body: t("tek.p4.b") },
  ];

  return (
    <article className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
      <header className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <SectionLabel number="06" label={t("nav.teknologi")} />
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            {t("tek.title.a")} <span className="italic text-terracotta">{t("tek.title.em")}</span>{" "}
            {t("tek.title.b")}
          </h1>
        </div>
        <div className="md:col-span-4">
          <p className="mt-2 text-base leading-relaxed text-ink-soft">{t("tek.lead")}</p>
        </div>
      </header>

      <figure className="my-16">
        <img
          src={kampus}
          alt="Kampus Yogyakarta"
          width={1280}
          height={896}
          loading="lazy"
          className="w-full"
        />
        <figcaption className="mt-3 font-display italic text-sm text-ink-soft">
          {t("tek.caption")}
        </figcaption>
      </figure>

      <div className="grid gap-px bg-[var(--color-rule)] md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="bg-cream p-8 text-center md:p-10">
            <p className="font-display text-5xl text-terracotta md:text-6xl">{s.n}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              {s.l}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 grid gap-12 md:grid-cols-2">
        {pillars.map((p, i) => (
          <div key={p.title}>
            <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">{p.title}</h3>
            <p className="hairline my-4 w-16 !bg-terracotta" />
            <p className="text-base leading-relaxed text-ink-soft">{p.body}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
