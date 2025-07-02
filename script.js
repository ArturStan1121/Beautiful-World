let links = document.querySelectorAll('.scroll');
links.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        let targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

$(document).ready(function(){
    let slider;
    function initSlider() {
        if ($(window).width() > 768) {
            if (!slider) {
                slider = $('.mods').bxSlider({
                    slideWidth: 400,
                    minSlides: 2,
                    maxSlides: 3,
                    moveSlides: 1,
                    slideMargin: 135,
                    startSlide: 3
                });
            }
        } else {
            if (slider) {
                slider.destroySlider();
                slider = null;
            }
        }
    }

    initSlider();
    $(window).resize(function(){
        initSlider();
    });
});
