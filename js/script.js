$(function () {

    new WOW().init();
    navbarScroll();

    $(window).scroll(navbarScroll);

    function navbarScroll() {
        if ($(".navbar").offset().top > $(window).height()) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-fixed-top").addClass("navbar-scroll");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".navbar-fixed-top").removeClass("navbar-scroll");
        }
    }

    //Smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function(e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
    });

    //Fancybox
    $(".fancybox").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic',
        openSpeed  : 350,
        closeSpeed : 200,
    });

});
