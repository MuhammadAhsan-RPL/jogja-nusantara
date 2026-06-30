// Galleries built from local project assets — fast, offline, and on-brand.
import type { LocalizedText } from "@/lib/i18n";

import batik from "@/assets/budaya-batik.jpg";
import gamelan from "@/assets/budaya-gamelan.jpg";
import wayang from "@/assets/budaya-wayang.jpg";
import tari from "@/assets/budaya-tari.jpg";

import gudeg from "@/assets/kuliner-gudeg.jpg";
import bakpia from "@/assets/kuliner-bakpia.jpg";
import sate from "@/assets/kuliner-sateklathak.jpg";
import kopi from "@/assets/kuliner-kopijoss.jpg";

import borobudur from "@/assets/wisata-borobudur.jpg";
import prambanan from "@/assets/wisata-prambanan.jpg";
import keraton from "@/assets/wisata-keraton.jpg";
import tamansari from "@/assets/wisata-tamansari.jpg";
import malioboro from "@/assets/wisata-malioboro.jpg";
import parangtritis from "@/assets/wisata-parangtritis.jpg";
import mangunan from "@/assets/wisata-mangunan.jpg";
import jomblang from "@/assets/wisata-jomblang.jpg";
import tugu from "@/assets/hero-tugu.jpg";

export type Photo = { url: string; caption: LocalizedText };

export const budayaGallery: Photo[] = [
  { url: batik, caption: { id: "Pembatik menorehkan canting di atas mori.", en: "An artisan inscribes wax with a canting.", zh: "工匠用蜡笔描绘图案。" } },
  { url: gamelan, caption: { id: "Penabuh gamelan dalam laras pelog.", en: "Gamelan players in the pelog tuning.", zh: "甘美兰乐手以 pelog 音阶演奏。" } },
  { url: wayang, caption: { id: "Wayang kulit — bayangan yang berbicara.", en: "Wayang kulit — the shadows that speak.", zh: "皮影戏 —— 会说话的影子。" } },
  { url: tari, caption: { id: "Tari Bedhaya — meditasi yang dipertunjukkan.", en: "Bedhaya — a meditation made visible.", zh: "Bedhaya 舞 —— 被演示的冥想。" } },
  { url: batik, caption: { id: "Motif Parang, pola dinasti Mataram.", en: "Parang motif, a Mataram dynasty pattern.", zh: "Parang 纹样,马打蓝王朝图案。" } },
  { url: gamelan, caption: { id: "Bonang dan saron — denting logam beresonansi.", en: "Bonang and saron — resonant metal voices.", zh: "Bonang 与 saron —— 金属之音共鸣。" } },
  { url: wayang, caption: { id: "Dalang memandu seratus tokoh dengan satu suara.", en: "The dalang voices a hundred characters.", zh: "皮影大师以一人之声演绎百角。" } },
  { url: tari, caption: { id: "Sembilan penari, gerak nan lambat keemasan.", en: "Nine dancers, slow golden movements.", zh: "九位舞者,缓慢的金色动作。" } },
  { url: batik, caption: { id: "Kawung — empat lingkaran keseimbangan.", en: "Kawung — four circles of balance.", zh: "Kawung —— 四圆平衡。" } },
];

export const kulinerGallery: Photo[] = [
  { url: gudeg, caption: { id: "Gudeg, manis nangka yang sangat Jogja.", en: "Gudeg — sweet jackfruit, distinctly Jogja.", zh: "古德 —— 标志性的甜味菠萝蜜炖菜。" } },
  { url: bakpia, caption: { id: "Bakpia pathok hangat keluar dari oven.", en: "Pathok bakpia, warm from the oven.", zh: "刚出炉的 Pathok 肉饼。" } },
  { url: sate, caption: { id: "Sate klathak — jeruji besi menghantarkan panas.", en: "Sate klathak — iron skewers conduct heat.", zh: "铁签羊肉串 —— 铁签导热均匀。" } },
  { url: kopi, caption: { id: "Kopi joss dengan arang membara.", en: "Kopi joss served with glowing charcoal.", zh: "嘶嘶咖啡配燃烧木炭。" } },
  { url: gudeg, caption: { id: "Disajikan dengan krecek pedas dan telur.", en: "Served with spicy krecek and egg.", zh: "搭配辣味 krecek 与鸡蛋。" } },
  { url: bakpia, caption: { id: "Isian kacang hijau klasik dari Pathok.", en: "The classic mung-bean filling of Pathok.", zh: "Pathok 经典绿豆馅。" } },
  { url: sate, caption: { id: "Dibakar di atas bara, disiram kuah gulai bening.", en: "Grilled over coals, served with clear gulai.", zh: "炭火烤制,配清亮咖喱汤。" } },
  { url: kopi, caption: { id: "Angkringan Tugu, percakapan hingga subuh.", en: "Angkringan Tugu — conversations until dawn.", zh: "Tugu 路边摊 —— 聊至天明。" } },
  { url: gudeg, caption: { id: "Resep yang diwariskan dari generasi ke generasi.", en: "A recipe passed down through generations.", zh: "世代相传的食谱。" } },
];

export const wisataGallery: Photo[] = [
  { url: borobudur, caption: { id: "Stupa puncak Borobudur saat fajar.", en: "The crown stupas of Borobudur at dawn.", zh: "黎明时分婆罗浮屠的顶塔。" } },
  { url: prambanan, caption: { id: "Prambanan saat senja, jingga di Trimurti.", en: "Prambanan at dusk, orange on the Trimurti.", zh: "黄昏时分,橙色覆盖三相神庙。" } },
  { url: keraton, caption: { id: "Keraton Yogyakarta — pusat dunia Mataram.", en: "Kraton Yogyakarta — the Mataram axis mundi.", zh: "日惹王宫 —— 马打蓝的世界中心。" } },
  { url: tamansari, caption: { id: "Lorong Taman Sari, taman air para sultan.", en: "Taman Sari corridors — the sultan's water garden.", zh: "Taman Sari 长廊 —— 苏丹的水园。" } },
  { url: malioboro, caption: { id: "Becak dan lampu di sepanjang Malioboro.", en: "Becak rickshaws and lanterns along Malioboro.", zh: "Malioboro 大街上的三轮车与灯笼。" } },
  { url: parangtritis, caption: { id: "Pantai Parangtritis dan ombak Laut Selatan.", en: "Parangtritis and the Southern Sea waves.", zh: "Parangtritis 海滩与南海狂浪。" } },
  { url: mangunan, caption: { id: "Hutan Pinus Mangunan — cahaya di antara batang.", en: "Mangunan pine forest — light between the trunks.", zh: "Mangunan 松林 —— 光束穿过树干。" } },
  { url: jomblang, caption: { id: "Cahaya surga di Goa Jomblang.", en: "The 'light of heaven' at Jomblang Cave.", zh: "Jomblang 洞的「天堂之光」。" } },
  { url: tugu, caption: { id: "Tugu Pal Putih — penanda sumbu filosofis.", en: "Tugu Pal Putih — marker of the philosophical axis.", zh: "Tugu Pal Putih —— 哲学轴线的标志。" } },
];
