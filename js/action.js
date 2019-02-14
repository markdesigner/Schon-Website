$(document).ready(function(){

    $('.owl_feature').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
    autoplayTimeout:3600,
    autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:4
            }
        }
    })

    $('.owl_best').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,

        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:5
            }
        }


    })


    // feature control
    var owl1 = $('.owl_feature');


    $('.feature_bt_prev').click(function(e){
        owl1.trigger('prev.owl.carousel', [300]);
        
    })
    $('.feature_bt_next').click(function() {
        owl1.trigger('next.owl.carousel');
    })
    $('.latest_bt').click(function(e){
        owl1.trigger('next.owl.carousel');
    })
    $('.best_seller_bt').click(function(e){
        owl1.trigger('prev.owl.carousel', [300]);
    })

    
    // best control

    var owl2 = $('.owl_best');


    $('.best_bt_prev').click(function(e){
        owl2.trigger('prev.owl.carousel', [300]);
        
    })
    $('.best_bt_next').click(function() {
        owl2.trigger('next.owl.carousel');
    })
   





   
  })