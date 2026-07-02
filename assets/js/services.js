const SERVICES = {
  herren: [
    {
      name: "Haarschnitt",
      desc: "Klassisch oder modern — jeder Schnitt wird präzise auf deine Kopfform und deinen Stil abgestimmt.",
      price: "20 €",
      calLink: "marcello-barber-shop/haarschnitt-herren",
    },
    {
      name: "Bart rasieren premium",
      desc: "Konturen, Formen, Trimmen — dein Bart wird sauber definiert und auf deinen Gesichtstyp abgestimmt.",
      price: "20 €",
      calLink: "marcello-barber-shop/bart-rasieren-premium",
    },
    {
      name: "Kinder Haarschnitt",
      desc: "Bis 12 Jahre. Geduldig, spielerisch, sauber. Ein Erlebnis, das auch Eltern entspannt.",
      price: "15 €",
      calLink: "marcello-barber-shop/kinder-haarschnitt",
    },
    {
      name: "Maschinenschnitt",
      desc: "Schnell, sauber, präzise. Der klassische Herrenschnitt komplett mit der Maschine — für den gepflegten Alltagslook.",
      price: "15 €",
      calLink: "marcello-barber-shop/maschinenschnitt",
    },
    {
      name: "Augenbrauen zupfen",
      desc: "Präzises Zupfen und Formen der Augenbrauen für einen gepflegten Look.",
      price: "10 €",
      calLink: "marcello-barber-shop/augenbrauen-zupfen",
    },
    {
      name: "Wachs",
      desc: "Warmes Tuch, Schaum, Rasiermesser — pure Entspannung und makellose Glätte.",
      price: "5 €",
      calLink: "marcello-barber-shop/wachs-styling",
    },
    {
      name: "Waschen, Schneiden, Style",
      desc: "Waschen, präziser Schnitt und professionelles Styling in einem — der komplette Auftritt.",
      price: "25 €",
      calLink: "marcello-barber-shop/waschen-schneiden-style",
    },
    {
      name: "Komplettpaket VIP",
      desc: "Das komplette Paket: Haarschnitt, Bartpflege und Wachsritual in einer Session — für den Look, der alles zusammenhält.",
      price: "ab 60 €",
      highlight: true,
      calLink: "marcello-barber-shop/komplettpaket-vip",
    },
  ],
  damen: [
    {
      name: "Schneiden",
      desc: "Präziser Schnitt abgestimmt auf deine Haarstruktur und deinen Stil.",
      price: "ab 30 €",
      calLink: "marcello-barber-shop/schneiden-damen",
    },
    {
      name: "Waschen, Schneiden, Föhnen",
      desc: "Waschen, Schnitt und professionelles Föhnen in einem — für einen gepflegten Gesamtlook.",
      price: "ab 45 €",
      calLink: "marcello-barber-shop/waschen-schneiden-fohnen",
    },
    {
      name: "Waschen, Föhnen",
      desc: "Professionelles Waschen mit pflegenden Produkten und Föhnen für glänzendes, gepflegtes Haar.",
      price: "ab 30 €",
      calLink: "marcello-barber-shop/waschen-fohnen",
    },
    {
      name: "Ansatzfarbe (bis 2cm)",
      desc: "Frischer Ansatz, natürlicher Übergang — für ein gepflegtes Farbergebnis bis 2 cm Ansatz.",
      price: "ab 45 €",
      calLink: "marcello-barber-shop/ansatzfarbe-bis-2cm-damen",
    },
    {
      name: "Intensivtönung",
      desc: "Intensive, pflegende Tönung für lebendige Farbe und mehr Tiefe im Haar.",
      price: "ab 35 €",
      calLink: "marcello-barber-shop/intensivtonung",
    },
    {
      name: "Glossing",
      desc: "Pflegender Glanzfilm für seidigen Schimmer und mehr Strahlkraft.",
      price: "ab 20 €",
      calLink: "marcello-barber-shop/glossing",
    },
    {
      name: "Intensivpflege",
      desc: "Tiefenwirksame Haarkur für geschmeidiges, gesundes Haar mit sofort spürbarem Ergebnis.",
      price: "ab 15 €",
      calLink: "marcello-barber-shop/intensivpflege",
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
      calLink: "marcello-barber-shop/balayage-damen",
    },
    {
      name: "Augenbrauen zupfen",
      desc: "Präzises Zupfen und Formen der Augenbrauen für einen definierten, gepflegten Look.",
      price: "ab 10 €",
      calLink: "marcello-barber-shop/augenbrauen-zupfen-damen",
    },
    {
      name: "Augenbrauen färben",
      desc: "Intensive Farbe für ausdrucksstarke, definierte Augenbrauen.",
      price: "ab 10 €",
      calLink: "marcello-barber-shop/augenbrauen-farben-damen",
    },
    {
      name: "Wimpern färben",
      desc: "Intensive Farbe für ausdrucksstarke Wimpern — ohne Mascara.",
      price: "ab 13 €",
      calLink: "marcello-barber-shop/wimpern-farben-damen",
    },
  ],
};

// Collect all namespaces (last segment of calLink) for Cal init
const ALL_CAL_NAMESPACES = Object.values(SERVICES)
  .flat()
  .filter((s) => s.calLink)
  .map((s) => s.calLink.split("/").pop());

(function () {
  const grid = document.getElementById("services-grid");
  const tabs = document.querySelectorAll("#services-tabs .barber-tab");

  function bookingButton(s) {
    if (!s.calLink) return "";
    const ns = s.calLink.split("/").pop();
    const config = JSON.stringify({
      layout: "month_view",
      useSlotsViewOnSmallScreen: "true",
      theme: "dark",
    });
    return `<button class="btn-primary service-book-btn" data-cal-link="${s.calLink}" data-cal-namespace="${ns}" data-cal-config='${config}'>Buchen</button>`;
  }

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
          bookingButton(s) +
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
