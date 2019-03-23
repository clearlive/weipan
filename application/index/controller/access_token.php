<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" /> 
    <title>微信支付样例-统一下单</title>
</head>
<?php
require_once "./libs/access_token.php";

$access_token="";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $appid = test_input($_POST["appid"]);
    $secret = test_input($_POST["secret"]);
    $access_token = get_access_token($config, $appid, $secret);
  }
  

?>
<body>  
<form action="#" method="post">
    <div style="margin-left:2%;color:#f00">获取access_token：</div><br/>
    <div style="margin-left:2%;">商户号：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="appid" value="1000000"/><br /><br />
    <div style="margin-left:2%;">商户密钥：</div><br/>
    <input type="text" style="width:96%;height:35px;margin-left:2%;" name="secret" value="f72988cb26794cbb84542a20a3a0c42b"/><br /><br />
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
</body>
</html>

