$(document).ready(function () {
    
    new WOW().init();
    
    //Burger menu
    
    let wrapperMenu = $('.header__burger-menu');
    let navigationMenu = $('.header__navigation');
    let body = $('body');
    let scroll = true;
    
    $('.agency').css('opacity', '1');
    $('header').css('opacity', '1');
    $('.agency__link').css('opacity', '1')       

    wrapperMenu.on('click', function () {
        wrapperMenu.toggleClass('open')
        navigationMenu.toggleClass('navigation-display');
        setTimeout( function() {
            navigationMenu.toggleClass('navigation-opacity');
        }, 20);
        if (scroll === true) {
            scrollLock.disablePageScroll();
            scroll = false
        } else {
            scrollLock.enablePageScroll();
            scroll = true
        };
    })
    
    //Scroll animation
    
    let controller = new ScrollMagic.Controller();
    let videoBLock = $('video');
    let videoSector = $('.video-sector');
    let titleTop = $('.title-top');
    let titleBottom = $('.title-bottom');
    let section = $('section');

    $(section).each(function () {
        let scrollAnimation = new TimelineMax();

        scrollAnimation.to($(this).find(titleTop), {
                x: 80,
                ease:Power4.easeNone
            }, '0')
            .to($(this).find(titleBottom), {
                x: -80,
                ease:Power4.easeNone
            }, '0')
            .to($(this).find(videoBLock), {
                y: 80,
                ease: Linear.easeIn
            }, '0')
            .to($(this).find(videoSector), {
                y: 50,
                ease: Linear.easeIn
            }, '0');

        new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 'onEnter',
                duration: 1000
            })
            .setTween(scrollAnimation)
            //.addIndicators()
            .addTo(controller);
    });
    
    //Hover Title

    section.hover(function () {
        $(this).find(titleTop).toggleClass('hover-top');
        $(this).find(titleBottom).toggleClass('hover-bottom');
    });
    
    
    
    
    
})
