
$(document).ready(function () {
    //instscript('/misc/payment/md5.js');
    instscript('/misc/payment/amount.js');
    instscript('/misc/payment/banks.js');


    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show();
    $(".tab_content:first").show();


    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();

        return false;
    });
    var timeout = null;
    $("#servers").click(function () {
        $(".popservers").show().mouseleave(function () {
            $(this).hide()
        }).mouseover(function () { clearTimeout(timeout); })

    }).mouseleave(function () {
        timeout = setTimeout(function () { $(".popservers").hide() }, 300);
    })
    $(".popservers li").click(function () {
        $("#servers").attr("data", $(this).attr("value"));
        $("#servers").attr("value", $(this).attr("value"));
        $("#servers").val($(this).attr("data"));
        $(".popservers").hide();

    })
    $("#username").blur(function () {
        $.ajax({ url: "/api/pay20/checkparams.ashx?type=haveuser",
            data: "userid=" + $("#username").val() + "&mr=" + Math.random(),
            success: function (rt) {
                var error = $("span[for=username]")
                if (rt != "200") {
                    //$("#username").focus();
                    $(".on-pay-form").attr("disabled", "disabled");
                    selfshowerror("username", "err", rt);
                } else {
                    $(".on-pay-form").removeAttr("disabled");
                    selfshowerror("username", "", "输入正确");
                }
            }
        })

    })


    $("#username2").blur(function () {
        var u2 = $(this).val();
        if (u2.length > 0) {
            var error = $("span[for=username2]")
            if (u2 != $("#username").val()) {
                selfshowerror("username2", "err", "两次输入的账号名不一致!");
            } else {
                selfshowerror("username2", "", "输入正确");
            }
        }
    })

    $("#money").keyup(function () { checkmoney("#money") });


    $(".on-pay-form").click(function () { postPayForm(); })
});
var creaduser = '<a href="/play/{serverid}.html" target="_blank">建立角色</a>';

var maxLength = 6;
function checkmoney(fit) {
    var val = $(fit).val();
    if (val.length > maxLength) {
        val = val.substring(0, maxLength);
        $(fit).val(val);
    }
    var error = $("span[for=money]");
    var cre = /^\d{1,6}$/;
    var bol = cre.test(val);
    if (!bol || parseInt(val) > 100000 || parseInt(val) < 1) {
        selfshowerror("money", "err", "金额输入有误,请检查");
    } else {
        selfshowerror("money", "", "输入正确");

        var bit = $("#get_game_money").attr("data");
        var game_money = Math.round(val * bit);
        $("#get_game_money").html(game_money);

        $("input[name='pay_money']").val(val);
        $("input[name='get_name_money']").val(game_money);
    }
}

function instscript(path) {
    var fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", path);
    document.getElementsByTagName("head")[0].appendChild(fileref);
}

function postPayForm() {
//    if ($("input[name='pay_away']").val() == "") {
//        showError("请先选择充值方式");
//        return;
//    }
    if (typeof chetype != "undefined") {
        switch (chetype) {
            case "bank": var gk = false;
                $(".popbanklis li").each(function (l, g) { if ($(g).hasClass("on")) { gk = true; } })
                if (!gk) { showError("请选择银行"); return; }
                break;

            case "credit":
                var ckb = false;

                ckb = chrError("input[name='pama2']", "信用卡号 不能为空"); if (!ckb) { return false; }
                ckb = chrError("input[name='pama3']", "证件号码 不能为空"); if (!ckb) { return false; }
                ckb = chrError("input[name='pama4']", "手机号 不能为空"); if (!ckb) { return false; }
                ckb = chrError("input[name='pama5']", "消费者姓名 不能为空"); if (!ckb) { return false; }
                ckb = chrError("input[name='pama7']", "有效期(年) 不能为空"); if (!ckb) { return false; }
                ckb = chrError("input[name='pama8']", "有效期(月) 不能为空"); if (!ckb) { return false; }
                ckb = chrError("input[name='pama9']", "CVV 码 不能为空"); if (!ckb) { return false; }
                ckb = chrError("input[name='pama10']", "发卡行编码 不能为空"); if (!ckb) { return false; }
                ckb = chrError("input[name='pama11']", "信用卡卡种 不能为空"); if (!ckb) { return false; }
                if (!ckb) {
                    return false;
                }
                break;

            case "dianka":
                var ckb = false;
                ckb = chrError("input[name='sp_card']", "卡号 不能为空");
                ckb = chrError("input[name='sp_password1']", "密码 不能为空");
                ckb = chrError("input[name='sp_password']", "密码 不能为空");
                if ($("input[name='sp_password']").val() != $("input[name='sp_password1']").val()) {
                    ckb = false;
                    showError("两次密码不一致");
                }
                if (!ckb) {
                    return false;
                }
                break;
            default:

        }
    }
    $("input[name='spantime']").val(Math.round(new Date().getTime() / 1000));
    $("input[name='guid']").val(function () { var guid = ""; for (var i = 1; i <= 32; i++) { var n = Math.floor(Math.random() * 16.0).toString(16); guid += n; if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) { guid += "-"; } } return guid; });
    $("input[name='referrer']").val(window.location);
    $("input[name='server_name']").val($("#servers").attr("value"));
    $("input[name='server_id']").val($("#servers").attr("data"));
    $("input[name='pay_user']").val($("#username2").val());
    $("input[name='pay_money']").val($("#money").val());
    $("input[name='get_name_money']").val($("#get_game_money").html());
    selfshowerror("username", "", "输入正确");
    selfshowerror("username2", "", "输入正确");
    selfshowerror("servers", "", "输入正确");
    selfshowerror("money", "", "输入正确");
    if ($("#username").val() == "") {
        selfshowerror("username", "err", "用户名不能为空");
        return;
    }
    if ($("#username2").val() != $("#username").val()) {
        selfshowerror("username2", "err", "两次输入不一致,请检查");
        return;
    }
    if ($("input[name='server_id']").val() == "") {
        selfshowerror("servers", "err", "请选择服务器");
        return;
    }
    if ($("input[name='pay_money']").val() == "" || parseInt($("input[name='pay_money']").val()) < 1) {
        showError("充值金额必须大于零,请检查");
        return;
    }

    var canpost = false;
    var postmsg = "";
    var _data = "";
    $("#adads input").each(function (i, j) { _data += j.name + "=" + j.value + "&"; });

    _data += "mini=" + $("#pay_setup_1 li a.current").attr("premiun") + "_moneys"; //premiun

    $.ajax({
        async: false,
        data: _data,
        cache: false,
        url: '/api/pay20/checkparams.ashx?type=all',
        success: function (s) {
            if (s == "200") { canpost = true; }
            else { postmsg = s; }
        }
    });
    if (canpost) {
        $(window).scrollTop(0);
        if ($("input[name='pay_away']").val() == 'weixinpay') {
            layer.load('正在提交订单请稍后...', 5000);

            $("#img_div").css("display", "bolck");
            var money = $("input[name='pay_money']").val();
            $("#wxRMB").html(money);
            $("#adads").ajaxForm({
                error: function () {
                    layer.closeAll();
                    layer.alert("无法连接到支付服务器，请刷新后重试。");
                },
                success: function (x) {
                    $("#img").attr("src", x + "?m=" + Math.random())
                    layer.closeAll();
                    if (typeof shade_ == "undefined") {
                        shade_ = true;
                    }
                    
                    var i = $.layer({
                        type: 1,
                        title: false,
                        fix: false,
                        shade: (shade_ ?   [0.5, '#000']:false),
                        offset: ['50px', ''],
                        area: ['460px', '600px'],
                        page: { dom: '#img_div' }
                    });
                }
            });
            $("#adads").submit();

            return;
        }


        $(".wait-pay-mask").height($(window.document.body).height() + 50).show();
        $(".wait-pay").show().css("left", (($(window).width() / 2) - ($(".wait-pay").width() / 2)));


        $("#adads").submit();
    } else {
        showError(postmsg);
    }
}

function selfshowerror(eml, cls, msg) {
    var error = $("span[for=" + eml + "]");
    if (cls == "err") {
        error.parent().removeClass("ok");
        error.html(msg);
        error.parent().addClass("err");
    } else {
        error.parent().removeClass("err");
        error.html(msg);
        error.parent().addClass("ok");
    }
}
function chrError(id, msg) {
    if ($(id).val() == "") {
        showError(msg);
        return false;
    }
    return true;
}
function showError(msg) {
    alert(msg);
}