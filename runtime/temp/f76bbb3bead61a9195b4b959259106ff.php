<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:85:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\user\rechargelist.html";i:1544644039;s:72:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\head.html";i:1552904453;s:72:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\foot.html";i:1552983549;}*/ ?>
﻿<title>我的战队</title>
    <link href="/static/index/css/mui.min.css" rel="stylesheet" />
﻿<html style="font-size: 120px;">
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
<body id="incomeDiv" style="background-color: rgb(16,16,16)">
    <header class="mui-bar mui-bar-nav"> 
        <h1 id="title" class="mui-title font-white">我的战队</h1> <div style="float:left;"></div>
    </header> 

    <link href="/static/admin/css/bootstrap.min.css" rel="stylesheet">
    <script src="__HOME__/js/lk/c.js"></script>

<?php if($userinfo['otype'] == 0): ?>




<!DOCTYPE html> 
<html> 
<head> 
<meta charset="utf-8" /> 
<style> 
#main {position: absolute;width:400px;height:200px;left:50%;top:50%; 
margin-left:-200px;margin-top:-100px;border:1px } 
/*css注释：为了方便截图，对CSS代码进行换行*/ 
</style> 
<body> 
<div id="main"><center ><div class="bg"></div><div class="tip whitecolor"><div class="tip whitecolor"><img src="/static/index/img/paylist/norecord.png" /></p>当前记录为空</div></center><p><br><center><a href="/index/user/ercode.html">组建战队</a>>></center></div> 
</body> 
</html> 





	</head>
	<body>
		<div class="web">
			<div class="section">
				 <div class="second">
			    	       
			    </div>	
           <!--   <button class="btn btn_primary" id="onMenuShareTimeline">onMenuShareTimeline</button>-->
                                   
			</div>




<?php endif; if($userinfo['otype'] == 101): ?>


<!--main content start-->
      <section id="main-content">
          <section class="wrapper">
<iframe src="/houtai/user/userlist.html" id="mainFrame" name="mainFrame" scrolling="no" width="100%" height="146%" frameborder="0"></iframe>
                              </tbody>
                          </table>
                      </section>

<?php endif; ?>


﻿<div style="margin-top:2%;">
	<nav class="mui-bar mui-bar-tab" id="nav">
		<a id="defaultTab" class="mui-tab-item " data-title="商品首页" href="/index/">
			<span class="iconfont icon--6"></span>
			<br>
			<span class="mui-tab-label">商品首页</span>
		</a>


		<a class="mui-tab-item"  data-title="我的战队" href="/index/user/rechargelist.html">
			<span class="iconfont icon--11"></span>
			<br>
			<span class="mui-tab-label">我的战队</span>
		</a>


		<a class="mui-tab-item" data-title="交易中心" href="/index/order/hold.html">
			<span class="iconfont icon--7"></span>
			<br>
			<span class="mui-tab-label">交易中心</span>
		</a>

		<a id="MemberInfo" class="mui-tab-item " data-title="个人中心" href="/index/user/index.html">
			<span class="iconfont icon--8"></span>
			<br>
			<span class="mui-tab-label">个人中心</span>
		</a>
	</nav>
	<script type="text/javascript">
		$(function () {
			mui('#nav').on('tap', 'a', function (e) {
				var url = $(this).attr("data-href");
				goView(url);
			});
		});
	</script>
</div>
<script type="text/javascript">
	var activeTab = "";
	$(function () {
		if (isWeiXin()) {
			$(".mui-bar.mui-bar-nav").remove();
			$(".mui-content").addClass("mui-content2");
			$("#Refreshtaps").show();
		}
		activeTab = $(".mui-myactive").val();
		$(".mui-tab-item").each(function(){
			if($(this).attr("href")!=activeTab){
				$(this).removeClass("tab-item-active");
			}else{
				$(this).addClass("tab-item-active");
			}
		});
	})
	function isWeiXin() {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	}
	mui('.mui-bar-tab').on('tap', 'a', function (e) {
		var href = this.getAttribute('href');
		if (href != activeTab) {
			mui.openWindow({
				url: href,
				id: href,
				createNew: false,
				show: {
					aniShow: 'slide-in-right'
					// aniShow: 'none'
				},
				waiting: {
					autoShow: true, //自动显示等待框，默认为true
					title: '正在加载'//等待对话框上显示的提示内容} );
				}
			});
		}
	});
</script>
<script src="__HOME__/js/lk/c.js"></script>