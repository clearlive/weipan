<?php

require_once "config.php";
require_once "cache.php";
require_once "common.php";

function wx_close($config, $data, $secret, $token) {

    $sign = sign($data, $secret);
    $data["sign"]=$sign;

    $xmlData = arrayToXml($data);

     // 设置access token时，可以在url中，带上token参数，如下：
    // $url = $config["wx_native_url"]."?token=".$token; 
    // 也可以通过http header去设置
    $url = $config["wx_close_url"];
    
    $header[] = "Content-type: text/xml";      
    
        // 使用Http header设置 token
    $header[1] = "Authorization: Bearer ".$token;
    $ch = curl_init ($url);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch, CURLOPT_HTTPHEADER,$header);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch,CURLOPT_POSTFIELDS, $xmlData);
    $response = curl_exec($ch);
    if(curl_errno($ch)){
        printcurl_error($ch);
    }
    curl_close($ch);

    echo $response;
    return xmlToArray($response);
}