<?php

$config = array();

// 获取access token的URL地址
$config["access_token_url"]="http://api.qftx1.com/api/auth/access-token";
// $config["access_token_url"]="http://localhost:8080/api/auth/access-token";

// 微信统一下单入口
$config["wx_native_url"]="http://api.qftx1.com/api/sig/v1/wx/native";
// $config["wx_native_url"]="http://localhost:8080/api/sig/v1/wx/native";

// 微信查询入品
$config["wx_query_url"]="http://api.qftx1.com/api/sig/v1/trade/query";
// $config["wx_query_url"]="http://localhost:8080/api/sig/v1/trade/query";

// 微信关闭入品
$config["wx_close_url"]="http://api.qftx1.com/api/sig/v1/wx/trade/close";

// 回调时使用的密钥
$config["callback_secret"]="972d9cc4be454cadbcc425b7af18c97b";

