$(document).ready(function() {
  $(".navbtn").click(function(){
    $("#sidenav").slideToggle("fast");
  });

  $("img.stamps, img.jamquiz, img.stock").mouseenter(function() {
    $(".project-container p").css({
      'opacity' : '1'
    });
  });
  $("img.stamps, img.jamquiz, img.stock").mouseleave(function() {
    $(".project-container p").css({
      'opacity' : '0'
    });
  });

  // titles and descriptions to be on image overlays
  var contentArray = new Array();
  contentArray[0] = new Array("Pine bow", "Vine charcoal");
  contentArray[1] = new Array("Forms sketch", "Graphite");
  contentArray[2] = new Array("574", "Contour, graphite");
  contentArray[3] = new Array("Contour", "Graphite, charcoal");
  contentArray[4] = new Array("Sketch", "Graphite, charcoal");
  contentArray[5] = new Array("Contour", "Graphite, charcoal");
  contentArray[6] = new Array("Gesture", "Graphite");
  contentArray[7] = new Array("Gesture", "Graphite, charcoal");
  contentArray[8] = new Array("Inside/Outside", "Ink");
  contentArray[9] = new Array("Inside/Outside", "Ink, graphite");
  contentArray[10] = new Array("Hands gesture", "Graphite");
  contentArray[11] = new Array("Sketch", "Graphite, charcoal");
  contentArray[12] = new Array("Figures - Peter", "Graphite");
  contentArray[13] = new Array("Figures - Peter", "Graphite");
  contentArray[14] = new Array("Figures - Peter", "Graphite");
  contentArray[15] = new Array("Figures - Peter", "Graphite");
  contentArray[16] = new Array("Figures - Louise", "Graphite");
  contentArray[17] = new Array("Figures - Louise", "Graphite");
  contentArray[18] = new Array("Value study", "Vine charcoal");
  contentArray[19] = new Array("Figures - Peter", "Conte");
  contentArray[20] = new Array("Forms", "Graphite");
  contentArray[21] = new Array("Perspective", "Ink");
  contentArray[22] = new Array("Figures - Louise", "Ink, graphite, colored pencil");

  // append image filename to its array
  // create divs to hold images and place images inside them
  var dir = "/static/assets/portfolio/";
  var i;
  for (i = contentArray.length-1; i >= 0; i--) {
    filename = dir + i + ".jpg";
    contentArray[i][2] = filename;
    $("div.works").prepend('<div id="container" class="container'+ i +'" />');
    var overlay = $('<div />').attr({
        'class' : 'overlay'
      }).prependTo('.container'+i);
    $('.overlay').css({
      'background-color' : 'black',
      'padding-top' : '70px'
    });
    var img = $('<img />').attr({
            'id': i,
            'class': 'piece',
            'src': filename
        }).prependTo('.container'+i);
  }

  $(".piece").hover(function() {
    var i = $(this).attr('id');
    var selector = ".container" + i + " .overlay"
    $(selector).css({
      'width' : $(this).css('width'),
      'height' : $(this).css('height')
    });
  });
});
