$(window).on("scroll", function () {
  if ($(this).scrollTop() > 120) {
    $(".navbar-area").addClass("is-sticky");
  } else {
    $(".navbar-area").removeClass("is-sticky");
  }
});

// Navbar Menu JS
$(".navbar .navbar-nav li a").on("click", function (e) {
  var anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(anchor.attr("href")).offset().top - 65,
      },
      1500
    );
  e.preventDefault();
});
// Mean Menu
jQuery(".mean-menu").meanmenu({
  meanScreenWidth: "991",
});

//testimonial carousal Jquery
// var sync1 = $(".client-content-carousel"),
//   sync2 = $(".client-thumb-carousel"),
//   slidesPerPage = 5;
// var syncedSecondary = true;
// sync1
//   .owlCarousel({
//     items: 1,
//     slideSpeed: 2000,
//     nav: true,
//     autoplay: false,
//     dots: false,
//     loop: true,
//     responsiveRefreshRate: 200,
//     navText: [
//       "<span class='bx bxs-left-arrow-circle'></span>",
//       "<span class='bx bxs-right-arrow-circle'></span>",
//     ],
//   })
//   .on("changed.owl.carousel", syncPosition);

// sync2
//   .on("initialized.owl.carousel", function () {
//     sync2.find(".owl-item").eq(0).addClass("current");
//   })
//   .owlCarousel({
//     items: slidesPerPage,
//     dots: true,
//     nav: true,
//     smartSpeed: 200,
//     slideSpeed: 500,
//     slideBy: slidesPerPage,
//     responsiveRefreshRate: 100,
//   })
//   .on("changed.owl.carousel", syncPosition2);
// function syncPosition(el) {
//   var count = el.item.count - 1;
//   var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

//   if (current < 0) {
//     current = count;
//   }
//   if (current > count) {
//     current = 0;
//   }
//   sync2
//     .find(".owl-item")
//     .removeClass("current")
//     .eq(current)
//     .addClass("current");
//   var onscreen = sync2.find(".owl-item.active").length - 1;
//   var start = sync2.find(".owl-item.active").first().index();
//   var end = sync2.find(".owl-item.active").last().index();

//   if (current > end) {
//     sync2.data("owl.carousel").to(current, 100, true);
//   }
//   if (current < start) {
//     sync2.data("owl.carousel").to(current - onscreen, 100, true);
//   }
// }
// function syncPosition2(el) {
//   if (syncedSecondary) {
//     var number = el.item.index;
//     sync1.data("owl.carousel").to(number, 100, true);
//   }
// }
// sync2.on("click", ".owl-item", function (e) {
//   e.preventDefault();
//   var number = $(this).index();
//   sync1.data("owl.carousel").to(number, 300, true);
// });

//   go to top
// Go to Top
// Scroll Event
$(window).on("scroll", function () {
  var scrolled = $(window).scrollTop();
  if (scrolled > 600) $(".go-top").addClass("active");
  if (scrolled < 600) $(".go-top").removeClass("active");
});
// Click Event
$(".go-top").on("click", function () {
  $("html, body").animate({ scrollTop: "0" }, 500);
});

const testimonial_slider = new Swiper(".testimonial-slider .swiper-container", {
  resizeObserver: true,
  spaceBetween: 0,
  initialSlide: 1,
  init: false,
  speed: 250,
  slideToClickedSlide: true,
  breakpoints: {
    0: {
      direction: "horizontal",
      centeredSlides: true,
      loop: true,
      slidesPerView: 1.7,
    },
    992: {
      direction: "vertical",
      centeredSlides: true,
      loop: true,
      slidesPerView: 1.7,
    },
  },
});

window.addEventListener("load", () => {
  testimonial_slider.init();
});

try {
  const counter = document.querySelectorAll('.counter-value');
  const speed = 2500; // The lower the slower

  counter.forEach(counter_value => {
      const updateCount = () => {
          const target = +counter_value.getAttribute('data-target');
          const count = +counter_value.innerText;

          // Lower inc to slow and higher to slow
          var inc = target / speed;

          if (inc < 1) {
              inc = 1;
          }

          // Check if target is reached
          if (count < target) {
              // Add inc to count and output in counter_value
              counter_value.innerText = (count + inc).toFixed(0);
              // Call function every ms
              setTimeout(updateCount, 1);
          } else {
              counter_value.innerText = target;
          }
      };

      updateCount();
  });
} catch (err) {

}
