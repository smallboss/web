$('.tracked-jap').waypoint(function(dir){      
      $(this.element).addClass('fadeInDown');
      $('#jap-content').addClass('fadeInLeft');
   }, {
      offset: '50%'
});

// $('.tracked-jap').waypoint(function(dir){      
//       $('li#jap').addClass('active');
//       $('li#ger').removeClass('active');
//       $('li#amer').removeClass('active');
//    }, {
//       offset: '50%'
// });

// $('.tracked-jap').waypoint(function(dir){      
//       $('li#jap').removeClass('active');
//    }, {
//       offset: 50
});

// ===============================
// owlCarousel ===================
$(document).ready(function(){

   //$('#gallery-japans a[rel=darkbox]').darkbox();
   $('#gallery-japans').darkbox();

   // owl-japans-content ======
   var owlJapData = $('.owl-jap-data');
   
   owlJapData.owlCarousel({
      // animateOut: 'bounceOutLeft',
      // animateIn: 'bounceInRight',
      items:1,
      margin:30,
      stagePadding:30,
      smartSpeed:450,
      mouseDrag:false,
      dotsContainer: '#owl-jap-dots'
   });

   $('.nav-owl-jap-dot').click(function(){
      owlJapCont.trigger('to.owl.carousel', [$(this).index(), 300]);
   });

   $('.owl-jap-dot').click(function(){
      owlJapCont.trigger('to.owl.carousel', [$(this).index(), 300]);
   });



   var owlJapans = $('.owl-japans');

   owlJapans.owlCarousel({
      center: true,
      items:4,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      autoplaySpeed:2000,
      responsive:{
         600:{
            items:4
         }
      }

   });

   owlJapans.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
         owlJapans.trigger('next.owl');
      } else {
         owlJapans.trigger('prev.owl');
      }
      e.preventDefault();
   });
   // END owlCarousel owl-japans =====

});
// END owlCarousel ===================
//====================================

// DOTS =============================
var activeDotJapan = $('#dot-subaru');

$('.dot-japan').click(function(){      
   $(this).addClass('active');
   activeDotJapan.removeClass('active');
   activeDotJapan = $(this);
});
