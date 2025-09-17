new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
  
});

new Swiper('.card-wrapper',{loop:!0,spaceBetween:30,pagination:{el:'.swiper-pagination',clickable:!0,dynamicBullets:!0},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}})