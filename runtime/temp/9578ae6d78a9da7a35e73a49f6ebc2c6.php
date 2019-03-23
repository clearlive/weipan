<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:79:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\login\login.html";i:1553049350;s:72:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\head.html";i:1552904453;}*/ ?>
﻿
<title>登陆中心</title>
<style>
    body{
        overflow: hidden;
    }
</style>
<link rel="stylesheet" href="/static/index/css/login.css" /> ﻿<html style="font-size: 120px;">
<head>
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
<!-- 是否启用全屏模式 -->
<meta name="apple-mobile-web-app-capable" content="yes">
<!-- 全屏时状态颜色设置 -->
<meta name="apple-mobile-web-status-bar-style" content="white">
<!-- 禁用电话号码自动识别 -->
<meta name="format-detection" content="telephone=no">
<!--禁止读取本地缓存模板-->
<meta http-equiv="Pragma" contect="no-cache">
<!-- iPhone 启动图标 -->
<link rel="apple-touch-icon" href="img/12.jpg">
<!-- Android 启动图标 -->
<link rel="shortcut icon" href="img/12.jpg">
<!-- 添加 favicon icon -->
<link rel="shortcut icon" type="image/ico" href="img/12.jpg">
 <title><?php echo !empty($conf['web_name'])?$conf['web_name']:'微交易'; ?></title> 
<script type="text/javascript">
window.onload=function(){
//设置适配rem
var change_rem = ((window.screen.width > 450) ? 450 : window.screen.width)/375*100;
document.getElementsByTagName("html")[0].style.fontSize=change_rem+"px";
window.onresize = function(){
change_rem = ((window.screen.width > 450) ? 450 : window.screen.width)/375*100;
document.getElementsByTagName("html")[0].style.fontSize=change_rem+"px";
}
}
</script>

<link href="__HOME__/css/ionic.css" rel="stylesheet">
<link href="__HOME__/css/style.css" rel="stylesheet">
<!-- <script src="__HOME__/js/jquery-3.2.1.min.js"></script> -->
<script src="__HOME__/js/jquery-1.9.1.min.js"></script>
<script src="__HOME__/js/lk/c.js"></script>
<style type="text/css">@charset "UTF-8";[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>
<style>
.ionic_toast {
  z-index: 9999;
}

.toast_section {
  color: #FFF;
  cursor: default;
  font-size: 1em;
  display: none;
  border-radius: 5px;
  opacity: 1;
  padding: 10px 30px 10px 10px;
  margin: 10px;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.75);
}

.ionic_toast_top {
  top: 10px;
}

.ionic_toast_middle {
  top: 40%;
}

.ionic_toast_bottom {
  bottom: 10px;
}

.ionic_toast_close {
  border-radius: 2px;
  color: #CCCCCC;
  cursor: pointer;
  display: none;
  position: absolute;
  right: 4px;
  top: 4px;
  width: 20px;
  height: 20px;
}

.toast_close_icon {
  position: relative;
  top: 1px;
}

.ionic_toast_sticky .ionic_toast_close {
  display: block;
}

.ionic_toast_close:active {

}</style>


<script src="__HOME__/js/lk/order.js"></script>

<!-- <script type="text/javascript" src="__HOME__/js/lk/echarts-all-3.js"></script>
<script type="text/javascript" src="__HOME__/js/lk/ecStat.min.js"></script>
<script type="text/javascript" src="__HOME__/js/lk/dataTool.min.js"></script>
<script type="text/javascript" src="__HOME__/js/lk/china.js"></script>
<script type="text/javascript" src="__HOME__/js/lk/world.js"></script>
<script type="text/javascript" src="__HOME__/js/lk/api"></script>
<script type="text/javascript" src="__HOME__/js/lk/getscript"></script>
<script type="text/javascript" src="__HOME__/js/lk/bmap.min.js"></script> -->
<!-- 弹框插件 -->
<script src="/static/layer/layer.js"></script>
<!-- 公共函数 -->
<script src="/static/public/js/function.js"></script>
<script src="/static/public/js/base64.js"></script>
<script type="text/javascript">
  var Base64 = new Base64();

  
</script>
</head>
<div class="signin">
    <div class="signin-header">
        <div class="system-logo" ng-show="show_system_logo">
            
             <img  alt="" src="/12.jpg">
        </div>
        <div class="system-name ng-binding ng-hide" ng-show="show_system_name" style="">
            
        </div>
    </div>
 <form method="post" id="formid">
    <div class="signin-content">
   
        <div class="list">
            <label class="item item-input">
                <i class="input-icon ion-android-person"></i>
                <input type="text" placeholder="帐号/姓名" name="username" required="" class="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" style="">
            </label>
            <label class="item item-input">
                <i class="input-icon ion-locked"></i>
                <input type="password" placeholder="请输入密码" name="upwd" required="" ng-keydown="go_signin()" class="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" style="">
            </label>
        </div>
        <p>
        	<span style="display: none;">忘记密码？</span>
    		<span class="ion-android-warning ng-hide" ng-show="show_sign_in_mistake" style="">&nbsp;账号或者密码错误，请重新输入!</span>
    	</p>
        <div class="signin-action">
            <button class="newbutton sign_button" onclick="return checkform(this.form);">
                登&nbsp;&nbsp;录
            </button>
        </div><br/>
	<div class="login-txt"><a href="<?php echo url('login/register'); ?>">立即注册</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="<?php echo url('login/respass'); ?>">忘记密码？</a></div>    </div>
    <div class="signin-footer" ng-show="if_signup">
   </form><br><!--<a>当前在线: </a><font color="#FF0000"><strong><script type="text/javascript">var zaixian = 48610;
document.write(""+Math.round(zaixian+Math.random()*227)+ "</strong></font> ");</script></font></a><a>人</a>-->
    </div>
<div class="spinner-view hide">
    <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    </div>
    <div class="message ng-binding" ng-class="{ 'fadein' : message }"></div>
</div>
</ion-view></ion-nav-view>


<div class="backdrop"></div><div class="ionic_toast"><div class="toast_section" ng-class="ionicToast.toastClass" ng-style="ionicToast.toastStyle" ng-click="hideToast()" style="display: none; opacity: 0;"><span class="ionic_toast_close"><i class="ion-android-close toast_close_icon"></i></span><span ng-bind-html="ionicToast.toastMessage" class="ng-binding"></span></div></div></body></html>
<script>
function checkform(form){
	var username = form.username.value;
	var upwd = form.upwd.value;
	if(!username){
		layer.msg('请输入用户名');
		return false; 
	}

	if (!upwd) {
		layer.msg('请输入密码'); 
		return false;
	}

	var data = $('#formid').serialize();
    var formurl = "<?php echo Url('login/login'); ?>";
    var locurl = "<?php echo Url('/index/index/index/token/'.$token); ?>";

    WPpost(formurl,data,locurl);
    return false;
}
</script>
<script src="__HOME__/js/lk/c.js"></script>
	


<script language=JavaScript>
document.oncontextmenu=new Function("event.returnValue=false;");
document.onselectstart=new Function("event.returnValue=false;");
</script>

<body>
	<style type="text/css">
	*{margin:0; padding:0;}
	img{max-width: 100%; height: auto;}
	.test{height: 600px; max-width: 600px; font-size: 40px;}
	</style>
	<script type="text/javascript">
		function is_weixin() {
		    var ua = navigator.userAgent.toLowerCase();
		    if (ua.match(/MicroMessenger/i) == "micromessenger") {
		        return true;
		    } else {
		       // return false;
				
		    }
		}
		var isWeixin = is_weixin();
		var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
		function loadHtml(){
			var div = document.createElement('div');
			div.id = 'weixin-tip';
			div.innerHTML = '<p><img src="/img/live_weixin.png" alt="微信打开"/></p>';
			document.body.appendChild(div);
		}
		
		function loadStyleText(cssText) {
	        var style = document.createElement('style');
	        style.rel = 'stylesheet';
	        style.type = 'text/css';
	        try {
	            style.appendChild(document.createTextNode(cssText));
	        } catch (e) {
	            style.styleSheet.cssText = cssText; //ie9以下
	        }
            var head=document.getElementsByTagName("head")[0]; //head标签之间加上style样式
            head.appendChild(style); 
	    }
	    var cssText = "#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,110.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center; margin-top: 1%; padding:0 5%;}";
		if(isWeixin){
			loadHtml();
			loadStyleText(cssText);
		}
	</script>
	