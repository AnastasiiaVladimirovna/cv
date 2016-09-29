$(document).ready(function() {

        $('.hover-screen').mouseenter(function() {
            var o = $(this).data('screen');
            $('.screen').filter(o).addClass('active');
        });

        $('.hover-screen').mouseleave(function() {
            var o = $(this).data('screen');
            $('.screen').filter(o).removeClass('active');
        });
    });