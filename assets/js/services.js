const SERVICES = {
  herren: [
    {
      name: "Haarschnitt",
      desc: "Klassisch oder modern — jeder Schnitt wird präzise auf deine Kopfform und deinen Stil abgestimmt.",
      price: "20 €",
      calLink: "https://barbershopmarcello.setmore.com/services/b9a3aaad-cd7b-480d-8439-d0b83d71eb1a",
    },
    {
      name: "Bart rasieren premium",
      desc: "Konturen, Formen, Trimmen — dein Bart wird sauber definiert und auf deinen Gesichtstyp abgestimmt.",
      price: "20 €",
      calLink: "https://barbershopmarcello.setmore.com/services/cfe25c4f-275d-4258-a46a-eefeb01c27d1",
    },
    {
      name: "Kinder Haarschnitt",
      desc: "Bis 12 Jahre. Geduldig, spielerisch, sauber. Ein Erlebnis, das auch Eltern entspannt.",
      price: "15 €",
      calLink: "https://barbershopmarcello.setmore.com/services/94781e6f-5cc9-4d4c-87a2-4cf5834653ba",
    },
    {
      name: "Maschinenschnitt",
      desc: "Schnell, sauber, präzise. Der klassische Herrenschnitt komplett mit der Maschine — für den gepflegten Alltagslook.",
      price: "15 €",
      calLink: "https://barbershopmarcello.setmore.com/services/cb2fa8bd-84a1-49e4-95b4-2c8ec0d67380",
    },
    {
      name: "Augenbrauen zupfen",
      desc: "Präzises Zupfen und Formen der Augenbrauen für einen gepflegten Look.",
      price: "10 €",
      calLink: "https://barbershopmarcello.setmore.com/services/113bfc31-0e91-4305-8190-62525f6c3a71",
    },
    {
      name: "Wachs",
      desc: "Warmes Tuch, Schaum, Rasiermesser — pure Entspannung und makellose Glätte.",
      price: "5 €",
      calLink: "https://barbershopmarcello.setmore.com/services/148c9a4d-0d96-42c8-84ad-00b6fdafb315",
    },
    {
      name: "Waschen, Schneiden, Style",
      desc: "Waschen, präziser Schnitt und professionelles Styling in einem — der komplette Auftritt.",
      price: "25 €",
      calLink: "https://barbershopmarcello.setmore.com/services/f4ecf207-5ea5-4be7-855b-457286796aec",
    },
    {
      name: "Komplettpaket VIP",
      desc: "Das komplette Paket: Haarschnitt, Bartpflege und Wachsritual in einer Session — für den Look, der alles zusammenhält.",
      price: "ab 60 €",
      highlight: true,
      calLink: "https://barbershopmarcello.setmore.com/services/3c11efd0-9a5a-463b-b075-357ef656328f",
    },
  ],
  damen: [
    {
      name: "Schneiden",
      desc: "Präziser Schnitt abgestimmt auf deine Haarstruktur und deinen Stil.",
      price: "ab 30 €",
      calLink: "https://barbershopmarcello.setmore.com/services/b69def70-d37f-4a76-8f8f-8271ee134af0",
    },
    {
      name: "Waschen, Schneiden, Föhnen",
      desc: "Waschen, Schnitt und professionelles Föhnen in einem — für einen gepflegten Gesamtlook.",
      price: "ab 45 €",
      calLink: "https://barbershopmarcello.setmore.com/services/0f30279b-a933-4425-b421-887d9b222a43",
    },
    {
      name: "Waschen, Föhnen",
      desc: "Professionelles Waschen mit pflegenden Produkten und Föhnen für glänzendes, gepflegtes Haar.",
      price: "ab 30 €",
      calLink: "https://barbershopmarcello.setmore.com/services/e60c58a5-ccfc-4700-8dc5-3a17d6f2fc4a",
    },
    {
      name: "Ansatzfarbe (bis 2cm)",
      desc: "Frischer Ansatz, natürlicher Übergang — für ein gepflegtes Farbergebnis bis 2 cm Ansatz.",
      price: "ab 45 €",
      calLink: "https://barbershopmarcello.setmore.com/services/8b0ef03f-fba2-4eb9-97de-a0c8bca7db48",
    },
    {
      name: "Intensivtönung",
      desc: "Intensive, pflegende Tönung für lebendige Farbe und mehr Tiefe im Haar.",
      price: "ab 35 €",
      calLink: "https://barbershopmarcello.setmore.com/services/70578844-afce-41da-b95e-aa13127c4ce0",
    },
    {
      name: "Glossing",
      desc: "Pflegender Glanzfilm für seidigen Schimmer und mehr Strahlkraft.",
      price: "ab 20 €",
      calLink: "https://barbershopmarcello.setmore.com/services/fe4aa6f1-038c-405d-9671-af58503313a1",
    },
    {
      name: "Intensivpflege",
      desc: "Tiefenwirksame Haarkur für geschmeidiges, gesundes Haar mit sofort spürbarem Ergebnis.",
      price: "ab 15 €",
      calLink: "https://barbershopmarcello.setmore.com/services/3b5d6256-67b2-4800-b516-05e974a92ff9",
    },
    {
      name: "Einzelfolie",
      desc: "Gezielte Highlights mit der Folientechnik — für präzise Farbe genau dort, wo sie wirkt.",
      price: "ab 2,50 €",
    },
    {
      name: "Balayage",
      desc: "Handgemalte Highlights für einen natürlichen, sonnenverwöhnten Look mit weichen Übergängen.",
      price: "ab 190 €",
      calLink: "https://barbershopmarcello.setmore.com/services/ebd2d8aa-73ce-4537-9279-cd669f8306ab",
    },
    {
      name: "Augenbrauen zupfen",
      desc: "Präzises Zupfen und Formen der Augenbrauen für einen definierten, gepflegten Look.",
      price: "ab 10 €",
      calLink: "https://barbershopmarcello.setmore.com/services/7d867af3-4bb9-41d1-b308-76366d3b3e02",
    },
    {
      name: "Augenbrauen färben",
      desc: "Intensive Farbe für ausdrucksstarke, definierte Augenbrauen.",
      price: "ab 10 €",
      calLink: "https://barbershopmarcello.setmore.com/services/9f408ec8-402a-4bf2-b9ee-c5fc61a1d37f",
    },
    {
      name: "Wimpern färben",
      desc: "Intensive Farbe für ausdrucksstarke Wimpern — ohne Mascara.",
      price: "ab 13 €",
      calLink: "https://barbershopmarcello.setmore.com/services/92fea704-224e-4b28-be5e-458cc1c7fe93",
    },
  ],
};

(function () {
  const grid = document.getElementById("services-grid");
  const tabs = document.querySelectorAll("#services-tabs .barber-tab");

  function renderServices(category) {
    grid.innerHTML = SERVICES[category]
      .map(
        (s, i) =>
          `<div class="service-item${s.highlight ? " service-item--highlight" : ""}">` +
          `<div class="service-num">${String(i + 1).padStart(2, "0")}</div>` +
          `<div class="service-name">${s.name}</div>` +
          `<p class="service-desc">${s.desc}</p>` +
          `<div class="service-footer">` +
          `<div class="service-price">${s.price}</div>` +
          (s.calLink ? `<a class="btn-primary service-book-btn" href="${s.calLink}" target="_blank" rel="noopener noreferrer">Buchen</a>` : "") +
          `</div>` +
          `</div>`,
      )
      .join("");
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderServices(tab.dataset.tab);
    });
  });

  renderServices("herren");
})();
