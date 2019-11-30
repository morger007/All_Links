function onScroll() {
    var firstText = document.getElementsByClassName("leftRightcontainer")[0];
    var fractalGif = document.getElementsByClassName("mnSet")[0];
    var secondText = document.getElementsByClassName("secondLefRightCont")[0];
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    var scrollP = (s / (d - c));
    if (0.002 < scrollP) {
        fractalGif.style.opacity = (0.2 + (scrollP * 4)).toString();
        firstText.style.opacity = (0.2 + (1 - scrollP * 7)).toString();
    }
    if (0.0001 > scrollP) {
        fractalGif.style.opacity = (0).toString();
    }
}
