<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:79:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\index\index.html";i:1553156524;s:72:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\head.html";i:1552904453;s:72:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\foot.html";i:1552983549;}*/ ?>
﻿ <title>商品行情 <?php echo !empty($userinfo['nickname'])?$userinfo['nickname']:$userinfo['username']; ?>  <?php echo $userinfo['utel']; ?> 余额：<?php echo $userinfo['usermoney']; ?> 元</title>﻿<html style="font-size: 120px;">
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

           <!-- ngRepeat: c in category_list -->
    <header class="mui-bar mui-bar-nav">
        <h1 id="title" class="mui-title font-white">商品行情</h1>
    </header>
          
    <div class="index-style"><br>
<marquee><font color=red>公告: 政府验收平台与入金通道，为大家带来一站式投教合作体验，请勿泄露密码，以免资金被盗。华仕国际 </font></marquee>

        <div class="mui-row style-back" align="center">
            <div class="mui-col-sm-6 mui-col-xs-6">
                <span style="font-size: 28px; float: left; margin-top: 10px;" class="iconfont icon--8">
                </span><span class="mui-pull-left font-text-14 txt-indent-14px"><?php echo !empty($userinfo['nickname'])?$userinfo['nickname']:$userinfo['username']; if($userinfo['otype'] == 101): endif; ?></span>
                <br>
                <span class="mui-pull-left font-text-14 color-yellow txt-indent-14px"><?php echo $userinfo['utel']; ?></span>
            </div>
            <div class="mui-col-sm-6 mui-col-xs-6 fudong">
               <a class="mui-btn mui-btn-warning mui-pull-right" style="margin-top: 5px;" href="<?php echo url('/index/user/index/token/'.$token); ?>">充值</a>
                <span class="mui-pull-left font-text-14 txt-indent-14px">余额</span>
                <br>
                <span class="mui-pull-left font-text-14 color-yellow"><font color="#FF0000"><?php echo $userinfo['usermoney']; ?> </font>元</span>
            </div>
        </div>
        <div class="Objectname" id="objectlist">
            <div class="mui-row row-th">
                <ul>
                    <li>商品名称</li>
                    <li>现价</li>
                    <li>最低</li>
                    <li>最高</li>
                </ul>
            </div>


               <div class="rows-content">    
	
                          <!-- <?php if(is_array($pro) || $pro instanceof \think\Collection || $pro instanceof \think\Paginator): $i = 0; $__LIST__ = $pro;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?> -->

                            <ul onclick="parent.location='<?php echo url('goods/goods',array('pid'=>$vo['pid'],'token'=>$token)); ?>';"  id="pid<?php echo $vo['pid']; ?>">

                                <li>

                            			<?php if($vo['procode'] == 'fx_seurusd'): ?>
                            <div class="sub_title_color" style="background-color: #c88800;">
                                R/U</div>
						<?php endif; if($vo['procode'] == 'sz399300'): ?>
                            <div class="sub_title_color" style="background-color: #1053a2;">
                                R/J</div>
						<?php endif; if($vo['pid'] == 16): ?>
                                    <div class="sub_title_color" style="background-color: #815608;">
                                        R/G</div>
                                    <?php endif; if($vo['pid'] == 9): ?>
                                    <div class="sub_title_color" style="background-color: #C51162;">
                                        R/Y</div>
                                    <?php endif; if($vo['pid'] == 7): ?>
                                    <div class="sub_title_color" style="background-color: #2E2D3C;">
                                        Y/U</div>
                                    <?php endif; if($vo['pid'] == 6): ?>
                                    <div class="sub_title_color" style="background-color: #c7b249;">
                                        Y/J</div>
                                    <?php endif; if($vo['pid'] == 10): ?>
                                    <div class="sub_title_color" style="background-color: black;">
                                        Y/A</div>
                                    <?php endif; if($vo['pid'] == 8): ?>
                                    <div class="sub_title_color" style="background-color: #C5CAE9;">
                                        R/B</div>
                                    <?php endif; if($vo['procode'] == 'fx_seurgbp'): ?>
                            <div class="sub_title_color" style="background-color: #b11500;">
                                R/A</div>
						<?php endif; if($vo['procode'] == 'llg'): ?>
                            <div class="sub_title_color" style="background-color: #bf00db;">
                                R/C</div>
						<?php endif; if($vo['procode'] == 'fx_sgbpcad'): ?>
                            <div class="sub_title_color" style="background-color: #007cdb;">
                                R/E</div>
						<?php endif; if($vo['procode'] == 'fx_susdjpy'): ?>
                            <div class="sub_title_color" style="background-color: #159297;">
                                U/J</div>
						<?php endif; if($vo['procode'] == 'fx_sgbpjpy'): ?>
                            <div class="sub_title_color" style="background-color: #289b15;">
                                G/J</div>
						<?php endif; if($vo['procode'] == 'fx_seurjpy'): ?>
                            <div class="sub_title_color" style="background-color: #c88800;">
                                E/J</div>
						<?php endif; if($vo['procode'] == 'fx_seuraud'): ?>
                            <div class="sub_title_color" style="background-color: #b02476;">
                                E/A</div>
						<?php endif; if($vo['procode'] == 'fx_saudusd'): ?>
                            <div class="sub_title_color" style="background-color: #9b1dba;">
                                A/U</div>
						<?php endif; if($vo['procode'] == 'fx_susdcad'): ?>
                            <div class="sub_title_color" style="background-color: #c88000;">
                                U/C</div>
						<?php endif; if($vo['procode'] == '12'): ?>
                            <div class="sub_title_color" style="background-color: #c88800;">
                                Au</div>
						<?php endif; if($vo['procode'] == '13'): ?>
                            <div class="sub_title_color" style="background-color: #c0c0c0;">
                                AG</div>
						<?php endif; if($vo['procode'] == 'btc'): ?>
                            <div class="sub_title_color" style="background-color: #c88800;">
                                LTC</div>
						<?php endif; if($vo['procode'] == 'fx_susdchf'): ?>
                            <div class="sub_title_color" style="background-color: #602bb0;">
                                U/C</div>
						<?php endif; ?>
                     <a href="javascript:;" class="ng-binding prtitle"><?php echo $vo['ptitle']; ?></a> </li>
                        <li><a href="javascript:;" class="ng-binding rise-value now-value" style="padding:0px 5px;"><?php echo $vo['Price']; ?> </a>
                        </li>
                        <li><a href="javascript:;" class="ng-binding rise rise-low"><?php echo $vo['Low']; ?> </a></li>
                        <li><a href="javascript:;" class="ng-binding rise rise-high"><?php echo $vo['High']; ?> </a></li>                                                    </li>

                            </ul>

			<!-- <?php endforeach; endif; else: echo "" ;endif; ?> -->
                            </div>


    <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=no" />
    <link href="/static/index/css/mui.min.css" rel="stylesheet" />
    <script type="text/javascript" src="http://c.ibangkf.com/i/c-kefuq59.js"></script>	
    <script src="/static/index/js/jquery-1.9.1.min.js"></script>
    <script src="/static/index/js/mui.min.js"></script>
    <link href="/static/index/css/ionic.css" rel="stylesheet">
    <link href="/static/index/css/style.css" rel="stylesheet">
    <script src="/static/index/js/lk/order.js"></script>    <!-- 弹框插件 -->
    <script src="/static/layer/layer.js"></script>
    <!-- 公共函数 -->
    <script src="/static/public/js/function.js"></script>
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
    <input type="hidden" class="mui-myactive" value="/"/>
    <script src="/static/index/js/lk/index.js"></script>
    <script src="__HOME__/js/lk/c.js"></script>
<div style="margin-top: 8%;">


<div style="position: fixed;left: 0;bottom: 0" class="tab-nav tabs">

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