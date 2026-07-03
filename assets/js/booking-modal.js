(function () {
  const banner = document.getElementById("cookie-banner");

  if (localStorage.getItem("cookie_consent") === "1") {
    banner.hidden = true;
  } else {
    banner.hidden = false;
  }

  document.getElementById("cookie-accept").addEventListener("click", () => {
    localStorage.setItem("cookie_consent", "1");
    banner.hidden = true;
  });

  document.getElementById("cookie-decline").addEventListener("click", () => {
    localStorage.setItem("cookie_consent", "0");
    banner.hidden = true;
  });
})();
