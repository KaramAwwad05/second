$(window).on('scroll', function () {
    requestAnimationFrame(parallaxScroll);
});

function parallaxScroll() {

    let scrolled = $(window).scrollTop();
    let docHeight = $(document).height() - $(window).height();
    let scrollPercent = (scrolled / docHeight) * 100;

    
    $('.scroll-indicator').css('width', scrollPercent + '%');

    
    $('.layer-sky').css(
        'transform',
        'translateY(' + (scrolled * 0.15) + 'px)'
    );

   
    $('.layer-fog').css(
        'transform',
        'translateY(' + (scrolled * 0.3) + 'px)'
    );

   
    $('.layer-porsche').css(
        'transform',
        'translateY(' + (scrolled * 0.2) + 'px) scale(' + (1 + scrolled * 0.0002) + ')'
    );


    $('h1').css({
        'opacity': (0.15 - (scrolled * 0.0008)),
        'transform': 'translate(-50%, -50%) scale(' + (1 + scrolled * 0.0005) + ')'
    });


    $('.obj-1').css('transform', 'translateY(' + (-scrolled * 1.1) + 'px)');
    $('.obj-2').css('transform', 'translateY(' + (-scrolled * 1.3) + 'px)');
    $('.obj-3').css('transform', 'translateY(' + (-scrolled * 1.2) + 'px)');
}
