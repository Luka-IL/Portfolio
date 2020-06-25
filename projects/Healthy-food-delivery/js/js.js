$(document).ready(function () {

    //Приcваивание стилей input и label в блоке header-mom при наведении

    $('.mom-item-block').hover(function () {
        $(this).children('label').addClass('label-hover');
        $(this).children('input').addClass('circle-hover');
    }, function () {
        $(this).children('label').removeClass('label-hover');
        $(this).children('input').removeClass('circle-hover');
    });

    //Смена изображений при клике на input в header-mom

    $('.mom-item-block').on('click', function () {

        $('.mom-item-block').removeClass('opacity');
        $(this).addClass('opacity');

        $('.header-image-block').removeClass('opacity');
        $(this).siblings('.header-image-block').addClass('opacity');
    });

    //Стиль кнопки "оформить заказ" при наведении

    $('.btn').hover(function () {
        $(this).removeClass('btn').addClass('btn-hover');
        $(this).children('.btn-arrow').removeClass('btn-arrow').addClass('btn-arrow-hover')
    }, function () {
        $(this).removeClass('btn-hover').addClass('btn');
        $(this).children('.btn-arrow-hover').removeClass('btn-arrow-hover').addClass('btn-arrow')
    });

    //Карусель с продуктами

    let productsCarousel = $('.products-list');
    productsCarousel.owlCarousel({
        loop: true,
        margin: 25,
        autoWidth: true,
        center: true
    });

    //Свои кнопки переключения карусели

    $('.products-btn-right').click(function () {
        productsCarousel.trigger('next.owl.carousel', [500]);
    })

    $('.products-btn-left').click(function () {
        productsCarousel.trigger('prev.owl.carousel', [500]);
    })

    //Изменение прозрачности при смене прокрутке

    productsCarousel.on('changed.owl.carousel', function (event) {
        let numEv = event.item.index;
        $('.products-item').addClass('products-opacity')
        $('div article:eq(' + numEv + ')').removeClass('products-opacity')
    })

    //Маска на форму с телефоном

    $(function () {
        $("#phone").mask("8(999) 999-9999");
    });

    //Плавный скролл по якорям

    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    // Бургер меню
    
    let wrapperMenu = $('.navigation-burger-menu');
    let scroll = true;
    
    wrapperMenu.on('click', function () {
        wrapperMenu.toggleClass('open');

        //Выпадающая навигация 

        $('.header-navigation-list').toggleClass('nav-block');
        $('.header-navigation-title').toggleClass('title-color-white');
        $('.line-menu').toggleClass('line-menu-background');
        if (scroll === true) {
            scrollLock.disablePageScroll();
            scroll = false
        } else {
            scrollLock.enablePageScroll();
            scroll = true
        };
    })



    $('#menu a').on('click', function () {
        $('.header-navigation-list').removeClass('nav-block');
        $('.header-navigation-title').removeClass('title-color-white');
        $('.line-menu').removeClass('line-menu-background');
        wrapperMenu.removeClass('open');
        scrollLock.enablePageScroll();
        scroll = true;
    })

    //Карусель в header 

    let startCarousel = function () {
        let carouselMom = $('.header-mom-list')
        if ($(window).width() < 700) {
            carouselMom.addClass('owl-carousel');
            carouselMom.owlCarousel({
                loop: true,
                autoWidth: true
            });

            //Кнопки прокрутки

            $('.header-mom-btn-right').click(function () {
                carouselMom.trigger('next.owl.carousel', [500]);
            })

            $('.header-mom-btn-left').click(function () {
                carouselMom.trigger('prev.owl.carousel', [500]);
            })
        } else {
            carouselMom.removeClass('owl-carousel');
            carouselMom.trigger('destroy.owl.carousel')
        };
    }

    startCarousel() //Проверка ширины при запуске 

    /*$(window).resize(function () {
        startCarousel() //При изменении ширины окна
    })*/
})
