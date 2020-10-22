$(document).ready(function () {
    //開啟menu
    $('.open-icon').click(function (e) {
        e.preventDefault();
        $('.menu').addClass('menu-open');
        $('.open-icon').hide();
    });
    //關閉menu
    $('.fa-times').click(function (e) {
        e.preventDefault();
        $('.menu').removeClass('menu-open');
        $('.open-icon').show();
    });
    //search開關
    $('.nav-link .fa-search').click(function (e) {
        e.preventDefault();
        $('.input-group').toggleClass('input-group-show');
    });
    //開啟mb-shop
    $('.mb-shop').click(function (e) {
        $('.list-group').toggleClass('open-shop');
    });
    //swiper-banner
    var banner = new Swiper('.banner', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        mousewheel: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    //swiper-arrivals
    var arrivals = new Swiper('.arrivals', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        mousewheel: true,
        centeredSlidesBounds: true,
        slidesPerView: '5',
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            }
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    })
    //category
    var pdcard = new Swiper('.pdcard', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        mousewheel: true,
        centeredSlidesBounds: true,
        slidesPerView: '3',
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    //swipebox
    $('.swipebox').swipebox();
    $('#gallery').click(function (e) {
        e.preventDefault();
        $.swipebox([
            { href: 'image/detailjeans.jpg', title: 'My Caption' },
            { href: 'image/detailjean1.jpg', title: 'My Second Caption' },
            { href: 'image/detailjean2.jpg', title: 'My Caption' },
            { href: 'image/detailjean3.jpg', title: 'My Second Caption' },
            { href: 'image/detailjean4.jpg', title: 'My Caption' },
            { href: 'image/detailjean5.jpg', title: 'My Second Caption' }
        ]);
    });

    //購物車input
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });




});