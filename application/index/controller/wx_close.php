<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" /> 
    <title>微信支付样例-关闭订单接口</title>
</head>
<?php
require_once "./libs/close.php";

$response = array();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $token = test_input($_POST["token"]);
    $mch_id = test_input($_POST["mch_id"]);
    $out_trade_no = test_input($_POST["out_trade_no"]);
    $transaction_id = test_input($_POST["transaction_id"]);
    $secret = test_input($_POST["secret"]);
    $nonce_str = time();

    $data = array(
        "mch_id" => $mch_id,
        "nonce_str" => $nonce_str,
    );

    if(!empty($out_trade_no)) {
        $data["out_trade_no"] = $out_trade_no;
    }
    if(!empty($transaction_id)) {
        $data["transaction_id"] = $transaction_id;
    }
    
    $response = wx_close($config, $data, $secret, $token);
    print_r($response);
}

?>
<body>  
<form action="" method="post">
    <div style="margin-left:2%;color:#f00">微信关闭订单接口：</div><br/>
    <div style="margin-left:2%;">Access Token：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="token" value="" /><br /><br />
    <div style="margin-left:2%;">商户号：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="mch_id" value="1000000" /><br /><br />
    <div style="margin-left:2%;">商户订单号：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="out_trade_no" value="" /><br /><br />
    <div style="margin-left:2%;">平台订单号：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="transaction_id" value="" /><br /><br />
    <div style="margin-left:2%;">商户密钥：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="secret" value="f72988cb26794cbb84542a20a3a0c42b"/><br /><br />
    <div align="center">
        <input type="submit" value="查询" style="width:210px; height:50px; border-radius: 15px;background-color:#FE6714; border:0px #FE6714 solid; cursor: pointer;  color:white;  font-size:16px;" type="button" onclick="callpay()" />
    </div>
</form>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
?>

<hr />
<div>
        <?php 
        if(!empty($response)) {
            if($response["status"] == 0 && $response["result_code"] == 0) {
        ?>
        <pre>
            <?= $response["trade_state"] ?>
        </pre>
        <?php
            } else {
        ?>
        <pre>
            <?= $response["message"] ?>
        </pre>
        <br />
        <pre>
            <?= isset($response["err_code"])?$response["err_code"]:"" ?> 
            <?= isset($response["err_msg"])?$response["err_msg"]:"" ?>
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

