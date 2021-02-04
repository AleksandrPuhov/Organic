const headerElement = document.getElementById('header');
const postsList = document.getElementById('posts__list');
const postsBtn = document.getElementById('posts__btn');
const headerNavBurger = document.getElementById('nav-burger');
const headerNav = document.getElementById('main-nav');

const presentedSwiper = new Swiper('.presented__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: '.presented__slider-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            slidesPerGroup: 2,
        },
        1000: {
            slidesPerView: 4,
            slidesPerGroup: 2,
        },
    },
});

const testimonialSwiper = new Swiper('.testimonial__slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.testimonial__slider-pagination',
        clickable: true,
    },
});

const navScroll = () => {
    if (window.scrollY >= 15) {
        headerElement.classList.add('header--scroll');
    } else {
        headerElement.classList.remove('header--scroll');
    }
};

const postsShow = () => {
    postsList.querySelectorAll('.posts__list-item--hidden').forEach((el) => {
        el.classList.remove('posts__list-item--hidden');
    });
};

headerNavBurger.addEventListener('click', () => {
    headerNav.classList.toggle('nav--active');
    document.body.classList.toggle('lock');
});

window.addEventListener('scroll', () => {
    navScroll();
});

if (postsBtn) {
    postsBtn.addEventListener('click', () => {
        postsShow();
    });
}
