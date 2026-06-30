import { useEffect, useRef } from "react";
import { destinations, type Category } from "@/data/wisata";
import { useI18n } from "@/lib/i18n";

type Props = { filter?: string };

const COLORS: Record<Category, string> = {
  Candi: "#b5532a",
  Keraton: "#c9a14a",
  Kota: "#1a1714",
  Pantai: "#2f6e7a",
  Alam: "#2f4a3a",
  Gua: "#5a3a8a",
};

export function LeafletMap({ filter = "Semua" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const layerRef = useRef<any>(null);
  const { t, tl, lang } = useI18n();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;
      if (!mapRef.current) {
        mapRef.current = L.map(containerRef.current, {
          scrollWheelZoom: true,
          zoomControl: true,
          attributionControl: false,
          zoomAnimation: true,
          fadeAnimation: true,
        }).setView([-7.85, 110.42], 10);

        L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          { maxZoom: 19, attribution: "© OpenStreetMap" }
        ).addTo(mapRef.current);
      }

      if (layerRef.current) layerRef.current.remove();
      const group = L.layerGroup().addTo(mapRef.current);
      layerRef.current = group;

      const list =
        filter === "Semua" ? destinations : destinations.filter((d) => d.category === filter);

      list.forEach((d, i) => {
        const color = COLORS[d.category];
        const icon = L.divIcon({
          className: "",
          html: `
            <div class="jh-pin" style="--c:${color}">
              <span class="jh-pulse"></span>
              <span class="jh-dot"></span>
              <span class="jh-label">${d.name}</span>
            </div>`,
          iconSize: [22, 22],
          iconAnchor: [11, 11],
        });

        const m = L.marker([d.lat, d.lng], { icon, riseOnHover: true })
          .addTo(group)
          .bindPopup(
            `<div style="font-family:'DM Sans',sans-serif;min-width:220px">
              <img src="${d.image}" alt="${d.name}" style="width:100%;height:130px;object-fit:cover;margin-bottom:10px;border-radius:2px"/>
              <div style="font-family:'Cormorant Garamond',serif;font-size:22px;line-height:1.1;color:#1a1714">${d.name}</div>
              <div style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:${color};margin-top:6px">${t("cat." + d.category)} · ${d.region}</div>
              <p style="font-size:12px;line-height:1.5;color:#3d362f;margin-top:8px">${tl(d.short)}</p>
              <a href="/wisata/${d.slug}" style="display:inline-block;margin-top:10px;font-size:12px;color:#1a1714;border-bottom:1px solid #1a1714">${t("peta.popup.read")} →</a>
            </div>`,
            { maxWidth: 260 }
          );
        // stagger marker entrance
        setTimeout(() => m.openTooltip?.(), i * 60);
      });

      // animate to bounds for current filter
      if (list.length > 1) {
        const bounds = L.latLngBounds(list.map((d) => [d.lat, d.lng]));
        mapRef.current.flyToBounds(bounds, { padding: [60, 60], duration: 1.1 });
      } else if (list.length === 1) {
        mapRef.current.flyTo([list[0].lat, list[0].lng], 12, { duration: 1.1 });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [filter, lang, t, tl]);

  useEffect(
    () => () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    },
    []
  );

  return (
    <>
      <div
        ref={containerRef}
        className="h-[75vh] w-full border border-[var(--color-rule)] shadow-[0_30px_60px_-30px_rgba(26,23,20,0.35)]"
      />
      <style>{`
        .jh-pin { position:relative; width:22px; height:22px; display:flex; align-items:center; justify-content:center; }
        .jh-dot { width:14px; height:14px; border-radius:50%; background:var(--c); border:2px solid #faf6ee; box-shadow:0 2px 6px rgba(0,0,0,.3); z-index:2; }
        .jh-pulse { position:absolute; inset:0; border-radius:50%; background:var(--c); opacity:.5; animation:jhPulse 2.2s ease-out infinite; }
        .jh-label { position:absolute; top:24px; left:50%; transform:translateX(-50%); font:500 10px/1 'DM Sans',sans-serif; white-space:nowrap; background:#faf6ee; color:#1a1714; padding:3px 6px; border:1px solid var(--c); letter-spacing:.04em; opacity:0; transition:opacity .2s; }
        .jh-pin:hover .jh-label { opacity:1; }
        @keyframes jhPulse { 0%{transform:scale(.6); opacity:.55} 100%{transform:scale(2.4); opacity:0} }
        .leaflet-popup-content-wrapper { border-radius:2px !important; }
      `}</style>
    </>
  );
}
