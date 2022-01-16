let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__nav');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__nav__list');

header__burger.onclick = function(){
    header__burger.classList.toggle('header__burger__btn--active');
    header_menu.classList.toggle('header__burger--active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('header__burger--active');
    back.classList.toggle('lock');
}




$('.slider').slick({
  prevArrow:'<button type="button" class="slick-prev"><img src="img/prev-arrow.svg" alt=""></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="img/next-arrow.svg" alt=""></button>',
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  adaptiveHeight: true,
  variableWidth: true,
  mobileFirst: true

  // autoplay: true,
  // autoplaySpeed: 2000,
});

$('.feedback__wrapper').slick({
  arrows: true,
  prevArrow:'<button type="button" class="slick-prev"><img src="img/prev-arrow.svg" alt=""></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="img/next-arrow.svg" alt=""></button>',
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  variableWidth: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="img/prev-arrow.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/next-arrow.svg" alt=""></button>',
        centerMode: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        mobileFirst: true,
    },
      breakpoint: 480,
      settings: {
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="img/prev-arrow.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/next-arrow.svg" alt=""></button>',
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        mobileFirst: true,
      }
    }]
});
const da = new DynamicAdapt("max");  
da.init();



// autoComplete








