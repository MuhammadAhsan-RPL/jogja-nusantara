import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { destinations } from "@/data/wisata";
import { useI18n } from "@/lib/i18n";
import { SectionLabel } from "@/components/ui-heritage/SectionLabel";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/wisata/$slug")({
  head: ({ params }) => {
    const d = destinations.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: d ? `${d.name} — Jogja Heritage` : "Destinasi — Jogja Heritage" },
        { name: "description", content: d?.short.id ?? "" },
        { property: "og:title", content: d?.name ?? "Destinasi Yogyakarta" },
        { property: "og:description", content: d?.short.id ?? "" },
        ...(d ? [{ property: "og:image", content: d.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const d = destinations.find((x) => x.slug === params.slug);
    if (!d) throw notFound();
    return d;
  },
  component: DetailWisata,
  notFoundComponent: NotFoundDetail,
});

function NotFoundDetail() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl">Destinasi tidak ditemukan</h1>
      <Link to="/wisata" className="mt-8 inline-block border border-ink px-6 py-3 text-sm hover:bg-ink hover:text-cream">
        Kembali ke Wisata
      </Link>
    </div>
  );
}

function DetailWisata() {
  const d = Route.useLoaderData();
  const { t, tl } = useI18n();

  return (
    <article>
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img src={d.image} alt={d.name} className="absolute inset-0 h-full w-full object-cover" width={1280} height={896} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-cream" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[1400px] px-6 pb-12 md:px-10 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-paper/90">{t("cat." + d.category)} · {d.region}</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.98] text-paper md:text-8xl">{d.name}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <Link to="/wisata" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-ink-soft hover:text-terracotta">
          <ArrowLeft size={14} /> {t("wisata.detail.back")}
        </Link>

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel number="—" label={t("wisata.detail.story")} />
            <p className="drop-cap mt-8 text-lg leading-relaxed text-ink-soft">{tl(d.story)}</p>

            <h3 className="mt-16 font-display text-3xl text-ink">{t("wisata.detail.tips")}</h3>
            <p className="hairline my-4 w-16 !bg-terracotta" />
            <p className="text-base italic leading-relaxed text-ink-soft">“{tl(d.tips)}”</p>
          </div>

          <aside className="md:col-span-5">
            <div className="border border-[var(--color-rule)] bg-paper p-8">
              <p className="eyebrow">{t("wisata.detail.info")}</p>
              <dl className="mt-6 divide-y divide-[var(--color-rule)]">
                <div className="flex justify-between py-3 text-sm">
                  <dt className="text-ink-soft">{t("wisata.detail.ticket")}</dt>
                  <dd className="font-medium text-ink">{d.ticket}</dd>
                </div>
                <div className="flex justify-between py-3 text-sm">
                  <dt className="text-ink-soft">{t("wisata.detail.hours")}</dt>
                  <dd className="font-medium text-ink">{d.hours}</dd>
                </div>
                <div className="flex justify-between py-3 text-sm">
                  <dt className="text-ink-soft">{t("wisata.detail.region")}</dt>
                  <dd className="font-medium text-ink">{d.region}</dd>
                </div>
                <div className="flex justify-between py-3 text-sm">
                  <dt className="text-ink-soft">{t("wisata.detail.coord")}</dt>
                  <dd className="font-mono text-xs text-ink">{d.lat.toFixed(4)}, {d.lng.toFixed(4)}</dd>
                </div>
              </dl>
              <a
                href={`https://www.google.com/maps?q=${d.lat},${d.lng}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 block border border-ink bg-ink py-3 text-center text-sm text-cream hover:bg-terracotta hover:border-terracotta"
              >
                {t("wisata.detail.gmaps")} ↗
              </a>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
