$(document).ready(function(){	
	$(".button-projects").click(function(event){
        //    var goTop = 300;
        event.preventDefault();
        var goTop = $(".projects").offset().top;
            console.log($(".projects").offset().top);
        $("html,body").animate({scrollTop:goTop},1000,"easeInOutQuart");
    });
    $(".button-about").click(function(event){
        //    var goTop = 600;
        event.preventDefault();
        var goTop = $(".about").offset().top;
            console.log($(".about").offset().top);
        $("html,body").animate({scrollTop:goTop},1500,"easeInOutQuart");
    });
    $(".button-home").click(function(event){
        //    var goTop = 900;
        event.preventDefault();
        var goTop = $(".splash").offset().top;
            console.log($(".splash").offset().top);
        $("html,body").animate({scrollTop:goTop},2000,"easeInOutQuart");
    });
    $(".button-contact").click(function(event){
        //    var goTop = 1200;
        event.preventDefault();
        var goTop = $(".contact").offset().top;
            console.log($(".contact").offset().top);
        $("html,body").animate({scrollTop:goTop},2500,"easeInOutQuart");
    });

    window.sr = ScrollReveal();
    sr.reveal('.header');
    sr.reveal('.description')
    ({ duration: 2000 });
sr.reveal('.box', 50);


});