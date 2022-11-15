(function ($) {
  
    $(document).ready(function() {
        
        console.log('hello');
        
        // 
        var url = "http://env-apis-testing-k8s.cluviplatform.click:8082/campaigns/suppliers_near?longitude=-73.1116571&latitude=7.1004256&distance=1000&only_opened=false&limit=100";

        $.ajax({
            url: url,
            type: 'GET',
            datatype: 'json',
        })
        .done(function (result) {
            console.log(result);
        });
				

    });

})(jQuery);