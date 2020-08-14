let transactionSlider = $(".transaction-slider");

transactionSlider.owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  items: 1,

  // nav: false,
});

// Custom Navigation Events
$(".js-right-control").click(function () {
  transactionSlider.trigger("next.owl.carousel");
});
$(".js-left-control").click(function () {
  transactionSlider.trigger("prev.owl.carousel");
});
