const menus = ["delux-menu", "lux-menu", "classic-menu", "buffet-menu-1", "buffet-menu-2"];

// Hide all except deluxe by default
menus.forEach(id => {
  const el = document.getElementById(id);
  if (el) el.style.display = (id === "delux-menu") ? "block" : "none";
});

document.querySelectorAll(".menu-cat").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);

    // Hide all menus
    menus.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });

    // Show the clicked menu
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.style.display = "block";

      // рџ‘‡ Reset AOS attributes so animation can replay
      targetEl.querySelectorAll("[data-aos]").forEach(el => {
        el.classList.remove("aos-animate");
      });

      // рџ‘‡ Refresh AOS after a short delay
      setTimeout(() => {
        AOS.refresh();
      }, 50);
    }
  });
});