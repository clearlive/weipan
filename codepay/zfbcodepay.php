<?php

error_reporting(0);
header("Content-type: text/html; charset=utf-8");

$pay_memberid = "190403180";   //商户ID
$pay_orderid = 'E'.date("YmdHis").rand(100000,999999);    //订单号
$pay_amount = (float)$_POST["price"];    //交易金额
$pay_applydate = date("Y-m-d H:i:s");  //订单时间
$pay_notifyurl = "http://".$_SERVER['SERVER_NAME']."/index/pay/alipay_notify";   //服务端返回地址
$pay_callbackurl = "http://".$_SERVER['SERVER_NAME'];  //页面跳转返回地址
$Md5key = "sis5yxs479o2a52nnv0iwnhbnd683so9";   //密钥
$tjurl = "http://www.jilanj.com/Pay_Index.html";   //提交地址
$pay_bankcode = "912";   //银行编码

$res = db('balance')->insert(['bptype'=>3,'bptime'=>time(),'uid'=>123,'bpprice'=>23,'btime'=>time(),'balance_sn'=>'sad','pay_type'=>'zhifubao']);

//扫码


$native = array(
    "pay_memberid" => $pay_memberid,
    "pay_orderid" => $pay_orderid,
    "pay_amount" => $pay_amount,
    "pay_applydate" => $pay_applydate,
    "pay_bankcode" => $pay_bankcode,
    "pay_notifyurl" => $pay_notifyurl,
    "pay_callbackurl" => $pay_callbackurl,
    "username"=>$_POST['user']
);
ksort($native);
$md5str = "";
foreach ($native as $key => $val) {
    $md5str = $md5str . $key . "=" . $val . "&";
}
//echo($md5str . "key=" . $Md5key);
$sign = strtoupper(md5($md5str . "key=" . $Md5key));
$native["pay_md5sign"] = $sign;
$native['pay_attach'] = "1234|456";
$native['pay_productname'] ='213321';
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>支付Demo</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="container">
    <div class="row" style="margin:15px;0;">
        <div class="col-md-12">
            <form class="form-inline" method="post" action="<?php echo $tjurl; ?>">
                <?php
                foreach ($native as $key => $val) {
                    echo '<input type="hidden" name="' . $key . '" value="' . $val . '">';
                }
                ?>
                <button style="margin-top: 90%;margin-left: 10%" type="submit" class="btn btn-success btn-lg">确认支付(金额：<?php echo $pay_amount; ?>元)</button>
            </form>
        </div>
    </div>
</div>
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
</body>
</html>