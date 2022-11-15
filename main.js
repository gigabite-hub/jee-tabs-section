(function ($) {
  
    $(document).ready(function() {
        
        console.log('hello');

        $('.tabs-items ul li:first').addClass('active');
        $('.tabs-items ul li:not(:first)').addClass('inactive');

        $( ".tabs-items ul li" ).click(function( ) {

            $('.tabs-items ul li').removeClass('active'); 

            if($(this).hasClass('inactive')){ //this is the start of our condition 
                
                $('.tabs-items ul li').addClass('inactive');                      
                $(this).removeClass('inactive');
                $(this).addClass('active');
            }

		});	

    });

})(jQuery);