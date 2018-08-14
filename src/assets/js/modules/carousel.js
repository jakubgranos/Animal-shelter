const carouselOptions = {
    draggable: false,
    cellSelector: '.pet-element'
};  

function initCarousel(selector, options) {
    $(selector).flickity(options);
};

export default initCarousel;
