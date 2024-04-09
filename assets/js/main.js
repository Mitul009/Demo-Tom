
$(document).ready(function(){
    
   ScrollSmoother.create({
     smooth: 5,         
     effects: true,     
     smoothTouch: 0.1,  
   });
   
   
   function headerspace() {
     var headerHeight = $('.header').outerHeight();
     $('.wrapper').css("padding-top", headerHeight)
   }
     headerspace();
     $(window).on('resize orientationchange', function () {
         headerspace();
     });
     
    // /////////////////////// swiper_slider
     
     var swiper = new Swiper(".play_sliders", {
       slidesPerView: 5,
       loop: true,
       spaceBetween: 40,
       breakpoints: {
        300: {
          slidesPerView: 2.5,
          spaceBetween: 25,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1080: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 35,
        },
      },
     });
     
     var swiper = new Swiper(".bunch-slider", {
       slidesPerView: 4,
       loop: true,
       spaceBetween: 160,
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
     });
     
     var swiper = new Swiper(".play_game_slders", {
       slidesPerView: 5,
       spaceBetween: 30,
       loop: true,
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
       breakpoints: {
        300: {
          slidesPerView: 2.5,
          spaceBetween: 25,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1080: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 35,
        },
      },
     });
     
     var swiper = new Swiper(".watch_show_slders", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
      },
        breakpoints: {
        300: {
          slidesPerView: 1.2,
          spaceBetween: 25,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1080: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
    
       // //////////////////// swiper_slider
     
     $(".toggle_btn").on("click", function(e) {
       e.preventDefault();
       $(".mega_menu_wpr").addClass("open");
       $("body").addClass("overflow_hidden" );
     });
     $(".m_close_btn").on("click", function() {
         $(".mega_menu_wpr").removeClass("open");
         $("body").removeClass("overflow_hidden" );  
     });
     
    // /////////////////////// roting_slider
     $(function(){
         $('.rotating-slider').rotatingSlider();
       });
       
       $(function(){
         $('.rotating-slider').rotatingSlider({
           autoRotate:true,
           autoRotateInterval: 1300,
           draggable:true,
           directionControls:false,
           rotationSpeed: 750,
           // slideHeight : 360,
         });
       });
       
      // headeradd_class
     var lastScrollTop = 0;
     $(window).scroll(function(event){
         var st = $(this).scrollTop();
         if(st >= 100) {
           if (st > lastScrollTop ){
           console.log("up");
             $('.header').addClass('scrolling_down');
             $('.header').removeClass('scrolling_up');
           } else {
           console.log("down");
             $('.header').addClass('scrolling_up');
             $('.header').removeClass('scrolling_down');
           }
         }
         lastScrollTop = st;
       });	

      //  svg scroll
       $(window).scroll(function() {
         var theta = $(window).scrollTop();
         $('.hero_right_img').css({ transform: 'rotate(-' + theta / 7 + 'deg)' });
         $('.hero_star').css({ transform: 'rotate(' + theta / 1.5 + 'deg)' });
         $('.new_bg_orange').css({ transform: 'rotate(-' + theta / 7 + 'deg)' });
         $('.new_bg_yellow').css({ transform: 'rotate(' + theta / 1.5 + 'deg)' });
         $('.bunch_ani_img').css({ transform: 'rotate(-' + theta / 7 + 'deg)' });
         $('.bunch_img_2').css({ transform: 'rotate(' + theta / 30 + 'deg)' });
       });
     
       $(".xyz_pop").on("click", function(e) {
         e.preventDefault();
         $(".to_play_pop").addClass("new");
         $("body").addClass("overflow_hidden" );
       });
       $(".play_close_btn").on("click", function() {
           $(".to_play_pop").removeClass("new");
           $("body").removeClass("overflow_hidden" );  
       });
       
       $(".play_pop").on("click", function(e) {
         e.preventDefault();
         $(".to_play_pop").addClass("new");
         $("body").addClass("overflow_hidden" );
       });
       $(".play_close_btn").on("click", function() {
           $(".to_play_pop").removeClass("new");
           $("body").removeClass("overflow_hidden" );  
       });
       
       
       AOS.init({
         once: true,
       });

       $('.cb-tagreel-row').infiniteslide({
           'speed': 100
       });
       $('.cb-tagreel-row-left').infiniteslide({
         'speed': 100,
         'direction':'right'
       });
       $('.play_rotet_inn').infiniteslide({
        'speed': 300,
      });
     
});











