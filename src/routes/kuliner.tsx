import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/ui-heritage/SectionLabel";
import { useI18n, type LocalizedText } from "@/lib/i18n";
import gudeg from "@/assets/kuliner-gudeg.jpg";
import bakpia from "@/assets/kuliner-bakpia.jpg";
import sate from "@/assets/kuliner-sateklathak.jpg";
import kopi from "@/assets/kuliner-kopijoss.jpg";

export const Route = createFileRoute("/kuliner")({
  head: () => ({
    meta: [
      { title: "Kuliner Yogyakarta — Gudeg, Bakpia, Sate Klathak, Kopi Joss" },
      { name: "description", content: "Peta rasa Yogyakarta: gudeg manis, bakpia pathok, sate klathak, dan kopi joss arang." },
      { property: "og:title", content: "Kuliner Yogyakarta — Jogja Heritage" },
      { property: "og:image", content: gudeg },
    ],
  }),
  component: KulinerPage,
});

type Dish = { img: string; name: string; origin: LocalizedText; desc: LocalizedText; price: string };

const dishes: Dish[] = [
  {
    img: gudeg,
    name: "Gudeg",
    origin: { id: "Yogyakarta", en: "Yogyakarta", zh: "日惹" },
    desc: {
      id: "Nangka muda direbus berjam-jam dengan santan, gula merah, dan daun jati hingga merah kecoklatan. Manis yang tenang — sangat Jogja.",
      en: "Young jackfruit slow-simmered for hours with coconut milk, palm sugar, and teak leaves to a deep mahogany. A calm sweetness — quintessentially Jogja.",
      zh: "嫩菠萝蜜慢炖数小时,加入椰浆、椰糖与柚木叶,呈现深棕红色。温和的甜味 —— 极具日惹特色。",
    },
    price: "Rp 15K — 45K",
  },
  {
    img: bakpia,
    name: "Bakpia Pathok",
    origin: { id: "Pathok, Yogyakarta", en: "Pathok, Yogyakarta", zh: "日惹 Pathok" },
    desc: {
      id: "Roti isi kacang hijau warisan komunitas Tionghoa abad 20. Kulit tipis, isian lembut, paling enak hangat dari oven.",
      en: "Mung-bean filled pastries from the early-20th-century Chinese community. Thin crust, soft filling, best eaten warm from the oven.",
      zh: "20世纪初华人社区流传下来的绿豆馅点心。皮薄馅软,刚出炉时最美味。",
    },
    price: "Rp 35K / kotak",
  },
  {
    img: sate,
    name: "Sate Klathak",
    origin: { id: "Bantul", en: "Bantul", zh: "Bantul" },
    desc: {
      id: "Daging kambing muda ditusuk jeruji besi (bukan bambu) lalu dibakar dengan bumbu sederhana: garam. Disajikan dengan kuah gulai bening.",
      en: "Young goat meat skewered on iron rods (not bamboo) and grilled with a single seasoning: salt. Served with a clear gulai broth.",
      zh: "嫩羊肉穿在铁签(非竹签)上,仅以盐调味烤制,搭配清澈的咖喱汤。",
    },
    price: "Rp 30K / porsi",
  },
  {
    img: kopi,
    name: "Kopi Joss",
    origin: { id: "Angkringan Tugu", en: "Tugu Angkringan", zh: "Tugu 路边摊" },
    desc: {
      id: "Kopi hitam panas dengan arang membara dicelupkan langsung. Suara 'joss!' adalah signature kuliner malam Yogyakarta.",
      en: "Black coffee with red-hot charcoal plunged directly into the cup. The 'joss!' hiss is the signature of Yogyakarta's night food scene.",
      zh: "在黑咖啡中直接投入燃烧的木炭。「joss!」的嘶嘶声是日惹夜宵的标志。",
    },
    price: "Rp 5K — 8K",
  },
];

function KulinerPage() {
  const { t, tl } = useI18n();
  return (
    <article className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
      <header className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <SectionLabel number="03" label={t("nav.kuliner")} />
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            {t("kuliner.title.a")} <span className="italic text-terracotta">{t("kuliner.title.em")}</span> {t("kuliner.title.b")}
          </h1>
        </div>
        <div className="md:col-span-4">
          <p className="mt-2 text-base leading-relaxed text-ink-soft">{t("kuliner.lead")}</p>
        </div>
      </header>

      <div className="mt-20 grid gap-x-8 gap-y-20 md:grid-cols-2">
        {dishes.map((d, i) => (
          <div key={d.name} className="group">
            <div className="overflow-hidden">
              <img src={d.img} alt={d.name} width={1024} height={1024} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-terracotta">{String(i + 1).padStart(2, "0")} — {tl(d.origin)}</p>
              <p className="font-mono text-[11px] text-ink-soft">{d.price}</p>
            </div>
            <h2 className="mt-2 font-display text-4xl text-ink">{d.name}</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">{tl(d.desc)}</p>
          </div>
        ))}
      </div>

      
    </article>
  );
}
