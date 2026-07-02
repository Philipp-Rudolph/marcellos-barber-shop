let currentBarber = "firas";

function switchBarber(barber) {
  if (currentBarber === barber) return;
  currentBarber = barber;

  document.querySelectorAll('#booking .barber-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.barber === barber);
  });

  const container = document.getElementById('my-cal-inline-marcello');
  container.innerHTML = '';

  Cal.ns[barber]("inline", {
    elementOrSelector: "#my-cal-inline-marcello",
    config: {
      theme: "dark",
      layout: "month_view",
      useSlotsViewOnSmallScreen: "true",
    },
    calLink: `marcello-barber-shop/${barber}`,
  });
}
