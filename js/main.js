/* ----------------------------------------------------------------
                [ Theme ]
-----------------------------------------------------------------*/
const body = document.querySelector("body");
const colors = document.querySelector(".colors-grid");
const toggle = document.querySelector("#colors-toggle");
const pink = document.querySelector("#colors #pink");
const teal = document.querySelector("#colors #teal");
const indigo = document.querySelector("#colors #indigo");
const blue = document.querySelector("#colors #blue");

toggle.addEventListener("click", function () {
  colors.classList.toggle("d-none");
});

pink.addEventListener("click", function () {
  body.style.setProperty("--bs-primary", "#e91e63");
});

teal.addEventListener("click", function () {
  body.style.setProperty("--bs-primary", "#35c761");
});

indigo.addEventListener("click", function () {
  body.style.setProperty("--bs-primary", "#1f31c9");
});

blue.addEventListener("click", function () {
  body.style.setProperty("--bs-primary", "#1c94f4");
});

/* ----------------------------------------------------------------
                [ Navigation ]
-----------------------------------------------------------------*/
const nav = document.querySelector(".navbar");
const toTop = document.querySelector(".to-top");
const li = document.querySelector(".navbar ul li");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.style.setProperty('--bs-navbar-padding-y', '0.2rem');
    nav.classList.remove("bg-transparent");
    nav.classList.add("bg-primary");
    toTop.classList.add('d-block');
    toTop.classList.remove('d-none');
  }
  if (window.scrollY < 100) {
    nav.style.setProperty('--bs-navbar-padding-y', '0.5rem');
    nav.classList.add("bg-transparent");
    nav.classList.remove("bg-primary");
    toTop.classList.remove('d-block');
    toTop.classList.add('d-none');
  }
});

/* ----------------------------------------------------------------
              [ wow ]
-----------------------------------------------------------------*/

new WOW().init();

/* ----------------------------------------------------------------
              [ clients carousel ]
-----------------------------------------------------------------*/

$(".team-slider").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
});

$(".clients").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  cssEase: "linear",
  swipe: true,
});
////////////////// happy clients
$(".happy-clients").slick({
  dots: true,
  autoplay: true,
  infinite: true,
  cssEase: "linear",
  swipe: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        arrows: false,
        slidesToScroll: 2,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: false,
        arrows: false,
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
  ],
});

/* ----------------------------------------------------------------
                [ Responsive Tabs ]
-----------------------------------------------------------------*/
$("#tabs").responsiveTabs({
  animation: "slide",
  collapsible: false
});

$("#portfolio ul li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

/* ----------------------------------------------------------------
                [ Mixitup ]
-----------------------------------------------------------------*/
let containerEl = document.querySelector("[data-ref='mixitup-container']");
let mixer = mixitup(containerEl);

/* ----------------------------------------------------------------
                [ Fancy Box ]
-----------------------------------------------------------------*/
$('[data-fancybox="gallary"]').fancybox({
  loop: true,
  buttons: ["slideShow", "fullScreen", "thumbs", "close"],
  transitionEffect: "circular",
});

/* ----------------------------------------------------------------
                [ Date ]
-----------------------------------------------------------------*/
document.querySelector("#date").innerHTML = new Date().getFullYear()