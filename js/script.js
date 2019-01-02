$(document).ready(function() {
  $(".navbtn").click(function(){
    $("#sidenav").slideToggle("fast");
  });

  $(".works img").hover(function() {
    var index = $(this).index();
    var titles = [
      "Pine bow",
      "Forms sketch",
      "574",
      "Contour",
      "Sketch",
      "Contour",
      "Gesture",
      "Gesture",
      "Inside/Outside",
      "Inside/Outside",
      "Hands gesture",
      "Sketch",
      "Figures - Peter",
      "Figures - Peter",
      "Figures - Peter",
      "Figures - Peter",
      "Figures - Louise",
      "Figures - Louise",
      "Value",
      "Figures - Peter",
      "Forms",
      "Perspective",
      "Figures - Louise"
    ];
    var desc = [
      "Vine charcoal",
      "Graphite",
      "Graphite",
      "Graphite, charcoal",
      "Graphite, charcoal",
      "Graphite, charcoal",
      "Graphite",
      "Graphite, charcoal",
      "Ink",
      "Ink, graphite",
      "Graphite",
      "Graphite, charcoal",
      "Graphite",
      "Graphite",
      "Graphite",
      "Graphite",
      "Graphite",
      "Graphite",
      "Vine charcoal",
      "Conte",
      "Graphite",
      "Ink",
      "Ink, graphite, colored pencil"
    ];
    $(".overlay").css({
      'width' : $(this).css('width');
      'height' : $(this).css('height');
      'top' : $(this).position().top;
      'left' : $(this).position().left;
      'opacity' : '0.6';
    });
  });
});
