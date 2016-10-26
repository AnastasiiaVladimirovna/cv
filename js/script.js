$(document).ready(function() {

    $('.hover-screen').mouseenter(function() {
        var o = $(this).data('screen');
        $('.screen').filter(o).addClass('active');
    });

    $('.hover-screen').mouseleave(function() {
        var o = $(this).data('screen');
        $('.screen').filter(o).removeClass('active');
    });

    $('.btn.lang').click(function() {
        var $el = $(this);
        var lang = $el.data('lang');

        $("[data-localize]").localize("dict/dict", { language: lang });
        $el.addClass("active");
        $el.siblings().removeClass('active');
    });
    
    $("[data-localize]").localize("dict/dict", { language: en });

});
