const carouselOptions = {
    groupCells: 3,
    pageDots: false,
    arrowShape: { 
        x0: 20,
        x1: 50, y1: 25,
        x2: 40, y2: 5,
        x3: 85,
        x4: 100, y4:50
      }
};
    
$('.carousel').flickity(carouselOptions);