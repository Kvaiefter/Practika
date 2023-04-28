const header = document.querySelector("#header__inner")
const headerFull = document.querySelector(".header")
const photo = document.querySelector('.photo')
const design = document.querySelector('.design')
const download = document.querySelector('.download')
document.addEventListener('scroll', function (event) {
   if (window.pageYOffset > headerFull.offsetHeight) {
      header.classList.add("static")
   } else {
      header.classList.remove("static")
   }
})
const link = document.querySelectorAll('.header__link')
link[0].addEventListener('click', () => headerFull.scrollIntoView({
   block: "end",
   inline: "end",
   behavior: "smooth"
}))
link[1].addEventListener('click', () => photo.scrollIntoView({
   block: "start",
   inline: "start",
   behavior: "smooth"
}))
link[2].addEventListener('click', () => design.scrollIntoView({
   block: "center",
   inline: "nearest",
   behavior: "smooth"
}))
link[3].addEventListener('click', () => download.scrollIntoView({
   block: "center",
   inline: "nearest",
   behavior: "smooth"
}))
$(document).ready(function () {
   $('.community__slider').slick({
      slidesToShow: 2,
      appendArrows: ".slider__arrow",
      responsive: [{//можно сказать что это медиа только для сладера
         breakpoint: 700,//при достижении ширины меньшей чем 1000 применятся настройки
         settings: {
            slidesToShow: 1
         },
      }],
   });
})