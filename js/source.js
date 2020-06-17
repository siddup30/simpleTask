$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 16,
        centeredSlides: true,
        setWrapperSize: true,
        width:292,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});