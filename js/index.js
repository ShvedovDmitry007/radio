// МОДАЛЬНОЕ ОКНО
const modalBtn = document.querySelectorAll('.header-search__btn');
const modalOverlay = document.querySelector('.header-modal-overlay');
const modalClosedBtn = document.querySelector('.header-personal__closed');

modalBtn.forEach((elemBtn) => {
  elemBtn.addEventListener('click', (elemModal) => {
    let enter = elemModal.currentTarget.getAttribute('data-enter');
    document.querySelector(`[data-modal="${enter}"]`).classList.add('header-personal--visible');
    modalOverlay.classList.add('header-modal-overlay--visible');
  });
});

modalOverlay.addEventListener('click', (elemModal) => {
  if (elemModal.target === modalOverlay) {
    modalOverlay.classList.remove('header-modal-overlay--visible');
  };
});

modalClosedBtn.addEventListener('click', function() {
  modalOverlay.classList.remove('header-modal-overlay--visible');
});

// АККОРДЕОН
new Accordion('.guests-accordion__list', {
	elementClass: 'guests-accordion__item_mod',
	triggerClass: 'guests-accordion__btn',
	panelClass: 'guests-card',
	activeClass: 'guests-block--active'
});

// СЛАЙДЕР
const swiper = new Swiper('.swiper', {
	slidesPerView: 4,
	spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 3000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false,
  // }
});

// ПОДКАСТЫ
const btnMore = document.querySelector('.podcasts__more');
const podcastsItem = document.querySelectorAll('.podcasts-card');

btnMore.addEventListener('click', () => {
  podcastsItem.forEach(el => {el.classList.add('podcasts-card--visible')});
  btnMore.classList.add('podcasts__more--hidden');
});

// ГОСТИ
let tabsBtn = document.querySelectorAll('.guests-block__btn');
let tabsItem = document.querySelectorAll('.guest-ether');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsItem.forEach(function(element){ element.classList.remove('guest-ether--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('guest-ether--active');
  });
});

// ФОРМА ПОИСКА
document.addEventListener('DOMContentLoaded', (searchForm) => {
  document.getElementById('open-search-form').addEventListener('click', (searchForm) => {
    document.getElementById('search-form').classList.add('header__search-form-show')
  })

  document.getElementById('search-form-close').addEventListener('click', (searchForm) => {
    document.getElementById('search-form').classList.remove('header__search-form-show')
  })

  document.getElementById('search-form').addEventListener('submit', (searchForm) => {
    searchForm.preventDefault()
  })
});

// ВЫПАДАЮЩИЙ СПИСОК
const selectSearch = document.querySelector('#select');
const choices = new Choices(selectSearch,{
  allowHTML: true,
  searchEnabled: false,
  placeholder: true,
  itemSelectText: '',
});

// Кнопки "Что в Эфире"
document.querySelector('.header-ether__play-button--prev').addEventListener('click', function () {
  document.querySelector('.header-ether__play-button--prev .pause').classList.toggle('pause--active')
  document.querySelector('.header-ether__play-button--prev .play').classList.toggle('play--stop')
});

document.querySelector('.header-ether__play-button--now').addEventListener('click', function () {
  document.querySelector('.header-ether__play-button--now .pause').classList.toggle('pause--active')
  document.querySelector('.header-ether__play-button--now .play').classList.toggle('play--stop')
});

// Кнопки "Подкасты"
document.querySelector('.podcasts-card__play-button').addEventListener('click', function () {
  document.querySelector('.podcasts-card__play-button_pause').classList.toggle('podcasts-card__play-button_pause--active')
  document.querySelector('.podcasts-card__play-button_play').classList.toggle('podcasts-card__play-button_play--hidden')
});
