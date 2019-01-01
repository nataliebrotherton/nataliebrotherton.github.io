var folder = "/static/assets/portfolio";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                $(".works").append( "<img src='"+ folder + val +"'>" );
            }
        });
    }
});
