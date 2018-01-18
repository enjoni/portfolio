$(document).foundation() 
$(document ).ready(function() {
  console.log( "ready!" );

  // NAVIGATION
    $("#navindex").click(function() {
      $(".content-index").show();
      $(".content-contact").hide();
      $(".content-about").hide();
      $(".content-work").hide();
    });

      $("#navcontact").click(function() {
        $(".content-contact").show();
        $(".content-index").hide();
        $(".content-about").hide();
        $(".content-work").hide();
    });
  
    $("#navabout").click(function() {
      $(".content-about").show();
        $(".content-index").hide();
        $(".content-contact").hide();
        $(".content-work").hide();   
  });

  $("#navwork").click(function() {
    $(".content-work").show();
        $(".content-index").hide();
        $(".content-about").hide();
        $(".content-contact").hide();   
});

// ARBEITEN
$(".w1").click(function() {
  $(".work-1").show().css("display", "flex");
  $(".content-work").hide();
});
});
