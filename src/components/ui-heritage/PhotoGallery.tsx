import { useI18n } from "@/lib/i18n";
import type { Photo } from "@/data/gallery";

type Props = { title: string; lead: string; photos: Photo[] };

export function PhotoGallery({ title, lead, photos }: Props) {
  const { tl } = useI18n();
  return (
    <section className="mt-32">
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow">{title}</p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">{lead}</h2>
        </div>
      </div>
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {photos.map((p, i) => (
          <figure key={i} className="group overflow-hidden">
            <img
              src={p.url}
              alt={tl(p.caption)}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"
              }`}
            />
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              {String(i + 1).padStart(2, "0")} — {tl(p.caption)}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
