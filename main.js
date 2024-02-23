$(window).scroll(function() {
    let wScroll = $(this).scrollTop();
    $('.textAwalPage h3').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    })
})