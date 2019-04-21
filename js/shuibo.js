(function($){
  var middlecontent = document.getElementById("middlecontent");
  middlecontent.style.height = document.body.scrollHeight+"px";

  if(ismobile()){
    resize();
  }
window.onresize = function(){
  resize();
}

function resize(){
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
//判断用什么访问网页
function ismobile() {
  //平台、设备和操作系统
      var system = {
          win: false,
          mac: false,
          xll: false,
          ipad:false
      };
      //检测平台
      var p = navigator.platform;
      system.win = p.indexOf("Win") == 0;
      system.mac = p.indexOf("Mac") == 0;
      system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
      system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;
      //跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面
      if (system.win || system.mac || system.xll||system.ipad) {
          return false;
      } else {
          return true;//移动端
      }
 }
})(jQuery);
