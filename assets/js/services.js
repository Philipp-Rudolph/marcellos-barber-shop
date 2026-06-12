const SERVICES = {
  herren: [
    {
      name: "Haarschnitt",
      desc: "Klassisch oder modern — jeder Schnitt wird präzise auf deine Kopfform und deinen Stil abgestimmt.",
      price: "20 €",
    },
    {
      name: "Bart rasieren premium",
      desc: "Konturen, Formen, Trimmen — dein Bart wird sauber definiert und auf deinen Gesichtstyp abgestimmt.",
      price: "20 €",
    },
    {
      name: "Kinder Haarschnitt",
      desc: "Bis 12 Jahre. Geduldig, spielerisch, sauber. Ein Erlebnis, das auch Eltern entspannt.",
      price: "15 €",
    },
    {
      name: "Maschinenschnitt",
      desc: "Schnell, sauber, präzise. Der klassische Herrenschnitt komplett mit der Maschine — für den gepflegten Alltagslook.",
      price: "15 €",
    },
    {
      name: "Augenbrauen zupfen",
      desc: "Präzises Zupfen und Formen der Augenbrauen für einen gepflegten Look.",
      price: "10 €",
    },
    {
      name: "Wachs",
      desc: "Warmes Tuch, Schaum, Rasiermesser — pure Entspannung und makellose Glätte.",
      price: "5 €",
    },
    {
      name: "Waschen, Schneiden, Style",
      desc: "Waschen, präziser Schnitt und professionelles Styling in einem — der komplette Auftritt.",
      price: "25 €",
    },
    {
      name: "Komplettpaket VIP",
      desc: "Das komplette Paket: Haarschnitt, Bartpflege und Wachsritual in einer Session — für den Look, der alles zusammenhält.",
      price: "ab 60 €",
      highlight: true,
    },
  ],
  damen: [
    {
      name: "Schneiden",
      desc: "Präziser Schnitt abgestimmt auf deine Haarstruktur und deinen Stil.",
      price: "ab 30 €",
    },
    {
      name: "Waschen, Schneiden, Föhnen",
      desc: "Waschen, Schnitt und professionelles Föhnen in einem — für einen gepflegten Gesamtlook.",
      price: "ab 45 €",
    },
    {
      name: "Waschen, Föhnen",
      desc: "Professionelles Waschen mit pflegenden Produkten und Föhnen für glänzendes, gepflegtes Haar.",
      price: "ab 30 €",
    },
    {
      name: "Ansatzfarbe (bis 2cm)",
      desc: "Frischer Ansatz, natürlicher Übergang — für ein gepflegtes Farbergebnis bis 2 cm Ansatz.",
      price: "ab 45 €",
    },
    {
      name: "Intensivtönung",
      desc: "Intensive, pflegende Tönung für lebendige Farbe und mehr Tiefe im Haar.",
      price: "ab 35 €",
    },
    {
      name: "Glossing",
      desc: "Pflegender Glanzfilm für seidigen Schimmer und mehr Strahlkraft.",
      price: "ab 20 €",
    },
    {
      name: "Intensivpflege",
      desc: "Tiefenwirksame Haarkur für geschmeidiges, gesundes Haar mit sofort spürbarem Ergebnis.",
      price: "ab 15 €",
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
    },
    {
      name: "Augenbrauen zupfen",
      desc: "Präzises Zupfen und Formen der Augenbrauen für einen definierten, gepflegten Look.",
      price: "ab 10 €",
    },
    {
      name: "Augenbrauen färben",
      desc: "Intensive Farbe für ausdrucksstarke, definierte Augenbrauen.",
      price: "ab 10 €",
    },
    {
      name: "Wimpern färben",
      desc: "Intensive Farbe für ausdrucksstarke Wimpern — ohne Mascara.",
      price: "ab 13 €",
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
          `<div class="service-item${s.highlight ? " service-item--highlight" : ""}"><div class="service-num">${String(i + 1).padStart(2, "0")}</div><div class="service-name">${s.name}</div><p class="service-desc">${s.desc}</p><div class="service-price">${s.price}</div></div>`,
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
