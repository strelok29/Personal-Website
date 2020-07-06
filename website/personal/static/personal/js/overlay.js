
/*menu overlay js*/
$(document).ready(function () {

    $(".menu-btn a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close glyphicon glyphicon-console');
    });

    $('.overlay').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close glyphicon glyphicon-console');
    });

    $('.menu a').on('click', function () {
        $(".overlay").fadeToggle(5000);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close glyphicon glyphicon-console');
    });



});


/*preloader js*/
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        
    }, 500);

 
});