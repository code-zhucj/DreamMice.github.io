(function($){

var middlecontent = document.getElementById("middlecontent");
middlecontent.style.height = document.body.scrollHeight+"px";

window.onresize = function(){
  var bodyWidth = middlecontent.offsetWidth;
  if(bodyWidth<=805){
  //document.getElementById("widget-box-left").style.position ='static';
    $('#widget-box-left').hide();
    $('#widget-box-right').hide();
    $("#main").css("width","90%");
  }else{
    $('#widget-box-left').show();
    $('#widget-box-right').show();
    $("#main").css("width","100%");
  }
}
})(jQuery);
