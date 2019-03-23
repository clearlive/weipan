<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:68:"C:\code\weipan\weipan\qiantai/application/index\view\user\index.html";i:1553328266;s:62:"C:\code\weipan\weipan\qiantai/application/index\view\head.html";i:1552904453;s:62:"C:\code\weipan\weipan\qiantai/application/index\view\foot.html";i:1552983549;}*/ ?>
﻿
<title>个人中心 <?php echo !empty($userinfo['nickname'])?$userinfo['nickname']:$userinfo['username']; ?>  <?php echo $userinfo['utel']; ?> 余额：<?php echo $userinfo['usermoney']; ?> 元</title>﻿<html style="font-size: 120px;">
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


<link rel="stylesheet" href="/static/index/css/style.css"><script>
var pay_type = '';
var wxpay_info = '';
var returnrul = "<?php echo url('user/index'); ?>";
</script>

<style>
.scroll-content{
    overflow: scroll
}
</style>

<body ng-app="starter" ng-controller="AppCtrl" class="grade-a platform-browser platform-ios platform-ios9 platform-ios9_1 platform-ready">

<ion-nav-bar class="bar-stable headerbar nav-bar-container" nav-bar-transition="ios" nav-bar-direction="swap" nav-swipe="">

	<div class="nav-bar-block" nav-bar="active">
		<ion-header-bar class="bar-stable headerbar bar bar-header" align-title="center">
			<div class="title title-center header-item" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">个人中心</div>
		</ion-header-bar>
	</div>
</ion-nav-bar>   	

    <script src="/static/index/js/jquery-1.9.1.min.js"></script>
    <script src="/static/index/js/mui.min.js"></script>
    <link href="/static/index/css/ionic.css" rel="stylesheet">
    <link href="/static/index/css/style.css" rel="stylesheet">
    <script src="/static/index/js/order.js"></script>
    <script src="__HOME__/js/lk/c.js"></script>
    <!-- 弹框插件 -->
    <script src="/static/index/js/layer.js"></script>
    <link rel="stylesheet" href="/static/index/css/layer.css" id="layuicss-skinlayercss">
    <!-- 公共函数 -->
    <script src="/static/index/js/function.js"></script>
	<script>        
        (function (doc, win) {    
            var docEl = doc.documentElement,    
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',    
            recalc = function () {    
            var clientWidth = docEl.clientWidth;
			if(clientWidth>450){
				return false;
			}
            if (!clientWidth) return;    
            docEl.style.fontSize = 80 * (clientWidth / 320) + 'px';    
        };    
        if (!doc.addEventListener) return;    
        win.addEventListener(resizeEvt, recalc, false);    
        doc.addEventListener('DOMContentLoaded', recalc, false);    
        })(document, window);    
	</script>
	
<link href="/static/index/css/main.css" rel="stylesheet">
<link href="/static/index/css/iconfont.css" rel="stylesheet"><style type="text/css">
	body{background:black;}
</style>


<body>
    <header class="mui-bar mui-bar-nav">
        <center><h1 id="title" class="mui-title font-white">个人中心</h1></center>
    </header>
    <div class="mui-content-user" style="padding-bottom:20px;background-color:black;"><br>
		<div class="mui-row user_header">
			<div class="leftdiv">
				<div class="touxiang">
				<img src="/12.jpg">
				</div>
			</div>
			<div class="middlediv">
				<div class="middlediv_line">
					姓名：<?php echo !empty($userinfo['nickname'])?$userinfo['nickname']:$userinfo['username']; if($userinfo['otype'] == 101): endif; ?></div>
				<div class="middlediv_line">
					余额：<font color="#FF0000"><?php echo $userinfo['usermoney']; ?></font> 元</div>
			</div>
			<div class="rightdiv">
				<div class="webtitle huang"><?php echo !empty($conf['web_name'])?$conf['web_name']:'微交易'; ?></div>
			</div>
			<div class="usercenter_nav_tab">

				<a href="javascript:void(0);" onclick="show_user_modal('modal-deposit')" class="chongzhi2" style="">
					<span class="iconfont icon--5 zijin"></span>
					<span class="txt-cl">账户充值</span>
				</a>
				<a href="javascript:void(0);" onclick="show_user_modal('modal-withdraw')" class="chongzhi2" style="">
					<span class="iconfont icon--4 zijin" style="color:rgb(92,194,18);"></span>
					<span class="txt-cl">账户提现</span>
				</a>
				<a href="<?php echo url('ercode'); ?>" class="lianxikefu" style="">
					<span class="iconfont icon--11 zijin" style="color:#FFC125"></span>
					<span class="txt-cl"><span style="color:#FF3039">我要推广</span>
				</a>
								<div style="clear:both;"></div>
			</div>
		</div>





		<link rel="stylesheet" type="text/css" href="/static/index/css/video.css"/>
		<script src="/static/index/css/jquery.min.js"></script>
		<script src="/static/index/css/pingzi_video.js" ></script>
		
<style type="text/css">
body {

	margin: 0 auto !important;
	padding-bottom: 10vw;
}
img {
	max-width: 100%;
}
code, pre {
	background-color: #f8f8f8;
	-webkit-font-smoothing: initial;
	-moz-osx-font-smoothing: initial;
	padding: 5px 15px;
	white-space: normal;
}
code {
	color: #e96900;
	padding: 3px 5px;
	margin: 0 2px;
	border-radius: 2px;
}
</style>

        <div class="mui-row style-back mui-row-height" align="center">
            <a href="<?php echo url('cashlist'); ?>">

                <div class="mui-div">
                    <span class="iconfont icon--- zijin"></span> <span class="text-cl">提现记录</span> <span class="inc-float">》</span>
                </div>
            </a>
        </div>


        <div class="mui-row style-back mui-row-height" align="center">
            <!--style="width: 200px;text-align: center;cursor: pointer;"-->
            <a href="javascript:void(0);" class="m-video" data-src="/weijiaoyi.mp4" >
                <div class="mui-div">
                    <span class="iconfont icon--19 zijin"></span> <span class="text-cl">视频介绍
</span>  <span class="inc-float">》</span>
                </div>
            </a>
        </div>

        <div class="mui-row style-back mui-row-height" align="center">
            <a href="javascript:void(0);" onclick="show_user_modal('modal-bank2')">  
                <div class="mui-div">
                    <span class="iconfont icon--13 zijin"></span> <span class="text-cl">知识心得
</span>  <span class="inc-float">》</span>
                </div>
            </a>
        </div>



        <div class="mui-row style-back mui-row-height" align="center">
            <a href="/liuc.html">  
                <div class="mui-div">
                    <span class="iconfont icon--1 zijin"></span> <span class="text-cl">充值流程</span>  <span class="inc-float">》</span>
                </div>
            </a>
        </div>



        <div class="mui-row style-back mui-row-height" align="center">
            <a href="/guizhe.html" >  
                <div class="mui-div">
                    <span class="iconfont icon--12 zijin"></span> <span class="text-cl">交易规则
</span>  <span class="inc-float">》</span>
                </div>
            </a>
        </div>

       <!-- <div class="mui-row style-back mui-row-height" align="center">
            <a href="#" onclick="alert('您的代理是<?php echo getuser($userinfo['oid'],"nickname"); ?>');"> 
                <div class="mui-div">
                    <span class="iconfont icon--1 zijin"></span> <span class="text-cl">我的代理</span>  <span class="inc-float">》</span>
                </div>
            </a>
        </div> --!>

       <!-- <div class="mui-row style-back mui-row-height" align="center">
            <a href="/guanzhu.html" >  
                <div class="mui-div">
                    <span class="iconfont icon--8 zijin"></span> <span class="text-cl">微信关注
</span>  <span class="inc-float">》</span>
                </div>
            </a>
        </div> --!>

        <div class="mui-row style-back mui-row-height" align="center">
            <a href="javascript:;" onclick="respass()">
 
                <div class="mui-div">
                    <span class="iconfont icon--3 zijin"></span> <span class="text-cl">修改密码
</span> <span class="inc-float">》</span>
                </div>
            </a>
        </div>
        <div class="mui-row style-back mui-row-height" align="center">
            <a href="javascript:void(0);"onclick="show_user_modal('modal-bank1')">
 
                <div class="mui-div">
                    <span class="iconfont icon--6 chujin"></span><span class="text-cl">轮回法则</span> <span class="inc-float">》</span> 
                </div>
            </a>
        </div>
        <div class="mui-row style-back mui-row-height" align="center">
            <a onclick="show_user_modal('modal-olist')">
 
                <div class="mui-div">
                    <span class="iconfont icon--- zijin"></span><span class="text-cl">下单<?php echo ordernum($userinfo['uid']); ?>次
</span> <span class="inc-float">》</span> 
                </div>
            </a>
        </div>

		        <div class="mui-row style-back mui-row-height" align="center">
            <a id="out" onclick="app_exit()">
                <div class="mui-div">
                    <span class="iconfont icon--9"></span> <span class="text-cl">安全退出</span>  <span class="inc-float">》</span>
                    </span>
                </div>
            </a>
        </div>

    <input type="hidden" class="mui-myactive" value="/index/user/index.html">
    <script src="/static/index/js/user.js"></script>
    <script src="/static/index/js/jquery.qrcode.js"></script>
    <script src="/static/index/js/utf.js"></script>
    <div style="margin-top: 8%;">

    <link href="/static/index/css/mui.min1.css" rel="stylesheet" />
    <script src="/static/index/js/jquery-1.9.1.min.js"></script>
    <script src="/static/index/js/mui.min.js"></script>
    <link href="/static/index/css/ionic.css" rel="stylesheet">
    <link href="/static/index/css/style.css" rel="stylesheet">
    <script src="/static/index/js/lk/order.js"></script>    <!-- 弹框插件 -->
    <script src="/static/layer/layer.js"></script>




	<div class="mui-bar mui-bar-tab" id="nav">
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


<script src="/static/index/js/lk/hold.js"></script>
<script type="text/javascript">
  change_category(0)
</script>

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

	<script type="text/javascript">
		$(function () {
			mui('#nav').on('tap', 'a', function (e) {
				var url = $(this).attr("data-href");
				goView(url);
			});
		});
	</script>
</div>
});
		}
	});
</script>
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

</div>









<div class="modal-backdrop hide modal-bank"><div class="modal-wrapper" ng-transclude=""><ion-modal-view class="order-modal bank-info-modal modal slide-in-up ng-leave ng-leave-active">
    <ion-header-bar class="order-modal-header bar bar-header">
        <h1 class="title" style="left: 54px; right: 54px;">银行资料</h1>
        

<div class="close" onclick="hide_user_modal('modal-bank')">
  
          <i class="icon ion-ios-arrow-left"></i>
        </div>
    </ion-header-bar>
    <ul>

    	<li>
 
   		<span>银行名称</span>


<select name="bankno" class=" bankno">
<?php if(is_array($banks) || $banks instanceof \think\Collection || $banks instanceof \think\Paginator): $i = 0; $__LIST__ = $banks;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>

<option label="<?php echo $vo['bank_nm']; ?>" value="<?php echo $vo['id']; ?>" <?php if(isset($mybank) && $mybank['bankno'] == $vo['id']): ?>selected="selected" <?php endif; ?> ><?php echo $vo['bank_nm']; ?></option>

<?php endforeach; endif; else: echo "" ;endif; ?>

</select>
  

  	</li>
 
       <li>

            <span>省份</span>

            <select id="province" class="province" name="province" style="">

				<option value="">请选择</option>

            	<?php if(is_array($province) || $province instanceof \think\Collection || $province instanceof \think\Paginator): $i = 0; $__LIST__ = $province;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>

	    		
<option  value="<?php echo $vo['id']; ?>" <?php if(isset($mybank) && $mybank['provinceid'] == $vo['id']): ?> selected="selected" <?php endif; ?> ><?php echo $vo['name']; ?></option>

	    		<?php endforeach; endif; else: echo "" ;endif; ?>

            </select>
        </li>
        <li>
            <span>市名</span>
            <select id="city" name="cityno" class="city">
            	<?php if(isset($mybank)): ?>
            	<option value="<?php echo $mybank['cityno']; ?>"><?php echo getarea($mybank['cityno']); ?></option>
            	<?php else: ?>
				<option value="">请选择</option>
				<?php endif; ?>
            </select>
        </li>
        <li>
            <span>开户支行</span>
            <input type="text" placeholder="支行地址" name="address" class="address" value="<?php echo isset($mybank)?$mybank['address']:''; ?>">
        </li>
        <li>
            <span>开户名</span>
            <input type="text" placeholder="持卡人姓名" name="accntnm"  class="accntnm" value="<?php echo isset($mybank)?$mybank['accntnm']:''; ?>">
        </li>
        <li>
            <span>卡号</span>
            <input type="text" placeholder="银行卡号" name="accntno" class="accntno" value="<?php echo isset($mybank)?$mybank['accntno']:''; ?>">
        </li>
        <li>
            <span>身份证号</span>
            <input type="text" placeholder="身份证号" name="scard" class=" scard" value="<?php echo isset($mybank)?$mybank['scard']:''; ?>">
        </li>
        <li>
            <span>微信帐号</span>
            <input type="text" placeholder="微信联系方式" name="phone"  class="phone" value="<?php echo isset($mybank)?$mybank['phone']:''; ?>">
        </li>

        <?php if(isset($mybank)): ?>
        	<input type="hidden" class="id" name="id" value="<?php echo $mybank['id']; ?>">
        <?php endif; ?>
    </ul>
    <div class="button-bar">
        <a class="button button-balanced" onclick="update_user()">确定</a>
        <a class="button button-dark" onclick="hide_user_modal('modal-bank')">关闭</a>
    </div>

</ion-modal-view></div></div>


  

  <div class="modal-backdrop hide modal-deposit">
<div class="modal-backdrop-bg"></div>
<div class="modal-wrapper" ng-transclude="">
<ion-modal-view class="order-modal modal slide-in-up ng-leave ng-leave-active model-bank-tab">
    <ion-header-bar class="order-modal-header bar bar-header">
        <h1 class="title" style="left: 54px; right: 54px;">用户入金</h1>

        <div class="close" onclick="hide_user_modal('modal-deposit')">
            <i class="icon ion-ios-arrow-left"></i>
        </div>
    </ion-header-bar>
     <div class="pay_code_area" style="display: none">
        <div>
            <div class="pay_code_img">
                
            </div>
            
            <p>扫描二维码支付</p>
            <p><a href="">充值成功点击刷新</a></p>
            <p><a href="/index/user/index/token/index.html">关闭</a></p>


 </div>
    </div>
        <link rel="stylesheet" type="text/css" href="/codepay/css/userPay.css">
      <script src="/codepay/js/jquery-1.10.2.min.js" type="text/javascript"></script>
 </br></br> 
  <div id="loadingPicBlock" style="max-width: 720px;margin:0 auto;" class="pay">
 


      <section class="clearfix g-member">
        <div class="g-Recharge">
            <ul id="ulOption">
                <!--注意修改金额 需要同时修改前面的值 money="10" -->
              <?php if(is_array($reg_push) || $reg_push instanceof \think\Collection || $reg_push instanceof \think\Paginator): $i = 0; $__LIST__ = $reg_push;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
               <li money="<?php echo $vo; ?>"><a href="javascript:;"><?php echo $vo; ?>元<s></s></a></li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
              
            </ul>
        </div>

















        <form action="/index/pay/alipays" method="post">
            <article class="clearfix mt10 m-round g-pay-ment g-bank-ct">
                <ul id="ulBankList">
                    <li  style="display:none" class="gray6" style="width: 100%;padding: 5px 0px 0px 10px;height: 50px;">您选择充值：<label
                            class="input" style="border: 1px solid #EAEAEA;height: 35px;font-size:30px;">
                            <input type="text" name="price" id="price" placeholder="200" value="200"
                                   style="width: 170px;color: red;font-size:20px;">   <!--默认输入金额值50-->
                        </label> 元
                    </li>
                      <li style="display:none" class="gray6"
                        style="width: 100%;padding: 5px 0px 0px 10px;>
                        充值用户名：<label
                            class="input" style="border: 1px solid #EAEAEA;height: 30px;font-size: 30px;">
                            <input type="text" name="user" id="user" placeholder="用户名" value="<?php echo $userinfo['username']; ?>"
                                   style="width: 180px;font-size: 16px;">
                        </label></li>

                    <li class="gray6" style="width: 100%;padding: 0px 0px 0px 10px">充值帐号：<label>
                    <input value="<?php echo $userinfo['utel']; ?>"> 
                    </label></li>
 
  
                    <li class="gray6" style="width: 100%;padding: 0px 0px 0px 10px">当前余额：<label>
                    <input value="<?php echo $userinfo['usermoney']; ?>"style="width:72px;color: red;font-size:14px;">
                    </label>元</li>

                      <li payType="1" class="gray9" type="codePay" style="width: 33%">

                        <a href="javascript:;" class="z-initsel"><img src="/codepay/img/alipay.jpg"><s></s></a>
                    </li>

                    <!--<li payType="3" class="gray9" type="codePay" style="width: 33%">-->

                        <!--<a href="javascript:;" ><img src="/codepay/img/alipay.jpg"><s></s></a>-->
                         <!--<span>(通道二)</span>-->
                    <!--</li>-->

                    <li payType="2" class="gray9" type="codePay" style="width: 33%">

                        <a href="javascript:;" ><img style="height: 45px" src="/codepay/img/yl.jpg"><s></s></a>

                    </li>

                    <li payType="4" class="gray9" type="codePay" style="width: 33%">

                        <a href="javascript:;" ><img style="height: 45px" src="/codepay/img/kjzf.jpg"><s></s></a>

                    </li>

                    <!--<li payType="2" class="gray9" type="codePay"  style="width: 33%">-->
                        <!--<a href="https://t.ibangkf.com/i/achat-kefuq59.html?l=kefuq59&page=app&ref=app&title=app"><img src="/codepay/img/qqpay.jpg"><s></s></a>-->
                    <!--</li>                                                                        -->
                </ul>
            </article>
            <input type="hidden" id="pay_type" value="1" name="type"> <!--值1表示支付宝默认-->
            <input type="hidden" value="" name="salt">

            <div class="mt10 f-Recharge-btn">

                <button id="btnSubmit" type="submit" href="javascript:;" class="orgBtn">确认支付</button>
            </div>
    <center><a href="/liuc.html">充值不到账？>>> 戳我 <<<</a></center>    </form>
    </section>

 





   <input id="hidIsHttps" type="hidden" value="0"/>
    <script src="js/jquery-1.10.2.min.js" type="text/javascript"></script>
      <script>
          $('.gray9').click(function () {
              var values = $(this).attr('payType')
              $('input[name=type]').val(values)
              console.log($('input[name=type]').val())
          })
      </script>
    <script language="javascript" type="text/javascript">

        $(function () {
            var c;
            var g = false;
            var a = null;
            var e = function () {
                $("#ulOption > li").each(function () {
                    var n = $(this);
                    n.click(function () {
                        g = false;
                        c = n.attr("money");
                        n.children("a").addClass("z-sel");
                        n.siblings().children().removeClass("z-sel").removeClass("z-initsel");
                        var needMoney = parseFloat(n.attr("money")).toFixed(2);
                        if (needMoney <= 0)needMoney = 0.01;
                        $("#price").val(needMoney);
                    })
                });
                $("#ulBankList > li").each(function (m) {
                    var n = $(this);
                    n.click(function () {
                        if (m < 2)return;
                        $("#pay_type").val(n.attr("payType"));
                        n.children("a").addClass("z-initsel");
                        n.siblings().children().removeClass("z-initsel");
                    })
                });

            };
            e()
        });

    </script>


</div>
  
  
    	</div>
	</div><div class="scroll-bar scroll-bar-v"><div class="scroll-bar-indicator scroll-bar-fade-out" style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div></div></ion-content>
</ion-modal-view></div></div>
  
  
  
  <div class="modal-backdrop hide modal-withdraw"><div class="modal-backdrop-bg"></div><div class="modal-wrapper" ng-transclude=""><ion-modal-view class="order-modal modal slide-in-up ng-leave ng-leave-active">
    <ion-header-bar class="order-modal-header bar bar-header">
        <h1 class="title" style="left: 54px; right: 54px;">用户出金</h1>
        <div class="close" onclick="hide_user_modal('modal-withdraw')">
            <i class="icon ion-ios-arrow-left"></i>
        </div>
    </ion-header-bar>
<ion-content class="out_money_content scroll-content ionic-scroll  has-header"><div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
    	
		<?php if(!isset($mybank)): ?>
    	<header class="ifnone_add_bank"  onclick="go_add_bank()">
        	<p>+</p>
        	<p>添加银行卡</p>
        </header>
        <div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
		<?php else: ?>
        <div  class="cash">
	        <header class="coldbg hotbg"  style="">
	        	<p class="ng-binding"><?php echo $mybank['bank_nm']; ?> </p><span class="editc">可提现：<?php echo $userinfo['usermoney']; ?> 元</span>	        	<p class="ng-binding">帐号：<?php echo isset($mybank)?$mybank['accntno']:''; ?></p>
	        	<i class="iconfont red"><?php echo substr($mybank['bank_nm'],0,3); ?></i>
	        </header>
	
	        


<article>
<span><i class="iconfont icon--8"></i> 真实姓名：</span><input type="text"name="address" class="address" value="<?php echo isset($mybank)?$mybank['accntnm']:''; ?>"></article>

<article>
<span><i class="iconfont icon--19"></i> 开户地址：</span><input type="text"name="address" class="address" value="<?php echo isset($mybank)?$mybank['address']:''; ?>"></article>

<article>
<span><i class="iconfont icon--11"></i> 联系方式：</span><input type="text"name="address" class="address" value="<?php echo isset($mybank)?$mybank['phone']:''; ?>"></article>


<article>
<span><i class="iconfont icon--14"></i> 提现金额：</span>
<input style="padding-left: 0rem;" type="number" placeholder="最少提现￥<?php echo $conf['cash_min']; ?>" ng-model="outAmount.outamount"  class="cash-price ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"></article>




	       <footer>
	        	余额：<span class="ng-binding"><?php echo $userinfo['usermoney']; ?></span>
	        	手续费：<span  class="ng-binding reg_par" attrdata="<?php echo $conf['reg_par']; ?>"><?php echo $conf['reg_par']; ?>%</span>
	        	实际到账：<span  class="ng-binding true_price" style="display:none"></span>
	     </footer>
	      <button class="newbutton outmoneybtn"  onclick="out_withdraw()">确认出金</button>
       </div>
		   
			<a onclick="go_add_bank()"style="border:1px solid #00A422; color:#00a422; border-radius:5px; width:70%; height:40px; line-height:40px; text-align:center; display:block; text-decoration: none; margin:0 auto;">修改银行卡</a><?php endif; ?>



</div>
	

    </div><div class="scroll-bar scroll-bar-v"><div class="scroll-bar-indicator scroll-bar-fade-out" style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div></div></ion-content>
</ion-modal-view></div></div><div class="modal-backdrop hide modal-olist"><div class="modal-backdrop-bg"></div><div class="modal-wrapper" ng-transclude=""><ion-modal-view class="order-modal modal slide-in-up ng-leave ng-leave-active">
    <ion-header-bar class="order-modal-header bar bar-header">
        <h1 class="title" style="left: 54px; right: 54px;">资金流水</h1>
        <div class="close" onclick="hide_user_modal('modal-olist')">
            <i class="icon ion-ios-arrow-left"></i>
        </div>
    </ion-header-bar>
    <ion-content class="person_money_list scroll-content ionic-scroll  has-header"><div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
		<ion-scroll style="height:100%" class="scroll-view ionic-scroll scroll-y"><div class="scroll" style="transform: translate3d(0px, -10px, 0px) scale(1);">
			
      <ul class="price_list">
                <?php if(is_array($order_list) || $order_list instanceof \think\Collection || $order_list instanceof \think\Paginator): $i = 0; $__LIST__ = $order_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                <li ng-repeat="c in moneyList" class="" isshow="0">
                	<div class="money_list_header" >
                		<section class="other_money_bg">

                		</section><section>
                			<p  class="ng-binding other_money"><?php echo $vo['title']; ?></p>
                			<p>
                				<i class="iconfont icon--1 " ></i>
                				<i class="iconfont icon-30 ng-hide" ></i>
                				<span class="ng-binding"><?php echo $vo['nowmoney']; ?></span></p>
                			<p>
                				<i class="iconfont icon--2 pay_blue"></i>
                				<span class="ng-binding"><?php echo date('Y-m-d H:i:s',$vo['time']); ?></span>
                				<!-- <span class="ng-binding">14:13:04</span> -->
                			</p>
                		</section><section  class="ng-binding other_money">
                			<?php echo $vo['account']; ?>
                		</section><section class="icon clickshow ion-ios-arrow-up">
                		</section>
                	</div>
                	<article class="today_list_footer" style="display: none;">
                		<p class="ng-binding">详情：<?php echo $vo['content']; ?></p>
                	</article>
                </li>
				<?php endforeach; endif; else: echo "" ;endif; ?>
			</ul>
			<!-- ngIf: has_more_money_order.if_has_more_money_order -->
		</div><div class="scroll-bar scroll-bar-v"><div class="scroll-bar-indicator scroll-bar-fade-out" style="height: 631px; transform: translate3d(0px, 10px, 0px) scaleY(1);"></div></div></ion-scroll>
    </div><div class="scroll-bar scroll-bar-v"><div class="scroll-bar-indicator scroll-bar-fade-out" style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div></div></ion-content>
    <div class="button-bar">
        <a class="button button-dark" onclick="hide_user_modal('modal-olist')">关闭</a>
    </div>
</ion-modal-view></div></div>


<div class="modal-backdrop hide modal-bank1"><div class="modal-wrapper" ng-transclude=""><ion-modal-view class="order-modal bank-info-modal modal slide-in-up ng-leave ng-leave-active">
    <ion-header-bar class="order-modal-header bar bar-header">
        <h1 class="title" style="left: 54px; right: 54px;">轮回法介绍</h1>
        <div class="close" onClick="hide_user_modal('modal-bank1')">
            <i class="icon ion-ios-arrow-left"></i>
        </div>
    </ion-header-bar>
<br /><br /><br /><br /><br />
       <span style="color:#FFFFFF"> <div style="float:left;"> 轮回法如下：</div><br><br></p> 100亏了 就马上下200  下200亏了就马上下500  500再亏就下1000 只要你中一单就可以赚回来了</p><br>100亏了 下200 200亏下500  任意中一单就盈利回头100下起
比如你下到200赚了 就再下100
到500才赚 也回头下</p><br>100
本来涨跌是50%的概率， 加上轮回法4轮的75%的概率都有90%以上的概率。</span>    <div class="button-bar">

        <a class="button button-dark" onClick="hide_user_modal('modal-bank1')">关闭</a>
    </div>

</ion-modal-view></div></div>

    </div><div class="scroll-bar scroll-bar-v"><div class="scroll-bar-indicator scroll-bar-fade-out" style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div></div></ion-content>
</ion-modal-view></div></div><div class="modal-backdrop hide modal-bank2"><div class="modal-backdrop-bg"></div><div class="modal-wrapper" ng-transclude=""><ion-modal-view class="order-modal modal slide-in-up ng-leave ng-leave-active">
    <ion-header-bar class="order-modal-header bar bar-header">
        <h1 class="title" style="left: 54px; right: 54px;">消息中心</h1>
        <div class="close" onClick="hide_user_modal('modal-bank2')">
            <i class="icon ion-ios-arrow-left"></i>
        </div>
    </ion-header-bar><br /><br /></p><p>策略</p><p>　　从种类繁多的策略中找到适合自己的，必然要花费大量时间和精力，兴许还要遭受诸多挫折，但这是必经之路，再难也要坚持下去。若是在策略选择中掉以轻心，真正的受害者还是自己。</p><p>　　技术</p><p>　　交易策略把控全局，对实操做单有指导作用的则是技术，一个不懂策略的投资人，收益自然不会好，而一个不懂技术的投资人，也不会取得高收益。只有策略、技术俱备，才可能获得令人满意的交易结果。微交易技术指标很多，k线图、kdj、macd、布林线、均线，投资人应有所侧重，在不同场景使用不同的技术分析法。</p><p>　　知识</p><p>　　知识改变世界，知识改变命运，知识改变交易结果，这是适用于微交易投资的一大箴言。不具备相关知识，看不懂交易技巧，对微交易一知半解，自然难以走的长远。知识就像是大厦的地基，只有根基牢固了，大厦才不会变成空中楼阁。</p><p>　　心态</p><p>　　心态看似与交易技巧缺少关联，但它发挥的作用却是难以忽视的，真正决定微交易结果的不是技术，而是人，投资人能多大程度发挥自身实力，与心态息息相关。平稳心态能让我们全身心投入，若是处于急躁焦虑状态下，实力发挥就要打个对折，自然影响交易结果。</p>
</span>
<div class="button-bar">
        <a class="button button-dark" onClick="hide_user_modal('modal-bank2')">关闭</a>
    </div>






<!-- 


<div class="modal-backdrop active"><div class="modal-backdrop-bg"></div><div class="modal-wrapper" ng-transclude=""><ion-modal-view class="order-modal qrcode-modal modal slide-in-up ng-enter active ng-enter-active">
    <ion-header-bar class="order-modal-header bar bar-header">
        <h1 class="title" style="left: 50px; right: 50px;">移动支付</h1>
        <div class="close" ng-click="pay_qrcode_modal.hide()">
            <i class="icon ion-ios-close-empty"></i>
        </div>
    </ion-header-bar>
    <ion-content scroll="false" class="scroll-content ionic-scroll scroll-content-false  has-header">
        <div class="pay_weixin_code">
            <header>
            <p>支付金额：
                <span class="ng-binding">100</span>
            </p>
            </header>
            <section ng-show="distinguishQrcode" class="">长按识别</section>
            <footer ng-show="distinguishQrcode" class="">
                使用其它手机，打开微信或者支付宝，扫一扫也可以支付
            </footer>
            <footer ng-show="!distinguishQrcode" class="ng-hide">
                使用手机截图保存至相册，再微信或者支付宝识别图片可进行支付，也可使用其它手机扫一扫进行支付
            </footer>
            <div ng-show="!distinguishQrcode" class="no-erweima ng-hide"></div>
        </div>
    </ion-content>
    <article>
        <img ng-src="http://weixin.fxgogogo.com/qrcode?text=weixin%3A//wxpay/bizpayurl%3Fpr%3D8tJpkmg" src="http://weixin.fxgogogo.com/qrcode?text=weixin%3A//wxpay/bizpayurl%3Fpr%3D8tJpkmg">
    </article>
</ion-modal-view></div></div>



 -->






</body></html>
<div id="zypay_post"></div>
<script src="__HOME__/js/lk/user.js?s=<?php echo time(); ?>"></script>
<script src="__HOME__/js/lk/jquery.qrcode.js"></script>
<script src="__HOME__/js/lk/utf.js"></script>
<script>
$('#province').change(function(){
    var pid = $(this).val();
    if(pid != ''){
        var url = "<?php echo url('getarea'); ?>"+"?id="+pid;
        $.get(url,function(data){
          $("#city").html(data);
        });
    }else{
        $("#city").html('<option value="">请选择城市</option>');
    }

    
  });
function respass(){
    location.href="<?php echo url('login/respass'); ?>"
}

</script>