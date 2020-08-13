let extraInfo = document.querySelector(".extra-info");
let creditInput = document.querySelector(".credit-input");
let noCredit = document.querySelector(".no-credit");

creditInput.addEventListener("change", function (e) {
  extraInfo.classList.add("show");
});

noCredit.addEventListener("change", function (e) {
  extraInfo.classList.remove("show");
});

let productImagesOverlay = document.querySelectorAll(".select-overlay");
let productItems = document.querySelectorAll(".product-item-wrap");

productItems.forEach((item, i) => {
  console.log(item);
  item.addEventListener("click", function () {
    productImagesOverlay[i].classList.toggle("show");
  });
});

let onboardContent = document.querySelectorAll(".onboard-content");
let btnResponse = document.querySelector(".btn-response");
let btnNext = document.querySelector(".btn-next");
let btnNextTwo = document.querySelector(".btn-next-two");
let btnNextThree = document.querySelector(".btn-next-three");
let btnLogin = document.querySelector(".btn-login");
let searchBtn = document.querySelector(".search-btn");
let btnNoResponse = document.querySelector(".btn-no-response");
let btnDone = document.querySelector(".btn-done");

btnResponse.addEventListener("click", function (e) {
  onboardContent[0].classList.remove("animate__fadeInLeft");
  onboardContent[0].classList.add("animate__fadeOutRight");

  setTimeout(function () {
    onboardContent[0].classList.remove("show");
    onboardContent[1].classList.add("show");
  }, 500);
});
btnNext.addEventListener("click", function (e) {
  e.preventDefault();
  onboardContent[1].classList.remove("animate__fadeInLeft");
  onboardContent[1].classList.add("animate__fadeOutRight");

  setTimeout(function () {
    onboardContent[1].classList.remove("show");
    onboardContent[2].classList.add("show");
  }, 500);
});
btnNextTwo.addEventListener("click", function (e) {
  e.preventDefault();
  onboardContent[2].classList.remove("animate__fadeInLeft");
  onboardContent[2].classList.add("animate__fadeOutUp");

  setTimeout(function () {
    onboardContent[2].classList.remove("show");
    onboardContent[3].classList.add("show");
  }, 500);
});
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  onboardContent[3].classList.remove("animate__fadeInLeft");
  onboardContent[3].classList.add("animate__fadeOutUp");

  setTimeout(function () {
    onboardContent[3].classList.remove("show");
    onboardContent[4].classList.add("show");
  }, 500);
});
btnNextThree.addEventListener("click", function (e) {
  e.preventDefault();
  onboardContent[4].classList.remove("animate__fadeInLeft");
  onboardContent[4].classList.add("animate__fadeOutRight");

  setTimeout(function () {
    onboardContent[4].classList.remove("show");
    onboardContent[5].classList.add("show");
  }, 500);
});
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  onboardContent[5].classList.remove("animate__fadeInLeft");
  onboardContent[5].classList.add("animate__fadeOutRight");

  setTimeout(function () {
    onboardContent[5].classList.remove("show");
    onboardContent[6].classList.add("show");
  }, 500);
});

btnNoResponse.addEventListener("click", function (e) {
  onboardContent[0].classList.remove("animate__fadeInLeft");
  onboardContent[0].classList.add("animate__fadeOutRight");

  setTimeout(function () {
    onboardContent[0].classList.remove("show");
    onboardContent[7].classList.add("show");
  }, 500);
});

btnDone.addEventListener("click", function (e) {
  onboardContent[7].classList.remove("animate__fadeInLeft");
  onboardContent[7].classList.add("animate__fadeOutRight");

  setTimeout(function () {
    onboardContent[7].classList.remove("show");
    onboardContent[5].classList.add("show");
  }, 500);
});

let categorySlider = $(".category-slider");

categorySlider.owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    640: {
      items: 3,
    },
  },
});
