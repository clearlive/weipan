<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:79:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\user\ercode.html";i:1545719210;s:72:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\head.html";i:1552904453;s:72:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\foot.html";i:1552983549;}*/ ?>
﻿ <title>二维码推广 <?php echo !empty($userinfo['nickname'])?$userinfo['nickname']:$userinfo['username']; ?>  <?php echo $userinfo['utel']; ?> 余额：<?php echo $userinfo['usermoney']; ?> 元</title> ﻿<html style="font-size: 120px;">
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

<script>
var pay_type = '';
var wxpay_info = '';
var returnrul = "<?php echo url('user/index'); ?>";
</script>

<style>
.scroll-content{
    overflow: scroll
}
</style>

    <link href="/static/index/css/mui.min.css" rel="stylesheet" />
<div class="tab-nav tabs">
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
</div>

    <ion-nav-bar class="bar-stable headerbar nav-bar-container" nav-bar-transition="ios" nav-bar-direction="swap" nav-swipe="">

    	<div class="nav-bar-block" nav-bar="active">
    		<ion-header-bar class="bar-stable headerbar bar bar-header" align-title="center">
    			<div class="title title-center header-item" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">扫码注册</div>
    		</ion-header-bar>
    	</div>
    </ion-nav-bar>

    <ion-content class="personalbg scroll-content ionic-scroll scroll-content-false  has-header has-tabs" scroll="false">
        <div class="ercodes">
        <img src="https://www.cw.pub/source/pack/weixin/qrcode.php?link=<?php echo $SITE_URL; ?>/index/login/register.html" alt="" >
         <!--<img src="/static/index/img/anzhuo.png"> --!> 
<br><br>
<button class="newbutton sign_button" ><center> <?php if($userinfo['otype'] == 0): ?>&nbsp;推荐码: 62 &nbsp;<?php endif; if($userinfo['otype'] == 101): ?>&nbsp;推荐码: <?php echo $userinfo['uid']; ?>&nbsp;<?php endif; ?></center></button></a><p><br>

<!--<button class="newbutton sign_button" ><center> App下载 
<input value="http://fuhui.guojifuhui.com/index/login/register.html" id="url1" />
<input type="button" onClick="copyUrl()" value="复制地址" />

<script type="text/javascript">
    function copyUrl() {
        var Url = document.getElementById("url1");
        Url.select(); // 选择对象
        try{
            if(document.execCommand('Copy', false, null)){
                //success info
　　　　　　　　　　alert('复制成功！');
            } else{
                //fail info
            } 
        } catch(err){
            //fail info
        }
    }
</script>  --!>  

</center></button></a>
        </div><!--<span style="color:#FFFFFF"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 推广之前，先联系客服开通推荐码,</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 开通推荐码后，截图保存二维码到本机,</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 提成按照注册用户下单总金额的5%计算,</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 第二天0点计算,上一天注册用户下单总金额！ </p>--!>
    </ion-content>

    </ion-tabs>
</ion-nav-view>

</body>
</html>
<div id="zypay_post"></div>
<script src="__HOME__/js/lk/c.js"></script>
<script src="__HOME__/js/lk/user.js"></script>
<script src="__HOME__/js/lk/jquery.qrcode.js"></script>
<script src="__HOME__/js/lk/utf.js"></script>
<!doctype html>
<html>