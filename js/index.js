// МОДАЛЬНОЕ ОКНО
const modalBtn = document.querySelectorAll('.header-search__btn');
const modalOverlay = document.querySelector('.header-modal-overlay');
const modalClosedBtn = document.querySelectorAll('.header-personal__closed');

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
});

// ГОСТИ
let tabsBtn = document.querySelectorAll('.guests-block__btn');
let tabsItem = document.querySelectorAll('.guest-ether');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('guests-block__btn--active')});
    e.currentTarget.classList.add('guests-block__btn--active');

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
