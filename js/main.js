
$(function () {
    $('.slider-line').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true,
        speed: 1500,
    })
})

$(function () {
    $('.testi_content-bottom').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        mobileFirst: true,
        autoplaySpeed: 2000,
        speed: 1500,
        

    })
})

$(function () {
    $('.slids').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        mobileFirst: true,
        autoplaySpeed: 2000,
        speed: 1500,

    })
})

$(document).ready(function(){
    $('.progect_details').click(function(){
        $('.slider_details').show(800);
        $(".portfolio__content").hide(300);
        $(".portfolio_line").hide(300);
        $(".port__box").hide(300);
    })
})



$(document).ready(function(){
    $('.progect_details').click(function(){
        $('.slider_details').show(800);
        $(".portfolio__content").hide(300);
        $(".portfolio_line").hide(300);
        $(".port__box").hide(300);
    })
})

$(document).ready(function(){
    $('.view_slides').click(function(){
        $('.silder_slide').show(800);
        $(".portfolio__content").hide(300);
        
    })
})


$(document).ready(function(){
    $('.view_slides').click(function(){
        $('.silder_slide').show(800);
        $(".portfolio__content").hide(300);
        
    })
})

$(document).ready(function(){
    $('.back_slid2').click(function(){
        $('.silder_slide').hide(300);
        $(".portfolio__content").show(800);
        
    })
})

$(document).ready(function(){
    $('.back_slid').click(function(){
        $('.portfolio__content').show(800);
        $('.portfolio_line').show(300);
        $(".silder_slide").hide(300);
        $(".port__box").show(300);
        $(".slider_details").hide(300);
    })
})


$(document).ready(function(){
    $(".header_burger").click(function(){
        $(".header_burger,.header_mobile, .nav_menu").toggleClass("active");
        $(".body").toggleClass("lock")
    })
})

$(document).ready(function(){
    $('.pop').click(function(){
        $('.popup').slideDown(300);
    })
})
$(document).ready(function(){
    $('.pop_close_btn').click(function(){
        $('.popup').slideUp(300);
    })
})


$(document).ready(function(){
   $(window).scroll(function(){
       if($(this).scrollTop()> 800) {
           $(".scrollToTop").fadeIn();
       } else {
        $(".scrollToTop").fadeOut();
       }
   })
   $(".scrollToTop").click(function(){
       $("html, body").animate({scrollTop : 0}, 500);
       return false;
   })
})

$(document).ready(function(){
    $(".topBB").click(function(){
        $("html, body").animate({scrollTop : 0}, 200);
        return false;
    })
 })

 $(document).ready(function(){
    $(".navigator1").click(function(){
        $("html, body").animate({scrollTop : 0}, 200);
        return false;
    })
})

$(document).ready(function(){
   $(".navigator2").click(function(){
       $("html, body").animate({scrollTop : 560}, 200);
       return false;
   })
})

$(document).ready(function(){
    $(".navigator3").click(function(){
        $("html, body").animate({scrollTop : 1760}, 200);
        return false;
    })
})

 $(document).ready(function(){
    $(".navigator4").click(function(){
        $("html, body").animate({scrollTop : 2550}, 200);
        return false;
    })
 })
  
 $(document).ready(function(){
    $(".navigator5").click(function(){
        $("html, body").animate({scrollTop : 3350}, 200);
        return false;
    })
 })
 $(document).ready(function(){
    $(".navigator6").click(function(){
        $("html, body").animate({scrollTop : 4700}, 200);
        return false;
    })
 })
 $(document).ready(function(){
    $(".get_toch").click(function(){
        $("html, body").animate({scrollTop : 950}, 200);
        return false;
    })
})



// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);
//     }

//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index]
//         }
//     }
// })
