

var glide = new Glide("#intro1", {
    type: "carousel",
    perView: 4,
    gap: 100,
    autoplay: 3000,
    hoverpause: false,
    animationDuration: 3000, // Set the transition duration to 1000ms (1 second)
    animationTimingFunc: 'linear',
    rewind: false,
    pagination: {
        el: ".glide__bullet",
    },
    arrows: {
        prev: ".slider-prev",
        next: ".slider-next",
    },
    breakpoints: {
        1200: { perView: 3, }, // Show 4 slides on screens larger than 1200px
        900: { perView: 2 },  // Show 2 slides on screens between 900px and 1200px
        768: { perView: 3 },  // Show 2 slides on screens between 900px and 1200px
        600: { perView: 2, gap: 10, },  // Show 1 slide on smaller screens
    }
});
glide.mount();

var glide = new Glide("#intro", {
    type: "carousel",
    perView: 7,
    gap: 100,
    autoplay: 3000,
    hoverpause: false,
    animationDuration: 3000, // Set the transition duration to 1000ms (1 second)
    animationTimingFunc: 'linear',
    rewind: false,
    pagination: {
        el: ".glide__bullet",
    },
    arrows: {
        prev: ".slider-prev",
        next: ".slider-next",
    },
    breakpoints: {
        1200: { perView: 5 }, // Show 4 slides on screens larger than 1200px
        900: { perView: 4 },  // Show 2 slides on screens between 900px and 1200px
        768: { perView: 4 },  // Show 2 slides on screens between 900px and 1200px
        600: { perView: 3, gap: 15, },  // Show 1 slide on smaller screens
    }
});
glide.mount();
