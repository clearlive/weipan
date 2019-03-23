<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:78:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\pay\ylpage.html";i:1553327823;s:72:"C:\UPUPW_ANK_W64\WebRoot\Vhosts\qiantai/application/index\view\foot.html";i:1552983549;}*/ ?>
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
    <title>支付</title>
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

<form style="color: white;width: 100%;" class="tj" action="/index/pay/ylpay" method="post">

    <div style="display: flex;align-items: center;justify-content: space-between;margin-bottom: 10%;">
        <text >卡号</text>
        <input style="flex: 2;height: 30px;margin-left: 15px"  type="text" name="card_num" />
    </div>


    <p>金额: &nbsp;&nbsp;<?php echo $price; ?> </p>
    <input  value=<?php echo $price; ?> type="hidden" name="amount" />
    <input style="margin-left: 45%;padding: 5px 20px" type="submit" value="提交" />
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