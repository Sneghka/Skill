 $(document).ready(function () {
     $('.bxslider').bxSlider({
         mode: 'fade',
         speed: 5000,
         auto: true,
         /* adaptiveHeight: false,*/
         /*pager: false,
         controls: false*/

     });

     $(window).width(function () {
         var widthW = $(window).width();
         if(widthW > 799)
         /*if(widthW > 1110 || ((widthW >=800 && widthW <= 1024)&&(window.orientation == 90 || window.orientation == -90) ))*/ {
              $("#front_slider_1").attr("src", "images/Mc_front.png"),
                 $("#front_slider_2").attr("src", "images/Univ_front.png"),
                  $(".laptop").attr("src", "images/Laptop.png");
         }
         else  {
             $("#front_slider_1").attr("src", "images/Mc_front_min.png"),
                 $("#front_slider_2").attr("src", "images/Univer_front_min.png"),
                 $(".laptop").attr("src", "images/Laptop_min.png");
         }
     });     
    
 });


