// smoothstate for page transitions
;(function ($) {
  'use strict';
  var content  = $('#content, #header').smoothState({
        // onStart runs as soon as link has been activated
        onStart : {

          // Set the duration of our animation
          duration: 250,

          // Alterations to the page
          render: function () {

            // Quickly toggles a class and restarts css animations
            content.toggleAnimationClass('is-exiting');
          }
        }
      }).data('smoothState'); // makes public methods available
})(jQuery);

$(document).ready(function() {

  // random color every visit function!!!

  // yellow, green, pink, blue, orange
  var primary_colors = ["#ffd700", "#5bc500", "#f65275", "#00a9e0", "#ff9e1b"];
  var secondary_colors = ["#ff8000", "#007741", "#6c1ecd", "#0033e0", "#ff2d1b"];
  var tertiary_colors = ["#fff", "#ebffda", "#f3e4f9", "#bcebff", "#fff4b8"];
  var num = Math.floor(Math.random() * (primary_colors.length - 0 + 1) ) + 0;
  var primary_color = primary_colors[num];
  var secondary_color = secondary_colors[num];
  var tertiary_color = tertiary_colors[num];
  var border_style = "10px solid" + secondary_color;

  // check if phone or small width
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
   (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)) || $(window).width() <= 599) {
	 $(".header").addClass("scene_element--fadein");
	 $(".sidenav").addClass("background-color-secondary");
	 $(".navbtn").removeClass("hover-secondary");
     $(".navbtn").click(function(){
	   $(".header").toggle();

	   // change nav link hover color to primary 
	   $(".sidenav a")
	   .mouseenter(function() {
			$(this).css({ 'color' : primary_color });
		})
		.mouseleave(function() {
			$(this).css({ 'color' : 'white' });
		});

		$(".navbtn").css({ 'color' : 'white' });

		// if menu is shown show close button and primary hover color 
	   if ($(".sidenav").css('display') == 'none') {
		   $(".navbtn").text("×");
		} else if ($(".sidenav").css('display') == 'block') {
			$(".navbtn").text("☰");
		}
	});
	
  }

  // sidebar toggle function
  $(".navbtn").click(function(){
    $("#sidenav").slideToggle("fast");
  });

  // project description hover functions
  $("img.stamps, img.jamquiz, img.stock").mouseenter(function() {
    var selector = $(this).attr("id") + " p";
    $(selector).css({
      'opacity' : '1'
    });
  });
  $("img.stamps, img.jamquiz, img.stock").mouseleave(function() {
    var selector = $(this).attr("id") + " p";
    $(selector).css({
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
    // prepend piece containers to works container
    $("div.works").prepend('<div id="container" class="container'+ i +'" />');
    var overlay = $('<div />').attr({
        'class' : 'overlay'
      }).prependTo('.container'+i);
    $('.overlay').css({
      'background-color' : primary_color
    });
    // prepend image to piece container
    var img = $('<img />').attr({
            'id': i,
            'class': 'piece border-secondary',
            'src': filename
        }).prependTo('.container'+i);
    var text_container = $('<div />').attr({
      'id': i,
      'class' : 'text border-secondary'
    }).prependTo('.container'+i);
    var desc = $('<p />').attr({
      'id' : i,
      'class' : 'imgdesc color-tertiary'
    }).prependTo(text_container);
    desc.text(contentArray[i][1]);
    var title = $('<p />').attr({
      'id' : i,
      'class' : 'imgtitle color-tertiary'
    }).prependTo(text_container);
    title.text(contentArray[i][0]);
  }

  $(".piece").hover(function() {
    var i = $(".piece").attr('id');
    var selector = ".container" + i + " .overlay"
    $(selector).css({
      // 'width' : $(this).css('width'),
      // 'height' : $(this).css('height')
    });
  });

  // color changing functions
  $("body, .primary").css({
    'background-color' : primary_color
  });
  $(".color-secondary").css({
    'color' : secondary_color
  });
  $(".background-color-secondary").css({
    'background-color' : secondary_color
  })
  $(".border-secondary").css({
    'border' : border_style
	});
	$(".hover-secondary").mouseenter(function() {
    $(this).css({
      'color' : secondary_color
    });
  });
  $(".hover-primary").mouseenter(function() {
    $(this).css({
      'color' : primary_color
    });
  });
  $(".hover-secondary, .hover-primary").mouseleave(function() {
    $(this).css({
      'color' : 'white'
    });
  });
  $(".color-tertiary p, .color-tertiary").css({
    'color' : tertiary_color
  });

});