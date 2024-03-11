import {Swiper} from 'swiper/bundle'


// Инициализация слайдеров

new Swiper('.support-swiper', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  grabCursor: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    }

  },
})

new Swiper('.prospects-swiper', {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: '.prospects-swiper-pagination',
    clickable: true,
  },
})

new Swiper('.teachers-swiper', {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: '.teachers-swiper-pagination',
    clickable: true,
  },
})
new Swiper('.faculty-swiper', {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 1,
  grabCursor: true,
  autoHeight: true,
  breakpoints: {

    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.faculty-swiper__swiper-button-next',
    prevEl: '.faculty-swiper__swiper-button-prev',
  },
})

new Swiper('.sponsors-swiper', {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 1,
  grabCursor: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 6,
    }

  },
})
