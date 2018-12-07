$('document').ready(function(){
    $('.hello .cont .next button').click(function(){
        $('html').animate({
            scrollTop: $('.hello').height()
        },1000);
    });

    $('.pencil .button i').click(function(){
        if($('.pencil').css('right') == '20px'){
            $('.pencil').css('right','-210px');
        }
        else{
            $('.pencil').css('right','20px');
        }
    });

    $('.pencil .menu ul li').click(function(){
        const $move = $(this);

        $('html').animate({
            scrollTop: $move.attr('data-height')
        },1000);
    });
})