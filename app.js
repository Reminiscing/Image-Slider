
var slides = $('.slide');

var flag = 0;

var play = true;

slides.first().before(slides.last());

setInterval(show, 4000);

function show() {
    if(play){
       slides = $('.slide');


       var activeSlide = $('.active');

       slides.last().after(slides.first());

       activeSlide.removeClass('active').next('.slide').addClass('active');
       
       if(flag == 0){
           $(".box").css({'clip-path':"polygon(0% 100%, 100% 100%, 100% 90%, 85% 95%, 10% 78%, 7% 11%, 90% 5%, 85% 95%, 100% 95%, 100% 0%, 0% 0%, 0% 100%)"});
           flag = 1;
       } 
        else {
            $(".box").css({'clip-path':"polygon(0% 100%, 100% 100%, 100% 80%, 93% 85%, 8% 95%, 15% 6%, 89% 22%, 93% 85%, 100% 80%, 100% 0%, 0% 0%, 0% 100%)"});
            flag = 0;
        }
    }  
}






$(document).ready(function() {
    var btn = $(".button");
    btn.click(function() {
      btn.toggleClass("paused");
      return false;
    });
  });
