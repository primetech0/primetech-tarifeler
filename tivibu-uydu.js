const tvTariffs = [
  {
    category: "tivibu",
    title: "Tivibu Android STB",
    subtitle: "Yeni satış ile verilen Android kutu",
    price: "Ücretsiz kutu",
    features: ["IPTV", "Android Kutu", "Yeni müşteri"],
    note: "Lansmana özel ilk 3 ay YouTube Premium ve Muud Premium hediyesi bulunur.",
    keywords: "tivibu android stb iptv kutu youtube premium muud"
  },
  {
    category: "tivibu",
    title: "Net Fiyat Kampanyası - Tivibu Ev",
    subtitle: "18 ay taahhütlü Tivibu Ev",
    price: "159 TL",
    features: ["Aile", "İlk 9 Ay", "Tivibu GO"],
    note: "Aile 159/219 TL, Sinema 179/239 TL, Spor 179/239 TL, Süper 199/259 TL.",
    keywords: "tivibu ev net fiyat aile sinema spor super 18 ay"
  },
  {
    category: "tivibu",
    title: "12 Ay Sabit Fiyat - Tivibu Ev",
    subtitle: "12 ay sabit fiyat garantisi",
    price: "195 TL",
    features: ["Aile", "Aylık", "Tivibu GO"],
    note: "Sinema 215 TL, Spor 215 TL, Süper 235 TL seçenekleri bulunur.",
    keywords: "tivibu ev 12 ay sabit fiyat aile sinema spor super"
  },
  {
    category: "uydu",
    title: "18 Ay Sabit Fiyat - Tivibu Ev / Uydu",
    subtitle: "Uydu self kurulumlu paket",
    price: "189 TL",
    features: ["Aile", "Uydu", "18 Ay"],
    note: "Sinema 209 TL, Spor 209 TL, Süper 229 TL; Tivibu GO 18 ay hediyedir.",
    keywords: "tivibu uydu ev 18 ay sabit fiyat aile sinema spor super self kurulum"
  },
  {
    category: "uydu",
    title: "Yan Oda Kampanyası - Tivibu Ev / Uydu",
    subtitle: "Ana ürün yanına ek oda",
    price: "95 TL",
    features: ["Aile", "İlk 9 Ay", "Yan Oda"],
    note: "Sinema/Spor ilk dönem 115 TL, Süper 135 TL. Ana ürün IPTV veya Uydu olabilir.",
    keywords: "tivibu uydu yan oda iptv aile sinema spor super"
  },
  {
    category: "tivibu",
    title: "Avantajlı Fiyat - Tivibu Ev",
    subtitle: "Bölgesel Tivibu Ev kampanyası",
    price: "105 TL",
    features: ["Aile", "İlk 9 Ay", "Bölgesel"],
    note: "Sinema/Spor 125 TL, Süper 145 TL ilk dönem fiyatlarıyla listelenir.",
    keywords: "tivibu ev avantajlı fiyat bölgesel aile sinema spor super"
  }
];

const categoryNames = {
  tivibu: "Tivibu",
  uydu: "Uydu"
};

const tvCards = document.querySelector("#tvCards");
const tvSearch = document.querySelector("#tvSearch");
const tvCount = document.querySelector("#tvCount");
const tvClear = document.querySelector("#tvClear");

function normalize(value) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/\s+/g, " ")
    .trim();
}

function cardTemplate(item) {
  return `
    <article class="card">
      <div class="card-head">
        <div>
          <span class="badge ${item.category === "uydu" ? "dsl" : "ev"}">${categoryNames[item.category]}</span>
          <h2 class="title">${item.title}</h2>
          <p class="subtitle">${item.subtitle}</p>
        </div>
        <div class="price"><strong>${item.price}</strong><span>başlayan</span></div>
      </div>
      <div class="features">
        ${item.features.map((feature) => `<span class="chip">${feature}</span>`).join("")}
      </div>
      <p class="note">${item.note}</p>
    </article>
  `;
}

function renderCards() {
  const query = normalize(tvSearch.value);
  const filtered = tvTariffs.filter((item) => {
    const haystack = normalize(Object.values(item).flat().join(" "));
    return !query || query.split(" ").every((part) => haystack.includes(part));
  });

  tvCards.innerHTML = filtered.length
    ? filtered.map(cardTemplate).join("")
    : `<div class="empty">Bu aramada Tivibu/Uydu paketi bulunamadı.</div>`;
  tvCount.textContent = `${filtered.length} Tivibu/Uydu paketi gösteriliyor`;
}

tvSearch.addEventListener("input", renderCards);
tvClear.addEventListener("click", () => {
  tvSearch.value = "";
  tvSearch.focus();
  renderCards();
});

renderCards();
