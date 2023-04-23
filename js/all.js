$(document).ready(function () {
  /*下拉式選單*/
  $(".list-two").click(function (e) { 
    e.preventDefault();
    $(".list-two").toggleClass( 'active');
    $(".list-open").slideToggle();
});

    /*swiper效果*/
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        effect:'fade',
        loop:true,
        autoplay: {
          delay: 3000,
        },
       // If we need pagination
       pagination: {
        el: '.swiper-pagination',
      },
     // Navigation arrows
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
   }); 
     
      /*燈箱效果*/
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      }) ;

      /*top效果*/
      function showBtnCondition() {
        if ($(this).scrollTop() > 250) {
          $('.top').fadeIn();
            } else {
             $('.top').fadeOut();
           }
         }
      $(window).scroll(showBtnCondition);
      $('.top').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
          scrollTop:0
        }, 1000 );
       });
});

