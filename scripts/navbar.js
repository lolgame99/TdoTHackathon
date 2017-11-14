$(function() {
    $("body").on('click', '.homeA', function(event) {
        $(".home").html('<a class="nav-link homeA">Home <span class="sr-only">(current)</span></a>');
        $(".temp").html('<a class="nav-link tempA">Temperatur</a>');
        $(".humid").html('<a class="nav-link humidA">Luftfeuchtigkeit></a>');
        $(".light").html('<a class="nav-link lightA">Helligkeit</a>');
    });

    $("body").on('click', '.tempA', function(event) {
        $(".home").html('<a class="nav-link homeA">Home</a>');
        $(".temp").html('<a class="nav-link tempA">Temperatur <span class="sr-only">(current)</span></a>');
        $(".humid").html('<a class="nav-link humidA">Luftfeuchtigkeit</a>');
        $(".light").html('<a class="nav-link lightA">Helligkeit</a>');
    });

    $("body").on('click', '.humidA', function(event) {
        $(".home").html('<a class="nav-link homeA">Home</a>');
        $(".temp").html('<a class="nav-link tempA">Temperatur</a>');
        $(".humid").html('<a class="nav-link humidA">Luftfeuchtigkeit <span class="sr-only">(current)</span></a>');
        $(".light").html('<a class="nav-link lightA">Helligkeit</a>');
    });

    $("body").on('click', '.lightA', function(event) {
        $(".home").html('<a class="nav-link homeA">Home</a>');
        $(".temp").html('<a class="nav-link tempA">Temperatur</a>');
        $(".humid").html('<a class="nav-link humidA">Luftfeuchtigkeit</a>');
        $(".light").html('<a class="nav-link lightA">Helligkeit <span class="sr-only">(current)</span></a>');
    });

});
