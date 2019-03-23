<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" /> 
    <title>微信支付样例-统一下单</title>
</head>
<?php
require_once "./libs/native.php";

$response = array();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $token = test_input($_POST["token"]);
    $mch_id = test_input($_POST["mch_id"]);
    $out_trade_no = test_input($_POST["out_trade_no"]);
    $body = test_input($_POST["body"]);
    $total_fee = test_input($_POST["total_fee"]);
    $mch_create_ip = test_input($_POST["mch_create_ip"]);
    $notify_url = test_input($_POST["notify_url"]);
    $secret = test_input($_POST["secret"]);
    $nonce_str = time();

    $data = array(
        "mch_id" => $mch_id,
        "out_trade_no" => $out_trade_no,
        "body" => $body,
        "total_fee" => $total_fee,
        "mch_create_ip" => $mch_create_ip,
        "notify_url" => $notify_url,
        "nonce_str" => $nonce_str,
    );

    $response = wx_native($config, $data, $secret, $token);
}

?>
<body>  
<form action="#" method="post">
    <div style="margin-left:2%;color:#f00">微信统一下单接口：</div><br/>
    <div style="margin-left:2%;">Access Token：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="token" value="" /><br /><br />
    <div style="margin-left:2%;">商户号：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="mch_id" value="1000000" /><br /><br />
    <div style="margin-left:2%;">商户订单号：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="out_trade_no" value="<?= time() ?>" /><br /><br />
    <div style="margin-left:2%;">商品描述：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="body" value="<?= "测试数据" ?>" /><br /><br />
    <div style="margin-left:2%;">总金额：(单位:分)</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="total_fee" value="<?= "1" ?>" /><br /><br />
    <div style="margin-left:2%;">终端IP：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="mch_create_ip" value="<?= "127.0.0.1" ?>" /><br /><br />
    <div style="margin-left:2%;">通知地址：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="notify_url" value="<?= "http://localhost/sdk/callback.php" ?>" /><br /><br />
    <div style="margin-left:2%;">商户密钥：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="secret" value="f72988cb26794cbb84542a20a3a0c42b"/><br /><br />
    <div align="center">
        <input type="submit" value="下订单" style="width:210px; height:50px; border-radius: 15px;background-color:#FE6714; border:0px #FE6714 solid; cursor: pointer;  color:white;  font-size:16px;" type="button" onclick="callpay()" />
    </div>
</form>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
?>
<hr />
<div>
        <?php 
        echo "下单单号：".test_input($_POST["out_trade_no"])."<br />";
        if(!empty($response)) {
            if($response["status"] == 0 && $response["result_code"] == 0) {
        ?>
        <img src="qrcode.php?content=<?= $response["code_url"] ?>" />
        <?php
            } else {
        ?>
        <pre>
            <?= $response["message"] ?>
        </pre>
        <br />
        <pre>
            <?= $response["err_code"] ?> <?= $response["err_msg"] ?>
        </pre>
        <?php
            }
        } else {
            echo "无返回";
        }
        ?>
</div>

<?php
    }
?>

</body>
</html>

