const carouselOptions = {
    draggable: false,
    cellSelector: 'carousel-cell'
};  

function initCarousel(selector, options) {
    $(selector).flickity(options);
};

export default initCarousel;
