import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/ui-heritage/SectionLabel";
import { useI18n, type LocalizedText } from "@/lib/i18n";
import batik from "../assets/budaya-batik.jpg";
import gamelan from "../assets/budaya-gamelan.jpg";
import wayang from "../assets/budaya-wayang.jpg";
import tari from "../assets/budaya-tari.jpg";

export const Route = createFileRoute("/budaya")({
  head: () => ({
    meta: [
      { title: "Budaya Yogyakarta — Batik, Gamelan, Wayang, Tari" },
      { name: "description", content: "Empat warisan budaya hidup di Yogyakarta: batik Parang & Kawung, gamelan, wayang kulit, dan tari Bedhaya." },
      { property: "og:title", content: "Budaya Yogyakarta — Jogja Heritage" },
      { property: "og:image", content: batik },
    ],
  }),
  component: BudayaPage,
});

type Item = { img: string; name: LocalizedText; eyebrow: LocalizedText; body: LocalizedText };

const items: Item[] = [
  {
    img: batik,
    name: { id: "Batik Parang & Kawung", en: "Parang & Kawung Batik", zh: "Parang 与 Kawung 蜡染" },
    eyebrow: { id: "Tekstil", en: "Textile", zh: "纺织" },
    body: {
      id: "Motif Parang berarti pedang — dahulu hanya boleh dipakai keluarga Sultan. Kawung, lingkaran berempat, melambangkan keseimbangan empat arah mata angin. UNESCO mencatatnya sebagai Warisan Budaya Tak Benda sejak 2009.",
      en: "Parang means 'sword' — once worn only by the Sultan's family. Kawung, four interlocked circles, symbolises balance across the cardinal directions. UNESCO listed batik as Intangible Cultural Heritage in 2009.",
      zh: "Parang 意为「剑」—— 昔日仅限苏丹家族穿着。Kawung 由四个交错的圆构成,象征四方平衡。联合国教科文组织于2009年将蜡染列为非物质文化遗产。",
    },
  },
  {
    img: gamelan,
    name: { id: "Gamelan", en: "Gamelan", zh: "甘美兰" },
    eyebrow: { id: "Musik", en: "Music", zh: "音乐" },
    body: {
      id: "Orkestra logam yang bergerak seperti pernapasan kolektif — tidak ada solo, tidak ada dominasi. Setiap penabuh mendengarkan yang lain. Sebuah filsafat sosial yang dimainkan dengan palu kayu.",
      en: "A metal orchestra moving like collective breath — no soloists, no dominance. Each player listens to the others. A social philosophy played with wooden mallets.",
      zh: "金属乐队的演奏如同集体呼吸 —— 无独奏,无主宰。每位乐手都在聆听他人,是用木槌演奏的社会哲学。",
    },
  },
  {
    img: wayang,
    name: { id: "Wayang Kulit", en: "Wayang Kulit", zh: "皮影戏" },
    eyebrow: { id: "Pertunjukan", en: "Performance", zh: "表演" },
    body: {
      id: "Pertunjukan bayangan kulit kerbau yang berlangsung semalam suntuk. Dalang adalah penyair, sutradara, dan filsuf sekaligus — satu suara untuk seratus tokoh.",
      en: "A shadow play of buffalo-hide puppets that runs through the night. The dalang is poet, director, and philosopher — one voice for a hundred characters.",
      zh: "用水牛皮影演出的通宵戏剧。皮影大师身兼诗人、导演与哲学家 —— 一人之声演绎百角。",
    },
  },
  {
    img: tari,
    name: { id: "Tari Bedhaya", en: "Bedhaya Dance", zh: "Bedhaya 舞" },
    eyebrow: { id: "Tari Sakral", en: "Sacred Dance", zh: "圣舞" },
    body: {
      id: "Sembilan penari perempuan, gerak yang sangat lambat, busana keemasan. Bedhaya bukan tontonan, melainkan persembahan: meditasi yang dipertunjukkan.",
      en: "Nine women, glacial movements, golden costumes. Bedhaya is not spectacle but offering — meditation made visible.",
      zh: "九位女舞者、极缓的动作、金色服饰。Bedhaya 并非表演,而是供奉 —— 化为可见的冥想。",
    },
  },
];

function BudayaPage() {
  const { t, tl } = useI18n();
  return (
    <article className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-32">
      <header className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <SectionLabel number="02" label={t("nav.budaya")} />
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            {t("budaya.title.a")} <span className="italic text-terracotta">{t("budaya.title.em")}</span>
          </h1>
        </div>
        <div className="md:col-span-4">
          <p className="mt-2 text-base leading-relaxed text-ink-soft">{t("budaya.lead")}</p>
        </div>
      </header>

      <div className="mt-20 space-y-32">
        {items.map((it, i) => (
          <div key={i} className={`grid items-center gap-10 md:grid-cols-12 ${i % 2 ? "md:[&>figure]:order-2" : ""}`}>
            <figure className="md:col-span-7">
              <img src={it.img} alt={tl(it.name)} width={1280} height={896} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </figure>
            <div className="md:col-span-5">
              <p className="eyebrow">{String(i + 1).padStart(2, "0")} — {tl(it.eyebrow)}</p>
              <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">{tl(it.name)}</h2>
              <p className="hairline my-6 w-16 !bg-terracotta" />
              <p className="text-base leading-relaxed text-ink-soft">{tl(it.body)}</p>
            </div>
          </div>
        ))}
      </div>

      
    </article>
  );
}
