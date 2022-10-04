function scrollEvent () {
    var offset = window.pageYOffset;
    var nav = document.querySelector("nav");
    if (offset > 500) {
        nav.classList.add("scrollShow")
    }
    else {
        nav.classList.remove("scrollShow");
    }
}