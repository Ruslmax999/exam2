import lightbox from "lightbox2";
import "./map/map.js";

document.addEventListener("DOMContentLoaded", function () {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });
  // Sticky header
  const header = document.querySelector(".header-wrap");
  const options = {
    rootMargin: "0px",
    threshold: 1,
  };
  const callback = function (items) {
    items.forEach((item) =>
      !item.isIntersecting
        ? header.classList.add("sticky")
        : header.classList.remove("sticky")
    );
  };
  const observer = new IntersectionObserver(callback, options);
  const target = document.querySelector(".swiper-pagination");
  observer.observe(target);
  /// menu change title
  const options2 = {
    rootMargin: "0px",
    threshold: 0.1,
  };
  const targets = [...document.querySelectorAll("section")];
  const menuItems = [...document.querySelectorAll(".header__nav a")];
  const observer1 = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        const sectionId = item.target.getAttribute("id");
        menuItems.forEach((navItem) => {
          navItem.classList.remove("link-active");
          if (navItem.getAttribute("data-link") === sectionId) {
            navItem.classList.add("link-active");
          }
        });
      }
    });
  }, options2);

  targets.forEach((item, index) => {
    observer1.observe(targets[index]);
  });

  // Smooth scroll
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });
  // swiper init

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    infinite: true,
    // slidesPerGroup: 3,
    loop: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slide-right",
      prevEl: ".slide-left",
    },
  });

  var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // mobile menu
  var nav = $("#mobile-menu"),
    overlay = $(".overlay"),
    menuToggle = $(".menu-button, .overlay");
  menuToggle.on("click", function (e) {
    e.preventDefault();
    nav.toggleClass("open");
    overlay.toggleClass("overlay-open");
  });
});
