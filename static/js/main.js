$(document).ready(function () {
    svg4everybody({});

    $("a, button").click(function(e) {
        e.preventDefault();
    });

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.banner-nav',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });
    $('.banner-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.banner-slider',
        centerMode: true,
        focusOnSelect: true,
        arrows: false
    });

    //Add class active in products-filter link
    $('.products-filtr__item').on('click', function() {
        $('.products-filtr__item.active').removeClass('active');
        $(this).addClass('active');
    });

    let slides = $('.filtr-item');

    $('.products-slider__filter').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '.products-nav__filter--prev',
        nextArrow: '.products-nav__filter--next'
    });

    // $('.products-filtr__item').click(function() {
    //     var value = $(this).attr('data-filter');
    //     if(value == 'all') {
    //         $('.filtr-item').show('1000');
    //     }
    //     else {
    //         $('.filtr-item').not('.' + value).hide('1000');
    //         $('.filtr-item').filter('.' + value).show('1000');
    //     }
    // });

    $('.products-filtr__item').on('click', function() {
        let filter = $(this).attr('data-filter');
        let key = '.' + filter;

        if(filter == 'all') {
            $('.products-slider__filter').slick('slickUnfilter');
        }
        else {
            $('.products-slider__filter').slick('slickUnfilter');
            $('.products-slider__filter').slick('slickFilter', key);
        }

    });

    $('.special-offer__slider').slick({
        slidesToShow: 1,
        slidesToScrollL: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        asNavFor: '.special-offer__nav'
    });

    $('.special-offer__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        focusOnSelect: true,
        speed: 1000,
        arrows: false,
        asNavFor: '.special-offer__slider'
    });

    // $('.special-offer__prev.slick-current').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //     $('.special-offer__prev.slick-current').css.opacity = '0';
    // });

    $('.bestsales-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '.products-nav__bestsales--prev',
        nextArrow: '.products-nav__bestsales--next'
    });

    $('.products-slider__new').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '.products-nav__new--prev',
        nextArrow: '.products-nav__new--next'
    });

});