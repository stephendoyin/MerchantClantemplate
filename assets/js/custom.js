$(".product-slider").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dot: false,
  items: 4,
});

$(".product-slider-two").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 4,
    },
    578: {
      items: 2,
    },
    680: {
      items: 3,
    },
    840: {
      items: 4,
    },
  },
});

$(".modal-product-slider").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
  },
});

let owlModal = $(".thumbnail-modal-slider");
owlModal.owlCarousel({
  loop: false,
  margin: 10,
  // nav: false,
  dots: false,
  responsive: {
    0: {
      items: 3,
    },
    575: {
      items: 4,
    },
    700: {
      items: 6,
    },
  },
});

// Custom Navigation Events
$(".nav-scr-right").click(function () {
  owlModal.trigger("next.owl.carousel");
});
$(".nav-scr-left").click(function () {
  owlModal.trigger("prev.owl.carousel");
});
