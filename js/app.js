$(document).foundation()
$(document).ready(function () {
    setInterval(function(){console.log("reload is ready!");
  
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  
  $(window).resize(function(){
  });
  
  $('.border').css({
  'height': winHeight*0.9,
   'width': winWidth*0.9,
  'margin-top': winHeight*0.05,
  'margin-left': winHeight*0.05,
  'margin-right': winHeight*0.05,  
  'margin-bottom': winHeight*0.05,
  
  });},10);

  });//READY