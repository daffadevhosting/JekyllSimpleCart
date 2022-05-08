$(".like-btn").click( function() {

	$(this).toggleClass('clicked');
  event.preventDefault();

});



$(".fav_btn span").click(function(){
                       var btnStorage = $(this).attr("id");

                        if($(this).hasClass("clicked")) {
                            localStorage.setItem(btnStorage, 'true');
                        } else {
                            localStorage.removeItem(btnStorage, 'true');
                        }

                    });


                    $( ".fav_btn span" ).each(function() {
                      var mainlocalStorage = $( this ).attr( "id" );

                      if(localStorage.getItem(mainlocalStorage) == 'true') {
                        $(this).addClass("clicked");
                    } else {
                        $(this).removeClass("clicked");
                    }



                    });

