$(function () {
    // Lang list
    $('.lang-list button').click(function () {
        $(this).stop(true, false, true).toggleClass('active');
        $('.lang-dropdown').stop(true, false, true).toggleClass('active');
    })

    // Home Banner Slider
    const bannerSwiper = new Swiper(".bannerSwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });

    // Discover Slider
    var discoverSwiper = new Swiper(".discoverSwiper", {
        lazy: true,
        loop: false,
        slidesPerView: 4,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 1500,
        },
    });

    // Discover Slider
    var toursSwiper = new Swiper(".toursSwiper", {
        lazy: true,
        loop: false,
        slidesPerView: 4,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 1500,
        },
    });

    // Contact
    $('#contactForm .form-control').on('input', function () {
        if ($(this).val()) {
            $(this).next('.form-label').fadeOut(0);
        } else {
            console.log($(this).next(), '-');
            $(this).next('.form-label').fadeIn(0);
        }
    });

    // Image gallery
    const imgGallerySwiper = new Swiper(".gallerySwiper.image", {
        lazy: true,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 1500,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    //  Video gallery
    const videoGallerySwiper = new Swiper(".gallerySwiper.video", {
        lazy: true,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 1500,
            reverseDirection: true,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    // Gallery Fancybox
    Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            autoStart: false,
        },
        Toolbar: {
            display: [
                { id: "prev", position: "center" },
                { id: "counter", position: "center" },
                { id: "next", position: "center" },
                "zoom",
                "slideshow",
                "fullscreen",
                "download",
                "close",
            ],
        },
        infinite: false,
    });

    // Tour inner slider
    var tourThumbSlider = new Swiper(".tourThumbSlider", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var tourInnerSlider = new Swiper(".tourInnerSlider", {
        loop: false,
        lazy: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: tourThumbSlider,
        },
    });
})