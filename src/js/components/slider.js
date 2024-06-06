import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

// const gap = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--gap"));
// console.log(gap);

const el = document.querySelector('.swiper-about__slider');

const swiper = new Swiper(el, {
  slidesPerView: 'auto',
  loop: true,
  speed: 3000,
  autoplay: {
    enabled: true,
    delay: 1,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // spaceBetween: gap,
  // navigation: {
  //   prevEl: ".news-btn--prev",
  //   nextEl: ".news-btn--next",
  // },
  // breakpoints: {
  //   577: {
  //     slidesPerView: 2,
  //   },
  //   769: {
  //     slidesPerView: 3,
  //   }
  // }
});
