$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
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

    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('.owl_prev_bt').click(function(e){
        owl.trigger('prev.owl.carousel', [300]);
        
    })
    $('.owl_next_bt').click(function() {
        owl.trigger('next.owl.carousel');
    })



   
  })