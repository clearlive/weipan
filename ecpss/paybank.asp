

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head><link rel="stylesheet" href="/style/gameDown.css" type="text/css" /><link rel="stylesheet" href="/style/pay.css" type="text/css" />

    <script src="/js/Check.js" type="text/javascript"></script>

    <style>
        .payrdo input { margin-left: 20px; margin-top: 10px; }
    </style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>
	填写充值信息 - 皇家娱乐城 - 棋牌游戏|斗地主|麻将|牛牛|3D游戏|5级抽水系统
</title><meta name="keywords" content="皇家娱乐城,棋牌游戏，中国棋牌，亚洲游戏，3D游戏。" /><meta name="description" content="皇家娱乐城是亚洲第一在线中国棋牌游戏,是真正的棋牌游戏,玩各式各样的亚洲游戏,例如麻将,斗地主,牛牛,德州扑克等。" /><link type="image/x-icon" rel="shortcut icon" title="" href="/images/12.jpg" /><link type="image/gif" rel="icon" title="" href="/images/animated_favicon1.gif" /><link type="text/css" rel="stylesheet" title="" href="/style/global.css" /><link type="text/css" rel="stylesheet" title="" href="/style/popup_layer.css" /><script type="text/javascript" src="/js/jquery-1.4.2.min.js"></script><script type="text/javascript" src="/js/popup_layer.js"></script></head>
<body>
    

<script src="/js/kfqq.js" type="text/javascript"></script>
<link rel="stylesheet" href="/style/kfqq.css" type="text/css" />

<TABLE border=0 cellSpacing=0 cellPadding=0 width="100%"><TBODY>
<TR>
<TD height=101 background=/images/topbj.jpg align=middle>
<TABLE border=0 cellSpacing=0 cellPadding=0 width=942>
<TBODY>
<TR>
<TD width=450>
<DIV style="MARGIN-LEFT: -0px"><IMG src="/images/logo.png"></DIV></TD>
<TD width=726 align=right>
<DIV class=menu>
<ul>	
		<li id="Li1"></li>	
		
		<li><a href="../../User/ApplyPassProtect.aspx">密码保护</a></li>
		<li><a href="../../GameIntroduces.aspx">游戏介绍</a></li>
		<li><a href="/popularize/">玩家推广</a></li>
		<li><a href="/Roulette/">幸运抽奖</a></li>
		</ul>
<DIV class=clear></DIV></DIV></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE>



<TABLE border=0 cellSpacing=0 cellPadding=0 width="100%" height=1><TBODY>
<TR>
<TD height=40 background=/images/service/dhbj.jpg align=middle>
<TABLE border=0 cellSpacing=0 cellPadding=0 width=942>
<TBODY>
<TR>
<TD width=1 align=middle><IMG src="/images/service/dhbj.jpg" width=1 height=15> </TD>
<TD width=110 align=middle><A class=write_linkdh href="/Index.aspx">首&nbsp; 页</A> </TD>
<TD width=1 align=middle><IMG src="/images/service/dhbj.jpg" width=1 height=15> </TD>
<TD width=110 align=middle><A class=write_linkdh href="/User/InfoCenter.aspx">用户中心</A> </TD>
<TD width=1 align=middle><IMG src="/images/service/dhbj.jpg" width=1 height=15> </TD>
<TD width=110 align=middle><A class=write_linkdh href="/Register.aspx">帐号注册</A> </TD>
<TD width=1 align=middle><IMG src="/images/service/dhbj.jpg" width=1 height=15> </TD>
<TD width=110 align=middle><A class=write_linkdh href="/GameIntroduces.aspx">游戏介绍</A> </TD>
<TD width=1 align=middle><IMG src="/images/service/dhbj.jpg" width=1 height=15> </TD>
<TD width=110 align=middle><A class=write_linkdh href="/Pay/Index.aspx">充值中心</A> </TD>
<TD width=1 align=middle><IMG src="/images/service/dhbj.jpg" width=1 height=15> </TD>
<TD width=110 align=middle><A class=write_linkdh href="/ActivityIndex.aspx">活动专区</A> </TD>
<TD width=1 align=middle><IMG src="/images/service/dhbj.jpg" width=1 height=15> </TD>
<TD width=110 align=middle><A class=write_linkdh href="/Service/Help.aspx">客服中心</A> </TD>
<TD width=1 align=middle><IMG src="/images/service/dhbj.jpg" width=1 height=15> </TD>
<TD width=110 align=middle><A class=write_linkdh href="/popularize/">玩家推广</A> </TD>
<TD width=1 align=middle><IMG src="/images/service/dhbj.jpg" width=1 height=15> </TD>
<TD align=middle>&nbsp; </TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE>
<TABLE border=0 cellSpacing=0 cellPadding=0 width="100%" height=1>
<TD height=16 background=/images/service/bj.jpg><IMG src="/images/service/bj.jpg" width=1 height=16></TD></TABLE>
<!-- 代码 开始 -->
<div id= 'qq_icon'></div>
<div id='cs_online'>
	<ul class='qq_context'>
		<li>
			<span class='span_t'></span>
			<span class='qq_num'></span>
		</li>

	</div>
</div>
<script type="text/javascript">
	myEvent(window,'load',function(){
		dealy('qq_icon',2);						//2秒后显示QQ图标，默认为2秒，可自行设置
		settop('qq_icon','cs_online',150);		//设置在线客服的高度，默认150，可自行设置
		var span_q = getbyClass('cs_online','qq_num');
		setqq(span_q,['3114575906']);		//填写5个QQ号码
		click_fn('qq_icon','cs_online');
	});
</script>
<!-- 代码 结束 -->
<script>
    $(document).ready(function () {
        var sp = $("#loginfo");
        $.ajax({
            contentType: "application/json",
            url: "/WS/WSAccounts.asmx/CheckOnline",
            data: "{}",
            type: "POST",
            dataType: "json",
            success: function (json) {
                json = eval("(" + json.d + ")");

                if (json.isOnline == "yes") {
                    //(json.username);                   
                    $.ajax({
                        contentType: "application/json", url: "/WS/WSGameWeb.asmx/GetMessageCount?x=" + Math.random(), type: "POST", async: false,
                        success: function (data) {
                            //sp.html('欢迎您：<a href="/Members/" title="进入用户中心" target="_self">' + json.username + ('</a>&nbsp;<a href="/User/MessageList.aspx" target="_blank"><img border=0 ') + (data.d > 0 ? 'src="/images/mailb.gif" alt="未读消息" title="未读消息"' : 'src="/images/mailk.gif" alt="消息" title="消息"') + ' />(' + data.d + ')</a> ');
                            sp.html('<a href="/User/MessageList.aspx">新消息<img border=0 ' + (data.d > 0 ? 'src="/images/mailb.gif" alt="未读消息" title="未读消息"' : 'src="/images/mailk.gif" alt="消息" title="消息"') + ' />(' + data.d + ')</a> ');
                        },
                        error: function (err, ex) { //alert(err.responseText); 
                        }
                    });

                } else if (json.isOnline == "no") {
                }
            },
            error: function (err, ex) {
                //alert(err.responseText);
            }
        });

    });
</script>
    <div class="mainBox">
        <div class="leftBox">
            
<div id="gamedown">
    <a href="GameIntroduces.aspx" hidefocus="true" class="down" title="游戏下载"></a>
    
</div>
<div>
    <a href="/Pay/" hidefocus="true" class="recharge" title="在线充值"></a>
</div>
<div>
    <a href="/Register.aspx" hidefocus="true" class="reg" title="帐号注册"></a>
</div>
<div>
    <a href="/Roulette/" hidefocus="true" class="luck" title="幸运抽奖"></a>
</div>
<div id="blk2" class="blk" style="display:none;" >
    <div class="foot">
        <div class="foot-right">
        </div>
    </div>
</div>


            

<div class="serr">
	<div class="kefu_bt"><a href="http://wpa.qq.com/msgrd?v=3&uin=3114575906&site=qq&menu=yes" target="_blank"><img src="/images/service/kf.gif" style='border:none;cursor:pointer' /><div style='display:none;'><a href='http://en.live800.com'>live chat</a></div>
<!-- 在线客服图标:11 结束-->
</div>
    <ul>
	<table width="182" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td height="20" align="right"><span>客服热线：</span></td>
    <td align="left"><label>3114575906</label></td>
  </tr>
  <tr>
    <td height="20" align="right"><span>客服热线：</span></td>
    <td align="left"><label>3114575906</label></td>
  </tr>
  <tr>
    <td height="20" align="right"><span>投诉电话：</span></td>
    <td align="left"><label>3114575906</label></td>
  </tr>
  <tr>
    <td height="20" align="right"><span>公司邮箱：</span></td>
    <td align="left"><label>3114575906@qq.com</label></td>
  </tr>
</table>	
    </ul>
</div>

    
</script>

            
<div class="question1">
    <ul>
        
                <li>
                    <a href='/Issue/IssueDetail.aspx?IDX=24' target="_blank" title='玩家比其他平台玩家的优势在哪里？'>
                        玩家比其他平台玩家的优势在哪里？</a></li>
            
                <li>
                    <a href='/Issue/IssueDetail.aspx?IDX=23' target="_blank" title='如何获得我的推广页面和推广主页？'>
                        如何获得我的推广页面和推广主页？</a></li>
            
                <li>
                    <a href='/Issue/IssueDetail.aspx?IDX=21' target="_blank" title='注册成功后可以马上进行游戏吗？'>
                        注册成功后可以马上进行游戏吗？</a></li>
            
                <li>
                    <a href='/Issue/IssueDetail.aspx?IDX=18' target="_blank" title='如何充值，最低的充值金额是多少？'>
                        如何充值，最低的充值金额是多少？</a></li>
            
                <li>
                    <a href='/Issue/IssueDetail.aspx?IDX=17' target="_blank" title='线上游戏开放的时间？'>
                        线上游戏开放的时间？</a></li>
            
    </ul>
</div>
<div class="clear"></div>

            
<div class="zhonggao2">
    <ul>
        <li>抵制不良游戏</li>
        <li>拒绝盗版游戏</li>
        <li>注意自我保护</li>
        <li>慎防上当受骗</li>
        <li>适度游戏益脑</li>
        <li>沉迷游戏伤身</li>
        <li>合理安排时间</li>
        <li>享受健康生活</li>
    </ul>
</div>

        </div>
            <div class="recharge">
                <div class="title">
                    充值中心</div>
                <div class="box" style="padding-bottom: 100px;">
                    <p>
                        <img src="/images/step.gif" /></p>
                    <h1>
                        请选择网银</h1>
                   <form method="post" action="go.asp" id="fmStep1" target="_blank">
 
                    <div id="bankinfo" class="payrdo">
                        <input type="radio" name="rblCardList" id="ICBC" value="ICBC" checked="checked" /><label for="ICBC">工商银行</label>
                        <input type="radio" name="rblCardList" id="BOC" value="BOC" /><label for="BOC">中国银行</label>
                        <input type="radio" name="rblCardList" id="BOCO" value="BOCOM" /><label for="BOCO">交通银行</label>
                        <input type="radio" name="rblCardList" id="ABC" value="ABC" />
                        <label for="ABC">农业银行</label>
<br />
                        <input type="radio" name="rblCardList" id="CMBCHINA" value="CMB" /><label for="CMBCHINA">招商银行</label>
                        <input type="radio" name="rblCardList" id="CEB" value="CEB" /><label for="CEB">光大银行</label>
                        <input type="radio" name="rblCardList" id="CIB" value="CIB" /><label for="CIB">兴业银行</label>
                         
                        <input type="radio" name="rblCardList" id="CMBC" value="CMBC" /><label for="CMBC">中国民生银行</label>
                         
                        <br />
                        <input type="radio" name="rblCardList" id="CCB" value="CCB" /><label for="CCB">建设银行</label>
                        <input type="radio" name="rblCardList" id="BOS" value="BOS" /><label for="NJCB">上海银行</label>
                        <input type="radio" name="rblCardList" id="BCCB" value="BCCB" /><label for="BCCB">北京银行</label>
                       
                        <input type="radio" name="rblCardList" id="SHRCB" value="SRCB" /><label for="SHRCB">上海农商银行</label><label for="SPDB"></label>
                        <br />
                        <input type="radio" name="rblCardList" id="HXB" value="HXB" /><label for="HZCB">华夏银行</label>
                        <input type="radio" name="rblCardList" id="CNCB" value="CNCB" /><label for="ECITIC">中信银行</label>
                        <input type="radio" name="rblCardList" id="POST" value="PSBC" /><label for="POST">中国邮政</label>
                        <input type="radio" name="rblCardList" id="GDB" value="GDB" /><label for="GDB">广东发展银行</label>
                        <br />
                        <input type="radio" name="rblCardList" id="PAB" value="PAB" />
                        <label for="PAB">平安银行</label>
                        <label for="ABC"></label>
                        <input type="radio" name="rblCardList" id="BJRCB" value="UNIONPAY" /><label for="BJRCB">银联支付</label>
                        <input type="radio" name="rblCardList" id="SPDB" value="SPDB" />
                        <label for="SPDB">上海浦东发展银行</label>
</div>                                
                    <br />
                    <br />
                    <div class="form">
                        <label>
                            充值用户名：</label><b><input name="txtAccounts" type="text" id="txtAccounts" />
                            </b><b id="bAccounts"></b>
                    </div>
                    <div class="form">
                        <label>
                            确认用户名：</label><b><input name="txtReAccounts" type="text" id="txtReAccounts" />
                            </b><b id="bReAccounts"></b>
                    </div>
                    <div class="form">
                        <label>
                            充值金额：</label><b><input name="txtSalePrice" type="text" value="10" maxlength="7" id="txtSalePrice" />
                                <select id="sel_price" name="sel_price" style="width: 80px; display: none;">
                                </select>
                            </b><b id="bSalePrice"></b>
                    </div>
                    <div id="cardinput" style="display: none;">
                        <div class="form">
                            <label>
                                卡号：</label><b><input name="txtCardNo" type="text" id="txtCardNo" style="width:280px;" /></b><b id="cardNo"></b>
                        </div>
                        <div class="form">
                            <label>
                                卡密：</label><b><input name="txtCardPwd" type="password" id="txtCardPwd" style="width:280px;" /></b><b id="pwd"></b>
                        </div>
                    </div>
                    <div class="form">
                        <input type="submit" name="btnConfirm" value="" id="btnConfirm" class="sure" />
                    </div>
                    <input type="hidden" name="hfdLeastGold" id="hfdLeastGold" value="10" />
                    <h2>
                        温馨提示</h2>
                    <h3>
                        1、请确保您填写的用户名正确无误，因玩家输入错误而导致的任何损失由用户自行承担。<br />
                        2、充值过程中，浏览器会跳转至支付页面，支付成功后，会自动返回本网站，如果没有跳转或是弹出充值成功的页面，请您不要关闭充值窗口。<br />
                        3、遇到任何充值问题，请您联系客服中心。<br />                      
                      
                    </form>
                    <!-- step2 http://www.fdfh.net/req.asp-->
                    
                </div>
                <div class="bottom">
                </div>
                <div class="clear">
                </div>
            </div>
            <div class="clear">
            </div>
        </div>
        <div class="clear">
        </div>
    </div>
    
<div class="nav1">
    <div class="left">
    </div>
    <div class="center">
        <a href="/LawsInfo.aspx">法律连接</a>&nbsp;&nbsp;|&nbsp;&nbsp; <a href="../../SecurityPrivacy.aspx">隐私安全</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="../../service/Help.aspx" target="_blank">新手帮助</a>&nbsp;&nbsp;|&nbsp;&nbsp; <a href="../../Service/Help.aspx" target="_blank">客服中心</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="../../Service/Contact.aspx" target="_blank">联系我们</a>
    </div>
    <div class="right">
    </div>
    <div class="clear">
    </div>
</div>
<div class="copyright">
    <div class="box">
        Copyright © 2009-2015 皇家娱乐城.All Rights Reserved.<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1254052517'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1254052517%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));</script>
    </div>
        <div align="center"><td height="40" align="center" valign="middle"><table width="760" border="0" cellspacing="0" cellpadding="0">
        <tr>
        <td width="152" align="left" valign="middle"><img src="/images/ww1.gif" width="147" height="60" /></td>
        <td width="152" align="left" valign="middle"><img src="/images/ww2.gif" width="147" height="60" /></td>
        <td width="152" align="left" valign="middle"><img src="/images/ww3.png" width="147" height="60" /></td>
        <td width="152" align="left" valign="middle"><img src="/images/ww4.png" width="147" height="60" /></td>
        <td width="152" align="left" valign="middle"><img src="/images/ww5.png" width="147" height="60" /></td>
        </tr></div>
</div>

</body>
</html>

<script type="text/javascript">
    function checkAccounts() {
        var accounts = document.getElementById("txtAccounts");
        if (accounts.value == "") {
            hintMessage("bAccounts", "error", "请输入游戏帐号");
            return false;
        }
        hintMessage("bAccounts", "right", "");
        return true;
    }

    function hintMessage(hintObj, error, message) {
        if (error == "error") {
            $("#" + hintObj + "").removeClass("rightTips");
            $("#" + hintObj + "").addClass("wrongTips");
        } else {
            $("#" + hintObj + "").removeClass("wrongTips");
            $("#" + hintObj + "").addClass("rightTips");
        }

        $("#" + hintObj + "").html(message);
    }

    function checkReAccounts() {
        var ReAccounts = document.getElementById("txtReAccounts");
        if (ReAccounts.value == "") {
            hintMessage("bReAccounts", "error", "请输入游戏帐号");
            return false;
        }
        if ($("#txtAccounts").val() != $("#txtReAccounts").val()) {
            hintMessage("bReAccounts", "error", "两次输入的账号不一致");
            return false;
        }
        hintMessage("bReAccounts", "right", "");
        return true;
    }

    function checkSalePrice() {
        var salePrice = document.getElementById("txtSalePrice");
        if (salePrice.value == "") {
            hintMessage("bSalePrice", "error", "请输入充值金额");
            return false;
        }
        var leastGold = document.getElementById("hfdLeastGold").value;
        if (!IsNumeric(salePrice.value) || parseInt(salePrice.value) < parseInt(leastGold)) {
            hintMessage("bSalePrice", "error", "充值金额至少" + leastGold + "元");
            return false;
        }

        if (!IsPositiveInt(salePrice.value)) {
            hintMessage("bSalePrice", "error", "充值金额必须是整数");
            return false;
        }

        if (salePrice.value > 5000) {
            hintMessage("bSalePrice", "error", "充值金额不能超过5000元");
            return false;
        }
        hintMessage("bSalePrice", "right", "");
        return true;
    }
    function checkCardAmt() {
        var amt = document.getElementById("txtCardAmt");
        if (amt.value == "") {
            hintMessage("amt", "error", "请输入卡额");
            return false;
        }
        hintMessage("amt", "right", "");
        return true;
    }
    function checkCardNo() {
        var cardNo = document.getElementById("txtCardNo");
        if (cardNo.value == "") {
            hintMessage("cardNo", "error", "请输入卡号");
            return false;
        }
        hintMessage("cardNo", "right", "");
        return true;
    }
    function checkCardPwd() {

        var pwd = document.getElementById("txtCardPwd");
        if (pwd.value == "") {
            hintMessage("pwd", "error", "请输入卡密");
            return false;
        }
        hintMessage("pwd", "right", "");
        return true;
    }
    function checkInput() {
        if (!checkAccounts()) { $("#txtAccounts").focus(); return false; }
        if (!checkReAccounts()) { $("#txtReAccounts").focus(); return false; }
        if (!checkSalePrice()) { $("#txtSalePrice").focus(); return false; }
        var flag = true;
        $("#cardinfo > input[name=rblCardList]").each(function() {
            if (this.checked) {
                if (!checkCardInput())
                    flag = false;
            }
        });
        return flag;
    }
    function checkCardInput() {
        // if (!checkCardAmt()) { $("#txtCardAmt").focus(); return false; }

        if (!checkCardNo()) { $("#txtCardNo").focus(); return false; }
        if (!checkCardPwd()) { $("#txtCardPwd").focus(); return false; }
        return true;
    }

    $(document).ready(function() {
        $("#bSalePrice").html("(至少" + document.getElementById("hfdLeastGold").value + "元)");
         $("#txtSalePrice").val(document.getElementById("hfdLeastGold").value);
        $("#txtAccounts").blur(function() { checkAccounts(); });
        $("#txtReAccounts").blur(function() { checkReAccounts() });
        $("#txtSalePrice").blur(function() { checkSalePrice(); });
        //$("#txtCardAmt").blur(function() { checkCardAmt(); });
        $("#txtCardNo").blur(function() { checkCardNo(); });
        $("#txtCardPwd").blur(function() { checkCardPwd(); });
        $("#btnConfirm").click(function() {
            return checkInput();
        });

        $("#cardinfo > input[name=rblCardList]").each(function() {
            $(this).click(function() {
                $("#cardinput").css("display", "inline");
                GetValue($(this)[0].id);
                $("#sel_price").css("display", "inline");
                $("#txtSalePrice").val($("#sel_price").val()).css("display", "none");
                $("#bSalePrice").css("display", "none");
            });
        });
        $("#bankinfo > input[name=rblCardList]").each(function() {
            $(this).click(function() {
                $("#cardinput").css("display", "none");
                $("#sel_price").css("display", "none");
                $("#txtSalePrice").css("display", "inline");
                $("#bSalePrice").css("display", "inline");
            });
        });

        $("#sel_price").change(function() {
            $("#txtSalePrice").val($(this).val());
        })
    });
    
</script>

