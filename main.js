(function ($) {

    $(document).ready(function () {

        console.log('hello');

        $('.tabs-items ul li:first').addClass('active');
        $('.tabs-items ul li:not(:first)').addClass('inactive');

        $(".tabs-items ul li").click(function () {

            $('.tabs-items ul li').removeClass('active');

            if ($(this).hasClass('inactive')) {

                $('.tabs-items ul li').addClass('inactive');
                $(this).removeClass('inactive');
                $(this).addClass('active');
            }

        });
        
        // Table 
        $(".pricing-btn button").click(function () {
            $(".pricing-container table").toggleClass("table-hide");
        });

        

    });

})(jQuery);