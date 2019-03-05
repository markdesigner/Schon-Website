$(document).ready(function () {

   
    // Price Range Slider
    $(".ion-range-slider").ionRangeSlider({
        skin: "round",
        grid: false,
        type: "double",
        min: 100,
        max: 900,
        from: 250,
        to: 600,
        hide_min_max: true,
        prefix: "$",
        onStart: function (data) {
            // var ionmin=$('.irs-from').html();  
            // var ionmax=$('.irs-to').html();  
            $('#ion-min').val("$" + 250);
            $('#ion-max').val("$" + 600);
        },
        onChange: function (data) {
            var ionmin = $('.irs-from').html();
            var ionmax = $('.irs-to').html();
            $('#ion-min').val(ionmin);
            $('#ion-max').val(ionmax);
            // fired then range slider is ready
        },

    });
   

})