import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SectionLabel } from "@/components/ui-heritage/SectionLabel";
import { useI18n } from "@/lib/i18n";
import { createSeo } from "@/lib/seo";

export const Route = createFileRoute("/kontak")({
  head: () =>
    createSeo({
      title: "Kontak — Jogja Heritage",
      description: "Hubungi tim Jogja Heritage untuk pertanyaan, kolaborasi, atau koreksi konten.",
      url: "https://www.jogjadigitalcity.id/kontak",
    }),
  component: KontakPage,
});

function KontakPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const email = fd.get("email");
    const message = fd.get("message");
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:halo@jogjaheritage.id?subject=${encodeURIComponent("Pesan dari " + name)}&body=${body}`;
    setSent(true);
  };

  return (
    <article className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-32">
      <header className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <SectionLabel number="07" label={t("nav.kontak")} />
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            {t("kontak.title.a")}{" "}
            <span className="italic text-terracotta">{t("kontak.title.em")}</span>
          </h1>
        </div>
        <div className="md:col-span-4">
          <p className="mt-2 text-base leading-relaxed text-ink-soft">{t("kontak.lead")}</p>
        </div>
      </header>

      <div className="mt-16 grid gap-16 md:grid-cols-12">
        <form onSubmit={onSubmit} className="md:col-span-7 space-y-6">
          <div>
            <label className="eyebrow mb-2 block">{t("kontak.name")}</label>
            <input
              name="name"
              required
              className="w-full border-b border-ink bg-transparent py-3 font-display text-xl outline-none focus:border-terracotta"
            />
          </div>
          <div>
            <label className="eyebrow mb-2 block">{t("kontak.email")}</label>
            <input
              name="email"
              type="email"
              required
              className="w-full border-b border-ink bg-transparent py-3 font-display text-xl outline-none focus:border-terracotta"
            />
          </div>
          <div>
            <label className="eyebrow mb-2 block">{t("kontak.msg")}</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full border-b border-ink bg-transparent py-3 font-display text-xl outline-none focus:border-terracotta"
            />
          </div>
          <button
            type="submit"
            className="border border-ink bg-ink px-8 py-4 text-sm tracking-wide text-cream hover:bg-terracotta hover:border-terracotta"
          >
            {t("kontak.send")} →
          </button>
          {sent && (
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-deepgreen">
              {t("kontak.sent")}
            </p>
          )}
        </form>

        <aside className="md:col-span-5">
          <div className="space-y-8 border-l border-[var(--color-rule)] pl-8">
            <div>
              <p className="eyebrow">{t("kontak.email")}</p>
              <p className="mt-2 font-display text-2xl">halo@jogjaheritage.id</p>
            </div>
            <div>
              <p className="eyebrow">{t("kontak.studio")}</p>
              <p className="mt-2 font-display text-2xl leading-tight">
                Jl. Suryodiningratan
                <br />
                Yogyakarta 55141
              </p>
            </div>
            <div>
              <p className="eyebrow">{t("kontak.hours")}</p>
              <p className="mt-2 whitespace-pre-line font-display text-2xl">
                {t("kontak.hoursVal")}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
