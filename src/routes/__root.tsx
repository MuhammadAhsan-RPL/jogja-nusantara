import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import faviconUrl from "../assets/favicon.jpg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-6xl text-ink">Halaman tidak ditemukan</h1>
        <p className="mt-4 text-sm text-ink-soft">Mungkin jalannya sudah berubah seperti aliran Kali Code.</p>
        <div className="mt-8">
          <Link to="/" className="border border-ink px-6 py-3 text-sm tracking-wide hover:bg-ink hover:text-cream">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Galat</p>
        <h1 className="mt-4 font-display text-4xl text-ink">Halaman ini tidak dapat dimuat</h1>
        <p className="mt-4 text-sm text-ink-soft">Coba muat ulang atau kembali ke beranda.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-ink bg-ink px-6 py-3 text-sm text-cream hover:bg-terracotta hover:border-terracotta"
          >
            Coba Lagi
          </button>
          <a href="/" className="border border-ink px-6 py-3 text-sm hover:bg-ink hover:text-cream">Beranda</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jogja Heritage — Nusantara Digital City" },
      { name: "description", content: "Esai visual interaktif tentang Yogyakarta: sejarah, budaya, kuliner, wisata, dan ekosistem digitalnya." },
      { name: "author", content: "Jogja Heritage" },
      { property: "og:title", content: "Jogja Heritage — Nusantara Digital City" },
      { property: "og:description", content: "Esai visual interaktif tentang Yogyakarta: sejarah, budaya, kuliner, wisata, dan ekosistem digitalnya." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jogja Heritage — Nusantara Digital City" },
      { name: "twitter:description", content: "Esai visual interaktif tentang Yogyakarta: sejarah, budaya, kuliner, wisata, dan ekosistem digitalnya." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3eb9ff20-cc14-4e9c-b7e5-3f26de5725f3/id-preview-a906fc94--680a435d-d4f6-4cac-9234-6cb70505ba86.lovable.app-1781149659450.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3eb9ff20-cc14-4e9c-b7e5-3f26de5725f3/id-preview-a906fc94--680a435d-d4f6-4cac-9234-6cb70505ba86.lovable.app-1781149659450.png" },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: faviconUrl },
      { rel: "shortcut icon", href: faviconUrl },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <div className="flex min-h-screen flex-col bg-cream text-ink">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </QueryClientProvider>
  );
}
