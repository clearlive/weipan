<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:67:"C:\code\weipan\weipan\qiantai/application/zht\view\login\login.html";i:1553049047;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\foot.html";i:1544646434;}*/ ?>
﻿<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Mosaddek">
    <meta name="keyword" content="FlatLab, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
    <link rel="shortcut icon" href="/12.jpg">

    <title>登陆管理后台</title>
    <!-- Bootstrap core CSS -->
    <script src="/static/admin/js/jquery.js"></script>
    <script src="/static/admin/js/jquery-1.8.3.min.js"></script>
    <script src="/static/layer/layer.js"></script>
    <script src="__ADMIN__/js/lk/c.js"></script>
    <!-- 时间选择器 -->
    <link rel="stylesheet" type="text/css" href="/static/admin/css/jquery.datetimepicker.css"/>
    
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 tooltipss and media queries -->
    <!--[if lt IE 9]>
      <script src="/static/admin/js/html5shiv.js"></script>
      <script src="/static/admin/js/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
<link rel="stylesheet" type="text/css" href="/static/admin/css/G3-all.min.css"/>
<!-- CSS: Page -->
<link rel="stylesheet" href="/static/admin/css/login.css">
<link href="/static/admin/css/jquery-ui.css" rel="stylesheet">
<link href="/static/admin/css/keyboard.css" rel="stylesheet" type="text/css" />
</head>
<body>
<style type="text/css">
	.has-feedback .form-control {
	    padding-right: 32.5px;
	}
	.form-control-feedback {
		top: 15px;
		z-index: 1000;
		cursor: pointer;
	}
	.form-control-feedback :hover{
		color: #000;
	}
	html {
	height: 100%;
}

#yzm >div{float:left;}
body{
    height:100%;
	background: url(/static/index/img/bg2.jpg) no-repeat; 
	background-size:cover;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg2.jpg',sizingMethod='scale'); 
	font-size:14px;
	font-family:"微软雅黑"; 
	color:#000000;
	padding:0px;
	margin:0px;
	 -ms-behavior: url(backgroundsize.min.htc);
    behavior: url(backgroundsize.min.htc);
    overflow: hidden;
	}
</style>
<style>
.white-bg{
  background: #000;
  border-bottom:#000;
}
a.logo{
  color:#fff
}
.admin_logo{
      text-align: center;
    padding-top: 120px;
    margin-bottom: -90px;
}
.admin_logo img{
  height: 150px
}

</style>

<body onkeydown="keypress(event);" >
	<div class="container" id="loginContent">
				<div id="loginsPanel">
				<div >
					<ui>
						<li class="title">
						<img src="/static/index/img/logonew.png" width="496" height="66"  alt=""/>
						<div style="margin-top:10px;position:absolute;left:10px;top:-300px;font-size:25px;width:600px;display:none">

						</div>
						</li>
						<li>
							<div class="panel-body">
					<form class="form-signin" action="" method="post" id="formid">
									<h4 id="msg">
										<label class="label label-warning"></label>
										</h4>
									<div class="input-group" style="display: inline-block;">
                                 <input type="text" class="srk" name="username" placeholder="手机号/姓名/编号" value="<?php echo $rememberme; ?>">
									</div>
				<div class="input-group has-feedback" style="display: inline-block;">


            <input type="password" class="srk" name="password" placeholder="请输入密码">

									</div>
				<div style="display: inline;">

				<input type="hidden" name="rdmCode" id="rdmCode" />
									</div>
									
				<div style="display: inline-block;padding-left: 45px;POSITION: absolute\9;">
				<button onclick="return check_admin_login(this.form)" class="btndl" type="submit">登&nbsp;&nbsp;录</button>
									</div>
				<div style=" margin-bottom: 10px; margin: 13px 3px;">
														<!--<input
											type="checkbox" value="remember-me-nm" name="savenm" id="savenm"
											onclick="save();remVerify1();" class="check" >
				<span type="checkbox" value="1" name="rememberme"class="song">记住我来过</span>--!>
									</div>
										
									</div>

								</form>

    <!-- js placed at the end of the document so the pages load faster -->
    
    <script src="__ADMIN__/js/bootstrap.min.js"></script>
    <script src="__ADMIN__/js/jquery.scrollTo.min.js"></script>
    <script src="__ADMIN__/js/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="__ADMIN__/js/jquery.sparkline.js" type="text/javascript"></script>
    <script src="__ADMIN__/assets/jquery-easy-pie-chart/jquery.easy-pie-chart.js"></script>
    <script src="__ADMIN__/js/owl.carousel.js" ></script>
    <script src="__ADMIN__/js/lk/c.js"></script>
    <script src="__ADMIN__/js/jquery.customSelect.min.js" ></script>

    <!--common script for all pages-->
    <script src="__ADMIN__/js/common-scripts.js"></script>
  
    <!--script for this page-->
    <script src="__ADMIN__/js/sparkline-chart.js"></script>
    <script src="__ADMIN__/js/easy-pie-chart.js"></script>

    <!-- active -->
    <script src="/static/public/js/function.js"></script>
    
    <!-- date -->
    <script type="text/javascript" src="__ADMIN__/js/date/jquery.datetimepicker.js" charset="UTF-8"></script>

  </body>
</html>

<script>
/*
登录验证
 */
function check_admin_login (form)
   {
      $username = form.username.value;
      $password = form.password.value;
      if (!$username) {
        layer.msg('请输入用户名'); 
        return false;
      }

      if(!$password){
        layer.msg('请输入密码'); 
        return false;
      }

      var formurl = "<?php echo Url('zht/login/login'); ?>"
      var data = $('#formid').serialize();
      $.post(formurl,data,function(data){
        if (data.type == 1) {

          layer.msg(data.data, {icon: 1,time: 1000},function(){
            window.location.href="<?php echo Url('zht/index/index'); ?>";
          }); 

        }else if(data.type == -1){
          layer.msg(data.data, {icon: 2}); 
        }

      });

      return false;
   }
</script>
<script type="text/javascript" src="http://c.ibangkf.com/i/c-kefuq59.js"></script>






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


