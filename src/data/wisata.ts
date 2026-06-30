import borobudur from "../assets/wisata-borobudur.jpg";
import prambanan from "../assets/wisata-prambanan.jpg";
import keraton from "../assets/wisata-keraton.jpg";
import tamansari from "../assets/wisata-tamansari.jpg";
import malioboro from "../assets/wisata-malioboro.jpg";
import parangtritis from "../assets/wisata-parangtritis.jpg";
import mangunan from "../assets/wisata-mangunan.jpg";
import jomblang from "../assets/wisata-jomblang.jpg";
import type { LocalizedText } from "@/lib/i18n";

export type Category = "Candi" | "Keraton" | "Kota" | "Pantai" | "Alam" | "Gua";

export type Destination = {
  slug: string;
  name: string;
  category: Category;
  region: string;
  lat: number;
  lng: number;
  image: string;
  short: LocalizedText;
  story: LocalizedText;
  ticket: string;
  hours: string;
  tips: LocalizedText;
};

export const destinations: Destination[] = [
  {
    slug: "borobudur",
    name: "Candi Borobudur",
    category: "Candi",
    region: "Magelang (zona Jogja-Solo-Semarang)",
    lat: -7.6079,
    lng: 110.2038,
    image: borobudur,
    short: {
      id: "Mahakarya Buddha abad ke-9, terbesar di dunia.",
      en: "A 9th-century Buddhist masterpiece, the largest in the world.",
      zh: "九世纪佛教杰作,世界最大佛塔。",
    },
    story: {
      id: "Dibangun pada masa Wangsa Syailendra sekitar tahun 825 Masehi, Borobudur adalah peziarahan tiga tingkat — Kamadhatu, Rupadhatu, Arupadhatu — yang menuntun manusia dari dunia hasrat menuju kekosongan sempurna. 504 arca Buddha dan 2.672 panel relief menjadikannya buku batu terbesar yang pernah dipahat manusia.",
      en: "Built under the Syailendra dynasty around 825 CE, Borobudur is a three-tiered pilgrimage — Kamadhatu, Rupadhatu, Arupadhatu — leading from the world of desire to perfect emptiness. 504 Buddha statues and 2,672 relief panels make it the largest book of stone ever carved by humans.",
      zh: "建于约公元825年夏连特拉王朝时期。婆罗浮屠是三层朝圣道场 —— 欲界、色界、无色界 —— 引导人由欲望走向圆满空寂。504尊佛像与2,672幅浮雕,使其成为人类雕刻过的最大石书。",
    },
    ticket: "Rp 50.000 — Rp 455.000",
    hours: "06.30 – 16.30 WIB",
    tips: {
      id: "Pilih tiket sunrise dari Manohara untuk pengalaman paling sunyi.",
      en: "Choose the Manohara sunrise ticket for the quietest experience.",
      zh: "选择 Manohara 日出门票,体验最宁静的时刻。",
    },
  },
  {
    slug: "prambanan",
    name: "Candi Prambanan",
    category: "Candi",
    region: "Sleman",
    lat: -7.752,
    lng: 110.4915,
    image: prambanan,
    short: {
      id: "Candi Hindu tertinggi di Asia Tenggara, lahir dari kisah Roro Jonggrang.",
      en: "Southeast Asia's tallest Hindu temple, born from the legend of Roro Jonggrang.",
      zh: "东南亚最高的印度教神庙,源自罗罗·琼格朗的传说。",
    },
    story: {
      id: "Selesai abad ke-9 di masa Rakai Pikatan, kompleks Prambanan memuliakan Trimurti: Brahma, Wisnu, dan Siwa. Tiga candi utamanya menjulang 47 meter, dikelilingi ratusan candi perwara yang menyusun mandala kosmik.",
      en: "Completed in the 9th century under Rakai Pikatan, Prambanan honours the Trimurti: Brahma, Vishnu, and Shiva. Its three main temples rise 47 metres, surrounded by hundreds of smaller candis forming a cosmic mandala.",
      zh: "九世纪 Rakai Pikatan 时期建成,普兰巴南供奉三相神:梵天、毗湿奴与湿婆。三座主庙高达47米,周围数百座小庙构成宇宙曼陀罗。",
    },
    ticket: "Rp 50.000 — Rp 375.000",
    hours: "06.30 – 17.00 WIB",
    tips: {
      id: "Pertunjukan Ramayana Ballet digelar saat purnama — datang lebih awal.",
      en: "The Ramayana Ballet runs on full-moon nights — arrive early.",
      zh: "罗摩衍那芭蕾舞在满月之夜上演 —— 请提早到场。",
    },
  },
  {
    slug: "keraton",
    name: "Keraton Yogyakarta",
    category: "Keraton",
    region: "Kota Yogyakarta",
    lat: -7.8053,
    lng: 110.3642,
    image: keraton,
    short: {
      id: "Istana Sultan yang masih hidup, jantung kosmologi Jawa.",
      en: "A living royal palace, the heart of Javanese cosmology.",
      zh: "仍在运作的苏丹王宫,爪哇宇宙观的心脏。",
    },
    story: {
      id: "Didirikan Sultan Hamengku Buwono I pada 1755 setelah Perjanjian Giyanti, Keraton membentuk sumbu filosofis Tugu–Keraton–Panggung Krapyak yang melambangkan perjalanan hidup manusia.",
      en: "Founded by Sultan Hamengku Buwono I in 1755 after the Treaty of Giyanti, the Keraton anchors the Tugu–Keraton–Panggung Krapyak philosophical axis symbolising the human journey.",
      zh: "由 Hamengku Buwono 一世于1755年吉延蒂条约后创建,王宫构成 Tugu–Keraton–Panggung Krapyak 哲学轴,象征人生旅程。",
    },
    ticket: "Rp 15.000",
    hours: "08.30 – 14.00 WIB",
    tips: {
      id: "Datang Sabtu untuk pagelaran wayang kulit dan gamelan.",
      en: "Visit on Saturday for live wayang kulit and gamelan performances.",
      zh: "周六前往可观赏皮影戏与甘美兰现场表演。",
    },
  },
  {
    slug: "taman-sari",
    name: "Taman Sari",
    category: "Keraton",
    region: "Kota Yogyakarta",
    lat: -7.8101,
    lng: 110.3596,
    image: tamansari,
    short: {
      id: "Taman air rahasia Sultan, labirin lorong bawah tanah dan kolam pemandian.",
      en: "The Sultan's secret water garden — underground tunnels and bathing pools.",
      zh: "苏丹的秘密水上花园 —— 地下隧道与浴池迷宫。",
    },
    story: {
      id: "Dibangun 1758 sebagai pesanggrahan keluarga kerajaan. Selain rekreasi, kompleks ini berfungsi sebagai benteng pertahanan dengan jaringan terowongan dan masjid bawah tanah Sumur Gumuling.",
      en: "Built in 1758 as the royal family's retreat. Beyond leisure, it served as a fortress with a network of tunnels and the underground Sumur Gumuling mosque.",
      zh: "建于1758年,原为王室避暑别墅。除休闲外,还作为要塞,拥有地下隧道网络与 Sumur Gumuling 地下清真寺。",
    },
    ticket: "Rp 15.000",
    hours: "09.00 – 15.00 WIB",
    tips: {
      id: "Sewa pemandu lokal untuk masuk Sumur Gumuling — lorongnya tersembunyi.",
      en: "Hire a local guide to enter Sumur Gumuling — the tunnels are hidden.",
      zh: "请当地导游带您进入 Sumur Gumuling —— 隧道入口隐蔽。",
    },
  },
  {
    slug: "malioboro",
    name: "Malioboro",
    category: "Kota",
    region: "Kota Yogyakarta",
    lat: -7.7925,
    lng: 110.3658,
    image: malioboro,
    short: {
      id: "Sumbu jalan yang menghubungkan Tugu, Keraton, dan denyut kota.",
      en: "The avenue connecting the Tugu, the Keraton, and the city's pulse.",
      zh: "连接 Tugu 纪念碑、王宫与城市脉动的主轴街道。",
    },
    story: {
      id: "Nama Malioboro diduga berasal dari bahasa Sansekerta 'malyabhara' — untaian bunga. Pada masa kolonial menjadi koridor dagang utama; kini ia adalah ruang publik utama warga Jogja.",
      en: "The name Malioboro likely derives from the Sanskrit 'malyabhara' — garlands of flowers. Once a colonial trade corridor, it is now the city's main public space.",
      zh: "Malioboro 之名据信来自梵语「malyabhara」—— 花环。殖民时期为主要商道,如今是日惹的核心公共空间。",
    },
    ticket: "Gratis",
    hours: "24 jam",
    tips: {
      id: "Datang malam Sabtu untuk musisi jalanan dan angkringan kopi joss.",
      en: "Come on Saturday nights for street musicians and angkringan coffee.",
      zh: "周六晚到访,可邂逅街头乐手与路边嘶嘶咖啡摊。",
    },
  },
  {
    slug: "parangtritis",
    name: "Pantai Parangtritis",
    category: "Pantai",
    region: "Bantul",
    lat: -8.0254,
    lng: 110.3279,
    image: parangtritis,
    short: {
      id: "Pantai pasir hitam mistis, gerbang spiritual menuju Laut Selatan.",
      en: "Mystical black-sand beach, the spiritual gateway to the Southern Sea.",
      zh: "神秘的黑沙海滩,通往南海的精神门户。",
    },
    story: {
      id: "Bagi masyarakat Jawa, pantai ini adalah istana Kanjeng Ratu Kidul, penguasa lautan selatan. Tebing karang Parangndog dan bukit pasir gumuk menjadi lanskap paling sinematik di selatan Jogja.",
      en: "For Javanese society, this beach is the palace of Kanjeng Ratu Kidul, queen of the southern seas. The Parangndog cliffs and gumuk sand dunes form the most cinematic landscape south of Jogja.",
      zh: "在爪哇人心中,这片海滩是南海女王 Kanjeng Ratu Kidul 的宫殿。Parangndog 悬崖与沙丘构成日惹南部最具电影感的景观。",
    },
    ticket: "Rp 10.000",
    hours: "24 jam",
    tips: {
      id: "Hindari mengenakan pakaian hijau — tradisi setempat melarangnya.",
      en: "Avoid wearing green — local tradition forbids it on this shore.",
      zh: "避免穿绿色衣物 —— 当地传统忌讳。",
    },
  },
  {
    slug: "mangunan",
    name: "Hutan Pinus Mangunan",
    category: "Alam",
    region: "Bantul",
    lat: -7.9276,
    lng: 110.4221,
    image: mangunan,
    short: {
      id: "Hutan pinus reboisasi yang menjelma katedral cahaya pagi.",
      en: "A reforested pine grove turned into a cathedral of morning light.",
      zh: "再造的松林,化身为晨光的大教堂。",
    },
    story: {
      id: "Ditanam pada 1980-an untuk merehabilitasi lahan kritis Imogiri, kini hutan ini menjadi panggung alam terbuka dan ikon fotografi Yogyakarta.",
      en: "Planted in the 1980s to rehabilitate degraded land in Imogiri, this grove is now an open-air stage and a photographic icon of Yogyakarta.",
      zh: "1980年代为修复 Imogiri 退化土地而种植,如今是露天舞台与日惹的摄影地标。",
    },
    ticket: "Rp 5.000",
    hours: "06.00 – 18.00 WIB",
    tips: {
      id: "Datang sebelum jam 8 pagi untuk cahaya senja-pagi (golden hour).",
      en: "Arrive before 8 AM for the early golden hour light beams.",
      zh: "上午八点前到达,可遇见黄金时刻的光束。",
    },
  },
  {
    slug: "jomblang",
    name: "Goa Jomblang",
    category: "Gua",
    region: "Gunungkidul",
    lat: -8.0289,
    lng: 110.6394,
    image: jomblang,
    short: {
      id: "'Cahaya surga' yang turun dari mulut gua vertikal sedalam 60 meter.",
      en: "'Light of heaven' descending from a 60-metre vertical cave mouth.",
      zh: "从60米垂直洞口洒落的「天堂之光」。",
    },
    story: {
      id: "Terbentuk dari runtuhan kapur ribuan tahun lalu, sinkhole ini menyimpan hutan purba di dasarnya. Pukul 10–12, cahaya matahari menembus lubang menjadi pilar emas yang dijuluki 'cahaya surga'.",
      en: "Formed by a limestone collapse thousands of years ago, this sinkhole holds a primeval forest at its base. Between 10 AM and noon, sunlight pierces the opening as a golden pillar called the 'light of heaven'.",
      zh: "数千年前石灰岩坍塌形成的天坑,底部保存着原始森林。上午10时至中午,阳光穿洞而下,化作被称为「天堂之光」的金色光柱。",
    },
    ticket: "Rp 500.000 (paket caving)",
    hours: "Reservasi — kuota harian terbatas",
    tips: {
      id: "Pesan minimal 1 minggu sebelumnya, hanya 25 orang per hari.",
      en: "Book at least one week ahead — only 25 spots per day.",
      zh: "请至少提前一周预订,每日仅限25人。",
    },
  },
];
