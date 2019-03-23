<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:70:"C:\code\weipan\weipan\qiantai/application/index\view\pay\gettoken.html";i:1553310949;s:62:"C:\code\weipan\weipan\qiantai/application/index\view\foot.html";i:1552983549;}*/ ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="Generator" content="EditPlus®">
    <meta name="Author" content="">
    <meta name="Keywords" content="">
    <meta name="Description" content="">
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
    <title>支付测试</title>
    <style>
        html,body,.main{
            display: flex;
            justify-content: center;
            align-items: center;
            height:100%;
            background: #000000;
            width: 100%;
        }
    </style>
</head>
<body>
<div class="main">


    <form action="#" method="post">
        <div style="margin-left:2%;color:#f00">获取access_token：</div><br/>
        <div style="margin-left:2%;">商户号：</div><br/>
        <input type="text" style="width:96%;height:35px;margin-left:2%;" name="appid" value="100095"/><br /><br />
        <div style="margin-left:2%;">商户密钥：</div><br/>
        <input type="text" style="width:96%;height:35px;margin-left:2%;" name="secret" value="972d9cc4be454cadbcc425b7af18c97b"/><br /><br />
        <div align="center">
            <input type="submit" value="获取Access Token" style="width:210px; height:50px; border-radius: 15px;background-color:#FE6714; border:0px #FE6714 solid; cursor: pointer;  color:white;  font-size:16px;" type="button"/>
        </div>
        <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
?>
        <div style="margin-left:2%;color:#f00">access_token：</div><br/>

        <pre>
        <?php
            echo $access_token;
        ?>
        </pre>
        <?php
    }
?>
    </form>

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
</div>
</body>
</html>