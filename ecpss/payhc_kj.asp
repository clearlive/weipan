








<!DOCTYPE html>
<html>
<head> 
<link media="all" href="/theme/xy001/misc/base.css" type="text/css" rel="stylesheet">
<link media="all" href="/theme/xy001/misc/common.css" type="text/css" rel="stylesheet">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>充值平台币</title> 
<script type="text/javascript" src="/api/script.ashx?script.wjq.js"></script>
<link href="/misc/payment/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="control.js"></script> 
<script type="text/javascript" src="/misc/payment/paylogin.js?v=01"></script>
 
</head>
<body >
<div id="container">
<div id="header">
<div class="header">
<a class="fl" href="/index.html"><img src="/upload/image/20141121022528_4833.png" width="180px"  height="64px" /></a>
<div class="header-menu" >
<ul >
	  <li id="page_menu_news" >
	<a  href="" target=""></a>
   </li>
	  <li id="page_menu_news" >
	<a  href="/" target="">首 页</a>
   </li>
	  <li id="page_menu_news" >
	<a  href="/user.html" target="">用户中心</a>
   </li>
	  <li id="page_menu_news" >
	<a  href="/pay.html" target="">充值中心</a>
   </li>
	  <li id="page_menu_news" >
	<a  href="/kefu.aspx" target="">客服中心</a>
   </li>
	  <li id="page_menu_news" >
	<a  href="/news/list.html" target="">新闻中心</a>
   </li>
	  <li id="page_menu_news" >
	<a  href="/zb/lv.htm" target="_blank">美女直播</a>
   </li>
	  <li id="page_menu_news" >
	<a  href="/zb/sg.htm" target="_blank">帅哥直播</a>
   </li>
	  <li id="page_menu_news" >
	<a  href="/vip.html" target="_blank">VIP特权</a>
   </li>
	  <li id="page_menu_news" >
	<a  href="http://yule.820cc.com" target="_blank">娱乐中心</a>
   </li>
	</ul></div> <div class="header-login fr mt30">
<div class="header-login-body">
<div class="header-login-word">
<a href="/user.html"><%=request("userid")%></a>
</div>
</div>          

</div>
</div>
</div></div>
<div style=" height:10px;"></div>


<div class="paymain" style="width:1000px;">
<div class="setup">
<ol>
<li class="st st1 " ></li>
<li class="sp"></li>
<li class="st st2 " ></li>
<li class="sp"></li>
<li class="st st3"></li>
<li class="sp"></li>
<li class="st st4"></li>
</ol>

</div><div class="container" style="">
<div class="payservers" style=" width:240px;">
<ul id="pay_setup_1" >
<li><a href="/ecpss/payhc_bank.asp?userid=<%=request("userid")%>" target=_parent>网银支付</a></li>
<li><a href="/ecpss/payhc_kj.asp?userid=<%=request("userid")%>" target=_parent>网银快捷 ( 含: 国外网银 )</a></li>






</ul>

<div class="popbank">
<ul class="popbanklis">

</ul>
</div>

</div>

<div style=" float:left; width:720px;">
<script type="text/javascript"> 
function account() {    
	var Amount=document.all.money.value;    
	var Rate=10;    
	var RMB=Amount*Rate;    
	document.all.RMB.value=RMB; 
} 
</script>
<div class="p-u-s">
<div class="p-u-s-z"><span class="l">您充值的是：<font color="#FF0000"><strong>平台币</strong></font></span><span class="r">充值方式：<span style=" color:#F70D04" class="chongzhimingcheng">网银快捷 ( 含: 国外网银 )</span><span style=" color:#F70D04" class="wangshangyinhang"></span></span></div>
<div style=" clear:both;"></div>
<table class="udt">
<tr><td class="t11">充值账号:</td><td><input  onclick="javascript:mast_login()" type="text" class="i" value="<%=request("userid")%>" id="username" autocomplete="off" /> </td><td style=" height" class="r"><span class="t">√</span><span class="e">×</span><span for="username">充值账号 </span></td></tr>
<tr><td class="t11">确认账号:</td><td><input  onclick="javascript:mast_login()" type="text" class="i" value="<%=request("userid")%>" id="username2" autocomplete="off" /> </td><td class="r"><span class="t">√</span><span class="e">×</span><span for="username2">再次填写充值账号</span></td></tr>
 
<tr style=" display:;"><td class="t11">充值金额:</td><td><input type="text" class="i" id="money" name="money" value="0"  onkeyup="account()" autocomplete="off"/></td><td class="r"><span class="t">√</span><span class="e">×</span><span for="money">选择或输入金额</span></td></tr>
<tr><td class="t11">您将获得:</td><td><input name="Je" id="RMB" value="0" readonly="readonly" style="border:0px; font-weight:bold;color:red; background:#ECF2F2"> <span>平台币</span> </span> </td><td class="r"></td></tr>
</table> 

 




 
<div style="clear:both"></div>

<div class="stupbank">
<div class="stup-bank-logo">
<ul id="banks"></ul>
</div>
</div>
<div style="clear:both"></div>
</div>




<form target="_blank" method="post" action="send2.asp" id="adads"  >

<input type="hidden" name="userid" value="<%=request("userid")%>"  />

<input type="hidden" autocomplete="off" name="spantime" value="" see="充值时间"/>
<input type="hidden" autocomplete="off" name="guid" value="" see="充值session Key"/>
<input type="hidden" autocomplete="off" name="referrer" value="" see="UrlReferrer"/>
<input type="hidden" autocomplete="off" name="login_user" value="gzxcxa" see="登录用户"/>

<input type="hidden" autocomplete="off" name="pay_user" value="" see="充值账户"/>
<input type="hidden" autocomplete="off" name="pay_money" value="" see="充值金额(元)"/>
<input type="hidden" autocomplete="off" name="pay_away" value="" see="充值网关"/>
<input type="hidden" autocomplete="off" name="pay_bank" value="" see="银行编码" />

<div class="stupcreditcard  p-u-s">
<table class="udt">
<tr><td class="t11">证件类型:</td><td>
<select class="i3" name="pama1">
<option value="IDCARD">身份证</option>
<option value="PASSPORT">护照</option>
<option value="OFFICERPASS">军官证</option>
<option value="HM_VISITORPASS">澳居通行证</option>
<option value="T_VISITORPASS">台湾居民来往大陆通行证</option>
</select>
</td><td class="r"></td></tr>
<tr><td class="t11">证件号码:</td><td><input name="pama2" type="text" class="i" value=""  autocomplete="off" /></td><td class="r"></td></tr>
<tr><td class="t11">信用卡号:</td><td><input name="pama6" type="text" class="i" value=""  autocomplete="off" /></td><td class="r"></td></tr>
<tr><td class="t11">所属银行:</td><td>
<select class="i3" name="pama3">
<option data="中信银行信用卡" value="ECITICCREDIT">中信银行信用卡</option>   
<option data="工商银行信用卡" value="ICBCCREDIT">工商银行信用卡</option>      
<option data="上海银行信用卡" value="BOSHCREDIT">上海银行信用卡</option>      
<option data="中国银行信用卡" value="BOCCREDIT">中国银行信用卡</option>        
<option data="民生银行信用卡" value="CMBCCREDIT">民生银行信用卡</option>      
<option data="广东发展银行信用卡" value="GDBCREDIT">广东发展银行信用卡</option>
<option data="兴业银行" value="CIBCREDIT">兴业银行</option>                    
<option data="浦东发展银行" value="SPDBCREDIT">浦东发展银行</option>          
<option data="建设银行" value="CCBCREDIT">建设银行</option>                    
<option data="华夏银行" value="HXBCREDIT">华夏银行</option>                    
</select>
 
</td><td class="r"></td></tr>
<tr><td class="t11">您的手机号:</td><td><input name="pama4" type="text" class="i" value=""  autocomplete="off" /></td><td class="r"></td></tr>
<tr><td class="t11">消费者姓名:</td><td><input name="pama5" type="text" class="i" value=""  autocomplete="off" /></td><td class="r"></td></tr>
<tr><td class="t11">有效期(年):</td><td><input name="pama7" type="text" class="i" value=""  autocomplete="off" /></td><td class="r"></td></tr>
<tr><td class="t11">有效期(月):</td><td><input name="pama8" type="text" class="i" value=""  autocomplete="off" /></td><td class="r"></td></tr>
<tr><td class="t11">CVV 码:    </td><td><input name="pama9" type="text" class="i" value=""  autocomplete="off" /></td><td class="r"></td></tr>
<tr><td class="t11">发卡行编码:</td><td><input name="pama10" type="text" class="i" value=""  autocomplete="off" /></td><td class="r"></td></tr>
<tr><td class="t11">信用卡卡种:</td><td><input name="pama11" type="text" class="i" value=""  autocomplete="off" /></td><td class="r"></td></tr>
 </table>
</div>

<div class="stupucread p-u-s">
 <table class="udt">
 <tr><td class="t11">卡号:</td><td><input type="text" class="i" value="" name="sp_card"  autocomplete="off" /></td><td class="r">请确认金额与卡面值相等,否则充值将不成功</td></tr>
 <tr><td class="t11">卡密:</td><td><input type="password" class="i" value="" name="sp_password1"  autocomplete="off" /></td><td class="r">充值卡密码</td></tr>
 <tr><td class="t11">确认密码:</td><td><input type="password" class="i" name="sp_password" value=""  autocomplete="off" /></td><td class="r">重复上面的密码</td></tr>
 </table>
</div> 
</form>


<div class="p-c-t">
<div class="button-box">
<a class="pbutton" href="/pay.html">返回,上一步</a>
<a class="pbutton on-pay-form" href="javascript:;">继续,下一步</a>

</div>
</div>


</div>
</div>
<div style="clear:both">

</div>
</div>

<div class="wait-pay-mask"></div>
<div class="wait-pay">
<h3>您好： <%=request("userid")%></h3>
<div class="pay-info-wait">
<p><font color="#008B45"><strong>请在新打开的页面上完成支付 !</strong></font> </p>
<p>平台币到帐之后，您下一步需要兑换到游戏噢！</p>
<p>亲，您知道吗？ <font color="#FF0000"><strong>Vip</font></strong> 账户充值 <font color="#FF0000"><strong>平台币</font></strong> 有折扣噢!&nbsp;&nbsp;</font>
&nbsp;&nbsp;<img src="/520/shouzhi.png">&nbsp;<a  href="/vip.html" target="_blank">详情点这里</a></p>
</div>

<div class="pay_wait_button">
<a href="/user/order_station.html">查看平台币</a>
<a href=" ">继续充值</a>
</div>
</div>
<script type="text/javascript" src="/misc/payment/paylogin.js?v=01"></script>
<div class="mst-pay-login">
<iframe src="/oauth/pay-login.htm" frameborder="0" class="mst-pay-login-i"></iframe>
</div>

<script type="text/javascript">
    var mst_login_pay = 'on';
    var login_user = "10002915";
    if (login_user.length < 1 && mst_login_pay == "on") {
        $(document).ready(function () { mast_login() })
    }
    function unmast_login() { close_login(); }
</script>
<div id="footer">
<div class="footer">
<br>
  <div class="mt10">抵制不良游戏， 拒绝盗版游戏。注意自我保护， 谨防受骗上当。适度游戏益脑， 

沉迷游戏伤身。合理安排时间， 享受健康生活。</div>
            <div class="mt10">
            <div class="mt10"><a href="/520/14219116899188jtggx.jpg"target="_blank">文网文

[2013]1051-1100号</a>   ICP证：渝B2-20110077   渝ICP备14008747号</div>
            <script type="text/javascript" src="/bottom/common"></script>
            <div id="xyFoot"></div>
            <span class="mt5">
                Copyright ? 2008 - 2015 820cc.com All Rights Reserved.重庆跨跨网络科技有限公司  版权所有</p><script src="/misc/js/sign_in.js" type="text/javascript"></script></div>
<script>CNZZ_SLOT_RENDER("327141");</script>
<meta property="qc:admins" content="00116206376020336375" />
<script type="text/javascript" src="http://c.ibangkf.com/i/c-kefuq59.js"></script>

<a class="bshareDiv" href="http://www.bshare.cn/share">分享按钮</a><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#uuid=&style=3&fs=4&textcolor=#fff&bgcolor=#19D&text=分享跨跨网络"></script></div>
</div></body>
</html>

