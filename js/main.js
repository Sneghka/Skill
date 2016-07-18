 $(document).ready(function () {
     $('.bxslider').bxSlider({
         mode: 'fade',
         speed: 5000,
         auto: true,
         /* adaptiveHeight: false,*/
         /*pager: false,
         controls: false*/
     });

     $("#scroll").click(function () {
         $('html, body').stop().animate({
             scrollTop: 0
         }, 1000, 'swing');
     });


     $(window).scroll(function () {
         var heigthFromTop = $(window).scrollTop();
         var windowHeight = window.innerHeight;
         if (heigthFromTop > windowHeight / 2) {
             $("#scroll").fadeIn(600);
         }
         if (heigthFromTop < windowHeight / 2) {
             $("#scroll").fadeOut(400);
         }
     });

     $(window).width(function () {
         var widthW = $(window).width();
         if (widthW > 799)
         /*if(widthW > 1110 || ((widthW >=800 && widthW <= 1024)&&(window.orientation == 90 || window.orientation == -90) ))*/
         {
             $("#front_slider_1").attr("src", "images/Mc_front.png");
             $("#front_slider_2").attr("src", "images/Univer_front.png");
             $(".laptop").attr("src", "images/Laptop.png");
         } else {
             $("#front_slider_1").attr("src", "images/Mc_front_min.png");
             $("#front_slider_2").attr("src", "images/Univer_front_min.png");
             $(".laptop").attr("src", "images/Laptop_min.png");
         }
     });

     $(window).resize(function () {
         var widthW = $(window).width();

         if (widthW > 799)
         /*if(widthW > 1110 || ((widthW >=800 && widthW <= 1024)&&(window.orientation == 90 || window.orientation == -90) ))*/
         {

             var frontSliderHeigth = 0;
                 var heightFromTopWindowToTopFrontSlider = 0;
             
             /*****БЛОК СМЕНЫ КАРТИНКИ БЕКГРАУНДА****/
             $("#front_slider_1").attr("src", "images/Mc_front.png");
             $("#front_slider_2").attr("src", "images/Univer_front.png");
             $(".laptop").attr("src", "images/Laptop.png");
             $(".laptop ").load(function () {     
                 
                 var frontSliderHeigth = $(".front_slider").height();
                 var heightFromTopWindowToTopFrontSlider = $(".front_slider").offset().top;
                 var halfArrowheigth = 40;
                 var topHeightForArrow1 = Math.round((frontSliderHeigth / 2 + heightFromTopWindowToTopFrontSlider - halfArrowheigth) * 100 / window.innerHeight) + "%";          
                 
                 /* alert("внутренняя высота окна - " + window.innerHeight + '\n' +
                      "высота окна" + screen.height + '\n' +
                      "внутренняя ширина окна - " + window.innerWidth + '\n' +
                      "высота слайдера - " + frontSliderHeigth + '\n' +
                      "СЛАЙДЕР - " + $("#front_slider_1").attr("src") + '\n' +
                      "высота от начала окна до слайдера - " + heightFromTopWindowToTopFrontSlider + '\n' +
                      "итоговое расстояние в %  " + topHeightForArrow1
                  );*/

                 $(".bx-prev").attr("style", "top:" + topHeightForArrow1);
                 $(".bx-next").attr("style", "top:" + topHeightForArrow1);               
                 
             });
     

         }
         if (widthW <= 799) {
             $("#front_slider_1").attr("src", "images/Mc_front_min.png");
             $("#front_slider_2").attr("src", "images/Univer_front_min.png");
             $(".laptop").attr("src", "images/Laptop_min.png");
             $(".laptop ").load(function () {
                 $(".bx-prev").attr("style", "display: none;");
                 $(".bx-next").attr("style", "display: none;");
             });
         }
     });

 });

 function ControlsDirection() {

     var frontSliderHeigth = $(".front_slider").height();
     var heightFromTopWindowToTopFrontSlider = $(".front_slider").offset().top;
     var halfArrowheigth = 40;
     var topHeightForArrow1 = Math.round((frontSliderHeigth / 2 + heightFromTopWindowToTopFrontSlider - halfArrowheigth) * 100 / window.innerHeight) + "%";
     if (window.innerWidth > 799) {
         $(".bx-prev").attr("style", "top:" + topHeightForArrow1);
         $(".bx-next").attr("style", "top:" + topHeightForArrow1);
     }

     /* alert("Onload function: внутренняя высота окна - " + window.innerHeight + '\n' +
          "высота окна" + screen.height + '\n' +
          "внутренняя ширина окна - " + window.innerWidth + '\n' +
          "высота слайдера - " + frontSliderHeigth + '\n' +
          "высота от начала окна до слайдера - " + heightFromTopWindowToTopFrontSlider + '\n' +
          "итоговое расстояние в %  " + topHeightForArrow1
      );*/
 }