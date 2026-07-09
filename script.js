const tariffs = [
  {
    category: "mobil",
    title: "3 Aylık İnternet Paketleri",
    subtitle: "Faturalı yeni müşteri ek internet",
    features: ["90 gün", "Tekrar satın alınabilir", "SMS: 3 AYLIK X GB"],
    note: "İnternet hakkı 90 gün geçerlidir ve süre sonunda yenilenmez.",
    keywords: "mobil faturalı yeni müşteri internet 30 gb 60 gb 100 gb ek paket",
    variants: [
      ["30 GB", "550 TL", "90 gün"],
      ["60 GB", "650 TL", "90 gün"],
      ["100 GB", "800 TL", "90 gün"]
    ]
  },
  {
    category: "mobil",
    title: "Yeni Lider Tarifeler",
    subtitle: "Yeni aktivasyon, numara taşıma ve geçiş",
    features: ["250 SMS", "WhatsApp mesajlaşma", "Kontrol Sizde"],
    note: "Prime seçeneklerde dijital servis ve ek ayrıcalıklar bulunur.",
    keywords: "mobil yeni lider prime 1 gb 5 gb 10 gb 20 gb 30 gb 40 gb 60 gb 80 gb",
    variants: [
      ["1 GB", "275 TL", "1000 DK"],
      ["5 GB", "315 TL", "1000 DK"],
      ["10 GB", "365 TL", "1000 DK"],
      ["20 GB", "465 TL", "1000 DK"],
      ["30 GB", "565 TL", "1000 DK"],
      ["40 GB", "685 TL", "3000 DK"],
      ["60 GB", "795 TL", "3000 DK"],
      ["80 GB", "860 TL", "3000 DK"]
    ]
  },
  {
    category: "mobil",
    title: "HİT Tarifeleri",
    subtitle: "06-15 yaş arası çocuk hatları",
    features: ["500 DK", "500 SMS", "Ebeveyn kampanyası"],
    note: "Yeni aktivasyon, numara taşıma ve faturasızdan faturalıya gelen müşteriler içindir.",
    keywords: "mobil hit çocuk ebeveyn genç 2 gb 10 gb 15 gb 20 gb",
    variants: [
      ["2 GB", "220 TL", "500 DK"],
      ["10 GB", "290 TL", "500 DK"],
      ["15 GB", "330 TL", "500 DK"],
      ["20 GB", "370 TL", "500 DK"]
    ]
  },
  {
    category: "mobil",
    title: "Selfy 1 + 1 Tarifeleri",
    subtitle: "Yeni müşteri Selfy paketleri",
    features: ["50 DK", "50 SMS", "750 DK + 250 SMS hediye"],
    note: "Taahhüt veren müşterilere ücretsiz ek internet faydası tanımlanır.",
    keywords: "mobil selfy genç 5 gb 10 gb 15 gb 20 gb 30 gb 40 gb sınırsız sosyal medya",
    variants: [
      ["5 + 5 GB", "320 TL", "Selfy 5"],
      ["10 + 10 GB", "400 TL", "Selfy 10"],
      ["15 + 15 GB", "500 TL", "Selfy 15"],
      ["20 + 20 GB", "580 TL", "Selfy 20"],
      ["30 + 30 GB", "670 TL", "Selfy 30"],
      ["40 GB", "720 TL", "Sınırsız sosyal medya"]
    ]
  },
  {
    category: "gorevli",
    title: "MEB Öğretmen Tarifeleri",
    subtitle: "Milli Eğitim Bakanlığı personeline özel kamu tarifeleri",
    features: ["1000 SMS", "Aşmayan tarife", "Yurt dışı kullanım"],
    note: "MEB personeli için yeni aktivasyon, numara taşıma ve uygun geçiş kanallarında sunulur.",
    keywords: "görevli gorevli kamu öğretmen ogretmen meb milli eğitim bakanlığı 5 gb 10 gb 15 gb 20 gb 30 gb 40 gb 50 gb özel kamu",
    variants: [
      ["5 GB", "180 TL", "500 DK"],
      ["10 GB", "215 TL", "1000 DK"],
      ["15 GB", "245 TL", "1000 DK"],
      ["20 GB", "275 TL", "1500 DK"],
      ["30 GB", "350 TL", "2000 DK"],
      ["40 GB", "465 TL", "2000 DK"],
      ["50 GB", "500 TL", "2000 DK"]
    ]
  },
  {
    category: "mobil",
    title: "Yeni Nesil Prime",
    subtitle: "Prime ayrıcalıklı faturalı tarife",
    features: ["Sınırsız DK", "Sınırsız SMS", "Prime servisleri"],
    note: "Tarife kapsamında dijital servisler ve Prime ayrıcalıkları bulunur.",
    keywords: "mobil prime yeni nesil 50 gb 75 gb 100 gb 150 gb sınırsız",
    variants: [
      ["50 GB", "850 TL", "Prime"],
      ["75 GB", "950 TL", "Prime"],
      ["100 GB", "1050 TL", "Prime"],
      ["150 GB", "1250 TL", "Prime"],
      ["Sınırsız", "1550 TL", "15 GB hotspot"]
    ]
  },
  {
    category: "mobil",
    title: "Ailece Prime Düşün",
    subtitle: "Aile ortak kullanımlı mobil tarife",
    features: ["5000 DK", "1000 SMS", "Ortak kullanım"],
    note: "4 kişiye kadar ortak paylaşım, toplam 5 kişi kullanım hakkı sunar.",
    keywords: "mobil ailece prime 30 gb 50 gb 100 gb ortak aile",
    variants: [
      ["30 GB", "575 TL", "488 TL indirimli"],
      ["50 GB", "695 TL", "590 TL indirimli"],
      ["100 GB", "1080 TL", "918 TL indirimli"]
    ]
  },
  {
    category: "mobil",
    title: "Prime Netflix Tarifeleri",
    subtitle: "İlk 6 ay Netflix hediyeli",
    features: ["3000 DK", "250 SMS", "Netflix hediyesi"],
    note: "Yeni müşteri ve mevcut müşteri fiyatları ayrı uygulanır.",
    keywords: "mobil prime netflix 30 gb 40 gb 60 gb yeni müşteri mevcut müşteri",
    variants: [
      ["30 GB", "600 TL", "Yeni müşteri"],
      ["40 GB", "720 TL", "Yeni müşteri"],
      ["60 GB", "840 TL", "Yeni müşteri"],
      ["30 GB", "700 TL", "Mevcut müşteri"],
      ["40 GB", "800 TL", "Mevcut müşteri"],
      ["60 GB", "900 TL", "Mevcut müşteri"]
    ]
  },
  {
    category: "ev",
    title: "Teknoloji Evinde",
    subtitle: "Limitsiz ev interneti",
    features: ["18 ay taahhüt", "Limitsiz", "Fiber hızlar"],
    note: "50 Mbps ve üstü hızlarda Hoş Geldin indirimi bulunur.",
    keywords: "ev interneti teknoloji evinde limitsiz 16 mbps 24 mbps 50 mbps 100 mbps 200 mbps 500 mbps 1000 mbps",
    variants: [
      ["16 Mbps", "1099 TL", "Limitsiz"],
      ["24 Mbps", "1099 TL", "Limitsiz"],
      ["50 Mbps", "1149 TL", "Limitsiz"],
      ["100 Mbps", "1149 TL", "Limitsiz"],
      ["200 Mbps", "1249 TL", "Limitsiz"],
      ["500 Mbps", "1399 TL", "Limitsiz"],
      ["1000 Mbps", "1549 TL", "Limitsiz"]
    ]
  },
  {
    category: "ev",
    title: "Gücü Yaşa",
    subtitle: "18 ay taahhütlü limitsiz internet",
    features: ["İlk 9 ay", "Son 9 ay", "Limitsiz"],
    note: "FTTH altyapıda satış 100 Mbps'den başlamaktadır.",
    keywords: "ev interneti gücü yaşa fiber limitsiz 16 mbps 24 mbps 50 mbps 100 mbps",
    variants: [
      ["16 Mbps", "949 / 1249 TL", "İlk 9 / son 9 ay"],
      ["24 Mbps", "949 / 1249 TL", "İlk 9 / son 9 ay"],
      ["50 Mbps", "999 / 1299 TL", "İlk 9 / son 9 ay"],
      ["100 Mbps", "999 / 1299 TL", "İlk 9 / son 9 ay"]
    ]
  },
  {
    category: "ev",
    title: "Evde İşte Mobilliye Avantaj",
    subtitle: "Mobil müşterisine özel ev interneti",
    features: ["18 ay taahhüt", "Limitsiz", "Mobil müşteri"],
    note: "Türk Telekom Evde İnternet başvurusu ile mobil numaranın aynı TCKN'ye ait olması gerekir.",
    keywords: "ev interneti mobilliye avantaj mobil müşteri 24 mbps 50 mbps 100 mbps 200 mbps 500 mbps 1000 mbps",
    variants: [
      ["24 Mbps", "899 TL", "İlk 9 ay"],
      ["50 Mbps", "899 TL", "İlk 9 ay"],
      ["100 Mbps", "1049 TL", "İlk 9 ay"],
      ["200 Mbps", "1199 TL", "İlk 9 ay"],
      ["500 Mbps", "1399 TL", "İlk 9 ay"],
      ["1000 Mbps", "1559 TL", "Son dönem"]
    ]
  },
  {
    category: "ev",
    title: "GAMEON İnternetin Gücü",
    subtitle: "Oyun faydalı limitsiz internet",
    features: ["Playstore hediyesi", "18 ay taahhüt", "Limitsiz"],
    note: "Kampanya kapsamında PC Game Pass, Playstore veya ByNoGame faydalarından biri seçilebilir.",
    keywords: "ev interneti gameon oyun 50 mbps 100 mbps 200 mbps 500 mbps 1000 mbps",
    variants: [
      ["50 Mbps", "850 / 1350 TL", "İlk 6 / sonraki 12 ay"],
      ["100 Mbps", "850 / 1350 TL", "İlk 6 / sonraki 12 ay"],
      ["200 Mbps", "950 / 1450 TL", "İlk 6 / sonraki 12 ay"],
      ["500 Mbps", "1200 / 1550 TL", "Sonraki dönem"],
      ["1000 Mbps", "1350 / 1700 TL", "Sonraki dönem"]
    ]
  },
  {
    category: "ev",
    title: "Tivibulu İnternet",
    subtitle: "Ev interneti içinde kalan Tivibulu internet paketleri",
    features: ["Tivibu Aile", "Sinema/Spor", "Süper"],
    note: "Tivibulu internet, Ev İnterneti sekmesinde kalır; yalın Tivibu/Uydu paketleri ayrı sekmededir.",
    keywords: "ev interneti dsl adsl fttc tivibulu internet 16 mbps 24 mbps 50 mbps 100 mbps tivibu aile sinema spor süper",
    variants: [
      ["16 Mbps", "1209 TL", "Tivibu Aile"],
      ["16 Mbps", "1229 TL", "Spor/Sinema"],
      ["16 Mbps", "1249 TL", "Süper"],
      ["50 Mbps", "1259 TL", "Tivibu Aile"],
      ["100 Mbps", "1259 TL", "Tivibu Aile"],
      ["200 Mbps", "1359 TL", "Tivibu Aile"],
      ["500 Mbps", "1509 TL", "Tivibu Aile"],
      ["1000 Mbps", "1659 TL", "Tivibu Aile"]
    ]
  },
  {
    category: "dsl",
    title: "DSL 4 Mevsim",
    subtitle: "12 ay taahhütlü limitsiz DSL uyumlu hızlar",
    features: ["12 ay taahhüt", "Limitsiz", "DSL uyumlu"],
    note: "ADSL/FTTC altyapıdaki müşteriler için düşük hız seçenekleri dahil listelenir.",
    keywords: "dsl adsl fttc 4 mevsim 16 mbps 24 mbps 50 mbps 100 mbps limitsiz",
    variants: [
      ["16 Mbps", "1099 TL", "Limitsiz"],
      ["24 Mbps", "1099 TL", "Limitsiz"],
      ["50 Mbps", "1099 TL", "Limitsiz"],
      ["100 Mbps", "1149 TL", "Limitsiz"],
      ["200 Mbps", "1249 TL", "Limitsiz"],
      ["500 Mbps", "1399 TL", "Limitsiz"],
      ["1000 Mbps", "1549 TL", "Limitsiz"]
    ]
  },
  {
    category: "ev",
    title: "Üniversiteli İnternet",
    subtitle: "18-25 yaş yeni müşteri kampanyası",
    features: ["12 ay taahhüt", "Muud", "Tivibu GO"],
    note: "İlk 3 ay ve sonraki 9 ay fiyatları farklı uygulanır.",
    keywords: "ev interneti üniversiteli genç 24 mbps 50 mbps 100 mbps 200 mbps 500 mbps 1000 mbps",
    variants: [
      ["24 Mbps", "799 / 1199 TL", "1-3 / 4-12 ay"],
      ["50 Mbps", "799 / 1259 TL", "1-3 / 4-12 ay"],
      ["100 Mbps", "799 / 1259 TL", "1-3 / 4-12 ay"],
      ["200 Mbps", "899 / 1359 TL", "1-3 / 4-12 ay"],
      ["500 Mbps", "999 / 1529 TL", "1-3 / 4-12 ay"],
      ["1000 Mbps", "1149 / 1679 TL", "1-3 / 4-12 ay"]
    ]
  },
  {
    category: "ev",
    title: "Bölgesel Fırsat",
    subtitle: "Bölgeye özel limitsiz internet",
    features: ["24 ay taahhüt", "Bölgesel", "Limitsiz"],
    note: "İl ve ilçe listesi satış ekranından kontrol edilmelidir.",
    keywords: "ev interneti bölgesel fırsat 16 mbps 24 mbps 50 mbps 100 mbps 200 mbps 500 mbps 1000 mbps",
    variants: [
      ["16 Mbps", "849 TL", "Limitsiz"],
      ["24 Mbps", "849 TL", "Limitsiz"],
      ["50 Mbps", "899 TL", "Limitsiz"],
      ["100 Mbps", "899 TL", "Limitsiz"],
      ["200 Mbps", "969 TL", "Limitsiz"],
      ["500 Mbps", "1099 TL", "Limitsiz"],
      ["1000 Mbps", "1199 TL", "Limitsiz"]
    ]
  },
  {
    category: "ev",
    title: "Yüksek Hızla Tanışma",
    subtitle: "Bölgesel yüksek hız kampanyası",
    features: ["18 ay taahhüt", "Bölgesel", "Limitsiz"],
    note: "Mahalle listesi satış ekranından kontrol edilmelidir.",
    keywords: "ev interneti yüksek hız bölgesel 50 mbps 100 mbps 200 mbps 500 mbps 1000 mbps",
    variants: [
      ["50 Mbps", "899 / 1249 TL", "İlk 9 / son 9 ay"],
      ["100 Mbps", "899 / 1249 TL", "İlk 9 / son 9 ay"],
      ["200 Mbps", "999 / 1349 TL", "İlk 9 / son 9 ay"],
      ["500 Mbps", "1099 / 1499 TL", "İlk 9 / son 9 ay"],
      ["1000 Mbps", "1249 / 1649 TL", "İlk 9 / son 9 ay"]
    ]
  },
  {
    category: "ev",
    title: "Deprem Konutları",
    subtitle: "Belirli illerde bölgesel ev interneti",
    features: ["24 ay taahhüt", "Bölgesel", "Limitsiz"],
    note: "Deprem konutları kapsamındaki konutlarda geçerlidir.",
    keywords: "ev interneti deprem konutları bölgesel 100 mbps 200 mbps 500 mbps 1000 mbps",
    variants: [
      ["100 Mbps", "1059 TL", "Limitsiz"],
      ["200 Mbps", "1149 TL", "Limitsiz"],
      ["500 Mbps", "1289 TL", "Limitsiz"],
      ["1000 Mbps", "1439 TL", "Limitsiz"]
    ]
  },
  {
    category: "tivibu",
    title: "Tivibu Android STB",
    subtitle: "Yeni satış ile verilen Android kutu",
    features: ["IPTV", "Android Kutu", "Yeni müşteri"],
    note: "Android kutu için ek ücret talep edilmez; ilk 3 ay YouTube Premium ve Muud Premium hediyesi bulunur.",
    keywords: "tivibu android stb iptv kutu youtube premium muud",
    variants: [
      ["Android Kutu", "Ücretsiz", "Yeni satış"],
      ["YouTube Premium", "Hediye", "İlk 3 ay"],
      ["Muud Premium", "Hediye", "İlk 3 ay"]
    ]
  },
  {
    category: "tivibu",
    title: "Tivibu Ev Net Fiyat",
    subtitle: "18 ay taahhütlü Tivibu Ev",
    features: ["Tivibu GO", "Aktivasyon dahil", "18 ay"],
    note: "İlk 9 ay ve sonraki 9 ay fiyatları ayrı gösterilir.",
    keywords: "tivibu ev net fiyat aile sinema spor süper 18 ay",
    variants: [
      ["Aile", "159 / 219 TL", "İlk 9 / sonraki 9 ay"],
      ["Sinema", "179 / 239 TL", "İlk 9 / sonraki 9 ay"],
      ["Spor", "179 / 239 TL", "İlk 9 / sonraki 9 ay"],
      ["Süper", "199 / 259 TL", "İlk 9 / sonraki 9 ay"]
    ]
  },
  {
    category: "tivibu",
    title: "Tivibu Ev 12 Ay Sabit",
    subtitle: "12 ay sabit fiyat garantisi",
    features: ["Tivibu GO", "Aktivasyon dahil", "12 ay"],
    note: "12 ay boyunca sabit fiyat garantisi vardır.",
    keywords: "tivibu ev 12 ay sabit fiyat aile sinema spor süper",
    variants: [
      ["Aile", "195 TL", "Aylık"],
      ["Sinema", "215 TL", "Aylık"],
      ["Spor", "215 TL", "Aylık"],
      ["Süper", "235 TL", "Aylık"]
    ]
  },
  {
    category: "tivibu",
    title: "Tivibu Ev / Uydu 18 Ay Sabit",
    subtitle: "Uydu self kurulumlu paket",
    features: ["Uydu", "Tivibu GO", "Self kurulum"],
    note: "Tivibu GO 18 ay hediyedir; ücretsiz self kurulum bulunur.",
    keywords: "tivibu uydu ev 18 ay sabit fiyat aile sinema spor süper self kurulum",
    variants: [
      ["Aile", "189 TL", "Aylık"],
      ["Sinema", "209 TL", "Aylık"],
      ["Spor", "209 TL", "Aylık"],
      ["Süper", "229 TL", "Aylık"]
    ]
  },
  {
    category: "tivibu",
    title: "Tivibu Ev / Uydu Yan Oda",
    subtitle: "Ana ürün yanına ek oda",
    features: ["Yan oda", "Uydu/IPTV", "18 ay"],
    note: "Yan oda ürünü ana üründen üst paket olamaz.",
    keywords: "tivibu uydu yan oda iptv aile sinema spor süper",
    variants: [
      ["Aile", "95 / 165 TL", "İlk 9 / sonraki dönem"],
      ["Sinema", "115 / 185 TL", "İlk 9 / sonraki dönem"],
      ["Spor", "115 / 185 TL", "İlk 9 / sonraki dönem"],
      ["Süper", "135 / 205 TL", "İlk 9 / sonraki dönem"]
    ]
  }
];

const categoryNames = {
  mobil: "Mobil",
  ev: "Ev İnterneti",
  tivibu: "Tivibu/Uydu",
  dsl: "DSL",
  gorevli: "Görevli"
};

const cards = document.querySelector("#cards");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const clearSearch = document.querySelector("#clearSearch");
const tabs = document.querySelectorAll(".tab");
const detailModal = document.querySelector("#detailModal");
const detailContent = document.querySelector("#detailContent");
const whatsappPhone = "905075567817";
let activeCategory = "all";

function normalize(value) {
  return String(value)
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/\bggb\b/g, "gb")
    .replace(/\bg+\s*b\b/g, "gb")
    .replace(/\s+/g, " ")
    .trim();
}

function searchableText(item) {
  const variants = item.variants.flat().join(" ");
  return normalize([
    item.category,
    categoryNames[item.category],
    item.title,
    item.subtitle,
    item.features.join(" "),
    item.note,
    item.keywords,
    variants
  ].join(" "));
}

function matchesSearch(item, query) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return true;
  const haystack = searchableText(item);
  return normalizedQuery.split(" ").every((part) => haystack.includes(part));
}

function variantTemplate([name, price, detail]) {
  return `
    <div class="variant">
      <strong>${name}</strong>
      <span>${price}</span>
      <small>${detail}</small>
    </div>
  `;
}

function detailRowTemplate([name, price, detail]) {
  const speedOrQuota = name;
  const voice = /dk|sms|sınırsız|sinirsiz/i.test(detail) ? detail : "-";
  const extra = voice === "-" ? detail : "";
  return `
    <tr>
      <td>${extra || name}</td>
      <td>${speedOrQuota}</td>
      <td>${voice}</td>
      <td><strong>${price}</strong></td>
    </tr>
  `;
}

function cardTemplate(item) {
  const startingPrice = item.variants[0]?.[1] || "";
  const index = tariffs.indexOf(item);
  return `
    <article class="card tariff-card" data-index="${index}" tabindex="0" role="button" aria-label="${item.title} detaylarını aç">
      <div class="card-head">
        <div>
          <span class="badge ${item.category}">${categoryNames[item.category]}</span>
          <h2 class="title">${item.title}</h2>
          <p class="subtitle">${item.subtitle}</p>
        </div>
        <div class="price">
          <strong>${startingPrice}</strong>
          <span>başlayan</span>
        </div>
      </div>
      <div class="features">
        ${item.features.map((feature) => `<span class="chip">${feature}</span>`).join("")}
      </div>
      <div class="variants" aria-label="${item.title} seçenekleri">
        ${item.variants.map(variantTemplate).join("")}
      </div>
      <p class="note">${item.note}</p>
      <span class="detail-hint">Detayları aç</span>
    </article>
  `;
}

function listTemplate(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function perkCards(items) {
  return `
    <div class="perk-grid">
      ${[...new Set(items)].map((item, index) => `
        <div class="perk-card">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <p>${item}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function detailsFor(item) {
  const key = normalize([item.title, item.subtitle, item.keywords].join(" "));
  const generic = {
    eligibility: {
      mobil: ["Yeni aktivasyon, numara taşıma veya uygun faturalıya geçiş müşterileri.", "Bireysel mobil müşteriler için satış kanalında uygunluk kontrolü yapılır."],
      ev: ["Yeni ev interneti müşterileri.", "Adres altyapısı, hız uygunluğu ve kampanya bölgesi kontrol edilmelidir."],
      dsl: ["ADSL/FTTC altyapısı uygun olan ev interneti müşterileri.", "Hız seçenekleri adres altyapısına göre değişebilir."],
      gorevli: ["İlgili kamu kurumu/personel şartını sağlayan bireysel müşteriler.", "Referans veya belge kontrolü gerekebilir."],
      tivibu: ["Yeni Tivibu, Tivibu Ev veya Tivibu Uydu müşterileri.", "IPTV/Uydu kurulum uygunluğu satış öncesinde kontrol edilmelidir."]
    },
    privileges: {
      mobil: ["Aşımsızlık veya kontrol paketi uygun tarifelerde sunulur.", "Türk Telekomlularla konuşma, WhatsApp, Prime ya da dijital servis faydaları tarifeye göre değişir."],
      ev: ["Limitsiz internet seçenekleri.", "Fiber/DSL altyapıya göre hız alternatifleri.", "Hoş Geldin indirimi kampanyaya göre uygulanabilir."],
      dsl: ["Limitsiz DSL/FTTC hız seçenekleri.", "Düşük hız ihtiyacı olan müşterilere uygun giriş paketleri."],
      gorevli: ["Kamu personeline özel fiyatlar.", "Aşmayan tarife, 1000 SMS ve yurt dışı kullanım faydaları MEB tarifelerinde öne çıkar."],
      tivibu: ["Tivibu GO hediyesi.", "Aktivasyon dahil paket seçenekleri.", "Uydu tarafında ücretsiz self kurulum seçenekleri."]
    },
    commitment: {
      mobil: ["Taahhüt ve kayıt SMS’i tarifeye göre değişir; satış ekranındaki güncel SMS formatı kontrol edilmelidir.", "Kontrol Sizde için uygun tarifelerde KONTROL SIZDE yazıp 5555’e SMS gönderilebilir."],
      ev: ["Taahhüt süresi karttaki kampanya bilgisinde yer alır.", "Başvuru ve kampanya uygunluğu adres altyapısına göre tamamlanır."],
      dsl: ["Taahhüt süresi ve modem/IPTV bedelleri kampanyaya göre kontrol edilmelidir."],
      gorevli: ["MEB tarifeleri için MEB XGB TCKN yazıp 5555’e SMS gönderilir.", "Referansla geçişte referans numarası 6008’e gönderilir."],
      tivibu: ["Tivibu paketlerinde taahhüt süresi 12 veya 18 ay olabilir.", "Uydu self kurulum ve aktivasyon koşulları paket türüne göre kontrol edilir."]
    }
  };

  let eligibility = [...generic.eligibility[item.category]];
  let privileges = [...generic.privileges[item.category], ...item.features];
  let commitment = [...generic.commitment[item.category]];

  if (key.includes("selfy")) {
    eligibility = ["Yeni aktivasyon, numara taşıma ve faturasızdan faturalıya gelen Selfy müşterileri.", "Selfy yaş/segment uygunluğu satış ekranından kontrol edilir."];
    privileges.push("Sınırsız WhatsApp mesajlaşma.", "3 ay ücretsiz YouTube Premium.", "E-dergi ve uygulamada geçerli sınırsız internet.", "Taahhüt veren müşteriye ek internet faydası.");
    commitment = ["Taahhüt için SOZ SELFY TCKN GG/AA/YYYY yazıp 5555’e SMS gönderilir.", "Kontrol Sizde ek paketi için KONTROL SIZDE yazıp 5555’e SMS gönderilebilir."];
  } else if (key.includes("meb") || key.includes("ogretmen")) {
    eligibility = ["MEB personeli bireysel mobil müşteriler.", "Yeni aktivasyon, numara taşıma, faturasızdan faturalıya veya uygun faturalı geçiş müşterileri.", "Emekli personel ve MEB kadrosunda olmayan öğretmenler faydalanamaz."];
    privileges.push("Muud Premium ve e-dergi faydası.", "Aşmayan tarife özelliği.", "Sınırsız WhatsApp mesajlaşma.", "Tarifeyi yurt dışında ek ücret ödemeden kullanma hakkı.");
    commitment = ["Yeni hat veya numara taşıma sonrası MEB XGB TCKN yazıp 5555’e SMS gönderilir.", "Referansla geçişte referans cep numarası başında 0 olmadan 6008’e gönderilir."];
  } else if (key.includes("hit")) {
    eligibility = ["06-15 yaş arası çocuk kullanıcılar.", "Hat sahibinin hattı kullanacak çocuğun ebeveyni olması gerekir.", "Yeni aktivasyon, numara taşıma ve faturasızdan faturalıya gelen müşteriler."];
    privileges.push("Ebeveyn Kampanyası ile her ay 5 GB’a varan internet hediyesi.", "3 ay ücretsiz YouTube Premium.", "12 ay ücretsiz McAfee Güvenlik Uygulaması.", "Sınırsız WhatsApp mesajlaşma.");
    commitment = ["Kayıt için SOZ HIT TCKN GG/AA/YYYY yazıp 5555’e SMS gönderilir.", "Ebeveyn hediyesi için HIT HEDIYEM boşluk çocuk hattının 10 haneli numarası yazılıp 5555’e gönderilir."];
  } else if (key.includes("yeni lider")) {
    privileges.push("Yeni Lider Prime seçeneklerinde 6 ay Tivibu Go Süper, 6 ay Muud Premium, 20 GB Türk Telekom WiFi ve 3 ay YouTube Premium faydası.", "Sil Süpür’den her hafta hediye internet.", "Türk Telekomlularla sınırsız konuşma.");
    commitment = ["Kontrol Sizde hediyesi için aktivasyondan sonraki 90 gün içinde KONTROL SIZDE HEDIYE yazıp 5555’e SMS gönderilir."];
  } else if (key.includes("prime netflix")) {
    privileges.push("İlk 6 ay Netflix paketi hediyesi.", "Sosyal medyada geçerli internet faydaları.", "Sınırsız WhatsApp mesajlaşma.");
    commitment = ["Netflix iptal edilirse kampanya kapsamındaki indirim ve ek ücretlendirme değişebilir."];
  } else if (key.includes("ailece")) {
    privileges.push("4 kişiye kadar ortak paylaşım, toplam 5 kişi kullanım.", "12 ay Safe Family dijital servisi.", "Muud Premium Aile paketi.", "Evde interneti olanlara veya yeni aktivasyona özel indirim seçenekleri.");
    commitment = ["Ortak kullanıcı eklemek için PRIME ORTAK XX boşluk telefon numarası yazıp 2050’ye SMS gönderilir.", "Hoş Geldiniz indirimi için HOS GELDINIZ yazıp 5555’e SMS gönderilir.", "Her Yerde Avantaj için HER YERDE boşluk TCKN yazıp 5555’e SMS gönderilir."];
  } else if (key.includes("yeni nesil prime")) {
    privileges.push("Ayda 3 gün tarifen yurt dışında servisi.", "Özel müşteri hizmetlerine tek tuşla bağlanma.", "Apple Store, Google Play veya Amazon.com.tr’de geçerli 500 TL hediye çeki.", "6 ay Tivibu Go Süper, 6 ay Muud Premium, 20 GB Türk Telekom WiFi ve 3 ay YouTube Premium faydaları.", "Prime ayrıcalıkları: etkinlik, seyahat, yeme-içme ve alışveriş avantajları.");
  } else if (key.includes("3 aylik") || key.includes("3 ayl")) {
    eligibility = ["Tüm bireysel faturalı Türk Telekom Mobil aboneleri.", "BİMcell, POCELL, Pttcell, Teknosacell, kontrolü/data/esnaf tarifeleri kapsam dışı olabilir."];
    commitment = ["Satın almak için 3 AYLIK X GB yazıp 5555’e SMS gönderilir.", "Paket 90 gün geçerlidir, yenilenmez ve devretmez."];
  } else if (key.includes("gameon")) {
    privileges.push("Hıza göre Playstore hediye çeki.", "PC Game Pass, Playstore veya ByNoGame faydalarından birini seçme imkanı.", "Hoş Geldin indirimi.");
  } else if (key.includes("universiteli")) {
    eligibility = ["18-25 yaş arasındaki bireysel yeni müşteriler.", "12 ay taahhüt ile yararlanılır."];
    privileges.push("6 ay Muud Premium.", "6 ay Tivibu GO Süper Paket.", "Hoş Geldin indirimi.");
  } else if (key.includes("tivibulu internet")) {
    eligibility = ["ADSL/FTTC altyapıda 100 Mbps’ye kadar Tivibulu İnternet seçenekleri.", "FTTB/FTTH altyapıda Tivibulu Fiber İnternet seçenekleri."];
    privileges.push("Tivibu Aile, Spor/Sinema ve Süper paket alternatifleri.", "Ev İnterneti ile TV paketini birlikte sunma imkanı.");
  } else if (item.category === "tivibu") {
    privileges.push("Tivibu GO hediyesi paket süresi boyunca sunulabilir.", "Aktivasyon ücreti kampanya fiyatına dahil olabilir.");
  }

  return { eligibility, privileges, commitment };
}

function detailTemplate(item) {
  const details = detailsFor(item);
  const plainMessage = `Merhaba, ${item.title} hakkında bilgi almak istiyorum. Uygunluk ve başvuru detayları için yardımcı olabilir misiniz?`;
  const message = encodeURIComponent(plainMessage);
  const whatsappUrl = whatsappPhone
    ? `https://wa.me/${whatsappPhone}?text=${message}`
    : `https://wa.me/?text=${message}`;
  return `
    <div class="detail-head">
      <span class="badge ${item.category}">${categoryNames[item.category]}</span>
      <h2 id="detailTitle">${item.title}</h2>
      <p>${item.subtitle}</p>
    </div>
    <section class="detail-section">
      <h3>Detay fiyatlandırma</h3>
      <div class="detail-table-wrap">
        <table class="detail-table">
          <thead>
            <tr>
              <th>Paket</th>
              <th>GB / Hız</th>
              <th>DK / SMS</th>
              <th>Fiyat</th>
            </tr>
          </thead>
          <tbody>${item.variants.map(detailRowTemplate).join("")}</tbody>
        </table>
      </div>
    </section>
    <section class="detail-grid">
      <div class="detail-box">
        <h3>Kim faydalanabilir?</h3>
        ${listTemplate(details.eligibility)}
      </div>
      <div class="detail-box">
        <h3>Ayrıcalıkları nelerdir?</h3>
        ${perkCards(details.privileges)}
      </div>
      <div class="detail-box">
        <h3>Taahhüt / SMS</h3>
        ${listTemplate(details.commitment)}
      </div>
      <div class="detail-box">
        <h3>Satış notu</h3>
        <p>${item.note}</p>
      </div>
    </section>
    <div class="contact-cta">
      <div>
        <strong>Bu tarife için işlem yapmak ister misin?</strong>
        <span>WhatsApp açılır, mesaj hazır gelir; gönderme işlemini müşteri kendisi yapar.</span>
        <code>${plainMessage}</code>
      </div>
      <a class="whatsapp-button" href="${whatsappUrl}" target="_blank" rel="noopener">İletişime geç</a>
    </div>
  `;
}

function openDetail(index) {
  const item = tariffs[index];
  if (!item) return;
  detailContent.innerHTML = detailTemplate(item);
  detailModal.hidden = false;
  document.body.classList.add("modal-open");
  detailModal.querySelector(".modal-close").focus();
}

function closeDetail() {
  detailModal.hidden = true;
  document.body.classList.remove("modal-open");
  detailContent.innerHTML = "";
}

function render() {
  const query = searchInput.value;
  const filtered = tariffs.filter((item) => {
    const categoryOk = activeCategory === "all" || item.category === activeCategory;
    return categoryOk && matchesSearch(item, query);
  });

  cards.innerHTML = filtered.length
    ? filtered.map(cardTemplate).join("")
    : `<div class="empty">Bu aramada eşleşen paket bulunamadı. Daha kısa yazmayı deneyin: örn. 30 gb, selfy, meb, tivibu.</div>`;

  resultCount.textContent = `${filtered.length} tarife ailesi gösteriliyor`;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    activeCategory = tab.dataset.category;
    render();
  });
});

cards.addEventListener("click", (event) => {
  const card = event.target.closest(".tariff-card");
  if (card) openDetail(Number(card.dataset.index));
});

cards.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".tariff-card");
  if (!card) return;
  event.preventDefault();
  openDetail(Number(card.dataset.index));
});

detailModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-detail]")) closeDetail();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !detailModal.hidden) closeDetail();
});

searchInput.addEventListener("input", render);
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  render();
});

render();
