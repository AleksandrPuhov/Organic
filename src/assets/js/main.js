const headerElement = document.getElementById('header');

const presentedSwiper = new Swiper('.presented__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    pagination: {
        el: '.presented__slider-pagination',
        clickable: true,
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

window.addEventListener('scroll', () => {
    navScroll();
});
