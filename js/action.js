$(document).ready(function () {

    $('.shopping_cart_a').click(function(e){
        $('#full_grey_pad').addClass('pad_active')
    })
    $('#full_grey_pad').click(function(e){
        $(this).removeClass('pad_active');
    })
    
// //  shopping cart nav

//  $('.shopping_cart').click(function (e) {
//     $('#shopping_cart_shadow').fadeIn();

// });
// $('body').click(function (e) {
// //  if(e.target.id=='shopping_menu')
// //  return;
// //  if($(e.target).closest('#shopping_menu').length)
// //  return;
//  if($(e.target).is('.shopping_cart'))
//  return;

//     $('#shopping_cart_shadow').fadeOut();
    
//  })
//  $('body').click(function(e){
//     if((e.target.id=='shopping_menu') || ($(e.target).closest('#shopping_menu').length))
//     {
//         $('#shopping_menu').addClass('show');
//     }

//  })

// productsTriangle(三角形開始)

// $('#products_dropdown')
// .on('click',function(){
//     $('#triangle_products').addClass('active_tri');
// })
// $('#products-modal').click(function(e){
//     if($(e.target).closest('#products_modal').length())
//      return;
//     $('#triangle_products').addClass('negative_tri');
// })


        

    $('.follow').click(function (e) {
        $('#subModal').modal('show');
    })
    $(document).one('scroll', function (e) {
        $('#subModal').modal('show');

    })

// owl carousel

    $('.owl_feature').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3600,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    })

    $('.owl_best').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }


    })
    $('.owl_brands').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }


    })
    $('.owl_workspace').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }


    })
    $('.owl_other_products').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            }
        }


    })
    $('.owl_related_products').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            }
        }


    })
    $('.owl_cover_img').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }


    })



    // feature control
    var owl1 = $('.owl_feature');


    $('.feature_bt_prev').click(function (e) {
        owl1.trigger('prev.owl.carousel', [300]);

    })
    $('.feature_bt_next').click(function () {
        owl1.trigger('next.owl.carousel');
    })
    $('.latest_bt').click(function (e) {
        owl1.trigger('next.owl.carousel');
    })
    $('.best_seller_bt').click(function (e) {
        owl1.trigger('prev.owl.carousel', [300]);
    })


    // best control

    var owl2 = $('.owl_best');


    $('.best_bt_prev').click(function (e) {
        owl2.trigger('prev.owl.carousel', [300]);

    })
    $('.best_bt_next').click(function () {
        owl2.trigger('next.owl.carousel');
    })

    // brands control

    var owl3 = $('.owl_brands');


    $('.brands_bt_prev').click(function (e) {
        owl3.trigger('prev.owl.carousel', [300]);

    })
    $('.brands_bt_next').click(function () {
        owl3.trigger('next.owl.carousel');
    })

    // workspace control


    var owl4 = $('.owl_workspace');


    $('.workspace_bt_prev').click(function (e) {
        owl4.trigger('prev.owl.carousel', [300]);

    })
    $('.workspace_bt_next').click(function () {
        owl4.trigger('next.owl.carousel');
    })

    var owl5 = $('.owl_other_products');

    $('.other_products_bt_next').click(function () {
        owl5.trigger('next.owl.carousel');
    })

    var owl6 = $('.owl_cover_img');

    $('.other_products_bt_next').click(function () {
        owl6.trigger('next.owl.carousel');
    })

    //control price range slider

    $("#slider-range").slider({
        range: true,
        min: 100,
        max: 900,
        values: [200, 599],
        slide: function (event, ui) {
            $("#amount_min").val("$" + ui.values[0] + " " + "\u2014");
            $("#amount_max").val(" " + "$" + ui.values[1]);

            //+ " - $" + ui.values[ 1 ] );
        }
    });
    $("#amount_min").val("$" + $("#slider-range").slider("values", 0) + " " + "\u2014");
    $("#amount_max").val("$" + $("#slider-range").slider("values", 1)); // +
    // " - $" + $( "#slider-range" ).slider( "values", 1 ) );


   


})