$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $(".bg").css({
        "transform" : "translate(0,-" + wScroll / 2 + "px)"
    });
    $("header").css({
        "transform" : "translate(0," + wScroll * .65 + "px)"
    });
});

var isMenuOpen = false;

var menuOpen = function() {
    $("nav").finish();
    $("nav").animate({
        left: "0px"
    }, 300);
    $(".menuButton").animate({
        left: "-20px"
    }, 200);

    isMenuOpen = true;
};
var menuClose = function() {
    $("nav").finish();
    $("nav").animate({
        left: "-240px"
    }, 300);
    $(".menuButton").animate({
        left: "0px"
    }, 200);

    isMenuOpen = false;
};
var menu = function() {
    $(".menuButton").click(function() {
        if (isMenuOpen === false) {menuOpen()}
        else {menuClose()}
    });
};

// Close menu on scroll
window.onscroll = function() {
    $("nav").animate({
        left: "-240px"
    }, 200);
    $(".menuButton").animate({
        left: "0px"
    }, 200);

    isMenuOpen = false;
};

$(document).ready(menu);

// Email address mask
var emailMe = function() {
    window.open("mailto:erikboesen@erikboesen.com");
};

/* Google Analytics */
if(document.location.protocol=='http:'){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-44442416-1', 'auto');
    ga('send', 'pageview');
}