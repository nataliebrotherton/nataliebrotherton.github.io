var dir = "/static/assets/portfolio";
var fileextension = ".jpg";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //List all .jpg file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("https://", "");
            $(".works").append("<img src='" + dir + filename + "'>");
        });
    }
});
