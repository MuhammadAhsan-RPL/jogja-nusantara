import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-32 border-t border-[var(--color-rule)] bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">{t("footer.colophon")}</p>
            <h3 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
              Jogja<span className="text-terracotta">.</span>Heritage
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              {t("site.tagline")}. {t("footer.about")}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">{t("footer.nav")}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li><Link to="/sejarah" className="hover:text-terracotta">{t("nav.sejarah")}</Link></li>
              <li><Link to="/budaya" className="hover:text-terracotta">{t("nav.budaya")}</Link></li>
              <li><Link to="/kuliner" className="hover:text-terracotta">{t("nav.kuliner")}</Link></li>
              <li><Link to="/wisata" className="hover:text-terracotta">{t("nav.wisata")}</Link></li>
              <li><Link to="/peta" className="hover:text-terracotta">{t("nav.peta")}</Link></li>
              <li><Link to="/teknologi" className="hover:text-terracotta">{t("nav.teknologi")}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow">{t("footer.credit.title")}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {t("footer.credit")}.<br />
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-rule)] pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft md:flex-row md:items-center">
         <span>© 2026 — Jogja Heritage</span>
          <span>Memayu hayuning bawana</span>
        </div>
      </div>
    </footer>
  );
}
