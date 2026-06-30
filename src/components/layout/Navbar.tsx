import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n, type Lang } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/sejarah", key: "nav.sejarah" },
  { to: "/budaya", key: "nav.budaya" },
  { to: "/kuliner", key: "nav.kuliner" },
  { to: "/wisata", key: "nav.wisata" },
  { to: "/peta", key: "nav.peta" },
  { to: "/teknologi", key: "nav.teknologi" },
  { to: "/kontak", key: "nav.kontak" },
] as const;

const langs: { code: Lang; label: string }[] = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-rule)] bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight text-ink">
            Jogja<span className="text-terracotta">.</span>Heritage
          </span>
          <span className="hidden text-[10px] font-mono uppercase tracking-[0.22em] text-ink-soft md:inline">
            est. MMXXVI
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] tracking-wide text-ink-soft transition-colors hover:text-terracotta"
              activeProps={{ className: "text-terracotta" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="font-mono text-[11px] tracking-widest flex items-center">
            {langs.map((l, i) => (
              <span key={l.code} className="flex items-center">
                {i > 0 && <span className="mx-1 text-ink-soft">/</span>}
                <button
                  onClick={() => setLang(l.code)}
                  className={
                    lang === l.code
                      ? "text-terracotta font-medium"
                      : "text-ink-soft hover:text-ink"
                  }
                  aria-label={`switch to ${l.label}`}
                >
                  {l.label}
                </button>
              </span>
            ))}
          </div>
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--color-rule)] bg-cream lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--color-rule)]/60 py-3 text-sm text-ink-soft"
                activeProps={{ className: "text-terracotta" }}
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
