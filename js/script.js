$(document).ready(function () {
    $(".category .owl-carousel").owlCarousel( {
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:9
            }
        }
    });
    $(".latest-blog .owl-carousel").owlCarousel( {
        center: true,
        loop:true,
        nav:true,
        items:3,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $(".trending .owl-carousel").owlCarousel( {
        center: true,
        loop:true,
        nav:true,
        items:4,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
  
  
    

    $( ".owl-prev").html('<i class="fa fa-arrow-left"></i>');
    $( ".owl-next").html('<i class="fa fa-arrow-right"></i>');

});