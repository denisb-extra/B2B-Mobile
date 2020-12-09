$(document).ready(function ($) {
    window.addEventListener('scroll', onScroll);
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
        } else {
            $("header" ).removeClass("scrolled");
        }
    }
    onScroll();
    
    
    $(".mobile_menu").simpleMobileMenu({
        "menuStyle": "slide",
    });


    $(".icon.search").on("click", function(){
        $(".search-field").slideToggle();
    });

    $(".has-mega-menu").on('mouseover', function(){
        $(".mega-menu").addClass("open");
    });


    $(document).mousemove(function(event) { 
        $target = $(event.target);
        if(!$target.closest('header').length && !$target.closest('.mega-menu').length) {
            $(".mega-menu").removeClass("open");  
        }
    });


    $(".accordion .tab-title").on("click", function(){
        var tab = $(this).closest(".tab");
        tab.find(".content").slideToggle();
    });

    $(document).click(function(event) { 
        $target = $(event.target);
        if(!$target.closest('.search').length && $(window).width() < 1370) {
            $(".search-field").slideUp();   
        }
    });

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;
        thankyouPage = getFieldValueByName(inputs, "thankyou-page");
        if(thankyouPage) window.location = thankyouPage;
    }, false );
});

function getFieldValueByName(ar, name){
    var result = "";
    ar.forEach(function(item) {
        if(item.name == name) result = item.value;
    });
    return result;
}