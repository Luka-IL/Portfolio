$(document).ready(function () {
    
    //Scroll
    
    $(".navigation").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
    
    $("#btn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('data-set'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
    
    //Burger menu
    
    $('#checkbox1').on("click", function(){
        $('#navigation').toggleClass('display_flex');
        $('body').toggleClass('overflow_hidden')
    })
    $('.navigation__link').on('click', function() {
        $('#navigation').removeClass('display_flex');
        $('body').removeClass('overflow_hidden')
    })

})
