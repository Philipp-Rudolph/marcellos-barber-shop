(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
})(window, "https://app.cal.eu/embed/embed.js", "init");

// Initialize Cal.com with default barber (firas)
let currentBarber = "firas";

Cal("init", "marcello", { origin: "https://app.cal.eu" });

Cal.ns.marcello("inline", {
  elementOrSelector: "#my-cal-inline-marcello",
  config: {
    theme: "dark",
    layout: "month_view",
    useSlotsViewOnSmallScreen: "true",
  },
  calLink: "marcello-barber-shop/firas",
});

Cal.ns.marcello("ui", {
  hideEventTypeDetails: false,
  layout: "month_view",
});

// Function to switch between barbers
function switchBarber(barber) {
  if (currentBarber === barber) return;

  currentBarber = barber;

  // Update active tab
  document.querySelectorAll('.barber-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.barber === barber) {
      tab.classList.add('active');
    }
  });

  // Reload Cal.com embed with new barber
  const container = document.getElementById('my-cal-inline-marcello');
  container.innerHTML = '';

  Cal.ns.marcello("inline", {
    elementOrSelector: "#my-cal-inline-marcello",
    config: {
      theme: "dark",
      layout: "month_view",
      useSlotsViewOnSmallScreen: "true",
    },
    calLink: `marcello-barber-shop/${barber}`,
  });
}
