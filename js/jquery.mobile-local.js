
$(function() {
	"use strict";
		setInterval(function() {
			$('#slider .slides').animate({'margin-left' :  '-=720px'}, 1000);
	
		console.log( new Date());
}, 3000);


//$(selector).animate
});

        $(document).ready(function () {
			"use strict";
      $("#fontchg").css("font-size","25px");							
            $.ajax({
                type: "GET",
                url: "http://localhost:65135/ProductRESTService.svc/GetProuctList/",
                dataType: "json",
                success: function (data) {  
								       
                     var i = 0;
                     $.each( data, function() {
        				var id = data[i].ProductId;
                        var name = data[i].Name;
                        var price = data[i].Price;
                        var category = data[i].CategoryName;
                        $('<tr><td>' + id + '</td><td>' + 
                        name + '</td><td>' + price + '</td><td>' +
                                     category + '</td></tr>').appendTo('#products');                       
				        i++;					 

					 });
					 $(data).find('Product').each(function () {
						alert("Hi you");
                        var id = $(this).find('ProductId').text();
                        var name = $(this).find('Name').text();
                        var price = $(this).find('Price').text();
                        var category = $(this).find('CategoryName').text();
                        $('<tr><td>' + id + '</td><td>' + 
                        name + '</td><td>' + price + '</td><td>' +
                                     category + '</td></tr>').appendTo('#products');                       
                    });
                },
				
                /*error: function (xhr) {
					alert("Hi");                 
                    alert(xhr.responseText);
                }*/
            });
        });
	