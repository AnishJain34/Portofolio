document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: false,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});
