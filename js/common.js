$('.mobile-tab').hide();

$('#burg').on('click', function(){
    $('.mobile-tab').slideToggle();
    
    if ($('span.bar').hasClass('active')){
        $('span.bar').removeClass('active');
    } else {
        $('span.bar').addClass('active');
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50){
        $('header').addClass("test");
    } else{
        $('header').removeClass("test");
    }
});