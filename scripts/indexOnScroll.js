var fractalGif = document.getElementsByClassName("mnSet")[0];
fractalGif.style.opacity = (0).toString();
$(window).on('scroll', function() {
    var firstText = document.getElementsByClassName("leftRightContainer")[0];
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    var scrollP = (s / (d - c));
    if(0.02 < scrollP){
        fractalGif.style.opacity = (0.2 + (scrollP*3)).toString();
        firstText.style.opacity = (0.2+(1-scrollP*5 )).toString();
    }
    if(0.001 > scrollP){
        fractalGif.style.opacity = (0).toString();
    }
    if(0.77 < scrollP){
        fractalGif.style.opacity = (1 - (scrollP-0.65)*3).toString();
    }
})