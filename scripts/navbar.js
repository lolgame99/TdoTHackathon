$(function() {
    $("body").on('click', '.homeA', function(event) {
        $(".home").addClass('active');
        $(".temp").removeClass('active');
        $(".humid").removeClass('active');
        $(".light").removeClass('active');
    });

    $("body").on('click', '.tempA', function(event) {
        $(".home").removeClass('active');
        $(".temp").addClass('active');
        $(".humid").removeClass('active');
        $(".light").removeClass('active');
    });

    $("body").on('click', '.humidA', function(event) {
        $(".home").removeClass('active');
        $(".temp").removeClass('active');
        $(".humid").addClass('active');
        $(".light").removeClass('active');
    });

    $("body").on('click', '.lightA', function(event) {
        $(".home").removeClass('active');
        $(".temp").removeClass('active');
        $(".humid").addClass('active');
        $(".light").removeClass('active');
    });

});
