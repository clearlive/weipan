(function () {
  var userAgent = navigator.userAgent;
  var index = userAgent.indexOf("Android");
  if(index >= 0){
    var androidVersion = parseFloat(userAgent.slice(index+8));
    if(androidVersion<5){
      var html = document.documentElement;
      var hW = html.getBoundingClientRect().width;
      html.style.fontSize = hW / 7.5 + "px";
    }
  }
})();

//加入百度统计
function Common() {

  _init = function() {
    //$(document.body).append("<script type=\"text/javascript\">var cnzz_protocol = ((\"https:\" == document.location.protocol) ? \" https://\" : \" http://\");document.write(unescape(\"%3Cspan id='cnzz_stat_icon_1259647640'%3E%3C/span%3E%3Cscript src='\" + cnzz_protocol + \"s4.cnzz.com/z_stat.php%3Fid%3D1259647640' type='text/javascript'%3E%3C/script%3E\"));</script>)");

//		$(document.body).append("<script src=\"https://s95.cnzz.com/z_stat.php?id=1259787883&web_id=1259787883\" language=\"JavaScript\"></script>");
//		$(document.body).append("<script src=\"https://hm.baidu.com/hm.js?1e43e612748ab51862300a1d1408228e\" language=\"JavaScript\"></script>");
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?1e43e612748ab51862300a1d1408228e";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();



//	//如果是移动设备
//	if(device.mobile())
//  {
//   	alert("移动设备"+navigator.userAgent);
//  }
//  else
//  {
//  	alert("不是移动设备"+navigator.userAgent);
//  }
//

  },




    (function() {
      _init();
    })();

}

var common;


var device = localStorage.getItem("device");


$(function() {
  common = new Common();
//	$("body").append("<script type='text/javascript'>var _py = _py || [];_py.push(['a', 'g8s..f0By7TSPtof_-QOIdzOkGX']);_py.push(['domain','stats.ipinyou.com']);_py.push(['e','']);-function(d) {var s = d.createElement('script'),e = d.body.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e),f = 'https:' == location.protocol;s.src = (f ? 'https' : 'http') + '://'+(f?'fm.ipinyou.com':'fm.p0y.cn')+'/j/adv.js';}(document);</script><noscript><img src='//stats.ipinyou.com/adv.gif?a=g8s..f0By7TSPtof_-QOIdzOkGX&e=' style='display:none';/></noscript>");
//	$(".weui_media_title").click(function(){
//		$(this).toggleClass("active").siblings(".weui_media_desc").slideToggle();
//	});
//
//	var jojocode = request.QueryString("jojocode");
//  if (jojocode && jojocode != "null") {
//      sessionStorage.setItem("jojocode", jojocode);
//  }
})
var request ={
  QueryString : function(val){
    var uri = window.location.search;
    var re = new RegExp("" +val+ "=([^&?]*)", "ig");
    return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null);
  }
};

//判断是否登录，如果未登录跳转登录页，已登录则可以通过getUIDByJWT().unique_name获取UID
function getUIDByJWT() {
  // var value = localStorage.getItem("token");
  // if(value == null) {
  // 	layer.open({
  // 		content: "请登录",
  // 		skin: 'msg',
  // 		time: 2,
  // 		end: function() {
  // 			window.location.href = 'login.html';
  // 		}
  // 	});
  // 	/*setTimeout(function() {
  // 		location.href = 'login.html?returnurl=' + window.location.href;
  // 	}, 1000);*/
  // 	return false;
  // } else {
  // 	var aftervalue = value.split(".");
  // 	return $.parseJSON($.base64.atob(aftervalue[1], true));
  // }

  var value = "";
  var str = window.navigator.userAgent;

  //如果是移动设备
  if (str.indexOf("jojojr") != -1) {
    /*是安卓*/
    var  search=window.location.search;
    // alert("search"+search)
    if(search.indexOf("?")!=-1){
      var msg=search.slice(1);
      if(msg.indexOf("&")!=-1){
        var msgArr= msg.split("&");
        for (var i=0;i<msgArr.length;i++){
          var item1=msgArr[i].split("=");
          if(item1[0]=="token"){
            value=item1[1];
          }
        }
      }else {
        var item2=msg.split("=");
        if(item2[0]=="token"){
          value=item2[1];
        }
      }
    }
    if (value == null
      || value == ""
      || value == undefined) {
      layer.open({
        content: "请登录",
        skin: 'msg',
        time: 2,
        end: function () {
          //RainbowBridge.callMethod('JsInvokeJavaScope','jump',{'url':'jojo://user/login'},function(){});
          window.location.href = 'login.html';
        }
      });
      return false;
    }
    else {
      var aftervalue = value.split(".");
      return $.parseJSON($.base64.atob(aftervalue[1], true));
    }
  }
  else {
    value = localStorage.getItem("token");
    if (value == null) {
		/*
      layer.open({
        content: "请登录",
        skin: 'msg',
        time: 2,
        end: function () {
          window.location.href = 'login.html';
        }
      });
      setTimeout(function () {
//              location.href = 'login.html?returnurl=' + window.location.href;
        //location.href = 'login22.html';
      }, 1000);
	  */
      return false;
    }
    else {
      var aftervalue = value.split(".");
      return $.parseJSON($.base64.atob(aftervalue[1], true));
    }
  }

}

//理财获取uid
function getUIDByJWT1() {
  var value = localStorage.getItem("token");
  if (value == null) {
    /*setTimeout(function() {
     location.href = 'login.html?returnurl=' + window.location.href;
     }, 1000);*/
    return false;
  } else {
    var aftervalue = value.split(".");
    return $.parseJSON($.base64.atob(aftervalue[1], true));
  }
}

function getUserName() {
  return localStorage.getItem("username");
}

function Logout() {
  //如果是移动设备
  /*if(device==="app")
   {
   localStorage.clear();
   }
   else
   {
   sessionStorage.clear();
   }*/
  localStorage.clear();
  layer.open({
    content: "已退出",
    skin: 'msg',
    time: 2, //2秒后自动关闭
    end: function () {
      location.href = '../page/index.html';
    }
  });
}

function getTOKEN() {
  return localStorage.getItem("token");
  //如果是移动设备
  /*if(device==="app")
   {
   return localStorage.getItem("token");
   }
   else
   {
   return sessionStorage.getItem("token");
   }*/
}

function getAPIURL() {
  return "http://api.gcjiujiu.com/";
}

function baseUrl() {
  return "http://m.gcjiujiu.com/"
}
var getwapURL = "http://m.gcjiujiu.com/page/";

function getP2PAPI() {
  return "http://www.gcjiujiu.com/";
}

//        取得参数
function parseUrl(){
  var url=location.href;
  var i=url.indexOf('?');
  if(i==-1)return;
  var querystr=url.substr(i+1);
  var arr1=querystr.split('&');
  var arr2 = new Object();
  for  (i in arr1){
    var ta=arr1[i].split('=');
    arr2[ta[0]]=ta[1];
  }
  return arr2;
}





//20秒接金币游戏配置
function gameAPIURL() {
  return "http://api.gcjiujiu.com/gameapi/wechatgame/";
}

//function getOpenIdURL() {
//	return "http://api.gcjiujiu.com/";
//}
var gameURL = "http://www.gcjiujiu.com/page/event/";

function getTICKET() {
  return localStorage.getItem("ticket");
}
function getSHARD() {
  return localStorage.getItem("sharid");
}
function getOPENID() {
  return localStorage.getItem("openid");
}
function getNAME() {
  return localStorage.getItem("nickname");
}
//新版本理财接口ip
//function getFinance () {
//	return "http://api.gcjiujiu.com/";
//}

//汇付注册接口配置
function huifuAPIURL() {
  return "http://api.gcjiujiu.com/chinapnrapi/";
}


