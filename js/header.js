document.getElementById("header").innerHTML = `
      <nav id="header-nav" class="navbar navbar-expand-lg py-2">
      <div class="container-lg">
        <a class="navbar-brand" href="index.html">
          <img src="images/luxlogo.png" id="navbar-icon" class="logo" alt="lux logo" style="width: 100px">
        </a>
        <button class="navbar-toggler d-flex d-lg-none order-3 p-2 border-0" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <svg class="navbar-icon text-primary">
            <use xlink:href="#navbar-icon"></use>
          </svg>
        </button>
        <div class="offcanvas offcanvas-end bg-darker" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
          <div class="offcanvas-header px-4 pb-0">
            <a class="navbar-brand" href="index.html">
              <img src="images/luxlogo.png" class="logo">
            </a>
            <button type="button" class="btn-close btn-close-black bg-primary" data-bs-dismiss="offcanvas" aria-label="Close"
              data-bs-target="#bdNavbar"></button>
          </div>
          <div class="offcanvas-body">
            <ul id="navbar"
              class="navbar-nav text-uppercase justify-content-start justify-content-lg-center align-items-start align-items-lg-center flex-grow-1">
              <li class="nav-item">
                <a class="nav-link me-4 active" href="index.html">PoДЌetna</a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-4" href="aboutus.html">O nama</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link me-4 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                  aria-expanded="false">Ponuda menija</a>
                <ul class="dropdown-menu animate slide navbar-submenu">
                  <li><a href="menusvadba.html" class="dropdown-item">MENU - SVADBA<span
                        class="badge bg-primary"></span></a></li>
                  <li><a href="menuproslava.html" class="dropdown-item">MENU - PROSLAVA<span
                        class="badge bg-primary"></span></a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link me-4" href="gallery.html">Galerija</a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-4" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-4" href="contact.html">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
`
setTimeout(function () {
  const navLinks = document.querySelectorAll("#navbar .nav-link");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
    // Special case: highlight "Usluge" if on any services page
    if (
      (currentPage === "servicesdpd.html" || currentPage === "servicesdetails.html") &&
      link.textContent.trim().toLowerCase() === "usluge"
    ) {
      link.classList.add("active");
    }
  });
}, 0);