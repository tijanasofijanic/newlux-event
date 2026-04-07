(function ($) {
  "use strict";

  var initPreloader = function () {
    $(document).ready(function () {
      var Body = $("body");
      Body.addClass("preloader-site");
    });
    $(window).on("load", function () {
      $(".preloader").fadeOut();
      $("body").removeClass("preloader-site");
    });
  };

  var searchPopup = function () {
    // open search box
    $("#header-nav").on("click", ".search-button", function (e) {
      $(".search-popup").toggleClass("is-visible");
    });

    $("#header-nav").on("click", ".btn-close-search", function (e) {
      $(".search-popup").toggleClass("is-visible");
    });

    $(".search-popup-trigger").on("click", function (b) {
      b.preventDefault();
      $(".search-popup").addClass("is-visible"),
        setTimeout(function () {
          $(".search-popup").find("#search-popup").focus();
        }, 350);
    }),
      $(".search-popup").on("click", function (b) {
        ($(b.target).is(".search-popup-close") ||
          $(b.target).is(".search-popup-close svg") ||
          $(b.target).is(".search-popup-close path") ||
          $(b.target).is(".search-popup")) &&
          (b.preventDefault(), $(this).removeClass("is-visible"));
      }),
      $(document).keyup(function (b) {
        "27" === b.which && $(".search-popup").removeClass("is-visible");
      });
  };

  window.addEventListener("load", (event) => {
    //isotope
    $(".isotope-container").isotope({
      // options
      itemSelector: ".item",
      layoutMode: "masonry",
    });

    var $grid = $(".entry-container").isotope({
      itemSelector: ".entry-item",
      layoutMode: "masonry",
    });

    // Initialize Isotope
    var $container = $(".isotope-container").isotope({
      // options
      itemSelector: ".item",
      layoutMode: "masonry",
    });

    $(document).ready(function () {
      //active button
      $(".filter-button").click(function () {
        $(".filter-button").removeClass("active");
        $(this).addClass("active");
      });
    });

    // Filter items on button click
    $(".filter-button").click(function () {
      var filterValue = $(this).attr("data-filter");
      if (filterValue === "*") {
        // Show all items
        $container.isotope({ filter: "*" });
      } else {
        // Show filtered items
        $container.isotope({ filter: filterValue });
      }
    });
  });

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll(".image-link"), {
      imageSize: "contain",
      loop: true,
    });
  };

  // init jarallax parallax
  var initJarallax = function () {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  };

  var initProductQty = function () {
    $(".product-qty").each(function () {
      var $el_product = $(this);
      var quantity = 0;

      $el_product.find(".quantity-right-plus").click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find("#quantity").val());
        $el_product.find("#quantity").val(quantity + 1);
      });

      $el_product.find(".quantity-left-minus").click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find("#quantity").val());
        if (quantity > 0) {
          $el_product.find("#quantity").val(quantity - 1);
        }
      });
    });
  };

  $(document).ready(function () {
    if (typeof Swiper !== 'undefined' && document.querySelector(".slider")) {
      var swiper = new Swiper(".slider", {
        loop: true,
        autoplay: true,
        slidesPerView: "auto", // let CSS control width
        spaceBetween: 20,
        navigation: {
          nextEl: ".main-slider-button-next",
          prevEl: ".main-slider-button-prev",
        },
      });
    }

    // Animate on Scroll
    AOS.init({
      duration: 1000,
      once: true,
    });

    $(".youtube").colorbox({
      iframe: true,
      innerWidth: 960,
      innerHeight: 585,
    });

    initPreloader();
    initChocolat();
    initJarallax();
    initProductQty();
    searchPopup();
  }); // End of a document
})(jQuery);

// NAS JS KOD

const totalImages = 20; // slike: post-1-min.JPG ... post-20-min.JPG
const imagesPerPage = 18; // koliko slika se prikazuje odjednom
const daysPerCycle = 5; // rotacija na svakih 5 dana

// function loadGallery() {
//   const today = new Date();
//   const dayCount = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));

//   const cycle = Math.floor(dayCount / daysPerCycle);
//   const startIndex = (cycle * imagesPerPage) % totalImages;

//   let galleryHTML = "";
//   for (let i = 0; i < imagesPerPage; i++) {
//     const imgIndex = (startIndex + i) % totalImages + 1;
//     galleryHTML += `
//       <div class="entry-item col-md-4 my-3">
//         <a href="images/post-${imgIndex}.jpg" title="photo" class="image-link"><img src="images/post-${imgIndex}.jpg"
//             class="post-image img-fluid"></a>
//       </div>`;
//   }

//   if (document.querySelector(".row.entry-container")) {
//     document.querySelector(".row.entry-container").innerHTML = galleryHTML;
//   }

// }

if (window.location.pathname.includes("gallery.html")) {
  const today = new Date();
  const dayCount = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));

  const cycle = Math.floor(dayCount / daysPerCycle);
  const startIndex = (cycle * imagesPerPage) % totalImages;

  let galleryHTML = "";
  for (let i = 0; i < imagesPerPage; i++) {
    const imgIndex = ((startIndex + i) % totalImages) + 1;
    galleryHTML += `
        <div class="entry-item col-md-4 my-3">
          <a href="images/nova-galerija/post-${imgIndex}-min.JPG" title="photo" class="image-link"><img src="images/nova-galerija/post-${imgIndex}-min.JPG"
              class="post-image img-fluid"></a>
        </div>`;
  }

  if (document.querySelector(".row.entry-container")) {
    document.querySelector(".row.entry-container").innerHTML = galleryHTML;
  }

  // loadGallery();
}

// Replace with your actual phone number (international format, no spaces or +)
const phoneNumber = "381692309008";

// Phone call
if (document.getElementById("call-link")) {
  document
    .getElementById("call-link")
    .setAttribute("href", "tel:+" + phoneNumber);
}

// WhatsApp chat
if (document.getElementById("wa-link")) {
  document
    .getElementById("wa-link")
    .setAttribute("href", "https://wa.me/" + phoneNumber);
}

// Viber chat
if (document.getElementById("mail-link")) {
  document
    .getElementById("mail-link")
    .setAttribute("href", "mailto:Luxeventcentar@gmail.com");
}

//TEST

// const secondCount = Math.floor(today.getTime() / 1000);
// const cycle = Math.floor(secondCount / 10); // menja se na svakih 10 sekundi

// Kod za menije

// Only run this code on deluxmenusvadba.html
if (window.location.pathname.includes("deluxmenusvadba.html")) {
  const images = [
    "images/DeLux Menu- Svadba/Strana 1/delux meni svadba- strana 1 bez cene.png",
    "images/DeLux Menu- Svadba/Strana 2/delux meni svadba- strana 2 bez cene.png",
    "images/DeLux Menu- Svadba/Strana 3/delux meni svadba- strana 3 bez cene.png",
    "images/DeLux Menu- Svadba/Strana 4/delux meni svadba- strana 4 bez cene.png",
    "images/DeLux Menu- Svadba/Strana 5/delux meni svadba- strana 5 bez cene.png",
    "images/DeLux Menu- Svadba/Strana 6/delux menu svadba- strana 6 bez cene.png",
    "images/DeLux Menu- Svadba/Strana 7/delux menu svadba- strana 7 bez cene.png",
    "images/DeLux Menu- Svadba/Strana 8/delux menu svadba- strana 8 bez cene.png",
  ];

  const container = document.querySelector(".row.entry-container");
  if (container) {
    container.innerHTML = images
      .map(
        (src) => `
      <div class="entry-item col-md-4 my-3">
        <a href="${src}" title="photo" class="image-link">
          <img src="${src}" class="post-image img-fluid">
        </a>
      </div>
    `
      )
      .join("");
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".slider-video");

  if (video) {
    video.muted = true; // required for autoplay
    video.play().catch(err => {
      console.log("Autoplay prevented:", err);
    });
  }
});


