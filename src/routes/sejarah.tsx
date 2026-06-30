import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/ui-heritage/SectionLabel";
import { useI18n, type LocalizedText } from "@/lib/i18n";
import heroKeraton from "@/assets/wisata-keraton.jpg";

export const Route = createFileRoute("/sejarah")({
  head: () => ({
    meta: [
      { title: "Sejarah Yogyakarta — Dari Mataram Kuno hingga Daerah Istimewa" },
      { name: "description", content: "Lintasan sejarah Yogyakarta: Mataram Kuno, Mataram Islam, Perjanjian Giyanti 1755, Kasultanan, hingga Daerah Istimewa." },
      { property: "og:title", content: "Sejarah Yogyakarta — Jogja Heritage" },
      { property: "og:image", content: heroKeraton },
    ],
  }),
  component: SejarahPage,
});

type Era = { year: string; title: LocalizedText; body: LocalizedText };

const eras: Era[] = [
  {
    year: "732 M",
    title: { id: "Prasasti Canggal", en: "The Canggal Inscription", zh: "Canggal 碑铭" },
    body: {
      id: "Rakai Mataram Sang Ratu Sanjaya mendirikan kerajaan Hindu Mataram Kuno. Prasasti Canggal di Gunung Wukir menandai lahirnya peradaban besar pertama di Jawa Tengah selatan.",
      en: "Rakai Mataram Sang Ratu Sanjaya founded the Hindu kingdom of Ancient Mataram. The Canggal Inscription on Mount Wukir marks the birth of the first great civilisation in southern Central Java.",
      zh: "Rakai Mataram Sang Ratu Sanjaya 创建印度教古马打蓝王国。Gunung Wukir 上的 Canggal 碑铭标志着中爪哇南部首个伟大文明的诞生。",
    },
  },
  {
    year: "825 M",
    title: { id: "Borobudur diresmikan", en: "Borobudur consecrated", zh: "婆罗浮屠落成" },
    body: {
      id: "Wangsa Syailendra yang Buddhis menyelesaikan Borobudur — mahakarya 504 arca Buddha. Pada masa yang sama dinasti Sanjaya membangun Prambanan untuk Trimurti.",
      en: "The Buddhist Syailendra dynasty completed Borobudur — a masterpiece of 504 Buddhas. In parallel, the Sanjaya dynasty built Prambanan for the Trimurti.",
      zh: "佛教夏连特拉王朝完成婆罗浮屠 —— 504尊佛像的杰作。同期 Sanjaya 王朝为三相神建造普兰巴南。",
    },
  },
  {
    year: "1587",
    title: { id: "Berdirinya Mataram Islam", en: "Founding of Islamic Mataram", zh: "伊斯兰马打蓝建立" },
    body: {
      id: "Panembahan Senopati memindahkan pusat kekuasaan ke Kotagede dan mendirikan Kesultanan Mataram Islam — cikal-bakal Yogyakarta dan Surakarta modern.",
      en: "Panembahan Senopati moved the seat of power to Kotagede and founded the Sultanate of Islamic Mataram — the seed of modern Yogyakarta and Surakarta.",
      zh: "Panembahan Senopati 将权力中心迁至 Kotagede,建立伊斯兰马打蓝苏丹国 —— 现代日惹与梭罗的雏形。",
    },
  },
  {
    year: "1755",
    title: { id: "Perjanjian Giyanti", en: "The Treaty of Giyanti", zh: "吉延蒂条约" },
    body: {
      id: "Pangeran Mangkubumi diakui sebagai Sultan Hamengku Buwono I dan mendirikan Kasultanan Ngayogyakarta Hadiningrat. Tahun ini adalah kelahiran resmi kota Yogyakarta.",
      en: "Prince Mangkubumi was recognised as Sultan Hamengku Buwono I and founded the Sultanate of Ngayogyakarta Hadiningrat. This year marks the official birth of Yogyakarta.",
      zh: "Mangkubumi 王子被承认为 Hamengku Buwono 一世,创建 Ngayogyakarta Hadiningrat 苏丹国。此年为日惹城正式诞生之年。",
    },
  },
  {
    year: "1755 — 1813",
    title: { id: "Pembangunan kota", en: "Building the city", zh: "城市建设" },
    body: {
      id: "Sumbu filosofi Tugu — Keraton — Panggung Krapyak digariskan, memetakan perjalanan hidup manusia dari lahir hingga kembali kepada Sang Pencipta.",
      en: "The Tugu — Keraton — Panggung Krapyak philosophical axis was drawn, mapping a human life from birth to the return to the Creator.",
      zh: "Tugu — Keraton — Panggung Krapyak 的哲学轴线被划定,标示人由生至归造物主的旅程。",
    },
  },
  {
    year: "1946",
    title: { id: "Ibu kota Republik", en: "Capital of the Republic", zh: "共和国首都" },
    body: {
      id: "Saat Jakarta tidak aman, Sultan Hamengku Buwono IX menawarkan Yogyakarta sebagai ibu kota Republik Indonesia (1946–1949). Sebuah keputusan politik yang menyelamatkan kemerdekaan muda kita.",
      en: "When Jakarta was unsafe, Sultan Hamengku Buwono IX offered Yogyakarta as the capital of the Republic (1946–1949) — a political decision that saved a young independence.",
      zh: "雅加达不安全时,Hamengku Buwono 九世主动将日惹奉为共和国首都(1946–1949) —— 拯救年轻独立的政治抉择。",
    },
  },
  {
    year: "1950",
    title: { id: "Daerah Istimewa", en: "Special Region", zh: "特别行政区" },
    body: {
      id: "Yogyakarta resmi berstatus Daerah Istimewa — satu-satunya provinsi yang dipimpin Sultan sebagai Gubernur. Otonomi simbolik yang tetap hidup hingga hari ini.",
      en: "Yogyakarta was officially designated a Special Region — the only province governed by a Sultan. A symbolic autonomy still alive today.",
      zh: "日惹正式获特别行政区地位 —— 唯一由苏丹任省长的省份。这一象征性自治延续至今。",
    },
  },
  {
    year: "Kini",
    title: { id: "Kota pelajar & pusaka", en: "City of students & heritage", zh: "学生与遗产之城" },
    body: {
      id: "Lebih dari 100 perguruan tinggi, ratusan kantong seni, dan ekosistem digital yang tumbuh. Jogja menjadi laboratorium tentang bagaimana tradisi dan teknologi bisa duduk satu meja.",
      en: "Over 100 universities, hundreds of art collectives, and a growing digital ecosystem. Jogja is a laboratory of how tradition and technology can sit at the same table.",
      zh: "拥有逾百所高校、数百个艺术团体与不断成长的数字生态。日惹是传统与科技同席共坐的实验场。",
    },
  },
];

function SejarahPage() {
  const { t, tl } = useI18n();
  return (
    <article className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-32">
      <header className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <SectionLabel number="01" label={t("nav.sejarah")} />
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            {t("sejarah.title.a")} <span className="italic text-terracotta">{t("sejarah.title.em")}</span> {t("sejarah.title.b")}
          </h1>
        </div>
        <div className="md:col-span-5">
          <p className="drop-cap mt-2 text-base leading-relaxed text-ink-soft">{t("sejarah.lead")}</p>
        </div>
      </header>

      <figure className="my-16">
        <img src={heroKeraton} alt="Keraton Yogyakarta" width={1280} height={896} loading="lazy" className="w-full" />
        <figcaption className="mt-3 font-display italic text-sm text-ink-soft">{t("sejarah.caption")}</figcaption>
      </figure>

      <ol className="relative border-l border-[var(--color-rule)]">
        {eras.map((e, i) => (
          <li key={i} className="relative grid grid-cols-12 gap-6 pl-8 pb-14">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-terracotta" />
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-xs tracking-[0.22em] text-terracotta">{e.year}</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-display text-3xl text-ink md:text-4xl">{tl(e.title)}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">{tl(e.body)}</p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
