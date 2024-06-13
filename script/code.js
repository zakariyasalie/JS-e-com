document.addEventListener("DOMContentLoaded", function () {
    const footerText = document.querySelector("#footer p.footertext");
    footerText.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });